const LEADING_QUANTITY = /^(\d+\/\d+|\d+[.,]\d+|\d+)(?=\s|$)/;

/** Unités mesurées : on garde des quantités précises (g, ml, cuillères…). */
const MEASURED_REST =
  /^\s*(kg\b|mg\b|ml\b|cl\b|dl\b|g\b|l\b|c\.\s*à|cuill[eè]re|pincée|pincées|cs\b|cc\b|càs\b|càc\b)/i;

function parseQuantity(raw: string): number | undefined {
  if (raw.includes('/')) {
    const [numerator, denominator] = raw.split('/').map(Number);
    if (!numerator || !denominator) return undefined;
    return numerator / denominator;
  }

  const value = Number(raw.replace(',', '.'));
  return Number.isFinite(value) ? value : undefined;
}

function isMeasuredIngredient(rest: string): boolean {
  return MEASURED_REST.test(rest);
}

function formatDecimal(value: number, locale: 'fr' | 'en', maxFractionDigits: number): string {
  if (!Number.isFinite(value) || value <= 0) return '';

  const factor = 10 ** maxFractionDigits;
  const rounded = Math.round(value * factor) / factor;

  if (Math.abs(rounded - Math.round(rounded)) < 1 / factor / 2) {
    return String(Math.round(rounded));
  }

  return rounded.toLocaleString(locale === 'en' ? 'en-US' : 'fr-FR', {
    maximumFractionDigits: maxFractionDigits,
    minimumFractionDigits: 0,
  });
}

/** Quantités mesurées (g, ml…) : arrondi simple. */
export function formatMeasuredQuantity(value: number, locale: 'fr' | 'en' = 'fr'): string {
  if (!Number.isFinite(value) || value <= 0) return '';

  const nearestInt = Math.round(value);
  if (Math.abs(value - nearestInt) < 0.05) return String(nearestInt);

  return formatDecimal(value, locale, value < 10 ? 1 : 0);
}

/**
 * Pièces (oignons, gousses…) : décimales ajustées par demi-unité
 * (0,5 / 1 / 1,5 / 2…) — jamais 0,33 ni fractions.
 */
export function formatPieceQuantity(value: number, locale: 'fr' | 'en' = 'fr'): string {
  if (!Number.isFinite(value) || value <= 0) return '';

  // Arrondi au demi le plus proche, minimum 0,5 pièce
  const halved = Math.round(value * 2) / 2;
  const adjusted = Math.max(0.5, halved);

  return formatDecimal(adjusted, locale, 1);
}

export function formatQuantity(
  value: number,
  locale: 'fr' | 'en' = 'fr',
  mode: 'measured' | 'piece' = 'measured',
): string {
  return mode === 'piece' ? formatPieceQuantity(value, locale) : formatMeasuredQuantity(value, locale);
}

/** Met à l’échelle le nombre en tête d’ingrédient (ex. `200 g`, `2 oignons`). */
export function scaleIngredientText(
  text: string,
  factor: number,
  locale: 'fr' | 'en' = 'fr',
): string {
  if (factor === 1) return text;

  const match = text.match(LEADING_QUANTITY);
  if (!match) return text;

  const base = parseQuantity(match[1]);
  if (base === undefined) return text;

  const rest = text.slice(match[0].length);
  const mode = isMeasuredIngredient(rest) ? 'measured' : 'piece';
  const scaled = formatQuantity(base * factor, locale, mode);
  if (!scaled) return text;

  return `${scaled}${rest}`;
}

export function scaleServings(base: number, factor: number, locale: 'fr' | 'en' = 'fr'): string {
  return formatMeasuredQuantity(base * factor, locale);
}
