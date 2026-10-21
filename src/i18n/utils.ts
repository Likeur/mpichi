import type { CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, type Locale } from './config';
import { ui, type UiKey } from './ui';
import { recipeTranslationsEn } from './recipes-en';
import { guideTranslationsEn } from './guides-en';
import { slugFromRecipeId } from '../lib/recipe-theme';

export function getLocaleFromUrl(url: URL): Locale {
  const [, maybeLocale] = url.pathname.split('/');
  const candidate = maybeLocale ?? '';
  return isLocale(candidate) ? candidate : defaultLocale;
}

export function localePath(path: string, locale: Locale = defaultLocale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return normalized === '' ? '/' : normalized;
  if (normalized === '/') return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const parts = pathname.split('/');
  if (parts[1] && isLocale(parts[1])) {
    const rest = parts.slice(2).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

export function switchLocalePath(pathname: string, target: Locale): string {
  return localePath(stripLocaleFromPath(pathname), target);
}

export function useTranslations(locale: Locale) {
  return function t(key: UiKey, vars?: Record<string, string | number>) {
    const dictionary = ui[locale] ?? ui[defaultLocale];
    let value: string = dictionary[key] ?? ui[defaultLocale][key] ?? key;
    if (vars) {
      for (const [name, replacement] of Object.entries(vars)) {
        value = value.replaceAll(`{${name}}`, String(replacement));
      }
    }
    return value;
  };
}

export function recipeCountLabel(locale: Locale, count: number) {
  const t = useTranslations(locale);
  const padded = String(count).padStart(2, '0');
  return count > 1
    ? t('recipes.countPlural', { n: padded })
    : t('recipes.count', { n: padded });
}

export type LocalizedRecipe = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  region?: string;
  imageAlt: string;
  prepTime: string;
  cookTime: string;
  difficulty: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  body?: string;
  image: string;
  imagePosition: string;
  imageCredit: string;
  imageCreditUrl: string;
  servings: number;
  category: CollectionEntry<'recettes'>['data']['category'];
  featured: boolean;
  video?: CollectionEntry<'recettes'>['data']['video'];
};


export function localizeRecipe(
  recipe: CollectionEntry<'recettes'>,
  locale: Locale,
): LocalizedRecipe {
  const slug = slugFromRecipeId(recipe.id);
  const t = useTranslations(locale);
  const base = recipe.data;
  const translated = locale === 'en' ? recipeTranslationsEn[slug] : undefined;

  return {
    slug,
    title: translated?.title ?? base.title,
    seoTitle: translated?.seoTitle ?? base.seoTitle,
    description: translated?.description ?? base.description,
    region: translated?.region ?? base.region,
    imageAlt: translated?.imageAlt ?? base.imageAlt,
    prepTime: translated?.prepTime ?? base.prepTime,
    cookTime: translated?.cookTime ?? base.cookTime,
    difficulty: t(`difficulty.${base.difficulty}` as UiKey),
    ingredients: translated?.ingredients ?? base.ingredients,
    steps: translated?.steps ?? base.steps,
    tags: translated?.tags ?? base.tags,
    body: translated?.body,
    image: base.image,
    imagePosition: base.imagePosition,
    imageCredit: base.imageCredit,
    imageCreditUrl: base.imageCreditUrl,
    servings: base.servings,
    category: base.category,
    featured: base.featured,
    video: base.video,
  };
}

export function isRecipeDetailPath(pathname: string) {
  return /\/recettes\/.+/.test(pathname);
}

export function isRecipeCatalogPath(pathname: string) {
  return pathname === '/recettes' || pathname === '/en/recettes';
}

export type LocalizedGuide = {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  intro: string;
  body?: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl: string;
  relatedRecipes: string[];
  order: number;
};

export function localizeGuide(guide: CollectionEntry<'guides'>, locale: Locale): LocalizedGuide {
  const slug = slugFromRecipeId(guide.id);
  const translated = locale === 'en' ? guideTranslationsEn[slug] : undefined;
  const base = guide.data;

  return {
    slug,
    title: translated?.title ?? base.title,
    seoTitle: translated?.seoTitle ?? base.seoTitle,
    description: translated?.description ?? base.description,
    intro: translated?.intro ?? base.intro,
    body: translated?.body,
    image: base.image,
    imageAlt: translated?.imageAlt ?? base.imageAlt,
    imageCredit: base.imageCredit,
    imageCreditUrl: base.imageCreditUrl,
    relatedRecipes: base.relatedRecipes,
    order: base.order,
  };
}
