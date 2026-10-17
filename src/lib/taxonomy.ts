import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/config';
import { localizeRecipe, type LocalizedRecipe } from '../i18n/utils';

export const RECIPE_CATEGORIES = ['plat', 'accompagnement', 'boisson', 'dessert'] as const;
export type RecipeCategory = (typeof RECIPE_CATEGORIES)[number];

export type TaxonomyRecipe = {
  recipe: CollectionEntry<'recettes'>;
  localized: LocalizedRecipe;
};

export type RegionTaxonomy = {
  slug: string;
  /** Clé canonique FR (frontmatter source). */
  key: string;
  label: string;
  recipes: TaxonomyRecipe[];
};

export type CategoryTaxonomy = {
  slug: RecipeCategory;
  recipes: TaxonomyRecipe[];
};

export function slugifyTaxonomy(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/&/g, ' et ')
    .replace(/[·•]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function sortRecipes(items: TaxonomyRecipe[], locale: Locale) {
  return [...items].sort((a, b) =>
    a.localized.title.localeCompare(b.localized.title, locale),
  );
}

export async function getRegionTaxonomies(locale: Locale): Promise<RegionTaxonomy[]> {
  const recipes = await getCollection('recettes');
  const bySlug = new Map<string, RegionTaxonomy>();

  for (const recipe of recipes) {
    const key = recipe.data.region?.trim();
    if (!key) continue;

    const slug = slugifyTaxonomy(key);
    const localized = localizeRecipe(recipe, locale);
    const existing = bySlug.get(slug);

    if (existing) {
      if (existing.key !== key) {
        throw new Error(
          `Collision de slug région « ${slug} » entre « ${existing.key} » et « ${key} »`,
        );
      }
      existing.recipes.push({ recipe, localized });
      continue;
    }

    bySlug.set(slug, {
      slug,
      key,
      label: localized.region ?? key,
      recipes: [{ recipe, localized }],
    });
  }

  return [...bySlug.values()]
    .map((group) => ({ ...group, recipes: sortRecipes(group.recipes, locale) }))
    .sort((a, b) => a.label.localeCompare(b.label, locale));
}

export async function getRegionTaxonomy(
  slug: string,
  locale: Locale,
): Promise<RegionTaxonomy | undefined> {
  return (await getRegionTaxonomies(locale)).find((region) => region.slug === slug);
}

export async function getCategoryTaxonomies(locale: Locale): Promise<CategoryTaxonomy[]> {
  const recipes = await getCollection('recettes');
  return RECIPE_CATEGORIES.map((category) => ({
    slug: category,
    recipes: sortRecipes(
      recipes
        .filter((recipe) => recipe.data.category === category)
        .map((recipe) => ({ recipe, localized: localizeRecipe(recipe, locale) })),
      locale,
    ),
  })).filter((group) => group.recipes.length > 0);
}

export async function getCategoryTaxonomy(
  slug: string,
  locale: Locale,
): Promise<CategoryTaxonomy | undefined> {
  if (!RECIPE_CATEGORIES.includes(slug as RecipeCategory)) return undefined;
  return (await getCategoryTaxonomies(locale)).find((category) => category.slug === slug);
}

export function regionSlugFromKey(region?: string): string | undefined {
  const key = region?.trim();
  return key ? slugifyTaxonomy(key) : undefined;
}
