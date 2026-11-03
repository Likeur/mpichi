import type { Locale } from '../i18n/config';
import type { RegionId } from './taxonomy/index';
import type { RecipeCategory } from './taxonomy';

export type HubCopy = {
  title: string;
  description: string;
  intro: string;
};

const REGION_HUB: Partial<Record<RegionId, Record<Locale, HubCopy>>> = {
  kinshasa: {
    fr: {
      title: 'Recettes de Kinshasa',
      description:
        'Cuisine de Kinshasa : street food, Kinkole, plats du quotidien — recettes congolaises documentées sur Mpichi.',
      intro:
        'De Kinkole aux étals du soir : brochettes, mikate, sauces et gestes ancrés dans la capitale.',
    },
    en: {
      title: 'Kinshasa recipes',
      description:
        'Kinshasa cooking: street food, Kinkole grills, everyday dishes — Congolese recipes documented on Mpichi.',
      intro:
        'From Kinkole to evening stalls: skewers, mikate, sauces and gestures rooted in the capital.',
    },
    ln: {
      title: 'Ba recettes ya Kinshasa',
      description:
        'Bilei ya Kinshasa : street food, Kinkole, bilei ya mokolo — ba recettes ya Congo na Mpichi.',
      intro:
        'Euti na Kinkole tii na ba étals ya mpokwa : brochettes, mikate, sauces mpe ba gestes ya capitale.',
    },
  },
  grand_kasai: {
    fr: {
      title: 'Cuisine du Grand Kasaï',
      description:
        'Recettes du Grand Kasaï : biteku-teku, ntaba mijotée, haricots aux arachides — catalogue Mpichi.',
      intro:
        'Feuilles, arachides et mijotés : un répertoire ancré entre fleuve et plateaux du Kasaï.',
    },
    en: {
      title: 'Greater Kasai cuisine',
      description:
        'Greater Kasai recipes: biteku-teku, simmered goat, peanut beans — Mpichi catalogue.',
      intro: 'Greens, peanuts and slow stews: a repertoire rooted between river and Kasai plateaus.',
    },
    ln: {
      title: 'Bilei ya Kasaï monene',
      description:
        'Ba recettes ya Kasaï monene : biteku-teku, ntaba ebilisami, madesu na nguba — kataloge Mpichi.',
      intro: 'Matiti, nguba mpe ba mijotés : répertoire ezwami kati ya ebale mpe ba plateaux ya Kasaï.',
    },
  },
  grand_katanga: {
    fr: {
      title: 'Cuisine du Grand Katanga',
      description:
        'Recettes du Katanga : bukari, kapenta, matembele, sambaza — cuisine du sud-est sur Mpichi.',
      intro:
        'Bukari, lacs et braises : les gestes du sud-est, de Lubumbashi aux rives du Tanganyika.',
    },
    en: {
      title: 'Greater Katanga cuisine',
      description:
        'Katanga recipes: bukari, kapenta, matembele, sambaza — south-east Congolese cooking on Mpichi.',
      intro:
        'Bukari, lakes and braises: south-east gestures from Lubumbashi to the Tanganyika shores.',
    },
    ln: {
      title: 'Bilei ya Katanga monene',
      description:
        'Ba recettes ya Katanga : bukari, kapenta, matembele, sambaza — bilei ya sud-est na Mpichi.',
      intro:
        'Bukari, mayi mpe makála : ba gestes ya sud-est, euti Lubumbashi tii na ngirisi ya Tanganyika.',
    },
  },
  kongo_central: {
    fr: {
      title: 'Cuisine du Kongo-Central',
      description:
        'Recettes du Kongo-Central : chikwangue, mbisi na kwanga, nsafu — catalogue Mpichi.',
      intro: 'Kwanga, poisson et fruits du bas-fleuve : un territoire de gestes côtiers et forestiers.',
    },
    en: {
      title: 'Kongo-Central cuisine',
      description:
        'Kongo-Central recipes: chikwangue, fish with kwanga, nsafu — Mpichi catalogue.',
      intro: 'Kwanga, fish and lower-river fruit: coastal and forest gestures in one territory.',
    },
    ln: {
      title: 'Bilei ya Kongo-Central',
      description:
        'Ba recettes ya Kongo-Central : chikwangue, mbisi na kwanga, nsafu — kataloge Mpichi.',
      intro: 'Kwanga, mbisi mpe mbuma ya bas-fleuve : eteni ya ba gestes ya litoral mpe ya mituya.',
    },
  },
  bassin_congo: {
    fr: {
      title: 'Cuisine du bassin du Congo',
      description:
        'Recettes du bassin du Congo : liboke, feuilles, poisson de forêt — sur Mpichi.',
      intro: 'Feuilles de bananier, fumée et fleuve : des plats liés aux forêts du bassin.',
    },
    en: {
      title: 'Congo Basin cuisine',
      description:
        'Congo Basin recipes: liboke, forest greens, river fish — on Mpichi.',
      intro: 'Banana leaves, smoke and river: dishes tied to the basin forests.',
    },
    ln: {
      title: 'Bilei ya bassin ya Congo',
      description:
        'Ba recettes ya bassin ya Congo : liboke, matiti, mbisi ya mituya — na Mpichi.',
      intro: 'Ndunda ya banane, fumée mpe ebale : bilei ekangami na mituya ya bassin.',
    },
  },
  nationwide: {
    fr: {
      title: 'Recettes de toute la RDC',
      description:
        'Plats partagés à travers la République démocratique du Congo — catalogue Mpichi.',
      intro: 'Des recettes qui circulent d’une province à l’autre, sans se limiter à une seule ville.',
    },
    en: {
      title: 'Recipes from across the DRC',
      description:
        'Dishes shared across the Democratic Republic of the Congo — Mpichi catalogue.',
      intro: 'Recipes that travel from province to province, not limited to a single city.',
    },
    ln: {
      title: 'Ba recettes ya RDC mobimba',
      description:
        'Bilei oyo ekabolami na Republiki demokratiki ya Kongo mobimba — kataloge Mpichi.',
      intro: 'Ba recettes oyo etambolaka euti na province moko tii na mosusu, kozanga kobengama na engumba moko.',
    },
  },
  kivu: {
    fr: {
      title: 'Cuisine du Kivu',
      description:
        'Recettes du Nord et Sud-Kivu : bugali, pilau, nyama — catalogue Mpichi.',
      intro: 'Lacs, collines et tables de l’Est : un répertoire entre montagne et marché.',
    },
    en: {
      title: 'Kivu cuisine',
      description:
        'North and South Kivu recipes: bugali, pilau, nyama — Mpichi catalogue.',
      intro: 'Lakes, hills and eastern tables: a repertoire between mountain and market.',
    },
    ln: {
      title: 'Bilei ya Kivu',
      description:
        'Ba recettes ya Nord mpe Sud-Kivu : bugali, pilau, nyama — kataloge Mpichi.',
      intro: 'Mayi, bangomba mpe ba mesa ya Est : répertoire kati ya ngomba mpe zando.',
    },
  },
};

