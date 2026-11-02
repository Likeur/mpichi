/**
 * Generates src/i18n/recipes-ln.ts — Kinshasa Lingala from French recettes + EN keys.
 * Run: npx tsx scripts/generate-ln-i18n.mts
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { recipeTranslationsEn } from '../src/i18n/recipes-en.ts';
import type { RecipeTranslation, RecipeVariantTranslation } from '../src/i18n/recipes-en.ts';
import {
  REGION_EN,
  fixLinks,
  pickAndTranslateIngredients,
  pickAndTranslateLines,
  pickLnTitle,
  polishLn,
  translateBody,
  translateFrBody,
  translateFrDescription,
  translateFrImageAlt,
  translateFrRegion,
  translateFrSeoTitle,
  translateFrTag,
  translateFrTitle,
  translateTag,
  translateTime,
} from './ln-translate-lib.mts';

function polishVariantDesc(text: string): string {
  let s = text;
  s = s.replace(/^Version végétarienne$/i, 'Ndenge ya mboga (sans nyama to mbisi)');
  s = s.replace(/^À la viande$/i, 'Na nyama');
  s = s.replace(/^À la moambe fraîche$/i, 'Na moambe ya sika');
  s = s.replace(/^Without fish$/i, 'Sans mbisi');
  s = s.replace(/^Vegetarian version$/i, 'Ndenge ya mboga');
  s = s.replace(/^No fish or meat — fasting days or Friday meals\.$/i,
    'Sans mbisi to nyama — mikolo ya jeûne to bilei ya vendredi.');
  s = s.replace(/^Extraction des noix de palme — plus longue, goût plus floral\.$/i,
    'Kobimisa noix de palme — ezwami ntango mosusu, monoko ya malamu.');
  return polishLn(s);
}

type FrVariant = {
  id: string;
  title?: string;
  description?: string;
  imageAlt?: string;
  ingredients?: string[];
  steps?: string[];
};

function parseYamlList(fm: string, key: string): string[] | undefined {
  const lines = fm.split('\n');
  const idx = lines.findIndex((l) => l.trim() === `${key}:`);
  if (idx === -1) return undefined;
  const out: string[] = [];
  for (let i = idx + 1; i < lines.length; i++) {
    const l = lines[i];
    if (/^  - /.test(l)) out.push(l.slice(4).trim());
    else if (/^\S/.test(l) && !/^  /.test(l)) break;
  }
  return out.length ? out : undefined;
}

function parseFrRecipe(slug: string) {
  const raw = readFileSync(join('src/content/recettes', `${slug}.md`), 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
  const body = raw.slice(raw.indexOf('---', 4) + 3).trim();

  const scalar = (key: string) => {
    const m = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (!m) return undefined;
    let v = m[1].trim();
    if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1);
    return v;
  };

  const variants: FrVariant[] = [];
  const varBlock = fm.match(/^variants:\s*\n([\s\S]*?)(?=^[a-zA-Z#]|\Z)/m);
  if (varBlock) {
    const chunks = varBlock[1].split(/\n  - id: /).filter(Boolean);
    for (const chunk of chunks) {
      const block = chunk.startsWith('id:') ? chunk : `id: ${chunk}`;
      const id = block.match(/^id:\s*(\S+)/)?.[1];
      if (!id) continue;
      const v: FrVariant = { id };
      const title = block.match(/\n    title:\s*(.+)/)?.[1]?.trim();
      const description = block.match(/\n    description:\s*(.+)/)?.[1]?.trim();
      const imageAlt = block.match(/\n    imageAlt:\s*(.+)/)?.[1]?.trim();
      if (title) v.title = title.replace(/^["']|["']$/g, '');
      if (description) v.description = description.replace(/^["']|["']$/g, '');
      if (imageAlt) v.imageAlt = imageAlt.replace(/^["']|["']$/g, '');
      const ingM = block.match(/\n    ingredients:\s*\n((?:      - .+\n)+)/);
      if (ingM) {
        v.ingredients = ingM[1]
          .split('\n')
          .filter((l) => l.startsWith('      - '))
          .map((l) => l.slice(8).trim());
      }
      const stepsM = block.match(/\n    steps:\s*\n((?:      - .+\n)+)/);
      if (stepsM) {
        v.steps = stepsM[1]
          .split('\n')
          .filter((l) => l.startsWith('      - '))
          .map((l) => l.slice(8).trim());
      }
      variants.push(v);
    }
  }

  return {
    title: scalar('title'),
    seoTitle: scalar('seoTitle'),
    description: scalar('description'),
    region: scalar('region'),
    imageAlt: scalar('imageAlt'),
    prepTime: scalar('prepTime'),
    cookTime: scalar('cookTime'),
    ingredients: parseYamlList(fm, 'ingredients'),
    steps: parseYamlList(fm, 'steps'),
    tags: parseYamlList(fm, 'tags'),
    body,
    variants: variants.length ? variants : undefined,
  };
}

function translateVariant(
  slug: string,
  enV: RecipeVariantTranslation,
  frV: FrVariant | undefined,
): RecipeVariantTranslation {
  return {
    id: enV.id,
    title: frV?.title ? translateFrTitle(frV.title) : translateFrTitle(enV.title),
    description: frV?.description
      ? polishVariantDesc(frV.description)
      : enV.description
        ? polishVariantDesc(enV.description)
        : undefined,
    imageAlt: frV?.imageAlt
      ? translateFrImageAlt(frV.imageAlt)
      : enV.imageAlt
        ? translateFrImageAlt(enV.imageAlt)
        : undefined,
    ingredients: pickAndTranslateIngredients(enV.ingredients, frV?.ingredients, slug),
    steps: pickAndTranslateLines(enV.steps, frV?.steps, slug),
  };
}

function buildRecipe(slug: string, en: RecipeTranslation): RecipeTranslation {
  const fr = parseFrRecipe(slug);

  const title = pickLnTitle(slug, fr.title ?? en.title);
  const seoTitle = fr.seoTitle
    ? translateFrSeoTitle(fr.seoTitle, slug)
    : en.seoTitle
      ? translateFrSeoTitle(en.seoTitle, slug)
      : undefined;

  const description = fr.description
    ? translateFrDescription(fr.description, slug)
    : translateFrDescription(en.description, slug);

  const region = translateFrRegion(fr.region ?? (en.region ? REGION_EN[en.region] ?? en.region : ''));

  const imageAlt = fr.imageAlt
    ? translateFrImageAlt(fr.imageAlt)
    : translateFrImageAlt(en.imageAlt);

  const body = fr.body ? translateFrBody(fr.body) : en.body ? translateBody(en.body) : undefined;

  const tagsSource =
    fr.tags && fr.tags.length === en.tags.length
      ? fr.tags
      : fr.tags && fr.tags.length > 0
        ? fr.tags
        : en.tags;

  const ln: RecipeTranslation = {
    title,
    description,
    region: region || undefined,
    imageAlt,
    prepTime: translateTime(fr.prepTime ?? en.prepTime),
    cookTime: translateTime(fr.cookTime ?? en.cookTime),
    ingredients: pickAndTranslateIngredients(en.ingredients, fr.ingredients, slug),
    steps: pickAndTranslateLines(en.steps, fr.steps, slug),
    tags: tagsSource.map((t) => translateFrTag(t) || translateTag(t)),
    body: fixLinks(body),
  };
  if (seoTitle) ln.seoTitle = seoTitle;
  if (en.variants?.length) {
    ln.variants = en.variants.map((ev) => {
      const fv = fr.variants?.find((v) => v.id === ev.id);
      return translateVariant(slug, ev, fv);
    });
  }
  return ln;
}

function toTsObject(obj: unknown, indent = 0): string {
  const sp = '  '.repeat(indent);
  if (typeof obj === 'string') return JSON.stringify(obj);
  if (Array.isArray(obj)) {
    if (!obj.length) return '[]';
    return `[\n${obj.map((item) => `${sp}  ${toTsObject(item, indent + 1)}`).join(',\n')}\n${sp}]`;
  }
  if (obj && typeof obj === 'object') {
    const entries = Object.entries(obj as Record<string, unknown>).filter(([, v]) => v !== undefined);
    return `{\n${entries
      .map(([k, v]) => `${sp}  ${JSON.stringify(k)}: ${toTsObject(v, indent + 1)}`)
      .join(',\n')}\n${sp}}`;
  }
  return String(obj);
}

const lnRecipes: Record<string, RecipeTranslation> = {};
for (const slug of Object.keys(recipeTranslationsEn)) {
  lnRecipes[slug] = buildRecipe(slug, recipeTranslationsEn[slug]);
}

const header = `export type RecipeVariantTranslation = {
  id: string;
  title: string;
  description?: string;
  imageAlt?: string;
  ingredients: string[];
  steps: string[];
};

export type RecipeTranslation = {
  title: string;
  seoTitle?: string;
  description: string;
  region?: string;
  imageAlt: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  steps: string[];
  tags: string[];
  body?: string;
  variants?: RecipeVariantTranslation[];
};

export const recipeTranslationsLn: Record<string, RecipeTranslation> = `;

writeFileSync('src/i18n/recipes-ln.ts', header + toTsObject(lnRecipes, 0) + ';\n', 'utf8');
console.log(`Wrote recipes-ln.ts — ${Object.keys(lnRecipes).length} keys.`);
