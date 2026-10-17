import type { CollectionEntry } from 'astro:content';
import { slugFromRecipeId } from './recipe-theme';

function scoreRelated(
  current: CollectionEntry<'recettes'>,
  candidate: CollectionEntry<'recettes'>,
): number {
  let score = 0;
  if (current.data.region && candidate.data.region === current.data.region) score += 3;
  if (candidate.data.category === current.data.category) score += 1;

  const tags = new Set(current.data.tags ?? []);
  for (const tag of candidate.data.tags ?? []) {
    if (tags.has(tag)) score += 2;
  }

  return score;
}

/** Recettes proches par région, tags, puis catégorie (max `limit`). */
export function pickRelatedRecipes(
  current: CollectionEntry<'recettes'>,
  all: CollectionEntry<'recettes'>[],
  limit = 3,
): CollectionEntry<'recettes'>[] {
  const currentSlug = slugFromRecipeId(current.id);
  const others = all.filter((recipe) => slugFromRecipeId(recipe.id) !== currentSlug);

  const ranked = others
    .map((recipe) => ({ recipe, score: scoreRelated(current, recipe) }))
    .filter((entry) => entry.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.recipe.data.title.localeCompare(b.recipe.data.title, 'fr'),
    )
    .map((entry) => entry.recipe);

  if (ranked.length >= limit) return ranked.slice(0, limit);

  const rankedIds = new Set(ranked.map((recipe) => recipe.id));
  const fillers = others
    .filter(
      (recipe) =>
        !rankedIds.has(recipe.id) && recipe.data.category === current.data.category,
    )
    .sort((a, b) => a.data.title.localeCompare(b.data.title, 'fr'));

  return [...ranked, ...fillers].slice(0, limit);
}
