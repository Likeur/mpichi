/**
 * Shared Mpichi region taxonomy (catalog + sync helpers).
 * Dataset export uses the sibling .mjs modules; this file is for the Astro site.
 */
import regionsCatalog from './regions.json';

export type RegionId = (typeof regionsCatalog.regions)[number]['id'] | 'other';

export type RegionLabel = { fr: string; en: string; ln: string };

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
  if (hit) return { fr: hit.label.fr, en: hit.label.en, ln: hit.label.ln };
  return { fr: regionsCatalog.fallback.label.fr, en: regionsCatalog.fallback.label.en, ln: regionsCatalog.fallback.label.ln };
}

/** Display label for a free-text frontmatter region in the active locale. */
export function localizedRegionLabel(
  region: string | undefined,
  locale: 'fr' | 'en' | 'ln',
): string | undefined {
  const key = region?.trim();
  if (!key) return undefined;
  if (locale === 'fr') return key;

  const id = regionIdFromKey(key);
  if (id !== 'other') return regionLabelFromId(id)[locale];

  // Compound leftovers not yet in the catalog: translate connectors only.
  if (locale === 'ln') {
    return key
      .replace(/\s*&\s*/g, ' mpe ')
      .replace(/\s+et\s+/gi, ' mpe ')
      .replace(/Sud-Est de la RDC/gi, 'RDC ya sud-est')
      .replace(/Forêts du bassin du Congo/gi, 'Mituya ya bassin ya Congo')
      .replace(/Ouest de la RDC/gi, 'Ouest ya RDC')
      .replace(/bassin du Congo/gi, 'bassin ya Congo')
      .replace(/fleuve Congo/gi, 'ebale ya Congo');
  }
  return key;
}
