import type { APIRoute } from 'astro';
import { buildRecipesRss } from '../lib/rss';

export const GET: APIRoute = async ({ site }) => {
  const body = await buildRecipesRss('fr', site);
  return new Response(body, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
