/**
 * French / English kitchen text → Kinshasa Lingala (Mpichi generator).
 */
import { readFileSync } from 'node:fs';

export const REGION_EN: Record<string, string> = {
  'Greater Kasai': 'Kasaï monene',
  'Greater Katanga': 'Katanga monene',
  'Greater Bandundu': 'Bandundu monene',
  'Across the DRC': 'Na RDC mobimba',
  'Central Cuvette': 'Cuvette ya centrale',
  'Congo Basin': 'Basen ya Congo',
  'Western DRC': 'RDC ya bwé',
  'Southeastern DRC': 'RDC ya sud-est',
  'North & South Kivu': 'Kivu ya nord mpe sud',
  'Kinshasa & Cuvette': 'Kinshasa mpe Cuvette',
  'Kinshasa & Kongo-Central': 'Kinshasa mpe Kongo-Central',
  'Kinshasa & western DRC': 'Kinshasa mpe RDC ya bwé',
  'Kinshasa & Congo Basin': 'Kinshasa mpe basen ya Congo',
  'Bas-Congo & Bandundu': 'Bas-Congo mpe Bandundu',
  'Kasai-Central': 'Kasaï-Central',
  'Haut-Katanga': 'Haut-Katanga',
  'Kongo-Central': 'Kongo-Central',
};

export const REGION_FR: Record<string, string> = {
  'Grand Kasaï': 'Kasaï monene',
  'Grand Katanga': 'Katanga monene',
  'Grand Bandundu': 'Bandundu monene',
  'Toute la RDC': 'Na RDC mobimba',
  'Cuvette centrale': 'Cuvette ya kati',
  'Bassin du Congo': 'Bassin ya Congo',
  'Ouest de la RDC': 'Ouest ya RDC',
  'Sud-est de la RDC': 'RDC ya sud-est',
  'Sud-Est de la RDC': 'RDC ya sud-est',
  'Nord-Kivu et Sud-Kivu': 'Nord-Kivu mpe Sud-Kivu',
  'Nord-Kivu & Sud-Kivu': 'Nord-Kivu mpe Sud-Kivu',
  'Nord et Sud Kivu': 'Nord-Kivu mpe Sud-Kivu',
  'Kinshasa et Cuvette': 'Kinshasa mpe Cuvette',
  'Kinshasa & Cuvette': 'Kinshasa mpe Cuvette',
  'Kinshasa et Kongo-Central': 'Kinshasa mpe Kongo-Central',
  'Kinshasa & Kongo-Central': 'Kinshasa mpe Kongo-Central',
  'Kinshasa & Ouest de la RDC': 'Kinshasa mpe Ouest ya RDC',
  'Kinshasa & bassin du Congo': 'Kinshasa mpe bassin ya Congo',
  'Kinshasa & fleuve Congo': 'Kinshasa mpe ebale ya Congo',
  'Kinshasa · Kinkole': 'Kinshasa · Kinkole',
  'Bas-Congo et Bandundu': 'Bas-Congo mpe Bandundu',
  'Bas-Congo & Bandundu': 'Bas-Congo mpe Bandundu',
  'Bandundu & Kongo-Central': 'Bandundu mpe Kongo-Central',
  'Bassin du Congo & Cuvette': 'Bassin ya Congo mpe Cuvette',
  'Bassin du Congo & Kinshasa': 'Bassin ya Congo mpe Kinshasa',
  'Cuvette centrale & Kongo-Central': 'Cuvette ya kati mpe Kongo-Central',
  'Forêts du bassin du Congo': 'Mituya ya bassin ya Congo',
  'Haut-Katanga': 'Haut-Katanga',
  'Haut-Katanga & Tanganyika': 'Haut-Katanga mpe Tanganyika',
  'Kasai-Central': 'Kasaï-Central',
  'Kasaï-Central': 'Kasaï-Central',
  'Kongo Central': 'Kongo-Central',
  'Kongo-Central': 'Kongo-Central',
  Kisangani: 'Kisangani',
  Kinshasa: 'Kinshasa',
};

let _lnAliases: Record<string, string[]> | null = null;

export function loadLnAliases(): Record<string, string[]> {
  if (_lnAliases) return _lnAliases;
  const raw = JSON.parse(
    readFileSync('mpichi-dataset/enrichment/aliases.json', 'utf8'),
  ) as Record<string, { name: string; lang: string }[]>;
  _lnAliases = {};
  for (const [slug, entries] of Object.entries(raw)) {
    _lnAliases[slug] = entries.filter((e) => e.lang === 'ln').map((e) => e.name);
  }
  return _lnAliases;
}

export function pickLnTitle(slug: string, frTitle?: string): string {
  const manual: Record<string, string> = {
    pondu: 'Pondu (saka-saka)',
    'moambe-poulet': 'Soso ya mwambe',
    'liboke-poisson': 'Liboke ya mbisi',
    'fufu-manioc': 'Fufu ya manioc',
    'kapenta-tomates': 'Kapenta na tomatisi',
    'biteku-teku-kasai': 'Biteku-teku (lenga-lenga)',
  };
  if (manual[slug]) return manual[slug];

  const ln = loadLnAliases()[slug] ?? [];
  const phrase = ln.find((n) => /\s(ya|na)\s/.test(n) && n.length > 5);
  if (phrase) return phrase.charAt(0).toUpperCase() + phrase.slice(1);

  if (frTitle) return translateFrTitle(frTitle);
  return slug;
}

function normApostrophe(s: string): string {
  return s.replace(/\u2019/g, "'");
}

export function translateTime(value: string): string {
  let s = value.trim();
  s = s.replace(/(\d+)\s*h\s+(\d+)/gi, (_, h, m) => `__H${h}M${m}__`);
  s = s.replace(/(\d+)\s*h(?![\d.])/gi, 'ngonga $1');
  s = s.replace(/(\d+)\s*min/gi, 'min. $1');
  s = s.replace(/__H(\d+)M(\d+)__/g, 'ngonga $1 min. $2');
  s = s.replace(/\+\s*/g, '+ ');
  s = s.replace(/trempage|soak/gi, 'kobomba');
  s = s.replace(/marinade/gi, 'marinade');
  s = s.replace(/fermentation|fermenting/gi, 'fermentation');
  s = s.replace(/repos|chilling|set/gi, 'kobomba');
  return s;
}

