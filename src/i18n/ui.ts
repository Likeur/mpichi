import type { Locale } from './config';

export const ui = {
  fr: {
    'meta.defaultDescription':
      'Cuisine congolaise — recettes, régions et traditions de la RDC',
    'meta.homeTitle': 'Accueil',
    'meta.siteName': 'Mpichi — Cuisine congolaise',
    'nav.home': 'Accueil',
    'nav.recipes': 'Recettes',
    'nav.label': 'Navigation principale',
    'nav.logo': 'Mpichi — accueil',
    'nav.lang': 'Langue',
    'footer.tagline':
      'Des recettes congolaises racontées par leurs gestes, leurs régions et celles et ceux qui les transmettent.',
    'footer.explore': 'Explorer',
    'footer.info': 'Informations',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Confidentialité',
    'footer.photoCredits': 'Crédits photo',
    'footer.photoCreditsBody':
      'Photographies sous licences Creative Commons.\nCrédit détaillé sur chaque recette.',
    'footer.madeWith': 'Fait avec',
    'footer.love': 'amour',
    'footer.inDrcBy': 'en RDC par',
    'home.hero.cta': 'Découvrir toutes les recettes',
    'home.hero.mpichi.title': 'Mpichi,\nla cuisine en héritage.',
    'home.hero.mpichi.summary':
      'Un répertoire vivant des recettes de la République démocratique du Congo, de leurs gestes et de leurs territoires.',
    'home.hero.liboke.title': 'Le liboke,\nle fleuve à table.',
    'home.hero.liboke.summary':
      'Du poisson, des aromates et le parfum d’une feuille chauffée sur la braise.',
    'home.hero.pondu.title': 'Le pondu se prépare\navec le temps.',
    'home.hero.pondu.summary':
      'Un geste patient, transmis de cuisine en cuisine, jusqu’à la texture juste.',
    'home.hero.moambe.title': 'Moambe.\nUn plat, mille foyers.',
    'home.hero.moambe.summary':
      'Une sauce profonde, un poulet longuement mijoté et le repas qui rassemble.',
    'home.rail.title': 'À chaque plat, son territoire.',
    'home.rail.link': 'Toutes les recettes',
    'home.heritage.title': 'Une cuisine vivante, jamais figée.',
    'home.heritage.body':
      'Mpichi documente les recettes telles qu’elles se transmettent : par les gestes, les souvenirs, les saisons et ce que l’on trouve au marché. Chaque foyer apporte sa mesure, son temps et sa voix.',
    'home.heritage.cta': 'Découvrir les recettes',
    'home.heritage.alt':
      'Une femme pétrit une pâte à Masi-Manimba, en République démocratique du Congo',
    'home.process.title': 'Une recette commence bien avant la marmite.',
    'home.process.01.title': 'Le marché',
    'home.process.01.body':
      'Choisir les feuilles, le poisson, les aromates et les produits de saison.',
    'home.process.02.title': 'Le geste',
    'home.process.02.body': 'Piler, envelopper, braiser ou laisser mijoter sans brusquer.',
    'home.process.03.title': 'Le temps',
    'home.process.03.body':
      'La cuisson donne au plat sa profondeur et rassemble les parfums.',
    'home.process.04.title': 'La table',
    'home.process.04.body':
      'Servir au centre, partager et transmettre la recette en la racontant.',
    'home.carnet.title': 'Recettes, lieux, mémoires.',
    'home.carnet.body':
      'Trois portes d’entrée dans une cuisine congolaise plurielle, de la feuille de manioc au poisson du fleuve.',
    'recipes.title': 'Recettes',
    'recipes.hero': 'Les recettes.',
    'recipes.intro':
      'Des plats du quotidien et des jours de fête, documentés avec leurs gestes, leur région et leur histoire.',
    'recipes.count': '{n} recette',
    'recipes.countPlural': '{n} recettes',
    'recipes.catalog': 'Tout le répertoire',
    'recipes.search': 'Rechercher une recette',
    'recipes.searchPlaceholder': 'Rechercher un plat, une région…',
    'recipes.clear': 'Effacer la recherche',
    'recipes.empty': 'Aucune recette pour le moment.',
    'recipes.noMatch': 'Aucune recette ne correspond à cette recherche.',
    'recipes.meta': '{prep} de préparation · {cook} de cuisson',
    'recipes.description': 'Catalogue des recettes congolaises Mpichi.',
    'recipes.filters': 'Filtres',
    'recipes.filterCategory': 'Catégorie',
    'recipes.filterDifficulty': 'Niveau',
    'recipes.filterRegion': 'Région',
    'recipes.filterAll': 'Tous',
    'recipes.filterAllRegions': 'Toutes les régions',
    'recipes.resetFilters': 'Réinitialiser',
    'recipes.pagination': 'Pagination',
    'recipes.page': 'Page {current} sur {total}',
    'recipes.prevPage': 'Précédent',
    'recipes.nextPage': 'Suivant',
    'recipes.exploreRegions': 'Explorer les régions',
    'recipes.exploreCategories': 'Explorer les catégories',
    'regions.title': 'Régions',
    'regions.hero': 'Les régions.',
    'regions.intro':
      'Un même geste change de rive en rive. Parcourez le répertoire par territoire.',
    'regions.description': 'Recettes congolaises classées par région sur Mpichi.',
    'regions.empty': 'Aucune région documentée pour le moment.',
    'regions.back': '← Toutes les régions',
    'regions.detailIntro':
      'Recettes ancrées dans ce territoire, ou qui s’y préparent couramment.',
    'regions.detailDescription': 'Recettes de {region} — cuisine congolaise sur Mpichi.',
    'categories.title': 'Catégories',
    'categories.hero': 'Les catégories.',
    'categories.intro':
      'Plats, accompagnements, boissons et desserts pour entrer dans le répertoire autrement.',
    'categories.description': 'Recettes congolaises classées par catégorie sur Mpichi.',
    'categories.empty': 'Aucune catégorie pour le moment.',
    'categories.back': '← Toutes les catégories',
    'categories.detailIntro': 'Recettes de cette catégorie dans le répertoire Mpichi.',
    'categories.detailDescription': '{category} — recettes congolaises sur Mpichi.',
    'category.plat': 'Plat',
    'category.accompagnement': 'Accompagnement',
    'category.boisson': 'Boisson',
    'category.dessert': 'Dessert',
    'recipe.back': '← Catalogue',
    'recipe.region': 'Région',
    'recipe.category': 'Catégorie',
    'recipe.prep': 'Préparation',
    'recipe.cook': 'Cuisson',
    'recipe.servings': 'À table',
    'recipe.people': '{n} personnes',
    'recipe.level': 'Niveau',
    'recipe.ingredients': 'Ingrédients',
    'recipe.steps': 'Préparation',
    'recipe.photo': 'Photo',
    'recipe.backCta': 'Retour au catalogue',
    'recipe.tools': 'Actions',
    'recipe.scale': 'Portions',
    'recipe.decreaseServings': 'Enlever une personne',
    'recipe.increaseServings': 'Ajouter une personne',
    'recipe.share': 'Partager',
    'recipe.shareCopied': 'Lien copié',
    'recipe.print': 'Imprimer',
    'recipe.related': 'Dans le même esprit',
    'recipe.relatedIntro': 'D’autres recettes proches par territoire ou par gestes.',
    'difficulty.facile': 'facile',
    'difficulty.moyen': 'moyen',
    'difficulty.avancé': 'avancé',
    'faq.title': 'FAQ',
    'faq.hero': 'Questions fréquentes.',
    'faq.intro':
      'Quelques repères sur notre manière de raconter, documenter et partager la cuisine congolaise.',
    'faq.description':
      'Questions fréquentes sur les recettes et la démarche éditoriale de Mpichi.',
    'faq.q1': 'Les recettes sont-elles identiques dans toute la RDC ?',
    'faq.a1':
      'Non. Un même plat change selon la région, la saison, le marché et les habitudes du foyer. Mpichi présente une manière de faire parmi d’autres et précise son ancrage lorsqu’il est connu.',
    'faq.q2': 'Comment les recettes sont-elles documentées ?',
    'faq.a2':
      'Nous croisons les usages transmis, les sources disponibles et le contexte régional. Les quantités sont rendues lisibles sans effacer la part de geste, d’expérience et d’adaptation propre à chaque cuisine.',
    'faq.q3': 'Puis-je proposer une recette ou une correction ?',
    'faq.a3':
      'Oui. Les variantes, précisions linguistiques et récits de transmission sont bienvenus. Vous pouvez contacter Likeur depuis le lien présent dans le pied de page.',
    'faq.q4': 'Les niveaux de difficulté sont-ils absolus ?',
    'faq.a4':
      'Ils sont indicatifs. Ils tiennent compte du nombre de gestes, du temps de préparation et de la disponibilité habituelle des ingrédients.',
    'faq.q5': 'Comment sont choisis les visuels ?',
    'faq.a5':
      'Les photographies servent à documenter un plat, un ingrédient ou un geste. Leur auteur et leur licence sont indiqués sur les pages concernées.',
    'faq.q6': 'Mpichi fournit-il des conseils médicaux ou nutritionnels ?',
    'faq.a6':
      'Non. Les contenus sont culinaires et culturels. En cas d’allergie, de régime spécifique ou de question de santé, demandez conseil à un professionnel qualifié.',
    'legal.title': 'Mentions légales',
    'legal.hero': 'Mentions légales.',
    'legal.intro':
      'Les informations essentielles concernant l’édition, les contenus et l’utilisation de Mpichi.',
    'legal.description': 'Mentions légales du site éditorial Mpichi.',
    'legal.edition.title': 'Édition du site',
    'legal.edition.p1':
      'Mpichi est un projet éditorial indépendant consacré aux cuisines de la République démocratique du Congo. Il est conçu et réalisé en RDC par Likeur.',
    'legal.edition.p2':
      'Pour toute demande relative au site, vous pouvez contacter l’éditeur depuis',
    'legal.hosting.title': 'Hébergement',
    'legal.hosting.body':
      'Le site est actuellement présenté en environnement de développement. Les coordonnées de l’hébergeur seront ajoutées lors de sa mise en production.',
    'legal.content.title': 'Contenus et photographies',
    'legal.content.body':
      'Les textes, la direction artistique et la structure éditoriale de Mpichi sont protégés par le droit applicable. Les photographies restent la propriété de leurs auteurs et sont utilisées selon les licences indiquées dans leurs crédits respectifs.',
    'legal.liability.title': 'Responsabilité',
    'legal.liability.body':
      'Les recettes sont proposées à titre culturel et informatif. Les pratiques culinaires pouvant varier d’un foyer à l’autre, chacun reste responsable du choix des ingrédients, des conditions de conservation, des allergies et de la cuisson des aliments.',
    'privacy.title': 'Politique de confidentialité',
    'privacy.hero': 'Confidentialité.',
    'privacy.intro':
      'Une présentation claire des données utilisées lors de votre consultation de Mpichi.',
    'privacy.description': 'Politique de confidentialité du site Mpichi.',
    'privacy.data.title': 'Données collectées',
    'privacy.data.body':
      'Mpichi ne propose actuellement ni compte utilisateur, ni formulaire, ni espace de commentaire. Le site ne collecte donc pas directement votre nom, votre adresse électronique ou vos coordonnées.',
    'privacy.local.title': 'Stockage local',
    'privacy.local.body':
      'Une information temporaire peut être enregistrée dans votre navigateur afin de restaurer votre position dans le catalogue après la consultation d’une recette. Elle reste dans la session du navigateur et n’est pas transmise à Mpichi.',
    'privacy.external.title': 'Services externes',
    'privacy.external.body':
      'Les polices sont chargées depuis Google Fonts et certaines photographies depuis Wikimedia Commons. Lors de ces chargements, ces services peuvent recevoir des informations techniques telles que votre adresse IP, votre navigateur et l’heure de la requête, conformément à leurs propres politiques.',
    'privacy.cookies.title': 'Cookies et mesure d’audience',
    'privacy.cookies.body':
      'Dans sa version actuelle, Mpichi ne dépose aucun cookie publicitaire et n’utilise aucun outil de mesure d’audience.',
    'privacy.contact.title': 'Vos questions',
    'privacy.contact.body':
      'Pour toute question relative à la confidentialité, contactez l’éditeur depuis',
    'notFound.title': 'Page introuvable',
    'notFound.hero': 'Cette page s’est égarée.',
    'notFound.intro':
      'Le lien est peut-être ancien, ou la page n’existe plus. Revenez à l’accueil ou explorez le répertoire des recettes.',
    'notFound.description': 'Page introuvable sur Mpichi.',
    'notFound.home': 'Retour à l’accueil',
    'notFound.recipes': 'Voir les recettes',
    'notFound.code': '404',
  },
  en: {
    'meta.defaultDescription':
      'Congolese cuisine — recipes, regions and traditions from the DRC',
    'meta.homeTitle': 'Home',
    'meta.siteName': 'Mpichi — Congolese cuisine',
    'nav.home': 'Home',
    'nav.recipes': 'Recipes',
    'nav.label': 'Main navigation',
    'nav.logo': 'Mpichi — home',
    'nav.lang': 'Language',
    'footer.tagline':
      'Congolese recipes told through their gestures, their regions, and the people who pass them on.',
    'footer.explore': 'Explore',
    'footer.info': 'Information',
    'footer.legal': 'Legal notice',
    'footer.privacy': 'Privacy',
    'footer.photoCredits': 'Photo credits',
    'footer.photoCreditsBody':
      'Photographs under Creative Commons licenses.\nDetailed credit on each recipe.',
    'footer.madeWith': 'Made with',
    'footer.love': 'love',
    'footer.inDrcBy': 'in the DRC by',
    'home.hero.cta': 'Discover all recipes',
    'home.hero.mpichi.title': 'Mpichi,\ncuisine as heritage.',
    'home.hero.mpichi.summary':
      'A living repertoire of recipes from the Democratic Republic of the Congo, their gestures and their territories.',
    'home.hero.liboke.title': 'Liboke,\nthe river at the table.',
    'home.hero.liboke.summary':
      'Fish, aromatics, and the scent of a leaf warmed over the coals.',
    'home.hero.pondu.title': 'Pondu is made\nwith time.',
    'home.hero.pondu.summary':
      'A patient gesture, passed from kitchen to kitchen, until the texture is just right.',
    'home.hero.moambe.title': 'Moambe.\nOne dish, a thousand homes.',
    'home.hero.moambe.summary':
      'A deep sauce, chicken simmered slowly, and a meal that gathers people.',
    'home.rail.title': 'Every dish has its territory.',
    'home.rail.link': 'All recipes',
    'home.heritage.title': 'A living cuisine, never fixed.',
    'home.heritage.body':
      'Mpichi documents recipes as they are passed on: through gestures, memories, seasons, and what is found at the market. Each household brings its measure, its time, and its voice.',
    'home.heritage.cta': 'Discover the recipes',
    'home.heritage.alt':
      'A woman kneading dough in Masi-Manimba, Democratic Republic of the Congo',
    'home.process.title': 'A recipe begins long before the pot.',
    'home.process.01.title': 'The market',
    'home.process.01.body':
      'Choosing the leaves, the fish, the aromatics, and the produce of the season.',
    'home.process.02.title': 'The gesture',
    'home.process.02.body': 'Pounding, wrapping, grilling, or simmering without hurry.',
    'home.process.03.title': 'Time',
    'home.process.03.body':
      'Cooking gives the dish its depth and gathers the aromas together.',
    'home.process.04.title': 'The table',
    'home.process.04.body':
      'Serving at the center, sharing, and passing the recipe on by telling it.',
    'home.carnet.title': 'Recipes, places, memories.',
    'home.carnet.body':
      'Three doorways into a plural Congolese cuisine, from cassava leaves to river fish.',
    'recipes.title': 'Recipes',
    'recipes.hero': 'The recipes.',
    'recipes.intro':
      'Everyday dishes and festive ones, documented with their gestures, their region, and their story.',
    'recipes.count': '{n} recipe',
    'recipes.countPlural': '{n} recipes',
    'recipes.catalog': 'The full repertoire',
    'recipes.search': 'Search a recipe',
    'recipes.searchPlaceholder': 'Search a dish, a region…',
    'recipes.clear': 'Clear search',
    'recipes.empty': 'No recipes yet.',
    'recipes.noMatch': 'No recipe matches this search.',
    'recipes.meta': '{prep} prep · {cook} cook',
    'recipes.description': 'Catalogue of Congolese recipes on Mpichi.',
    'recipes.filters': 'Filters',
    'recipes.filterCategory': 'Category',
    'recipes.filterDifficulty': 'Level',
    'recipes.filterRegion': 'Region',
    'recipes.filterAll': 'All',
    'recipes.filterAllRegions': 'All regions',
    'recipes.resetFilters': 'Reset',
    'recipes.pagination': 'Pagination',
    'recipes.page': 'Page {current} of {total}',
    'recipes.prevPage': 'Previous',
    'recipes.nextPage': 'Next',
    'recipes.exploreRegions': 'Browse regions',
    'recipes.exploreCategories': 'Browse categories',
    'regions.title': 'Regions',
    'regions.hero': 'The regions.',
    'regions.intro':
      'The same gesture shifts from one shore to another. Browse the repertoire by territory.',
    'regions.description': 'Congolese recipes organised by region on Mpichi.',
    'regions.empty': 'No regions documented yet.',
    'regions.back': '← All regions',
    'regions.detailIntro':
      'Recipes rooted in this territory, or commonly prepared there.',
    'regions.detailDescription': 'Recipes from {region} — Congolese cuisine on Mpichi.',
    'categories.title': 'Categories',
    'categories.hero': 'The categories.',
    'categories.intro':
      'Mains, sides, drinks and desserts — another way into the repertoire.',
    'categories.description': 'Congolese recipes organised by category on Mpichi.',
    'categories.empty': 'No categories yet.',
    'categories.back': '← All categories',
    'categories.detailIntro': 'Recipes in this category from the Mpichi repertoire.',
    'categories.detailDescription': '{category} — Congolese recipes on Mpichi.',
    'category.plat': 'Main',
    'category.accompagnement': 'Side',
    'category.boisson': 'Drink',
    'category.dessert': 'Dessert',
    'recipe.back': '← Catalogue',
    'recipe.region': 'Region',
    'recipe.category': 'Category',
    'recipe.prep': 'Prep',
    'recipe.cook': 'Cook',
    'recipe.servings': 'Serves',
    'recipe.people': '{n} people',
    'recipe.level': 'Level',
    'recipe.ingredients': 'Ingredients',
    'recipe.steps': 'Method',
    'recipe.photo': 'Photo',
    'recipe.backCta': 'Back to catalogue',
    'recipe.tools': 'Actions',
    'recipe.scale': 'Servings',
    'recipe.decreaseServings': 'Remove one person',
    'recipe.increaseServings': 'Add one person',
    'recipe.share': 'Share',
    'recipe.shareCopied': 'Link copied',
    'recipe.print': 'Print',
    'recipe.related': 'In the same spirit',
    'recipe.relatedIntro': 'Other recipes close by territory or by gesture.',
    'difficulty.facile': 'easy',
    'difficulty.moyen': 'medium',
    'difficulty.avancé': 'advanced',
    'faq.title': 'FAQ',
    'faq.hero': 'Frequently asked questions.',
    'faq.intro':
      'A few notes on how we tell, document, and share Congolese cuisine.',
    'faq.description':
      'Frequently asked questions about Mpichi recipes and editorial approach.',
    'faq.q1': 'Are recipes the same across the whole DRC?',
    'faq.a1':
      'No. The same dish changes with the region, the season, the market, and household habits. Mpichi presents one way among others and notes its regional roots when known.',
    'faq.q2': 'How are the recipes documented?',
    'faq.a2':
      'We cross transmitted practices, available sources, and regional context. Quantities are made readable without erasing the gesture, experience, and adaptation of each kitchen.',
    'faq.q3': 'Can I suggest a recipe or a correction?',
    'faq.a3':
      'Yes. Variants, linguistic notes, and stories of transmission are welcome. You can contact Likeur through the link in the footer.',
    'faq.q4': 'Are difficulty levels absolute?',
    'faq.a4':
      'They are indicative. They consider the number of gestures, preparation time, and how commonly ingredients are available.',
    'faq.q5': 'How are the images chosen?',
    'faq.a5':
      'Photographs document a dish, an ingredient, or a gesture. Their author and license are listed on the relevant pages.',
    'faq.q6': 'Does Mpichi give medical or nutritional advice?',
    'faq.a6':
      'No. The content is culinary and cultural. For allergies, specific diets, or health questions, consult a qualified professional.',
    'legal.title': 'Legal notice',
    'legal.hero': 'Legal notice.',
    'legal.intro':
      'Essential information about the publishing, contents, and use of Mpichi.',
    'legal.description': 'Legal notice for the Mpichi editorial site.',
    'legal.edition.title': 'Site publisher',
    'legal.edition.p1':
      'Mpichi is an independent editorial project dedicated to the cuisines of the Democratic Republic of the Congo. It is designed and made in the DRC by Likeur.',
    'legal.edition.p2':
      'For any request related to the site, you can contact the publisher at',
    'legal.hosting.title': 'Hosting',
    'legal.hosting.body':
      'The site is currently presented in a development environment. Hosting details will be added when it goes into production.',
    'legal.content.title': 'Content and photographs',
    'legal.content.body':
      'The texts, art direction, and editorial structure of Mpichi are protected by applicable law. Photographs remain the property of their authors and are used under the licenses stated in their respective credits.',
    'legal.liability.title': 'Liability',
    'legal.liability.body':
      'Recipes are offered for cultural and informational purposes. Culinary practices can vary from one household to another, and each person remains responsible for ingredient choices, storage conditions, allergies, and cooking.',
    'privacy.title': 'Privacy policy',
    'privacy.hero': 'Privacy.',
    'privacy.intro':
      'A clear overview of the data used when you browse Mpichi.',
    'privacy.description': 'Privacy policy for the Mpichi website.',
    'privacy.data.title': 'Data collected',
    'privacy.data.body':
      'Mpichi currently offers no user account, form, or comment space. The site therefore does not directly collect your name, email address, or contact details.',
    'privacy.local.title': 'Local storage',
    'privacy.local.body':
      'Temporary information may be stored in your browser to restore your position in the catalogue after viewing a recipe. It stays in the browser session and is not sent to Mpichi.',
    'privacy.external.title': 'External services',
    'privacy.external.body':
      'Fonts are loaded from Google Fonts and some photographs from Wikimedia Commons. During those requests, those services may receive technical information such as your IP address, browser, and request time, according to their own policies.',
    'privacy.cookies.title': 'Cookies and analytics',
    'privacy.cookies.body':
      'In its current version, Mpichi sets no advertising cookies and uses no audience-measurement tool.',
    'privacy.contact.title': 'Your questions',
    'privacy.contact.body':
      'For any privacy-related question, contact the publisher at',
    'notFound.title': 'Page not found',
    'notFound.hero': 'This page has gone astray.',
    'notFound.intro':
      'The link may be outdated, or the page no longer exists. Head home or browse the recipe repertoire.',
    'notFound.description': 'Page not found on Mpichi.',
    'notFound.home': 'Back to home',
    'notFound.recipes': 'Browse recipes',
    'notFound.code': '404',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fr'];
