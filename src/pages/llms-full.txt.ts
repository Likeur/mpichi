import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { slugFromRecipeId } from '../lib/recipe-theme';
import { absoluteUrl, SITE_NAME, SITE_URL } from '../lib/site';
import { localizeRecipe } from '../i18n/utils';

export const prerender = true;

export const GET: APIRoute = async ({ site }) => {
  const origin = (site?.origin || SITE_URL).replace(/\/$/, '');
  const recipes = (await getCollection('recettes')).sort((a, b) =>
    a.data.title.localeCompare(b.data.title, 'fr'),
  );

  const lines = [
    `# ${SITE_NAME} — Recipe index`,
    '',
    '> Complete bilingual index of Congolese recipes documented on Mpichi.',
    '',
    'Each entry links to the French page first, then the English translation when available.',
    '',
    '## Recipes',
    '',
  ];

  for (const recipe of recipes) {
    const slug = slugFromRecipeId(recipe.id);
    const fr = localizeRecipe(recipe, 'fr');
    const en = localizeRecipe(recipe, 'en');
    const frUrl = absoluteUrl(`/recettes/${slug}/`, origin);
    const enUrl = absoluteUrl(`/en/recettes/${slug}/`, origin);
    const region = fr.region ? ` — ${fr.region}` : '';
    lines.push(
      `- [${fr.title}](${frUrl}) / [${en.title}](${enUrl}): ${fr.description}${region}`,
    );
  }

  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
