import { getCollection } from 'astro:content';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../i18n/config';
import { localePath, localizeRecipe } from '../i18n/utils';
import { slugFromRecipeId } from './recipe-theme';
import { absoluteUrl } from './site';
import { resolveOrigin } from './seo';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function recipeMtime(slug: string): Date {
  try {
    return statSync(join(process.cwd(), 'src/content/recettes', `${slug}.md`)).mtime;
  } catch {
    return new Date(0);
  }
}

export async function buildRecipesRss(locale: Locale, site: URL | undefined): Promise<string> {
  const origin = resolveOrigin(site);
  const recipes = await getCollection('recettes');
  const items = recipes
    .map((recipe) => {
      const slug = slugFromRecipeId(recipe.id);
      const localized = localizeRecipe(recipe, locale);
      const mtime = recipeMtime(slug);
      return { slug, localized, mtime };
    })
    .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

  const feedUrl = absoluteUrl(localePath('/rss.xml', locale), origin);
  const homeUrl = absoluteUrl(localePath('/', locale), origin);
  const titles = {
    fr: 'Mpichi — nouvelles recettes',
    en: 'Mpichi — new recipes',
    ln: 'Mpichi — ba recettes ya sika',
  } as const;
  const descriptions = {
    fr: 'Flux des fiches recettes du catalogue Mpichi (cuisine congolaise, RDC).',
    en: 'Feed of Mpichi catalogue recipe cards (Congolese cuisine, DRC).',
    ln: 'Flux ya ba lokasa ya recettes na kataloge ya Mpichi (bilei ya Congo, RDC).',
  } as const;

  const xmlItems = items
    .map(({ slug, localized, mtime }) => {
      const link = absoluteUrl(localePath(`/recettes/${slug}`, locale), origin);
      return `    <item>
      <title>${escapeXml(localized.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(localized.description)}</description>
      <pubDate>${mtime.toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(titles[locale])}</title>
    <link>${escapeXml(homeUrl)}</link>
    <description>${escapeXml(descriptions[locale])}</description>
    <language>${locale === 'fr' ? 'fr-CD' : locale}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
${xmlItems}
  </channel>
</rss>
`;
}
