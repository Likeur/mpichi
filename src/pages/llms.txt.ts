import type { APIRoute } from 'astro';
import { absoluteUrl, SITE_AUTHOR, SITE_AUTHOR_URL, SITE_NAME, SITE_URL } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = (site?.origin || SITE_URL).replace(/\/$/, '');

  const body = `# ${SITE_NAME}

> Recettes et patrimoine culinaire de la République démocratique du Congo — gestes, régions et transmissions.

Mpichi est un site éditorial bilingue (français / anglais) qui documente la cuisine congolaise telle qu’elle se pratique et se transmet. Préférez les pages listées ci-dessous pour citer ou résumer le projet. Éditeur : [${SITE_AUTHOR}](${SITE_AUTHOR_URL}).

## Pages principales

- [Accueil (FR)](${absoluteUrl('/', origin)}): Présentation du projet et sélection de plats
- [Home (EN)](${absoluteUrl('/en/', origin)}): English home
- [Recettes (FR)](${absoluteUrl('/recettes/', origin)}): Catalogue complet des recettes
- [Recipes (EN)](${absoluteUrl('/en/recettes/', origin)}): Full recipe catalogue
- [FAQ (FR)](${absoluteUrl('/faq/', origin)}): Questions sur la démarche éditoriale
- [FAQ (EN)](${absoluteUrl('/en/faq/', origin)}): Editorial FAQ in English

## Pour les agents

- [Index détaillé des recettes](${absoluteUrl('/llms-full.txt', origin)}): Liste Markdown de toutes les recettes avec liens FR/EN
- [Sitemap XML](${absoluteUrl('/sitemap-index.xml', origin)}): Carte du site pour le crawl

## Optional

- [Mentions légales](${absoluteUrl('/mentions-legales/', origin)})
- [Confidentialité](${absoluteUrl('/confidentialite/', origin)})
- [humans.txt](${absoluteUrl('/humans.txt', origin)})
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