const CATEGORY_HUB: Record<RecipeCategory, Record<Locale, HubCopy>> = {
  plat: {
    fr: {
      title: 'Plats congolais',
      description:
        'Plats congolais de la RDC : sauces, viandes, poissons et feuilles — catalogue Mpichi.',
      intro: 'Les plats qui tiennent la table : du pondu au moambe, du liboke au street food.',
    },
    en: {
      title: 'Congolese main dishes',
      description:
        'Congolese mains from the DRC: sauces, meats, fish and greens — Mpichi catalogue.',
      intro: 'Dishes that hold the table: from pondu to moambe, liboke to street food.',
    },
    ln: {
      title: 'Ba plats ya Congo',
      description:
        'Ba plats ya Congo na RDC : sauces, nyama, mbisi mpe matiti — kataloge Mpichi.',
      intro: 'Bilei oyo ekangaka mesa : euti na pondu tii na moambe, liboke tii na street food.',
    },
  },
  accompagnement: {
    fr: {
      title: 'Accompagnements congolais',
      description:
        'Accompagnements congolais : fufu, chikwangue, bukari, riz — sur Mpichi.',
      intro: 'Pâtes, bâtons et féculents qui portent la sauce — la base du repas.',
    },
    en: {
      title: 'Congolese sides',
      description:
        'Congolese sides: fufu, chikwangue, bukari, rice — on Mpichi.',
      intro: 'Pastes, sticks and starches that carry the sauce — the base of the meal.',
    },
    ln: {
      title: 'Ba accompagnements ya Congo',
      description:
        'Ba accompagnements ya Congo : fufu, chikwangue, bukari, loso — na Mpichi.',
      intro: 'Ba pâtes, ba bâtons mpe ba féculents oyo batyaka sauce — fondation ya bilei.',
    },
  },
  boisson: {
    fr: {
      title: 'Boissons congolaises',
      description:
        'Boissons congolaises : tangawisi, bissap, tamarin, malafu — catalogue Mpichi.',
      intro: 'Jus, infusions et boissons de table documentés avec leurs gestes.',
    },
    en: {
      title: 'Congolese drinks',
      description:
        'Congolese drinks: tangawisi, bissap, tamarind, palm wine — Mpichi catalogue.',
      intro: 'Juices, infusions and table drinks documented with their gestures.',
    },
    ln: {
      title: 'Ba boissons ya Congo',
      description:
        'Ba boissons ya Congo : tangawisi, bissap, tamarin, malafu — kataloge Mpichi.',
      intro: 'Ba jus, ba infusions mpe ba boissons ya mesa ekomami na ba gestes na yango.',
    },
  },
  dessert: {
    fr: {
      title: 'Desserts congolais',
      description:
        'Desserts et douceurs congolaises : beignets, gâteaux, arachides — sur Mpichi.',
      intro: 'Sucré du quotidien et des fêtes : de la rue à la table de famille.',
    },
    en: {
      title: 'Congolese desserts',
      description:
        'Congolese sweets and desserts: fritters, cakes, peanuts — on Mpichi.',
      intro: 'Everyday and festive sweetness: from the street to the family table.',
    },
    ln: {
      title: 'Ba desserts ya Congo',
      description:
        'Ba desserts mpe biloko ya sucre ya Congo : beignets, ba gâteaux, nguba — na Mpichi.',
      intro: 'Ya sucre ya mokolo mpe ya fête : euti na nzela tii na mesa ya libota.',
    },
  },
};

export function getRegionHubCopy(regionId: RegionId, locale: Locale): HubCopy | undefined {
  return REGION_HUB[regionId]?.[locale];
}

export function getCategoryHubCopy(category: RecipeCategory, locale: Locale): HubCopy {
  return CATEGORY_HUB[category][locale];
}
