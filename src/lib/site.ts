/** Canonical production origin — override with SITE in env / astro.config. */
export const SITE_NAME = 'Mpichi';
export const SITE_URL = 'https://mpichi.likeur.xyz';
export const SITE_AUTHOR = 'Likeur';
export const SITE_AUTHOR_URL = 'https://likeur.xyz';
export const DEFAULT_OG_IMAGE = '/og-default.jpg';

export function absoluteUrl(path = '/', origin = SITE_URL): string {
  const base = origin.replace(/\/$/, '');
  if (!path || path === '/') return `${base}/`;
  return path.startsWith('http') ? path : `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Convert loose FR/EN duration strings ("30 min", "1 h", "1 h 30") to ISO-8601. */
export function toIsoDuration(value?: string): string | undefined {
  if (!value) return undefined;
  const normalized = value
    .toLowerCase()
    .replace(/hours?|heures?/g, 'h')
    .replace(/minutes?|mins?/g, 'min')
    .replace(/\s+/g, ' ')
    .trim();

  let hours = 0;
  let minutes = 0;
  const hourMatch = normalized.match(/(\d+)\s*h/);
  const minMatch = normalized.match(/(\d+)\s*min/);
  if (hourMatch) hours = Number(hourMatch[1]);
  if (minMatch) minutes = Number(minMatch[1]);
  if (!hourMatch && !minMatch) {
    const bare = normalized.match(/^(\d+)$/);
    if (bare) minutes = Number(bare[1]);
  }
  if (!hours && !minutes) return undefined;
  if (hours && minutes) return `PT${hours}H${minutes}M`;
  if (hours) return `PT${hours}H`;
  return `PT${minutes}M`;
}
