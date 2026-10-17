// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE || 'https://mpichi.likeur.xyz';

export default defineConfig({
  site,
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-CD',
          en: 'en',
        },
      },
      filter: (page) =>
        !page.includes('/llms') &&
        !page.endsWith('/robots.txt') &&
        !page.includes('/404') &&
        !page.endsWith('/404.html'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
