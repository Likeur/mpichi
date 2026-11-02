export type RecipeVariantTranslation = {
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

export const recipeTranslationsLn: Record<string, RecipeTranslation> = {
  "biteku-teku-kasai": {
    "title": "Biteku-teku (lenga-lenga)",
    "description": "Biteku-teku (lenga-lenga) : matiti ya biteku-teku ebilisami na aluboka, tomatisi mpe nguba — bilei ya Kasaï monene, ndeko ya ndunda ya Kinshasa.",
    "region": "Kasaï monene",
    "imageAlt": "Matiti ya biteku-teku ya sika mpo na koteka",
    "prepTime": "min. 20",
    "cookTime": "min. 25",
    "ingredients": [
      "Mikolo 3 ya matiti ya biteku-teku (amarante)",
      "Tomatisi 2 ya polele, mibetami",
      "Aluboka 1 monene, mikatami",
      "80 g ya nguba ya kotumbami mpe mikuatami",
      "2 lukwakulu ya mafuta",
      "Pili-pili 1 moke (ya lingi)",
      "Muni",
      "150 ml ya mai"
    ],
    "steps": [
      "Longola matiti, tika bikondo ya molle mpe sukola nyonso makenda mingi.",
      "Kata matiti mpe bikondo na ndenge ya moke-moke.",
      "Bimasisa aluboka na mafuta, sima bakisa tomatisi mpe pili-pili.",
      "Bakisa biteku-teku mpe mai, funga mpe tika ekóla pene miniti 10.",
      "Bakisa nguba mikuatami, tia muni mpe bongisa.",
      "Kobongola koteka na sanza tii matiti ya pétrole mpe sauce ekóma ya kati-kati."
    ],
    "tags": [
      "biteku-teku",
      "lenga-lenga",
      "biteku-teku",
      "Kasaï monene",
      "mboga"
    ],
    "body": "**Biteku-teku** ezali lokumu na Kasaï. Na Kinshasa, mboga ya verdure ya mokolo na mokolo babengaka [ndunda](/ln/recettes/ndunda/) mbala mingi ; matiti wana moko babengaka **lenga-lenga**. Balyaka yango na [bukari](/ln/recettes/bukari-katanga/) (bidia na Kasaï) ; okoki kolimbola nguba.\n\n**Kosukola** : biteku-teku ya zando ezali na fumbe mbala mingi — sukola na mai makenda mingi tii mai ezala pete.\n\n**Soki nguba ezali te** : ndenge ya pete, pene na ndunda ya Kinshasa ; na nsuka tia mwa mafuta ya palmier soki ozali na yango.\n\nMatiti mosusu : [matembele](/ln/recettes/matembele-katanga/), [pondu](/ln/recettes/pondu/). Contexte ya zando : [guide ya zando](/ln/guides/marche/).",
    "seoTitle": "Biteku-teku / lenga-lenga — matiti ya Kasaï"
  },
  "brochettes-grillons": {
    "title": "Brochettes de grillons",
    "description": "Grillons comestibles assaisonnés, montés en brochettes puis grillés jusqu'à devenir croustillants.",
    "region": "Sud-Est de la RDC",
    "imageAlt": "Brochette congolaise de grillons grillés",
    "prepTime": "min. 25",
    "cookTime": "min. 15",
    "ingredients": [
      "300 g ya grillons comestibles préparés",
      "2 mikolo ya ail",
      "1 c. à café ya gingembre râpé",
      "1 c. à soupe ya jus ya citron",
      "2 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre",
      "Petites brochettes en bois"
    ],
    "steps": [
      "Utiliser uniquement ya grillons vendus pour l'alimentation mpe déjà nettoyés.",
      "Mélanger ail, le gingembre, le citron, mafuta, le pili-pili, le muni mpe le poivre.",
      "Enrober les grillons ya cette marinade mpe laisser reposer 15 minutes.",
      "Les enfiler délicatement sur les brochettes sans trop les serrer.",
      "Griller sur ya braises modérées ou dans une poêle très chaude pendant 8 à 12 minutes en les retournant.",
      "Salela immédiatement elongo na ya citron mpe ya pili-pili."
    ],
    "tags": [
      "grillons",
      "brochette",
      "grillé"
    ],
    "body": "Les insectes comestibles occupent une place ancienne dans plusieurs cuisines régionales congolaises et constituent une source appréciée de protéines."
  },
  "bukari-katanga": {
    "title": "Bukari",
    "description": "bukari fufu (aussi bugali, bidia) : le fufu ya maïs ya l'Est mpe ya Sud ya la RDC — pâte ya farine ya maïs travaillée à chaud jusqu'à devenir lisse mpe dense.",
    "region": "Katanga monene",
    "imageAlt": "baboule de fufu de maïs servies en République démocratique du Congo",
    "prepTime": "min. 5",
    "cookTime": "min. 20",
    "ingredients": [
      "id: bidia-kasai",
      "1.2 l ya mai",
      "1 pinch of muni (ya lingi)"
    ],
    "steps": [
      "id: bidia-kasai",
      "Loosen a little of the flour in the remaining mai, then pour the mixture into the pot.",
      "Stir tii you have a smooth porridge mpe let it simmer for a few minutes.",
      "Bakisa the rest of the flour gradually while working vigorously na a sturdy spoon.",
      "Keep turning mpe pressing the dough against the sides tii it is smooth mpe pulls away from the pot.",
      "Shape portions na a wet ladle mpe serve immediately."
    ],
    "tags": [
      "bukari",
      "bugali",
      "bidia",
      "fufu maïs",
      "ugali",
      "Katanga monene",
      "Kivu"
    ],
    "body": "En français courant, **bukari = fufu de maïs** (pas le fufu de manioc). Au Grand Katanga on dit bukari ; au Kivu *bugali* ; au Kasaï *bidia* — **un seul geste**, des noms de table différents (voir les variantes). Vue d'ensemble : [guide ya fufu](/ln/guides/fufu/).\n\nÀ l'Ouest, l'équivalent fermenté de manioc est plutôt la [chikwangue](/ln/recettes/chikwangue/) ; le [fufu de manioc](/ln/recettes/fufu-manioc/) reste l'autre grand geste de pâte. Sauces de la région : [matembele aux nguba](/ln/recettes/matembele-katanga/), [kapenta aux tomatisi](/ln/recettes/kapenta-tomatisi/).",
    "seoTitle": "bukari fufu — fufu ya maïs (bugali, bidia)",
    "variants": [
      {
        "id": "bugali-kivu",
        "title": "Bugali (Kivu name)",
        "description": "In North and South Kivu the same maize paste is called bugali (close to East African ugali) — same gesture, another table name.",
        "ingredients": [
          "500 g ya fine white maize flour",
          "1.2 l ya mai",
          "1 pinch of muni (ya lingi)"
        ],
        "steps": [
          "Follow the same steps as bukari.",
          "Salela elongo na Eastern greens (simmered cabbage, sukuma, maharage) to lake mbisi."
        ]
      },
      {
        "id": "bidia-kasai",
        "title": "Bidia (nom kasaien)",
        "description": "Au Grand Kasaï, la même pâte ya maïs s’appelle souvent bidia — même geste, autre nom ya table.",
        "ingredients": [
          "500 g ya farine fine ya maïs blanc",
          "1,2 l ya mai",
          "Pince ya muni (ya lingi)"
        ],
        "steps": [
          "Suivre les mêmes étapes que le bukari katangais.",
          "Servir avec légumes, mbisi ou nyama en sauce ya Kasaï (biteku-teku, mbinzo, etc.)."
        ]
      }
    ]
  },
  "chikwangue": {
    "title": "Chikwangue",
    "description": "chikwangue (kwanga) : pâte ya manioc fermentée enveloppée dans ya feuilles mpe cuite na mvuke — accompagnement ferme mpe légèrement acidulé ya la RDC.",
    "region": "Basen ya Congo",
    "imageAlt": "Chikwangue (kwanga) cuite dans ses feuilles, bâtons emballés et déroulés",
    "prepTime": "min. 40",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "1 kg ya pâte ya manioc fermentée prête à cuire",
      "Grandes ndunda ya banane ou feuilles adaptées à la cuisson",
      "Ficelle ya cuisine",
      "mai pour la cuisson vapeur"
    ],
    "steps": [
      "Assouplir matiti quelques secondes au-dessus d'une flamme ou dans mai chaude, puis les essuyer.",
      "Pétrir la pâte ya manioc jusqu'à ce qu'elle soit lisse mpe sans grumeaux.",
      "Former ya cylindres réguliers mpe les envelopper très serrés dans plusieurs épaisseurs ya feuilles.",
      "Ficeler chaque paquet afin que mai ne pénètre pas pendant la cuisson.",
      "Déposer les chikwangues dans un panier vapeur mpe cuire pendant 1 h 30.",
      "Laisser tiédir avant ya déballer. Couper en tranches mpe servir avec une sauce, ya mbisi ou ya pondu."
    ],
    "tags": [
      "chikwangue",
      "kwanga",
      "manioc",
      "fufu",
      "fermentation"
    ],
    "body": "La **chikwangue** (ou **kwanga**) est le « pain » de manioc fermenté de nombreuses tables congolaises. La fermentation du manioc cru demande un savoir-faire ; cette fiche part d'une pâte fermentée déjà prête à cuire, plus accessible en ville et en diaspora.\n\nElle accompagne souvent le [pondu](/ln/recettes/pondu/) ou un [liboke de mbisi](/ln/recettes/liboke-mbisi/). Au Katanga, le Ndeko de maïs s'appelle plutôt [bukari](/ln/recettes/bukari-katanga/).",
    "seoTitle": "chikwangue — pain ya manioc"
  },
  "croquettes-manioc": {
    "title": "Croquettes ya sango",
    "description": "Bouchées ya manioc moelleuses à l'intérieur mpe dorées en surface, façonnées à la main puis frites.",
    "region": "Na RDC mobimba",
    "imageAlt": "Croquettes congolaises préparées à base de manioc",
    "prepTime": "min. 25",
    "cookTime": "min. 30",
    "ingredients": [
      "800 g ya manioc doux",
      "1 petit aluboka, râpé",
      "1 gousse d'ail, pilée",
      "2 c. à soupe ya ciboulette ciselée",
      "1 œuf",
      "2 c. à soupe ya farine",
      "Muni mpe poivre",
      "mafuta pour la friture"
    ],
    "steps": [
      "Éplucher le manioc, retirer la fibre centrale mpe le couper en morceaux.",
      "Le cuire dans une mai légèrement salée jusqu'à ce qu'il soit très tendre, puis bien l'égoutter.",
      "Écraser le manioc encore chaud mpe le laisser tiédir.",
      "Incorporer aluboka, ail, la ciboulette, l'œuf mpe la farine. Saler mpe poivrer.",
      "Former ya petites croquettes avec les mains légèrement huilées.",
      "Frire par petites quantités jusqu'à coloration dorée, puis égoutter sur ya papier absorbant."
    ],
    "tags": [
      "manioc",
      "friture",
      "croquettes"
    ],
    "body": "Ces croquettes se servent chaudes, seules ou avec une sauce pimentée. Employer uniquement du manioc doux destiné à la consommation et le cuire complètement."
  },
  "escargots-congolaise": {
    "title": "Escargots à la congolaise",
    "description": "Chair d'escargot longuement attendrie puis mijotée dans une sauce relevée aux tomatisi, aluboka mpe poivrons.",
    "region": "Cuvette centrale & Kongo-Central",
    "imageAlt": "Plat africain d'escargots frits en sauce",
    "prepTime": "min. 30",
    "cookTime": "ngonga 1 min. 10",
    "ingredients": [
      "800 g ya chair d'escargot comestible, nettoyée par un professionnel",
      "Tomatisi 4 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "1 poivron vert, coupé en lanières",
      "3 mikolo ya ail, mikatami",
      "4 lukwakulu ya mafuta",
      "Pili-pili 1 moke",
      "muni, poivre mpe mai"
    ],
    "steps": [
      "Utiliser ya la chair issue d'une filière alimentaire; ne jamais cuisiner ya escargots ramassés sans identification, purge mpe préparation professionnelles.",
      "Frotter la chair avec un peu ya muni, rincer abondamment puis la couvrir ya mai fraîche. Faire bouillir 35 à 45 minutes, jusqu'à ce qu'elle commence à s'attendrir.",
      "Égoutter les escargots. Chauffer mafuta mpe les faire dorer 5 minutes, puis les réserver.",
      "Dans la même marmite, faire revenir aluboka, ail mpe le poivron. Ajouter tomatisi mpe pili-pili, puis laisser réduire 10 minutes.",
      "Remettre les escargots avec 150 ml ya mai mpe mijoter 15 minutes. Saler, poivrer mpe vérifier qu'ils sont bien cuits avant ya servir."
    ],
    "tags": [
      "escargots",
      "tomatisi",
      "piment",
      "mijoté"
    ],
    "body": "Les assaisonnements et la texture recherchée changent selon les régions; une cuisson complète reste indispensable pour ce produit."
  },
  "fumbwa-arachides": {
    "title": "Fumbwa aux arachides",
    "description": "fumbwa (koko) aux nguba : feuilles finement émincées, mijotées dans une sauce d'nguba jusqu'à devenir tendres mpe onctueuses.",
    "region": "Kongo-Central",
    "imageAlt": "Sauce de fumbwa aux nguba servie avec du fufu",
    "prepTime": "min. 30",
    "cookTime": "ngonga 1",
    "ingredients": [
      "500 g ya feuilles ya fumbwa émincées",
      "200 g ya pâte d'nguba non sucrée",
      "2 aluboka, finement mikatami",
      "Tomatisi 2 ya polele, mibetami",
      "2 mikolo ya ail",
      "3 lukwakulu ya mafuta ya palmier",
      "150 g ya mbisi ya fumé (ya lingi)",
      "muni, piment mpe mai",
      "Mai"
    ],
    "steps": [
      "Rincer soigneusement le fumbwa puis l'égoutter.",
      "Faire revenir aluboka mpe ail dans mafuta ya palme. Ajouter tomatisi mpe cuire jusqu'à obtenir une sauce.",
      "Incorporer le fumbwa mpe mbisi fumé. Ajouter un verre ya mai, couvrir mpe laisser mijoter 30 minutes.",
      "Délayer la pâte d'nguba avec un peu ya mai chaude puis la verser dans la marmite.",
      "Poursuivre la cuisson à moto ya moke pendant 20 à 30 minutes, en remuant régulièrement.",
      "Rectifier l'assaisonnement mpe servir avec ya fufu ou ya la chikwangue."
    ],
    "tags": [
      "fumbwa",
      "koko",
      "arachide",
      "feuilles",
      "végétal"
    ],
    "body": "Le **fumbwa** (babengami lisusi **koko**, okazi ou eru selon les régions) n'est pas du pondu : ce sont des feuilles de liane forestière, souvent vendues déjà émincées. La sauce doit cuire doucement pour que l'nguba développe toute sa rondeur.\n\nAutre grand plat de feuilles : le [pondu (saka-saka)](/ln/recettes/pondu/). Servir volontiers avec de la [chikwangue](/ln/recettes/chikwangue/).",
    "seoTitle": "fumbwa na nguba",
    "variants": [
      {
        "id": "sans-poisson",
        "title": "Without smoked fish",
        "description": "Peanut sauce and leaves alone — fully plant-based.",
        "imageAlt": "Fumbwa peanut sauce served with fufu",
        "ingredients": [
          "500 g ya shredded fumbwa leaves",
          "200 g ya unsweetened peanut paste",
          "2 aluboka, finely chopped",
          "2 ripe tomatisi, mibetami",
          "2 mikolo ya ail",
          "3 tbsp palm mafuta",
          "muni, pili-pili mpe mai"
        ],
        "steps": [
          "Rinse the fumbwa mpe drain well.",
          "Sweat onions mpe garlic, add tomatisi then fumbwa na a glass of mai.",
          "Bilisa na moto ya moke covered 30 minutes.",
          "Stir in diluted nguba paste mpe cook gently another 25 minutes.",
          "Bongisa monoko mpe serve na fufu to chikwangue."
        ]
      },
      {
        "id": "sauce-courte",
        "title": "Shorter sauce",
        "description": "Less water, denser peanut — sticky texture some households prefer.",
        "ingredients": [
          "500 g ya shredded fumbwa leaves",
          "250 g ya unsweetened peanut paste",
          "2 aluboka, finely chopped",
          "1 ripe tomato, mibetami",
          "2 mikolo ya ail",
          "3 tbsp palm mafuta",
          "150 g ya smoked mbisi (optional)",
          "muni, pili-pili mpe 150 ml ya mai"
        ],
        "steps": [
          "Prepare onions, garlic mpe tomato as in the main recipe.",
          "Bakisa the fumbwa na only 150 ml mai; simmer 25 minutes.",
          "Stir in more nguba paste barely diluted.",
          "Cook uncovered 20 minutes, stirring: the sauce should cling to the spoon.",
          "Salela elongo na chikwangue."
        ]
      }
    ]
  },
  "kamundele": {
    "title": "Kamundele",
    "description": "kamundele : brochettes ya bœuf marinées aux aromates mpe grillées sur braises — street food emblématique ya Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "Assiette de kamundele, brochettes de bœuf marinées, avec frites et légumes",
    "prepTime": "min. 25 + ngonga 1 de marinade",
    "cookTime": "min. 15",
    "ingredients": [
      "700 g ya bœuf tendre",
      "1 aluboka, râpé",
      "2 mikolo ya ail, mikatami",
      "1 c. à café ya gingembre râpé",
      "1 c. à soupe ya jus ya citron",
      "Piment moulu, selon le goût",
      "Muni mpe poivre"
    ],
    "steps": [
      "Couper le bœuf en petits cubes réguliers afin qu'ils cuisent rapidement.",
      "Mélanger aluboka, ail, le gingembre, le citron, mafuta, pili-pili, le muni mpe le poivre. Ajouter la nyama mpe laisser mariner 1 heure au frais.",
      "Enfiler les morceaux serrés sur ya petites brochettes, puis laisser égoutter l'excédent ya marinade.",
      "Griller sur ya braises bien prises pendant 8 à 12 minutes, en retournant souvent les brochettes.",
      "Salela aussitôt elongo na ya rondelles d'aluboka, ya pili-pili mpe, selon l'envie, ya la chikwangue."
    ],
    "tags": [
      "kamundele",
      "brochettes",
      "street food kinshasa",
      "bœuf",
      "grillade"
    ],
    "body": "Le **kamundele** est l'encas de rue kinshasaise par excellence : petites brochettes, marinade pimentée, braises vives. L'assaisonnement change d'un vendeur à l'autre.\n\nAutre grillade de partage : le [ntaba (chèvre grillée)](/ln/recettes/ntaba/). Pour un bœuf mijoté plutôt que grillé, voir [nyama ya sauce](/ln/recettes/nyama-ya-sauce/).",
    "seoTitle": "kamundele — brochettes kinshasa"
  },
  "kapenta-tomates": {
    "title": "Kapenta na tomatisi",
    "description": "Kapenta na tomatisi : mbisi mike (ya sika to kokauka) kotumbami sima na sauce ya tomatisi-aluboka — classique ya Haut-Katanga mpe Tanganyika.",
    "region": "Haut-Katanga mpe Tanganyika",
    "imageAlt": "Kapenta mike elakisami mpo na bilei",
    "prepTime": "min. 20",
    "cookTime": "min. 30",
    "ingredients": [
      "400 g ya kapenta ya sika to ya kokauka",
      "Tomatisi 4 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "4 lukwakulu ya mafuta",
      "Muni mpe poivre",
      "100 ml ya mai"
    ],
    "steps": [
      "Soki kapenta ezali ya kokauka, sukola yango mbala 2 to 3 sima kata mai malamu. Tia muni moke mpenza.",
      "Fútbisa ndenge ya liboso ya mafuta mpe bimasisa mbisi miniti 5 tii 8. Tika na pembeni.",
      "Bakisa mafuta oyo etikali, bimasisa aluboka tii efútaka, sima bakisa ail, tomatisi mpe pili-pili.",
      "Teká sauce miniti 10, tema mai mpe zongisa kapenta na mpiko.",
      "Bilisa na sanza miniti 5, tia poivre mpe salela elongo na bukari, loso to plantain."
    ],
    "tags": [
      "kapenta",
      "mbisi",
      "tomatisi",
      "Haut-Katanga",
      "Tanganyika"
    ],
    "body": "Na ngirisi ya Tanganyika mpe Moero, **kapenta** ekoki kozala ya sika to ya kokauka — yango ebongola kosukola mpe monoko. Ndeko na lac Tanganyika : [sambaza](/ln/recettes/sambaza/). Batia yango mbala mingi na [bukari](/ln/recettes/bukari-katanga/) to [matembele](/ln/recettes/matembele-katanga/).",
    "seoTitle": "Kapenta na tomatisi"
  },
  "liboke-poisson": {
    "title": "Liboke ya mbisi",
    "description": "Liboke ya mbisi (maboke) : mbisi oyo bongisaki na espece, ekangami na ndunda ya banane mpe ebilisami na mvuke — na nuka malamu mpe ya pétrole.",
    "region": "Bas-Congo mpe Bandundu",
    "imageAlt": "Liboke efungwami na ndunda na yango, esengeli kolya",
    "prepTime": "min. 30",
    "cookTime": "min. 45",
    "ingredients": [
      "4 filets to darnes ya capitaine / tilapia",
      "Aluboka 2, na rondelles",
      "Tomatisi 2, na tranches",
      "Poivron 1, na lanières",
      "3 lukwakulu ya mafuta ya palmier",
      "Muni, poivre, cube ya bouillon",
      "4 ndunda ya banane monene (ou papier cuisson + papier alu)"
    ],
    "steps": [
      "Bongisa monoko ya mbisi na muni, poivre, cube mikuatami mpe mwa mafuta ya palmier. Tika yango miniti 20 na marinade.",
      "Tambwisa ndunda ya banane na moto mwa secondes mpo na kofungola yango.",
      "Na ndunda moko na moko, tia aluboka, tomatisi, poivron, sima mbisi. Tema mwa mafuta ya palmier.",
      "Teká na mvuke (panier to marmite) to na four na 180 °C na miniti 35 tii 45.",
      "Fungola liboke na mesa, salela elongo na plantain ya polele to fufu."
    ],
    "tags": [
      "liboke",
      "maboke",
      "mbisi",
      "ndunda ya banane",
      "vapeur"
    ],
    "body": "**Liboke ya mbisi** (maboke) ezali technique mpe bilei : ndunda ya banane ekanga mbisi, ekanga mai mpe epa nuka na nyama. Soki ndunda ya sika ezali te, papier cuisson mpe alu ezali solo na diaspora.\n\nLiboke mosusu : [liboke ya nyama](/ln/recettes/liboke-viande/). Mpo na zando mpe eleko, tala [guide ya zando](/ln/guides/marche/).",
    "seoTitle": "Liboke ya mbisi (maboke)"
  },
  "lituma": {
    "title": "Fufu ya makemba",
    "description": "lituma : plantains verts cuits puis pilés en pâte souple — accompagnement ya la Cuvette / Équateur, cousin ya foutou.",
    "region": "Cuvette ya centrale",
    "imageAlt": "Boule de plantain pilé servie avec une sauce",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "6 bananes plantains vertes",
      "Pince ya muni (ya lingi)",
      "1 c. à café ya mafuta pour façonner"
    ],
    "steps": [
      "Couper les extrémités ya plantains, inciser la peau dans la longueur mpe les peler.",
      "Couper la chair en gros tronçons, couvrir ya mai mpe cuire 20 à 25 minutes, jusqu'à ce qu'elle soit très tendre.",
      "Ajouter, si nécessaire, quelques cuillerées ya mai ya cuisson mpe continuer à piler jusqu'à obtenir une pâte homogène mpe élastique.",
      "Huiler légèrement les mains ou une louche, façonner quatre portions mpe servir chaud."
    ],
    "tags": [
      "lituma",
      "plantain pilé",
      "plantain",
      "Équateur",
      "accompagnement"
    ],
    "body": "Le **lituma** est le plantain vert pilé de la Cuvette : texture élastique, portions à la louche, parfait avec sauces et poissons. Certaines familles y mêlent un peu de manioc. Autre plantain : les [makemba](/ln/recettes/makemba/) (frits, mûrs). Autre amidon : [chikwangue](/ln/recettes/chikwangue/).",
    "seoTitle": "lituma — plantain pilé"
  },
  "loso-petits-pois": {
    "title": "Loso na pois",
    "description": "loso aux petits pois (en lingala on dit souvent loso na petits pois) : loso sauté ou ebilisami na ya petits pois — accompagnement kin.",
    "region": "Kinshasa",
    "imageAlt": "Plat congolais de loso mélangé aux petits pois",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "500 g ya loso long",
      "250 g ya petits pois",
      "1 aluboka, finement haché",
      "1 carotte, coupée en petits dés",
      "2 lukwakulu ya mafuta",
      "1 feuille ya laurier",
      "Muni mpe poivre"
    ],
    "steps": [
      "Rincer le loso makenda mingi jusqu'à ce que mai soit presque claire, puis l'égoutter.",
      "Faire revenir aluboka mpe la carotte dans mafuta pendant 5 minutes.",
      "Ajouter le loso mpe remuer deux minutes pour bien enrober les grains.",
      "Couvrir mpe cuire à moto ya moke pendant 15 minutes.",
      "Ajouter les petits pois, couvrir ya nouveau mpe poursuivre la cuisson 5 minutes. Laisser reposer avant d'égrener."
    ],
    "tags": [
      "riz",
      "petits pois",
      "loso"
    ],
    "body": "Le **loso aux petits pois** (en lingala on dit souvent *loso na petits pois*) est un accompagnement kin simple. Cousins loso : [loso aux haricots](/ln/recettes/loso-na-madesu/), [loso mayonnaise](/ln/recettes/loso-mayonnaise/).",
    "seoTitle": "loso na petits pois — Kinshasa"
  },
  "madesu": {
    "title": "Madesu",
    "description": "madesu : haricots fondants mijotés na tomatisi, aluboka mpe mafuta ya palmier rouge — bilei ya quotidien en RDC.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Plat de haricots rouges cuits et mijotés",
    "prepTime": "min. 20 + ngonga 8 de kobomba",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "500 g ya haricots rouges ou bruns secs",
      "Aluboka 2, mikatami",
      "Tomatisi 3 ya polele, mibetami",
      "3 c. à soupe ya mafuta ya palmier rouge",
      "2 mikolo ya ail, mikatami",
      "1 petit piment entier, ya lingi",
      "muni mpe mai"
    ],
    "steps": [
      "Faire tremper les haricots pendant une nuit, les égoutter puis les rincer.",
      "Les couvrir largement ya mai fraîche, ajouter le laurier mpe cuire 60 à 75 minutes, jusqu'à ce qu'ils soient tendres. Saler en fin ya cuisson.",
      "Laisser réduire la sauce pendant 10 minutes, puis incorporer les haricots avec une louche ya leur mai ya cuisson.",
      "Ajouter pili-pili entier mpe mijoter encore 15 minutes. Retirer le laurier mpe rectifier le muni avant ya servir."
    ],
    "tags": [
      "madesu",
      "haricots congolais",
      "haricots",
      "mafuta ya palmier",
      "mokolo na mokolo"
    ],
    "body": "Les **madesu** désignent les haricots à mafuta de palme du quotidien congolais. Cette base simple connaît de nombreuses variantes : parfois enrichies de mbisi ya fumé, parfois sans tomatisi.\n\nQuand on ajoute matiti de manioc, on parle de [saka-madesu](/ln/recettes/saka-madesu/). loso et haricots ensemble : [loso na madesu](/ln/recettes/loso-na-madesu/). Servir aussi avec [chikwangue](/ln/recettes/chikwangue/).",
    "seoTitle": "madesu — haricots congolais",
    "variants": [
      {
        "id": "poisson-fume",
        "title": "With smoked fish",
        "description": "Beans enriched with smoked fish — a savourier everyday plate.",
        "imageAlt": "Bowl of cooked red beans",
        "ingredients": [
          "500 g ya dried red to brown beans",
          "200 g ya smoked mbisi",
          "2 aluboka, mikatami",
          "3 ripe tomatisi, mibetami",
          "3 tbsp mafuta ya palmier rouge",
          "2 mikolo ya ail, mikatami",
          "1 bay leaf",
          "muni mpe mai"
        ],
        "steps": [
          "Soak mpe cook the beans as in the main recipe.",
          "Soak the smoked mbisi 20 minutes, drain mpe break into pieces.",
          "Make the aluboka-tomato palm-mafuta sauce, then add beans mpe mbisi.",
          "Bilisa na moto ya moke gently 20 minutes. muni lightly (the smoked mbisi is already salty).",
          "Salela elongo na rice to chikwangue."
        ]
      },
      {
        "id": "sans-tomate",
        "title": "Without tomato",
        "description": "Palm oil, onion and beans only — a sober, very common version.",
        "ingredients": [
          "500 g ya dried red to brown beans",
          "2 aluboka, mikatami",
          "4 tbsp mafuta ya palmier rouge",
          "2 mikolo ya ail, mikatami",
          "1 bay leaf",
          "1 whole small pili-pili (ya lingi)",
          "muni mpe mai"
        ],
        "steps": [
          "Soak mpe cook the beans na the bay leaf tii tender.",
          "Sweat onions mpe garlic in palm mafuta na no tomato.",
          "Stir in the beans na a ladle of cooking mai.",
          "Bakisa the chili, simmer 15 minutes. muni mpe serve."
        ]
      }
    ]
  },
  "makayabu": {
    "title": "Makayabu na tomatisi",
    "description": "makayabu : mbisi salé dessalé puis mijoté dans une sauce courte aux tomatisi, aluboka mpe piment — classique ya bassin ya Congo.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "Makayabu / morue salée préparée en plat mijoté",
    "prepTime": "min. 25 + ngonga 12 de dessalage",
    "cookTime": "min. 35",
    "ingredients": [
      "600 g ya mbisi salé séché",
      "Tomatisi 4 ya polele, mibetami",
      "2 gros aluboka, mikatami",
      "2 mikolo ya ail, mikatami",
      "Poivre noir",
      "Mai"
    ],
    "steps": [
      "Couper mbisi en portions mpe le faire tremper 12 heures au frais en changeant mai trois ou quatre fois.",
      "Goûter un petit éclat cuit pour vérifier le muni. Si nécessaire, couvrir mbisi ya mai fraîche, frémir 5 minutes puis égoutter.",
      "Chauffer mafuta mpe faire revenir aluboka jusqu'à ce qu'ils deviennent souples. Ajouter ail, tomatisi mpe pili-pili.",
      "Laisser réduire 10 minutes, déposer mbisi dans la sauce mpe verser 150 ml ya mai.",
      "Couvrir mpe mijoter doucement 15 à 20 minutes sans trop remuer. Poivrer mpe servir avec chikwangue, fufu ou plantain."
    ],
    "tags": [
      "makayabu",
      "poisson salé",
      "tomatisi",
      "oignon",
      "morue"
    ],
    "body": "**Makayabu** désigne couramment mbisi salé séché en RDC ; l'espèce et la quantité de tomatisi varient selon l'approvisionnement. Le dessalage est l'étape critique : trop de muni, et le plat est difficile à sauver.\n\nServir avec [chikwangue](/ln/recettes/chikwangue/). mbisi ya fumé (pas salé) : [mbisi ya fumé aux tomatisi](/ln/recettes/mbisi-fume-tomatisi/). Autre mbisi de table : [mbisi ya kokalinga](/ln/recettes/mbisi-ya-kokalinga/).",
    "seoTitle": "makayabu na tomatisi",
    "variants": [
      {
        "id": "fumbwa",
        "title": "Makayabu with fumbwa",
        "description": "Salted fish simmered with fumbwa leaves — diaspora and western classic.",
        "imageAlt": "Fumbwa sauce served with fufu",
        "ingredients": [
          "600 g ya salted dried mbisi, desalted",
          "400 g ya shredded fumbwa leaves",
          "2 aluboka, mikatami",
          "2 tomatisi, mibetami",
          "3 tbsp mafuta",
          "Pili-pili 1 moke (ya lingi)",
          "Mai"
        ],
        "steps": [
          "Desalt the makayabu as in the main recipe.",
          "Sweat onions mpe tomatisi in mafuta, add the fumbwa mpe a glass of mai.",
          "Funga mpe simmer 25 minutes.",
          "Bakisa the mbisi mpe cook gently 15–20 minutes without stirring much.",
          "Pepper mpe serve na chikwangue to fufu."
        ]
      },
      {
        "id": "sauce-courte",
        "title": "Short sauce",
        "description": "Less tomato, drier sauce — salted fish stays in front.",
        "ingredients": [
          "600 g ya salted dried mbisi",
          "2 ripe tomatisi, mibetami",
          "2 large aluboka, mikatami",
          "2 mikolo ya ail, mikatami",
          "3 tbsp mafuta",
          "Pili-pili 1 moke (ya lingi)",
          "Black pepper",
          "80 ml ya mai"
        ],
        "steps": [
          "Desalt the mbisi (12 h, several mai changes).",
          "Sweat the onions, add garlic, tomatisi mpe chili; reduce only 8 minutes.",
          "Bakisa the mbisi na just 80 ml mai.",
          "Funga mpe simmer 15 minutes. The sauce should stay short mpe coating.",
          "Pepper mpe serve."
        ]
      }
    ]
  },
  "makemba": {
    "title": "Makemba",
    "description": "makemba : plantains mûrs frits dorés dehors mpe fondants dedans — accompagnement ou en-cas congolais partout en RDC.",
    "region": "Na RDC mobimba",
    "imageAlt": "Makemba, bananes plantain frites à la congolaise",
    "prepTime": "min. 10",
    "cookTime": "min. 15",
    "ingredients": [
      "4 bananes plantain ya polelees",
      "mafuta ya friture",
      "1 pincée ya muni"
    ],
    "steps": [
      "Couper les extrémités ya plantains, inciser la peau dans la longueur puis les éplucher.",
      "Tailler les bananes en rondelles épaisses ou en longues tranches biseautées.",
      "Chauffer mafuta à feu moyen dans une poêle profonde.",
      "Égoutter sur ya papier absorbant mpe saler légèrement.",
      "Salela chaud elongo na ya mbisi, une nyama en sauce ou ya haricots."
    ],
    "tags": [
      "makemba",
      "plantains frits",
      "plantain",
      "friture",
      "rapide"
    ],
    "body": "Plus la peau du plantain est jaune et tachetée de noir, plus les **makemba** seront douces et caramélisées. Elles accompagnent souvent un [mbisi braisé](/ln/recettes/mbisi-braise-kinkole/) ou des [madesu](/ln/recettes/madesu/). Sans friture : [plantains na mvuke](/ln/recettes/plantains-vapeur/). Plantain vert pilé : [lituma](/ln/recettes/lituma/).",
    "seoTitle": "makemba — plantains frits"
  },
  "manioc-grille": {
    "title": "Sango ya kotumba",
    "description": "Racines ya manioc précuites puis grillées sur les braises, na une croûte fumée mpe un cœur tendre.",
    "region": "Na RDC mobimba",
    "imageAlt": "Morceaux de manioc grillé servis dans un plat",
    "prepTime": "min. 15",
    "cookTime": "min. 35",
    "ingredients": [
      "1 kg ya manioc doux",
      "Muni",
      "Pili-pili pour servir"
    ],
    "steps": [
      "Éplucher généreusement le manioc, le fendre mpe retirer la fibre centrale.",
      "Couper en tronçons puis cuire dans une grande casserole ya mai pendant 15 à 20 minutes.",
      "Égoutter lorsque les morceaux sont tendres mais encore fermes, puis les laisser sécher miniti moke.",
      "Tourner régulièrement jusqu'à ce que toutes les faces soient dorées mpe légèrement fumées.",
      "Saler mpe servir immédiatement avec ya pili-pili ou un mbisi grillé."
    ],
    "tags": [
      "manioc",
      "braises",
      "accompagnement"
    ],
    "body": "La précuisson assure un cœur tendre tandis que le passage sur les braises apporte le goût fumé. Le manioc doit toujours être correctement préparé et entièrement cuit."
  },
  "matembele-katanga": {
    "title": "Matembele aux arachides",
    "description": "matembele : feuilles ya patate douce ebilisami na tomatisi mpe nguba — légume ya Katanga monene, souvent servi na le bukari.",
    "region": "Katanga monene",
    "imageAlt": "Feuilles fraîches de patate douce appelées matembele",
    "prepTime": "min. 25",
    "cookTime": "min. 35",
    "ingredients": [
      "3 bottes ya feuilles ya patate douce",
      "100 g ya nguba ya kotumbami mpe mikuatami",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 1 monene, mikatami",
      "2 c. à soupe ya mafuta ya palmier ou ya mafuta végétale",
      "Muni",
      "250 ml ya mai"
    ],
    "steps": [
      "Trier matiti, retirer les tiges les plus dures puis les laver soigneusement.",
      "Émincer matiti mpe les faire cuire 10 minutes dans un fond ya mai.",
      "Faire revenir aluboka dans mafuta, ajouter tomatisi mpe laisser réduire.",
      "Ajouter mai progressivement, saler puis laisser mijoter à moto ya moke pendant 20 minutes.",
      "Remuer ya temps en temps mpe servir lorsque la sauce est liée mpe matiti bien tendres."
    ],
    "tags": [
      "matembele",
      "feuilles de patate douce",
      "arachides",
      "Katanga monene",
      "Lubumbashi"
    ],
    "body": "Les **matembele** (feuilles de patate douce) se cuisinent dans plusieurs régions ; au Grand Katanga, elles accompagnent couramment le [bukari](/ln/recettes/bukari-katanga/). Autre sauce nguba de feuilles : [fumbwa](/ln/recettes/fumbwa-nguba/).",
    "seoTitle": "matembele na nguba"
  },
  "mayebo": {
    "title": "Mayebo na tomatisi",
    "description": "Champignons charnus mijotés na tomatisi, aluboka mpe mafuta ya palmier dans une sauce courte.",
    "region": "Forêts du bassin du Congo",
    "imageAlt": "Grand champignon Termitomyces trouvé près du parc national de l'Upemba",
    "prepTime": "min. 25",
    "cookTime": "min. 30",
    "ingredients": [
      "700 g ya champignons comestibles fermes",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 1 monene, mikatami",
      "2 mikolo ya ail, mikatami",
      "Pili-pili 1 moke (ya lingi)",
      "Muni mpe poivre"
    ],
    "steps": [
      "Employer uniquement ya champignons cultivés ou formellement identifiés comme comestibles par une personne compétente. Les nettoyer mpe les couper en morceaux.",
      "Chauffer mafuta mpe faire fondre aluboka pendant 5 minutes. Ajouter ail mpe tomatisi.",
      "Laisser réduire la sauce 8 minutes, puis incorporer les champignons.",
      "Couvrir mpe cuire 10 minutes dans leur mai, puis découvrir mpe poursuivre jusqu'à ce que la sauce nappe les morceaux.",
      "Saler, poivrer mpe ajouter pili-pili selon le goût. Servir avec ya fufu ou ya la chikwangue."
    ],
    "tags": [
      "champignons",
      "tomatisi",
      "mafuta ya palmier",
      "forêt"
    ],
    "body": "Mayebo est un nom employé pour des champignons comestibles; les espèces disponibles et leur préparation varient avec la saison et la région."
  },
  "mbika": {
    "title": "Mbika",
    "description": "Pâte ya graines ya courge pilées, assaisonnée puis cuite en papillote ya feuilles pour obtenir une texture dense mpe fondante.",
    "region": "Basen ya Congo",
    "imageAlt": "Gâteau de graines de courge cuit dans une feuille puis ouvert",
    "prepTime": "min. 30",
    "cookTime": "min. 50",
    "ingredients": [
      "400 g ya graines ya courge décortiquées",
      "1 aluboka, finement haché",
      "2 mikolo ya ail",
      "1 petit piment, selon le goût",
      "Muni",
      "ndunda ya banane propres mpe assouplies"
    ],
    "steps": [
      "Griller légèrement les graines à sec, sans les colorer, puis les laisser refroidir.",
      "Piler ou mixer les graines jusqu'à obtenir une poudre fine.",
      "Déposer la pâte au centre ya feuilles, replier soigneusement mpe ficeler les papillotes.",
      "Cuire na mvuke pendant 45 à 50 minutes. Laisser reposer miniti moke avant d'ouvrir."
    ],
    "tags": [
      "graines de courge",
      "papillote",
      "mbika"
    ],
    "body": "Le mbika accompagne volontiers la chikwangue ou le fufu. Sa texture dépend de la finesse des graines pilées et de la quantité d'mai incorporée."
  },
  "mbinzo-tomates": {
    "title": "Mbinzo na tomatisi",
    "description": "Chenilles séchées réhydratées puis ebilisami na tomatisi, aluboka mpe pili-pili, une spécialité riche en saveurs.",
    "region": "Bandundu monene",
    "imageAlt": "Mbinzo (chenilles) mijotées en sauce, plat congolais",
    "prepTime": "min. 30",
    "cookTime": "min. 40",
    "ingredients": [
      "300 g ya chenilles séchées comestibles",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail",
      "Pili-pili, muni mpe poivre",
      "Mai"
    ],
    "steps": [
      "Trier les chenilles, les rincer makenda mingi puis les couvrir ya mai chaude pendant 20 minutes.",
      "Égoutter mpe retirer les parties dures si nécessaire.",
      "Faire revenir aluboka mpe ail dans mafuta jusqu'à ce qu'ils deviennent translucides.",
      "Incorporer les chenilles mpe un petit verre ya mai. Couvrir mpe laisser mijoter 20 à 25 minutes.",
      "Rectifier l'assaisonnement mpe servir avec ya fufu, ya la chikwangue ou ya loso."
    ],
    "tags": [
      "chenilles",
      "tomatisi",
      "Bandundu"
    ],
    "body": "Les mbinzo sont consommés dans plusieurs régions de RDC. Leur préparation varie selon les marchés, les saisons et les habitudes familiales."
  },
  "mbisi-ya-kokalinga": {
    "title": "Mbisi ya kokalinga",
    "description": "mbisi frit (en lingala : mbisi ya kokalinga) — frit jusqu'à croûte dorée.",
    "region": "Kinshasa & fleuve Congo",
    "imageAlt": "mbisi frit servi avec loso, plantains, concombre et tomatisi",
    "prepTime": "min. 25",
    "cookTime": "min. 20",
    "ingredients": [
      "2 poissons entiers nettoyés d'environ 500 g chacun",
      "2 mikolo ya ail, mikatami",
      "Muni mpe poivre",
      "Pili-pili pour servir"
    ],
    "steps": [
      "Rincer rapidement mbisi, bien les sécher mpe pratiquer trois entailles sur chaque côté.",
      "Mélanger ail, le citron, le gingembre, le muni mpe le poivre. Frotter mbisi avec cet assaisonnement mpe laisser reposer 15 minutes.",
      "Chauffer mafuta dans une grande poêle mpe frire mbisi 7 à 9 minutes ya chaque côté, selon leur épaisseur.",
      "Égoutter soigneusement mpe servir chaud avec aluboka, plantain, chikwangue ou pili-pili."
    ],
    "tags": [
      "mbisi",
      "friture",
      "fleuve",
      "Kinshasa"
    ],
    "body": "Le **mbisi frit** (en lingala : *mbisi ya kokalinga*) convient à plusieurs poissons selon les arrivages. Autre braise : [mbisi braisé à Kinkole](/ln/recettes/mbisi-braise-kinkole/), [capitaine braisé](/ln/recettes/capitaine-braise/).",
    "seoTitle": "mbisi frit"
  },
  "mikate": {
    "title": "Mikate",
    "description": "mikate : beignets congolais à la pâte levée, croustillants dehors, moelleux dedans — street food mpe goûter ya Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "Mikate dorés, les beignets congolais",
    "prepTime": "min. 20",
    "cookTime": "min. 20",
    "ingredients": [
      "500 g ya farine",
      "80 g ya sucre",
      "7 g ya levure boulangère sèche",
      "350 ml ya mai tièya",
      "mafuta ya friture",
      "Pâte d'nguba pour accompagner (ya lingi)"
    ],
    "steps": [
      "Délayer la levure mpe une cuillère ya sucre dans un peu ya mai tièya. Laisser mousser 10 minutes.",
      "Mélanger la farine, le reste ya sucre mpe le muni dans un grand saladier.",
      "Verser la levure puis ajouter progressivement mai. Battre la pâte jusqu'à ce qu'elle soit lisse, souple mpe collante.",
      "Frire les mikate par petites quantités en les retournant jusqu'à ce qu'ils soient uniformément dorés.",
      "Égoutter mpe servir tièya, nature ou avec ya la pâte d'nguba."
    ],
    "tags": [
      "mikate",
      "beignets congolais",
      "beignet",
      "levure",
      "Kinshasa"
    ],
    "body": "Les **mikate** sont les beignets congolais de rue et de maison : à Kinshasa on les croise au petit-déjeuner ou au goûter, mbala mingi na de la pâte d'nguba. La pâte doit lever suffisamment pour rester légère après friture.\n\nÀ boire à côté : [tangawisi](/ln/recettes/tangawisi/) (jus de gingembre). Autres douceurs : [beignets de banane](/ln/recettes/beignets-banane/), [beignets de manioc](/ln/recettes/beignets-manioc/).",
    "seoTitle": "mikate — beignets congolais"
  },
  "moambe-poulet": {
    "title": "Soso ya mwambe",
    "description": "Soso ya mwambe : sauce ya moambe (pulpe ya noix de palme) ebilisami na soso — bilei ya fête oyo ezwami mingi na RDC.",
    "region": "Na RDC mobimba",
    "imageAlt": "soso à la moambe servi avec du loso et du saka-saka",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 15",
    "ingredients": [
      "1 soso, kata na biteni",
      "400 ml ya pulpe to crème ya noix ya palme (moambe)",
      "2 aluboka",
      "3 tomatisi",
      "2 mikolo ya ail",
      "1 branche ya céleri ou feuilles ya basilic congolais (ya lingi)",
      "Mafuta, muni, cube, pili-pili"
    ],
    "steps": [
      "Bimasisa biteni ya soso na mwa mafuta. Tika na pembeni.",
      "Na marmite moko wana, bimasisa aluboka, ail mpe tomatisi mibetami tii sauce ekóma epaisse.",
      "Tia na passoire soki esengeli mpo na sauce ya pete.",
      "Zongisa soso, tema moambe mpe verre ya mai. Funga.",
      "Bilisa na moto ya moke ngonga 50 tii ngonga 1, obalabala mpo na sauce ekanga te.",
      "Bongisa monoko mpe salela na moto elongo na loso ya pete to fufu."
    ],
    "tags": [
      "moambe",
      "poulet moambe",
      "mwamba",
      "noix de palme",
      "fête"
    ],
    "body": "**Soso ya mwambe** (mwamba) ezali moko ya bilei ya Congo oyo bato bayebi mingi libanda ya RDC. Moambe ezali na boîte to sachet na magazini ya Afríka ; okoki mpe kobimisa yango na noix de palme ya sika.\n\nMpo na koyeba sauce moko — texture, badiliko na diaspora — tala [guide ya moambe](/ln/guides/moambe/). Ndenge ya mbisi : [mbisi na moambe](/ln/recettes/poisson-moambe/).",
    "seoTitle": "Soso ya mwambe — recette ya moambe",
    "variants": [
      {
        "id": "noix-fraiches",
        "title": "With fresh palm nuts",
        "description": "Extracting palm nuts — longer, more floral flavour.",
        "imageAlt": "Chicken moambe served with rice",
        "ingredients": [
          "1 soso, cut into pieces",
          "800 g ya fresh palm nuts",
          "2 aluboka",
          "3 tomatisi",
          "2 mikolo ya ail",
          "mafuta, muni, stock cube, pili-pili",
          "Mai"
        ],
        "steps": [
          "Boil the palm nuts 20–30 minutes, crush them mpe dilute na hot mai.",
          "Strain the pulp for a smooth cream (fresh moambe).",
          "Bimasisa the soso, set aside. Sweat onions, garlic mpe tomatisi.",
          "Zongisa the soso, pour in the fresh moambe. Simmer gently 50 minutes to 1 hour.",
          "Reduce tii the sauce coats the meat. Serve na rice to fufu."
        ]
      },
      {
        "id": "epicee",
        "title": "Very spicy version",
        "description": "Same sauce, a hard pili-pili hit for tables that like heat.",
        "ingredients": [
          "1 soso, cut into pieces",
          "400 ml ya palm-nut cream / pulp (moambe)",
          "2 aluboka",
          "3 tomatisi",
          "2 mikolo ya ail",
          "2 to 3 fresh pili-pili chilies, mikatami",
          "mafuta, muni, stock cube"
        ],
        "steps": [
          "Follow the main recipe tii the soso goes back into the sauce.",
          "Bakisa the chopped chilies na the moambe (keep the seeds for more heat).",
          "Bilisa na moto ya moke 50 minutes to 1 hour; taste mpe adjust chili at the end.",
          "Salela elongo na rice, fufu mpe a small dish of pili-pili sauce on the side."
        ]
      }
    ]
  },
  "mujibujibu": {
    "title": "Mujibujibu",
    "description": "Feuilles ya courge lentement ebilisami na nguba fraîches moulues mpe mbisi ya fumé.",
    "region": "Kasaï-Central",
    "imageAlt": "Jeunes feuilles de courge africaines mpo na le mujibujibu",
    "prepTime": "min. 30",
    "cookTime": "min. 45",
    "ingredients": [
      "3 bottes ya jeunes feuilles ya courge",
      "150 g d'nguba fraîches moulues",
      "250 g ya mbisi ya fumé",
      "1 aluboka, mikatami",
      "2 lukwakulu ya mafuta ya palmier",
      "Muni",
      "400 ml ya mai"
    ],
    "steps": [
      "Trier mpe laver makenda mingi matiti ya courge, puis les découper finement.",
      "Nettoyer mbisi fumé, retirer les arêtes accessibles mpe le partager en morceaux.",
      "Mettre matiti dans une marmite avec mai mpe laisser tomber pendant 10 minutes.",
      "Déposer mbisi fumé, couvrir mpe cuire à moto ya moke pendant environ 30 minutes.",
      "Remuer délicatement, ajuster la consistance avec un peu ya mai mpe rectifier le muni."
    ],
    "tags": [
      "Kasaï",
      "feuilles de courge",
      "arachides",
      "poisson fumé"
    ],
    "body": "Plat transmis dans les familles luba du Kasaï, le mujibujibu est servi avec le [bukari](/ln/recettes/bukari-katanga/) (bidia), du loso ou de la [chikwangue](/ln/recettes/chikwangue/)."
  },
  "munkoyo": {
    "title": "Munkoyo",
    "description": "Boisson céréalière légèrement acidulée, obtenue par fermentation courte d'une bouillie ya maïs na ya racines ya munkoyo.",
    "region": "Haut-Katanga",
    "imageAlt": "Munkoyo servi dans un verre et une carafe",
    "prepTime": "min. 25 + ngonga 24 de fermentation",
    "cookTime": "min. 20",
    "ingredients": [
      "300 g ya farine ya maïs",
      "2,5 l ya mai potable",
      "20 g ya racines ya munkoyo séchées ya qualité alimentaire",
      "60 g ya sucre, ya lingi"
    ],
    "steps": [
      "Utiliser uniquement ya racines ya munkoyo vendues pour l'alimentation par une source fiable; ne pas récolter ni identifier soi-même une racine sauvage.",
      "Délayer la farine dans 500 ml ya mai froide. Porter le reste ya mai à ébullition, ajouter le mélange mpe cuire 15 à 20 minutes en remuant.",
      "Transvaser dans un récipient parfaitement propre mpe laisser refroidir jusqu'à température ambiante.",
      "Rincer brièvement les racines, les fendre mpe les plonger dans la bouillie. Couvrir d'un linge propre mpe laisser fermenter 12 à 24 heures dans un endroit tempéré.",
      "Retirer les racines, filtrer, sucrer si souhaité puis réfrigérer. Consommer bien frais dans les deux jours mpe jeter la boisson en cas d'odeur anormale ou ya moisissure."
    ],
    "tags": [
      "maïs",
      "fermentation",
      "boisson",
      "Haut-Katanga"
    ],
    "body": "La céréale, le degré de fermentation et le sucre diffèrent selon les foyers; cette version domestique privilégie une fermentation courte et une hygiène rigoureuse."
  },
  "ngai-ngai": {
    "title": "Ngai-ngai au poisson fumé",
    "description": "ngai-ngai : feuilles d'oseille ya Guinée acidulées, ebilisami na mbisi ya fumé, tomatisi mpe aluboka — bilei ya Kongo-Central mpe ya Kinshasa.",
    "region": "Kinshasa mpe Kongo-Central",
    "imageAlt": "Ngai-ngai mijoté servi dans un plat blanc",
    "prepTime": "min. 25",
    "cookTime": "min. 40",
    "ingredients": [
      "500 g ya feuilles ya ngai-ngai",
      "250 g ya mbisi ya fumé",
      "2 tomatisi, mibetami",
      "1 aluboka, mikatami",
      "Muni",
      "300 ml ya mai"
    ],
    "steps": [
      "Trier matiti, retirer les tiges dures mpe les laver dans plusieurs eaux avant ya les émincer.",
      "Nettoyer mbisi fumé, ôter les arêtes accessibles mpe le partager en morceaux.",
      "Ajouter matiti mpe mai. Couvrir mpe laisser mijoter 15 minutes, le temps qu'elles s'assouplissent.",
      "Déposer mbisi mpe pili-pili, puis cuire encore 15 minutes à moto ya moke. Saler avec retenue mpe servir avec ya fufu ou ya loso."
    ],
    "tags": [
      "ngai-ngai",
      "oseille",
      "oseille de Guinée",
      "poisson fumé",
      "feuilles"
    ],
    "body": "Le **ngai-ngai** (oseille de Guinée / roselle) se reconnaît à son acidité franche. tomatisi, mbisi ya fumé et matière grasse se dosent différemment selon les cuisines.\n\nAutre plat de feuilles : le [pondu](/ln/recettes/pondu/). Autre usage du mbisi ya fumé / salé : [makayabu aux tomatisi](/ln/recettes/makayabu/).",
    "seoTitle": "ngai-ngai au mbisi ya fumé",
    "variants": [
      {
        "id": "vegetal",
        "title": "Without fish",
        "description": "Fully plant-based ngai-ngai — leaf acidity stays centre stage.",
        "imageAlt": "Simmered ngai-ngai served in a dish",
        "ingredients": [
          "500 g ya ngai-ngai leaves",
          "2 tomatisi, mibetami",
          "1 aluboka, mikatami",
          "3 tbsp palm to neutral mafuta",
          "Pili-pili 1 moke (ya lingi)",
          "Muni",
          "300 ml ya mai"
        ],
        "steps": [
          "Sort, wash mpe shred the leaves.",
          "Sweat the aluboka in mafuta, add the tomatisi, cook 5 minutes.",
          "Bakisa the leaves mpe mai. Cover mpe simmer 25–30 minutes.",
          "Bakisa chili, muni mpe serve na fufu to rice."
        ]
      },
      {
        "id": "huile-neutre",
        "title": "With neutral oil",
        "description": "No palm oil — cleaner taste, sharper acidity.",
        "ingredients": [
          "500 g ya ngai-ngai leaves",
          "250 g ya smoked mbisi",
          "2 tomatisi, mibetami",
          "1 aluboka, mikatami",
          "3 tbsp sunflower to peanut mafuta",
          "Pili-pili 1 moke (ya lingi)",
          "Muni",
          "300 ml ya mai"
        ],
        "steps": [
          "Follow the main recipe, swapping palm mafuta for neutral mafuta.",
          "Do not brown the aluboka too much — keep a light sauce.",
          "muni at the end. Serve na fufu to rice."
        ]
      }
    ]
  },
  "nsafu-grilles": {
    "title": "Nsafu grillés",
    "description": "Fruits ya safoutier doucement chauffés jusqu'à ce que leur peau violette s'assouplisse mpe que leur chair devienne crémeuse.",
    "region": "RDC ya bwé",
    "imageAlt": "Nsafu violets tournés pendant leur cuisson sur une grille",
    "prepTime": "min. 5",
    "cookTime": "min. 10",
    "ingredients": [
      "8 nsafu mûrs",
      "muni fin"
    ],
    "steps": [
      "Rincer les nsafu mpe les sécher soigneusement.",
      "Les poser sur une grille placée au-dessus ya braises douces.",
      "Les tourner souvent pendant 6 à 10 minutes pour assouplir uniformément la peau mpe la pulpe.",
      "Retirer les fruits lorsque la peau pâlit légèrement mpe que la chair cèya sous le doigt.",
      "Ouvrir, retirer le noyau, saler très légèrement mpe déguster chaud."
    ],
    "tags": [
      "nsafu",
      "safou",
      "grillé"
    ],
    "body": "Le nsafu, babengami lisusi safou, possède une chair riche et beurrée. Il peut aussi être plongé miniti moke dans de mai tout juste bouillie. En boisson de saison : [jus de safou](/ln/recettes/jus-safou/)."
  },
  "ntaba": {
    "title": "Ntaba ya kotumba",
    "description": "ntaba : chèvre marinée aux aromates puis grillée sur braises — grillade congolaise typique ya Kinshasa mpe ya Kongo-Central.",
    "region": "Kinshasa mpe Kongo-Central",
    "imageAlt": "Ntaba grillé aux aluboka et poivrons servi sur une feuille de bananier",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "min. 50",
    "ingredients": [
      "1,5 kg ya chèvre avec quelques morceaux sur l'os",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre frais, râpé",
      "2 c. à soupe ya jus ya citron",
      "2 lukwakulu ya mafuta",
      "1 petit piment, selon le goût",
      "Muni mpe poivre"
    ],
    "steps": [
      "Mélanger aluboka râpé, ail, le gingembre, le citron, mafuta, pili-pili, le muni mpe le poivre. Enrober la nyama mpe laisser mariner au frais pendant 2 heures.",
      "Déposer la nyama dans une marmite avec la marinade mpe 200 ml ya mai. Couvrir mpe laisser cuire 25 à 30 minutes, jusqu'à ce qu'elle commence à s'attendrir.",
      "Égoutter les morceaux en réservant un peu ya jus. Préparer ya braises moyennes mpe huiler légèrement la grille.",
      "Griller la chèvre 15 à 20 minutes en la retournant régulièrement mpe en la badigeonnant d'un peu ya jus ya cuisson.",
      "Émincer le second aluboka mpe le servir avec le ntaba, accompagné ya chikwangue, ya plantain ou ya pili-pili."
    ],
    "tags": [
      "ntaba",
      "chèvre grillée",
      "chèvre",
      "grillade",
      "Kinshasa"
    ],
    "body": "Le **ntaba** (chèvre en lingala) est une grillade de partage : précuisson pour attendrir, puis braises pour dorer. Selon les gargotes, le temps avant le grill varie beaucoup.\n\nEn sauce plutôt qu'au feu : [ntaba en sauce](/ln/recettes/ntaba-sauce/). Autre brochette de rue : [kamundele](/ln/recettes/kamundele/).",
    "seoTitle": "ntaba — chèvre grillée"
  },
  "pepe-soupe-ya-ngolo": {
    "title": "Pepe soupe ya ngolo",
    "description": "soupe pepe au mbisi-chat (en lingala : pepe soupe ya ngolo) — bouillon pimenté au ngolo.",
    "region": "Kinshasa",
    "imageAlt": "Soupe ya ngolo, ragoût de mbisi-chat vendu à Kinshasa",
    "prepTime": "min. 25",
    "cookTime": "min. 35",
    "ingredients": [
      "1 kg ya mbisi-chat nettoyé mpe coupé en tronçons",
      "3 tomatisi, mibetami",
      "2 aluboka",
      "3 mikolo ya ail",
      "1 morceau ya gingembre frais",
      "Pili-pili selon le goût",
      "muni, poivre mpe mai"
    ],
    "steps": [
      "Rincer les morceaux ya mbisi avec ya mai citronnée puis les égoutter.",
      "Piler ou mixer ail, le gingembre, un aluboka, le céleri mpe le pili-pili.",
      "Déposer tomatisi mpe le second aluboka dans une marmite avec un peu ya mai. Cuire 10 minutes.",
      "Déposer délicatement mbisi dans la marmite mpe cuire à feu moyen pendant 20 minutes sans trop remuer.",
      "Poivrer, ajuster le muni mpe servir très chaud avec ya la chikwangue ou ya plantain."
    ],
    "tags": [
      "pepe soupe",
      "ngolo",
      "poisson-chat",
      "soupe",
      "Kinshasa"
    ],
    "body": "La **soupe pepe au mbisi-chat** (en lingala : *pepe soupe ya ngolo* ; *ngolo* = mbisi-chat) est une soupe courte, très parfumée, typique des tables qui aiment pili-pili. Version grillée du même mbisi : [ngolo grillé](/ln/recettes/ngolo-grille/).",
    "seoTitle": "soupe pepe au mbisi-chat (ngolo)"
  },
  "poisson-braise-kinkole": {
    "title": "Mbisi ya kotumba",
    "description": "mbisi braisé façon Kinkole : mbisi entier mariné au pili-pili mpe aux aromates, grillé jusqu'à peau fumée mpe chair juteuse — classique ya Kinshasa.",
    "region": "Kinshasa · Kinkole",
    "imageAlt": "mbisi braisé servi avec du plantain et de la chikwangue à Kinkole",
    "prepTime": "min. 25",
    "cookTime": "min. 30",
    "ingredients": [
      "1 gros tilapia ou capitaine entier, vidé mpe écaillé",
      "2 aluboka",
      "3 mikolo ya ail",
      "Pili-pili, muni mpe poivre",
      "1 tomatisi mpe quelques herbes fraîches pour servir"
    ],
    "steps": [
      "Pratiquer plusieurs entailles sur les deux côtés ya mbisi.",
      "Mixer un aluboka avec ail, le gingembre, le jus ya citron, mafuta, le pili-pili, le muni mpe le poivre.",
      "Cuire 12 à 15 minutes ya chaque côté en badigeonnant avec le reste ya marinade.",
      "Servir avec ya rondelles d'aluboka, ya la tomatisi, ya plantain grillé mpe ya la chikwangue."
    ],
    "tags": [
      "poisson braisé",
      "Kinkole",
      "Kinshasa",
      "grill",
      "pili-pili"
    ],
    "body": "Le **mbisi braisé** de Kinkole (et Maluku) est un repère de la street food kinshasaise : marinade pimentée, fumée de braise, table près du fleuve. na four ou au grill domestique, gardez une chaleur moyenne pour ne pas dessécher la chair.\n\nAutre grand mbisi de Kinshasa : la [pepe soupe ya ngolo](/ln/recettes/pepe-soupe-ya-ngolo/). En papillote : [liboke de mbisi](/ln/recettes/liboke-mbisi/).",
    "seoTitle": "mbisi braisé à Kinkole"
  },
  "pondu": {
    "title": "Pondu (saka-saka)",
    "description": "Pondu (saka-saka) : matabisi ya manioc ebilisami na mafuta ya palmier, aluboka mpe mbisi ya fumé — classique ya mokolo na mokolo na RDC.",
    "region": "Kinshasa mpe Cuvette",
    "imageAlt": "matabisi ya manioc (pondu) cuisinées et esalemi elongo na du fufu",
    "prepTime": "min. 45",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "2 kg ya matabisi ya manioc (pondu) ya sika to congelé",
      "200 ml ya mafuta ya palmier rouge",
      "3 aluboka ya kati, mikatami",
      "4 mikolo ya ail, mikatami",
      "muni mpe piment na monoko",
      "Mai"
    ],
    "steps": [
      "Sukola matabisi ya manioc, biangá mwa moke na mai ya moto, sima kata yango mingi (to okoki kosalela moulin ya manioc).",
      "Na marmite, bimasisa aluboka mpe ail na mafuta ya palmier tii bazala mollement.",
      "Bakisa pondu mikatami, bongisa mpo na mafuta ekata matabisi nyoso.",
      "Tema mwa mai, funga mpe bilisa na moto ya moke, obalabala makenda (miniti 45 tii ngonga 1) tii elaksis eza crémeuse.",
      "Bakisa mbisi ya fumé na biteni, bongisa monoko mpe bomba miniti 15. Salela elongo na fufu, chikwangue to loso."
    ],
    "tags": [
      "pondu",
      "saka-saka",
      "matabisi ya manioc",
      "mafuta ya palmier",
      "ya libota"
    ],
    "body": "**Pondu**, babengami lisusi **saka-saka** to **mpondu**, ezali recette ya matabisi ya manioc oyo bato balukaka mingi na bilei ya Congo. Bato basalaka lisusu na ndenge ya mboga, sans mbisi to nyama, mpo na mikolo ya jeûne to bilei ya vendredi na libota mosusu.\n\nMpo na geste, zando mpe ndenge ya biteni, tánga [guide ya pondu](/ln/guides/pondu/). Na Est, geste moko babengaka mbala mingi [sombe](/ln/recettes/sombe/). Mpo na accompagnement : [chikwangue](/ln/recettes/chikwangue/) to [fufu ya manioc](/ln/recettes/fufu-manioc/).",
    "seoTitle": "Pondu (saka-saka) — matabisi ya manioc",
    "variants": [
      {
        "id": "vegetarien",
        "title": "Vegetarian version",
        "description": "Sans mbisi to nyama — mikolo ya jeûne to bilei ya vendredi.",
        "imageAlt": "Cooked cassava leaves served with fufu",
        "ingredients": [
          "2 kg ya matabisi ya manioc (pondu), ya sika to congelé",
          "200 ml ya mafuta ya palmier rouge",
          "3 medium aluboka, mikatami",
          "4 mikolo ya ail, mibetami",
          "2 vegetable stock cubes to muni",
          "pili-pili to taste",
          "Mai"
        ],
        "steps": [
          "Sukola the leaves, blanch briefly, then chop finely.",
          "Sweat onions mpe garlic in palm mafuta tii soft.",
          "Bakisa the pondu, coat na mafuta, then add a little mai.",
          "Funga mpe simmer gently 1 h to 1 h 15, stirring, tii creamy.",
          "Bongisa monoko (cube to muni, chili) mpe cook 10 minutes more. Serve na fufu to chikwangue."
        ]
      },
      {
        "id": "viande",
        "title": "With meat",
        "description": "Same gesture, with simmered meat instead of smoked fish.",
        "imageAlt": "Plate of simmered cassava leaves",
        "ingredients": [
          "2 kg ya matabisi ya manioc (pondu), ya sika to congelé",
          "200 ml ya mafuta ya palmier rouge",
          "3 medium aluboka, mikatami",
          "4 mikolo ya ail, mibetami",
          "400 g ya beef to goat in small pieces",
          "2 stock cubes",
          "muni mpe pili-pili to taste",
          "Mai"
        ],
        "steps": [
          "Bimasisa the meat in a little palm mafuta, then set aside.",
          "In the same pot, sweat onions mpe garlic, add chopped pondu mpe a splash of mai.",
          "Funga mpe simmer gently 45 minutes.",
          "Zongisa the meat, add the rest of the mafuta mpe a little mai. Cook another 45 minutes tii creamy mpe tender.",
          "Bongisa monoko mpe serve na fufu, chikwangue to rice."
        ]
      }
    ]
  },
  "riz-moambe": {
    "title": "Loso ya mwambe",
    "description": "loso mijoté dans une sauce ya noix ya palme douce, parfumée à aluboka mpe relevée d'une pointe ya piment.",
    "region": "Kinshasa mpe Cuvette",
    "imageAlt": "loso africain coloré par une sauce à mafuta de palme",
    "prepTime": "min. 15",
    "cookTime": "min. 35",
    "ingredients": [
      "400 g ya loso long",
      "250 ml ya concentré ya noix ya palme non sucré",
      "1 aluboka, finement haché",
      "1 gousse d'ail, mikatami",
      "1 petit piment entier, ya lingi",
      "Muni"
    ],
    "steps": [
      "Rincer le loso jusqu'à ce que mai soit presque claire, puis bien l'égoutter.",
      "Mettre le concentré ya noix ya palme dans une marmite mpe le chauffer doucement avec aluboka mpe ail pendant 5 minutes.",
      "Ajouter le loso mpe remuer 2 minutes afin d'enrober chaque grain.",
      "Verser mai chaude, ajouter le laurier, pili-pili mpe le muni. Porter à frémissement.",
      "Couvrir mpe cuire à feu très doux 18 à 22 minutes. Couper le feu, laisser reposer 10 minutes puis égrainer à la fourchette."
    ],
    "tags": [
      "riz",
      "moambe",
      "noix de palme",
      "accompagnement"
    ],
    "body": "Cette préparation de loso à la sauce de palme peut accompagner mbisi, soso ou légumes; sa richesse dépend du concentré utilisé."
  },
  "saka-madesu": {
    "title": "Pondu na madesu",
    "description": "saka-madesu : matabisi ya manioc (pondu) (pondu) mpe haricots mijotés ensemble à mafuta ya palme — duo classique ya l'Ouest ya la RDC.",
    "region": "RDC ya bwé",
    "imageAlt": "Ragoût de matabisi ya manioc (pondu) et de haricots",
    "prepTime": "min. 30 + ngonga 8 de kobomba",
    "cookTime": "ngonga 2",
    "ingredients": [
      "400 g ya haricots secs, trempés une nuit",
      "800 g ya matabisi ya manioc (pondu) pilées, fraîches ou surgelées",
      "150 ml ya mafuta ya palmier rouge",
      "2 aluboka, mikatami",
      "2 mikolo ya ail, mikatami",
      "Pili-pili 1 moke",
      "Muni",
      "Mai"
    ],
    "steps": [
      "Égoutter les haricots, les couvrir ya mai fraîche mpe les cuire environ 1 heure, jusqu'à ce qu'ils soient presque tendres.",
      "Mettre matiti ya manioc pilées dans une grande marmite, couvrir ya mai mpe cuire na sanza pendant 45 minutes en remuant ya temps en temps.",
      "Ajouter aluboka, ail, pili-pili mpe mafuta ya palme. Poursuivre la cuisson 20 minutes.",
      "Incorporer les haricots avec un peu ya leur mai, puis laisser mijoter encore 25 à 30 minutes. matiti doivent être entièrement cuites mpe sans amertume crue.",
      "Saler, ajuster la consistance mpe servir avec ya fufu ou ya la chikwangue."
    ],
    "tags": [
      "saka-madesu",
      "pondu",
      "haricots",
      "matabisi ya manioc",
      "mafuta ya palmier"
    ],
    "body": "Le **saka-madesu** réunit deux piliers du quotidien : le saka (pondu / matabisi ya manioc (pondu)) et les madesu (haricots). Certaines versions ajoutent du mbisi ya fumé ; d'autres restent végétales.\n\nSéparé, voir aussi [pondu](/ln/recettes/pondu/) et [madesu](/ln/recettes/madesu/). Accompagnement : [chikwangue](/ln/recettes/chikwangue/).",
    "seoTitle": "saka-madesu",
    "variants": [
      {
        "id": "poisson-fume",
        "title": "With smoked fish",
        "description": "Leaves, beans and smoked fish — a richer western version.",
        "imageAlt": "Stew of cassava leaves and beans",
        "ingredients": [
          "400 g ya dried beans, soaked overnight",
          "800 g ya pounded cassava leaves, fresh to frozen",
          "200 g ya smoked mbisi",
          "150 ml ya mafuta ya palmier rouge",
          "2 aluboka, mikatami",
          "2 mikolo ya ail, mibetami",
          "1 small pili-pili",
          "Muni",
          "Mai"
        ],
        "steps": [
          "Cook beans mpe leaves as in the main recipe tii mid-cooked.",
          "Soak the smoked mbisi 20 minutes, break it up mpe add na mafuta, onions mpe garlic.",
          "Bilisa na moto ya moke another 30 minutes tii the leaves are tender mpe the mbisi is integrated.",
          "muni lightly. Serve na fufu to chikwangue."
        ]
      },
      {
        "id": "vegetal",
        "title": "Fully plant-based",
        "description": "No fish — pure leaves and beans for meat-free days.",
        "ingredients": [
          "400 g ya dried beans, soaked overnight",
          "800 g ya pounded cassava leaves, fresh to frozen",
          "150 ml ya mafuta ya palmier rouge",
          "2 aluboka, mikatami",
          "2 mikolo ya ail, mibetami",
          "1 small pili-pili",
          "Muni",
          "Mai"
        ],
        "steps": [
          "Follow the main recipe as written (already without mbisi).",
          "Cook the leaves thoroughly — no raw bitterness.",
          "muni at the end mpe serve na fufu to chikwangue."
        ]
      }
    ]
  },
  "salade-kisangani": {
    "title": "Salade chou-carotte",
    "description": "Salade croquante ya chou mpe carotte, liée à la mayonnaise, relevée au vinaigre mpe garnie d'œufs.",
    "region": "Kisangani",
    "imageAlt": "Salade de chou, carotte et œuf",
    "prepTime": "min. 20",
    "cookTime": "min. 10",
    "ingredients": [
      "1 petit chou blanc",
      "3 carottes",
      "3 œufs",
      "4 c. à soupe ya mayonnaise",
      "1 c. à café ya moutarde",
      "Muni mpe poivre"
    ],
    "steps": [
      "Cuire les œufs 10 minutes dans mai frémissante, les refroidir puis les écaler.",
      "Émincer très finement le chou mpe râper les carottes.",
      "Couper les œufs en quartiers mpe les disposer sur la salade.",
      "Réserver au frais 20 minutes avant ya servir."
    ],
    "tags": [
      "Kisangani",
      "chou",
      "carotte"
    ],
    "body": "Cette salade apporte fraîcheur et croquant à côté des grillades et des plats de loso. Elle doit rester au frais jusqu'au service."
  },
  "soso-lumba-lumba": {
    "title": "Soso ya lumba-lumba",
    "description": "soso au basilic (en lingala : soso ya lumba-lumba) : soso parfumé au basilic congolais — classique ya Kasaï.",
    "region": "Kasaï monene",
    "imageAlt": "soso en sauce servi avec du fufu en République démocratique du Congo",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1",
    "ingredients": [
      "1 soso dékata na biteni",
      "2 grosses poignées ya feuilles ya lumba-lumba ou ya basilic africain",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "3 mikolo ya ail",
      "300 ml ya mai",
      "Pili-pili, muni mpe poivre"
    ],
    "steps": [
      "Piler ensemble ail, le gingembre mpe la moitié ya feuilles ya lumba-lumba.",
      "Assaisonner le soso avec cette pâte, ya muni mpe ya poivre, puis laisser reposer 20 minutes.",
      "Faire dorer les morceaux dans mafuta mpe les réserver.",
      "Remettre le soso, verser mai, couvrir mpe laisser mijoter 35 à 40 minutes.",
      "Ciseler le reste ya feuilles, les ajouter en fin ya cuisson mpe poursuivre 5 minutes à moto ya moke."
    ],
    "tags": [
      "Kasaï monene",
      "poulet",
      "lumba-lumba",
      "basilic"
    ],
    "body": "Le **soso au basilic** (en lingala : *soso ya lumba-lumba*) parfume le soso au basilic congolais — classique du Kasaï. Autre soso : [soso grillé](/ln/recettes/soso-ya-kotumba/), [soso mayo](/ln/recettes/soso-mayo/).",
    "seoTitle": "soso au basilic — Kasaï"
  },
  "soso-ya-sauce": {
    "title": "Soso ya sauce",
    "description": "soso en sauce (en lingala : soso ya sauce) : soso mijoté dans une sauce ya tomatisi-aluboka — version en sauce ya soso grillé.",
    "region": "Kinshasa",
    "imageAlt": "soso congolais mijoté dans une sauce rouge",
    "prepTime": "min. 25",
    "cookTime": "min. 55",
    "ingredients": [
      "1 soso dékata na biteni",
      "Tomatisi 5 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "3 mikolo ya ail",
      "1 morceau ya gingembre frais",
      "3 lukwakulu ya mafuta",
      "1 feuille ya laurier",
      "Pili-pili, muni mpe poivre",
      "250 ml ya mai"
    ],
    "steps": [
      "Saler mpe poivrer les morceaux ya soso, puis les faire dorer dans mafuta sur toutes les faces.",
      "Réserver le soso mpe faire revenir aluboka dans la même marmite.",
      "Ajouter ail mpe le gingembre pilés, puis tomatisi mpe le laurier.",
      "Laisser la sauce réduire 12 à 15 minutes, jusqu'à ce qu'elle devienne concentrée.",
      "Remettre le soso, ajouter mai mpe le pili-pili, puis couvrir.",
      "Laisser mijoter à moto ya moke 30 à 35 minutes. Découvrir en fin ya cuisson si la sauce doit épaissir."
    ],
    "tags": [
      "poulet",
      "tomatisi",
      "Kinshasa"
    ],
    "body": "Le **soso en sauce** (en lingala : *soso ya sauce*) se sert avec loso, fufu ou plantains. L'assaisonnement change d'une maison à l'autre ; le geste reste le mijoté tomatisi-aluboka. Grillade : [soso grillé](/ln/recettes/soso-ya-kotumba/).",
    "seoTitle": "soso en sauce"
  },
  "poulet-mayo": {
    "title": "Soso ya mayonnaise",
    "description": "soso mayo : soso doré nappé d'une mayonnaise relevée d'ail, moutarde mpe pili-pili — classique ya tables mpe fêtes à Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "soso doré prêt à être nappé de sauce",
    "prepTime": "min. 25",
    "cookTime": "min. 45",
    "ingredients": [
      "1 soso, kata na biteni",
      "3 lukwakulu ya mafuta",
      "Aluboka 2, mikatami",
      "3 mikolo ya ail, mikatami",
      "1 c. à café ya moutarde",
      "200 ml ya mayonnaise",
      "1 c. à soupe ya jus ya citron",
      "Pili-pili, muni mpe poivre",
      "1 cube ya bouillon, ya lingi"
    ],
    "steps": [
      "Saler mpe poivrer le soso. Le faire dorer dans mafuta chaude, puis réserver.",
      "Dans la même marmite, faire fondre aluboka. Ajouter ail, le cube émietté mpe un fond ya mai.",
      "Remettre le soso, couvrir mpe mijoter 25 à 30 minutes jusqu'à ce qu'il soit tendre.",
      "Hors ya feu, mélanger mayonnaise, moutarde, citron mpe pili-pili. Napper le soso encore chaud.",
      "Remuer délicatement pour enrober sans faire tourner la sauce. Servir avec frites, loso ou salade."
    ],
    "tags": [
      "poulet mayo",
      "mayonnaise",
      "poulet",
      "Kinshasa",
      "fête"
    ],
    "body": "Le **soso mayo** n'est ni une moambe ni une sauce ya tomatisi : la liaison froide à la mayonnaise arrive en fin de cuisson. Moutarde et piment se dosent très librement d'un foyer à l'autre.\n\nGrillade : [soso ya kotumba](/ln/recettes/soso-ya-kotumba/). Autre soso de fête : [soso à la moambe](/ln/recettes/moambe-soso/). En sauce ya tomatisi : [soso ya sauce](/ln/recettes/soso-ya-sauce/).",
    "seoTitle": "soso mayo kinshasa"
  },
  "ntaba-sauce": {
    "title": "Ntaba ya sauce",
    "description": "Chèvre longuement mijotée dans une sauce ya tomatisi mpe aluboka, tendre mpe parfumée — la version mijotée ya ntaba, distincte ya la grillade.",
    "region": "Kinshasa mpe Kongo-Central",
    "imageAlt": "Ragoût de chèvre mijoté dans une sauce brune",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 45",
    "ingredients": [
      "1,5 kg ya chèvre coupée en morceaux",
      "Aluboka 3, mikatami",
      "Tomatisi 4 ya polele, mibetami",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "3 lukwakulu ya mafuta",
      "Pili-pili 1 moke",
      "1 cube ya bouillon",
      "muni, poivre mpe mai"
    ],
    "steps": [
      "Faire dorer les morceaux ya chèvre dans mafuta. Réserver.",
      "Faire revenir aluboka, ail mpe gingembre. Ajouter tomatisi mpe laisser réduire 10 minutes.",
      "Remettre la nyama, le cube, pili-pili mpe ya mai à hauteur. Porter à ébullition.",
      "Baisser le feu, couvrir mpe mijoter 1 h 15 à 1 h 30, jusqu'à ce que la chèvre soit très tendre.",
      "Découvrir pour épaissir la sauce si besoin. Servir avec loso, chikwangue ou plantain."
    ],
    "tags": [
      "chèvre",
      "sauce",
      "mijoté",
      "ntaba"
    ],
    "body": "Contrairement au ntaba grillé sur braises, cette version reste entièrement en marmite. Le temps de cuisson dépend de l'âge de l'animal et de la taille des morceaux."
  },
  "viande-ya-sauce": {
    "title": "Nyama ya sauce",
    "description": "nyama en sauce (en lingala : nyama ya sauce) : bœuf ou nyama rouge mijotée dans une sauce ya tomatisi — bilei ya quotidien.",
    "region": "Kinshasa",
    "imageAlt": "Ragoût de bœuf à la tomatisi dans une casserole",
    "prepTime": "min. 20",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "1 kg ya bœuf à mijoter",
      "Aluboka 3, mikatami",
      "4 tomatisi, mibetami",
      "3 mikolo ya ail",
      "2 c. à soupe ya concentré ya tomatisi, ya lingi",
      "3 lukwakulu ya mafuta",
      "1 feuille ya laurier",
      "1 cube ya bouillon",
      "Piment, muni mpe mai"
    ],
    "steps": [
      "Faire dorer la nyama dans mafuta par petites quantités. Réserver.",
      "Faire fondre aluboka, ajouter ail, tomatisi mpe le concentré. Cuire 8 minutes.",
      "Remettre le bœuf, le laurier, le cube mpe mai à hauteur. Saler légèrement.",
      "Mijoter à couvert 1 h 15 à 1 h 30, jusqu'à ce que la nyama soit tendre mpe la sauce liée.",
      "Ajuster pili-pili mpe servir avec loso, fufu ou pommes ya terre."
    ],
    "tags": [
      "bœuf",
      "sauce",
      "tomatisi",
      "mokolo na mokolo"
    ],
    "body": "La **nyama en sauce** (en lingala : *nyama ya sauce*) est un mijoté de table, pas une grillade de rue. On la rallonge volontiers avec carottes ou poivrons selon le marché.",
    "seoTitle": "nyama en sauce"
  },
  "poisson-moambe": {
    "title": "Mbisi ya mwambe",
    "description": "Poissons fermes mijotés dans une sauce ya pulpe ya noix ya palme (moambe) — la moambe côté fleuve, distincte ya soso na moambe.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "mbisi à la moambe servi avec du loso",
    "prepTime": "min. 25",
    "cookTime": "min. 50",
    "ingredients": [
      "1,2 kg ya mbisi ferme (capitaine, tilapia ou equivalent), en darnes",
      "350 ml ya pulpe to crème ya noix ya palme (moambe)",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "muni, piment mpe un peu ya mai"
    ],
    "steps": [
      "Saler mbisi. Le faire dorer rapidement dans mafuta, puis réserver.",
      "Faire revenir aluboka, ail mpe tomatisi jusqu'à sauce courte.",
      "Verser la moambe mpe un demi-verre ya mai. Remuer mpe porter à petit frémissement.",
      "Remettre mbisi, couvrir mpe mijoter 25 à 35 minutes sans trop remuer pour ne pas le briser.",
      "Rectifier l'assaisonnement mpe servir avec loso blanc ou chikwangue."
    ],
    "tags": [
      "moambe",
      "mbisi",
      "noix de palme",
      "fête"
    ],
    "body": "La moambe de mbisi demande une chair qui tient à la cuisson. Comme pour le soso, la pulpe en conserve reste une base honnête hors saison de noix fraîches."
  },
  "liboke-viande": {
    "title": "Liboké ya ngulu",
    "description": "nyama marinée aux aromates, enveloppée dans ya ndunda ya banane mpe cuite na mvuke — le geste ya liboke appliqué à la nyama, pas au mbisi.",
    "region": "Bandundu & Kongo-Central",
    "imageAlt": "Liboke fermé dans ses feuilles, prêt à cuire",
    "prepTime": "min. 30 + ngonga 1 de marinade",
    "cookTime": "ngonga 1",
    "ingredients": [
      "800 g ya bœuf ou ya chèvre en morceaux",
      "Aluboka 2, na rondelles",
      "Tomatisi 2, na tranches",
      "Poivron 1, na lanières",
      "3 lukwakulu ya mafuta ya palmier",
      "2 mikolo ya ail, mikatami",
      "1 c. à café ya gingembre râpé",
      "muni, piment, cube ya bouillon",
      "4 grandes ndunda ya banane"
    ],
    "steps": [
      "Mélanger mafuta, ail, gingembre, muni, piment mpe cube. Enrober la nyama mpe mariner 1 heure.",
      "Assouplir matiti ya bananier au-dessus ya feu.",
      "Garnir chaque feuille d'aluboka, tomatisi, poivron mpe nyama. Arroser d'un peu ya mafuta ya palmier.",
      "Fermer en papillote hermétique.",
      "Teká na mvuke to na four à 180 °C na 50 à 60 minutes.",
      "Salela ouvert à table elongo na plantain ou fufu."
    ],
    "tags": [
      "viande",
      "ndunda ya banane",
      "vapeur",
      "liboke"
    ],
    "body": "Le liboke de nyama reprend le même geste que le liboke de mbisi, avec un temps de cuisson plus long pour attendrir la chair."
  },
  "sauce-gombo": {
    "title": "Sauce gombo",
    "description": "Gombos frais mijotés jusqu'à la texture filante caractéristique, na tomatisi, aluboka mpe ya lingilement ya mbisi ya fumé ou ya la nyama.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Sauce de gombo (okra) mijotée",
    "prepTime": "min. 20",
    "cookTime": "min. 40",
    "ingredients": [
      "500 g ya gombos frais",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "1 gousse d'ail",
      "150 g ya mbisi ya fumé, ya lingi",
      "muni, piment mpe un peu ya mai"
    ],
    "steps": [
      "Sukola les gombos, couper les extrémités mpe les trancher en rondelles.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi mpe cuire 5 minutes.",
      "Incorporer les gombos, un fond ya mai mpe mbisi fumé s'il est utilisé.",
      "Mijoter à feu moyen 25 à 30 minutes, en remuant ya temps en temps, jusqu'à la texture désirée.",
      "Saler, pimenter mpe servir avec loso ou fufu."
    ],
    "tags": [
      "gombo",
      "okra",
      "sauce",
      "végétal"
    ],
    "body": "La filandre du gombo se travaille en jouant sur le temps de cuisson et la quantité d'mai. Certaines familles ajoutent une pointe de soda de cuisine ; d'autres préfèrent une sauce plus courte."
  },
  "kossa-kossa": {
    "title": "Kossa-kossa",
    "description": "Crevettes séchées réhydratées puis ebilisami na tomatisi, aluboka mpe pili-pili, une sauce iodée ya quotidien congolais.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "Crevettes séchées utilisées en cuisine",
    "prepTime": "min. 20 + min. 30 de kobomba",
    "cookTime": "min. 35",
    "ingredients": [
      "200 g ya kossa-kossa (crevettes séchées)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "2 mikolo ya ail",
      "2 lukwakulu ya mafuta ya palmier",
      "Pili-pili 1 moke",
      "muni mpe mai"
    ],
    "steps": [
      "Rincer puis faire tremper les crevettes 30 minutes. Les égoutter.",
      "Faire revenir aluboka mpe ail dans mafuta. Ajouter tomatisi mpe pili-pili.",
      "Incorporer les crevettes mpe un peu ya mai. Mijoter 25 minutes.",
      "\"Goûter avant ya saler : les crevettes séchées sont déjà iodées.\"",
      "Servir avec loso, chikwangue ou plantain."
    ],
    "tags": [
      "crevettes",
      "séché",
      "sauce",
      "tomatisi"
    ],
    "body": "Le kossa-kossa apporte un goût de mer concentré. On le trouve au marché en sachet ; la qualité se lit à la couleur et à l'odeur, plus qu'à la taille."
  },
  "foie-boeuf-saute": {
    "title": "Libolo ya ngombe",
    "description": "foie ya bœuf sauté : tranches rapidement saisies na aluboka mpe piment — encas ya rue mpe plat express très courant à Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "Foie sauté aux aluboka dans une poêle",
    "prepTime": "min. 15",
    "cookTime": "min. 15",
    "ingredients": [
      "600 g ya foie ya bœuf, na tranches",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "2 lukwakulu ya mafuta",
      "1 c. à soupe ya jus ya citron",
      "Piment, muni mpe poivre"
    ],
    "steps": [
      "Essuyer le foie, retirer les nerfs visibles. Saler, poivrer mpe citronner légèrement.",
      "Chauffer mafuta à moto ya makasi. Saisir le foie 2 à 3 minutes ya chaque côté. Réserver.",
      "Faire revenir rapidement aluboka mpe ail dans la poêle.",
      "Remettre le foie, ajouter pili-pili, remuer 1 à 2 minutes sans trop cuire.",
      "Salela aussitôt elongo na pain, frites ou loso."
    ],
    "tags": [
      "foie",
      "bœuf",
      "poêle",
      "cuisine de rue",
      "Kinshasa"
    ],
    "body": "Le foie durcit s'il reste trop longtemps sur le feu. À Kinshasa, on le trouve souvent en portion de rue, servi très chaud avec beaucoup d'aluboka.\n\n**Astuce marché** : choisir un foie ferme, d'un rouge franc, sans odeur forte. Le citron en marinade courte aide à l'odeur et au goût.\n\n**À table** : pain chaud, frites, ou [loso mayonnaise](/ln/recettes/loso-mayonnaise/). Pour d'autres grillades de rue, voir [kamundele](/ln/recettes/kamundele/) et [brochettes de foie](/ln/recettes/brochettes-foie/).",
    "seoTitle": "foie ya bœuf sauté — street food Kinshasa"
  },
  "porc-braise": {
    "title": "Ngulu ya kotumba",
    "description": "porc braisé (en lingala : ngulu ya kotumba / ngulu braisé) : morceaux marinés puis braisés sur braises — grillade kin, distincte ya porc en sauce.",
    "region": "Kinshasa",
    "imageAlt": "Porc grillé sur les braises",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "min. 55",
    "ingredients": [
      "1,5 kg ya porc (échine ou épaule) en morceaux",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail",
      "2 cm ya gingembre",
      "2 c. à soupe ya jus ya citron",
      "2 lukwakulu ya mafuta",
      "Piment, muni mpe poivre"
    ],
    "steps": [
      "Préparer une marinade avec aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre mpe piment.",
      "Enrober le porc mpe laisser mariner 2 heures au frais.",
      "Précuire à la marmite 20 à 25 minutes avec un peu ya mai mpe la marinade.",
      "Égoutter, puis braiser sur ya braises moyennes 20 à 30 minutes en badigeonnant ya jus réservé.",
      "Servir avec aluboka cru, pili-pili mpe chikwangue ou plantain."
    ],
    "tags": [
      "porc",
      "ngulu",
      "braise",
      "grillade",
      "Kinshasa"
    ],
    "body": "Le **porc braisé** (en lingala : *ngulu* pour porc ; souvent *ngulu ya kotumba* à la grillade) se distingue des [kamundele](/ln/recettes/kamundele/) par la pièce et la durée. En sauce : [porc en sauce](/ln/recettes/ngulu-ya-sauce/). Snack grillé proche : [porc grillé](/ln/recettes/porc-ya-kotumba/).",
    "seoTitle": "porc braisé"
  },
  "bouillie-arachide": {
    "title": "Bouillie ya nguba",
    "description": "Bouillie épaisse à la farine mpe à la pâte d'nguba, sucrée mpe réconfortante — le goûter ou petit-déjeuner classique, distinct ya plats salés.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bol de bouillie crémeuse",
    "prepTime": "min. 10",
    "cookTime": "min. 25",
    "ingredients": [
      "120 g ya farine ya maïs (ou ya manioc)",
      "80 g ya pâte d'nguba lisse",
      "1 l ya mai",
      "60 à 80 g ya sucre",
      "1 pincée ya muni",
      "1 c. à café ya vanille ou zeste ya citron, ya lingi"
    ],
    "steps": [
      "Délayer la farine dans 250 ml ya mai froide jusqu'à obtenir un mélange sans grumeaux.",
      "Bila le reste ya mai tii ebukana avec le muni.",
      "Verser le mélange farine en pluie en remuant. Cuire 12 à 15 minutes à feu moyen, en remuant sans cesse.",
      "Incorporer la pâte d'nguba mpe le sucre. Continuer 5 à 8 minutes jusqu'à une texture crémeuse.",
      "Parfumer si souhaité. Servir tièya, nature ou avec un filet ya lait."
    ],
    "tags": [
      "arachide",
      "bouillie",
      "petit-déjeuner",
      "goûter"
    ],
    "body": "On prépare aussi la bouillie au seul maïs ou au manioc, sans nguba — voir la [bouillie de maïs](/ln/recettes/bouillie-mais/). L'épaisseur et le sucre varient selon les maisons ; la pâte d'nguba apporte richesse et parfum de goûter."
  },
  "beignets-banane": {
    "title": "Beignets ya libuma",
    "description": "Beignets à la pâte ya banane douce, dorés mpe moelleux — différents ya mikate (pâte levée) mpe ya makemba (plantain frit nature).",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Beignets de banane dorés",
    "prepTime": "min. 15",
    "cookTime": "min. 20",
    "ingredients": [
      "4 bananes douces bien mûres",
      "150 g ya farine",
      "40 g ya sucre",
      "1 œuf",
      "1 c. à café ya levure chimique",
      "1 pincée ya muni",
      "1 c. à café ya vanille ou muscade, ya lingi",
      "mafuta ya friture"
    ],
    "steps": [
      "Écraser les bananes en purée lisse.",
      "Ajouter l'œuf, le sucre, le muni mpe la vanille. Mélanger.",
      "Incorporer la farine mpe la levure chimique jusqu'à une pâte épaisse qui tombe ya la cuillère.",
      "Chauffer mafuta à feu moyen. Déposer ya cuillerées ya pâte.",
      "Frire 2 à 3 minutes ya chaque côté jusqu'à dorure. Égoutter mpe servir tièya."
    ],
    "tags": [
      "banane",
      "beignet",
      "goûter",
      "friture"
    ],
    "body": "La banane mûre remplace en partie le sucre et donne le goût. Ce n'est ni un plantain frit (makemba), ni une pâte levée à mai ([mikate](/ln/recettes/mikate/)), ni des [beignets de manioc](/ln/recettes/beignets-manioc/)."
  },
  "gateau-manioc": {
    "title": "Gâteau ya sango",
    "description": "Cake moelleux à la farine ou à la purée ya manioc, sucré mpe parfumé — un dessert ya goûter mpe ya fêtes familiales.",
    "region": "Na RDC mobimba",
    "imageAlt": "Gâteau au manioc coupé en parts",
    "prepTime": "min. 25",
    "cookTime": "min. 45",
    "ingredients": [
      "400 g ya manioc doux râpé (ou 280 g ya farine ya manioc)",
      "3 œufs",
      "150 g ya sucre",
      "100 ml ya mafuta ou ya beurre fondu",
      "150 ml ya lait (ou lait ya coco)",
      "1 sachet ya levure chimique (11 g)",
      "1 pincée ya muni",
      "1 c. à café ya vanille"
    ],
    "steps": [
      "Préchauffer le four à 180 °C. Beurrer un moule.",
      "\"Si manioc frais : râper finement, presser légèrement pour enlever l'excès ya mai.\"",
      "Battre œufs mpe sucre jusqu'à blanchiment. Ajouter mafuta, le lait mpe la vanille.",
      "Incorporer le manioc (ou la farine), la levure mpe le muni. Mélanger sans trop travailler.",
      "Verser dans le moule. Cuire 40 à 50 minutes jusqu'à ce qu'un couteau ressort propre.",
      "Laisser tiédir avant ya démouler. Servir en parts."
    ],
    "tags": [
      "manioc",
      "gâteau",
      "dessert",
      "goûter"
    ],
    "body": "Employer uniquement du manioc doux destiné à la consommation. La version à la farine ya manioc est plus régulière ; celle au frais reste plus humide."
  },
  "tangawisi": {
    "title": "Tangawisi",
    "description": "jus tangawisi (jus ya gingembre) : gingembre frais, piquant mpe acidulé, sucré à convenance — boisson maison ya Kinshasa mpe ya la diaspora.",
    "region": "Kinshasa",
    "imageAlt": "Verre de jus de gingembre frais",
    "prepTime": "min. 20 + ngonga 1 de kobomba",
    "cookTime": "min. 0",
    "ingredients": [
      "250 g ya gingembre frais",
      "1,5 l ya mai",
      "100 à 150 g ya sucre",
      "Jus d'1 citron (ou 2 citrons verts)",
      "1 pincée ya piment, ya lingi"
    ],
    "steps": [
      "Laver mpe éplucher le gingembre, le couper en morceaux.",
      "Le mixer avec 500 ml ya mai jusqu'à une purée grossière.",
      "Ajouter le reste ya mai. Laisser infuser 30 à 60 minutes à température ambiante.",
      "Filtrer à travers un linge fin ou une passoire fine en pressant bien.",
      "Sucrer, ajouter le citron (mpe pili-pili si souhaité). Réfrigérer. Servir bien frais."
    ],
    "tags": [
      "tangawisi",
      "jus de gingembre",
      "gingembre",
      "boisson",
      "Kinshasa"
    ],
    "body": "Le **jus tangawisi** (jus de gingembre) se boit glacé, souvent après un repas épicé. Dosage de gingembre et de sucre : très libre selon les maisons. Autres boissons : [jus d'ananas](/ln/recettes/jus-ananas/), [jus de mangue](/ln/recettes/jus-mangue/), [jus de tamarin](/ln/recettes/jus-tamarin/). Avec des [mikate](/ln/recettes/mikate/) au goûter.",
    "seoTitle": "jus tangawisi — jus ya gingembre"
  },
  "jus-bissap": {
    "title": "Jus de bissap",
    "description": "Infusion sucrée ya fleurs d'hibiscus (bissap), rouge profond mpe acidulée — une boisson, distincte ya ngai-ngai cuit en plat.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Verre de jus de bissap rouge",
    "prepTime": "min. 10 + refroidissement",
    "cookTime": "min. 20",
    "ingredients": [
      "80 g ya fleurs ya bissap (hibiscus) séchées",
      "2 l ya mai",
      "150 à 200 g ya sucre",
      "Jus d'1 citron, ya lingi",
      "Quelques feuilles ya menthe ou un bâton ya vanille, ya lingi"
    ],
    "steps": [
      "Rincer brièvement les fleurs. Les porter à ébullition dans mai.",
      "Baisser le feu mpe laisser infuser 15 à 20 minutes.",
      "Filtrer. Sucrer encore chaud pour bien dissoudre le sucre.",
      "Ajouter citron mpe aromates si souhaité. Laisser refroidir puis réfrigérer.",
      "Servir glacé."
    ],
    "tags": [
      "bissap",
      "hibiscus",
      "jus",
      "boisson"
    ],
    "body": "Le bissap boisson n'est pas le ngai-ngai en sauce : mêmes fleurs d'hibiscus, geste différent — infusion sucrée ici, mijotage salé là où le ngai-ngai est un plat.\n\nAutres jus : [mangue](/ln/recettes/jus-mangue/), [ananas](/ln/recettes/jus-ananas/), [passion](/ln/recettes/jus-passion/)."
  },
  "jus-passion": {
    "title": "Jus de fruit de la passion",
    "description": "Jus frais ya fruits ya la passion, acidulé mpe parfumé — boisson très courante à Kinshasa mpe dans la diaspora.",
    "region": "Kinshasa",
    "imageAlt": "Verre de jus de fruit de la passion",
    "prepTime": "min. 15",
    "cookTime": "min. 0",
    "ingredients": [
      "12 fruits ya la passion bien mûrs",
      "600 ml ya mai froide",
      "60 à 80 g ya sucre",
      "Jus d'½ citron, ya lingi"
    ],
    "steps": [
      "Couper les fruits en deux mpe récupérer la pulpe (graines comprises).",
      "Mixer brièvement avec mai, ou presser la pulpe dans mai à la fourchette.",
      "Filtrer pour un jus plus lisse, ou laisser les graines selon le goût.",
      "Sucrer, ajouter le citron si souhaité. Goûter mpe ajuster.",
      "Salela très frais, elongo na ya glaçons."
    ],
    "tags": [
      "passion",
      "jus",
      "fruit",
      "boisson"
    ],
    "body": "En saison, le fruit de la passion se trouve facilement au marché. Hors saison, la pulpe surgelée reste une base honnête pour un jus maison.\n\nAutres jus : [mangue](/ln/recettes/jus-mangue/), [ananas](/ln/recettes/jus-ananas/), [tangawisi](/ln/recettes/tangawisi/)."
  },
  "sombe": {
    "title": "Sombe",
    "description": "sombe : matabisi ya manioc (pondu) longuement mijotées à mafuta ya palme — nom mpe geste ya l'Est ya la RDC, cousin ya pondu ya l'Ouest.",
    "region": "Katanga monene",
    "imageAlt": "Plat de sombe, matabisi ya manioc (pondu) mijotées",
    "prepTime": "min. 40",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "2 kg ya matabisi ya manioc (pondu) ya sika to congelé, finement hachées",
      "200 ml ya mafuta ya palmier rouge",
      "2 aluboka, mikatami",
      "3 mikolo ya ail, mikatami",
      "250 g ya mbisi ya fumé ou ya nyama, ya lingi",
      "1 cube ya bouillon",
      "muni mpe pili-pili",
      "Mai"
    ],
    "steps": [
      "Laver matiti, les ébouillanter brièvement si elles sont très amères, puis les hacher finement.",
      "Faire revenir aluboka mpe ail dans mafuta ya palme jusqu'à ce qu'ils soient fondants.",
      "Ajouter matiti, bien les enrober ya mafuta, puis mouiller d'un peu ya mai.",
      "Couvrir mpe mijoter à moto ya moke 1 h à 1 h 15 en remuant souvent, jusqu'à texture crémeuse.",
      "Incorporer mbisi fumé ou la nyama, le cube, le muni mpe pili-pili. Cuire encore 15 minutes.",
      "Servir avec bukari, fufu ou loso."
    ],
    "tags": [
      "sombe",
      "matabisi ya manioc",
      "Katanga",
      "Kivu",
      "mafuta ya palmier"
    ],
    "body": "Le **sombe** désigne, surtout à l'Est (Katanga, Kivu), matiti de manioc mijotées — le même geste que le [pondu](/ln/recettes/pondu/) / saka-saka à Kinshasa et à l'Ouest, sous un autre nom. Les proportions d'mafuta, la longueur de cuisson et l'ajout de mbisi ya fumé varient d'un foyer à l'autre.\n\nÀ Lubumbashi, Batia yango mbala mingi na le [bukari](/ln/recettes/bukari-katanga/). Autre légume de la région : [matembele aux nguba](/ln/recettes/matembele-katanga/).",
    "seoTitle": "sombe — feuilles ya manioc (Katanga / Kivu)",
    "variants": [
      {
        "id": "vegetarien",
        "title": "Vegetarian version",
        "description": "Leaves alone, no fish or meat — common on lean days.",
        "imageAlt": "Plate of sombe, cooked cassava leaves",
        "ingredients": [
          "2 kg ya cassava leaves, fresh to frozen, finely chopped",
          "200 ml ya mafuta ya palmier rouge",
          "2 aluboka, mikatami",
          "3 mikolo ya ail, mibetami",
          "1 vegetable stock cube to muni",
          "Pili-pili",
          "Mai"
        ],
        "steps": [
          "Sukola the leaves, blanch briefly if needed, then chop finely.",
          "Sweat onions mpe garlic in palm mafuta.",
          "Bakisa the leaves, coat na mafuta, add a little mai.",
          "Funga mpe simmer 1 h 15 on low heat, stirring, tii creamy.",
          "Bongisa monoko mpe serve na bukari to fufu."
        ]
      },
      {
        "id": "viande",
        "title": "With meat",
        "description": "Sombe enriched with simmered meat — festive Katanga tables.",
        "ingredients": [
          "2 kg ya cassava leaves, fresh to frozen, finely chopped",
          "200 ml ya mafuta ya palmier rouge",
          "2 aluboka, mikatami",
          "3 mikolo ya ail, mibetami",
          "400 g ya beef in small pieces",
          "1 stock cube",
          "muni mpe pili-pili",
          "Mai"
        ],
        "steps": [
          "Bimasisa the meat, remove it. Sweat onions mpe garlic in the mafuta.",
          "Bakisa the leaves mpe a splash of mai; simmer 45 minutes.",
          "Zongisa the meat mpe cook another 45 minutes tii tender.",
          "Bongisa monoko mpe serve na bukari."
        ]
      }
    ]
  },
  "soso-ya-kotumba": {
    "title": "Soso ya kotumba",
    "description": "soso grillé (en lingala : soso ya kotumba) : soso mariné puis cuit sur braises — classique ya table mpe ya rue à Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "soso grillé doré, prêt à servir",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "min. 50",
    "ingredients": [
      "1 soso entier ou en morceaux (environ 1,5 kg)",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "Jus ya 1 citron",
      "3 lukwakulu ya mafuta",
      "1 c. à café d'herbes ya Provence ou ya thym",
      "Pili-pili, muni mpe poivre",
      "1 cube ya bouillon, ya lingi"
    ],
    "steps": [
      "Mélanger aluboka râpé, ail, gingembre, citron, mafuta, herbes, muni, poivre, pili-pili mpe cube émietté.",
      "Inciser le soso, l'enrober ya marinade mpe laisser reposer au frais au moins 2 heures.",
      "Précuire à la marmite 15 à 20 minutes avec un fond ya mai mpe le reste ya marinade, ou passer directement au grill.",
      "Griller sur braises moyennes (ou rôtir na four à 200 °C) 30 à 40 minutes en arrosant ya jus réservé, jusqu'à peau dorée mpe chair cuite.",
      "Servir avec sauce pili-pili, aluboka crus, frites ou plantain."
    ],
    "tags": [
      "soso ya kotumba",
      "poulet grillé",
      "braise",
      "Kinshasa",
      "street food"
    ],
    "body": "Le **soso grillé** (en lingala : *soso ya kotumba*) mise sur la marinade et la braise — pas sur une sauce mayo ni une moambe. Pour la mayo : [soso mayo](/ln/recettes/soso-mayo/). Condiment : [sauce pili-pili](/ln/recettes/sauce-pili-pili/).",
    "seoTitle": "soso grillé — kotumba"
  },
  "mikila": {
    "title": "Mikila",
    "description": "mikila : queue ya bœuf longuement mijotée dans une sauce ya tomatisi mpe aluboka jusqu'à devenir fondante — bilei ya fête mpe ya diaspora.",
    "region": "Kinshasa",
    "imageAlt": "Ragoût de bœuf mijoté dans une sauce riche",
    "prepTime": "min. 30",
    "cookTime": "ngonga 2 min. 30",
    "ingredients": [
      "1,5 kg ya queue ya bœuf, coupée en tronçons",
      "Aluboka 3, mikatami",
      "4 tomatisi mûres, mibetami (ou 400 g ya tomatisi concassées)",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "2 c. à soupe ya concentré ya tomatisi",
      "3 lukwakulu ya mafuta",
      "2 feuilles ya laurier",
      "1 cube ya bouillon",
      "muni, poivre mpe pili-pili",
      "Mai"
    ],
    "steps": [
      "Rincer les tronçons ya queue. Les dorer dans mafuta chaude, puis réserver.",
      "Dans la même marmite, faire fondre aluboka. Ajouter ail, gingembre, tomatisi mpe concentré.",
      "Remuer 8 à 10 minutes jusqu'à ce que la sauce commence à réduire.",
      "Remettre la nyama, ajouter laurier, cube, muni, poivre mpe assez ya mai pour couvrir.",
      "Couvrir mpe mijoter à moto ya moke 2 h à 2 h 30, en ajoutant un peu ya mai si besoin, jusqu'à nyama très tendre.",
      "Rectifier l'assaisonnement mpe pili-pili. Servir avec fufu, loso ou chikwangue."
    ],
    "tags": [
      "mikila",
      "queue de bœuf",
      "oxtail",
      "sauce tomate",
      "fête"
    ],
    "body": "La **mikila** (queue de bœuf) demande du temps : le collagène fond dans la sauce et donne un jus collant, typique des grandes tablées. On la retrouve beaucoup dans la diaspora, où la queue se trouve facilement surgelée.\n\nMoins longue en cuisson : [nyama ya sauce](/ln/recettes/nyama-ya-sauce/). Accompagnement : [fufu de manioc](/ln/recettes/fufu-manioc/).",
    "seoTitle": "mikila — queue ya bœuf congolaise"
  },
  "makoso": {
    "title": "Pieds de porc",
    "description": "pieds ya porc (en lingala : makoso) : longuement mijotés dans un bouillon relevé aux aromates mpe au pili-pili — classique ya fêtes mpe ya tables kin.",
    "region": "Kinshasa",
    "imageAlt": "Pieds de porc cuits, prêts à mijoter",
    "prepTime": "min. 35",
    "cookTime": "ngonga 2 min. 15",
    "ingredients": [
      "1,5 kg ya pieds ya porc, coupés mpe bien nettoyés",
      "Aluboka 2, mikatami",
      "4 mikolo ya ail",
      "3 cm ya gingembre",
      "2 tomatisi, mibetami, ya lingi",
      "2 lukwakulu ya mafuta",
      "1 bouquet garni (céleri, laurier, thym)",
      "1 à 2 piments selon le goût",
      "1 cube ya bouillon",
      "Muni mpe poivre",
      "Mai"
    ],
    "steps": [
      "Faire blanchir les pieds 10 minutes dans mai bouillante, égoutter mpe rincer pour retirer les impuretés.",
      "Les remettre dans une marmite propre, couvrir ya mai fraîche, ajouter muni, bouquet mpe cube. Porter à ébullition.",
      "Écumer, puis mijoter 1 h 30 à 2 h jusqu'à ce que la nyama se détache presque ya l'os.",
      "Dans une poêle, faire revenir aluboka, ail mpe gingembre dans mafuta. Ajouter tomatisi si utilisées.",
      "Verser ce mélange dans la marmite avec les pieds, ajouter pili-pili mpe poursuivre 20 à 30 minutes à feu moyen.",
      "Rectifier l'assaisonnement. Servir très chaud avec pain, plantain ou fufu."
    ],
    "tags": [
      "makoso",
      "pieds de porc",
      "pepper soup",
      "Kinshasa",
      "fête"
    ],
    "body": "Les **pieds de porc** (en lingala : *makoso*) sont un plat de patience et de fête : longtemps mijotés, souvent bien pimentés, servis dans un bouillon parfumé. Certaines tables les rapprochent d'un « pepper soup » ; d'autres les veulent plus liés, avec tomatisi.\n\nAvec pommes de terre : [makosso aux pommes](/ln/recettes/makosso-pommes/). Autre soupe pimentée : [soupe pepe au mbisi-chat](/ln/recettes/pepe-soupe-ya-ngolo/). Grillade : [porc braisé](/ln/recettes/porc-braise/).",
    "seoTitle": "pieds ya porc (makoso)"
  },
  "fufu-manioc": {
    "title": "Fufu ya manioc",
    "description": "Fufu ya manioc : farine ya manioc obalabala na mai ya moto tii pâte ya pete mpe elastic — accompagnement ya libota na RDC, ekeseni na bukari ya maïs.",
    "region": "Na RDC mobimba",
    "imageAlt": "Boule de fufu (foufou) esalemi lokola accompagnement",
    "prepTime": "min. 5",
    "cookTime": "min. 20",
    "ingredients": [
      "500 g ya farine ya manioc (fufu / cossette moulue)",
      "1,2 l ya mai",
      "Pince ya muni (ya lingi)"
    ],
    "steps": [
      "Bila pene litre ya mai tii ebukana na marmite ya moto ya makasi.",
      "Bakisa mwa farine na mai ya malili oyo etikali, sima tema na marmite en balabala.",
      "Tika ekóma epaisse na miniti moke lokola bouillie ya pete.",
      "Bakisa farine oyo etikali moke na moke, obalabala na spatule ya makasi.",
      "Zongisa mpe bimisa pâte na paroi ya marmite tii eza pete, elastic mpe ekweyi.",
      "Pesa nzela na baboule na louche ya mai. Salela mbala moko elongo na sauce."
    ],
    "tags": [
      "fufu",
      "fufu ya manioc",
      "farine ya manioc",
      "accompagnement",
      "mokolo na mokolo"
    ],
    "body": "**Fufu ya manioc** (foufou) ozaa na maboko mpo na kozaa sauce. Ekeseni na [bukari](/ln/recettes/bukari-katanga/) (farine ya maïs, Est) mpe na [chikwangue](/ln/recettes/chikwangue/) (bâton ya fermenté). Vue ya mozindo : [guide ya fufu](/ln/guides/fufu/).\n\nClassique na pembeni : [pondu](/ln/recettes/pondu/), [sombe](/ln/recettes/sombe/), [moambe](/ln/recettes/moambe-poulet/).",
    "seoTitle": "Fufu ya manioc — accompagnement"
  },
  "plantains-vapeur": {
    "title": "Makemba ya vapeur",
    "description": "plantains na mvuke : plantains verts ou juste mûrs cuits na mvuke jusqu'à tendreté — accompagnement simple, distinct ya makemba frites mpe ya lituma pilé.",
    "region": "Na RDC mobimba",
    "imageAlt": "Plantains cuits à mai ou na mvuke",
    "prepTime": "min. 10",
    "cookTime": "min. 25",
    "ingredients": [
      "4 bananes plantain vertes ou juste jaunes",
      "Mai",
      "Pince ya muni (ya lingi)"
    ],
    "steps": [
      "Couper les extrémités, inciser la peau dans la longueur mpe éplucher les plantains.",
      "Les couper en tronçons ya 4 à 5 cm.",
      "Disposer dans un panier vapeur au-dessus d'une mai frémissante (ou plonger dans mai légèrement salée).",
      "Cuire 20 à 25 minutes jusqu'à ce qu'une lame entre facilement.",
      "Égoutter si besoin mpe servir chaud avec mbisi, nyama en sauce ou légumes."
    ],
    "tags": [
      "plantains vapeur",
      "plantain",
      "vapeur",
      "accompagnement",
      "rapide"
    ],
    "body": "Les **plantains na mvuke** (ou bouillis) restent neutres et farineux : ils portent la sauce sans le sucre caramélisé des [makemba](/ln/recettes/makemba/) frites. Quand on les pile, on obtient le [lituma](/ln/recettes/lituma/).\n\nSouvent à table avec un [mbisi braisé](/ln/recettes/mbisi-braise-kinkole/) ou une sauce ya tomatisi.",
    "seoTitle": "plantains na vapeur"
  },
  "loso-na-madesu": {
    "title": "Loso na madesu",
    "description": "loso aux haricots (en lingala : loso na madesu) : loso cuit na ya haricots — assiette simple mpe nourrissante.",
    "region": "Kinshasa",
    "imageAlt": "loso blanc et haricots rouges en sauce",
    "prepTime": "min. 20 + ngonga 8 de kobomba",
    "cookTime": "ngonga 1 min. 15",
    "ingredients": [
      "400 g ya haricots rouges ou bruns secs",
      "400 g ya loso",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "3 c. à soupe ya mafuta ya palmier rouge (ou mafuta neutre)",
      "2 mikolo ya ail, mikatami",
      "1 feuille ya laurier",
      "Muni",
      "Mai"
    ],
    "steps": [
      "Faire tremper les haricots une nuit, les égoutter puis les cuire 50 à 60 minutes dans ya mai avec le laurier, jusqu'à tendreté. Saler en fin ya cuisson.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi mpe laisser réduire 8 minutes.",
      "Ajouter les haricots égouttés (garder un peu ya mai ya cuisson) mpe le loso rincé.",
      "Verser ya mai à hauteur (environ 1,5 fois le volume ya loso), mélanger, porter à ébullition.",
      "Baisser le feu, couvrir mpe cuire 18 à 20 minutes sans remuer, jusqu'à absorption.",
      "Laisser reposer 5 minutes à couvert, puis égrener à la fourchette. Rectifier le muni."
    ],
    "tags": [
      "loso na madesu",
      "riz haricots",
      "madesu",
      "Kinshasa",
      "mokolo na mokolo"
    ],
    "body": "Le **loso aux haricots** (en lingala : *loso na madesu*) est l'assiette simple du quotidien : moins de sauce longue que les [madesu](/ln/recettes/madesu/) seuls, plus « un seul plat » que le loso nature. Variante feuilles + haricots : [saka-madesu](/ln/recettes/saka-madesu/).",
    "seoTitle": "loso na haricots"
  },
  "sauce-pili-pili": {
    "title": "Sauce pili-pili",
    "description": "Sauce pili-pili : origine ya condiment pimenté d'Afrique centrale mpe recette — piments frais mixés na ail, aluboka mpe un filet d'mafuta, pour grillades mpe mbisi.",
    "region": "Na RDC mobimba",
    "imageAlt": "Sauce pimentée rouge type piri-piri / pili-pili",
    "prepTime": "min. 15",
    "cookTime": "min. 10",
    "ingredients": [
      "15 à 25 piments frais (selon la force désirée), équeutés",
      "4 mikolo ya ail",
      "1 petit aluboka",
      "1 tomatisi mûre, ya lingi",
      "Jus ya ½ citron",
      "3 lukwakulu ya mafuta",
      "1 c. à café ya muni",
      "2 c. à soupe ya mai"
    ],
    "steps": [
      "Laver les piments. Retirer une partie ya graines pour adoucir, si besoin.",
      "Mixer piments, ail, aluboka, tomatisi (si utilisée), citron, muni mpe mai jusqu'à une pâte coarse.",
      "Faire chauffer mafuta à feu moyen dans une petite casserole.",
      "Verser la pâte, remuer 8 à 10 minutes jusqu'à ce que l'odeur crue parte mpe que la sauce épaississe légèrement.",
      "Goûter, rectifier le muni. Laisser refroidir puis mettre en bocal au frais.",
      "Servir en petite quantité à côté ya grillades mpe ya poissons."
    ],
    "tags": [
      "pili-pili",
      "sauce piment",
      "condiment",
      "grillade",
      "piment"
    ],
    "body": "## Origine\n\n**Pili-pili** (aussi écrit piri-piri) désigne pili-pili fort et, par extension, la sauce qui l'accompagne en Afrique centrale et australe. En RDC, ce n'est pas une marque : c'est le condiment de table — piments locaux, ail, parfois tomatisi — dosé foyer par foyer. Le mot circule en lingala et swahili autant qu'en français de Kinshasa.\n\n## À table\n\nLa sauce pili-pili n'est pas un plat : c'est le coup de feu. La tomatisi adoucit, le citron allège. À poser à côté du [soso ya kotumba](/ln/recettes/soso-ya-kotumba/), du [ntaba](/ln/recettes/ntaba/), du [mbisi braisé](/ln/recettes/mbisi-braise-kinkole/) ou des [kamundele](/ln/recettes/kamundele/).",
    "seoTitle": "Sauce pili-pili — origine mpe recette congolaise"
  },
  "sambaza": {
    "title": "Sambaza na tomatisi",
    "description": "sambaza : petits poissons ya lac Tanganyika kotumbami sima mijotés dans une sauce ya tomatisi-aluboka — classique ya l'Est ya la RDC, cousin ya kapenta.",
    "region": "Haut-Katanga mpe Tanganyika",
    "imageAlt": "Petits poissons de lac type sambaza / kapenta",
    "prepTime": "min. 20",
    "cookTime": "min. 25",
    "ingredients": [
      "400 g ya sambaza frais ou séchés",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "4 lukwakulu ya mafuta",
      "Pili-pili 1 moke",
      "Muni mpe poivre",
      "80 ml ya mai"
    ],
    "steps": [
      "Si les sambaza sont séchés, les rincer rapidement deux ou trois fois puis bien les égoutter.",
      "Chauffer la moitié ya mafuta mpe faire revenir mbisi 5 à 7 minutes jusqu'à ce qu'ils soient croustillants. Réserver.",
      "Ajouter le reste ya mafuta, faire fondre aluboka, puis incorporer ail, tomatisi mpe pili-pili.",
      "Cuire la sauce 8 à 10 minutes, ajouter mai mpe remettre délicatement les sambaza.",
      "Mijoter na sanza 5 minutes, rectifier le muni mpe le poivre. Servir avec bukari ou loso."
    ],
    "tags": [
      "sambaza",
      "Tanganyika",
      "petits poissons",
      "tomatisi",
      "Est"
    ],
    "body": "Le **sambaza** désigne les petits poissons du lac Tanganyika, très proches du [kapenta](/ln/recettes/kapenta-tomatisi/) selon les marchés et les langues. Frais ou séchés, le rinçage et le muni changent ; la sauce ya tomatisi-aluboka reste le geste du quotidien à l'Est.\n\nAccompagnement typique : [bukari](/ln/recettes/bukari-katanga/). Légume de la région : [matembele](/ln/recettes/matembele-katanga/).",
    "seoTitle": "sambaza — petits poissons ya Tanganyika"
  },
  "ndunda": {
    "title": "Ndunda",
    "description": "ndunda : feuilles vertes (épinard, matiti ya biteku-teku ou mélange ya marché) mijotées à la tomatisi mpe à aluboka — légume ya quotidien à Kinshasa, ekeseni na biteku-teku kasaien.",
    "region": "Kinshasa",
    "imageAlt": "Plat de légumes verts type ndunda / callaloo",
    "prepTime": "min. 20",
    "cookTime": "min. 25",
    "ingredients": [
      "800 g ya feuilles vertes (épinard, amarante ou mélange)",
      "Tomatisi 2 ya polele, mibetami",
      "Aluboka 1 monene, mikatami",
      "2 mikolo ya ail, mikatami",
      "3 c. à soupe ya mafuta (palme ou neutre)",
      "Pili-pili 1 moke (ya lingi)",
      "Muni",
      "150 ml ya mai"
    ],
    "steps": [
      "Trier mpe laver matiti makenda mingi. Émincer grossièrement, garder bikondo ya molle.",
      "Faire revenir aluboka dans mafuta, ajouter ail, tomatisi mpe pili-pili. Laisser réduire 8 minutes.",
      "Incorporer matiti mpe mai, saler, couvrir.",
      "Cuire 12 à 15 minutes en remuant, jusqu'à ce que matiti soient tendres mpe la sauce courte.",
      "Rectifier le muni. Servir avec fufu, loso ou chikwangue."
    ],
    "tags": [
      "ndunda",
      "légumes verts",
      "épinard",
      "Kinshasa",
      "mokolo na mokolo"
    ],
    "body": "**Ndunda** (ou ndúnda) désigne à Kinshasa les légumes verts du quotidien — parfois de biteku-teku, parfois de l'épinard ou un mélange du marché. Au Kasaï, la fiche proche est le [biteku-teku](/ln/recettes/biteku-teku-kasai/) (lenga-lenga) ; ici le geste reste une sauce ya tomatisi courte, sans nguba obligatoire.\n\nAutre feuille acidulée : [ngai-ngai](/ln/recettes/ngai-ngai/). Accompagnement : [fufu de manioc](/ln/recettes/fufu-manioc/).",
    "seoTitle": "ndunda — légumes verts congolais"
  },
  "poisson-fume-tomates": {
    "title": "Mbisi ya fumé",
    "description": "mbisi ya fumé aux tomatisi : mbisi ya fumé réhydraté puis mijoté dans une sauce ya tomatisi-aluboka — bilei ya quotidien autour ya fleuve Congo, ekeseni na makayabu salé.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "mbisi ya fumé prêt à cuisiner",
    "prepTime": "min. 25 + min. 30 de kobomba",
    "cookTime": "min. 40",
    "ingredients": [
      "500 g ya mbisi ya fumé (entier ou en morceaux)",
      "Tomatisi 4 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "3 mikolo ya ail, mikatami",
      "3 lukwakulu ya mafuta",
      "Pili-pili 1 moke (ya lingi)",
      "1 cube ya bouillon, ya lingi",
      "\"muni mpe poivre (peu ya muni : le fumé est déjà salé)\"",
      "200 ml ya mai"
    ],
    "steps": [
      "Faire tremper mbisi fumé 20 à 30 minutes dans ya mai tièya. Égoutter, retirer les arêtes grossières mpe émietter ou couper en portions.",
      "Faire revenir aluboka dans mafuta, ajouter ail, tomatisi mpe pili-pili. Laisser réduire 10 minutes.",
      "Déposer mbisi dans la sauce, verser mai mpe le cube émietté si utilisé.",
      "Couvrir mpe mijoter 20 à 25 minutes à moto ya moke, sans trop remuer.",
      "Goûter avant ya saler. Poivrer mpe servir avec chikwangue, fufu ou loso."
    ],
    "tags": [
      "poisson fumé",
      "tomatisi",
      "fleuve Congo",
      "mokolo na mokolo",
      "sauce"
    ],
    "body": "Le **mbisi ya fumé aux tomatisi** est le plat express du marché : pas de dessalage long comme le [makayabu](/ln/recettes/makayabu/), mais un trempage court pour attendrir. La fumée porte déjà le goût ; la sauce ya tomatisi-aluboka fait le reste.\n\nAutre mbisi de table : [mbisi ya kokalinga](/ln/recettes/mbisi-ya-kokalinga/). Accompagnement : [chikwangue](/ln/recettes/chikwangue/).",
    "seoTitle": "mbisi ya fumé na tomatisi"
  },
  "aubergines-africaines": {
    "title": "Aubergines africaines en sauce",
    "description": "aubergines africaines (garden eggs) ebilisami na tomatisi, aluboka mpe un peu d'mafuta — légume ya marché congolais, souvent servi na fufu ou loso.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Aubergines africaines (garden eggs) fraîches",
    "prepTime": "min. 20",
    "cookTime": "min. 35",
    "ingredients": [
      "600 g d'aubergines africaines (garden eggs), lavées",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "3 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "Pili-pili 1 moke (ya lingi)",
      "Muni",
      "150 ml ya mai"
    ],
    "steps": [
      "Couper les aubergines en deux ou en quartiers. Les faire blanchir 5 minutes dans mai bouillante salée, puis égoutter.",
      "Bimasisa aluboka na mafuta, ajouter ail, tomatisi mpe pili-pili. Réduire 8 à 10 minutes.",
      "Incorporer les aubergines mpe mai. Saler légèrement.",
      "Couvrir mpe mijoter 20 minutes à moto ya moke jusqu'à ce que les aubergines soient tendres mpe la sauce liée.",
      "Rectifier le muni. Servir avec fufu, loso ou plantain."
    ],
    "tags": [
      "aubergines africaines",
      "garden eggs",
      "mboga",
      "tomatisi",
      "marché"
    ],
    "body": "Les **aubergines africaines** (souvent appelées garden eggs) sont plus petites et amères que l'aubergine longue. Un blanchiment rapide adoucit le goût avant la sauce ya tomatisi. On les trouve facilement sur les marchés de Kinshasa.\n\nAutre légume en sauce : [sauce gombo](/ln/recettes/sauce-gombo/). Feuilles du quotidien : [ndunda](/ln/recettes/ndunda/).",
    "seoTitle": "aubergines africaines (garden eggs)"
  },
  "igname-bouillie": {
    "title": "Igname bouillie",
    "description": "igname bouillie : tubercules cuits à mai jusqu'à tendreté, servis natures ou na sauce courte — accompagnement simple encore peu documenté dans le catalogue.",
    "region": "Na RDC mobimba",
    "imageAlt": "Morceaux d'igname bouillie",
    "prepTime": "min. 15",
    "cookTime": "min. 35",
    "ingredients": [
      "1 kg d'igname",
      "Mai",
      "1 c. à café ya muni",
      "Jus ya ½ citron, ya lingi (mai ya cuisson)"
    ],
    "steps": [
      "\"Éplucher l'igname soigneusement (la peau peut irriter : travailler avec ya gants si besoin). Couper en gros morceaux.\"",
      "Plonger dans une casserole ya mai froide salée, éventuellement avec le citron.",
      "Porter à ébullition mpe cuire 25 à 35 minutes jusqu'à ce qu'une lame entre facilement.",
      "Égoutter. Servir chaud nature, avec une sauce ya tomatisi, ya mbisi ou un filet ya mafuta mpe pili-pili."
    ],
    "tags": [
      "igname",
      "tubercule",
      "bouilli",
      "accompagnement",
      "simple"
    ],
    "body": "L'**igname bouillie** est un féculent neutre qui porte bien les sauces du fleuve et du marché. Moins visible dans les catalogues diaspora que le plantain ou le manioc, elle reste courante dès qu'elle est de saison.\n\nSans friture : [plantains na mvuke](/ln/recettes/plantains-vapeur/). À table avec [mbisi ya fumé aux tomatisi](/ln/recettes/mbisi-fume-tomatisi/) ou [sauce pili-pili](/ln/recettes/sauce-pili-pili/).",
    "seoTitle": "igname bouillie"
  },
  "taro-mijote": {
    "title": "Taro mijoté",
    "description": "taro (malanga) mijoté : tubercules attendris puis cuits dans une sauce ya tomatisi-aluboka — bilei ya la Cuvette mpe ya forêts, ndeko ya féculents ya catalogue.",
    "region": "Cuvette ya centrale",
    "imageAlt": "Tubercules de taro",
    "prepTime": "min. 25",
    "cookTime": "min. 45",
    "ingredients": [
      "1 kg ya taro (malanga), épluché",
      "Tomatisi 3 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "3 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "Pili-pili 1 moke (ya lingi)",
      "Muni",
      "300 ml ya mai"
    ],
    "steps": [
      "Couper le taro en morceaux ya kati. Le faire blanchir 10 minutes dans mai bouillante, puis égoutter (certains taros piquent la gorge s'ils sont crus).",
      "Faire revenir aluboka dans mafuta, ajouter ail, tomatisi mpe pili-pili. Réduire 8 minutes.",
      "Ajouter le taro mpe mai, saler. Couvrir mpe mijoter 25 à 30 minutes à moto ya moke jusqu'à tendreté.",
      "Remuer délicatement en fin ya cuisson pour lier la sauce sans écraser tous les morceaux.",
      "Salela chaud elongo na mbisi, nyama ou seul comme plat ya légumes."
    ],
    "tags": [
      "taro",
      "malanga",
      "tubercule",
      "Cuvette",
      "sauce tomate"
    ],
    "body": "Le **taro** (souvent appelé malanga selon les marchés) se cuisine après un blanchiment pour adoucir le tubercule. En Cuvette et en forêt, il complète les liboke et les sauces de mbisi.\n\nAutre tubercule : [igname bouillie](/ln/recettes/igname-bouillie/). Papillote du fleuve : [liboke de mbisi](/ln/recettes/liboke-mbisi/).",
    "seoTitle": "taro / malanga mijoté"
  },
  "jus-mangue": {
    "title": "Mai ya manga",
    "description": "jus ya mangue : mangues mûres mixées na ya mai mpe un peu ya sucre — boisson ya saison à Kinshasa, cousine ya jus ya passion mpe ya bissap.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Verre de jus de mangue",
    "prepTime": "min. 15",
    "cookTime": "min. 0",
    "ingredients": [
      "4 mangues bien mûres",
      "600 ml ya mai froide",
      "40 à 60 g ya sucre, selon la douceur ya fruits",
      "Jus d'½ citron, ya lingi"
    ],
    "steps": [
      "Sukola les mangues, les peler mpe retirer le noyau. Couper la chair en morceaux.",
      "Mixer avec mai jusqu'à obtenir un jus homogène.",
      "\"Goûter : sucrer si besoin, ajouter le citron pour relever.\"",
      "Filtrer pour un jus plus lisse, ou laisser la pulpe selon le goût.",
      "Salela très frais, elongo na ya glaçons."
    ],
    "tags": [
      "mangue",
      "jus",
      "fruit",
      "boisson",
      "saison"
    ],
    "body": "Le **jus de mangue** suit la saison des manguiers : en pleine maturité, peu de sucre suffit. Hors saison, la pulpe surgelée reste une base honnête.\n\nAutres jus maison : [ananas](/ln/recettes/jus-ananas/), [passion](/ln/recettes/jus-passion/), [bissap](/ln/recettes/jus-bissap/).",
    "seoTitle": "jus ya mangue"
  },
  "jus-ananas": {
    "title": "Mai ya ananas",
    "description": "jus d'ananas : ananas frais mixé na ya mai — boisson acidulée mpe parfumée, classique ya marchés mpe ya maisons ya Kinshasa.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Verre de jus d'ananas frais",
    "prepTime": "min. 20",
    "cookTime": "min. 0",
    "ingredients": [
      "1 ananas mûr (environ 1 kg)",
      "500 ml ya mai froide",
      "30 à 50 g ya sucre, ya lingi",
      "Jus d'½ citron, ya lingi"
    ],
    "steps": [
      "Éplucher l'ananas, retirer le cœur fibreux si besoin, couper la chair en cubes.",
      "Mixer avec mai jusqu'à consistance fluide.",
      "Filtrer à travers une passoire fine pour un jus plus clair, ou garder la pulpe.",
      "Sucrer mpe citronner selon le goût.",
      "Servir glacé."
    ],
    "tags": [
      "ananas",
      "jus",
      "fruit",
      "boisson"
    ],
    "body": "L'**ananas** du marché donne un jus plus parfumé que les briques industrielles. Un fruit très mûr se passe souvent de sucre.\n\nÀ côté : [jus de mangue](/ln/recettes/jus-mangue/), [passion](/ln/recettes/jus-passion/) ou [tangawisi](/ln/recettes/tangawisi/).",
    "seoTitle": "jus d'ananas"
  },
  "jus-safou": {
    "title": "Jus de safou",
    "description": "jus ya safou : pulpe ya nsafu mixée na ya mai mpe un peu ya sucre — boisson ya saison à l'Ouest ya la RDC, distincte ya nsafu grillés.",
    "region": "RDC ya bwé",
    "imageAlt": "Verre de jus de fruits à la pulpe",
    "prepTime": "min. 20",
    "cookTime": "min. 5",
    "ingredients": [
      "10 nsafu (safou) bien mûrs",
      "700 ml ya mai",
      "50 à 80 g ya sucre",
      "1 pincée ya muni, ya lingi"
    ],
    "steps": [
      "Rincer les nsafu. Les plonger 3 à 5 minutes dans ya mai juste bouillante pour assouplir la chair (ou les griller brièvement).",
      "Ouvrir, retirer le noyau mpe récupérer toute la pulpe.",
      "Mixer la pulpe avec mai jusqu'à obtenir une boisson crémeuse.",
      "Sucrer, ajouter une pincée ya muni si souhaité. Goûter mpe ajuster.",
      "Servir tièya ou frais ; remuer avant ya boire (la pulpe se dépose)."
    ],
    "tags": [
      "safou",
      "nsafu",
      "jus",
      "saison",
      "boisson"
    ],
    "body": "Le **jus de safou** prolonge la saison du fruit : même chair beurrée que les [nsafu grillés](/ln/recettes/nsafu-grilles/), mais en boisson. La texture reste un peu épaisse — c'est voulu.\n\nAutres jus de saison : [mangue](/ln/recettes/jus-mangue/), [bissap](/ln/recettes/jus-bissap/).",
    "seoTitle": "jus ya safou (nsafu)"
  },
  "pain-mayonnaise": {
    "title": "Pain mayonnaise",
    "description": "pain mayonnaise : baguette ou pain ya rue garni ya mayonnaise, œuf mpe ya lingilement saucisse ou nyama — encas street food ya Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "Pain de rue garni d'œuf, saucisse et mayonnaise",
    "prepTime": "min. 15",
    "cookTime": "min. 10",
    "ingredients": [
      "2 demies baguettes ou pains ya rue",
      "4 c. à soupe ya mayonnaise",
      "2 œufs",
      "2 saucisses ou 100 g ya nyama grillée, ya lingi",
      "1 petit aluboka, mikatami, ya lingi",
      "Piment en poudre ou sauce pili-pili",
      "Muni"
    ],
    "steps": [
      "Faire cuire les œufs au plat ou en omelette fine. Saler légèrement.",
      "Si vous utilisez ya saucisses, les faire dorer à la poêle ; sinon réchauffer la nyama grillée.",
      "Ouvrir les pains sans les séparer complètement. Étaler généreusement la mayonnaise.",
      "Garnir d'œuf, ya saucisse ou ya nyama, d'aluboka si souhaité.",
      "Saupoudrer ya piment. Servir aussitôt, encore tièya."
    ],
    "tags": [
      "pain mayonnaise",
      "sandwich",
      "street food",
      "Kinshasa",
      "mayonnaise"
    ],
    "body": "Le **pain mayonnaise** est l'encas de rue kinshasaise : pas un plat de table, mais un sandwich vite fait entre deux courses. La mayo lie tout ; pili-pili fait le reste.\n\nProche en esprit : [soso mayo](/ln/recettes/soso-mayo/), [kamundele](/ln/recettes/kamundele/). Goûter de rue : [mikate](/ln/recettes/mikate/).",
    "seoTitle": "pain mayonnaise — sandwich ya rue Kinshasa"
  },
  "beignets-manioc": {
    "title": "Beignets ya sango",
    "description": "beignets ya manioc : manioc doux râpé lié à une pâte puis frit — goûter distinct ya mikate (pâte levée) mpe ya beignets ya banane.",
    "region": "Na RDC mobimba",
    "imageAlt": "Beignets de manioc frits dorés",
    "prepTime": "min. 25",
    "cookTime": "min. 20",
    "ingredients": [
      "600 g ya manioc doux, pelé mpe râpé finement",
      "80 g ya farine",
      "40 g ya sucre",
      "1 œuf",
      "1 c. à café ya levure chimique",
      "1 pincée ya muni",
      "mafuta ya friture"
    ],
    "steps": [
      "Presser le manioc râpé dans un torchon pour enlever l'excès ya mai.",
      "Mélanger manioc, farine, sucre, muni, levure mpe œuf jusqu'à une pâte qui se tient.",
      "Chauffer mafuta à feu moyen. Former ya petites galettes ou cuillerées.",
      "Frire 3 à 4 minutes ya chaque côté jusqu'à dorure croustillante.",
      "Égoutter sur papier. Servir tièya, nature ou avec une pâte d'nguba."
    ],
    "tags": [
      "manioc",
      "beignet",
      "goûter",
      "friture"
    ],
    "body": "Les **beignets de manioc** gardent le goût du tubercule : plus fermes que les [mikate](/ln/recettes/mikate/), moins sucrés que les [beignets de banane](/ln/recettes/beignets-banane/). Employer uniquement du manioc doux destiné à la consommation.\n\nAutre façon : les [croquettes de manioc](/ln/recettes/croquettes-manioc/).",
    "seoTitle": "beignets ya manioc"
  },
  "bouillie-mais": {
    "title": "Bouillie de maïs",
    "description": "bouillie ya maïs : farine ya maïs cuite à mai jusqu'à texture crémeuse, sucrée — petit-déjeuner mpe goûter, distincte ya la bouillie d'nguba.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bol de bouillie de maïs (uji) crémeuse",
    "prepTime": "min. 5",
    "cookTime": "min. 20",
    "ingredients": [
      "150 g ya farine ya maïs fine",
      "1 l ya mai",
      "60 à 80 g ya sucre",
      "1 pincée ya muni",
      "1 c. à café ya vanille ou zeste ya citron, ya lingi",
      "Lait, pour servir, ya lingi"
    ],
    "steps": [
      "Délayer la farine dans 250 ml ya mai froide jusqu'à un mélange sans grumeaux.",
      "Bila le reste ya mai tii ebukana avec le muni.",
      "Verser le mélange farine en pluie en remuant vivement.",
      "Cuire 12 à 15 minutes à feu moyen, en remuant sans cesse, jusqu'à texture crémeuse.",
      "Incorporer le sucre mpe le parfum. Servir tièya, nature ou avec un filet ya lait."
    ],
    "tags": [
      "maïs",
      "bouillie",
      "petit-déjeuner",
      "goûter"
    ],
    "body": "La **bouillie de maïs** est le goûter simple sans nguba — plus légère que la [bouillie d'nguba](/ln/recettes/bouillie-nguba/). L'épaisseur se règle avec mai ; certaines maisons la veulent presque solide.\n\nÀ croquer à côté : [mikate](/ln/recettes/mikate/). À boire : [tangawisi](/ln/recettes/tangawisi/).",
    "seoTitle": "bouillie ya maïs"
  },
  "capitaine-braise": {
    "title": "Capitaine braisé",
    "description": "mbisi capitaine braisé : perche ya Nil entière marinée aux aromates mpe grillée jusqu'à la peau fumée — grillade ya fleuve, distincte ya mbisi ya Kinkole.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "Gros mbisi braisé servi avec accompagnements",
    "prepTime": "min. 30 + ngonga 1 de marinade",
    "cookTime": "min. 35",
    "ingredients": [
      "1 capitaine (perche ya Nil) ya 1,2 à 1,5 kg, vidé mpe écaillé",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "Jus ya 2 citrons",
      "3 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre",
      "1 cube ya bouillon, ya lingi"
    ],
    "steps": [
      "Inciser mbisi ya chaque côté. Mélanger aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre, pili-pili mpe cube émietté.",
      "Enrober le capitaine, farcir un peu la cavité mpe mariner au frais au moins 1 heure.",
      "Précuire à la marmite 10 minutes avec un fond ya mai mpe le reste ya marinade, ou passer directement au grill.",
      "Braiser sur braises moyennes 20 à 25 minutes en retournant mpe en badigeonnant ya jus.",
      "Servir avec plantain, chikwangue, aluboka cru mpe sauce pili-pili."
    ],
    "tags": [
      "capitaine",
      "perche du Nil",
      "braise",
      "Kinshasa",
      "fleuve"
    ],
    "body": "Le **mbisi capitaine braisé** (perche du Nil) est la grillade de fleuve quand le marché propose une belle pièce : plus large que beaucoup de poissons de braise. La fiche [mbisi braisé à Kinkole](/ln/recettes/mbisi-braise-kinkole/) reste le geste de rue générique ; ici l'espèce et la taille guident le temps de cuisson.",
    "seoTitle": "mbisi capitaine braisé — perche ya Nil"
  },
  "poisson-mayo": {
    "title": "Mbisi ya mayonnaise",
    "description": "mbisi mayo : mbisi frit ou grillé nappé d'une mayonnaise relevée d'ail mpe ya pili-pili — street food kinshasaise, miroir ya soso mayo.",
    "region": "Kinshasa",
    "imageAlt": "Filet de mbisi frit servi avec mayonnaise",
    "prepTime": "min. 20",
    "cookTime": "min. 30",
    "ingredients": [
      "800 g ya mbisi en filets ou darnes (tilapia, capitaine…)",
      "3 c. à soupe ya mafuta pour frire ou griller",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "180 ml ya mayonnaise",
      "1 c. à café ya moutarde",
      "1 c. à soupe ya jus ya citron",
      "Pili-pili, muni mpe poivre",
      "Farine pour paner légèrement, ya lingi"
    ],
    "steps": [
      "Saler, poivrer mpe citronner mbisi. Fariner légèrement si on veut une croûte.",
      "Faire dorer mbisi dans mafuta chaude (ou le griller). Réserver au chaud.",
      "Faire fondre aluboka mpe ail dans un fond ya mafuta. Déglacer d'un trait ya mai.",
      "Hors ya feu, mélanger mayonnaise, moutarde, citron mpe pili-pili. Napper mbisi encore chaud.",
      "Salela aussitôt elongo na frites, loso ou pain."
    ],
    "tags": [
      "poisson mayo",
      "mayonnaise",
      "street food",
      "Kinshasa",
      "frit"
    ],
    "body": "Comme le [soso mayo](/ln/recettes/soso-mayo/), la mayonnaise arrive **en fin de cuisson** pour ne pas tourner. mbisi mayo se mange surtout en portion de rue ou de fête à Kinshasa ; le pili-pili se dose sans mesure fixe.",
    "seoTitle": "mbisi mayo kinshasa"
  },
  "ngulu-ya-sauce": {
    "title": "Ngulu ya sauce",
    "description": "porc en sauce (en lingala : ngulu ya sauce) : porc mijoté tomatisi-aluboka — ekeseni na porc grillé.",
    "region": "Kinshasa",
    "imageAlt": "Porc cuit, prêt à être servi en sauce",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 15",
    "ingredients": [
      "1,2 kg ya porc (épaule ou échine) en morceaux",
      "Aluboka 3, mikatami",
      "4 mikolo ya ail, mikatami",
      "4 tomatisi mûres, mibetami (ou 400 g ya pulpe)",
      "3 lukwakulu ya mafuta",
      "1 cube ya bouillon",
      "Pili-pili, muni mpe poivre",
      "400 ml ya mai",
      "1 feuille ya laurier, ya lingi"
    ],
    "steps": [
      "Faire dorer les morceaux ya porc dans mafuta. Réserver.",
      "Faire fondre aluboka, ajouter ail puis tomatisi. Laisser réduire 8 à 10 minutes.",
      "Remettre le porc, le cube, le laurier, mai, muni, poivre mpe pili-pili.",
      "Couvrir mpe mijoter à moto ya moke 50 à 60 minutes jusqu'à ce que la nyama soit tendre mpe la sauce liée.",
      "Rectifier l'assaisonnement. Servir avec loso, fufu, chikwangue ou plantain."
    ],
    "tags": [
      "ngulu",
      "porc",
      "sauce tomate",
      "Kinshasa",
      "mijoté"
    ],
    "body": "Le **porc en sauce** (en lingala : *ngulu ya sauce* ; *ngulu* = porc) est un mijoté, pas une grillade. Pour les braises : [porc grillé](/ln/recettes/porc-ya-kotumba/) ou [porc braisé](/ln/recettes/porc-braise/).",
    "seoTitle": "porc en sauce"
  },
  "boeuf-ya-kotumba": {
    "title": "Boeuf ya kotumba",
    "description": "bœuf grillé (en lingala : boeuf ya kotumba) : morceaux marinés puis cuits sur braises — grillade kin, distincte ya petites brochettes kamundele.",
    "region": "Kinshasa",
    "imageAlt": "nyama de bœuf grillée servie en portion",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "min. 40",
    "ingredients": [
      "1,2 kg ya bœuf (basse côte, paleron ou rumsteck) en gros morceaux",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "Jus ya 1 citron",
      "3 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre",
      "1 cube ya bouillon, ya lingi"
    ],
    "steps": [
      "Préparer une marinade avec aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre, pili-pili mpe cube.",
      "Enrober le bœuf mpe mariner au frais au moins 2 heures.",
      "Précuire à la marmite 15 à 20 minutes avec un fond ya mai mpe la marinade.",
      "Égoutter puis griller sur braises moyennes 15 à 20 minutes en badigeonnant ya jus.",
      "Servir avec aluboka cru, sauce pili-pili, frites ou chikwangue."
    ],
    "tags": [
      "bœuf",
      "kotumba",
      "grillade",
      "Kinshasa",
      "braise"
    ],
    "body": "Le **bœuf grillé** (en lingala : *boeuf ya kotumba*) reprend le geste *kotumba* (grillade / rôti). Le pendant soso est le [soso grillé](/ln/recettes/soso-ya-kotumba/) ; les petites brochettes restent les [kamundele](/ln/recettes/kamundele/).",
    "seoTitle": "bœuf grillé — kotumba"
  },
  "loso-mayonnaise": {
    "title": "Riz mayonnaise",
    "description": "loso mayonnaise (parfois appelé loso mayonnaise) : loso servi na une mayo ail-piment — street food / table kin.",
    "region": "Kinshasa",
    "imageAlt": "loso blanc mélangé à la mayonnaise",
    "prepTime": "min. 10",
    "cookTime": "min. 25",
    "ingredients": [
      "400 g ya loso long",
      "750 ml ya mai",
      "1 c. à café ya muni",
      "150 ml ya mayonnaise",
      "1 gousse d'ail, écrasée, ya lingi",
      "1 c. à café ya moutarde, ya lingi",
      "Pili-pili mpe poivre",
      "1 c. à soupe ya jus ya citron, ya lingi"
    ],
    "steps": [
      "Rincer le loso. Le cuire à mai salée jusqu'à absorption (environ 18 minutes). Égrener mpe laisser tiédir légèrement.",
      "Mélanger mayonnaise, ail, moutarde, citron, pili-pili mpe poivre.",
      "Incorporer la sauce au loso encore chaud, ou servir le loso mpe napper au dernier moment.",
      "Goûter mpe ajuster le muni. Servir avec soso, mbisi, brochettes ou seul."
    ],
    "tags": [
      "loso",
      "riz",
      "mayonnaise",
      "Kinshasa",
      "street food"
    ],
    "body": "Le **loso mayonnaise** (parfois appelé *loso mayonnaise*) est un geste street / table kin : loso + mayo ail-piment. Moins « un seul mijoté » que le [loso aux haricots](/ln/recettes/loso-na-madesu/).",
    "seoTitle": "loso mayonnaise — Kinshasa"
  },
  "poulet-pane": {
    "title": "Soso ya pané",
    "description": "soso pané : morceaux ya soso panés puis frits jusqu'à croustillant — street food mpe goûter kinshasa, ekeseni na soso mayo ou grillé.",
    "region": "Kinshasa",
    "imageAlt": "Morceaux de soso pané frits dorés",
    "prepTime": "min. 25",
    "cookTime": "min. 25",
    "ingredients": [
      "800 g ya soso (cuisses désossées ou blancs) en morceaux",
      "2 œufs, battus",
      "150 g ya farine",
      "120 g ya chapelure ou pain râpé",
      "1 c. à café ya muni",
      "Poivre mpe pili-pili",
      "1 c. à café d'ail en poudre ou 1 gousse écrasée",
      "mafuta pour friture"
    ],
    "steps": [
      "Assaisonner le soso avec muni, poivre, pili-pili mpe ail. Laisser reposer 15 minutes.",
      "Fariner chaque morceau, passer dans l'œuf, puis dans la chapelure en pressant bien.",
      "Chauffer mafuta à feu moyen-vif. Frire les morceaux 6 à 8 minutes par côté jusqu'à doré mpe cuisson à cœur.",
      "Égoutter sur papier absorbant. Servir chaud avec sauce pili-pili, mayonnaise ou ketchup."
    ],
    "tags": [
      "poulet pané",
      "frit",
      "street food",
      "Kinshasa",
      "croustillant"
    ],
    "body": "Le **soso pané** est la version croustillante et frite, pas nappée de mayo ([soso mayo](/ln/recettes/soso-mayo/)) ni grillée ([soso ya kotumba](/ln/recettes/soso-ya-kotumba/)). À Kinshasa on le croise en snack, fête d'enfants et portion de rue.",
    "seoTitle": "soso pané kinshasa"
  },
  "saucisse-frites": {
    "title": "Saucisse-frites",
    "description": "saucisse-frites : saucisses dorées servies na ya frites croustillantes — combo street food incontournable ya Kinshasa.",
    "region": "Kinshasa",
    "imageAlt": "Saucisse servie avec des frites",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "8 saucisses (type cocktail ou saucisses à griller)",
      "800 g ya pommes ya terre",
      "mafuta pour friture",
      "Muni",
      "Pili-pili ou ketchup, pour servir",
      "1 aluboka émincé, ya lingi"
    ],
    "steps": [
      "Éplucher les pommes ya terre, les couper en frites, rincer mpe bien sécher.",
      "Faire chauffer mafuta. Blanchir les frites 5 à 6 minutes à feu moyen, égoutter. Remonter le feu mpe les redorer 3 à 4 minutes. Saler.",
      "Dans une poêle ou mafuta, faire dorer les saucisses 8 à 10 minutes en les piquant légèrement.",
      "Salela saucisses mpe frites ensemble, elongo na aluboka, pili-pili ou ketchup."
    ],
    "tags": [
      "saucisse",
      "frites",
      "street food",
      "Kinshasa",
      "snack"
    ],
    "body": "La **saucisse-frites** est un combo de rue kinshasaise, aussi simple qu'omniprésent. Elle côtoie [kamundele](/ln/recettes/kamundele/) et [pain mayonnaise](/ln/recettes/pain-mayonnaise/) sur les étals du soir.",
    "seoTitle": "saucisse-frites kinshasa"
  },
  "brochettes-foie": {
    "title": "Brochettes ya libolo",
    "description": "brochettes ya foie : foie ya bœuf en dés, enfilé mpe grillé rapidement — street food kinshasaise, distincte ya foie sauté à la poêle.",
    "region": "Kinshasa",
    "imageAlt": "Brochettes de foie grillées sur braises",
    "prepTime": "min. 20 + min. 30 de marinade",
    "cookTime": "min. 10",
    "ingredients": [
      "600 g ya foie ya bœuf, en dés",
      "1 aluboka, râpé ou très finement émincé",
      "2 mikolo ya ail, mikatami",
      "2 c. à soupe ya jus ya citron",
      "2 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre",
      "Brochettes en bois, trempées dans mai"
    ],
    "steps": [
      "Mélanger aluboka, ail, citron, mafuta, muni, poivre mpe pili-pili. Enrober le foie mpe mariner 30 minutes au frais.",
      "Enfiler les dés sur les brochettes sans trop serrer.",
      "\"Griller sur braises vives 3 à 4 minutes par côté : le foie doit rester rosée à l'intérieur.\"",
      "Salela aussitôt elongo na aluboka cru, pili-pili mpe pain ou frites."
    ],
    "tags": [
      "foie",
      "brochettes",
      "grillade",
      "Kinshasa",
      "street food"
    ],
    "body": "Les **brochettes de foie** se cuisent vite sur le feu ; le [foie sauté](/ln/recettes/foie-boeuf-saute/) reste le geste à la poêle. Trop cuit, le foie durcit — d'où la braise courte, comme pour beaucoup de grillades de rue à Kinshasa.",
    "seoTitle": "brochettes ya foie kinshasa"
  },
  "dongo-dongo": {
    "title": "Dongo-dongo",
    "description": "dongo-dongo : gombos mijotés na mbisi ya fumé jusqu'à une sauce filante mpe iodée — bilei ya quotidien, distinct ya la sauce gombo sans fumé.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "Sauce de gombo servie avec du mbisi",
    "prepTime": "min. 25",
    "cookTime": "min. 45",
    "ingredients": [
      "500 g ya gombos frais",
      "250 g ya mbisi ya fumé (ou séché), dessalé si besoin",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "muni, pili-pili mpe un peu ya mai"
    ],
    "steps": [
      "Sukola les gombos, couper les extrémités mpe les trancher en rondelles.",
      "Faire tremper brièvement mbisi fumé si trop salé, l'égoutter mpe le détailler.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi 5 minutes.",
      "Incorporer gombos, mbisi mpe un fond ya mai. Mijoter 30 à 35 minutes en remuant.",
      "Saler en fin ya cuisson (le fumé sale déjà). Servir avec loso, fufu ou chikwangue."
    ],
    "tags": [
      "dongo-dongo",
      "gombo",
      "poisson fumé",
      "Kinshasa",
      "sauce"
    ],
    "body": "Le **dongo-dongo** met le **mbisi ya fumé** au centre d'une sauce de gombo filante. La [sauce gombo](/ln/recettes/sauce-gombo/) reste la version plus végétale (fumé optionnel) ; ici le fumé n'est pas un à-côté.",
    "seoTitle": "dongo-dongo — gombo au mbisi ya fumé"
  },
  "sauce-arachide": {
    "title": "Sauce d'arachide",
    "description": "sauce d'nguba (nguba) : pâte d'nguba diluée mpe ebilisami na aluboka mpe tomatisi — sauce autonome, distincte ya fumbwa aux nguba.",
    "region": "Na RDC mobimba",
    "imageAlt": "Sauce d'nguba onctueuse dans un plat",
    "prepTime": "min. 15",
    "cookTime": "min. 35",
    "ingredients": [
      "200 g ya pâte d'nguba non sucrée (ou nguba grillées pilées)",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "400 ml ya mai chaude",
      "muni, pili-pili",
      "100 g ya mbisi ya fumé ou ya nyama, ya lingi"
    ],
    "steps": [
      "Faire fondre aluboka dans mafuta, ajouter ail mpe tomatisi. Cuire 8 minutes.",
      "Délayer la pâte d'nguba avec mai chaude jusqu'à obtenir un lait épais, sans grumeaux.",
      "Verser dans la marmite, ajouter le fumé s'il y en a. Mijoter à moto ya moke 20 à 25 minutes en remuant.",
      "Saler mpe pimenter. La sauce doit nappe la cuillère sans brûler au fond.",
      "Servir avec loso, fufu, chikwangue, plantain ou légumes."
    ],
    "tags": [
      "sauce arachide",
      "nguba",
      "arachide",
      "végétal",
      "sauce"
    ],
    "body": "Cette **sauce d'nguba** (souvent appelée **nguba**) est une base seule : pas de feuilles de fumbwa. Pour matiti dans l'nguba, voir [fumbwa aux nguba](/ln/recettes/fumbwa-nguba/) ou [matembele](/ln/recettes/matembele-katanga/). La [mbika](/ln/recettes/mbika/) utilise des graines de courge, pas l'nguba.",
    "seoTitle": "sauce d'nguba congolaise (nguba)"
  },
  "makemba-na-mbisi": {
    "title": "Makemba na mbisi",
    "description": "plantains frits au mbisi (en lingala : makemba na mbisi) — duo plantain mpe mbisi.",
    "region": "Na RDC mobimba",
    "imageAlt": "Plantains frits servis avec du mbisi",
    "prepTime": "min. 20",
    "cookTime": "min. 35",
    "ingredients": [
      "4 bananes plantain ya polelees",
      "600 g ya mbisi (tilapia, capitaine ou mbisi ya fumé)",
      "mafuta ya friture",
      "1 aluboka, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "Jus ya 1 citron",
      "muni, pili-pili"
    ],
    "steps": [
      "Saler, poivrer mpe citronner mbisi. Le faire dorer à la poêle ou le braiser. Réserver.",
      "Éplucher les plantains, les couper en tranches mpe les frire jusqu'à doré. Égoutter mpe saler.",
      "\"Option sauce courte : faire revenir aluboka mpe ail, ajouter tomatisi mpe un fond ya mai, 8 minutes. Napper mbisi.\"",
      "Dresser makemba mpe mbisi dans la même assiette. Servir aussitôt."
    ],
    "tags": [
      "makemba",
      "mbisi",
      "plantain",
      "mbisi",
      "assiette"
    ],
    "body": "Les **plantains frits au mbisi** (en lingala : *makemba na mbisi*) ne sont pas une nouvelle technique : c'est le mariage d'assiette entre [makemba](/ln/recettes/makemba/) et un mbisi du catalogue.",
    "seoTitle": "plantains frits au mbisi"
  },
  "chikwangue-grillee": {
    "title": "Chikwangue grillée",
    "description": "chikwangue grillée : tranches ya kwanga passées sur braises ou poêle jusqu'à croûte fumée — geste à part ya la chikwangue vapeur.",
    "region": "Bassin du Congo & Kinshasa",
    "imageAlt": "Tranches de chikwangue (kwanga) coupées, prêtes à passer sur braises ou poêle",
    "prepTime": "min. 5",
    "cookTime": "min. 10",
    "ingredients": [
      "1 à 2 chikwangues cuites (kwanga)",
      "1 c. à soupe ya mafuta, ya lingi",
      "Une pincée ya muni",
      "Sauce pili-pili, pour servir"
    ],
    "steps": [
      "Déballer la chikwangue mpe la couper en tranches d'un bon centimètre.",
      "Faire chauffer une poêle ou ya braises. Badigeonner légèrement ya mafuta si besoin.",
      "Griller les tranches 3 à 4 minutes par face jusqu'à marquage mpe léger croustillant.",
      "Saler très peu. Servir chaud avec pondu, mbisi, nyama en sauce ou pili-pili."
    ],
    "tags": [
      "chikwangue",
      "kwanga",
      "grillade",
      "manioc",
      "accompagnement"
    ],
    "body": "La **chikwangue grillée** repart d'une [chikwangue](/ln/recettes/chikwangue/) déjà cuite na mvuke : on ne refermente rien, on **ressaisit** les tranches. Le goût fumé et la croûte changent complètement le geste de table.\n\nPhoto : tranches de kwanga déjà coupées (Commons) — le marquage braise se fait à la maison ; peu d'images libres montrent la croûte grillée.",
    "seoTitle": "chikwangue grillée"
  },
  "courge-sauce": {
    "title": "Courge en sauce",
    "description": "courge en sauce : courge jaune ebilisami na aluboka, tomatisi mpe un trait d'mafuta — bilei ya légume, distinct ya feuilles mujibujibu mpe ya la mbika.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Légumes mijotés en sauce dans un plat",
    "prepTime": "min. 20",
    "cookTime": "min. 40",
    "ingredients": [
      "800 g ya courge jaune ou potiron, en cubes",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "200 ml ya mai",
      "muni, pili-pili",
      "80 g d'nguba pilées, ya lingi"
    ],
    "steps": [
      "Faire fondre aluboka dans mafuta, ajouter ail mpe tomatisi. Cuire 8 minutes.",
      "Ajouter les cubes ya courge, mai, muni mpe pili-pili. Couvrir mpe mijoter 25 à 30 minutes.",
      "Quand la courge est tendre, écraser légèrement une partie pour lier la sauce.",
      "Incorporer nguba mikuatami en option, cuire encore 5 minutes.",
      "Servir avec loso, fufu ou chikwangue."
    ],
    "tags": [
      "courge",
      "potiron",
      "sauce tomate",
      "végétal",
      "mboga"
    ],
    "body": "Ici on cuisine le **fruit** de la courge, pas matiti ([mujibujibu](/ln/recettes/mujibujibu/)) ni les graines en pâte ([mbika](/ln/recettes/mbika/)). L'nguba reste facultative pour épaissir sans devenir une sauce nguba complète.",
    "seoTitle": "courge jaune en sauce"
  },
  "haricots-verts-palme": {
    "title": "Haricots verts à l'huile de palme",
    "description": "haricots verts à mafuta ya palme : haricots frais sautés na aluboka mpe tomatisi — accompagnement vif, distinct ya madesu (haricots secs).",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Haricots verts cuits à la poêle",
    "prepTime": "min. 15",
    "cookTime": "min. 20",
    "ingredients": [
      "500 g ya haricots verts frais, équeutés",
      "2 c. à soupe ya mafuta ya palmier rouge",
      "1 aluboka, mikatami",
      "2 tomatisi, mibetami",
      "1 gousse d'ail",
      "muni, pili-pili",
      "50 ml ya mai"
    ],
    "steps": [
      "Laver les haricots, les couper en tronçons si trop longs. Blanchir 4 minutes dans mai bouillante salée, égoutter.",
      "Chauffer mafuta ya palme. Faire fondre aluboka, ajouter ail mpe tomatisi 5 minutes.",
      "\"Incorporer les haricots mpe mai. Couvrir 8 à 10 minutes : ils doivent rester un peu croquants.\"",
      "Saler, pimenter. Servir avec loso, mbisi ou nyama."
    ],
    "tags": [
      "haricots verts",
      "mafuta ya palmier",
      "mboga",
      "rapide",
      "accompagnement"
    ],
    "body": "Les **haricots verts** sont frais et verts : ce ne sont pas les [madesu](/ln/recettes/madesu/) (haricots secs rouges/bruns longuement mijotés). mafuta de palme donne la couleur et le parfum de table congolaise.",
    "seoTitle": "haricots verts mafuta ya palme"
  },
  "ndagala-tomates": {
    "title": "Ndagala na tomatisi",
    "description": "ndagala aux tomatisi : petits poissons ya lac Kivu (frais ou séchés) kotumbami sima mijotés dans une sauce ya tomatisi — classique ya l'Est, ekeseni na kapenta / sambaza ya Katanga.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Petits poissons séchés de lac type ndagala",
    "prepTime": "min. 20",
    "cookTime": "min. 30",
    "ingredients": [
      "400 g ya ndagala frais ou séchés",
      "Tomatisi 4 ya polele, mibetami",
      "Aluboka 2, mikatami",
      "2 mikolo ya ail, mikatami",
      "4 lukwakulu ya mafuta",
      "Pili-pili 1 moke",
      "Muni mpe poivre",
      "100 ml ya mai"
    ],
    "steps": [
      "Si les ndagala sont séchés, les rincer rapidement deux ou trois fois puis bien les égoutter. Saler très peu.",
      "Fútbisa la moitié ya mafuta mpe bimasisa mbisi 5 à 8 minutes. Réserver.",
      "Ajouter le reste ya mafuta, faire fondre aluboka, puis incorporer ail, tomatisi mpe pili-pili.",
      "Teká sauce 10 minutes, tema mai mpe zongisa délicatement les ndagala.",
      "Mijoter na sanza 5 minutes. Servir avec bukari, loso, plantain ou fufu."
    ],
    "tags": [
      "ndagala",
      "Kivu",
      "petits poissons",
      "tomatisi",
      "Est"
    ],
    "body": "Les **ndagala** sont les petits poissons associés surtout au **lac Kivu** et à l'Est. Le geste ressemble au [kapenta](/ln/recettes/kapenta-tomatisi/) ou aux [sambaza](/ln/recettes/sambaza/) du Tanganyika, mais le nom, le marché et l'ancrage régional changent.",
    "seoTitle": "ndagala na tomatisi — petits poissons ya Kivu"
  },
  "poisson-kivu-grille": {
    "title": "Poisson du Kivu grillé",
    "description": "mbisi ya lac Kivu grillé : mbisi entier mariné aux aromates puis grillé jusqu'à peau fumée — grillade ya l'Est, distincte ya braise ya Kinkole.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "mbisi entier grillé, peau dorée",
    "prepTime": "min. 25 + ngonga 1 de marinade",
    "cookTime": "min. 30",
    "ingredients": [
      "1 mbisi ya lac (tilapia ou espèce locale) ya 1 à 1,2 kg, vidé",
      "2 aluboka, dont un râpé",
      "3 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "Jus ya 2 citrons",
      "3 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre"
    ],
    "steps": [
      "Inciser mbisi. Mélanger aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre mpe pili-pili.",
      "Enrober mbisi, farcir un peu la cavité mpe mariner au frais au moins 1 heure.",
      "Griller sur braises moyennes 25 à 30 minutes en retournant mpe en badigeonnant ya jus.",
      "Servir avec plantain, frites, loso ou ndagala en accompagnement ya sauce."
    ],
    "tags": [
      "lac Kivu",
      "poisson grillé",
      "Est",
      "braise",
      "Goma"
    ],
    "body": "Autour de **Goma** et de Bukavu, mbisi de lac se grille souvent entier, avec une marinade citron-ail proche des grillades de Kinshasa. La fiche [mbisi braisé à Kinkole](/ln/recettes/mbisi-braise-kinkole/) documente le geste fluvial de la capitale ; ici l'ancrage est **lacustre, Est**.",
    "seoTitle": "mbisi ya lac Kivu grillé"
  },
  "kabambale": {
    "title": "Kabambale",
    "description": "kabambale : mbisi séché réhydraté puis ebilisami na aluboka mpe tomatisi — conserve ya bassin, distincte ya mbisi ya fumé frais en sauce.",
    "region": "Bassin du Congo & Cuvette",
    "imageAlt": "Gros mbisi-chat séché (kabambale)",
    "prepTime": "min. 30 + ngonga 1 de kobomba",
    "cookTime": "min. 40",
    "ingredients": [
      "300 g ya kabambale (mbisi séché)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 c. à soupe ya mafuta ya palmier ou neutre",
      "Pili-pili, muni",
      "250 ml ya mai"
    ],
    "steps": [
      "Faire tremper le kabambale 45 à 60 minutes dans mai tièya, changer mai une fois. Égoutter mpe détailler.",
      "Faire fondre aluboka dans mafuta, ajouter ail mpe tomatisi. Cuire 8 minutes.",
      "Incorporer mbisi mpe mai. Mijoter 25 à 30 minutes à moto ya moke.",
      "Goûter avant ya saler (le séché est souvent déjà salé). Pimenter. Servir avec loso, fufu ou chikwangue."
    ],
    "tags": [
      "kabambale",
      "poisson séché",
      "conserve",
      "bassin du Congo",
      "sauce tomate"
    ],
    "body": "Le **kabambale** est une forme de **mbisi séché** du bassin, utilisée comme réserve de marché. Il se distingue du [mbisi ya fumé aux tomatisi](/ln/recettes/mbisi-fume-tomatisi/) (fumé, plus souple) et du [makayabu](/ln/recettes/makayabu/) (morue salée d'importation). Ndeko proche : [missole](/ln/recettes/missole/).",
    "seoTitle": "kabambale — mbisi séché"
  },
  "missole": {
    "title": "Missole",
    "description": "missole (misolè) : lamelles ya mbisi séché réhydratées puis mijotées en sauce courte — produit ya conserve ya quotidien, ekeseni na kabambale en pièces.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "mbisi séché en vente au marché",
    "prepTime": "min. 25 + min. 45 de kobomba",
    "cookTime": "min. 35",
    "ingredients": [
      "250 g ya missole (lamelles ya mbisi séché)",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "Pili-pili, muni",
      "200 ml ya mai",
      "1 c. à soupe ya jus ya citron, ya lingi"
    ],
    "steps": [
      "Faire tremper le missole 30 à 45 minutes, rincer mpe égoutter. Citronner légèrement si le goût est très fort.",
      "Bimasisa aluboka mpe ail na mafuta, ajouter tomatisi 6 à 8 minutes.",
      "Incorporer le missole mpe mai. Mijoter 20 à 25 minutes à moto ya moke.",
      "Rectifier le muni en dernier. Servir avec loso, fufu, plantain ou chikwangue."
    ],
    "tags": [
      "missole",
      "misolè",
      "poisson séché",
      "Kinshasa",
      "conserve"
    ],
    "body": "**Missole** / **misolè** désigne souvent des **lamelles** de mbisi séché plus fines que le [kabambale](/ln/recettes/kabambale/). Sur les marchés de Kinshasa, le mot varie selon les vendeurs ; le geste reste : tremper, rincer, mijoter sans trop saler.",
    "seoTitle": "missole — mbisi séché congolais"
  },
  "mbala": {
    "title": "Mbala",
    "description": "mbala : patates douces bouillies ou rôties jusqu'à fondre — tubercule ya quotidien, distinct ya feuilles matembele.",
    "region": "Na RDC mobimba",
    "imageAlt": "Patates douces (mbala) bouillies, chair jaune",
    "prepTime": "min. 10",
    "cookTime": "min. 30",
    "ingredients": [
      "1 kg ya patates douces (mbala)",
      "Mai",
      "1 c. à café ya muni",
      "1 c. à soupe ya mafuta ou un noix ya beurre, ya lingi"
    ],
    "steps": [
      "Sukola les patates douces. Les cuire entières en robe ya champs ou épluchées mpe coupées en gros morceaux.",
      "Couvrir ya mai froide salée, porter à ébullition mpe cuire 25 à 35 minutes jusqu'à tendreté.",
      "Égoutter. Servir nature, avec un filet ya mafuta, ou en accompagnement ya mbisi mpe sauces.",
      "\"Variante : rôtir na four ou sur braises 40 minutes pour une peau caramélisée.\""
    ],
    "tags": [
      "mbala",
      "patate douce",
      "tubercule",
      "bouilli",
      "accompagnement"
    ],
    "body": "**Mbala** désigne la **patate douce** (le tubercule). Version feu : [mbala grillée](/ln/recettes/mbala-grillee/). Version friture : [patate douce frite](/ln/recettes/patate-douce-frite/). Les [matembele](/ln/recettes/matembele-katanga/) sont les **feuilles** de la même plante — autre geste, autre fiche. Cousins féculents : [igname bouillie](/ln/recettes/igname-bouillie/), [plantains na mvuke](/ln/recettes/plantains-vapeur/).",
    "seoTitle": "mbala — patate douce"
  },
  "beignets-igname": {
    "title": "Beignets d'igname",
    "description": "beignets d'igname : igname râpée ou écrasée, assaisonnée mpe frite en galettes — goûter distinct ya l'igname bouillie mpe ya beignets ya manioc.",
    "region": "Na RDC mobimba",
    "imageAlt": "Beignets d'igname dorés",
    "prepTime": "min. 25",
    "cookTime": "min. 20",
    "ingredients": [
      "800 g d'igname, épluchée",
      "1 œuf",
      "2 c. à soupe ya farine, si la pâte est trop liquide",
      "1 aluboka râpé, ya lingi (version salée)",
      "1 c. à soupe ya sucre, ya lingi (version douce)",
      "muni (ou sucre selon la version)",
      "mafuta ya friture"
    ],
    "steps": [
      "Râper l'igname finement ou la cuire à demi puis l'écraser. Essorer légèrement si très humide.",
      "Mélanger avec l'œuf, la farine si besoin, mpe soit aluboka + muni (salé), soit sucre (doux).",
      "Chauffer mafuta à feu moyen. Déposer ya cuillerées ya pâte. Aplatir légèrement.",
      "Frire 3 à 4 minutes par face jusqu'à doré. Égoutter sur papier.",
      "Salela chaud, nature ou elongo na une sauce ya tomatisi / pili-pili (version salée)."
    ],
    "tags": [
      "beignets",
      "igname",
      "friture",
      "goûter",
      "snack"
    ],
    "body": "Les **beignets d'igname** transforment le tubercule en snack croustillant — ce n'est plus l'[igname bouillie](/ln/recettes/igname-bouillie/). Plus fermes que les [mikate](/ln/recettes/mikate/), moins « manioc » que les [beignets de manioc](/ln/recettes/beignets-manioc/).",
    "seoTitle": "beignets d'igname"
  },
  "bananes-douces-vapeur": {
    "title": "Bananes douces à la vapeur",
    "description": "bananes douces na mvuke : bananes dessert cuites na mvuke jusqu'à fondre — goûter simple, distinct ya plantains (makemba / vapeur).",
    "region": "Na RDC mobimba",
    "imageAlt": "Bananes mûres cuites, servies en accompagnement",
    "prepTime": "min. 5",
    "cookTime": "min. 20",
    "ingredients": [
      "6 bananes douces bien mûres mais fermes",
      "mai pour la vapeur",
      "Pince ya muni (ya lingi)",
      "Une noix ya beurre ou un filet ya mafuta, ya lingi"
    ],
    "steps": [
      "Laver les bananes. Les cuire en robe (peau) ou épluchées, selon l'habitude ya foyer.",
      "Disposer dans un panier vapeur au-dessus d'une mai frémissante.",
      "Cuire 15 à 20 minutes jusqu'à ce qu'elles soient tendres.",
      "Éplucher si cuites en robe. Servir tièya, nature ou avec un peu ya beurre / sucre."
    ],
    "tags": [
      "banane douce",
      "vapeur",
      "goûter",
      "dessert",
      "simple"
    ],
    "body": "Les **bananes douces** ne sont pas des plantains : plus sucrées, plus tendres. Les [plantains na mvuke](/ln/recettes/plantains-vapeur/) et les [makemba](/ln/recettes/makemba/) restent du côté féculent salé ; ici c'est le goûter ou le dessert léger.",
    "seoTitle": "bananes douces na vapeur"
  },
  "andazi-tanganyika": {
    "title": "Andazi du Tanganyika",
    "description": "andazi (mandazi) : beignets ya farine légèrement sucrés frits jusqu'à dorer — encas ya quotidien à Kalemie mpe autour ya lac Tanganyika.",
    "region": "Haut-Katanga mpe Tanganyika",
    "imageAlt": "Andazi frais tout juste frits, lac Tanganyika",
    "prepTime": "min. 25 + min. 45 kobomba",
    "cookTime": "min. 20",
    "ingredients": [
      "500 g ya farine ya blé",
      "80 g ya sucre",
      "1 sachet ya levure boulangère (7 g) ou 1 c. à café ya baking powder",
      "1 œuf, ya lingi",
      "250 ml ya lait tièya ou ya mai tièya",
      "2 c. à soupe ya mafuta dans la pâte",
      "1 pincée ya muni",
      "1/2 c. à café ya cardamome ou vanille, ya lingi",
      "mafuta ya friture"
    ],
    "steps": [
      "Mélanger farine, sucre, muni mpe levure (ou baking powder). Ajouter l'œuf s'il y en a, mafuta mpe le liquide tièya jusqu'à une pâte souple.",
      "Pétrir 5 minutes. Couvrir mpe laisser lever 45 minutes (ou reposer 20 minutes si baking powder).",
      "Abaisser sur un plan fariné, découper en losanges ou rectangles d'environ 1 cm d'épaisseur.",
      "Faire chauffer mafuta à feu moyen. Plonger les andazi sans surcharger.",
      "Frire 2 à 3 minutes ya chaque côté jusqu'à une belle dorure. Égoutter.",
      "Servir tièya, nature, au thé ou au café."
    ],
    "tags": [
      "andazi",
      "mandazi",
      "beignets",
      "Tanganyika",
      "Kalemie"
    ],
    "body": "Les **andazi** (singulier *andazi*, aussi *mandazi* en swahili) sont les beignets du quotidien sur la rive congolaise du Tanganyika — Kalemie en tête. Moins sucrés que certains beignets de ville, ils se mangent au petit déjeuner ou en collation.\n\nCousins : [mikate](/ln/recettes/mikate/), [beignets de manioc](/ln/recettes/beignets-manioc/). Boisson locale : [munkoyo](/ln/recettes/munkoyo/).",
    "seoTitle": "andazi / mandazi — beignets ya lac Tanganyika"
  },
  "mukeke-grille": {
    "title": "Mukeke grillé",
    "description": "mukeke grillé : gros mbisi ya lac Tanganyika mariné puis cuit au feu ou na four — geste ya fête mpe ya marché à l'Est (Kalemie, rives ya lac).",
    "region": "Haut-Katanga mpe Tanganyika",
    "imageAlt": "Gros mbisi du lac Tanganyika sur un marché près du port",
    "prepTime": "min. 25 + min. 30 marinade",
    "cookTime": "min. 35",
    "ingredients": [
      "1 mukeke (ou autre gros mbisi ya lac), 1,2 à 1,5 kg, vidé mpe ouvert en portefeuille",
      "Jus ya 2 citrons",
      "4 mikolo ya ail, mikatami",
      "1 aluboka, mikatami",
      "2 lukwakulu ya mafuta",
      "1 c. à café ya gingembre râpé, ya lingi",
      "muni, poivre, pili-pili",
      "Quelques brins ya persil ou coriandre, ya lingi"
    ],
    "steps": [
      "Rincer mbisi, le sécher. Inciser la chair sans traverser la peau.",
      "Mélanger citron, ail, aluboka, mafuta, gingembre, muni, poivre mpe pili-pili. Badigeonner l'intérieur mpe l'extérieur. Laisser mariner 30 minutes.",
      "Préparer un feu ya braises ou un four à 200 °C.",
      "Griller 15 à 20 minutes ya chaque côté (ou 30–35 minutes na four), en badigeonnant ya marinade.",
      "Vérifier que la chair se détache facilement. Parsemer d'herbes si disponibles.",
      "Servir avec bugali, bukari, plantain ou loso, mpe une sauce ya tomatisi ou pili-pili à part."
    ],
    "tags": [
      "mukeke",
      "Tanganyika",
      "poisson grillé",
      "Est",
      "Kalemie"
    ],
    "body": "Le **mukeke** désigne, selon les marchés, un grand mbisi du **lac Tanganyika** — pièce de fête quand le port en reçoit. Le geste reste simple : citron, ail, feu. Les petits poissons du même lac sont plutôt [sambaza](/ln/recettes/sambaza/) ou [kapenta](/ln/recettes/kapenta-tomatisi/).\n\nAu Kivu, le Ndeko grillé : [mbisi du Kivu](/ln/recettes/mbisi-kivu-grille/).",
    "seoTitle": "mukeke grillé — mbisi ya lac Tanganyika"
  },
  "pilau-kivu": {
    "title": "Pilau du Kivu",
    "description": "pilau (pilaw) : loso cuit dans un bouillon d'épices na nyama ou légumes — plat d'influence est-africaine très présent au Nord mpe Sud-Kivu.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Assiette de pilau, loso épicé",
    "prepTime": "min. 25",
    "cookTime": "min. 45",
    "ingredients": [
      "500 g ya loso long grain, rincé",
      "400 g ya bœuf, chèvre ou soso, na biteni",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "1 c. à café ya cumin",
      "1 c. à café ya coriandre moulue",
      "1/2 c. à café ya cannelle ou 1 bâton",
      "1/2 c. à café ya gingembre",
      "4 lukwakulu ya mafuta",
      "1 l ya bouillon ou ya mai",
      "muni, poivre, pili-pili"
    ],
    "steps": [
      "Faire revenir la nyama dans mafuta jusqu'à coloration. Réserver.",
      "Dans la même marmite, fondre aluboka, ajouter ail, tomatisi mpe épices 5 minutes.",
      "Remettre la nyama, couvrir d'un peu ya bouillon mpe mijoter 15 minutes.",
      "Ajouter le loso, le reste ya liquide salé ; le niveau doit dépasser le loso d'un doigt.",
      "Porter à ébullition, couvrir à moto ya moke 18–20 minutes sans remuer.",
      "Laisser reposer 5 minutes couvert, égrener à la fourchette mpe servir."
    ],
    "tags": [
      "pilau",
      "pilaw",
      "riz",
      "Kivu",
      "épices"
    ],
    "body": "Le **pilau** (ou *pilaw*) circule dans l'Est swahilophone : épices, loso, nyama. Au Kivu il côtoie le [bugali](/ln/recettes/bukari-katanga/) et les plats de lac. Ce n'est pas le [loso mayonnaise](/ln/recettes/loso-mayonnaise/) de Kinshasa : ici le loso boit le bouillon d'épices.\n\nPhoto d'ambiance est-africaine (crédit Commons) — le geste reste celui des foyers de Goma, Bukavu et alentours.",
    "seoTitle": "pilau — loso épicé ya Kivu"
  },
  "haricots-maharage": {
    "title": "Maharage na tomatisi",
    "description": "maharage : haricots rouges mijotés à la tomatisi mpe à aluboka — accompagnement quotidien au Kivu, souvent servi na ya bugali.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Haricots servis avec une pâte de maïs",
    "prepTime": "min. 15 (+ kobomba si secs)",
    "cookTime": "ngonga 1 min. 15",
    "ingredients": [
      "400 g ya haricots rouges secs (trempés une nuit) ou 800 g cuits",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "1 feuille ya laurier, ya lingi",
      "muni, poivre, pili-pili",
      "mai ou bouillon"
    ],
    "steps": [
      "\"Si secs : cuire les haricots dans une grande mai jusqu'à tendreté (45–60 min). Égoutter en réservant un peu ya jus.\"",
      "Faire fondre aluboka mpe ail dans mafuta, ajouter tomatisi mpe épices 8 minutes.",
      "Incorporer les haricots mpe un peu ya jus. Mijoter 15–20 minutes à couvert.",
      "Rectifier le muni. La sauce doit nappe les grains sans être trop liquide.",
      "Servir avec bugali, loso ou plantain."
    ],
    "tags": [
      "maharage",
      "haricots",
      "Kivu",
      "tomatisi",
      "Est"
    ],
    "body": "**Maharage** (swahili) : les haricots de l'Est, cousins des [madesu](/ln/recettes/madesu/) de l'Ouest. Au Kivu on les colle souvent au [bugali](/ln/recettes/bukari-katanga/). Moins « sauce nguba » que certains plats kasaiens : ici tomatisi, aluboka, patience.",
    "seoTitle": "maharage — haricots ya l'Est"
  },
  "chou-mijote-est": {
    "title": "Chou mijoté de l'Est",
    "description": "chou mijoté : chou blanc revenu puis cuit na aluboka mpe tomatisi — légume simple ya quotidien à l'Est, servi na bugali ou loso.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Chou cuit servi à côté d'une pâte de maïs",
    "prepTime": "min. 15",
    "cookTime": "min. 25",
    "ingredients": [
      "1 petit chou blanc, mikatami",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "80 ml ya mai"
    ],
    "steps": [
      "Faire fondre aluboka mpe ail dans mafuta. Ajouter tomatisi 5 minutes.",
      "Incorporer le chou, saler, poivrer. Remuer.",
      "Ajouter mai, couvrir mpe mijoter 15–20 minutes jusqu'à tendreté désirée.",
      "Découvrir 2 minutes si trop ya mai. Rectifier l'assaisonnement.",
      "Salela chaud elongo na bugali, loso ou nyama grillée."
    ],
    "tags": [
      "chou",
      "mboga",
      "Kivu",
      "Est",
      "accompagnement"
    ],
    "body": "Le **chou mijoté** est un légume de table à l'Est, moins chanté que le [pondu](/ln/recettes/pondu/) mais très présent dès que le marché en propose. On le pose à côté du [bugali](/ln/recettes/bukari-katanga/). Autre vert du quotidien swahili : [sukuma](/ln/recettes/sukuma-est/).",
    "seoTitle": "chou mijoté — accompagnement Kivu / Est"
  },
  "sukuma-est": {
    "title": "Sukuma",
    "description": "sukuma (sukuma wiki) : feuilles type chou frisé ou verdure ya marché revenues à aluboka — légume express ya Kivu mpe ya l'Est swahilophone.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Sukuma wiki servi avec une pâte de maïs",
    "prepTime": "min. 15",
    "cookTime": "min. 15",
    "ingredients": [
      "2 bottes ya sukuma (chou frisé / verdure ya marché), lavées mpe émincées",
      "Aluboka 1 monene, mikatami",
      "2 tomatisi, mibetami, ya lingi",
      "2 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili"
    ],
    "steps": [
      "Faire revenir aluboka mpe ail dans mafuta jusqu'à translucides.",
      "Ajouter tomatisi s'il y en a, 3 minutes.",
      "Incorporer le sukuma encore humide ya lavage. Couvrir 5–8 minutes.",
      "Remuer, saler, poivrer. matiti doivent rester vertes mpe tendres, pas noires.",
      "Salela aussitôt elongo na bugali ou loso."
    ],
    "tags": [
      "sukuma",
      "sukuma wiki",
      "mboga",
      "Kivu",
      "Est"
    ],
    "body": "**Sukuma wiki** (« pousser la semaine » en swahili) : le vert bon marché qui allonge les repas. Au Kivu le geste croise l'Est africain ; à Kinshasa on parlerait plutôt de [ndunda](/ln/recettes/ndunda/). Accompagnement naturel : [bugali](/ln/recettes/bukari-katanga/).",
    "seoTitle": "sukuma wiki — feuilles vertes ya l'Est"
  },
  "tilapia-bugali": {
    "title": "Tilapia au bugali",
    "description": "tilapia grillé ou poêlé servi na ya bugali — duo mbisi ya lac + pâte ya maïs courant au Kivu mpe sur les grands lacs.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Tilapia servi avec une pâte de maïs type bugali",
    "prepTime": "min. 20",
    "cookTime": "min. 30",
    "ingredients": [
      "2 tilapias entiers (environ 800 g–1 kg au total), vidés",
      "Jus ya 2 citrons",
      "3 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "Aluboka 1, na rondelles",
      "Bugali pour servir (voir fiche bugali)"
    ],
    "steps": [
      "Inciser les tilapias, les frotter ya citron, ail, muni, poivre mpe pili-pili. Reposer 15 minutes.",
      "Huiler mpe faire griller ou poêler 8–12 minutes ya chaque côté selon l'épaisseur.",
      "Faire revenir rapidement les rondelles d'aluboka à part, ya lingi.",
      "Préparer le bugali pendant la cuisson ya mbisi.",
      "Servir mbisi sur ou à côté ya bugali, aluboka mpe citron à part."
    ],
    "tags": [
      "tilapia",
      "bugali",
      "Kivu",
      "lac",
      "mbisi"
    ],
    "body": "**Tilapia + bugali** : assiette type des bords de lac quand le marché propose du frais. Moins « sauce longue » que le [mbisi moambe](/ln/recettes/mbisi-moambe/) ; plus direct que les [ndagala](/ln/recettes/ndagala-tomatisi/). Pour la pâte seule : [bugali](/ln/recettes/bukari-katanga/).",
    "seoTitle": "tilapia grillé avec bugali — Kivu"
  },
  "mbinzo-grillees": {
    "title": "Mbinzo grillées",
    "description": "mbinzo grillées : chenilles comestibles grossièrement assaisonnées mpe saisies à la poêle ou au feu — protéine ya saison au Kasaï mpe au Katanga.",
    "region": "Kasaï monene",
    "imageAlt": "Chenilles comestibles (mbinzo / ngala) séchées, prêtes à saisir à la poêle",
    "prepTime": "min. 20",
    "cookTime": "min. 15",
    "ingredients": [
      "300 g ya mbinzo (chenilles comestibles) déjà nettoyées",
      "1 aluboka, mikatami",
      "2 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "Jus d'un demi-citron, ya lingi"
    ],
    "steps": [
      "Vérifier que les mbinzo sont propres (sans résidus d'arbre). Les rincer rapidement mpe égoutter.",
      "Faire chauffer mafuta, revenir aluboka mpe ail 2 minutes.",
      "Ajouter les mbinzo, saler, poivrer, pimenter. Remuer sur moto ya makasi 8–12 minutes jusqu'à ce qu'elles soient bien saisies.",
      "Citronner en fin ya cuisson si désiré.",
      "Servir avec bidia / bukari, chikwangue ou loso, mpe un légume vert."
    ],
    "tags": [
      "mbinzo",
      "chenilles",
      "Kasaï",
      "protéines",
      "saison"
    ],
    "body": "Les **mbinzo** grillées sont le geste sec, croquant, de saison — distinct des [mbinzo aux tomatisi](/ln/recettes/mbinzo-tomatisi/). Au Kasaï comme au Katanga, on les pose à côté de la pâte. Autre protéine insecte : [brochettes de grillons](/ln/recettes/brochettes-grillons/).",
    "seoTitle": "mbinzo grillées — chenilles comestibles"
  },
  "mbala-grillee": {
    "title": "Mbala ya kotumba",
    "description": "mbala grillée : patates douces cuites sous la braise ou na four jusqu'à la peau caramélisée — tubercule simple ya Kasaï mpe d'ailleurs.",
    "region": "Kasaï monene",
    "imageAlt": "Patate douce (mbala) rôtie / grillée, peau caramélisée",
    "prepTime": "min. 5",
    "cookTime": "min. 40",
    "ingredients": [
      "1 kg ya patates douces (mbala), lavées",
      "1 pincée ya muni, ya lingi",
      "1 c. à soupe ya mafuta, ya lingi"
    ],
    "steps": [
      "Choisir ya mbala fermes, ya calibre moyen.",
      "\"Sous la braise : les enfouir dans les cendres chaudes 35–45 minutes en les retournant.\"",
      "\"na four : 200 °C, 40 minutes environ, éventuellement badigeonnées d'un peu ya mafuta.\"",
      "Vérifier la tendreté avec la pointe d'un couteau.",
      "Fendre, saler légèrement, servir nature ou avec une sauce."
    ],
    "tags": [
      "mbala",
      "patate douce",
      "grillé",
      "Kasaï",
      "tubercule"
    ],
    "body": "La **mbala grillée** est la version feu de la [mbala bouillie](/ln/recettes/mbala/). Au Kasaï elle accompagne viandes et légumes ; les [matembele](/ln/recettes/matembele-katanga/) restent les **feuilles**, autre fiche.",
    "seoTitle": "mbala grillée — patate douce au feu"
  },
  "makosso-pommes": {
    "title": "Makosso aux pommes de terre",
    "description": "makosso : bouillon ya pieds ya porc longuement mijoté, servi na ya pommes ya terre — bilei ya partage au Kasaï mpe au-delà.",
    "region": "Kasaï monene",
    "imageAlt": "Bouillon de pieds de porc (makosso) servi avec des pommes de terre",
    "prepTime": "min. 30",
    "cookTime": "ngonga 2 min. 30",
    "ingredients": [
      "1,5 kg ya pieds ya porc, coupés mpe bien nettoyés",
      "1 kg ya pommes ya terre",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "4 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "1 feuille ya laurier, ya lingi",
      "muni, poivre, pili-pili",
      "Mai"
    ],
    "steps": [
      "\"Blanchir les pieds 10 minutes dans une grande mai. Égoutter, rincer.\"",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi 5 minutes.",
      "Ajouter les pieds, couvrir ya mai, laurier, muni. Mijoter à couvert 1 h 30 à 2 h jusqu'à tendreté.",
      "\"Éplucher les pommes ya terre, les couper en gros morceaux. Les ajouter 25–30 minutes avant la fin.\"",
      "Rectifier muni mpe piment. La sauce doit nappe sans être trop liquide.",
      "Salela chaud, elongo na bidia / bukari ou ya pain."
    ],
    "tags": [
      "makosso",
      "pieds de porc",
      "pommes de terre",
      "Kasaï",
      "mijoté"
    ],
    "body": "Le **makosso** (pieds de porc en sauce) se partage en famille. Au Kasaï on le croise mbala mingi na des **pommes de terre** — féculent de plateau, Ndeko de la [mbala grillée](/ln/recettes/mbala-grillee/). Autre porc en sauce : [ngulu ya sauce](/ln/recettes/ngulu-ya-sauce/).",
    "seoTitle": "makosso — pieds ya porc mpe pommes ya terre"
  },
  "ntaba-mijotee-kasai": {
    "title": "Ntaba ya sauce",
    "description": "ntaba mijotée : chèvre cuite longuement à la tomatisi mpe aux aromates — version en sauce ya Kasaï, distincte ya la ntaba grillée ya Kinshasa.",
    "region": "Kasaï monene",
    "imageAlt": "nyama en sauce servie avec du fufu",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "1,5 kg ya chèvre découpée (avec os)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "4 mikolo ya ail",
      "2 cm ya gingembre",
      "3 lukwakulu ya mafuta",
      "400 ml ya mai",
      "muni, poivre, pili-pili"
    ],
    "steps": [
      "Assaisonner la chèvre (muni, poivre, ail écrasé, gingembre). Reposer 20 minutes.",
      "Faire dorer les morceaux dans mafuta. Réserver.",
      "Faire fondre aluboka, ajouter tomatisi 8 minutes.",
      "Remettre la nyama, verser mai. Couvrir mpe mijoter 1 h à 1 h 15 à moto ya moke.",
      "Rectifier l'assaisonnement. La nyama doit se détacher facilement.",
      "Servir avec bidia / bukari, loso ou chikwangue."
    ],
    "tags": [
      "ntaba",
      "chèvre",
      "Kasaï",
      "sauce",
      "bidia"
    ],
    "body": "Au Kasaï, la **chèvre mijotée** côtoie le [soso au lumba-lumba](/ln/recettes/soso-lumba-lumba/). À Kinshasa, le geste grillade s'appelle plutôt [ntaba](/ln/recettes/ntaba/) ; la [ntaba en sauce](/ln/recettes/ntaba-sauce/) de l'Ouest est une autre page. Ici : patience, tomatisi, bidia.",
    "seoTitle": "ntaba mijotée — chèvre en sauce ya Kasaï"
  },
  "haricots-nguba-kasai": {
    "title": "Madesu ya nguba",
    "description": "haricots à la nguba : haricots mijotés dans une sauce d'nguba — accompagnement ya Kasaï monene, souvent collé au bidia.",
    "region": "Kasaï monene",
    "imageAlt": "Plat de haricots et feuilles servi en République démocratique du Congo",
    "prepTime": "min. 15 (+ kobomba si secs)",
    "cookTime": "ngonga 1 min. 20",
    "ingredients": [
      "400 g ya haricots secs (trempés une nuit) ou 800 g cuits",
      "120 g d'nguba grillées mpe pilées (nguba)",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "3 lukwakulu ya mafuta",
      "muni, pili-pili",
      "Mai"
    ],
    "steps": [
      "\"Si secs : cuire les haricots jusqu'à tendreté (45–60 min). Égoutter en réservant ya jus.\"",
      "Faire revenir aluboka dans mafuta, ajouter tomatisi 6 minutes.",
      "Incorporer nguba mikuatami mpe un peu ya jus. Remuer jusqu'à une sauce crémeuse.",
      "Ajouter les haricots. Mijoter 15–20 minutes à moto ya moke.",
      "Saler, pimenter. Servir avec bidia, loso ou plantain."
    ],
    "tags": [
      "haricots",
      "nguba",
      "arachides",
      "Kasaï",
      "bidia"
    ],
    "body": "Les **haricots à la nguba** (nguba) sont le geste nguba du Kasaï sur les légumineuses — cousins des [madesu](/ln/recettes/madesu/) de l'Ouest et des [maharage](/ln/recettes/haricots-maharage/) de l'Est (plutôt tomatisi). Sauce seule : [sauce nguba](/ln/recettes/sauce-nguba/).",
    "seoTitle": "haricots nguba — nguba ya Kasaï"
  },
  "poisson-fume-bidia": {
    "title": "Mbisi ya fumé",
    "description": "mbisi ya fumé en sauce courte : trempé, mijoté à la tomatisi — protéine ya garde-manger au Kasaï, servie na le bidia.",
    "region": "Kasaï monene",
    "imageAlt": "Panier de poissons séchés / fumés sur un marché congolais",
    "prepTime": "min. 20 + min. 40 kobomba",
    "cookTime": "min. 35",
    "ingredients": [
      "300 g ya mbisi ya fumé (morceaux)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, pili-pili",
      "250 ml ya mai",
      "Jus d'un demi-citron, ya lingi"
    ],
    "steps": [
      "Tremper mbisi 30–40 minutes. Rincer, égoutter. Citronner si le goût est très fort.",
      "Faire revenir aluboka mpe ail, ajouter tomatisi 8 minutes.",
      "Ajouter mbisi mpe mai. Mijoter doucement 20–25 minutes.",
      "Saler en fin (le fumé est déjà salé). Pimenter.",
      "Servir avec bidia / bukari, chikwangue ou loso."
    ],
    "tags": [
      "poisson fumé",
      "bidia",
      "Kasaï",
      "conserve"
    ],
    "body": "Le **mbisi ya fumé** du Kasaï se colle au bidia comme le [mbisi ya fumé aux tomatisi](/ln/recettes/mbisi-fume-tomatisi/) de l'Ouest. Morceaux plus larges que les [missole](/ln/recettes/missole/) ; autre conserve : [kabambale](/ln/recettes/kabambale/).",
    "seoTitle": "mbisi ya fumé — sauce courte ya Kasaï"
  },
  "pommes-sautees-katanga": {
    "title": "Pommes de terre sautées",
    "description": "pommes ya terre sautées : cubes dorés à aluboka — accompagnement ya quotidien à Lubumbashi mpe au Katanga monene.",
    "region": "Katanga monene",
    "imageAlt": "Pommes de terre dans un plat congolais",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "1 kg ya pommes ya terre",
      "Aluboka 2, mikatami",
      "3 lukwakulu ya mafuta",
      "muni, poivre",
      "Persil ou aluboka vert, ya lingi"
    ],
    "steps": [
      "Éplucher les pommes ya terre, les couper en cubes. Blanchir 8–10 minutes, égoutter.",
      "Faire chauffer mafuta. Dorer les cubes à feu moyen en remuant.",
      "Ajouter aluboka, poursuivre jusqu'à ce qu'ils soient fondants mpe les pommes bien dorées.",
      "Saler, poivrer. Parsemer d'herbes si disponibles.",
      "Servir avec nyama grillée, mbisi ou un légume (matembele, sombe)."
    ],
    "tags": [
      "pommes de terre",
      "Katanga",
      "Lubumbashi",
      "accompagnement"
    ],
    "body": "Au **Grand Katanga**, la pomme de terre complète le [bukari](/ln/recettes/bukari-katanga/) sans le remplacer — surtout en ville. Pour un plat plus long : [makosso aux pommes](/ln/recettes/makosso-pommes/). Légume de la région : [matembele](/ln/recettes/matembele-katanga/).",
    "seoTitle": "pommes ya terre sautées — Katanga"
  },
  "brochettes-lubumbashi": {
    "title": "Brochettes de Lubumbashi",
    "description": "brochettes ya Lubumbashi : bœuf mariné mpe grillé sur braises — street food ya Katanga monene, cousine ya kamundele ya Kinshasa.",
    "region": "Katanga monene",
    "imageAlt": "Brochettes de bœuf marinées avec accompagnements",
    "prepTime": "min. 25 + ngonga 1 marinade",
    "cookTime": "min. 15",
    "ingredients": [
      "700 g ya bœuf (tranche à brochettes)",
      "1 aluboka, râpé",
      "3 mikolo ya ail",
      "1 c. à café ya gingembre râpé",
      "2 lukwakulu ya mafuta",
      "1 c. à soupe ya jus ya citron",
      "muni, poivre, pili-pili",
      "Brochettes en bois"
    ],
    "steps": [
      "Couper la nyama en cubes réguliers.",
      "Mélanger aluboka, ail, gingembre, mafuta, citron, muni, poivre, piment. Enrober. Mariner 1 h au frais.",
      "Enfiler sur les brochettes sans trop serrer.",
      "Griller sur braises moyennes 12–15 minutes en retournant.",
      "Servir avec aluboka crus, pili-pili, etazi / andazi, ou frites."
    ],
    "tags": [
      "brochettes",
      "Lubumbashi",
      "Katanga",
      "street food",
      "bœuf"
    ],
    "body": "À **Lubumbashi**, les brochettes de rue ont le même geste que les [kamundele](/ln/recettes/kamundele/) de Kinshasa — marinade, braises, partage. Accompagnement local : [andazi](/ln/recettes/andazi-tanganyika/) ou [bukari](/ln/recettes/bukari-katanga/). Photo Commons : même famille de brochettes congolaises (crédit indiqué).",
    "seoTitle": "brochettes Lubumbashi — street food katanga"
  },
  "viande-sechee-tomates": {
    "title": "Viande séchée na tomatisi",
    "description": "nyama séchée aux tomatisi : morceaux réhydratés puis mijotés — protéine ya conserve ya Katanga monene mpe ya plateaux.",
    "region": "Katanga monene",
    "imageAlt": "Table de repas congolais avec sauces et accompagnements",
    "prepTime": "min. 20 + ngonga 1 kobomba",
    "cookTime": "min. 50",
    "ingredients": [
      "300 g ya nyama séchée (bœuf ou chèvre)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "400 ml ya mai"
    ],
    "steps": [
      "Tremper la nyama 45–60 minutes dans ya mai tièya. Rincer, découper en morceaux.",
      "Faire revenir aluboka mpe ail, ajouter tomatisi 8 minutes.",
      "Ajouter la nyama mpe mai. Mijoter à couvert 35–45 minutes jusqu'à tendreté.",
      "Rectifier le muni (souvent déjà salée). Pimenter.",
      "Servir avec bukari, pommes ya terre ou loso."
    ],
    "tags": [
      "viande séchée",
      "Katanga",
      "conserve",
      "tomatisi"
    ],
    "body": "La **nyama séchée** voyage bien sur les plateaux du Katanga — comme le [kapenta](/ln/recettes/kapenta-tomatisi/) côté lac. Ndeko « frais » en sauce : [nyama ya sauce](/ln/recettes/nyama-ya-sauce/).",
    "seoTitle": "nyama séchée — Katanga"
  },
  "loso-sauce-katanga": {
    "title": "Loso ya sauce",
    "description": "loso en sauce ya tomatisi (en lingala : loso ya sauce) — assiette Katanga / Sud-Est.",
    "region": "Katanga monene",
    "imageAlt": "Assiette de loso en sauce ya tomatisi, type loso ya sauce",
    "prepTime": "min. 20",
    "cookTime": "min. 45",
    "ingredients": [
      "400 g ya loso",
      "500 g ya bœuf ou ya soso en morceaux",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "300 ml ya mai pour la sauce"
    ],
    "steps": [
      "Cuire le loso à mai salée. Égoutter, réserver au chaud.",
      "Faire dorer la nyama dans mafuta. Réserver.",
      "Faire fondre aluboka mpe ail, ajouter tomatisi 8 minutes.",
      "Remettre la nyama, verser mai. Mijoter 25–30 minutes.",
      "Assaisonner. Servir la sauce sur ou à côté ya loso."
    ],
    "tags": [
      "loso",
      "riz",
      "Katanga",
      "Lubumbashi",
      "sauce tomate"
    ],
    "body": "Le **loso sauce ya tomatisi** (en lingala : *loso ya sauce*) à Lubumbashi : loso + sauce ya tomatisi, sans la mayonnaise du [loso mayonnaise](/ln/recettes/loso-mayonnaise/).",
    "seoTitle": "loso sauce ya tomatisi — Katanga"
  },
  "sambousa-pommes": {
    "title": "Sambousa aux pommes de terre",
    "description": "sambousa aux pommes ya terre : chaussons frits farcis — encas ya rue à Goma mpe dans l'Est, ndeko ya samosas d'Afrique ya l'Est.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Vendeur de sambousa aux pommes de terre à Goma",
    "prepTime": "min. 40",
    "cookTime": "min. 25",
    "ingredients": [
      "500 g ya pommes ya terre",
      "1 aluboka, mikatami",
      "2 mikolo ya ail",
      "1 c. à café ya curry ou ya cumin, ya lingi",
      "muni, poivre, pili-pili",
      "2 c. à soupe ya mafuta pour la farce",
      "250 g ya pâte à samosa / brick, ou pâte maison",
      "mafuta ya friture"
    ],
    "steps": [
      "Cuire les pommes ya terre, les écraser grossièrement.",
      "Faire revenir aluboka mpe ail, ajouter épices, puis les pommes. Assaisonner. Laisser refroidir.",
      "Découper la pâte en rectangles. Déposer une cuillerée ya farce, plier en triangle. Sceller à mai.",
      "Frire à feu moyen jusqu'à dorure (2–3 min par face). Égoutter.",
      "Salela chauds, éventuellement elongo na une sauce ya tomatisi ou pili-pili."
    ],
    "tags": [
      "sambousa",
      "samosa",
      "pommes de terre",
      "Goma",
      "street food"
    ],
    "body": "Les **sambousa** (samosas) aux pommes de terre sont un encas de **Goma** et de l'Est swahiliphone — photo de vendeur sur Commons. Cousins frits : [andazi](/ln/recettes/andazi-tanganyika/), [mikate](/ln/recettes/mikate/).",
    "seoTitle": "sambousa — chaussons pomme ya terre (Goma / Est)"
  },
  "moambe-boeuf": {
    "title": "Mwambe ya ngombe",
    "description": "bœuf na moambe : nyama mijotée dans la pulpe ya noix ya palme (moambe) — variante nyama ya grand classique congolaise.",
    "region": "Na RDC mobimba",
    "imageAlt": "Sauce graine / moambe onctueuse, base du bœuf à la moambe",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "1,2 kg ya bœuf à mijoter (paleron, jarret ou collier), na biteni",
      "400 ml ya pulpe to crème ya noix ya palme (moambe)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "muni, cube ya bouillon, pili-pili",
      "250 ml ya mai"
    ],
    "steps": [
      "Faire dorer les morceaux ya bœuf dans mafuta. Réserver.",
      "Dans la même marmite, faire revenir aluboka mpe ail, ajouter tomatisi jusqu'à sauce epaisse.",
      "Remettre la nyama, verser la moambe mpe mai. Couvrir.",
      "Mijoter à moto ya moke 1 h 15 à 1 h 30 en remuant, jusqu'à ce que la nyama soit tendre mpe la sauce nappe.",
      "Rectifier muni mpe piment. Servir avec loso, fufu ou chikwangue."
    ],
    "tags": [
      "moambe",
      "bœuf moambe",
      "mwamba",
      "noix de palme",
      "fête"
    ],
    "body": "Le **bœuf à la moambe** reprend la même sauce palmée que le [soso à la moambe](/ln/recettes/moambe-soso/) et le [mbisi à la moambe](/ln/recettes/mbisi-moambe/) : plus de temps de cuisson, même geste de patience. Accompagnement naturel : [loso à la moambe](/ln/recettes/loso-moambe/) ou [pondu](/ln/recettes/pondu/).",
    "seoTitle": "bœuf na moambe"
  },
  "pondu-poisson": {
    "title": "Pondu ya mbisi",
    "description": "pondu au mbisi (en lingala : pondu ya mbisi) : matabisi ya manioc (pondu) ebilisami na ya mbisi — variante ya pondu.",
    "region": "Kinshasa mpe Cuvette",
    "imageAlt": "matabisi ya manioc (pondu) fraîches, base du pondu au mbisi",
    "prepTime": "min. 40",
    "cookTime": "ngonga 1 min. 30",
    "ingredients": [
      "2 kg ya matabisi ya manioc (pondu), ya sika to congelé",
      "600 g ya mbisi (capitaine, tilapia ou mbisi ya fumé en morceaux)",
      "200 ml ya mafuta ya palmier rouge",
      "3 aluboka, mikatami",
      "4 mikolo ya ail, mikatami",
      "2 tomatisi, mibetami (ya lingi)",
      "2 cubes ya bouillon",
      "muni mpe pili-pili",
      "Mai"
    ],
    "steps": [
      "Laver mpe hacher finement matiti (ou utiliser un pondu déjà pilé). Ébouillanter brièvement si elles sont très amères.",
      "Faire revenir aluboka mpe ail dans mafuta ya palme. Ajouter tomatisi s'il y en a.",
      "Incorporer le pondu, bien l'enrober ya mafuta, mouiller d'un peu ya mai. Couvrir mpe mijoter 45 minutes à moto ya moke en remuant.",
      "Ajouter mbisi (frais déjà salé, ou fumé en morceaux) mpe le cube. Poursuivre 25 à 35 minutes jusqu'à texture crémeuse.",
      "Rectifier l'assaisonnement. Servir avec fufu, chikwangue ou loso."
    ],
    "tags": [
      "pondu",
      "pondu ya mbisi",
      "saka-saka",
      "mbisi",
      "mafuta ya palmier"
    ],
    "body": "Le **pondu au mbisi** (en lingala : *pondu ya mbisi*) place mbisi au centre, là où la fiche [pondu](/ln/recettes/pondu/) le laisse optionnel. Même famille de feuilles : [saka-madesu](/ln/recettes/saka-madesu/).",
    "seoTitle": "pondu au mbisi"
  },
  "loso-na-mbisi": {
    "title": "Loso na mbisi",
    "description": "loso au mbisi (en lingala : loso na mbisi) : loso ebilisami na ya mbisi — classique ya table kinshasaise.",
    "region": "Kinshasa",
    "imageAlt": "Assiette de loso servi avec du mbisi",
    "prepTime": "min. 20",
    "cookTime": "min. 45",
    "ingredients": [
      "400 g ya loso long grain, rincé",
      "600 g ya mbisi (tilapia, capitaine ou darnes), na biteni",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili, cube ya bouillon",
      "700 ml ya mai pour le loso"
    ],
    "steps": [
      "Faire dorer mbisi assaisonné dans mafuta. Réserver.",
      "Dans la même marmite, faire fondre aluboka mpe ail, ajouter tomatisi 8 minutes.",
      "Remettre mbisi, mouiller d'un demi-verre ya mai, mijoter 10 minutes à couvert.",
      "À part (ou dans une seconde marmite), cuire le loso dans mai salée jusqu'à absorption.",
      "Servir le loso nappé ya sauce mpe ya mbisi, ou mélanger doucement en fin ya cuisson si l'on veut un plat unique."
    ],
    "tags": [
      "loso na mbisi",
      "riz poisson",
      "Kinshasa",
      "mokolo na mokolo",
      "tomatisi"
    ],
    "body": "Le **loso au mbisi** (en lingala : *loso na mbisi*) complète le [loso aux haricots](/ln/recettes/loso-na-madesu/) et le [loso mayonnaise](/ln/recettes/loso-mayonnaise/) : ici mbisi porte le loso. Autre mbisi de table : [pondu au mbisi](/ln/recettes/pondu-mbisi/).",
    "seoTitle": "loso au mbisi"
  },
  "ngolo-grille": {
    "title": "Ngolo grillé",
    "description": "ngolo grillé : mbisi-chat mariné puis cuit sur braises — geste ya braise, distinct ya la pepe soupe ya ngolo.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "mbisi-chat africain (Clarias), espèce du ngolo",
    "prepTime": "min. 25 + min. 30 de marinade",
    "cookTime": "min. 25",
    "ingredients": [
      "1 ngolo (mbisi-chat) ya 1 à 1,2 kg, vidé mpe ouvert en portefeuille (ou 4 darnes)",
      "2 aluboka, râpés ou très finement mikatami",
      "4 mikolo ya ail, mikatami",
      "Jus ya 2 citrons",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "1 cube ya bouillon, émietté (ya lingi)"
    ],
    "steps": [
      "Inciser la chair. Mélanger aluboka, ail, citron, mafuta, muni, poivre, pili-pili mpe cube. Enrober mbisi. Mariner 30 minutes au frais.",
      "Préparer ya braises moyennes (ou un gril très chaud).",
      "Griller mbisi 10 à 14 minutes par côté selon l'épaisseur, en badigeonnant ya marinade.",
      "La chair doit se détacher facilement sans être sèche.",
      "Servir avec aluboka crus, pili-pili, chikwangue, plantain ou loso."
    ],
    "tags": [
      "ngolo",
      "poisson-chat",
      "grillade",
      "braise",
      "Kinshasa"
    ],
    "body": "Le **ngolo grillé** est le geste braise du mbisi-chat ; la [pepe soupe ya ngolo](/ln/recettes/pepe-soupe-ya-ngolo/) en est la version soupe. Autre braise du fleuve : [mbisi braisé à Kinkole](/ln/recettes/mbisi-braise-kinkole/). Frit : [mbisi ya kokalinga](/ln/recettes/mbisi-ya-kokalinga/).",
    "seoTitle": "ngolo grillé — mbisi-chat"
  },
  "crevettes-fleuve": {
    "title": "Crevettes ya ebale",
    "description": "crevettes ya Congo en sauce ya tomatisi mpe aluboka — bilei ya bassin fluvial, plus rare dans les catalogues mais courant quand le marché en a.",
    "region": "Basen ya Congo",
    "imageAlt": "Crevettes mijotées en sauce, illustration du plat",
    "prepTime": "min. 20",
    "cookTime": "min. 30",
    "ingredients": [
      "600 g ya crevettes ya mai douce (ou crevettes moyennes décortiquées)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "2 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "muni, poivre, pili-pili",
      "100 ml ya mai",
      "Jus d'un demi-citron (ya lingi)"
    ],
    "steps": [
      "Nettoyer les crevettes (ôter le boyau). Les saler légèrement.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi 8 minutes.",
      "Incorporer les crevettes, pili-pili mpe mai. Mijoter 12 à 15 minutes à feu moyen — elles doivent rester tendres.",
      "Rectifier le muni. Un filet ya citron en fin ya cuisson relève le goût.",
      "Servir avec loso, chikwangue ou plantain."
    ],
    "tags": [
      "crevettes",
      "fleuve Congo",
      "sauce tomate",
      "bassin du Congo",
      "fruits de mer"
    ],
    "body": "Les **crevettes du fleuve** (et des affluents) apparaissent dès que le marché fluvial est bon. Autre petit crustacé / séché du catalogue : [kossa-kossa](/ln/recettes/kossa-kossa/). Papillote mbisi : [liboke de mbisi](/ln/recettes/liboke-mbisi/).",
    "seoTitle": "crevettes ya fleuve — sauce ya tomatisi"
  },
  "liboke-legumes": {
    "title": "Liboke ya ndunda",
    "description": "liboke ya légumes : papillote ya légumes mpe aromates dans la feuille ya bananier — version végétale ya maboke, à côté ya liboke mbisi mpe nyama.",
    "region": "Bas-Congo mpe Bandundu",
    "imageAlt": "Liboke / papillote congolaise dans sa feuille",
    "prepTime": "min. 25",
    "cookTime": "min. 40",
    "ingredients": [
      "2 aubergines africaines ou 1 aubergine longue, en dés",
      "2 carottes, en bâtonnets",
      "Poivron 1, na lanières",
      "200 g ya haricots verts ou ya chou, en tronçons",
      "Aluboka 2, na rondelles",
      "Tomatisi 2, na tranches",
      "3 lukwakulu ya mafuta ya palmier",
      "muni, poivre, pili-pili, cube ya bouillon",
      "4 ndunda ya banane monene (ou papier cuisson + papier alu)"
    ],
    "steps": [
      "Mélanger tous les légumes avec mafuta, le muni, le poivre, pili-pili mpe le cube émietté.",
      "Assouplir matiti ya bananier au-dessus d'une flamme ou na mvuke.",
      "Répartir la farce en 4 papillotes. Fermer hermétiquement.",
      "Teká na mvuke to na four à 180 °C na 35 à 40 minutes.",
      "Salela les liboke ouverts à table, elongo na loso ou chikwangue."
    ],
    "tags": [
      "liboke",
      "maboke",
      "mboga",
      "ndunda ya banane",
      "vapeur",
      "végétal"
    ],
    "body": "Le **liboke de légumes** applique la technique du [liboke de mbisi](/ln/recettes/liboke-mbisi/) et du [liboke de nyama](/ln/recettes/liboke-nyama/) à une farce végétale — utile les jours sans nyama ou pour équilibrer la table. Autre plat d'aubergines : [aubergines africaines en sauce](/ln/recettes/aubergines-africaines/).",
    "seoTitle": "liboke ya légumes"
  },
  "brochettes-boeuf": {
    "title": "Brochettes ya ngombe",
    "description": "brochettes ya bœuf : gros cubes marinés mpe grillés — portion ya table / braise, distincte ya petites kamundele ya rue.",
    "region": "Kinshasa",
    "imageAlt": "Brochettes de nyama grillées sur braises",
    "prepTime": "min. 25 + ngonga 1 de marinade",
    "cookTime": "min. 20",
    "ingredients": [
      "800 g ya bœuf (rumsteck ou basse côte), en cubes ya 2–3 cm",
      "2 aluboka, dont un râpé",
      "3 mikolo ya ail, mikatami",
      "1 c. à café ya gingembre râpé",
      "30 ml ya jus ya citron",
      "3 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "8 brochettes en bois, trempées"
    ],
    "steps": [
      "Mélanger aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre mpe pili-pili. Enrober la nyama. Mariner 1 h au frais.",
      "Enfiler 4 à 5 cubes par brochette, sans trop serrer. Alterner avec ya rondelles d'aluboka si désiré.",
      "Griller sur braises moyennes 15 à 20 minutes en retournant, jusqu'à croûte fumée mpe cœur encore juteux.",
      "Servir avec aluboka cru, sauce pili-pili, frites ou pain."
    ],
    "tags": [
      "brochettes",
      "bœuf",
      "street food",
      "grillade",
      "Kinshasa"
    ],
    "body": "Les **brochettes de bœuf** de table sont plus généreuses que les [kamundele](/ln/recettes/kamundele/) (petits cubes de rue). Autre bœuf braise : [bœuf ya kotumba](/ln/recettes/boeuf-ya-kotumba/). Variante foie : [brochettes de foie](/ln/recettes/brochettes-foie/).",
    "seoTitle": "brochettes ya bœuf — grillade Kinshasa"
  },
  "brochettes-poulet": {
    "title": "Brochettes ya soso",
    "description": "brochettes ya soso : dés marinés mpe grillés — encas ya braise kinshasaise, à côté ya soso ya kotumba en pièces.",
    "region": "Kinshasa",
    "imageAlt": "Brochette de volaille grillée",
    "prepTime": "min. 20 + min. 45 de marinade",
    "cookTime": "min. 15",
    "ingredients": [
      "700 g ya blancs ou cuisses ya soso désossées, en cubes",
      "1 aluboka, râpé",
      "3 mikolo ya ail",
      "30 ml ya jus ya citron",
      "2 lukwakulu ya mafuta",
      "1 c. à café ya paprika ou piment doux (ya lingi)",
      "muni, poivre, pili-pili",
      "8 brochettes en bois, trempées"
    ],
    "steps": [
      "Mélanger aluboka, ail, citron, mafuta, paprika, muni, poivre mpe pili-pili. Enrober le soso. Mariner 45 minutes.",
      "Enfiler les cubes. Essuyer l'excès ya marinade pour qu'ils grillent bien.",
      "Griller 12 à 15 minutes sur braises moyennes en tournant souvent — la chair doit rester moelleuse.",
      "Salela aussitôt elongo na aluboka, pili-pili mpe frites ou loso."
    ],
    "tags": [
      "brochettes",
      "poulet",
      "street food",
      "grillade",
      "Kinshasa"
    ],
    "body": "Les **brochettes de soso** sont l'encas en bâton ; le [soso ya kotumba](/ln/recettes/soso-ya-kotumba/) reste le soso en pièces / entier. Cousines bœuf : [brochettes de bœuf](/ln/recettes/brochettes-boeuf/), [kamundele](/ln/recettes/kamundele/).",
    "seoTitle": "brochettes ya soso — street food"
  },
  "porc-ya-kotumba": {
    "title": "Ngulu ya kotumba",
    "description": "porc grillé (en lingala : porc ya kotumba / ngulu ya kotumba) : porc mariné puis cuit sur braises — ekeseni na porc braisé long mpe ya porc en sauce.",
    "region": "Kinshasa",
    "imageAlt": "Porc grillé doré, prêt à servir",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "min. 45",
    "ingredients": [
      "1,2 kg ya porc (épaule ou côtes), en gros morceaux",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail, mikatami",
      "2 cm ya gingembre, râpé",
      "30 ml ya jus ya citron",
      "3 lukwakulu ya mafuta",
      "Pili-pili, muni mpe poivre",
      "1 cube ya bouillon, ya lingi"
    ],
    "steps": [
      "Préparer la marinade (aluboka râpé, ail, gingembre, citron, mafuta, muni, poivre, pili-pili, cube).",
      "Enrober le porc mpe mariner au frais au moins 2 heures.",
      "Précuire 15 minutes à la marmite avec un fond ya mai mpe la marinade, pour attendrir.",
      "Égoutter puis griller sur braises moyennes 25 à 30 minutes en badigeonnant, jusqu'à croûte dorée mpe chair cuite.",
      "Servir avec aluboka cru, sauce pili-pili, frites ou plantain."
    ],
    "tags": [
      "porc",
      "kotumba",
      "grillade",
      "Kinshasa",
      "street food"
    ],
    "body": "Le **porc grillé** (en lingala : *porc ya kotumba* / *ngulu ya kotumba*) suit le geste grillade du [soso grillé](/ln/recettes/soso-ya-kotumba/) et du [bœuf grillé](/ln/recettes/boeuf-ya-kotumba/). Pour un mijoté : [porc en sauce](/ln/recettes/ngulu-ya-sauce/) ou [porc braisé](/ln/recettes/porc-braise/) plus long.",
    "seoTitle": "porc grillé — kotumba"
  },
  "tripes-mijotees": {
    "title": "Tripes mijotées",
    "description": "tripes mijotées à la tomatisi mpe à aluboka — plat d'abats ya quotidien / street food kinshasaise, longuement cuit.",
    "region": "Kinshasa",
    "imageAlt": "Tripes mijotées en sauce, illustration du plat",
    "prepTime": "min. 30",
    "cookTime": "ngonga 2",
    "ingredients": [
      "1,2 kg ya tripes ya bœuf, bien nettoyées mpe coupées",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "4 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "1 feuille ya laurier, ya lingi",
      "muni, poivre, pili-pili",
      "1,5 l ya mai"
    ],
    "steps": [
      "Blanchir les tripes 10 minutes dans une grande mai. Égoutter, rincer.",
      "Les couvrir ya mai fraîche, saler légèrement, ajouter le laurier. Mijoter 1 h 15 à 1 h 30 jusqu'à tendreté. Égoutter en réservant un peu ya bouillon.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi 8 minutes.",
      "Incorporer les tripes mpe un peu ya bouillon. Mijoter encore 20 à 25 minutes. Pimenter.",
      "Servir avec loso, frites, pain ou chikwangue."
    ],
    "tags": [
      "tripes",
      "abats",
      "mijoté",
      "Kinshasa",
      "mokolo na mokolo"
    ],
    "body": "Les **tripes mijotées** comptent parmi les abats de table à Kinshasa, à côté du [foie sauté](/ln/recettes/foie-boeuf-saute/) et des [brochettes de foie](/ln/recettes/brochettes-foie/). Autre long mijoté d'abats / pieds : [makosso](/ln/recettes/makosso-pommes/).",
    "seoTitle": "tripes mijotées — abats Kinshasa"
  },
  "spaghetti-kinshasa": {
    "title": "Spaghetti ya Kinshasa",
    "description": "spaghetti à la kinshasaise : pâtes nappées d'une sauce ya tomatisi-aluboka souvent enrichie ya nyama hachée ou ya sardines — street food / table ya quotidien.",
    "region": "Kinshasa",
    "imageAlt": "Spaghetti en sauce ya tomatisi, illustration du plat kinshasa",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "400 g ya spaghetti",
      "300 g ya nyama hachée ya bœuf (ou 1 boîte ya sardines à mafuta, égouttées)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami (ou 200 ml ya concentré dilué)",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "1 cube ya bouillon",
      "muni, poivre, pili-pili",
      "3 l ya mai pour les pâtes"
    ],
    "steps": [
      "Faire revenir aluboka mpe ail dans mafuta. Ajouter la nyama hachée mpe la faire colorer (ou réserver les sardines pour la fin).",
      "Incorporer tomatisi, le cube, muni, poivre mpe pili-pili. Mijoter 15 minutes jusqu'à sauce epaisse.",
      "Cuire les spaghetti al dente dans une grande mai salée. Égoutter.",
      "Mélanger pâtes mpe sauce (ajouter les sardines émiettées à ce moment si on les utilise).",
      "Salela chaud, éventuellement elongo na un œuf au plat ou ya pili-pili."
    ],
    "tags": [
      "spaghetti",
      "pâtes",
      "Kinshasa",
      "street food",
      "mokolo na mokolo",
      "tomatisi"
    ],
    "body": "Les **spaghetti Kinshasa** empruntent le format pâtes italiennes à une sauce locale tomatisi-aluboka — Ndeko urbain du [loso mayonnaise](/ln/recettes/loso-mayonnaise/) et du [loso na madesu](/ln/recettes/loso-na-madesu/). Autre assiette express : [saucisse-frites](/ln/recettes/saucisse-frites/).",
    "seoTitle": "spaghetti Kinshasa — pâtes sauce locale"
  },
  "patate-douce-frite": {
    "title": "Patate douce frite",
    "description": "patate douce frite : bâtonnets ou rondelles dorés à mafuta — version friture ya la mbala, distincte ya la mbala bouillie ou grillée.",
    "region": "Na RDC mobimba",
    "imageAlt": "Morceaux de patate douce frits",
    "prepTime": "min. 15",
    "cookTime": "min. 20",
    "ingredients": [
      "1 kg ya patates douces (mbala)",
      "500 ml ya mafuta ya friture",
      "1 c. à café ya muni",
      "Pili-pili pour servir"
    ],
    "steps": [
      "Éplucher les patates douces. Les couper en bâtonnets ou en rondelles d'environ 1 cm.",
      "\"ya lingi : les rincer mpe bien les sécher pour une friture plus croustillante.\"",
      "Chauffer mafuta à feu moyen. Frire par petites quantités 6 à 10 minutes jusqu'à doré.",
      "Égoutter sur papier. Saler aussitôt. Servir avec pili-pili ou une sauce ya tomatisi."
    ],
    "tags": [
      "patate douce",
      "mbala",
      "friture",
      "accompagnement",
      "street food"
    ],
    "body": "La **patate douce frite** est le geste friture ; la [mbala](/ln/recettes/mbala/) reste surtout bouillie, la [mbala grillée](/ln/recettes/mbala-grillee/) passe au feu. Cousine friture : [manioc frit (bâtons)](/ln/recettes/manioc-frites/), [makemba](/ln/recettes/makemba/).",
    "seoTitle": "patate douce frite — mbala frit"
  },
  "fufu-plantain": {
    "title": "Fufu ya libuma",
    "description": "fufu ya plantain : plantains bouillis puis pilés en pâte ya pete — féculent ya bassin / Cuvette, cousin ya lituma mpe ya fufu ya manioc.",
    "region": "Cuvette ya centrale",
    "imageAlt": "Foutou / fufu de banane plantain en boule",
    "prepTime": "min. 10",
    "cookTime": "min. 35",
    "ingredients": [
      "1,2 kg ya plantains verts ou semi-mûrs",
      "200 ml ya mai ya cuisson réservée",
      "1 c. à café ya muni"
    ],
    "steps": [
      "Éplucher les plantains. Les couper en tronçons. Les cuire dans une mai légèrement salée 20 à 25 minutes jusqu'à tendreté.",
      "Égoutter en gardant un peu ya mai ya cuisson.",
      "Piler au mortier (ou robot) en ajoutant mai chaude petit à petit, jusqu'à une pâte ya pete mpe élastique.",
      "Former ya baboule. Servir aussitôt avec sauce, mbisi ou nyama."
    ],
    "tags": [
      "fufu",
      "plantain",
      "pâte",
      "Cuvette",
      "accompagnement"
    ],
    "body": "Le **fufu de plantain** (proche du foutou banane) est une **pâte pilée**, pas la purée [lituma](/ln/recettes/lituma/) ni les [makemba](/ln/recettes/makemba/) frits. Autre pâte : [fufu de manioc](/ln/recettes/fufu-manioc/). Plantains vapeur natures : [plantains na mvuke](/ln/recettes/plantains-vapeur/).",
    "seoTitle": "fufu ya plantain — pâte banane"
  },
  "manioc-frites": {
    "title": "Manioc frit (bâtons)",
    "description": "manioc frit en bâtonnets : manioc précuit puis doré à mafuta — accompagnement / street food, ekeseni na manioc grillé mpe ya beignets ya manioc.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bâtonnets de manioc frits",
    "prepTime": "min. 20",
    "cookTime": "min. 35",
    "ingredients": [
      "1 kg ya manioc doux",
      "500 ml ya mafuta ya friture",
      "1 c. à café ya muni",
      "Pili-pili pour servir"
    ],
    "steps": [
      "Éplucher le manioc, retirer la fibre centrale, couper en bâtonnets.",
      "Cuire 15 à 20 minutes dans une mai salée jusqu'à tendreté sans se défaire. Égoutter mpe sécher.",
      "Chauffer mafuta. Frire les bâtonnets par petites quantités 5 à 8 minutes jusqu'à doré.",
      "Égoutter, saler. Servir chaud avec pili-pili ou mbisi grillé."
    ],
    "tags": [
      "manioc",
      "friture",
      "bâtonnets",
      "accompagnement",
      "street food"
    ],
    "body": "Le **manioc frit en bâtons** n'est pas le [manioc grillé](/ln/recettes/manioc-grille/) (braise) ni les [beignets de manioc](/ln/recettes/beignets-manioc/) (pâte). Autre friture tubercule : [patate douce frite](/ln/recettes/patate-douce-frite/), [croquettes de manioc](/ln/recettes/croquettes-manioc/).",
    "seoTitle": "manioc frit — bâtonnets"
  },
  "mais-grille": {
    "title": "Maïs grillé",
    "description": "maïs grillé : épis grillés sur braises jusqu'à grains fumés — encas ya rue mpe d'Est, distinct ya la bouillie ya maïs.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Épis de maïs grillés",
    "prepTime": "min. 5",
    "cookTime": "min. 20",
    "ingredients": [
      "4 épis ya maïs frais",
      "1 c. à soupe ya mafuta (ya lingi)",
      "1 c. à café ya muni",
      "Pili-pili ou citron pour servir"
    ],
    "steps": [
      "Retirer une partie ya spathes si besoin, garder une fine couche pour protéger, ou griller à nu.",
      "Poser les épis sur braises moyennes. Tourner toutes les 3 à 4 minutes pendant 15 à 20 minutes.",
      "Badigeonner d'un peu ya mafuta en fin ya cuisson si désiré. Saler.",
      "Salela chaud elongo na pili-pili ou un filet ya citron."
    ],
    "tags": [
      "maïs",
      "grillé",
      "street food",
      "Est",
      "Kivu"
    ],
    "body": "Le **maïs grillé** est l'encas de braise ; le [maïs bouilli](/ln/recettes/mais-bouilli/) reste à mai, la [bouillie de maïs](/ln/recettes/bouillie-mais/) est le goûter en crème. Farine de maïs en pâte : [bukari / bugali](/ln/recettes/bukari-katanga/).",
    "seoTitle": "maïs grillé — épis sur braises"
  },
  "mais-bouilli": {
    "title": "Maïs bouilli",
    "description": "maïs bouilli : épis cuits dans une mai salée jusqu'à grains tendres — accompagnement / encas simple, ekeseni na maïs grillé.",
    "region": "Na RDC mobimba",
    "imageAlt": "Épis de maïs bouillis",
    "prepTime": "min. 5",
    "cookTime": "min. 30",
    "ingredients": [
      "4 épis ya maïs frais",
      "2 l ya mai",
      "1 c. à café ya muni"
    ],
    "steps": [
      "Éplucher les épis. Les plonger dans une grande casserole ya mai salée.",
      "Porter à ébullition mpe cuire 25 à 35 minutes jusqu'à ce que les grains soient tendres.",
      "Égoutter. Servir chaud nature, avec un peu ya muni ou ya beurre / mafuta."
    ],
    "tags": [
      "maïs",
      "bouilli",
      "accompagnement",
      "simple"
    ],
    "body": "Le **maïs bouilli** est le geste mai ; le [maïs grillé](/ln/recettes/mais-grille/) passe au feu. Goûter liquide : [bouillie de maïs](/ln/recettes/bouillie-mais/).",
    "seoTitle": "maïs bouilli — épis à mai"
  },
  "igname-sauce": {
    "title": "Igname ya sauce",
    "description": "igname en sauce : igname bouillie puis nappée d'une sauce ya tomatisi-aluboka — plat / accompagnement ya Centre mpe ya la Cuvette, au-delà ya l'igname nature.",
    "region": "Cuvette ya centrale",
    "imageAlt": "Igname mijotée en sauce, illustration du plat",
    "prepTime": "min. 20",
    "cookTime": "min. 50",
    "ingredients": [
      "1 kg d'igname",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "3 lukwakulu ya mafuta",
      "200 ml ya mai",
      "1 c. à café ya muni",
      "Poivre, pili-pili"
    ],
    "steps": [
      "Éplucher l'igname, la couper en gros morceaux. La cuire 25 minutes dans une mai salée jusqu'à tendreté. Égoutter.",
      "Faire revenir aluboka mpe ail dans mafuta, ajouter tomatisi 8 minutes.",
      "Incorporer l'igname mpe mai. Mijoter 15 minutes à moto ya moke pour que la sauce nappe les morceaux.",
      "Rectifier muni mpe piment. Servir chaud, éventuellement avec mbisi ya fumé à part."
    ],
    "tags": [
      "igname",
      "sauce tomate",
      "Cuvette",
      "tubercule"
    ],
    "body": "L'**igname en sauce** prolonge l'[igname bouillie](/ln/recettes/igname-bouillie/) : même tubercule, sauce ya tomatisi qui porte le plat. Autre tubercule mijoté : [taro mijoté](/ln/recettes/taro-mijote/). Snack frit : [beignets d'igname](/ln/recettes/beignets-igname/).",
    "seoTitle": "igname en sauce ya tomatisi"
  },
  "poisson-kisangani": {
    "title": "Mbisi ya Kisangani",
    "description": "mbisi Kisangani : mbisi d'mai douce mariné puis mijoté tomatisi-aluboka — assiette ya fleuve Congo à Kisangani, à côté ya la salade locale.",
    "region": "Kisangani",
    "imageAlt": "mbisi grillé / cuit, illustration d'un plat de fleuve",
    "prepTime": "min. 25 + min. 20 de marinade",
    "cookTime": "min. 35",
    "ingredients": [
      "1 kg ya mbisi ya mai douce (capitaine, tilapia ou équivalent), en darnes ou entier vidé",
      "Jus ya 2 citrons",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail, mikatami",
      "3 lukwakulu ya mafuta",
      "200 ml ya mai",
      "1 cube ya bouillon, émietté (ya lingi)",
      "muni, poivre, pili-pili"
    ],
    "steps": [
      "Inciser mbisi. Le frotter ya citron, muni, poivre, ail mpe pili-pili. Mariner 20 minutes.",
      "Faire revenir aluboka dans mafuta 5 minutes. Ajouter tomatisi mpe cube. Réduire 8 minutes.",
      "Poser mbisi dans la sauce, ajouter mai. Couvrir mpe mijoter 20 à 25 minutes à feu moyen, en arrosant.",
      "Rectifier l'assaisonnement. La chair doit se détacher facilement.",
      "Servir avec loso, plantain ou chikwangue, mpe idéalement une [salade chou-carotte](/recettes/salade-kisangani/)."
    ],
    "tags": [
      "Kisangani",
      "mbisi",
      "fleuve",
      "mijoté",
      "tomatisi"
    ],
    "body": "Le **mbisi Kisangani** porte le geste mijoté du marché du fleuve : moins « braise pure » que le [mbisi de Kinkole](/ln/recettes/mbisi-braise-kinkole/), plus sauce que le [ngolo grillé](/ln/recettes/ngolo-grille/). Sur la même table locale : [salade Kisangani](/ln/recettes/salade-kisangani/).",
    "seoTitle": "mbisi Kisangani — mijoté ya fleuve"
  },
  "mbisi-na-kwanga": {
    "title": "Mbisi na chikwangue",
    "description": "mbisi servi na chikwangue (en lingala : mbisi na kwanga) — duo classique ya Kongo-Central.",
    "region": "Kongo-Central",
    "imageAlt": "Kwanga / chikwangue, pain de manioc",
    "prepTime": "min. 20",
    "cookTime": "min. 40",
    "ingredients": [
      "800 g ya mbisi frais ou légèrement fumé, na biteni",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "3 c. à soupe ya mafuta ya palmier ou ya mafuta neutre",
      "150 ml ya mai",
      "muni, poivre, pili-pili",
      "1 à 2 bâtons ya kwanga / chikwangue pour servir"
    ],
    "steps": [
      "Faire revenir aluboka mpe ail dans mafuta 5 minutes. Ajouter tomatisi, saler, poivrer. Réduire 8 minutes.",
      "Incorporer mbisi mpe mai. Mijoter couvert 15 à 20 minutes à moto ya moke jusqu'à ce que la chair soit cuite.",
      "Découvrir en fin ya cuisson pour napper d'une sauce courte. Ajuster pili-pili.",
      "Réchauffer ou griller légèrement la kwanga (voir aussi [chikwangue grillée](/recettes/chikwangue-grillee/)).",
      "Salela mbisi mpe sa sauce elongo na ya tranches ya kwanga pour prendre la sauce."
    ],
    "tags": [
      "mbisi",
      "kwanga",
      "chikwangue",
      "Kongo-Central",
      "mbisi"
    ],
    "body": "Le **mbisi avec chikwangue** (en lingala : *mbisi na kwanga*) est l'assiette du Kongo-Central : la pâte de manioc remplace souvent le loso. Autre classique ouest : [fumbwa aux nguba](/ln/recettes/fumbwa-nguba/).",
    "seoTitle": "mbisi mpe chikwangue — Kongo-Central"
  },
  "nsafu-sauce": {
    "title": "Nsafu ya sauce",
    "description": "nsafu en sauce : safous assouplis puis liés à une sauce aluboka-tomatisi courte — version mijotée, distincte ya nsafu grillés.",
    "region": "RDC ya bwé",
    "imageAlt": "Chair de nsafu / safou assouplie, prête à lier",
    "prepTime": "min. 15",
    "cookTime": "min. 25",
    "ingredients": [
      "10 nsafu (safous) bien mûrs",
      "1 aluboka, mikatami",
      "2 tomatisi, mibetami (ou 2 c. à soupe ya concentré dilué)",
      "2 lukwakulu ya mafuta",
      "100 ml ya mai",
      "muni, pili-pili"
    ],
    "steps": [
      "Assouplir les nsafu 5 à 8 minutes na mvuke ou dans une mai frémissante (peau qui cèya). Égoutter, ouvrir, retirer les noyaux, récupérer la chair.",
      "Faire revenir aluboka dans mafuta 4 minutes. Ajouter tomatisi, saler. Réduire 6 minutes.",
      "Incorporer la chair ya nsafu mpe mai. Mijoter 8 à 10 minutes à moto ya moke en écrasant légèrement pour lier — la sauce doit rester crémeuse, pas trop liquide.",
      "Rectifier muni mpe piment. Servir chaud avec plantain, loso ou kwanga."
    ],
    "tags": [
      "nsafu",
      "safou",
      "sauce",
      "Ouest",
      "saison"
    ],
    "body": "Le **nsafu en sauce** prolonge la saison du safou au-delà du snack : les [nsafu grillés](/ln/recettes/nsafu-grilles/) restent le geste braise ; ici la chair beurrée lie une sauce courte. Boisson de saison : [jus de safou](/ln/recettes/jus-safou/).",
    "seoTitle": "nsafu / safou en sauce"
  },
  "nyama-bugali-kivu": {
    "title": "Nyama na bugali",
    "description": "nyama au bugali (en swahili / lingala ya table : nyama na bugali) — nyama en sauce na pâte ya maïs ya Kivu.",
    "region": "Nord-Kivu & Sud-Kivu",
    "imageAlt": "Assiette ugali / bugali avec nyama en sauce",
    "prepTime": "min. 25",
    "cookTime": "ngonga 1 min. 15",
    "ingredients": [
      "800 g ya bœuf (jarret ou paleron), en cubes",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami",
      "3 mikolo ya ail",
      "1 c. à café ya gingembre râpé (ya lingi)",
      "3 lukwakulu ya mafuta",
      "500 ml ya mai",
      "1 cube ya bouillon (ya lingi)",
      "muni, poivre, pili-pili",
      "Bugali pour servir (voir fiches bugali / bukari)"
    ],
    "steps": [
      "Faire revenir la nyama dans mafuta jusqu'à coloration, 8 à 10 minutes. Réserver.",
      "Dans la même casserole, faire fondre aluboka 5 minutes. Ajouter ail, gingembre, tomatisi mpe cube. Réduire 8 minutes.",
      "Remettre la nyama, ajouter mai. Saler légèrement. Couvrir mpe mijoter 50 à 60 minutes à moto ya moke jusqu'à tendreté.",
      "Découvrir pour épaissir la sauce si besoin. Rectifier piment mpe muni.",
      "Préparer le bugali à part. Servir la nyama nappée à côté ou sur le bugali, éventuellement avec [sukuma](/recettes/sukuma-est/)."
    ],
    "tags": [
      "nyama",
      "bugali",
      "Kivu",
      "viande",
      "Est"
    ],
    "body": "La **nyama au bugali** (en lingala / swahili de table : *nyama na bugali*) est le pendant nyama du [tilapia au bugali](/ln/recettes/tilapia-bugali/) : même pâte de maïs de l'Est, sauce longue. Pour la pâte seule : [bukari / bugali](/ln/recettes/bukari-katanga/).",
    "seoTitle": "nyama au bugali — Kivu"
  },
  "liboke-champignons": {
    "title": "Liboke ya mayebo",
    "description": "liboke ya champignons : champignons comestibles mpe aromates en papillote ya feuille ya bananier — variante Bandundu ya maboke, distincte ya mayebo en sauce.",
    "region": "Bandundu monene",
    "imageAlt": "Maboke / liboke dans sa feuille de bananier",
    "prepTime": "min. 25",
    "cookTime": "min. 40",
    "ingredients": [
      "700 g ya champignons comestibles fermes (cultivés ou formellement identifiés)",
      "Aluboka 1, na rondelles",
      "Tomatisi 2, na tranches",
      "2 mikolo ya ail, mikatami",
      "3 lukwakulu ya mafuta ya palmier",
      "muni, poivre, pili-pili, cube ya bouillon émietté (ya lingi)",
      "4 ndunda ya banane monene (ou papier cuisson + papier alu)"
    ],
    "steps": [
      "Employer uniquement ya champignons cultivés ou formellement identifiés comme comestibles. Les nettoyer mpe les couper en morceaux.",
      "Mélanger champignons, aluboka, tomatisi, ail, mafuta, muni, poivre, piment mpe cube.",
      "Assouplir matiti ya bananier au-dessus d'une flamme ou na mvuke.",
      "Répartir en 4 papillotes. Fermer hermétiquement.",
      "Teká na mvuke to na four à 180 °C na 35 à 40 minutes. Servir ouverts à table avec chikwangue ou loso."
    ],
    "tags": [
      "liboke",
      "maboke",
      "champignons",
      "Bandundu",
      "ndunda ya banane"
    ],
    "body": "Le **liboke de champignons** applique la technique du [liboke de mbisi](/ln/recettes/liboke-mbisi/) aux champignons de saison — papillote, pas casserole. En sauce ouverte : [mayebo aux tomatisi](/ln/recettes/mayebo/). Autre plat Bandundu : [mbinzo aux tomatisi](/ln/recettes/mbinzo-tomatisi/).",
    "seoTitle": "liboke ya champignons — maboke"
  },
  "taro-sauce": {
    "title": "Taro ya nguba",
    "description": "taro en sauce nguba : taro blanchi puis nappé d'une sauce aux nguba — variante Cuvette, distincte ya taro mijoté tomatisi.",
    "region": "Cuvette ya centrale",
    "imageAlt": "Tubercules de taro / malanga",
    "prepTime": "min. 25",
    "cookTime": "min. 50",
    "ingredients": [
      "1 kg ya taro (malanga), épluché",
      "120 g ya pâte d'nguba (ou beurre d'nguba non sucré)",
      "1 aluboka, mikatami",
      "2 tomatisi, mibetami (ya lingi, pour acidité)",
      "2 mikolo ya ail",
      "2 lukwakulu ya mafuta",
      "400 ml ya mai",
      "muni, pili-pili"
    ],
    "steps": [
      "Couper le taro en morceaux. Blanchir 10 minutes dans mai bouillante, égoutter (certains taros irritent s'ils sont crus).",
      "Faire revenir aluboka mpe ail dans mafuta 4 minutes. Ajouter tomatisi si utilisées, 5 minutes.",
      "Diluer la pâte d'nguba dans mai chaude jusqu'à consistance lisse. Verser dans la casserole. Saler.",
      "Ajouter le taro. Mijoter 25 à 30 minutes à moto ya moke en remuant souvent pour éviter que la sauce accroche, jusqu'à tendreté.",
      "Rectifier piment. Servir chaud, éventuellement avec mbisi ya fumé à part."
    ],
    "tags": [
      "taro",
      "malanga",
      "arachide",
      "Cuvette",
      "sauce"
    ],
    "body": "Le **taro en sauce nguba** partage le tubercule avec le [taro mijoté](/ln/recettes/taro-mijote/) (sauce ya tomatisi) mais suit la logique de la [sauce nguba](/ln/recettes/sauce-nguba/). Ndeko igname : [igname en sauce](/ln/recettes/igname-sauce/).",
    "seoTitle": "taro en sauce nguba"
  },
  "jus-tamarin": {
    "title": "Mai ya tamarin",
    "description": "jus ya tamarin : pulpe ya tamarinier diluée, sucrée mpe filtrée — boisson acidulée ya Kinshasa mpe ya l'Ouest, à côté ya bissap mpe ya tangawisi.",
    "region": "Kinshasa & Ouest de la RDC",
    "imageAlt": "Verre de jus de tamarin frais",
    "prepTime": "min. 15 + refroidissement",
    "cookTime": "min. 10",
    "ingredients": [
      "200 g ya pulpe ya tamarin (avec ou sans graines, selon le paquet)",
      "1,5 l ya mai",
      "100 à 150 g ya sucre",
      "Jus d'1/2 citron (ya lingi)",
      "Une pincée ya muni (ya lingi, pour relever)"
    ],
    "steps": [
      "Faire tremper la pulpe dans 500 ml ya mai tièya 10 minutes. Malaxer pour détacher la chair ya fibres mpe graines.",
      "Ajouter le reste ya mai. Filtrer au chinois ou à la passoire fine en pressant bien.",
      "Sucrer encore tièya ou à froid jusqu'au goût. Ajouter citron mpe muni si désiré.",
      "Réfrigérer au moins 1 heure. Servir glacé."
    ],
    "tags": [
      "tamarin",
      "jus",
      "boisson",
      "acidulé",
      "Kinshasa"
    ],
    "body": "Le **jus de tamarin** joue l'acidulé fruité là où le [bissap](/ln/recettes/jus-bissap/) tire sur la fleur et le [tangawisi](/ln/recettes/tangawisi/) sur le gingembre. Pulpe en bloc du marché ou en pâte concentrée : ajuster mai et le sucre.",
    "seoTitle": "jus ya tamarin — boisson acidulée"
  },
  "malafu-vin-palme": {
    "title": "Malafu (vin de palme)",
    "description": "Malafu (vin ya palme) : boisson traditionnelle à base ya sève ya palmier, à acheter fraîche auprès ya vendeurs ya confiance — fiche ya service mpe d'accord mets, pas d'extraction maison.",
    "region": "Kongo-Central",
    "imageAlt": "Vin de palme servi dans un récipient",
    "prepTime": "min. 5",
    "cookTime": "min. 0",
    "ingredients": [
      "1 l ya malafu / vin ya palme frais (commerce ou producteur ya confiance)",
      "Glaçons ou mai fraîche pour servir (ya lingi)",
      "Une pincée ya sucre seulement si le lot est très acide (ya lingi)"
    ],
    "steps": [
      "\"Ne pas taper un palmier ni fermenter ya sève soi-même : risque sanitaire mpe réglementaire. S'approvisionner uniquement en malafu déjà conditionné ou vendu frais par un circuit connu.\"",
      "\"Choisir un lot ya jour : odeur franche ya sève fermentée légère, sans moisissure ni goût ya solvant.\"",
      "\"Servir frais, éventuellement légèrement frais au réfrigérateur (quelques heures). Ne pas faire bouillir : la chaleur casse le profil.\"",
      "Consommer le jour même ou le lendemain au plus tard ; jeter si l'odeur tourne ou si un film inhabituel apparaît.",
      "\"Accorder avec grillades, [mbisi na kwanga](/recettes/mbisi-na-kwanga/), [nsafu](/recettes/nsafu-grilles/) ou goûter nature. Boisson alcoolisée : réservée aux adultes.\""
    ],
    "tags": [
      "malafu",
      "vin de palme",
      "boisson",
      "Kongo-Central",
      "tradition"
    ],
    "body": "Le **malafu** (vin de palme) est une boisson de l'Ouest et du Kongo-Central, souvent vendue fraîche le long des routes. Cette fiche documente le **service** et les accords — comme pour d'autres boissons fermentées du catalogue ([munkoyo](/ln/recettes/munkoyo/)), sans guide d'extraction. Autre boisson non alcoolisée de table : [jus de bissap](/ln/recettes/jus-bissap/).",
    "seoTitle": "Malafu — vin ya palme congolaise (service)"
  },
  "gateau-arachide": {
    "title": "Gâteau à l'arachide",
    "description": "gâteau à l'nguba : cake moelleux à la pâte ou farine d'nguba — dessert / goûter nationwide, cousin ya gâteau au manioc.",
    "region": "Na RDC mobimba",
    "imageAlt": "Gâteau ou cake à l'nguba coupé",
    "prepTime": "min. 20",
    "cookTime": "min. 40",
    "ingredients": [
      "150 g ya pâte d'nguba (non sucrée) ou 120 g ya beurre d'nguba + 30 g ya mafuta",
      "150 g ya farine ya blé",
      "120 g ya sucre",
      "3 œufs",
      "100 ml ya lait",
      "1 sachet ya levure chimique (11 g)",
      "1 pincée ya muni",
      "1 c. à café ya vanille"
    ],
    "steps": [
      "Préchauffer le four à 180 °C. Beurrer un moule.",
      "Battre œufs mpe sucre jusqu'à blanchiment. Ajouter la pâte d'nguba, le lait mpe la vanille.",
      "Incorporer la farine, la levure mpe le muni. Mélanger juste jusqu'à homogénéité.",
      "Verser dans le moule. Cuire 35 à 45 minutes jusqu'à ce qu'un couteau ressort propre.",
      "Laisser tiédir avant ya démouler. Servir en parts, nature ou avec un peu ya lait."
    ],
    "tags": [
      "arachide",
      "gâteau",
      "dessert",
      "goûter"
    ],
    "body": "Le **gâteau à l'nguba** porte le goût de nguba en version sucrée — distinct de la [bouillie d'nguba](/ln/recettes/bouillie-nguba/) et du [gâteau au manioc](/ln/recettes/gateau-manioc/). En confiserie croquante : [bonbons d'nguba](/ln/recettes/bonbons-nguba/).",
    "seoTitle": "gâteau nguba — cake congolaise"
  },
  "bananes-caramel": {
    "title": "Bananes ya caramel",
    "description": "bananes au caramel : bananes douces poêlées dans un caramel sucre-beurre — dessert rapide nationwide, distinct ya beignets ya banane.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bananes nappées de caramel, dessert",
    "prepTime": "min. 10",
    "cookTime": "min. 15",
    "ingredients": [
      "4 bananes douces mûres mais fermes",
      "80 g ya sucre",
      "40 g ya beurre (ou 3 c. à soupe ya mafuta)",
      "2 c. à soupe ya mai",
      "1 pincée ya muni",
      "1/2 c. à café ya vanille ou une pincée ya muscade (ya lingi)"
    ],
    "steps": [
      "Éplucher les bananes. Les couper en deux dans la longueur ou en tronçons biais.",
      "Dans une poêle large, faire fondre le sucre avec mai à feu moyen jusqu'à un caramel blond (ne pas brûler).",
      "Hors ya feu, ajouter le beurre mpe le muni ; remuer (attention aux éclaboussures). Remettre à moto ya moke.",
      "Poser les bananes. Cuire 2 à 3 minutes par face en les nappant ya caramel.",
      "Parfumer à la vanille si désiré. Servir tièya, éventuellement avec lait caillé ou glace."
    ],
    "tags": [
      "banane",
      "caramel",
      "dessert",
      "poêle"
    ],
    "body": "Les **bananes au caramel** sont le dessert poêle ; les [beignets de banane](/ln/recettes/beignets-banane/) passent par la friture, les [bananes douces vapeur](/ln/recettes/bananes-douces-vapeur/) restent nature. Plantain salé frit : [makemba](/ln/recettes/makemba/).",
    "seoTitle": "bananes au caramel"
  },
  "lait-caille": {
    "title": "Lait caillé",
    "description": "lait caillé : lait laissé aciduler proprement jusqu'à prise douce — dessert / goûter nationwide, servi nature ou sucré.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bol de lait caillé",
    "prepTime": "min. 10 + 12 à ngonga 24 de prise",
    "cookTime": "min. 5",
    "ingredients": [
      "1 l ya lait entier pasteurisé",
      "2 c. à soupe ya lait caillé déjà pris ou ya yaourt nature non sucré (ferments)",
      "Sucre ou miel pour servir (ya lingi)",
      "Une pincée ya muscade ou vanille (ya lingi)"
    ],
    "steps": [
      "\"Hygiène : récipient mpe ustensiles très propres. Ne pas utiliser ya lait déjà douteux.\"",
      "Tiédir le lait jusqu'à environ 37–40 °C (tièya au doigt, pas brûlant). Hors ya feu.",
      "Incorporer les ferments en mélangeant doucement. Couvrir d'un linge propre.",
      "Laisser à température ambiante tièya 12 à 24 heures jusqu'à prise (texture ya yaourt souple). Puis réfrigérer.",
      "Servir froid, nature ou légèrement sucré. Jeter en cas d'odeur anormale, ya moisissure ou ya séparation inhabituelle."
    ],
    "tags": [
      "lait",
      "caillé",
      "dessert",
      "fermentation",
      "goûter"
    ],
    "body": "Le **lait caillé** maison reste une prise lactique courte contrôlée — pas une fermentation hasardeuse. Autres goûters crémeux : [bouillie d'nguba](/ln/recettes/bouillie-nguba/), [bouillie de maïs](/ln/recettes/bouillie-mais/). En dessert fruité : [bananes au caramel](/ln/recettes/bananes-caramel/).",
    "seoTitle": "lait caillé — dessert / boisson"
  },
  "bonbons-arachide": {
    "title": "Bonbons d'arachide",
    "description": "bonbons d'nguba : nguba grillées liées au caramel ya sucre — confiserie croquante nationwide, distincte ya gâteau à l'nguba.",
    "region": "Na RDC mobimba",
    "imageAlt": "Bonbons d'nguba au caramel",
    "prepTime": "min. 15",
    "cookTime": "min. 20",
    "ingredients": [
      "250 g d'nguba décortiquées",
      "200 g ya sucre",
      "50 ml ya mai",
      "1 pincée ya muni",
      "1 c. à café ya beurre ou ya mafuta (ya lingi, pour démoulage)"
    ],
    "steps": [
      "Faire griller nguba à sec dans une poêle 5 à 8 minutes en remuant. Laisser tiédir ; frotter pour enlever une partie ya peaux si désiré.",
      "Beurrer légèrement une plaque ou un plat.",
      "Bila sucre mpe mai tii ebukana sans remuer trop tôt. Cuire jusqu'à caramel blond soutenu.",
      "Hors ya feu, ajouter muni mpe nguba. Mélanger vite pour enrober.",
      "Étaler sur la plaque. Laisser durcir, puis casser en morceaux. Stocker au sec."
    ],
    "tags": [
      "arachide",
      "bonbon",
      "caramel",
      "confiserie",
      "goûter"
    ],
    "body": "Les **bonbons d'nguba** sont la version croquante ; le [gâteau à l'nguba](/ln/recettes/gateau-nguba/) reste un cake. Attention au caramel très chaud. Autre goûter frit : [mikate](/ln/recettes/mikate/).",
    "seoTitle": "bonbons d'nguba — confiserie"
  },
  "crevettes-grillees": {
    "title": "Crevettes ya kotumba",
    "description": "crevettes grillées : crevettes marinées puis cuites sur braises ou poêle très chaude — geste braise, distinct ya crevettes ya fleuve en sauce.",
    "region": "Kinshasa & bassin du Congo",
    "imageAlt": "Brochettes de crevettes grillées",
    "prepTime": "min. 20 + min. 20 de marinade",
    "cookTime": "min. 10",
    "ingredients": [
      "700 g ya crevettes moyennes (fraîches ou décongelées), décortiquées ou non",
      "Jus ya 2 citrons",
      "3 mikolo ya ail, mikatami",
      "2 lukwakulu ya mafuta",
      "muni, poivre, pili-pili",
      "1 aluboka, na rondelles (ya lingi, pour servir)"
    ],
    "steps": [
      "Nettoyer les crevettes (ôter le boyau). Les mélanger avec citron, ail, mafuta, muni, poivre mpe pili-pili. Mariner 20 minutes au frais.",
      "Préparer ya braises vives ou une poêle/gril très chaud.",
      "Griller 2 à 3 minutes par face jusqu'à rose mpe légèrement marquées — ne pas dessécher.",
      "Salela aussitôt elongo na aluboka, citron, pili-pili, plantain ou loso."
    ],
    "tags": [
      "crevettes",
      "grillade",
      "braise",
      "fruits de mer",
      "Kinshasa"
    ],
    "body": "Les **crevettes grillées** sont le geste braise ; les [crevettes du fleuve en sauce](/ln/recettes/crevettes-fleuve/) mijotent. Autre petite frite / séchée du catalogue : [kossa-kossa](/ln/recettes/kossa-kossa/). mbisi de braise : [Kinkole](/ln/recettes/mbisi-braise-kinkole/).",
    "seoTitle": "crevettes grillées — braises"
  },
  "cotes-porc": {
    "title": "Côtes de porc braisées",
    "description": "côtes ya porc braisées : travers marinés puis précuits mpe finis sur braises — pièce ya grillade, distincte ya porc ya kotumba mpe ya porc braisé en morceaux.",
    "region": "Kinshasa",
    "imageAlt": "Côtes de porc / travers grillés",
    "prepTime": "min. 25 + ngonga 2 de marinade",
    "cookTime": "ngonga 1 min. 10",
    "ingredients": [
      "1,2 kg ya côtes / travers ya porc, na biteni",
      "2 aluboka, dont un râpé",
      "4 mikolo ya ail",
      "2 cm ya gingembre, râpé",
      "Jus ya 2 citrons",
      "3 lukwakulu ya mafuta",
      "1 cube ya bouillon, émietté (ya lingi)",
      "muni, poivre, pili-pili",
      "200 ml ya mai pour la précuisson"
    ],
    "steps": [
      "Mélanger aluboka râpé, ail, gingembre, citron, mafuta, cube, muni, poivre mpe pili-pili. Enrober les côtes. Mariner 2 heures au frais.",
      "Précuire à couvert 35 à 45 minutes avec mai mpe la marinade jusqu'à ce que la nyama commence à se détacher.",
      "Égoutter en réservant le jus. Braiser sur braises moyennes 20 à 25 minutes en badigeonnant, jusqu'à croûte dorée.",
      "Servir avec aluboka crus, pili-pili, chikwangue ou plantain."
    ],
    "tags": [
      "porc",
      "côtes",
      "braise",
      "grillade",
      "Kinshasa"
    ],
    "body": "Les **côtes de porc** jouent la pièce à os ; le [porc braisé](/ln/recettes/porc-braise/) part souvent d'épaule/échine, le [porc ya kotumba](/ln/recettes/porc-ya-kotumba/) vise le snack grillé. En sauce : [ngulu ya sauce](/ln/recettes/ngulu-ya-sauce/).",
    "seoTitle": "côtes ya porc — braises Kinshasa"
  },
  "mikila-arachide": {
    "title": "Mikila ya nguba",
    "description": "mikila à l'nguba : queue ya bœuf longuement mijotée dans une sauce aux nguba — variante diaspora / Kinshasa, distincte ya la mikila tomatisi.",
    "region": "Kinshasa",
    "imageAlt": "Ragoût de bœuf à la sauce nguba, illustration",
    "prepTime": "min. 30",
    "cookTime": "ngonga 2 min. 30",
    "ingredients": [
      "1,5 kg ya queue ya bœuf, coupée en tronçons",
      "150 g ya pâte d'nguba (non sucrée)",
      "Aluboka 2, mikatami",
      "3 tomatisi, mibetami (ya lingi, pour acidité)",
      "3 mikolo ya ail",
      "2 cm ya gingembre, râpé",
      "3 lukwakulu ya mafuta",
      "800 ml ya mai",
      "1 cube ya bouillon (ya lingi)",
      "muni, poivre, pili-pili"
    ],
    "steps": [
      "Dorer les tronçons ya queue dans mafuta 8 à 10 minutes. Réserver.",
      "Faire fondre aluboka 5 minutes. Ajouter ail, gingembre mpe tomatisi si utilisées. Réduire 8 minutes.",
      "Remettre la nyama, ajouter assez ya mai pour couvrir à moitié, le cube, muni mpe poivre. Couvrir mpe mijoter 1 h 30 à moto ya moke.",
      "Diluer la pâte d'nguba dans un peu ya bouillon chaud. Verser dans la marmite. Mijoter encore 45 à 60 minutes en remuant souvent, jusqu'à nyama très tendre mpe sauce epaisse.",
      "Rectifier piment. Servir avec fufu, loso ou chikwangue."
    ],
    "tags": [
      "mikila",
      "queue de bœuf",
      "arachide",
      "sauce",
      "fête"
    ],
    "body": "La **mikila à l'nguba** reprend la queue de la [mikila](/ln/recettes/mikila/) (sauce ya tomatisi) mais suit la logique de la [sauce nguba](/ln/recettes/sauce-nguba/). Plat long, collagène fondant — tablée de fête ou diaspora.",
    "seoTitle": "mikila nguba — queue ya bœuf"
  },
  "chou-kinshasa": {
    "title": "Chou ya Kinshasa",
    "description": "chou mijoté façon Kinshasa : chou blanc à aluboka, tomatisi mpe un peu d'mafuta ya palmier — légume ya table capital, ekeseni na chou mijoté ya l'Est.",
    "region": "Kinshasa",
    "imageAlt": "Chou mijoté en sauce",
    "prepTime": "min. 15",
    "cookTime": "min. 30",
    "ingredients": [
      "1 petit chou blanc, mikatami",
      "Aluboka 2, mikatami",
      "2 tomatisi, mibetami",
      "2 mikolo ya ail",
      "2 c. à soupe ya mafuta ya palmier (ou mafuta neutre)",
      "1 cube ya bouillon, émietté (ya lingi)",
      "muni, poivre, pili-pili",
      "100 ml ya mai"
    ],
    "steps": [
      "Faire fondre aluboka mpe ail dans mafuta 5 minutes. Ajouter tomatisi mpe cube 5 minutes.",
      "Incorporer le chou, saler, poivrer. Remuer pour enrober.",
      "Ajouter mai, couvrir mpe mijoter 18 à 25 minutes jusqu'à tendreté (Kinshasa le préfère souvent un peu plus cuit que croquant).",
      "Découvrir 2 minutes si trop ya mai. Rectifier piment.",
      "Servir avec loso, fufu, mbisi ou nyama grillée."
    ],
    "tags": [
      "chou",
      "Kinshasa",
      "mboga",
      "accompagnement",
      "mokolo na mokolo"
    ],
    "body": "Le **chou Kinshasa** est le Ndeko capital du [chou mijoté de l'Est](/ln/recettes/chou-mijote-est/) : même légume, plus souvent mafuta ya palmier et cube. Salade croquante autre ville : [salade Kisangani](/ln/recettes/salade-kisangani/). Vert feuille : [ndunda](/ln/recettes/ndunda/).",
    "seoTitle": "chou mijoté — style Kinshasa"
  }
};