export function fixLinks(text: string | undefined): string | undefined {
  if (!text) return text;
  return text
    .replaceAll('/en/recettes/', '/ln/recettes/')
    .replaceAll('/en/guides/', '/ln/guides/')
    .replace(/\[([^\]]+)\]\(\/guides\//g, '[$1](/ln/guides/')
    .replace(/\[([^\]]+)\]\(\/recettes\//g, '[$1](/ln/recettes/');
}

/** Nominal phrase (inside a step) FR → LN */
function translateFrNP(fr: string): string {
  let s = normApostrophe(fr).trim();
  const map: [RegExp, string][] = [
    [/l'amarante/gi, 'biteku-teku'],
    [/les feuilles d'amarante/gi, 'matiti ya biteku-teku'],
    [/les feuilles et les tiges/gi, 'matiti mpe bikondo'],
    [/les feuilles/gi, 'matiti'],
    [/les tiges tendres/gi, 'bikondo ya molle'],
    [/les arachides pilées/gi, 'nguba mikuatami'],
    [/les arachides/gi, 'nguba'],
    [/les tomates/gi, 'tomatisi'],
    [/les oignons/gi, 'aluboka'],
    [/les poissons/gi, 'mbisi'],
    [/les kapenta/gi, 'kapenta'],
    [/le poisson/gi, 'mbisi'],
    [/le piment/gi, 'pili-pili'],
    [/le reste d'huile/gi, 'mafuta oyo etikali'],
    [/le reste de la farine/gi, 'farine oyo etikali'],
    [/l'oignon/gi, 'aluboka'],
    [/l'huile/gi, 'mafuta'],
    [/l'eau/gi, 'mai'],
    [/l'ail/gi, 'ail'],
    [/l'amarante/gi, 'biteku-teku'],
    [/une dizaine de minutes/gi, 'pene miniti 10'],
    [/quelques minutes/gi, 'miniti moke'],
    [/plusieurs fois/gi, 'makenda mingi'],
    [/à découvert/gi, 'na sanza'],
    [/à la vapeur/gi, 'na mvuke'],
    [/au four/gi, 'na four'],
    [/feu doux/gi, 'moto ya moke'],
    [/feu vif/gi, 'moto ya makasi'],
    [/pâte lisse/gi, 'pâte ya pete'],
    [/sauce tomate/gi, 'sauce ya tomatisi'],
    [/sauce épaisse/gi, 'sauce epaisse'],
    [/feuilles de bananier/gi, 'ndunda ya banane'],
    [/feuilles de manioc/gi, 'matabisi ya manioc (pondu)'],
    [/farine de manioc/gi, 'farine ya manioc'],
    [/huile de palme/gi, 'mafuta ya palmier'],
    [/poisson fumé/gi, 'mbisi ya fumé'],
    [/pulpe de noix de palme/gi, 'pulpe ya noix de palme (moambe)'],
    [/noix de palme/gi, 'noix de palme'],
    [/plantain mûr/gi, 'plantain ya polele'],
    [/boules/gi, 'baboule'],
  ];
  for (const [re, rep] of map) s = s.replace(re, rep);
  s = s.replace(/\bpoisson\b/gi, 'mbisi');
  s = s.replace(/\bpoulet\b/gi, 'soso');
  s = s.replace(/\bviande\b/gi, 'nyama');
  s = s.replace(/\boignons?\b/gi, 'aluboka');
  s = s.replace(/\btomates?\b/gi, 'tomatisi');
  s = s.replace(/\barachides?\b/gi, 'nguba');
  s = s.replace(/\briz\b/gi, 'loso');
  s = s.replace(/\bhuile\b/gi, 'mafuta');
  s = s.replace(/\beau\b/gi, 'mai');
  s = s.replace(/\bsel\b/gi, 'muni');
  return s;
}

const FR_STEP_EXACT: Record<string, string> = {
  'Détacher les feuilles, conserver les tiges tendres et laver le tout plusieurs fois.':
    'Longola matiti, tika bikondo ya molle mpe sukola nyonso makenda mingi.',
  'Émincer grossièrement les feuilles et les tiges.':
    'Kata matiti mpe bikondo na ndenge ya moke-moke.',
  "Faire revenir l'oignon dans l'huile, puis ajouter les tomates et le piment.":
    'Bimasisa aluboka na mafuta, sima bakisa tomatisi mpe pili-pili.',
  "Ajouter l'amarante et l'eau, couvrir et laisser cuire une dizaine de minutes.":
    'Bakisa biteku-teku mpe mai, funga mpe tika ekóla pene miniti 10.',
  'Incorporer les arachides pilées, saler et mélanger.':
    'Bakisa nguba mikuatami, tia muni mpe bongisa.',
  "Poursuivre la cuisson à découvert jusqu'à ce que les feuilles soient tendres et la sauce légèrement liée.":
    'Kobongola koteka na sanza tii matiti ya pétrole mpe sauce ekóma ya kati-kati.',
  "Faire dorer les morceaux de poulet dans un peu d'huile. Réserver.":
    'Bimasisa biteni ya soso na mwa mafuta. Tika na pembeni.',
  "Dans la même marmite, faire revenir oignons, ail et tomates concassées jusqu'à sauce épaisse.":
    'Na marmite moko wana, bimasisa aluboka, ail mpe tomatisi mibetami tii sauce ekóma epaisse.',
  "Remettre le poulet, verser la moambe et un verre d'eau. Couvrir.":
    'Zongisa soso, tema moambe mpe verre ya mai. Funga.',
  "Mijoter à feu doux 50 minutes à 1 h, en remuant pour éviter que la sauce n'attache.":
    'Bilisa na moto ya moke ngonga 50 tii ngonga 1, obalabala mpo na sauce ekanga te.',
  "Ajuster l'assaisonnement et servir chaud avec riz blanc ou fufu.":
    'Bongisa monoko mpe salela na moto elongo na loso ya pete to fufu.',
  "Assaisonner le poisson avec sel, poivre, cube émietté et un filet d'huile de palme. Laisser mariner 20 minutes.":
    'Bongisa monoko ya mbisi na muni, poivre, cube mikuatami mpe mwa mafuta ya palmier. Tika yango miniti 20 na marinade.',
  'Passer les feuilles de bananier au feu quelques secondes pour les assouplir.':
    'Tambwisa ndunda ya banane na moto mwa secondes mpo na kofungola yango.',
  "Sur chaque feuille, disposer oignon, tomate, poivron, puis le poisson. Arroser d'un peu d'huile de palme.":
    'Na ndunda moko na moko, tia aluboka, tomatisi, poivron, sima mbisi. Tema mwa mafuta ya palmier.',
  'Replier hermétiquement en papillote et ficeler ou maintenir avec des bâtons.':
    'Zinga malamu na papillote mpe fongola na fil to na mikolo.',
  'Cuire à la vapeur (panier ou marmite) ou au four à 180 °C pendant 35 à 45 minutes.':
    'Teká na mvuke (panier to marmite) to na four na 180 °C na miniti 35 tii 45.',
  'Servir le liboke ouvert à table, avec plantain mûr ou fufu.':
    'Fungola liboke na mesa, salela elongo na plantain ya polele to fufu.',
  "Porter environ un litre d'eau à ébullition dans une marmite à fond épais.":
    'Bila pene litre ya mai tii ebukana na marmite ya moto ya makasi.',
  "Délayer une petite partie de la farine dans l'eau restante froide, puis verser dans la marmite en remuant.":
    'Bakisa mwa farine na mai ya malili oyo etikali, sima tema na marmite en balabala.',
  'Laisser épaissir quelques minutes en bouillie homogène.':
    'Tika ekóma epaisse na miniti moke lokola bouillie ya pete.',
  'Ajouter le reste de farine progressivement tout en travaillant vivement avec une spatule solide.':
    'Bakisa farine oyo etikali moke na moke, obalabala na spatule ya makasi.',
  "Retourner et écraser la pâte contre les parois jusqu'à ce qu'elle soit lisse, élastique et se détache de la marmite.":
    'Zongisa mpe bimisa pâte na paroi ya marmite tii eza pete, elastic mpe ekweyi.',
  'Façonner en boules avec une louche mouillée. Servir aussitôt avec une sauce.':
    'Pesa nzela na baboule na louche ya mai. Salela mbala moko elongo na sauce.',
  'Si les kapenta sont séchés, les rincer rapidement deux ou trois fois puis les égoutter soigneusement. Saler très peu.':
    'Soki kapenta ezali ya kokauka, sukola yango mbala 2 to 3 sima kata mai malamu. Tia muni moke mpenza.',
  "Chauffer la moitié de l'huile et faire revenir les poissons 5 à 8 minutes. Les réserver.":
    'Fútbisa ndenge ya liboso ya mafuta mpe bimasisa mbisi miniti 5 tii 8. Tika na pembeni.',
  "Ajouter le reste d'huile, faire fondre les oignons puis incorporer l'ail, les tomates et le piment.":
    'Bakisa mafuta oyo etikali, bimasisa aluboka tii efútaka, sima bakisa ail, tomatisi mpe pili-pili.',
  "Cuire la sauce 10 minutes, verser l'eau et remettre délicatement les kapenta.":
    'Teká sauce miniti 10, tema mai mpe zongisa kapenta na mpiko.',
  'Laisser mijoter à découvert 5 minutes, poivrer et servir avec du bukari, du riz ou du plantain.':
    'Bilisa na sanza miniti 5, tia poivre mpe salela elongo na bukari, loso to plantain.',
  'Laver les feuilles de manioc, les ébouillanter brièvement puis les hacher finement (ou utiliser un moulin à manioc).':
    'Sukola matabisi ya manioc, biangá mwa moke na mai ya moto, sima kata yango mingi (to okoki kosalela moulin ya manioc).',
  "Dans une marmite, faire revenir oignons et ail dans l'huile de palme jusqu'à ce qu'ils soient fondants.":
    'Na marmite, bimasisa aluboka mpe ail na mafuta ya palmier tii bazala mollement.',
  "Ajouter le pondu haché, mélanger pour enrober les feuilles d'huile.":
    'Bakisa pondu mikatami, bongisa mpo na mafuta ekata matabisi nyoso.',
  "Verser un peu d'eau, couvrir et laisser mijoter à feu doux en remuant régulièrement (45 min à 1 h) jusqu'à texture crémeuse.":
    'Tema mwa mai, funga mpe bilisa na moto ya moke, obalabala makenda (miniti 45 tii ngonga 1) tii elaksis eza crémeuse.',
  'Incorporer le poisson fumé en morceaux, assaisonner et laisser encore 15 minutes. Servir avec fufu, chikwanga ou riz.':
    'Bakisa mbisi ya fumé na biteni, bongisa monoko mpe bomba miniti 15. Salela elongo na fufu, chikwangue to loso.',
};

const EN_STEP_EXACT: Record<string, string> = {
  'Strain if needed for a smooth sauce.':
    'Tia na passoire soki esengeli mpo na sauce ya pete.',
  'Serve with rice, fufu or chikwangue.':
    'Salela elongo na loso, fufu to chikwangue.',
  'Brown the chicken pieces in oil and set aside.':
    'Bimasisa biteni ya soso na mafuta. Tika na pembeni.',
  'Sweat the onions and garlic, then add the palm pulp diluted with water.':
    'Bimasisa aluboka mpe ail, sima bakisa pulpe ya noix de palme elongolami na mai.',
  'Return the chicken, add chili and salt, and simmer gently for about 1 hour.':
    'Zongisa soso, bakisa pili-pili mpe muni, mpe bilisa na moto ya moke pene ngonga 1.',
  'Reduce until the sauce coats the meat.':
    'Kokauka tii sauce ekata nyama.',
  'Strip the leaves, keep the tender stems, and wash everything several times.':
    FR_STEP_EXACT[
      'Détacher les feuilles, conserver les tiges tendres et laver le tout plusieurs fois.'
    ],
  'Roughly chop the leaves and stems.':
    FR_STEP_EXACT['Émincer grossièrement les feuilles et les tiges.'],
  'Sweat the onion in the oil, then add the tomatoes and chili.':
    FR_STEP_EXACT["Faire revenir l'oignon dans l'huile, puis ajouter les tomates et le piment."],
  'Add the amaranth and water, cover, and cook for about ten minutes.':
    FR_STEP_EXACT["Ajouter l'amarante et l'eau, couvrir et laisser cuire une dizaine de minutes."],
  'Stir in the pounded peanuts, season with salt, and mix.':
    FR_STEP_EXACT['Incorporer les arachides pilées, saler et mélanger.'],
  'Continue cooking uncovered until the leaves are tender and the sauce lightly thickened.':
    FR_STEP_EXACT[
      "Poursuivre la cuisson à découvert jusqu'à ce que les feuilles soient tendres et la sauce légèrement liée."
    ],
};

const FR_STEP_RULES: [RegExp, string | ((m: RegExpMatchArray) => string)][] = [
  [
    /^Laver (.+?) et (.+?)\.?$/i,
    (m) => `Sukola ${translateFrNP(m[1])} mpe ${translateFrNP(m[2])}.`,
  ],
  [
    /^Assaisonner (.+?) avec (.+?), (.+?) \.?$/i,
    (m) =>
      `Bongisa monoko ya ${translateFrNP(m[1])} na ${translateFrNP(m[2])}, ${translateFrNP(m[3])}.`,
  ],
  [
    /^Assaisonner (.+?) avec (.+?) \.?$/i,
    (m) => `Bongisa monoko ya ${translateFrNP(m[1])} na ${translateFrNP(m[2])}.`,
  ],
  [
    /^Faire revenir (.+?) dans (.+?), puis ajouter (.+?)\.?$/i,
    (m) => `Bimasisa ${translateFrNP(m[1])} na ${translateFrNP(m[2])}, sima bakisa ${translateFrNP(m[3])}.`,
  ],
  [
    /^Faire revenir (.+?) dans (.+?) (\d+ à \d+ minutes?)\.?$/i,
    (m) => `Bimasisa ${translateFrNP(m[1])} na ${translateFrNP(m[2])} ${m[3]}.`,
  ],
  [
    /^Faire revenir (.+?) (\d+ à \d+ minutes?)\.?$/i,
    (m) => `Bimasisa ${translateFrNP(m[1])} ${m[2]}.`,
  ],
  [
    /^Ajouter (.+?), couvrir et laisser cuire (.+?)\.?$/i,
    (m) => `Bakisa ${translateFrNP(m[1])}, funga mpe tika ekóla ${translateFrNP(m[2])}.`,
  ],
  [
    /^Ajouter (.+?) progressivement (.+?) \.?$/i,
    (m) => `Bakisa ${translateFrNP(m[1])} moke na moke ${translateFrNP(m[2])}.`,
  ],
  [
    /^Ajouter (.+?), (.+?) et remettre (.+?)\.?$/i,
    (m) => `Bakisa ${translateFrNP(m[1])}, ${translateFrNP(m[2])} mpe zongisa ${translateFrNP(m[3])}.`,
  ],
  [
    /^Ajouter (.+?) et (.+?), couvrir\.?$/i,
    (m) => `Bakisa ${translateFrNP(m[1])} mpe ${translateFrNP(m[2])}, funga.`,
  ],
  [
    /^Verser (.+?) et remettre (.+?)\.?$/i,
    (m) => `Tema ${translateFrNP(m[1])} mpe zongisa ${translateFrNP(m[2])}.`,
  ],
  [
    /^Laisser mijoter (.+?) (\d+ minutes?)\.?$/i,
    (m) => `Tika ekóla na moto ya moke ${m[2]} ${translateFrNP(m[1])}.`,
  ],
  [
    /^Laisser mijoter à découvert (.+?)\.?$/i,
    (m) => `Tika ekóla na sanza ${translateFrNP(m[1])}.`,
  ],
  [
    /^Servir (.+?) avec (.+?)\.?$/i,
    (m) => `Salela ${translateFrNP(m[1])} elongo na ${translateFrNP(m[2])}.`,
  ],
  [
    /^Servir (.+?) ouvert à table, avec (.+?)\.?$/i,
    (m) => `Fungola ${translateFrNP(m[1])} na mesa, salela elongo na ${translateFrNP(m[2])}.`,
  ],
  [
    /^Porter (.+?) à ébullition (.+?)\.?$/i,
    (m) => `Bila ${translateFrNP(m[1])} tii ebukana ${translateFrNP(m[2])}.`,
  ],
  [
    /^Délayer (.+?) dans (.+?), puis verser (.+?) en remuant\.?$/i,
    (m) =>
      `Bakisa ${translateFrNP(m[1])} na ${translateFrNP(m[2])}, sima tema ${translateFrNP(m[3])} en balabala.`,
  ],
  [
    /^Retourner et écraser la pâte (.+?) jusqu'à ce que (.+?)\.?$/i,
    (m) => `Zongisa mpe bimisa pâte ${translateFrNP(m[1])} tii ${translateFrNP(m[2])}.`,
  ],
  [
    /^Façonner en (.+?) avec (.+?)\. Servir (.+?)\.?$/i,
    (m) => `Pesa nzela na ${translateFrNP(m[1])} na ${translateFrNP(m[2])}. ${translateFrNP(m[3])}.`,
  ],
  [
    /^Passer (.+?) au feu (.+?) pour (.+?)\.?$/i,
    (m) => `Tambwisa ${translateFrNP(m[1])} na moto ${translateFrNP(m[2])} mpo na ${translateFrNP(m[3])}.`,
  ],
  [
    /^Sur chaque feuille, disposer (.+?), puis (.+?)\. Arroser (.+?)\.?$/i,
    (m) =>
      `Na ndunda moko na moko, tia ${translateFrNP(m[1])}, sima ${translateFrNP(m[2])}. Tema ${translateFrNP(m[3])}.`,
  ],
  [
    /^Replier (.+?) et (.+?)\.?$/i,
    (m) => `Zinga ${translateFrNP(m[1])} mpe ${translateFrNP(m[2])}.`,
  ],
  [
    /^Cuire (.+?) ou (.+?) pendant (.+?)\.?$/i,
    (m) => `Teká ${translateFrNP(m[1])} to ${translateFrNP(m[2])} na ${translateFrNP(m[3])}.`,
  ],
  [
    /^Si (.+?), (.+?) \.?$/i,
    (m) => `Soki ${translateFrNP(m[1])}, ${translateFrNP(m[2])}.`,
  ],
  [
    /^Chauffer (.+?) et faire revenir (.+?) (\d+ à \d+ minutes?)\. (.+?)\.?$/i,
    (m) => `Fútbisa ${translateFrNP(m[1])} mpe bimasisa ${translateFrNP(m[2])} ${m[3]}. ${translateFrNP(m[4])}.`,
  ],
  [
    /^Cuire la sauce (\d+ minutes?), verser (.+?) et remettre (.+?)\.?$/i,
    (m) => `Teká sauce ${m[1]}, tema ${translateFrNP(m[2])} mpe zongisa ${translateFrNP(m[3])}.`,
  ],
];

function applyFrStepRules(s: string): string {
  const t = normApostrophe(s).trim();
  for (const [re, rep] of FR_STEP_RULES) {
    const m = t.match(re);
    if (m) return typeof rep === 'function' ? rep(m) : t.replace(re, rep);
  }
  return t;
}

function translateFrIngredientLine(s: string): string {
  let t = normApostrophe(s).trim();
  if (/^sel$/i.test(t)) return 'Muni';
  if (/^eau$/i.test(t)) return 'Mai';
  if (/^sel et poivre$/i.test(t)) return 'Muni mpe poivre';
  if (/^sel et piment$/i.test(t)) return 'Muni mpe pili-pili';
  if (/^sel, poivre et piment$/i.test(t)) return 'Muni, poivre mpe pili-pili';
  if (/^sel, poivre, cube de bouillon$/i.test(t)) return 'Muni, poivre, cube ya bouillon';

  const rules: [RegExp, string][] = [
    [/^(\d+)\s+bottes?\s+de\s+feuilles d['\u2019]amarante$/i, 'Mikolo $1 ya matiti ya biteku-teku (amarante)'],
    [/^(\d+)\s+kg\s+de\s+feuilles de manioc \(pondu\)/i, '$1 kg ya matabisi ya manioc (pondu)'],
    [/^(\d+)\s+ml\s+d['\u2019]huile de palme rouge$/i, '$1 ml ya mafuta ya palmier rouge'],
    [/^(\d+)\s+poulet coupé en morceaux$/i, '$1 soso, kata na biteni'],
    [/^(\d+)\s+ml\s+de\s+crème \/ pulpe de noix de palme \(moambe\)$/i, '$1 ml ya pulpe to crème ya noix de palme (moambe)'],
    [/^Huile, sel, cube de bouillon, piment$/i, 'Mafuta, muni, cube, pili-pili'],
    [/^Sel, poivre, cube de bouillon$/i, 'Muni, poivre, cube ya bouillon'],
    [/^(\d+)\s+tomates?\s+mûres?,?\s*concassées$/i, 'Tomatisi $1 ya polele, mibetami'],
    [/^(\d+)\s+gros oignon,?\s*émincé$/i, 'Aluboka $1 monene, mikatami'],
    [/^(\d+)\s+g\s+d['']arachides grillées et pilées$/i, '$1 g ya nguba ya kotumbami mpe mikuatami'],
    [/^(\d+)\s+c\.\s*à soupe d['']huile$/i, '$1 lukwakulu ya mafuta'],
    [/^(\d+)\s+c\.\s*à soupe d['']huile de palme$/i, '$1 lukwakulu ya mafuta ya palmier'],
    [/^(\d+)\s+petit piment,?\s*facultatif$/i, 'Pili-pili $1 moke (ya lingi)'],
    [/^(\d+)\s+ml d['']eau$/i, '$1 ml ya mai'],
    [/^(\d+(?:,\d+)?)\s+g\s+de farine de manioc (.+)$/i, '$1 g ya farine ya manioc $2'],
    [/^(\d+(?:,\d+)?)\s+l d['']eau$/i, '$1 l ya mai'],
    [/^(\d+)\s+pincée de sel,?\s*facultative$/i, 'Pince ya muni (ya lingi)'],
    [/^(\d+)\s+filets ou darnes de (.+)$/i, '$1 filets to darnes ya $2'],
    [/^(\d+)\s+oignons?,?\s*en rondelles$/i, 'Aluboka $1, na rondelles'],
    [/^(\d+)\s+tomates?,?\s*en tranches$/i, 'Tomatisi $1, na tranches'],
    [/^(\d+)\s+poivron,?\s*en lanières$/i, 'Poivron $1, na lanières'],
    [/^(\d+)\s+g\s+de kapenta frais ou séchés$/i, '$1 g ya kapenta ya sika to ya kokauka'],
    [/^(\d+)\s+tomates?\s+mûres?,?\s*concassées$/i, 'Tomatisi $1 ya polele, mibetami'],
    [/^(\d+)\s+oignons?,?\s*émincés$/i, 'Aluboka $1, mikatami'],
    [/^(\d+)\s+gousses d['']ail,?\s*hachées$/i, '$1 mikolo ya ail, mikatami'],
    [/^(\d+)\s+c\.\s*à soupe d['']huile$/i, '$1 lukwakulu ya mafuta'],
    [/^(\d+)\s+petit piment$/i, 'Pili-pili $1 moke'],
    [/^(\d+)\s+ml d['']eau$/i, '$1 ml ya mai'],
    [/^(\d+)\s+grandes feuilles de bananier (.+)$/i, '$1 ndunda ya banane monene $2'],
    [/^(\d+)\s+c\.\s*à soupe de poudre de piment doux (.+)$/i, '$1 lukwakulu ya poudre ya pili-pili ya doux $2'],
  ];
  for (const [re, rep] of rules) {
    if (re.test(t)) return t.replace(re, rep);
  }

  t = t.replace(/(\d+(?:,\d+)?)\s*(g|kg|ml|l|cl)\s+de\s+/gi, '$1 $2 ya ');
  t = t.replace(/(\d+)\s+gousses d'ail/gi, '$1 mikolo ya ail');
  t = t.replace(/d'huile de palme/gi, 'ya mafuta ya palmier');
  t = t.replace(/d'huile/gi, 'ya mafuta');
  t = t.replace(/d'eau/gi, 'ya mai');
  t = t.replace(/facultatif/gi, 'ya lingi');
  t = t.replace(/facultative/gi, 'ya lingi');
  t = t.replace(/ au goût/gi, ' na monoko');
  t = t.replace(/, concassées/gi, ', mibetami');
  t = t.replace(/, émincés?/gi, ', mikatami');
  t = t.replace(/, hachées?/gi, ', mikatami');
  t = t.replace(/, en rondelles/gi, ', na rondelles');
  t = t.replace(/, en tranches/gi, ', na tranches');
  t = t.replace(/, en lanières/gi, ', na lanières');
  t = t.replace(/, en morceaux/gi, ', na biteni');
  t = t.replace(/, frais ou séchés/gi, ', ya sika to ya kokauka');
  t = t.replace(/, fraîches ou congelées/gi, ', ya sika to ya congelé');
  t = translateFrNP(t);
  return t;
}

/** Last-resort FR kitchen lexicon when no exact/rule match. */
function fallthroughFrKitchen(s: string): string {
  let t = s;
  const verbs: [RegExp, string][] = [
    [/\bMélanger\b/g, 'Balabala'],
    [/\bmélanger\b/g, 'balabala'],
    [/\bAjouter\b/g, 'Bakisa'],
    [/\bajouter\b/g, 'bakisa'],
    [/\bIncorporer\b/g, 'Bakisa'],
    [/\bincorporer\b/g, 'bakisa'],
    [/\bCuire\b/g, 'Teká'],
    [/\bcuire\b/g, 'teká'],
    [/\bLaver\b/g, 'Sukola'],
    [/\blaver\b/g, 'sukola'],
    [/\bCouper\b/g, 'Kata'],
    [/\bcouper\b/g, 'kata'],
    [/\bÉmincer\b/g, 'Kata moke'],
    [/\bémincer\b/g, 'kata moke'],
    [/\bHacher\b/g, 'Kata'],
    [/\bhacher\b/g, 'kata'],
    [/\bÉgoutter\b/g, 'Longola mai'],
    [/\bégoutter\b/g, 'longola mai'],
    [/\bAssaisonner\b/g, 'Bongisa monoko'],
    [/\bassaisonner\b/g, 'bongisa monoko'],
    [/\bServir\b/g, 'Salela'],
    [/\bservir\b/g, 'salela'],
    [/\bRetirer\b/g, 'Longola'],
    [/\bretirer\b/g, 'longola'],
    [/\bRéserver\b/g, 'Tika na pembeni'],
    [/\bréserver\b/g, 'tika na pembeni'],
    [/\bRemuer\b/g, 'Balabala'],
    [/\bremuer\b/g, 'balabala'],
    [/\bVerser\b/g, 'Tema'],
    [/\bverser\b/g, 'tema'],
    [/\bDéposer\b/g, 'Tia'],
    [/\bdéposer\b/g, 'tia'],
    [/\bDisposer\b/g, 'Tia'],
    [/\bdisposer\b/g, 'tia'],
    [/\bLaisser mijoter\b/g, 'Tika ekóla na moto ya moke'],
    [/\blaisser mijoter\b/g, 'tika ekóla na moto ya moke'],
    [/\bLaisser\b/g, 'Tika'],
    [/\blaisser\b/g, 'tika'],
    [/\bFaire revenir\b/g, 'Bimasisa'],
    [/\bfaire revenir\b/g, 'bimasisa'],
    [/\bFaire dorer\b/g, 'Bimasisa'],
    [/\bfaire dorer\b/g, 'bimasisa'],
    [/\bFaire fondre\b/g, 'Bimasisa'],
    [/\bfaire fondre\b/g, 'bimasisa'],
    [/\bFaire blanchir\b/g, 'Bila mwa tango'],
    [/\bfaire blanchir\b/g, 'bila mwa tango'],
    [/\bFaire griller\b/g, 'Kotumba'],
    [/\bfaire griller\b/g, 'kotumba'],
    [/\bFaire chauffer\b/g, 'Fútbisa'],
    [/\bfaire chauffer\b/g, 'fútbisa'],
    [/\bFaire cuire\b/g, 'Teká'],
    [/\bfaire cuire\b/g, 'teká'],
    [/Faire fútbisa/gi, 'Fútbisa'],
    [/Faire teká/gi, 'Teká'],
    [/\bFaire tremper\b/g, 'Tia na mai'],
    [/\bfaire tremper\b/g, 'tia na mai'],
    [/\bFaire bouillir\b/g, 'Bila'],
    [/\bfaire bouillir\b/g, 'bila'],
    [/\bPréparer\b/g, 'Bongisa'],
    [/\bpréparer\b/g, 'bongisa'],
    [/\bRéserver\b/g, 'Tika na pembeni'],
    [/\bréserver\b/g, 'tika na pembeni'],
    [/\ben réservant\b/gi, 'na kotika na pembeni'],
    [/\blégèrement\b/gi, 'moke'],
    [/\bla grille\b/gi, 'grille'],
    [/\ble noyau\b/gi, 'mokuwa'],
    [/\bla chair\b/gi, 'nyama ya mbuma'],
    [/\ben morceaux\b/gi, 'na biteni'],
    [/\bune marinade\b/gi, 'marinade'],
    [/\bles mangues\b/gi, 'manga'],
    [/\bles peler\b/gi, 'longola ekóti'],
    [/\bles pieds\b/gi, 'makolo'],
    [/\bdans mai bouillante\b/gi, 'na mai oyo ebukani'],
    [/\bdans une petite casserole\b/gi, 'na casserole moke'],
    [/\bà feu moyen\b/gi, 'na moto ya kati'],
    [/\bà sec\b/gi, 'kozanga mafuta'],
    [/\bdans une poêle\b/gi, 'na poêle'],
    [/\bsans remuer trop tôt\b/gi, 'kozanga kobabalala noki'],
    [/\bjusqu'à caramel\b/gi, 'tii caramel'],
    [/\bjusqu’à caramel\b/gi, 'tii caramel'],
    [/\bun feu ya braises\b/gi, 'moto ya makála'],
    [/\bya braises\b/gi, 'ya makála'],
    [/\bun four\b/gi, 'four'],
    [/\bà part\b/gi, 'na pembeni'],
    [/\béventuellement\b/gi, 'soki okoki'],
    [/\bouverts à table\b/gi, 'ba fungolami na mesa'],
    [/\btiédir\b/gi, 'ekóma mwa malili'],
    [/\bfrotter pour enlever\b/gi, 'kobalola mpo na kolongola'],
    [/\bune partie ya peaux\b/gi, 'eteni ya ba peaux'],
    [/\bsi désiré\b/gi, 'soki olingi'],
    [/\bsi besoin\b/gi, 'soki esengeli'],
    [/\bsans surcharger\b/gi, 'kozanga kotonda mingi'],
    [/\bplonger\b/gi, 'tia na kati'],
    [/\bremonter le feu\b/gi, 'bakisa moto'],
    [/\bles redorer\b/gi, 'bimasisa lisusu'],
    [/\bdéglacer\b/gi, 'longola na'],
    [/\bd'un trait ya mai\b/gi, 'na mwa mai'],
    [/\btika réduire\b/gi, 'tika ekóma moke'],
    [/\btika tiédir\b/gi, 'tika ekóma mwa malili'],
    [/\bDélayer\b/g, 'Bakisa mpe balabala'],
    [/\bdélayer\b/g, 'bakisa mpe balabala'],
    [/\bPorter à frémissement\b/g, 'Bila tii etambola moke'],
    [/\bporter à frémissement\b/g, 'bila tii etambola moke'],
    [/\bPorter à ébullition\b/g, 'Bila tii ebukana'],
    [/\bporter à ébullition\b/g, 'bila tii ebukana'],
    [/\bles haricots\b/gi, 'madesu'],
    [/\bles morceaux\b/gi, 'biteni'],
    [/\ble mélange\b/gi, 'mélange'],
    [/\ble reste\b/gi, 'oyo etikali'],
    [/\bfroide\b/gi, 'ya malili'],
    [/\bchaude\b/gi, 'ya moto'],
    [/\ben remuant\b/gi, 'na kobabalala'],
    [/\bles égoutter\b/gi, 'longola mai'],
    [/\bles rincer\b/gi, 'sukola'],
    [/\bune nuit\b/gi, 'butu moko'],
    [/\bChauffer\b/g, 'Fútbisa'],
    [/\bchauffer\b/g, 'fútbisa'],
    [/\bCouvrir\b/g, 'Funga'],
    [/\bcouvrir\b/g, 'funga'],
    [/\bSaler\b/g, 'Tia muni'],
    [/\bsaler\b/g, 'tia muni'],
    [/\bPoursuivre la cuisson\b/g, 'Kobakisela koteka'],
    [/\bpoursuivre la cuisson\b/g, 'kobakisela koteka'],
    [/\bjusqu'à ce que\b/gi, 'tii'],
    [/\bjusqu’à ce que\b/gi, 'tii'],
    [/\bpuis\b/g, 'sima'],
    [/\bensuite\b/g, 'sima'],
    [/\benfine\b/g, 'na nsuka'],
    [/\bpendant\b/g, 'na'],
    [/\benviron\b/g, 'pene'],
    [/\bfacultatif\b/gi, 'ya lingi'],
    [/\bà découvert\b/gi, 'na sanza'],
    [/\bdans l'huile\b/gi, 'na mafuta'],
    [/\bdans l’huile\b/gi, 'na mafuta'],
    [/\bd'eau\b/gi, 'ya mai'],
    [/\bd’eau\b/gi, 'ya mai'],
    [/\bles oignons?\b/gi, 'aluboka'],
    [/\bl'oignon\b/gi, 'aluboka'],
    [/\bl’oignon\b/gi, 'aluboka'],
    [/\bles tomates?\b/gi, 'tomatisi'],
    [/\bla tomate\b/gi, 'tomatisi'],
    [/\ble piment\b/gi, 'pili-pili'],
    [/\bles piments?\b/gi, 'pili-pili'],
    [/\ble sel\b/gi, 'muni'],
    [/\bde sel\b/gi, 'ya muni'],
    [/\bl'eau\b/gi, 'mai'],
    [/\bl’eau\b/gi, 'mai'],
    [/\ble poulet\b/gi, 'soso'],
    [/\bla viande\b/gi, 'nyama'],
    [/\ble poisson\b/gi, 'mbisi'],
    [/\bles poissons?\b/gi, 'mbisi'],
    [/\bles arachides?\b/gi, 'nguba'],
    [/\bles feuilles\b/gi, 'matiti'],
    [/\bavec\b/g, 'na'],
    [/\bet\b/g, 'mpe'],
    [/\bou\b/g, 'to'],
  ];
  for (const [re, rep] of verbs) t = t.replace(re, rep);
  return t;
}

export function translateFrStep(line: string): string {
  const t = normApostrophe(line).trim();
  if (FR_STEP_EXACT[t]) return FR_STEP_EXACT[t];
  const ruled = applyFrStepRules(t);
  if (ruled !== t) return ruled;
  // Prefer kitchen fallthrough over ingredient-line heuristics for full sentences.
  if (/[.!?]$/.test(t) || /^(Laver|Ajouter|Cuire|Mélanger|Faire|Servir|Assaisonner|Laisser|Verser|Couper|Incorporer|Égoutter|Retirer|Chauffer|Porter|Réserver|Remuer|Déposer|Disposer|Poursuivre|Saler|Couvrir)/i.test(t)) {
    return fallthroughFrKitchen(t);
  }
  return fallthroughFrKitchen(translateFrIngredientLine(t));
}

export function translateEnStep(line: string): string {
  const t = line.trim();
  if (EN_STEP_EXACT[t]) return EN_STEP_EXACT[t];
  if (looksFrench(t)) return translateFrStep(t);
  let s = t;
  s = s.replace(/^Strip the leaves, keep the tender stems, and wash everything several times\.?$/i, EN_STEP_EXACT['Strip the leaves, keep the tender stems, and wash everything several times.']);
  s = s.replace(/^Roughly chop the leaves and stems\.?$/i, EN_STEP_EXACT['Roughly chop the leaves and stems.']);
  s = s.replace(/^Sweat the onion in the oil, then add the tomatoes and chili\.?$/i, EN_STEP_EXACT['Sweat the onion in the oil, then add the tomatoes and chili.']);
  s = s.replace(/^Add the amaranth and water, cover, and cook for about ten minutes\.?$/i, EN_STEP_EXACT['Add the amaranth and water, cover, and cook for about ten minutes.']);
  s = s.replace(/^Stir in the pounded peanuts, season with salt, and mix\.?$/i, EN_STEP_EXACT['Stir in the pounded peanuts, season with salt, and mix.']);
  s = s.replace(/^Continue cooking uncovered until the leaves are tender and the sauce lightly thickened\.?$/i, EN_STEP_EXACT['Continue cooking uncovered until the leaves are tender and the sauce lightly thickened.']);
  s = s.replace(/^Serve with /i, 'Salela elongo na ');
  s = s.replace(/^Wash /i, 'Sukola ');
  s = s.replace(/^Add /i, 'Bakisa ');
  s = s.replace(/^Cover /i, 'Funga ');
  s = s.replace(/^Season /i, 'Bongisa monoko ');
  s = s.replace(/^Brown /i, 'Bimasisa ');
  s = s.replace(/^Simmer /i, 'Bilisa na moto ya moke ');
  s = s.replace(/^Return /i, 'Zongisa ');
  s = s.replace(/\bonion\b/gi, 'aluboka');
  s = s.replace(/\btomatoes?\b/gi, 'tomatisi');
  s = s.replace(/\bpeanuts?\b/gi, 'nguba');
  s = s.replace(/\bwater\b/gi, 'mai');
  s = s.replace(/\boil\b/gi, 'mafuta');
  s = s.replace(/\bsalt\b/gi, 'muni');
  s = s.replace(/\bfish\b/gi, 'mbisi');
  s = s.replace(/\bchicken\b/gi, 'soso');
  s = s.replace(/ and /gi, ' mpe ');
  s = s.replace(/ or /gi, ' to ');
  s = s.replace(/ with /gi, ' na ');
  s = s.replace(/ until /gi, ' tii ');
  return s;
}

function looksFrench(s: string): boolean {
  return /[àâäéèêëïîôùûüç]|(\b(les|des|une|dans|puis|jusqu|cuire|ajouter|servir|feuilles|oignon|tomates|poisson|mijoter|faire|remettre|verser|ajuster|dorer|réserver|même|concassées|épaisse|marmite|laisser|incorporer|passer|replier|détacher|émincer|poursuivre|chauffer|porter|délayer|retourner|façonner|suivre|disposer|arroser|hermétiquement)\b)/i.test(
    s,
  );
}

export function translateKitchenLine(line: string): string {
  const t = line.trim();
  if (looksFrench(t)) return translateFrIngredientLine(t);
  return translateEnStep(t);
}

export function translateFrTitle(title: string): string {
  let s = normApostrophe(title);
  s = s.replace(/^Liboke de poisson$/i, 'Liboke ya mbisi');
  s = s.replace(/^Poulet à la moambe$/i, 'Soso ya mwambe');
  s = s.replace(/^Fufu de manioc$/i, 'Fufu ya manioc');
  s = s.replace(/^Kapenta aux tomates$/i, 'Kapenta na tomatisi');
  s = s.replace(/ aux tomates$/i, ' na tomatisi');
  s = s.replace(/ de poisson$/i, ' ya mbisi');
  s = s.replace(/ de viande$/i, ' ya nyama');
  s = s.replace(/ de manioc$/i, ' ya manioc');
  s = s.replace(/ à la moambe$/i, ' na moambe');
  s = s.replace(/^Recette /i, '');
  return s.trim();
}

const LN_DESCRIPTION_BY_SLUG: Record<string, string> = {
  'biteku-teku-kasai':
    'Biteku-teku (lenga-lenga) : matiti ya biteku-teku ebilisami na aluboka, tomatisi mpe nguba — bilei ya Kasaï monene, ndeko ya ndunda ya Kinshasa.',
  pondu:
    'Pondu (saka-saka) : matabisi ya manioc ebilisami na mafuta ya palmier, aluboka mpe mbisi ya fumé — classique ya mokolo na mokolo na RDC.',
  'moambe-poulet':
    'Soso ya mwambe : sauce ya moambe (pulpe ya noix de palme) ebilisami na soso — bilei ya fête oyo ezwami mingi na RDC.',
  'liboke-poisson':
    'Liboke ya mbisi (maboke) : mbisi oyo bongisaki na espece, ekangami na ndunda ya banane mpe ebilisami na mvuke — na nuka malamu mpe ya pétrole.',
  'fufu-manioc':
    'Fufu ya manioc : farine ya manioc obalabala na mai ya moto tii pâte ya pete mpe elastic — accompagnement ya libota na RDC, ekeseni na bukari ya maïs.',
  'kapenta-tomates':
    'Kapenta na tomatisi : mbisi mike (ya sika to kokauka) kotumbami sima na sauce ya tomatisi-aluboka — classique ya Haut-Katanga mpe Tanganyika.',
};

export function translateFrDescription(desc: string, slug?: string): string {
  if (slug && LN_DESCRIPTION_BY_SLUG[slug]) return LN_DESCRIPTION_BY_SLUG[slug];

  let s = normApostrophe(desc);
  s = s.replace(/^Recette du /i, '');
  s = s.replace(/^Recette de la /i, '');
  s = s.replace(/^Recette de /i, '');
  s = s.replace(/^Recette d['']/i, '');
  s = translateFrNP(s);
  s = s.replace(/mijotées? à l'huile/gi, 'ebilisami na mafuta');
  s = s.replace(/mijotées? avec/gi, 'ebilisami na');
  s = s.replace(/mijotée avec/gi, 'ebilisami na');
  s = s.replace(/mijoté avec/gi, 'ebilisami na');
  s = s.replace(/sauce onctueuse à la pulpe de noix de palme/gi, 'sauce ya moambe (pulpe ya noix de palme)');
  s = s.replace(/mariné aux épices/gi, 'bongisami na espece');
  s = s.replace(/enveloppé dans des feuilles de bananier et cuit à la vapeur/gi,
    'ekangami na ndunda ya banane mpe ebilisami na mvuke');
  s = s.replace(/nappés d'une sauce/gi, 'na sauce');
  s = s.replace(/poêlés puis/gi, 'kotumbami sima');
  s = s.replace(/amarante/gi, 'matiti ya biteku-teku');
  s = s.replace(/Grand Kasaï/gi, 'Kasaï monene');
  s = s.replace(/Grand Katanga/gi, 'Katanga monene');
  s = s.replace(/Toute la RDC/gi, 'Na RDC mobimba');
  s = s.replace(/Haut-Katanga & Tanganyika/gi, 'Haut-Katanga mpe Tanganyika');
  s = s.replace(/ — plat du /gi, ' — bilei ya ');
  s = s.replace(/ — plat de /gi, ' — bilei ya ');
  s = s.replace(/ — plat de fête très répandu en RDC/gi, ' — bilei ya fête oyo ezwami mingi na RDC');
  s = s.replace(/cousin des /gi, 'ndeko ya ');
  s = s.replace(/cousin de /gi, 'ndeko ya ');
  s = s.replace(/classique du /gi, 'classique ya ');
  s = s.replace(/classique du quotidien en RDC/gi, 'classique ya mokolo na mokolo na RDC');
  s = s.replace(/accompagnement de base/gi, 'accompagnement ya libota');
  s = s.replace(/parfumé et fondant/gi, 'na nuka malamu mpe ya pétrole');
  s = s.replace(/petits poissons \(frais ou séchés\) poêlés/gi, 'mbisi mike (ya sika to kokauka) kotumbami');
  s = s.replace(/travaillée à l'eau chaude jusqu'à une pâte lisse et élastique/gi,
    'obalabala na mai ya moto tii pâte ya pete mpe elastic');
  s = s.replace(/travaillée à l'eau chaude jusqu'à une pâte/gi,
    'obalabala na mai ya moto tii pâte');
  s = s.replace(/distinct du /gi, 'ekeseni na ');
  s = s.replace(/ avec /gi, ' na ');
  s = s.replace(/ et /gi, ' mpe ');
  const trimmed = s.trim();
  if (/^[\w-]+(\s|\()/i.test(trimmed)) return polishLn(trimmed);
  return polishLn(trimmed);
}

const LN_SEO_BY_SLUG: Record<string, string> = {
  'biteku-teku-kasai': 'Biteku-teku / lenga-lenga — matiti ya Kasaï',
  pondu: 'Pondu (saka-saka) — matabisi ya manioc',
  'moambe-poulet': 'Soso ya mwambe — recette ya moambe',
  'liboke-poisson': 'Liboke ya mbisi (maboke)',
  'fufu-manioc': 'Fufu ya manioc — accompagnement',
  'kapenta-tomates': 'Kapenta na tomatisi',
};

export function translateFrSeoTitle(seo: string, slug?: string): string {
  if (slug && LN_SEO_BY_SLUG[slug]) return LN_SEO_BY_SLUG[slug];
  let s = normApostrophe(seo);
  s = s.replace(/^Recette /i, '');
  s = s.replace(/ de /gi, ' ya ');
  s = s.replace(/ du /gi, ' ya ');
  s = s.replace(/ aux /gi, ' na ');
  s = s.replace(/ à la /gi, ' na ');
  s = translateFrNP(s);
  return polishLn(s.trim());
}

export function translateFrImageAlt(alt: string): string {
  let s = normApostrophe(alt);
  s = s.replace(/Feuilles fraîches d'amarante utilisées pour le biteku-teku/i,
    'Matiti ya biteku-teku ya sika mpo na koteka');
  s = s.replace(/utilisées pour/gi, 'mpo na');
  s = s.replace(/servies avec/gi, 'esalemi elongo na');
  s = s.replace(/servie en accompagnement/gi, 'esalemi lokola accompagnement');
  s = s.replace(/Un liboke entrouvert dans ses feuilles, prêt à être dégusté/i,
    'Liboke efungwami na ndunda na yango, esengeli kolya');
  s = s.replace(/Petits poissons kapenta préparés pour un repas/i,
    'Kapenta mike elakisami mpo na bilei');
  s = s.replace(/Boule de fufu \(foufou\) servie en accompagnement/i,
    'Boule ya fufu esalemi lokola accompagnement');
  return translateFrNP(s);
}

export function translateFrRegion(region: string): string {
  return REGION_FR[region] ?? REGION_EN[region] ?? translateFrNP(region);
}

export function translateFrTag(tag: string): string {
  if (REGION_FR[tag] || REGION_EN[tag]) return translateFrRegion(tag);
  const map: Record<string, string> = {
    légumes: 'mboga',
    légume: 'mboga',
    végétarien: 'mboga',
    quotidien: 'mokolo na mokolo',
    traditionnel: 'ya libota',
    fête: 'fête',
    accompagnement: 'accompagnement',
    'feuille de bananier': 'ndunda ya banane',
    'feuilles de manioc': 'matabisi ya manioc',
    'huile de palme': 'mafuta ya palmier',
    'fufu manioc': 'fufu ya manioc',
    'farine de manioc': 'farine ya manioc',
    amarante: 'biteku-teku',
    poisson: 'mbisi',
    tomate: 'tomatisi',
    Tanganyika: 'Tanganyika',
  };
  return map[tag] ?? tag;
}

export function translateFrBody(body: string): string {
  let s = fixLinks(body) ?? body;
  s = normApostrophe(s);

  const blocks: [RegExp, string][] = [
    [
      /Le \*\*biteku-teku\*\* est populaire au Kasaï\.[\s\S]*?Contexte marché : \[guide du marché\]\(\/ln\/guides\/marche\/\)\./,
      '**Biteku-teku** ezali lokumu na Kasaï. Na Kinshasa, mboga ya verdure ya mokolo na mokolo babengaka [ndunda](/ln/recettes/ndunda/) mbala mingi ; matiti wana moko babengaka **lenga-lenga**. Balyaka yango na [bukari](/ln/recettes/bukari-katanga/) (bidia na Kasaï) ; okoki kolimbola nguba.\n\n**Kosukola** : biteku-teku ya zando ezali na fumbe mbala mingi — sukola na mai makenda mingi tii mai ezala pete.\n\n**Soki nguba ezali te** : ndenge ya pete, pene na ndunda ya Kinshasa ; na nsuka tia mwa mafuta ya palmier soki ozali na yango.\n\nMatiti mosusu : [matembele](/ln/recettes/matembele-katanga/), [pondu](/ln/recettes/pondu/). Contexte ya zando : [guide ya zando](/ln/guides/marche/).',
    ],
    [
      /Le \*\*pondu\*\*, aussi appelé \*\*saka-saka\*\* ou mpondu,[\s\S]*?\[fufu de manioc\]\(\/ln\/recettes\/fufu-manioc\/\)\./,
      '**Pondu**, babengami lisusi **saka-saka** to **mpondu**, ezali recette ya matabisi ya manioc oyo bato balukaka mingi na bilei ya Congo. Bato basalaka lisusu na ndenge ya mboga, sans mbisi to nyama, mpo na mikolo ya jeûne to bilei ya vendredi na libota mosusu.\n\nMpo na geste, zando mpe ndenge ya biteni, tánga [guide ya pondu](/ln/guides/pondu/). Na Est, geste moko babengaka mbala mingi [sombe](/ln/recettes/sombe/). Mpo na accompagnement : [chikwangue](/ln/recettes/chikwangue/) to [fufu ya manioc](/ln/recettes/fufu-manioc/).',
    ],
    [
      /Le \*\*liboke de poisson\*\*[\s\S]*?\[guide du marché\]\(\/ln\/guides\/marche\/\)\./,
      '**Liboke ya mbisi** (maboke) ezali technique mpe bilei : ndunda ya banane ekanga mbisi, ekanga mai mpe epa nuka na nyama. Soki ndunda ya sika ezali te, papier cuisson mpe alu ezali solo na diaspora.\n\nLiboke mosusu : [liboke ya nyama](/ln/recettes/liboke-viande/). Mpo na zando mpe eleko, tala [guide ya zando](/ln/guides/marche/).',
    ],
    [
      /Le \*\*fufu de manioc\*\*[\s\S]*?\[moambe\]\(\/ln\/recettes\/moambe-poulet\/\)\./,
      '**Fufu ya manioc** (foufou) ozaa na maboko mpo na kozaa sauce. Ekeseni na [bukari](/ln/recettes/bukari-katanga/) (farine ya maïs, Est) mpe na [chikwangue](/ln/recettes/chikwangue/) (bâton ya fermenté). Vue ya mozindo : [guide ya fufu](/ln/guides/fufu/).\n\nClassique na pembeni : [pondu](/ln/recettes/pondu/), [sombe](/ln/recettes/sombe/), [moambe](/ln/recettes/moambe-poulet/).',
    ],
    [
      /Autour des lacs Tanganyika et Moero, le \*\*kapenta\*\*[\s\S]*?\[matembele\]\(\/ln\/recettes\/matembele-katanga\/\)\./,
      'Na ngirisi ya Tanganyika mpe Moero, **kapenta** ekoki kozala ya sika to ya kokauka — yango ebongola kosukola mpe monoko. Ndeko na lac Tanganyika : [sambaza](/ln/recettes/sambaza/). Batia yango mbala mingi na [bukari](/ln/recettes/bukari-katanga/) to [matembele](/ln/recettes/matembele-katanga/).',
    ],
    [
      /Le \*\*poulet à la moambe\*\*[\s\S]*?\[poisson à la moambe\]\(\/ln\/recettes\/poisson-moambe\/\)\./,
      '**Soso ya mwambe** (mwamba) ezali moko ya bilei ya Congo oyo bato bayebi mingi libanda ya RDC. Moambe ezali na boîte to sachet na magazini ya Afríka ; okoki mpe kobimisa yango na noix de palme ya sika.\n\nMpo na koyeba sauce moko — texture, badiliko na diaspora — tala [guide ya moambe](/ln/guides/moambe/). Ndenge ya mbisi : [mbisi na moambe](/ln/recettes/poisson-moambe/).',
    ],
  ];
  for (const [re, rep] of blocks) {
    if (re.test(s)) {
      s = s.replace(re, rep);
      return s;
    }
  }

  s = s.replace(/\*\*([^*]+)\*\* est populaire au/gi, '**$1** ezali lokumu na');
  s = s.replace(/aussi appelé/gi, 'babengami lisusi');
  s = s.replace(/est la recette/gi, 'ezali recette');
  s = s.replace(/est à la fois/gi, 'ezali mpe');
  s = s.replace(/lire le /gi, 'tánga ');
  s = s.replace(/guide du marché/gi, 'guide ya zando');
  s = s.replace(/guide du pondu/gi, 'guide ya pondu');
  s = s.replace(/guide fufu/gi, 'guide ya fufu');
  s = s.replace(/En accompagnement/gi, 'Mpo na accompagnement');
  s = s.replace(/Autour des lacs/gi, 'Na ngirisi ya mayi');
  s = s.replace(/ peut être /gi, ' ekoki kozala ');
  s = s.replace(/ cela change /gi, ' yango ebongola ');
  s = s.replace(/ Cousin /gi, ' Ndeko ');
  s = s.replace(/ On le sert /gi, ' Batia yango ');
  s = s.replace(/ souvent avec /gi, ' mbala mingi na ');
  return translateFrNP(s);
}

function pickSourceIndex(i: number, enCount: number, frLen: number): number {
  if (frLen <= enCount) return i;
  if (enCount <= 1) return 0;
  if (i === enCount - 1) return frLen - 1;
  if (i === enCount - 2) return frLen - 2;
  return Math.min(i, frLen - 3);
}

/** When FR has fewer steps than EN, map each EN index to FR index or -1 (use EN). */
const FR_SHORT_STEP_MAP: Record<string, number[]> = {
  'moambe-poulet': [0, 1, -1, 2, 3, 4],
};

function pickSourceLine(
  i: number,
  enLines: string[],
  frLines?: string[],
  slug?: string,
): string {
  const en = enLines[i] ?? '';
  if (!frLines?.length) return en;
  if (frLines.length === enLines.length) return frLines[i] ?? en;
  if (frLines.length > enLines.length) {
    const fi = pickSourceIndex(i, enLines.length, frLines.length);
    return frLines[fi] ?? en;
  }
  const map = slug ? FR_SHORT_STEP_MAP[slug] : undefined;
  if (map && map.length === enLines.length) {
    const fi = map[i];
    if (fi === -1) return en;
    return frLines[fi] ?? en;
  }
  if (i < frLines.length) return frLines[i] ?? en;
  return en;
}

function usedFrSource(
  i: number,
  enLines: string[],
  frLines: string[] | undefined,
  slug?: string,
): boolean {
  if (!frLines?.length) return false;
  if (frLines.length === enLines.length) return true;
  if (frLines.length > enLines.length) return true;
  const map = slug ? FR_SHORT_STEP_MAP[slug] : undefined;
  if (map?.length === enLines.length) return map[i] !== -1;
  return i < frLines.length;
}

export function pickAndTranslateLines(
  enLines: string[],
  frLines: string[] | undefined,
  slug?: string,
): string[] {
  return enLines.map((en, i) => {
    const src = pickSourceLine(i, enLines, frLines, slug);
    if (usedFrSource(i, enLines, frLines, slug) || looksFrench(src)) {
      return polishLn(translateFrStep(src));
    }
    return polishLn(translateEnStep(en));
  });
}

export function translateEnIngredient(line: string): string {
  let s = line.trim();
  if (EN_STEP_EXACT[s]) return s;
  s = s.replace(/^1 small chili, optional$/i, 'Pili-pili 1 moke (ya lingi)');
  s = s.replace(/^Salt$/i, 'Muni');
  s = s.replace(/^Water$/i, 'Mai');
  s = s.replace(/(\d+(?:\.\d+)?)\s*(g|kg|ml|l)\s+/gi, '$1 $2 ya ');
  s = s.replace(/, optional/gi, ' (ya lingi)');
  s = s.replace(/, sliced/gi, ', mikatami');
  s = s.replace(/, crushed/gi, ', mibetami');
  s = s.replace(/, chopped/gi, ', mikatami');
  s = s.replace(/cassava flour \(fufu \/ milled cossette\)/gi, 'farine ya manioc (fufu / cossette)');
  s = s.replace(/cassava leaves \(pondu\), fresh or frozen/gi,
    'matabisi ya manioc (pondu), ya sika to congelé');
  s = s.replace(/red palm oil/gi, 'mafuta ya palmier rouge');
  s = s.replace(/whole firm fish, cleaned and cut into pieces/gi,
    'mbisi ya makasi, esukami mpe kata na biteni');
  s = s.replace(/^Banana leaves$/i, 'Ndunda ya banane');
  s = s.replace(
    /^Large banana leaves \(or baking paper \+ foil\)$/i,
    'Ndunda ya banane monene (to papier cuisson + alu)',
  );
  s = s.replace(/\bonions?\b/gi, 'aluboka');
  s = s.replace(/\btomatoes?\b/gi, 'tomatisi');
  s = s.replace(/\bgarlic cloves\b/gi, 'mikolo ya ail');
  s = s.replace(/\bchicken\b/gi, 'soso');
  s = s.replace(/\bfish\b/gi, 'mbisi');
  s = s.replace(/\boil\b/gi, 'mafuta');
  s = s.replace(/\bchili\b/gi, 'pili-pili');
  s = s.replace(/^1 small chili, optional$/i, 'Pili-pili 1 moke (ya lingi)');
  s = s.replace(/\bsalt\b/gi, 'muni');
  s = s.replace(/\bwater\b/gi, 'mai');
  s = s.replace(/ and /gi, ' mpe ');
  s = s.replace(/ or /gi, ' to ');
  return polishLn(s);
}

export function pickAndTranslateIngredients(
  enLines: string[],
  frLines: string[] | undefined,
  slug?: string,
): string[] {
  return enLines.map((en, i) => {
    const src = pickSourceLine(i, enLines, frLines, slug);
    if (usedFrSource(i, enLines, frLines, slug) || looksFrench(src)) {
      return polishLn(translateFrIngredientLine(src));
    }
    return polishLn(translateEnIngredient(en));
  });
}

export function polishLn(s: string): string {
  let t = s;
  t = t.replace(/Faire fútbisa/gi, 'Fútbisa');
  t = t.replace(/Faire teká/gi, 'Teká');
  t = t.replace(/Faire fondre/gi, 'Bimasisa');
  t = t.replace(/Faire blanchir/gi, 'Bila mwa tango');
  t = t.replace(/Faire griller/gi, 'Kotumba');
  t = t.replace(/Faire revenir/gi, 'Bimasisa');
  t = t.replace(/Faire dorer/gi, 'Bimasisa');
  t = t.replace(/Faire cuire/gi, 'Teká');
  t = t.replace(/\bau plat\b/gi, 'na plat');
  t = t.replace(/\bPréparer\b/g, 'Bongisa');
  t = t.replace(/\bpréparer\b/g, 'bongisa');
  t = t.replace(/\bRéserver\.?/g, 'Tika na pembeni.');
  t = t.replace(/\bréserver\b/g, 'tika na pembeni');
  t = t.replace(/\bServir\b/g, 'Salela');
  t = t.replace(/\bCuire\b/g, 'Teká');
  t = t.replace(/\bCouper\b/g, 'Kata');
  t = t.replace(/\bet\b/gi, 'mpe');
  t = t.replace(/\bdu\b/gi, 'ya');
  t = t.replace(/\bdes\b/gi, 'ya');
  t = t.replace(/\bde\b/gi, 'ya');
  t = t.replace(/feuilles d'amarante/gi, 'matiti ya biteku-teku');
  t = t.replace(/feuilles de manioc \(pondu\)/gi, 'matabisi ya manioc (pondu)');
  t = t.replace(/fraîches ou congelées/gi, 'ya sika to congelé');
  t = t.replace(/d'huile de palme rouge/gi, 'ya mafuta ya palmier rouge');
  t = t.replace(/d'huile de palme/gi, 'ya mafuta ya palmier');
  t = t.replace(/d'eau/gi, 'ya mai');
  t = t.replace(/d'huile/gi, 'ya mafuta');
  t = t.replace(/coupé en morceaux/gi, 'kata na biteni');
  t = t.replace(/aux tomates/gi, 'na tomatisi');
  t = t.replace(/à la moambe/gi, 'na moambe');
  t = t.replace(/Sel et poivre/gi, 'Muni mpe poivre');
  t = t.replace(/^muni$/i, 'Muni');
  t = t.replace(/^mai$/i, 'Mai');
  t = t.replace(/optionnel/gi, 'ya lingi');
  t = t.replace(/hachés|écrasées|émincés/gi, 'mikatami');
  t = t.replace(/moyennes?/gi, 'ya kati');
  t = t.replace(/moyens/gi, 'ya kati');
  t = t.replace(/red palm mafuta/gi, 'mafuta ya palmier rouge');
  t = t.replace(/Banana leaves/gi, 'Ndunda ya banane');
  t = t.replace(/\bRecette ya\b/gi, '');
  t = t.replace(/\bmariné aux épices\b/gi, 'bongisami na espece');
  t = t.replace(/\bdu quotidien\b/gi, 'ya mokolo na mokolo');
  t = t.replace(/\btrès répandu\b/gi, 'ezwami mingi');
  t = t.replace(/\bl'huile\b/gi, 'mafuta');
  t = t.replace(/\bl’huile\b/gi, 'mafuta');
  t = t.replace(/\bl'ail\b/gi, 'ail');
  t = t.replace(/\bl’ail\b/gi, 'ail');
  t = t.replace(/\ble concentré\b/gi, 'concentré');
  t = t.replace(/\bles œufs\b/gi, 'ba makaki');
  t = t.replace(/\bles frites\b/gi, 'ba frites');
  t = t.replace(/\bune poêle\b/gi, 'poêle');
  t = t.replace(/\bun gril\b/gi, 'grille');
  t = t.replace(/\btrès chaud\b/gi, 'ya moto mingi');
  t = t.replace(/\bla cuisson\b/gi, 'koteka');
  t = t.replace(/\bla moitié\b/gi, 'ndámbo');
  t = t.replace(/\bsucre mpe mai\b/gi, 'sukali mpe mai');
  return t.trim().replace(/\s{2,}/g, ' ');
}

// Legacy exports for generator imports
export const REGION_LN = { ...REGION_EN, ...REGION_FR };
export function translateFrMeta(text: string): string {
  return translateFrDescription(text);
}
export function translateFrLine(line: string): string {
  return looksFrench(line) ? translateFrStep(line) : translateEnStep(line);
}
export function translateDescription(text: string): string {
  return looksFrench(text) ? translateFrDescription(text) : text;
}
export function translateBody(text: string): string {
  return translateFrBody(text);
}
export function translateTag(tag: string): string {
  return translateFrTag(tag);
}
export function alignLines(
  enLines: string[],
  frLines: string[] | undefined,
  _frMap?: (s: string) => string,
  slug?: string,
): string[] {
  return pickAndTranslateLines(enLines, frLines, slug);
}
