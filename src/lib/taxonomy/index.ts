/**
 * Shared Mpichi region taxonomy (catalog + sync helpers).
 * Dataset export uses the sibling .mjs modules; this file is for the Astro site.
 */
import regionsCatalog from './regions.json';

export type RegionId = (typeof regionsCatalog.regions)[number]['id'] | 'other';

export type RegionLabel = { fr: string; en: string };

export function getRegionsCatalog() {
  return regionsCatalog;
}

/** Map free-text frontmatter region → canonical id. */
export function regionIdFromKey(region?: string): RegionId {
  const key = region?.trim();
  if (!key) return 'other';
  const lower = key.toLowerCase();
  for (const r of regionsCatalog.regions) {
    if (r.match.some((m) => m.toLowerCase() === lower)) return r.id as RegionId;
  }
  return 'other';
}

export function regionLabelFromId(id: RegionId): RegionLabel {
  const hit = regionsCatalog.regions.find((r) => r.id === id);
  if (hit) return { fr: hit.label.fr, en: hit.label.en };
  return { fr: regionsCatalog.fallback.label.fr, en: regionsCatalog.fallback.label.en };
}
