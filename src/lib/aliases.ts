import raw from '../../mpichi-dataset/enrichment/aliases.json';

export type AliasEntry = {
  name: string;
  lang?: string;
  note?: string;
  region_hint?: string;
  script?: string;
};

type AliasesMap = Record<string, AliasEntry[]>;

const aliases = raw as AliasesMap;

/** Alternate names for a recipe slug (search / discovery). */
export function aliasNamesForSlug(slug: string): string[] {
  const rows = aliases[slug];
  if (!rows?.length) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const row of rows) {
    const name = row.name?.trim();
    if (!name) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(name);
  }
  return out;
}

/** Space-joined blob for catalogue `data-search`. */
export function aliasSearchBlob(slug: string): string {
  return aliasNamesForSlug(slug).join(' ');
}
