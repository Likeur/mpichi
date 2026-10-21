import { defineMiddleware } from 'astro:middleware';

const SKIP_PREFIXES = [
  '/_astro',
  '/node_modules',
  '/src',
  '/@',
  '/json',
  '/favicon',
  '/images',
  '/robots.txt',
  '/sitemap',
  '/llms',
  '/humans.txt',
  '/site.webmanifest',
  '/manifest.webmanifest',
  '/sw.js',
  '/workbox-',
  '/og-default',
];


function shouldSkip(pathname: string) {
  if (pathname === '/404' || pathname === '/404/') return true;
  return SKIP_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(prefix),
  );
}

/** Serve the custom 404 page instead of Astro's default diagnostic screen. */
export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  if (shouldSkip(pathname)) return next();

  const response = await next();
  if (response.status !== 404) return response;

  return context.rewrite(new URL('/404', context.url.origin));
});
