// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';
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
    AstroPWA({
      registerType: 'prompt',
      includeAssets: [
        'favicon.svg',
        'favicon.png',
        'favicon-48.png',
        'favicon-96.png',
        'apple-touch-icon.png',
        'icon-192.png',
        'icon-512.png',
        'og-default.jpg',
        'humans.txt',
        'robots.txt',
      ],
      manifest: {
        name: 'Mpichi — Catalogue de recettes congolaises',
        short_name: 'Mpichi',
        description:
          'Mpichi répertorie le catalogue des recettes congolaises de la République démocratique du Congo — gestes, régions et traditions.',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#2a1b15',
        theme_color: '#2a1b15',
        lang: 'fr',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/404',
        globPatterns: [
          '**/*.{css,js,mjs,html,svg,png,ico,txt,webp,woff2,jpg,jpeg,json,webmanifest}',
        ],
        // Skip bulky LLM dumps and sitemap XML from the offline shell.
        globIgnores: ['**/llms*.txt', '**/sitemap*.xml'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/commons\.wikimedia\.org\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'wikimedia-images',
              expiration: {
                maxEntries: 220,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/i\.ytimg\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'youtube-thumbs',
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  vite: {
    // Tailwind’s Vite plugin types can disagree with Astro’s bundled Vite copy.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
