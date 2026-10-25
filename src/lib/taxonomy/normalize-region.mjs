/**
 * Normalize free-text recipe `region` → region_id + bilingual labels.
 * Shared by Mpichi site helpers and mpichi-dataset export.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

let cached = null;

export function loadRegionsCatalog(catalogPath = path.join(HERE, 'regions.json')) {
  if (cached && !catalogPath) return cached;
  const data = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const byMatch = new Map();
  for (const region of data.regions) {
    for (const m of region.match || []) {
      byMatch.set(normalizeKey(m), region);
    }
  }
  const catalog = { ...data, byMatch };
  if (catalogPath === path.join(HERE, 'regions.json')) cached = catalog;
  return catalog;
}

function normalizeKey(value) {
  return String(value || '')
    .normalize('NFC')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

/**
 * @param {string | undefined} regionText
 * @param {{ catalog?: ReturnType<typeof loadRegionsCatalog> }} [opts]
 * @returns {{
 *   region_id: string,
 *   region_label: { fr: string, en: string },
 *   region_legacy: string | undefined
 * }}
 */
export function normalizeRegion(regionText, opts = {}) {
  const catalog = opts.catalog || loadRegionsCatalog();
  const legacy = regionText?.trim() || undefined;
  if (!legacy) {
    return {
      region_id: catalog.fallback.id,
      region_label: { ...catalog.fallback.label },
      region_legacy: undefined,
    };
  }
  const hit = catalog.byMatch.get(normalizeKey(legacy));
  if (hit) {
    return {
      region_id: hit.id,
      region_label: { fr: hit.label.fr, en: hit.label.en },
      region_legacy: legacy,
    };
  }
  return {
    region_id: catalog.fallback.id,
    region_label: {
      fr: legacy,
      en: legacy,
    },
    region_legacy: legacy,
  };
}

export function listRegionIds(catalog = loadRegionsCatalog()) {
  return [...catalog.regions.map((r) => r.id), catalog.fallback.id];
}
