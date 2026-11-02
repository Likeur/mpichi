/**
 * Guards Lingala locale coverage: UI keys, recipes, guides, aliases, FR leftovers.
 * Run: npm run validate:ln
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ui } from '../src/i18n/ui.ts';
import { recipeTranslationsLn } from '../src/i18n/recipes-ln.ts';
import { recipeTranslationsEn } from '../src/i18n/recipes-en.ts';
import { guideTranslationsLn } from '../src/i18n/guides-ln.ts';
import { guideTranslationsEn } from '../src/i18n/guides-en.ts';

const ROOT = process.cwd();
const errors: string[] = [];
const warnings: string[] = [];

function fail(msg: string) {
  errors.push(msg);
}
function warn(msg: string) {
  warnings.push(msg);
}

// --- UI key parity ---
{
  const frKeys = Object.keys(ui.fr);
  for (const key of frKeys) {
    if (!(key in ui.ln)) fail(`ui.ln missing key: ${key}`);
    if (!(key in ui.en)) fail(`ui.en missing key: ${key}`);
  }
  for (const key of Object.keys(ui.ln)) {
    if (!(key in ui.fr)) fail(`ui.ln has extra key not in fr: ${key}`);
  }
}

// --- Recipe / guide coverage ---
{
  const recipeSlugs = readdirSync(join(ROOT, 'src/content/recettes'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
  const guideSlugs = readdirSync(join(ROOT, 'src/content/guides'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));

  for (const slug of recipeSlugs) {
    if (!recipeTranslationsLn[slug]) fail(`recipes-ln missing slug: ${slug}`);
    if (!recipeTranslationsEn[slug]) fail(`recipes-en missing slug: ${slug}`);
  }
  for (const slug of guideSlugs) {
    if (!guideTranslationsLn[slug]) fail(`guides-ln missing slug: ${slug}`);
    if (!guideTranslationsEn[slug]) fail(`guides-en missing slug: ${slug}`);
  }
}

// --- Aliases: every slug needs ≥1 lang:ln ---
{
  const aliases = JSON.parse(
    readFileSync(join(ROOT, 'mpichi-dataset/enrichment/aliases.json'), 'utf8'),
  ) as Record<string, Array<{ lang?: string }>>;
  const recipeSlugs = readdirSync(join(ROOT, 'src/content/recettes'))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
  for (const slug of recipeSlugs) {
    const rows = aliases[slug];
    if (!rows?.some((r) => r.lang === 'ln')) {
      fail(`aliases.json missing lang:ln for ${slug}`);
    }
  }
}

// --- Regions catalog has ln labels ---
{
  const catalog = JSON.parse(
    readFileSync(join(ROOT, 'src/lib/taxonomy/regions.json'), 'utf8'),
  ) as {
    regions: Array<{ id: string; label?: { ln?: string } }>;
    fallback?: { label?: { ln?: string } };
  };
  for (const region of catalog.regions ?? []) {
    if (!region.label?.ln?.trim()) fail(`regions.json ${region.id} missing label.ln`);
  }
  if (!catalog.fallback?.label?.ln?.trim()) fail('regions.json fallback missing label.ln');
}

// --- Soft: French verb leftovers in LN recipe steps ---
{
  const FR_STEP =
    /\b(Mélanger|Ajouter|Cuire|Faire|Retirer|Laisser|Couper|Éplucher|Servir|Verser|Préparer|Assaisonner|Réserver)\b/;
  let leftoverSteps = 0;
  for (const tr of Object.values(recipeTranslationsLn)) {
    for (const step of tr.steps ?? []) {
      if (FR_STEP.test(step)) leftoverSteps++;
    }
    for (const variant of tr.variants ?? []) {
      for (const step of variant.steps ?? []) {
        if (FR_STEP.test(step)) leftoverSteps++;
      }
    }
  }
  if (leftoverSteps > 0) {
    warn(
      `${leftoverSteps} LN recipe step(s) still look French (regen via npm run generate:ln)`,
    );
  }
}

// --- Soft: UI FR calques ---
{
  const leak = /\b(favoris|appareil|Seacré|déjà)\b/i;
  for (const [key, value] of Object.entries(ui.ln)) {
    if (leak.test(value)) warn(`ui.ln[${key}] may still contain FR calque`);
  }
}

if (warnings.length) {
  console.log('Warnings:');
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}

if (errors.length) {
  console.error('validate:ln failed:');
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log(
  `validate:ln ok — ui ${Object.keys(ui.ln).length} keys, recipes ${Object.keys(recipeTranslationsLn).length}, guides ${Object.keys(guideTranslationsLn).length}${warnings.length ? ` (${warnings.length} warning(s))` : ''}`,
);
