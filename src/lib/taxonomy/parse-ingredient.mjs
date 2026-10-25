/**
 * Best-effort French/English ingredient line parser.
 * Always sets `raw`. Sets amount+unit+name when confident.
 */

/** Longer / multi-word units first */
const UNIT_PATTERNS = [
  { re: /^c\.\s*à\s*soupe|^càs\b|^cas\b|^tbsp\b|^tablespoons?\b/i, canon: 'tbsp' },
  { re: /^c\.\s*à\s*café|^càc\b|^cac\b|^tsp\b|^teaspoons?\b/i, canon: 'tsp' },
  { re: /^gousses?\b/i, canon: 'clove' },
  { re: /^feuilles?\b/i, canon: 'leaf' },
  { re: /^pincées?\b/i, canon: 'pinch' },
  { re: /^bottes?\b/i, canon: 'bunch' },
  { re: /^branches?\b/i, canon: 'stalk' },
  { re: /^tranches?\b/i, canon: 'slice' },
  { re: /^morceaux?\b/i, canon: 'piece' },
  { re: /^cubes?\b/i, canon: 'cube' },
  { re: /^sachets?\b/i, canon: 'packet' },
  { re: /^verres?\b/i, canon: 'glass' },
  { re: /^bols?\b/i, canon: 'bowl' },
  { re: /^kg\b|^kilogrammes?\b/i, canon: 'kg' },
  { re: /^g\b|^grammes?\b/i, canon: 'g' },
  { re: /^ml\b|^millilitres?\b/i, canon: 'ml' },
  { re: /^cl\b|^centilitres?\b/i, canon: 'cl' },
  { re: /^l\b|^litres?\b/i, canon: 'l' },
];

function toNumber(s) {
  if (!s) return undefined;
  const n = Number(String(s).replace(',', '.'));
  return Number.isFinite(n) ? n : undefined;
}

function stripLinker(s) {
  return String(s || '').replace(/^(?:de\s+|d'|d’|of\s+)/i, '');
}

function cleanName(name) {
  return stripLinker(name)
    .replace(/^[,:;–—-]\s*/, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Try to split "400 g de X" / "4 c. à soupe d'huile" / "60 à 80 g de sucre"
 */
function parseAmountUnitName(raw) {
  const m = raw.match(/^(\d+(?:[.,]\d+)?)(?:\s*à\s*(\d+(?:[.,]\d+)?))?\s+(.+)$/i);
  if (!m) return null;
  const amount = toNumber(m[1]);
  const amountMax = toNumber(m[2]);
  let rest = m[3].trim();
  if (amount === undefined || !rest) return null;

  for (const { re, canon } of UNIT_PATTERNS) {
    const um = rest.match(re);
    if (!um) continue;
    let after = rest.slice(um[0].length).trim();
    after = stripLinker(after);
    const name = cleanName(after);
    if (!name) continue;
    const out = { amount, unit: canon, name, parse_status: 'structured' };
    if (amountMax !== undefined) out.amount_max = amountMax;
    return out;
  }
  return null;
}

/**
 * "2 oignons, émincés" → amount + unit piece
 */
function parseCountName(raw) {
  const m = raw.match(/^(\d+(?:[.,]\d+)?)\s+(.+)$/i);
  if (!m) return null;
  const amount = toNumber(m[1]);
  const name = cleanName(m[2]);
  if (amount === undefined || !name) return null;
  // Avoid treating "400 g …" leftovers
  if (/^(g|kg|ml|l|cl)\b/i.test(name)) return null;
  return { amount, unit: 'piece', name, parse_status: 'structured' };
}

/**
 * @param {string} line
 * @returns {{
 *   raw: string,
 *   amount?: number,
 *   amount_max?: number,
 *   unit?: string,
 *   name?: string,
 *   parse_status: 'structured' | 'raw_only'
 * }}
 */
export function parseIngredientLine(line) {
  const raw = String(line || '').normalize('NFC').trim();
  if (!raw) return { raw: '', parse_status: 'raw_only' };

  if (!/^\d/.test(raw)) {
    return { raw, name: raw, parse_status: 'raw_only' };
  }

  const structured = parseAmountUnitName(raw) || parseCountName(raw);
  if (structured) return { raw, ...structured };

  return { raw, parse_status: 'raw_only' };
}

export function parseIngredientList(lines = []) {
  return lines.map((line) => parseIngredientLine(line));
}

export function structuredCoverage(lists) {
  let total = 0;
  let structured = 0;
  let withRaw = 0;
  for (const list of lists) {
    for (const row of list || []) {
      total++;
      if (row.raw) withRaw++;
      if (row.parse_status === 'structured' && row.amount != null && row.unit) structured++;
    }
  }
  return {
    total,
    structured,
    with_raw: withRaw,
    structured_ratio: total ? structured / total : 0,
    raw_or_structured_ratio: total ? withRaw / total : 0,
  };
}
