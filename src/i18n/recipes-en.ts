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

export const recipeTranslationsEn: Record<string, RecipeTranslation> = {
  "biteku-teku-kasai": {
    "title": "Biteku-teku",
    "seoTitle": "Biteku-teku / lenga-lenga recipe — Kasai amaranth",
    "description": "Biteku-teku (lenga-lenga) recipe: amaranth simmered with onion, tomato and peanut — Greater Kasai dish, cousin to Kinshasa ndunda.",
    "region": "Greater Kasai",
    "imageAlt": "Fresh amaranth leaves used for biteku-teku",
    "prepTime": "20 min",
    "cookTime": "25 min",
    "ingredients": [
      "3 bunches of amaranth leaves",
      "2 ripe tomatoes, crushed",
      "1 large onion, sliced",
      "80 g roasted pounded peanuts",
      "2 tbsp oil",
      "1 small chili, optional",
      "Salt",
      "150 ml water"
    ],
    "steps": [
      "Strip the leaves, keep the tender stems, and wash everything several times.",
      "Roughly chop the leaves and stems.",
      "Sweat the onion in the oil, then add the tomatoes and chili.",
      "Add the amaranth and water, cover, and cook for about ten minutes.",
      "Stir in the pounded peanuts, season with salt, and mix.",
      "Continue cooking uncovered until the leaves are tender and the sauce lightly thickened."
    ],
    "tags": [
      "biteku-teku",
      "lenga-lenga",
      "amaranth",
      "Greater Kasai",
      "vegetables"
    ],
    "body": "Biteku-teku is popular in Kasai. In Kinshasa, everyday greens are more often called [ndunda](/en/recettes/ndunda/); the same amaranth is also called **lenga-lenga**. Eat with [bukari](/en/recettes/bukari-katanga/) (bidia in Kasai); peanuts are optional.\n\n**Washing**: market amaranth often carries sand — rinse until the water runs clear.\n\n**Without peanut**: a lighter version, closer to Kinshasa ndunda; finish with a little palm oil if you have it.\n\nOther leaves: [matembele](/en/recettes/matembele-katanga/), [pondu](/en/recettes/pondu/). Market context: [market guide](/en/guides/marche/)."
  },
  "brochettes-grillons": {
    "title": "Cricket skewers",
    "description": "Seasoned edible crickets, threaded onto skewers and grilled until crisp.",
    "region": "Southeastern DRC",
    "imageAlt": "Congolese skewer of grilled crickets",
    "prepTime": "25 min",
    "cookTime": "15 min",
    "ingredients": [
      "300 g prepared edible crickets",
      "2 garlic cloves",
      "1 tsp grated ginger",
      "1 tbsp lemon juice",
      "2 tbsp oil",
      "Pili-pili, salt and pepper",
      "Small wooden skewers"
    ],
    "steps": [
      "Use only food-grade crickets that have already been cleaned.",
      "Mix the garlic, ginger, lemon, oil, pili-pili, salt and pepper.",
      "Coat the crickets with this marinade and leave for 15 minutes.",
      "Thread them gently onto the skewers without packing them tightly.",
      "Grill over moderate coals or in a very hot pan for 8 to 12 minutes, turning as needed.",
      "Serve at once with lemon and pili-pili."
    ],
    "tags": [
      "crickets",
      "skewer",
      "grilled"
    ],
    "body": "Edible insects have a long place in several Congolese regional cuisines and remain a valued source of protein."
  },
  "bukari-katanga": {
    "title": "Bukari",
    "seoTitle": "Bukari recipe — Katanga maize fufu",
    "description": "Bukari recipe: hot-worked maize flour dough until smooth and dense—the central starch of Greater Katanga (Lubumbashi).",
    "region": "Greater Katanga",
    "imageAlt": "Balls of maize fufu served in the Democratic Republic of the Congo",
    "prepTime": "5 min",
    "cookTime": "20 min",
    "ingredients": [
      "500 g fine white maize flour",
      "1.2 l water",
      "1 pinch of salt, optional"
    ],
    "steps": [
      "Bring about one litre of water to a boil in a heavy-bottomed pot.",
      "Loosen a little of the flour in the remaining water, then pour the mixture into the pot.",
      "Stir until you have a smooth porridge and let it simmer for a few minutes.",
      "Add the rest of the flour gradually while working vigorously with a sturdy spoon.",
      "Keep turning and pressing the dough against the sides until it is smooth and pulls away from the pot.",
      "Shape portions with a wet ladle and serve immediately."
    ],
    "tags": [
      "bukari",
      "maize fufu",
      "bidia",
      "Greater Katanga",
      "Lubumbashi"
    ],
    "body": "Bukari (maize dough, also called bidia in Kasai) anchors meals in Greater Katanga: leafy greens, fish and stewed meats cling to it. In Kivu the close cousin is [bugali](/en/recettes/bugali-kivu/). In the West, fermented cassava “bread” is more often chikwangue; cassava fufu is the other main dough.",
    "variants": [
      {
        "id": "bidia-kasai",
        "title": "Bidia (Kasai name)",
        "description": "In Greater Kasai the same maize paste is often called bidia — same gesture, another table name.",
        "ingredients": [
          "500 g fine white maize flour",
          "1.2 l water",
          "1 pinch of salt, optional"
        ],
        "steps": [
          "Follow the same steps as Katanga bukari.",
          "Serve with Kasai greens, fish or sauced meat (biteku-teku, mbinzo, etc.)."
        ]
      }
    ]
  },
  "chikwangue": {
    "title": "Chikwangue",
    "seoTitle": "Chikwangue recipe — Congolese cassava bread",
    "description": "Chikwangue (kwanga) recipe: fermented cassava dough wrapped in leaves and steamed—firm, lightly tangy Congolese staple.",
    "region": "Congo Basin",
    "imageAlt": "Congolese chikwangue wrapped in its leaves",
    "prepTime": "40 min",
    "cookTime": "1 h 30",
    "ingredients": [
      "1 kg fermented cassava dough ready to cook",
      "Large banana leaves or leaves suitable for cooking",
      "Kitchen twine",
      "Water for steaming"
    ],
    "steps": [
      "Soften the leaves briefly over a flame or in hot water, then wipe them dry.",
      "Knead the cassava dough until smooth and free of lumps.",
      "Form even cylinders and wrap them tightly in several layers of leaves.",
      "Tie each packet so water cannot get in during cooking.",
      "Place the chikwangue in a steamer basket and cook for 1 hour 30 minutes.",
      "Let cool slightly before unwrapping. Slice and serve with a sauce, fish or pondu."
    ],
    "tags": [
      "chikwangue",
      "kwanga",
      "cassava",
      "fufu",
      "fermentation"
    ],
    "body": "Chikwangue (or kwanga) is the fermented cassava “bread” of many Congolese tables. Raw cassava fermentation needs skill; this version starts from ready-to-cook fermented dough, easier in cities and abroad. It often accompanies pondu or fish liboke; in Katanga the maize cousin is bukari."
  },
  "croquettes-manioc": {
    "title": "Cassava croquettes",
    "description": "Cassava bites soft inside and golden outside, shaped by hand then fried.",
    "region": "Across the DRC",
    "imageAlt": "Congolese croquettes made from cassava",
    "prepTime": "25 min",
    "cookTime": "30 min",
    "ingredients": [
      "800 g sweet cassava",
      "1 small onion, grated",
      "1 garlic clove, pounded",
      "2 tbsp finely chopped chives",
      "1 egg",
      "2 tbsp flour",
      "Salt and pepper",
      "Oil for frying"
    ],
    "steps": [
      "Peel the cassava, remove the central fiber and cut into pieces.",
      "Cook in lightly salted water until very tender, then drain well.",
      "Mash the cassava while still hot and let it cool slightly.",
      "Mix in the onion, garlic, chives, egg and flour. Season with salt and pepper.",
      "Form small croquettes with lightly oiled hands.",
      "Fry in batches until golden, then drain on absorbent paper."
    ],
    "tags": [
      "cassava",
      "frying",
      "croquettes"
    ],
    "body": "These croquettes are served hot, on their own or with a chili sauce. Use only sweet cassava meant for eating and cook it thoroughly."
  },
  "escargots-congolaise": {
    "title": "Snails, Congolese-style",
    "description": "Snail meat slowly tenderized then simmered in a lively tomato, onion and pepper sauce.",
    "region": "Central Basin & Kongo-Central",
    "imageAlt": "African dish of fried snails in sauce",
    "prepTime": "30 min",
    "cookTime": "1 h 10",
    "ingredients": [
      "800 g edible snail meat, cleaned by a professional",
      "4 ripe tomatoes, crushed",
      "2 onions, sliced",
      "1 green bell pepper, cut into strips",
      "3 garlic cloves, chopped",
      "4 tbsp oil",
      "1 small chili",
      "Salt, pepper and water"
    ],
    "steps": [
      "Use meat from a food-grade supply; never cook foraged snails without professional identification, purging and preparation.",
      "Rub the meat with a little salt, rinse thoroughly, then cover with fresh water. Boil 35 to 45 minutes until it begins to soften.",
      "Drain the snails. Heat the oil and brown them for 5 minutes, then set aside.",
      "In the same pot, sweat the onions, garlic and pepper. Add the tomatoes and chili, then reduce for 10 minutes.",
      "Return the snails with 150 ml water and simmer 15 minutes. Season and check they are fully cooked before serving."
    ],
    "tags": [
      "snails",
      "tomato",
      "chili",
      "simmered"
    ],
    "body": "Seasonings and preferred texture vary by region; thorough cooking remains essential for this product."
  },
  "fumbwa-arachides": {
    "title": "Fumbwa with peanuts",
    "seoTitle": "Fumbwa with peanuts recipe",
    "description": "Fumbwa (koko) with peanuts recipe: shredded forest leaves simmered in peanut sauce until tender and silky—western Congo classic.",
    "region": "Kongo Central",
    "imageAlt": "Fumbwa peanut sauce served with fufu",
    "prepTime": "30 min",
    "cookTime": "1 h",
    "ingredients": [
      "500 g shredded fumbwa leaves",
      "200 g unsweetened peanut paste",
      "2 onions, finely chopped",
      "2 ripe tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp red palm oil",
      "150 g smoked fish (optional)",
      "Salt",
      "Water"
    ],
    "steps": [
      "Wash the leaves thoroughly and drain them well.",
      "Heat the palm oil and sweat the onions, then add the garlic and tomatoes.",
      "Add the fumbwa with a little water, cover, and cook for about 30 minutes.",
      "Dilute the peanut paste with warm water and pour it into the pot.",
      "Add the smoked fish if using, season, and simmer uncovered until the sauce is creamy.",
      "Serve with fufu, chikwangue or rice."
    ],
    "tags": [
      "fumbwa",
      "koko",
      "peanut",
      "leaves",
      "vegetable"
    ],
    "body": "Fumbwa (also called koko, okazi or eru) is not pondu: it is a forest vine leaf, often sold already shredded. Cook the sauce gently so the peanut paste turns round and creamy. Serve with chikwangue or fufu.",
    variants: [
      {
        id: "sans-poisson",
        title: "Without smoked fish",
        description: "Peanut sauce and leaves alone — fully plant-based.",
        imageAlt: "Fumbwa peanut sauce served with fufu",
        ingredients: [
          "500 g shredded fumbwa leaves",
          "200 g unsweetened peanut paste",
          "2 onions, finely chopped",
          "2 ripe tomatoes, crushed",
          "2 garlic cloves",
          "3 tbsp palm oil",
          "Salt, chili and water"
        ],
        steps: [
          "Rinse the fumbwa and drain well.",
          "Sweat onions and garlic, add tomatoes then fumbwa with a glass of water.",
          "Simmer covered 30 minutes.",
          "Stir in diluted peanut paste and cook gently another 25 minutes.",
          "Season and serve with fufu or chikwangue."
        ]
      },
      {
        id: "sauce-courte",
        title: "Shorter sauce",
        description: "Less water, denser peanut — sticky texture some households prefer.",
        ingredients: [
          "500 g shredded fumbwa leaves",
          "250 g unsweetened peanut paste",
          "2 onions, finely chopped",
          "1 ripe tomato, crushed",
          "2 garlic cloves",
          "3 tbsp palm oil",
          "150 g smoked fish (optional)",
          "Salt, chili and 150 ml water"
        ],
        steps: [
          "Prepare onions, garlic and tomato as in the main recipe.",
          "Add the fumbwa with only 150 ml water; simmer 25 minutes.",
          "Stir in more peanut paste barely diluted.",
          "Cook uncovered 20 minutes, stirring: the sauce should cling to the spoon.",
          "Serve with chikwangue."
        ]
      }
    ]
  },
  "kamundele": {
    "title": "Kamundele",
    "seoTitle": "Kamundele recipe — Kinshasa skewers",
    "description": "Kamundele recipe: beef skewers marinated with aromatics and grilled over coals—emblematic Kinshasa street food.",
    "region": "Kinshasa",
    "imageAlt": "Meat skewers grilling over coals",
    "prepTime": "25 min + 1 h marinating",
    "cookTime": "15 min",
    "ingredients": [
      "1 kg beef or goat, cut into cubes",
      "2 onions",
      "3 garlic cloves",
      "2 tbsp oil",
      "1 tbsp lemon juice",
      "Pili-pili, salt and pepper",
      "Wooden skewers"
    ],
    "steps": [
      "Mix the grated onion, garlic, oil, lemon, pili-pili, salt and pepper.",
      "Coat the meat and marinate for at least 1 hour.",
      "Thread onto skewers, alternating with onion pieces if desired.",
      "Grill over medium coals, turning regularly, for 15 to 20 minutes.",
      "Serve hot with chili sauce and chikwangue or fries."
    ],
    "tags": [
      "kamundele",
      "skewers",
      "Kinshasa street food",
      "beef",
      "grill"
    ],
    "body": "Kamundele is Kinshasa street food at its core: small skewers, chili marinade, hot coals. Seasoning shifts from one vendor to the next. Another shared grill is ntaba (goat)."
  },
  "kapenta-tomates": {
    "title": "Kapenta with tomatoes",
    "seoTitle": "Kapenta with tomatoes recipe",
    "description": "Kapenta with tomatoes recipe: small fish (fresh or dried) fried then simmered in tomato-onion sauce — Haut-Katanga and Tanganyika classic.",
    "region": "Haut-Katanga & Tanganyika",
    "imageAlt": "Dried kapenta fish",
    "prepTime": "20 min",
    "cookTime": "30 min",
    "ingredients": [
      "200 g dried kapenta",
      "3 ripe tomatoes, crushed",
      "2 onions, sliced",
      "3 tbsp oil",
      "1 small chili",
      "Salt",
      "Water"
    ],
    "steps": [
      "Rinse the kapenta quickly and drain well.",
      "Fry in hot oil until lightly crisp, then set aside.",
      "In the same oil, sweat the onions, then add the tomatoes and chili.",
      "Return the kapenta with a little water and simmer 10 to 15 minutes.",
      "Season and serve with bukari or rice."
    ],
    "tags": [
      "kapenta",
      "fish",
      "tomato",
      "Haut-Katanga",
      "Tanganyika"
    ],
    "body": "Around Lakes Tanganyika and Mweru, kapenta may be fresh or dried — that changes rinsing and seasoning. Often served with bukari or matembele."
  },
  "liboke-poisson": {
    "title": "Fish liboke",
    "seoTitle": "Fish liboke recipe (maboke)",
    "description": "Fish liboke (maboke) recipe: spice-marinated fish wrapped in banana leaves and steamed—fragrant, tender Congolese packet cooking.",
    "region": "Kongo-Central & Bandundu",
    "imageAlt": "An opened liboke in its leaves, ready to eat",
    "prepTime": "30 min",
    "cookTime": "45 min",
    "ingredients": [
      "1 whole firm fish, cleaned and cut into pieces",
      "2 onions, sliced",
      "3 garlic cloves",
      "1 piece of fresh ginger",
      "2 tomatoes",
      "Banana leaves",
      "Pili-pili, salt and oil"
    ],
    "steps": [
      "Season the fish with salt, garlic, ginger, pili-pili and a little oil.",
      "Soften the banana leaves and lay out the fish with onion and tomato.",
      "Wrap tightly into packets.",
      "Steam or cook over gentle coals for 40 to 45 minutes.",
      "Open at the table and serve with chikwangue or plantain."
    ],
    "tags": [
      "liboke",
      "maboke",
      "fish",
      "banana leaf",
      "steam"
    ],
    "body": "Fish liboke (also called maboke) is both a technique and a dish: the banana leaf seals the juices and perfumes the flesh. Without fresh leaves, baking paper plus foil is an honest diaspora substitute."
  },
  "lituma": {
    "title": "Lituma",
    "seoTitle": "Lituma recipe — pounded plantain",
    "description": "Lituma recipe: green plantains cooked then pounded into a soft dough — Cuvette / Equateur side, related to foutou.",
    "region": "Central Cuvette",
    "imageAlt": "Plantain puree served with a sauce",
    "prepTime": "15 min",
    "cookTime": "30 min",
    "ingredients": [
      "1 kg green plantains",
      "Salt",
      "Water"
    ],
    "steps": [
      "Peel the plantains and cut into pieces.",
      "Cook in salted water until very tender.",
      "Drain, then pound or mash vigorously until smooth and elastic.",
      "Shape into portions and serve with a sauce or leafy greens."
    ],
    "tags": [
      "lituma",
      "pounded plantain",
      "plantain",
      "Equateur",
      "accompaniment"
    ],
    "body": "Lituma is green plantain pounded in the Cuvette: elastic texture, ladle portions, ideal with sauces and fish. Some families mix in a little cassava. Ripe fried plantain is makemba; another starch is chikwangue."
  },
  "loso-petits-pois": {
    "title": "Loso with green peas",
    "description": "Rice with green peas cooked in an aromatic broth—simple, colorful and made for sharing.",
    "region": "Kinshasa",
    "imageAlt": "Congolese plate of rice mixed with green peas",
    "prepTime": "15 min",
    "cookTime": "30 min",
    "ingredients": [
      "400 g rice",
      "200 g green peas",
      "1 onion, chopped",
      "2 garlic cloves",
      "2 tbsp oil",
      "Salt",
      "800 ml broth or water"
    ],
    "steps": [
      "Sweat the onion and garlic in the oil.",
      "Add the rice and stir to coat.",
      "Pour in the broth, add the peas and salt, then cover.",
      "Cook over low heat until the rice is tender and the liquid absorbed.",
      "Fluff and serve."
    ],
    "tags": [
      "rice",
      "peas",
      "loso"
    ],
    "body": "A Kinshasa classic for large tables, easy to stretch and always welcome."
  },
  "madesu": {
    "title": "Madesu",
    "seoTitle": "Madesu recipe — Congolese beans",
    "description": "Madesu recipe: tender beans simmered with tomato, onion and red palm oil—everyday Congolese comfort food from the DRC.",
    "region": "Kinshasa & Western DRC",
    "imageAlt": "Bowl of cooked beans",
    "prepTime": "20 min + 8 h soaking",
    "cookTime": "1 h 30",
    "ingredients": [
      "400 g dried beans, soaked overnight",
      "2 onions, chopped",
      "3 tomatoes, crushed",
      "3 tbsp oil",
      "1 chili",
      "Salt",
      "Water"
    ],
    "steps": [
      "Cook the drained beans in fresh water until tender.",
      "In a pan, sweat the onions in oil, then add tomatoes and chili.",
      "Combine with the beans and simmer until the sauce thickens.",
      "Season and serve with rice or chikwangue."
    ],
    "tags": [
      "madesu",
      "Congolese beans",
      "beans",
      "palm oil",
      "everyday"
    ],
    "body": "Madesu means the everyday palm-oil beans of Congolese kitchens—economical, filling, endlessly varied. Add cassava leaves and you get saka-madesu; serve with chikwangue or rice.",
    variants: [
      {
        id: "poisson-fume",
        title: "With smoked fish",
        description: "Beans enriched with smoked fish — a savourier everyday plate.",
        imageAlt: "Bowl of cooked red beans",
        ingredients: [
          "500 g dried red or brown beans",
          "200 g smoked fish",
          "2 onions, sliced",
          "3 ripe tomatoes, crushed",
          "3 tbsp red palm oil",
          "2 garlic cloves, chopped",
          "1 bay leaf",
          "Salt and water"
        ],
        steps: [
          "Soak and cook the beans as in the main recipe.",
          "Soak the smoked fish 20 minutes, drain and break into pieces.",
          "Make the onion-tomato palm-oil sauce, then add beans and fish.",
          "Simmer gently 20 minutes. Salt lightly (the smoked fish is already salty).",
          "Serve with rice or chikwangue."
        ]
      },
      {
        id: "sans-tomate",
        title: "Without tomato",
        description: "Palm oil, onion and beans only — a sober, very common version.",
        ingredients: [
          "500 g dried red or brown beans",
          "2 onions, sliced",
          "4 tbsp red palm oil",
          "2 garlic cloves, chopped",
          "1 bay leaf",
          "1 whole small chili, optional",
          "Salt and water"
        ],
        steps: [
          "Soak and cook the beans with the bay leaf until tender.",
          "Sweat onions and garlic in palm oil with no tomato.",
          "Stir in the beans with a ladle of cooking water.",
          "Add the chili, simmer 15 minutes. Salt and serve."
        ]
      }
    ]
  },
  "makayabu": {
    "title": "Makayabu",
    "seoTitle": "Makayabu with tomatoes recipe",
    "description": "Makayabu recipe: salted dried fish soaked then simmered in a short tomato, onion and chili sauce—Congo Basin classic.",
    "region": "Kinshasa & Congo Basin",
    "imageAlt": "Salted dried fish dish",
    "prepTime": "25 min + 12 h soaking",
    "cookTime": "35 min",
    "ingredients": [
      "400 g makayabu (salted dried fish)",
      "3 onions, sliced",
      "4 tomatoes, crushed",
      "3 tbsp oil",
      "1 chili",
      "Water"
    ],
    "steps": [
      "Soak the fish in several changes of water to remove excess salt.",
      "Drain and break into pieces.",
      "Sweat the onions in oil, add tomatoes and chili, then reduce.",
      "Add the fish and a little water; simmer gently for 20 to 25 minutes.",
      "Serve with rice, plantain or fufu."
    ],
    "tags": [
      "makayabu",
      "salted fish",
      "tomato",
      "onion",
      "sauce"
    ],
    "body": "Makayabu usually means salted dried fish in the DRC; species and tomato quantity vary. Desalting is the critical step—too much salt and the dish is hard to rescue. Serve with chikwangue.",
    variants: [
      {
        id: "fumbwa",
        title: "Makayabu with fumbwa",
        description: "Salted fish simmered with fumbwa leaves — diaspora and western classic.",
        imageAlt: "Fumbwa sauce served with fufu",
        ingredients: [
          "600 g salted dried fish, desalted",
          "400 g shredded fumbwa leaves",
          "2 onions, sliced",
          "2 tomatoes, crushed",
          "3 tbsp oil",
          "1 small chili, optional",
          "Water"
        ],
        steps: [
          "Desalt the makayabu as in the main recipe.",
          "Sweat onions and tomatoes in oil, add the fumbwa and a glass of water.",
          "Cover and simmer 25 minutes.",
          "Add the fish and cook gently 15–20 minutes without stirring much.",
          "Pepper and serve with chikwangue or fufu."
        ]
      },
      {
        id: "sauce-courte",
        title: "Short sauce",
        description: "Less tomato, drier sauce — salted fish stays in front.",
        ingredients: [
          "600 g salted dried fish",
          "2 ripe tomatoes, crushed",
          "2 large onions, sliced",
          "2 garlic cloves, chopped",
          "3 tbsp oil",
          "1 small chili, optional",
          "Black pepper",
          "80 ml water"
        ],
        steps: [
          "Desalt the fish (12 h, several water changes).",
          "Sweat the onions, add garlic, tomatoes and chili; reduce only 8 minutes.",
          "Add the fish with just 80 ml water.",
          "Cover and simmer 15 minutes. The sauce should stay short and coating.",
          "Pepper and serve."
        ]
      }
    ]
  },
  "makemba": {
    "title": "Makemba",
    "seoTitle": "Makemba recipe — fried plantains",
    "description": "Makemba recipe: ripe plantains fried golden outside and soft within — Congolese side or snack across the DRC.",
    "region": "Across the DRC",
    "imageAlt": "Makemba, Congolese fried plantains",
    "prepTime": "10 min",
    "cookTime": "15 min",
    "ingredients": [
      "4 ripe plantains",
      "Oil for frying",
      "A pinch of salt, optional"
    ],
    "steps": [
      "Peel the plantains and cut into diagonal slices or sticks.",
      "Heat the oil to medium.",
      "Fry until golden, turning once.",
      "Drain and salt lightly if desired.",
      "Serve hot."
    ],
    "tags": [
      "makemba",
      "fried plantains",
      "plantain",
      "frying",
      "quick"
    ],
    "body": "The yellower and more freckled the peel, the sweeter and more caramelised the makemba. Often served with grilled fish or madesu. Green pounded plantain is lituma."
  },
  "manioc-grille": {
    "title": "Grilled cassava",
    "description": "Cassava roots pre-cooked then grilled over coals, with a smoky crust and tender heart.",
    "region": "Across the DRC",
    "imageAlt": "Pieces of grilled cassava served on a plate",
    "prepTime": "15 min",
    "cookTime": "35 min",
    "ingredients": [
      "1 kg sweet cassava",
      "Salt",
      "A little oil, optional"
    ],
    "steps": [
      "Peel the cassava, remove the fiber and cut into pieces.",
      "Boil in salted water until just tender, then drain.",
      "Brush lightly with oil if desired.",
      "Grill over coals until marked and fragrant.",
      "Serve hot with a sauce or chili."
    ],
    "tags": [
      "cassava",
      "coals",
      "side"
    ],
    "body": "Grilled cassava is both accompaniment and snack, especially near the braise."
  },
  "matembele-katanga": {
    "title": "Matembele with peanuts",
    "seoTitle": "Matembele with peanuts recipe",
    "description": "Matembele recipe: sweet potato leaves simmered with tomato and peanuts — Greater Katanga green, often served with bukari.",
    "region": "Greater Katanga",
    "imageAlt": "Fresh sweet potato leaves called matembele",
    "prepTime": "25 min",
    "cookTime": "35 min",
    "ingredients": [
      "500 g sweet potato leaves",
      "100 g pounded peanuts",
      "2 tomatoes",
      "1 onion",
      "2 tbsp oil",
      "Salt",
      "Water"
    ],
    "steps": [
      "Wash and chop the leaves.",
      "Sweat the onion in oil, add the tomatoes.",
      "Add the leaves and a little water; cook covered.",
      "Stir in the peanuts and simmer until tender.",
      "Season and serve with bukari."
    ],
    "tags": [
      "matembele",
      "sweet potato leaves",
      "peanuts",
      "Greater Katanga",
      "Lubumbashi"
    ],
    "body": "Matembele (sweet potato leaves) are cooked in several regions; in Greater Katanga they commonly accompany bukari. Another peanut leaf stew: fumbwa."
  },
  "mayebo": {
    "title": "Mayebo",
    "description": "Wild mushrooms cleaned and simmered with onion and a light sauce.",
    "region": "Congo Basin forests",
    "imageAlt": "Termitomyces mushrooms",
    "prepTime": "25 min",
    "cookTime": "30 min",
    "ingredients": [
      "500 g edible wild mushrooms, identified as food-safe",
      "2 onions, sliced",
      "2 tbsp oil",
      "1 tomato, optional",
      "Salt and pepper",
      "Water"
    ],
    "steps": [
      "Use only mushrooms known to be edible and sourced reliably.",
      "Clean carefully and cut into pieces.",
      "Sweat the onions in oil, add the mushrooms and tomato if using.",
      "Add a little water and simmer until tender.",
      "Season and serve with fufu or rice."
    ],
    "tags": [
      "mushrooms",
      "forest",
      "simmered"
    ],
    "body": "Mayebo belongs to seasonal forest cooking; correct identification is essential."
  },
  "mbika": {
    "title": "Mbika",
    "description": "Pound pumpkin-seed paste seasoned then cooked in leaf packets for a dense, melting texture.",
    "region": "Congo Basin",
    "imageAlt": "Mbika wrapped in leaves on a Congolese stall",
    "prepTime": "30 min",
    "cookTime": "50 min",
    "ingredients": [
      "300 g pounded pumpkin seeds",
      "1 onion, chopped",
      "1 chili",
      "Salt",
      "A little water or oil",
      "Leaves for wrapping"
    ],
    "steps": [
      "Mix the seed paste with onion, chili, salt and a little water or oil.",
      "Form portions and wrap tightly in leaves.",
      "Steam or cook gently for about 50 minutes.",
      "Unwrap and serve warm."
    ],
    "tags": [
      "pumpkin seeds",
      "leaf packet",
      "mbika"
    ],
    "body": "Mbika is rich and filling, often shared as a relish beside a starch."
  },
  "mbinzo-tomates": {
    "title": "Mbinzo with tomatoes",
    "description": "Dried caterpillars rehydrated then simmered with tomato, onion and pili-pili.",
    "region": "Greater Bandundu",
    "imageAlt": "Congolese plate of cooked caterpillars",
    "prepTime": "30 min",
    "cookTime": "40 min",
    "ingredients": [
      "250 g dried mbinzo (caterpillars)",
      "3 tomatoes, crushed",
      "2 onions, sliced",
      "3 tbsp oil",
      "Pili-pili and salt",
      "Water"
    ],
    "steps": [
      "Soak the mbinzo in warm water, then rinse well.",
      "Fry briefly in oil, then set aside.",
      "Sweat the onions, add tomatoes and pili-pili.",
      "Return the mbinzo with a little water and simmer 30 to 40 minutes.",
      "Season and serve with fufu."
    ],
    "tags": [
      "caterpillars",
      "tomato",
      "Bandundu"
    ],
    "body": "Mbinzo is a prized protein in Greater Bandundu and beyond, seasonal and much anticipated."
  },
  "mbisi-ya-kokalinga": {
    "title": "Mbisi ya kokalinga",
    "description": "Fish fried or grilled until the skin is crisp and the flesh stays moist.",
    "region": "Kinshasa & Congo River",
    "imageAlt": "Fried fish served with rice and plantains",
    "prepTime": "25 min",
    "cookTime": "20 min",
    "ingredients": [
      "1 whole fish, cleaned",
      "2 garlic cloves",
      "1 lemon",
      "Pili-pili, salt and oil"
    ],
    "steps": [
      "Score the fish and season with salt, garlic, lemon and pili-pili.",
      "Leave to marinate 20 minutes.",
      "Fry in hot oil or grill over coals until cooked through.",
      "Serve with rice, plantain or chikwangue."
    ],
    "tags": [
      "fish",
      "fried",
      "grilled"
    ],
    "body": "Mbisi ya kokalinga simply means fish cooked in the pan or on the fire—everyday and festive at once."
  },
  "mikate": {
    "title": "Mikate",
    "seoTitle": "Mikate recipe — Congolese doughnuts",
    "description": "Mikate recipe: Congolese yeasted doughnuts, crisp outside and soft inside—Kinshasa street snack and home treat.",
    "region": "Kinshasa",
    "imageAlt": "Golden mikate, Congolese doughnuts",
    "prepTime": "20 min",
    "cookTime": "20 min",
    "ingredients": [
      "500 g flour",
      "1 tsp instant yeast",
      "2 tbsp sugar",
      "1 pinch of salt",
      "About 250 ml warm water",
      "Oil for frying"
    ],
    "steps": [
      "Mix flour, yeast, sugar and salt.",
      "Add water gradually to form a soft dough; knead and leave to rise 1 hour.",
      "Heat the oil.",
      "Scoop portions with a spoon and fry until golden.",
      "Drain and serve warm."
    ],
    "tags": [
      "mikate",
      "Congolese doughnuts",
      "yeast",
      "Kinshasa",
      "snack"
    ],
    "body": "Mikate are Congolese street and home doughnuts: in Kinshasa they appear at breakfast or tea time, often with peanut paste. Let the dough rise fully so they stay light after frying. Pair with tangawisi (ginger juice)."
  },
  "moambe-poulet": {
    "title": "Chicken moambe",
    "seoTitle": "Chicken moambe recipe",
    "description": "Chicken moambe recipe: silky palm-nut sauce simmered with chicken—a festive Congolese dish found across the DRC.",
    "region": "Across the DRC",
    "imageAlt": "Chicken moambe served in a dish",
    "prepTime": "25 min",
    "cookTime": "1 h 15",
    "ingredients": [
      "1 chicken, cut into pieces",
      "400 g palm-nut pulp or unsweetened palm cream",
      "2 onions",
      "3 garlic cloves",
      "1 chili",
      "Salt and oil",
      "Water"
    ],
    "steps": [
      "Brown the chicken pieces in oil and set aside.",
      "Sweat the onions and garlic, then add the palm pulp diluted with water.",
      "Strain if needed for a smooth sauce.",
      "Return the chicken, add chili and salt, and simmer gently for about 1 hour.",
      "Reduce until the sauce coats the meat.",
      "Serve with rice, fufu or chikwangue."
    ],
    "tags": [
      "moambe",
      "chicken moambe",
      "mwamba",
      "palm nut",
      "celebration"
    ],
    "body": "Chicken moambe (mwamba) is one of the Congolese dishes best known abroad. Palm cream comes in tins or sachets in African grocery stores; you can also extract it from fresh palm nuts. Each household adjusts thickness, heat and sides.",
    variants: [
      {
        id: "noix-fraiches",
        title: "With fresh palm nuts",
        description: "Extracting palm nuts — longer, more floral flavour.",
        imageAlt: "Chicken moambe served with rice",
        ingredients: [
          "1 chicken, cut into pieces",
          "800 g fresh palm nuts",
          "2 onions",
          "3 tomatoes",
          "2 garlic cloves",
          "Oil, salt, stock cube, chili",
          "Water"
        ],
        steps: [
          "Boil the palm nuts 20–30 minutes, crush them and dilute with hot water.",
          "Strain the pulp for a smooth cream (fresh moambe).",
          "Brown the chicken, set aside. Sweat onions, garlic and tomatoes.",
          "Return the chicken, pour in the fresh moambe. Simmer gently 50 minutes to 1 hour.",
          "Reduce until the sauce coats the meat. Serve with rice or fufu."
        ]
      },
      {
        id: "epicee",
        title: "Very spicy version",
        description: "Same sauce, a hard pili-pili hit for tables that like heat.",
        ingredients: [
          "1 chicken, cut into pieces",
          "400 ml palm-nut cream / pulp (moambe)",
          "2 onions",
          "3 tomatoes",
          "2 garlic cloves",
          "2 to 3 fresh pili-pili chilies, chopped",
          "Oil, salt, stock cube"
        ],
        steps: [
          "Follow the main recipe until the chicken goes back into the sauce.",
          "Add the chopped chilies with the moambe (keep the seeds for more heat).",
          "Simmer 50 minutes to 1 hour; taste and adjust chili at the end.",
          "Serve with rice, fufu and a small dish of pili-pili sauce on the side."
        ]
      }
    ]
  },
  "mujibujibu": {
    "title": "Mujibujibu",
    "description": "Pumpkin leaves slowly simmered with freshly ground peanuts and smoked fish.",
    "region": "Kasai-Central",
    "imageAlt": "Fresh African pumpkin leaves",
    "prepTime": "30 min",
    "cookTime": "45 min",
    "ingredients": [
      "500 g pumpkin leaves",
      "150 g fresh pounded peanuts",
      "100 g smoked fish",
      "1 onion",
      "2 tbsp oil",
      "Salt",
      "Water"
    ],
    "steps": [
      "Wash and chop the leaves.",
      "Sweat the onion, add the leaves and water; cook covered.",
      "Stir in the peanuts and smoked fish.",
      "Simmer until tender and creamy.",
      "Season and serve with bukari or fufu."
    ],
    "tags": [
      "Kasai-Central",
      "pumpkin leaves",
      "peanuts"
    ],
    "body": "Mujibujibu is a Kasai green dish where peanut and smoke do most of the talking."
  },
  "munkoyo": {
    "title": "Munkoyo",
    "description": "A lightly tangy cereal drink from a short fermentation of maize porridge with munkoyo roots.",
    "region": "Haut-Katanga",
    "imageAlt": "Making a traditional cereal drink and serving gourd",
    "prepTime": "25 min + 24 h fermenting",
    "cookTime": "20 min",
    "ingredients": [
      "300 g maize flour",
      "2.5 l drinking water",
      "20 g food-grade dried munkoyo roots",
      "60 g sugar, optional"
    ],
    "steps": [
      "Use only munkoyo roots sold for food by a reliable source; do not forage or identify wild roots yourself.",
      "Loosen the flour in 500 ml cold water. Boil the rest, add the mixture and cook 15 to 20 minutes, stirring.",
      "Transfer to a perfectly clean vessel and cool to room temperature.",
      "Rinse the roots briefly, split them and place in the porridge. Cover with a clean cloth and ferment 12 to 24 hours in a mild place.",
      "Remove the roots, strain, sweeten if desired, then refrigerate. Drink cold within two days and discard if the smell is off or mold appears."
    ],
    "tags": [
      "maize",
      "fermentation",
      "drink",
      "Haut-Katanga"
    ],
    "body": "Grain, fermentation time and sugar vary by household; this home version favors a short ferment and strict hygiene."
  },
  "ngai-ngai": {
    "title": "Ngai-ngai",
    "seoTitle": "Ngai-ngai with smoked fish recipe",
    "description": "Ngai-ngai recipe: tart Guinean sorrel leaves simmered with smoked fish, tomato and onion—Kinshasa and Kongo-Central classic.",
    "region": "Kinshasa & Kongo-Central",
    "imageAlt": "Hibiscus sabdariffa leaves",
    "prepTime": "25 min",
    "cookTime": "40 min",
    "ingredients": [
      "400 g ngai-ngai leaves",
      "1 onion, sliced",
      "2 tbsp oil",
      "1 small chili, optional",
      "Salt",
      "Water"
    ],
    "steps": [
      "Wash the leaves well.",
      "Sweat the onion in oil, add the chili if using.",
      "Add the leaves and a little water; cook covered 15 to 20 minutes.",
      "Season and serve with fufu or rice."
    ],
    "tags": [
      "ngai-ngai",
      "sorrel",
      "Guinean sorrel",
      "smoked fish",
      "leaves"
    ],
    "body": "Ngai-ngai (Guinean sorrel / roselle) is prized for its sharp acidity. Tomato, smoked fish and fat are dosed differently from kitchen to kitchen. Another leaf stew to compare: pondu.",
    variants: [
      {
        id: "vegetal",
        title: "Without fish",
        description: "Fully plant-based ngai-ngai — leaf acidity stays centre stage.",
        imageAlt: "Simmered ngai-ngai served in a dish",
        ingredients: [
          "500 g ngai-ngai leaves",
          "2 tomatoes, crushed",
          "1 onion, sliced",
          "3 tbsp palm or neutral oil",
          "1 small chili, optional",
          "Salt",
          "300 ml water"
        ],
        steps: [
          "Sort, wash and shred the leaves.",
          "Sweat the onion in oil, add the tomatoes, cook 5 minutes.",
          "Add the leaves and water. Cover and simmer 25–30 minutes.",
          "Add chili, salt and serve with fufu or rice."
        ]
      },
      {
        id: "huile-neutre",
        title: "With neutral oil",
        description: "No palm oil — cleaner taste, sharper acidity.",
        ingredients: [
          "500 g ngai-ngai leaves",
          "250 g smoked fish",
          "2 tomatoes, crushed",
          "1 onion, sliced",
          "3 tbsp sunflower or peanut oil",
          "1 small chili, optional",
          "Salt",
          "300 ml water"
        ],
        steps: [
          "Follow the main recipe, swapping palm oil for neutral oil.",
          "Do not brown the onion too much — keep a light sauce.",
          "Salt at the end. Serve with fufu or rice."
        ]
      }
    ]
  },
  "nsafu-grilles": {
    "title": "Grilled nsafu",
    "description": "Safou fruits gently heated until the purple skin softens and the flesh turns creamy.",
    "region": "Western DRC",
    "imageAlt": "Purple nsafu being turned while cooking on a grill",
    "prepTime": "5 min",
    "cookTime": "10 min",
    "ingredients": [
      "8 ripe nsafu",
      "Fine salt"
    ],
    "steps": [
      "Rinse the nsafu and dry them carefully.",
      "Place them on a grill over gentle coals.",
      "Turn often for 6 to 10 minutes so skin and pulp soften evenly.",
      "Remove when the skin pales slightly and the flesh yields to the finger.",
      "Open, remove the pit, salt very lightly and eat hot."
    ],
    "tags": [
      "nsafu",
      "safou",
      "grilled"
    ],
    "body": "Nsafu, also called safou, has a rich buttery flesh. It can also be dipped for a few minutes in water just off the boil."
  },
  "ntaba": {
    "title": "Ntaba (grilled goat)",
    "seoTitle": "Ntaba recipe — grilled goat",
    "description": "Ntaba recipe: goat marinated with aromatics then grilled over coals—Congolese grill food from Kinshasa and Kongo-Central.",
    "region": "Kinshasa & Kongo-Central",
    "imageAlt": "Pieces of grilled meat served on a plate",
    "prepTime": "25 min + 2 h marinating",
    "cookTime": "50 min",
    "ingredients": [
      "1.5 kg goat with some pieces on the bone",
      "2 onions, one of them grated",
      "4 garlic cloves, crushed",
      "2 cm fresh ginger, grated",
      "2 tbsp lemon juice",
      "2 tbsp oil",
      "1 small chili, to taste",
      "Salt and pepper"
    ],
    "steps": [
      "Mix the grated onion, garlic, ginger, lemon, oil, chili, salt and pepper. Coat the meat and marinate chilled for 2 hours.",
      "Place the meat in a pot with the marinade and 200 ml water. Cover and cook 25 to 30 minutes until it begins to soften.",
      "Drain the pieces, reserving a little cooking liquid. Prepare medium coals and oil the grill lightly.",
      "Grill the goat 15 to 20 minutes, turning often and brushing with a little cooking liquid.",
      "Slice the second onion and serve it with the ntaba, alongside chikwangue, plantain or pili-pili."
    ],
    "tags": [
      "ntaba",
      "grilled goat",
      "goat",
      "grill",
      "Kinshasa"
    ],
    "body": "Ntaba (goat in Lingala) is sharing food: a pre-cook to tenderise, then coals to brown. Grill stands vary the time before grilling widely. For a stewed version, see ntaba in sauce; for street skewers, kamundele."
  },
  "pepe-soupe-ya-ngolo": {
    "title": "Pepe soupe ya ngolo",
    "seoTitle": "Pepe soupe ya ngolo recipe",
    "description": "Pepe soupe ya ngolo recipe: spicy catfish soup with ginger, garlic and pili-pili—Kinshasa street-food heat.",
    "region": "Kinshasa",
    "imageAlt": "Bowl of pepe soupe ya ngolo",
    "prepTime": "25 min",
    "cookTime": "35 min",
    "ingredients": [
      "800 g catfish pieces",
      "2 onions",
      "4 garlic cloves",
      "3 cm ginger",
      "2 tomatoes",
      "Pili-pili, salt and oil",
      "1 l water"
    ],
    "steps": [
      "Season the fish and brown lightly in oil.",
      "Sweat onion, garlic and ginger; add tomatoes.",
      "Pour in the water, return the fish and simmer 25 to 35 minutes.",
      "Adjust pili-pili and salt.",
      "Serve very hot with bread or boiled plantain."
    ],
    "tags": [
      "pepe soupe",
      "ngolo",
      "catfish",
      "soup",
      "Kinshasa"
    ],
    "body": "“Ngolo” means catfish in Lingala. Pepe soupe ya ngolo is a short, fragrant broth from Kinshasa stalls—eaten hot, often with chikwangue. Street heat: spicy, aromatic, no waiting."
  },
  "poisson-braise-kinkole": {
    "title": "Grilled fish",
    "seoTitle": "Kinkole grilled fish recipe",
    "description": "Kinkole-style grilled fish recipe: whole fish marinated with pili-pili and aromatics, grilled until smoky skin and juicy flesh—Kinshasa classic.",
    "region": "Kinshasa · Kinkole",
    "imageAlt": "Grilled fish at Kinkole",
    "prepTime": "25 min",
    "cookTime": "30 min",
    "ingredients": [
      "1 whole fish, cleaned",
      "3 garlic cloves",
      "2 cm ginger",
      "1 lemon",
      "Pili-pili, salt and oil"
    ],
    "steps": [
      "Score the fish and coat with a marinade of garlic, ginger, lemon, pili-pili, salt and oil.",
      "Rest 20 to 30 minutes.",
      "Grill over medium coals, turning carefully, for about 30 minutes.",
      "Serve with plantain, fries or a raw onion salad."
    ],
    "tags": [
      "grilled fish",
      "Kinkole",
      "Kinshasa",
      "grill",
      "pili-pili"
    ],
    "body": "Braised fish at Kinkole (and Maluku) is a Kinshasa street landmark: chili marinade, coal smoke, tables by the Congo River. On a home grill, keep medium heat so the flesh stays juicy."
  },
  "pondu": {
    "title": "Pondu (saka-saka)",
    "seoTitle": "Pondu recipe (saka-saka) — cassava leaves",
    "description": "Pondu (saka-saka) recipe: cassava leaves simmered in palm oil with onions and smoked fish—everyday Congolese classic from the DRC.",
    "region": "Kinshasa & Cuvette",
    "imageAlt": "Plate of cassava leaves with fufu",
    "prepTime": "45 min",
    "cookTime": "1 h 30",
    "ingredients": [
      "1 kg pounded cassava leaves",
      "150 ml red palm oil",
      "2 onions",
      "200 g smoked fish",
      "Salt",
      "Water"
    ],
    "steps": [
      "Place the leaves in a large pot with water and cook uncovered for a long time, stirring often.",
      "Add onions, palm oil and smoked fish.",
      "Continue simmering until the leaves are fully cooked and no longer bitter.",
      "Season and thicken as needed.",
      "Serve with fufu, chikwangue or rice."
    ],
    "tags": [
      "pondu",
      "saka-saka",
      "cassava leaves",
      "palm oil",
      "everyday"
    ],
    "body": "Pondu—also called saka-saka or mpondu—is the cassava-leaf stew most associated with Congolese home cooking. A vegetarian version without fish or meat is common on fasting days. The long simmer softens the leaves and builds the sauce; serve with chikwangue or fufu.",
    variants: [
      {
        id: "vegetarien",
        title: "Vegetarian version",
        description: "No fish or meat — fasting days or Friday meals.",
        imageAlt: "Cooked cassava leaves served with fufu",
        ingredients: [
          "2 kg cassava leaves (pondu), fresh or frozen",
          "200 ml red palm oil",
          "3 medium onions, chopped",
          "4 garlic cloves, crushed",
          "2 vegetable stock cubes or salt",
          "Chili to taste",
          "Water"
        ],
        steps: [
          "Wash the leaves, blanch briefly, then chop finely.",
          "Sweat onions and garlic in palm oil until soft.",
          "Add the pondu, coat with oil, then add a little water.",
          "Cover and simmer gently 1 h to 1 h 15, stirring, until creamy.",
          "Season (cube or salt, chili) and cook 10 minutes more. Serve with fufu or chikwangue."
        ]
      },
      {
        id: "viande",
        title: "With meat",
        description: "Same gesture, with simmered meat instead of smoked fish.",
        imageAlt: "Plate of simmered cassava leaves",
        ingredients: [
          "2 kg cassava leaves (pondu), fresh or frozen",
          "200 ml red palm oil",
          "3 medium onions, chopped",
          "4 garlic cloves, crushed",
          "400 g beef or goat in small pieces",
          "2 stock cubes",
          "Salt and chili to taste",
          "Water"
        ],
        steps: [
          "Brown the meat in a little palm oil, then set aside.",
          "In the same pot, sweat onions and garlic, add chopped pondu and a splash of water.",
          "Cover and simmer gently 45 minutes.",
          "Return the meat, add the rest of the oil and a little water. Cook another 45 minutes until creamy and tender.",
          "Season and serve with fufu, chikwangue or rice."
        ]
      }
    ]
  },
  "riz-moambe": {
    "title": "Rice with moambe",
    "description": "Rice cooked or served with a palm-nut moambe sauce for a rich, fragrant plate.",
    "region": "Kinshasa & Cuvette",
    "imageAlt": "Rice dish with a rich red sauce",
    "prepTime": "15 min",
    "cookTime": "35 min",
    "ingredients": [
      "400 g rice",
      "300 g palm-nut pulp or palm cream",
      "1 onion",
      "2 garlic cloves",
      "Salt and chili",
      "Water"
    ],
    "steps": [
      "Cook the rice in salted water and keep warm.",
      "Sweat the onion and garlic, then add the diluted palm pulp.",
      "Simmer until the sauce is smooth and coats a spoon.",
      "Season with salt and chili.",
      "Serve the sauce over or beside the rice."
    ],
    "tags": [
      "rice",
      "moambe",
      "palm nut"
    ],
    "body": "Rice with moambe extends the festive sauce into an everyday plate."
  },
  "saka-madesu": {
    "title": "Saka-madesu",
    "seoTitle": "Saka-madesu recipe",
    "description": "Saka-madesu recipe: cassava leaves (pondu) and beans simmered together in palm oil—classic Western DRC pairing.",
    "region": "Western DRC",
    "imageAlt": "Stew of cassava leaves and beans",
    "prepTime": "30 min + 8 h soaking",
    "cookTime": "2 h",
    "ingredients": [
      "400 g dried beans, soaked overnight",
      "800 g pounded cassava leaves, fresh or frozen",
      "150 ml red palm oil",
      "2 onions, chopped",
      "2 garlic cloves, crushed",
      "1 small chili",
      "Salt",
      "Water"
    ],
    "steps": [
      "Drain the beans, cover with fresh water and cook about 1 hour until almost tender.",
      "Put the pounded leaves in a large pot, cover with water and cook uncovered for 45 minutes, stirring now and then.",
      "Add the onions, garlic, chili and palm oil. Continue cooking 20 minutes.",
      "Stir in the beans with a little of their water, then simmer another 25 to 30 minutes. The leaves must be fully cooked with no raw bitterness.",
      "Season, adjust the consistency and serve with fufu or chikwangue."
    ],
    "tags": [
      "saka-madesu",
      "pondu",
      "beans",
      "cassava leaves",
      "palm oil"
    ],
    "body": "Saka-madesu joins two everyday pillars: saka (pondu / cassava leaves) and madesu (beans). Some versions add smoked fish; others stay plant-based. See also separate pondu and madesu pages.",
    variants: [
      {
        id: "poisson-fume",
        title: "With smoked fish",
        description: "Leaves, beans and smoked fish — a richer western version.",
        imageAlt: "Stew of cassava leaves and beans",
        ingredients: [
          "400 g dried beans, soaked overnight",
          "800 g pounded cassava leaves, fresh or frozen",
          "200 g smoked fish",
          "150 ml red palm oil",
          "2 onions, chopped",
          "2 garlic cloves, crushed",
          "1 small chili",
          "Salt",
          "Water"
        ],
        steps: [
          "Cook beans and leaves as in the main recipe until mid-cooked.",
          "Soak the smoked fish 20 minutes, break it up and add with oil, onions and garlic.",
          "Simmer another 30 minutes until the leaves are tender and the fish is integrated.",
          "Salt lightly. Serve with fufu or chikwangue."
        ]
      },
      {
        id: "vegetal",
        title: "Fully plant-based",
        description: "No fish — pure leaves and beans for meat-free days.",
        ingredients: [
          "400 g dried beans, soaked overnight",
          "800 g pounded cassava leaves, fresh or frozen",
          "150 ml red palm oil",
          "2 onions, chopped",
          "2 garlic cloves, crushed",
          "1 small chili",
          "Salt",
          "Water"
        ],
        steps: [
          "Follow the main recipe as written (already without fish).",
          "Cook the leaves thoroughly — no raw bitterness.",
          "Salt at the end and serve with fufu or chikwangue."
        ]
      }
    ]
  },
  "salade-kisangani": {
    "title": "Cabbage-carrot salad",
    "description": "A crunchy cabbage and carrot salad bound with mayonnaise, brightened with vinegar and finished with eggs.",
    "region": "Kisangani",
    "imageAlt": "Cabbage, carrot and egg salad",
    "prepTime": "20 min",
    "cookTime": "10 min",
    "ingredients": [
      "1/2 white cabbage, finely shredded",
      "2 carrots, grated",
      "3 hard-boiled eggs",
      "4 tbsp mayonnaise",
      "1 tbsp vinegar",
      "Salt and pepper"
    ],
    "steps": [
      "Mix the cabbage and carrots.",
      "Dress with mayonnaise, vinegar, salt and pepper.",
      "Add sliced eggs on top.",
      "Chill briefly before serving."
    ],
    "tags": [
      "salad",
      "Kisangani",
      "cold"
    ],
    "body": "Kisangani salad appears at celebrations and Sunday tables—fresh against richer dishes."
  },
  "soso-lumba-lumba": {
    "title": "Soso ya lumba-lumba",
    "description": "Kasai chicken simmered in a fresh, highly fragrant African basil sauce.",
    "region": "Greater Kasai",
    "imageAlt": "Chicken with fufu",
    "prepTime": "25 min",
    "cookTime": "1 h",
    "ingredients": [
      "1 chicken, cut into pieces",
      "1 large bunch of lumba-lumba (African basil)",
      "2 onions",
      "3 garlic cloves",
      "2 tomatoes",
      "Oil, salt and chili",
      "Water"
    ],
    "steps": [
      "Brown the chicken and set aside.",
      "Sweat onions and garlic, add tomatoes.",
      "Return the chicken with water and simmer until tender.",
      "Add the chopped lumba-lumba near the end so it stays fragrant.",
      "Season and serve with bukari or fufu."
    ],
    "tags": [
      "chicken",
      "basil",
      "Kasai"
    ],
    "body": "Lumba-lumba gives this Kasai chicken its unmistakable perfume."
  },
  "soso-ya-sauce": {
    "title": "Soso ya sauce",
    "description": "Chicken simmered in a generous tomato sauce lifted with garlic, ginger and pili-pili.",
    "region": "Kinshasa",
    "imageAlt": "Congolese chicken simmered in a red sauce",
    "prepTime": "25 min",
    "cookTime": "55 min",
    "ingredients": [
      "1 chicken, cut into pieces",
      "5 ripe tomatoes, crushed",
      "2 onions, sliced",
      "3 garlic cloves",
      "1 piece of fresh ginger",
      "3 tbsp oil",
      "1 bay leaf",
      "Pili-pili, salt and pepper",
      "250 ml water"
    ],
    "steps": [
      "Season the chicken and brown on all sides in the oil.",
      "Set the chicken aside and sweat the onions in the same pot.",
      "Add the pounded garlic and ginger, then the tomatoes and bay leaf.",
      "Reduce the sauce 12 to 15 minutes until concentrated.",
      "Return the chicken, add water and pili-pili, then cover.",
      "Simmer gently 30 to 35 minutes. Uncover at the end if the sauce should thicken."
    ],
    "tags": [
      "chicken",
      "tomato",
      "Kinshasa"
    ],
    "body": "Served with rice, fufu or makemba, soso ya sauce is a family dish whose seasoning shifts from house to house."
  },
  "poulet-mayo": {
    title: "Poulet mayo",
    seoTitle: "Poulet mayo recipe — Kinshasa",
    description:
      "Poulet mayo recipe: browned chicken coated in mayonnaise with garlic, mustard and pili-pili — a Kinshasa classic for tables and celebrations.",
    region: "Kinshasa",
    imageAlt: "Golden chicken ready to be coated in sauce",
    prepTime: "25 min",
    cookTime: "45 min",
    ingredients: [
      "1 chicken, cut into pieces",
      "3 tbsp oil",
      "2 onions, sliced",
      "3 garlic cloves, crushed",
      "1 tsp mustard",
      "200 ml mayonnaise",
      "1 tbsp lemon juice",
      "Pili-pili, salt and pepper",
      "1 stock cube, optional",
    ],
    steps: [
      "Season the chicken and brown it in hot oil, then set aside.",
      "In the same pot, soften the onions. Add the garlic, crumbled stock cube and a splash of water.",
      "Return the chicken, cover and simmer 25 to 30 minutes until tender.",
      "Off the heat, mix mayonnaise, mustard, lemon and pili-pili. Coat the still-warm chicken.",
      "Stir gently so the sauce does not split. Serve with fries, rice or salad.",
    ],
    tags: ["poulet mayo", "mayonnaise", "chicken", "Kinshasa", "celebration"],
    body: "Poulet mayo is neither moambe nor a tomato sauce: the cold mayonnaise liaison is added at the end. Mustard and chili levels vary widely. Another celebration chicken: moambe; for tomato sauce, see soso ya sauce.",
  },
  "ntaba-sauce": {
    title: "Ntaba in sauce",
    description:
      "Goat simmered slowly in a tomato and onion sauce — the stewed version of ntaba, distinct from the grilled one.",
    region: "Kinshasa & Kongo-Central",
    imageAlt: "Goat stew simmered in a brown sauce",
    prepTime: "25 min",
    cookTime: "1 h 45",
    ingredients: [
      "1.5 kg goat, cut into pieces",
      "3 onions, sliced",
      "4 ripe tomatoes, crushed",
      "4 garlic cloves, crushed",
      "2 cm ginger, grated",
      "3 tbsp oil",
      "1 small chili",
      "1 stock cube",
      "Salt, pepper and water",
    ],
    steps: [
      "Brown the goat pieces in the oil. Set aside.",
      "Sweat onions, garlic and ginger. Add the tomatoes and reduce for 10 minutes.",
      "Return the meat with the cube, chili and water to cover. Bring to a boil.",
      "Lower the heat, cover and simmer 1 h 15 to 1 h 30 until the goat is very tender.",
      "Uncover to thicken the sauce if needed. Serve with rice, chikwangue or plantain.",
    ],
    tags: ["goat", "sauce", "simmered", "ntaba"],
    body: "Unlike grilled ntaba over coals, this version stays entirely in the pot. Cooking time depends on the animal and the size of the pieces.",
  },
  "viande-ya-sauce": {
    title: "Viande ya sauce",
    description:
      "Beef simmered in a generous tomato and onion sauce — everyday Kinshasa cooking, distinct from kamundele skewers.",
    region: "Kinshasa",
    imageAlt: "Tomato beef stew in a pot",
    prepTime: "20 min",
    cookTime: "1 h 30",
    ingredients: [
      "1 kg stewing beef",
      "3 onions, sliced",
      "4 tomatoes, crushed",
      "3 garlic cloves",
      "2 tbsp tomato paste, optional",
      "3 tbsp oil",
      "1 bay leaf",
      "1 stock cube",
      "Chili, salt and water",
    ],
    steps: [
      "Brown the meat in oil in batches. Set aside.",
      "Soften the onions, add garlic, tomatoes and paste. Cook 8 minutes.",
      "Return the beef with bay leaf, cube and water to cover. Season lightly.",
      "Simmer covered 1 h 15 to 1 h 30 until tender and the sauce has thickened.",
      "Adjust the chili and serve with rice, fufu or potatoes.",
    ],
    tags: ["beef", "sauce", "tomato", "everyday"],
    body: "Viande ya sauce is a table stew, not a street grill. Carrots or peppers are often added depending on the market.",
  },
  "poisson-moambe": {
    title: "Fish moambe",
    description:
      "Firm fish simmered in palm-nut pulp sauce — river moambe, distinct from chicken moambe.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Fish moambe served with rice",
    prepTime: "25 min",
    cookTime: "50 min",
    ingredients: [
      "1.2 kg firm fish (captain, tilapia or similar), in steaks",
      "350 ml palm-nut cream / pulp (moambe)",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "2 tbsp oil",
      "Salt, chili and a little water",
    ],
    steps: [
      "Season the fish and brown it quickly in oil, then set aside.",
      "Sweat onions, garlic and tomatoes into a short sauce.",
      "Add the moambe and half a glass of water. Stir and bring to a gentle simmer.",
      "Return the fish, cover and cook 25 to 35 minutes without stirring too much.",
      "Adjust seasoning and serve with white rice or chikwangue.",
    ],
    tags: ["moambe", "fish", "palm nut", "celebration"],
    body: "Fish moambe needs flesh that holds during cooking. As with chicken, tinned pulp remains an honest base outside the fresh-nut season.",
  },
  "liboke-viande": {
    title: "Meat liboke",
    description:
      "Meat marinated with aromatics, wrapped in banana leaves and steamed — the liboke gesture applied to meat, not fish.",
    region: "Bandundu & Kongo-Central",
    imageAlt: "Closed liboke pouch in leaves, ready to cook",
    prepTime: "30 min + 1 h marinating",
    cookTime: "1 h",
    ingredients: [
      "800 g beef or goat, in pieces",
      "2 onions, sliced into rings",
      "2 tomatoes, sliced",
      "1 bell pepper, cut into strips",
      "3 tbsp palm oil",
      "2 garlic cloves, crushed",
      "1 tsp grated ginger",
      "Salt, chili, stock cube",
      "4 large banana leaves",
    ],
    steps: [
      "Mix oil, garlic, ginger, salt, chili and cube. Coat the meat and marinate for 1 hour.",
      "Soften the banana leaves over the flame.",
      "Fill each leaf with onion, tomato, pepper and meat. Drizzle with a little palm oil.",
      "Close into a tight parcel.",
      "Steam or bake at 180 °C for 50 to 60 minutes.",
      "Serve opened at the table with plantain or fufu.",
    ],
    tags: ["meat", "banana leaf", "steam", "liboke"],
    body: "Meat liboke uses the same gesture as fish liboke, with a longer cooking time to tenderise the flesh.",
  },
  "sauce-gombo": {
    title: "Okra sauce",
    description:
      "Fresh okra simmered to its characteristic silky texture, with tomato, onion and optionally smoked fish or meat.",
    region: "Kinshasa & Western DRC",
    imageAlt: "Simmered okra stew",
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      "500 g fresh okra",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 tbsp palm oil or neutral oil",
      "1 garlic clove",
      "150 g smoked fish, optional",
      "Salt, chili and a little water",
    ],
    steps: [
      "Wash the okra, trim the ends and slice into rounds.",
      "Sweat onion and garlic in the oil, add the tomatoes and cook 5 minutes.",
      "Add the okra, a splash of water and the smoked fish if using.",
      "Simmer over medium heat 25 to 30 minutes, stirring now and then, to the texture you want.",
      "Season and serve with rice or fufu.",
    ],
    tags: ["okra", "gombo", "sauce", "vegetable"],
    body: "Okra’s silkiness is managed through cooking time and water. Some households add a pinch of cooking soda; others prefer a shorter sauce.",
  },
  "kossa-kossa": {
    title: "Kossa-kossa",
    description:
      "Dried shrimp soaked then simmered with tomato, onion and pili-pili — an iodised everyday Congolese sauce.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Dried shrimp used in cooking",
    prepTime: "20 min + 30 min soaking",
    cookTime: "35 min",
    ingredients: [
      "200 g kossa-kossa (dried shrimp)",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "2 garlic cloves",
      "2 tbsp palm oil",
      "1 small chili",
      "Salt and water",
    ],
    steps: [
      "Rinse then soak the shrimp for 30 minutes. Drain.",
      "Sweat onions and garlic in the oil. Add tomatoes and chili.",
      "Add the shrimp and a little water. Simmer 25 minutes.",
      "Taste before salting: dried shrimp are already salty and iodised.",
      "Serve with rice, chikwangue or plantain.",
    ],
    tags: ["shrimp", "dried", "sauce", "tomato"],
    body: "Kossa-kossa brings a concentrated sea taste. Quality at the market is read in colour and smell more than in size.",
  },
  "foie-boeuf-saute": {
    title: "Sautéed beef liver",
    seoTitle: "Sautéed beef liver recipe — Kinshasa street food",
    description:
      "Sautéed beef liver recipe: slices quickly seared with onion and chili — street snack and express plate common in Kinshasa.",
    region: "Kinshasa",
    imageAlt: "Sautéed liver with onions in a pan",
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      "600 g beef liver, sliced",
      "2 onions, sliced",
      "2 garlic cloves, chopped",
      "2 tbsp oil",
      "1 tbsp lemon juice",
      "Chili, salt and pepper",
    ],
    steps: [
      "Pat the liver dry and remove visible sinews. Season with salt, pepper and a little lemon.",
      "Heat the oil high. Sear the liver 2 to 3 minutes per side. Set aside.",
      "Quickly sweat the onions and garlic in the pan.",
      "Return the liver, add chili and toss 1 to 2 minutes without overcooking.",
      "Serve at once with bread, fries or rice.",
    ],
    tags: ["liver", "beef", "pan", "street food", "Kinshasa"],
    body: "Liver hardens if it stays too long on the heat. In Kinshasa it is often sold as a hot street portion with plenty of onion.\n\n**Market tip**: choose firm, bright-red liver without a strong smell. A short lemon marinade helps aroma and taste.\n\n**At the table**: hot bread, fries, or [loso mayonnaise](/en/recettes/loso-mayonnaise/). For other street grills, see [kamundele](/en/recettes/kamundele/) and [liver skewers](/en/recettes/brochettes-foie/).",
  },
  "porc-braise": {
    title: "Braised pork",
    description:
      "Pork pieces marinated with aromatics then braised over coals to a golden crust — pork grilling previously missing from the catalogue.",
    region: "Kinshasa",
    imageAlt: "Pork grilled over coals",
    prepTime: "25 min + 2 h marinating",
    cookTime: "55 min",
    ingredients: [
      "1.5 kg pork (shoulder or neck), in pieces",
      "2 onions, one grated",
      "4 garlic cloves",
      "2 cm ginger",
      "2 tbsp lemon juice",
      "2 tbsp oil",
      "Chili, salt and pepper",
    ],
    steps: [
      "Make a marinade with grated onion, garlic, ginger, lemon, oil, salt, pepper and chili.",
      "Coat the pork and marinate 2 hours in the fridge.",
      "Pre-cook in a pot 20 to 25 minutes with a little water and the marinade.",
      "Drain, then braise over medium coals 20 to 30 minutes, basting with reserved juices.",
      "Serve with raw onion, pili-pili and chikwangue or plantain.",
    ],
    tags: ["pork", "braise", "grill", "Kinshasa"],
    body: "Braised pork differs from kamundele (small beef skewers) in cut, cooking time and meat. Pre-cooking before the coals varies from stall to stall.",
  },
  "bouillie-arachide": {
    title: "Peanut porridge",
    description:
      "A thick porridge of flour and peanut paste, sweet and comforting — classic breakfast or snack, distinct from savoury mains.",
    region: "Throughout the DRC",
    imageAlt: "Bowl of creamy porridge",
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      "120 g maize flour (or cassava flour)",
      "80 g smooth peanut paste",
      "1 l water",
      "60 to 80 g sugar",
      "1 pinch of salt",
      "1 tsp vanilla or lemon zest, optional",
    ],
    steps: [
      "Loosen the flour in 250 ml cold water until smooth.",
      "Bring the rest of the water to a boil with the salt.",
      "Pour in the flour mixture in a thin stream, stirring. Cook 12 to 15 minutes over medium heat, stirring constantly.",
      "Stir in the peanut paste and sugar. Cook 5 to 8 minutes more until creamy.",
      "Flavour if desired. Serve warm, plain or with a splash of milk.",
    ],
    tags: ["peanut", "porridge", "breakfast", "snack"],
    body: "Porridge is also made with maize or cassava alone, without peanut. Thickness and sugar vary by household; peanut paste adds richness and a snack-time aroma.",
  },
  "beignets-banane": {
    title: "Banana fritters",
    description:
      "Fritters made from sweet banana batter, golden and soft — different from mikate (yeasted dough) and makemba (plain fried plantain).",
    region: "Kinshasa & Western DRC",
    imageAlt: "Golden banana fritters",
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      "4 very ripe sweet bananas",
      "150 g flour",
      "40 g sugar",
      "1 egg",
      "1 tsp baking powder",
      "1 pinch of salt",
      "1 tsp vanilla or nutmeg, optional",
      "Frying oil",
    ],
    steps: [
      "Mash the bananas into a smooth puree.",
      "Add the egg, sugar, salt and vanilla. Mix.",
      "Fold in the flour and baking powder to a thick batter that drops from a spoon.",
      "Heat the oil over medium heat. Drop spoonfuls of batter.",
      "Fry 2 to 3 minutes per side until golden. Drain and serve warm.",
    ],
    tags: ["banana", "fritter", "snack", "fried"],
    body: "Ripe banana partly replaces sugar and carries the flavour. This is neither plain fried plantain (makemba) nor a yeasted water dough (mikate).",
  },
  "gateau-manioc": {
    title: "Cassava cake",
    description:
      "A soft cake from grated cassava or cassava flour, sweet and fragrant — a snack and celebration dessert.",
    region: "Throughout the DRC",
    imageAlt: "Cassava cake cut into slices",
    prepTime: "25 min",
    cookTime: "45 min",
    ingredients: [
      "400 g grated sweet cassava (or 280 g cassava flour)",
      "3 eggs",
      "150 g sugar",
      "100 ml oil or melted butter",
      "150 ml milk (or coconut milk)",
      "1 packet baking powder (11 g)",
      "1 pinch of salt",
      "1 tsp vanilla",
    ],
    steps: [
      "Preheat the oven to 180 °C. Grease a tin.",
      "If using fresh cassava, grate finely and press lightly to remove excess water.",
      "Beat eggs and sugar until pale. Add oil, milk and vanilla.",
      "Fold in the cassava (or flour), baking powder and salt. Mix without overworking.",
      "Pour into the tin. Bake 40 to 50 minutes until a knife comes out clean.",
      "Cool slightly before unmoulding. Serve in slices.",
    ],
    tags: ["cassava", "cake", "dessert", "snack"],
    body: "Use only sweet cassava meant for eating. The flour version is more even; fresh grated cassava stays moister.",
  },
  "tangawisi": {
    title: "Tangawisi",
    seoTitle: "Tangawisi recipe — ginger juice",
    description:
      "Tangawisi recipe: fresh ginger juice, sharp and tangy, sweetened to taste — homemade drink of Kinshasa and the diaspora.",
    region: "Kinshasa",
    imageAlt: "Glass of fresh ginger juice",
    prepTime: "20 min + 1 h resting",
    cookTime: "0 min",
    ingredients: [
      "250 g fresh ginger",
      "1.5 l water",
      "100 to 150 g sugar",
      "Juice of 1 lemon (or 2 limes)",
      "1 pinch of chili, optional",
    ],
    steps: [
      "Wash and peel the ginger, cut into pieces.",
      "Blend with 500 ml water to a coarse puree.",
      "Add the rest of the water. Infuse 30 to 60 minutes at room temperature.",
      "Strain through a fine cloth or sieve, pressing well.",
      "Sweeten, add lemon (and chili if desired). Chill. Serve cold.",
    ],
    tags: ["tangawisi", "ginger juice", "ginger", "drink", "Kinshasa"],
    body: "Tangawisi (ginger juice) is drunk iced, often after a spicy meal. Ginger and sugar levels vary widely. Other drinks: bissap, passion fruit. Pair with mikate at snack time.",
  },
  "jus-bissap": {
    title: "Bissap juice",
    description:
      "A sweet infusion of dried hibiscus flowers (bissap), deep red and tart — a drink, distinct from ngai-ngai cooked as a dish.",
    region: "Kinshasa & Western DRC",
    imageAlt: "Glass of red bissap juice",
    prepTime: "10 min + cooling",
    cookTime: "20 min",
    ingredients: [
      "80 g dried bissap (hibiscus) flowers",
      "2 l water",
      "150 to 200 g sugar",
      "Juice of 1 lemon, optional",
      "A few mint leaves or a vanilla stick, optional",
    ],
    steps: [
      "Rinse the flowers briefly. Bring them to a boil in the water.",
      "Lower the heat and infuse 15 to 20 minutes.",
      "Strain. Sweeten while still warm so the sugar dissolves.",
      "Add lemon and aromatics if desired. Cool, then refrigerate.",
      "Serve iced.",
    ],
    tags: ["bissap", "hibiscus", "juice", "drink"],
    body: "Bissap as a drink is not ngai-ngai in sauce: same hibiscus flowers, different gesture — a sweet infusion here, a savoury simmer where ngai-ngai is a dish.",
  },
  "jus-passion": {
    title: "Passion fruit juice",
    description:
      "Fresh passion fruit juice, tart and fragrant — a very common drink in Kinshasa and the diaspora.",
    region: "Kinshasa",
    imageAlt: "Glass of passion fruit juice",
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      "12 ripe passion fruits",
      "600 ml cold water",
      "60 to 80 g sugar",
      "Juice of ½ lemon, optional",
    ],
    steps: [
      "Halve the fruits and scoop out the pulp (seeds included).",
      "Blend briefly with the water, or mash the pulp into the water with a fork.",
      "Strain for a smoother juice, or leave the seeds if you prefer.",
      "Sweeten, add lemon if desired. Taste and adjust.",
      "Serve very cold, with ice.",
    ],
    tags: ["passion fruit", "juice", "fruit", "drink"],
    body: "In season, passion fruit is easy to find at the market. Out of season, frozen pulp remains an honest base for a homemade juice.",
  },
  sombe: {
    title: "Sombe",
    seoTitle: "Sombe recipe — cassava leaves (Katanga / Kivu)",
    description:
      "Sombe recipe: cassava leaves simmered in palm oil — the eastern DRC name and gesture, cousin to western pondu.",
    region: "Greater Katanga",
    imageAlt: "Plate of sombe, cooked cassava leaves",
    prepTime: "40 min",
    cookTime: "1 h 30",
    ingredients: [
      "2 kg cassava leaves, fresh or frozen, finely chopped",
      "200 ml red palm oil",
      "2 onions, chopped",
      "3 garlic cloves, crushed",
      "250 g smoked fish or meat, optional",
      "1 stock cube",
      "Salt and pili-pili",
      "Water",
    ],
    steps: [
      "Wash the leaves, blanch briefly if very bitter, then chop finely.",
      "Sweat onions and garlic in palm oil until soft.",
      "Add the leaves, coat well with oil, then add a little water.",
      "Cover and simmer gently 1 h to 1 h 15, stirring often, until creamy.",
      "Add smoked fish or meat, the cube, salt and chili. Cook 15 minutes more.",
      "Serve with bukari, fufu or rice.",
    ],
    tags: ["sombe", "cassava leaves", "Katanga", "Kivu", "palm oil"],
    body: "Sombe is the eastern name (Katanga, Kivu) for simmered cassava leaves—the same gesture as pondu / saka-saka in Kinshasa and the West. Oil, cooking time and smoked fish vary by household. In Lubumbashi it often sits beside bukari.",
    variants: [
      {
        id: "vegetarien",
        title: "Vegetarian version",
        description: "Leaves alone, no fish or meat — common on lean days.",
        imageAlt: "Plate of sombe, cooked cassava leaves",
        ingredients: [
          "2 kg cassava leaves, fresh or frozen, finely chopped",
          "200 ml red palm oil",
          "2 onions, chopped",
          "3 garlic cloves, crushed",
          "1 vegetable stock cube or salt",
          "Pili-pili",
          "Water"
        ],
        steps: [
          "Wash the leaves, blanch briefly if needed, then chop finely.",
          "Sweat onions and garlic in palm oil.",
          "Add the leaves, coat with oil, add a little water.",
          "Cover and simmer 1 h 15 on low heat, stirring, until creamy.",
          "Season and serve with bukari or fufu."
        ]
      },
      {
        id: "viande",
        title: "With meat",
        description: "Sombe enriched with simmered meat — festive Katanga tables.",
        ingredients: [
          "2 kg cassava leaves, fresh or frozen, finely chopped",
          "200 ml red palm oil",
          "2 onions, chopped",
          "3 garlic cloves, crushed",
          "400 g beef in small pieces",
          "1 stock cube",
          "Salt and pili-pili",
          "Water"
        ],
        steps: [
          "Brown the meat, remove it. Sweat onions and garlic in the oil.",
          "Add the leaves and a splash of water; simmer 45 minutes.",
          "Return the meat and cook another 45 minutes until tender.",
          "Season and serve with bukari."
        ]
      }
    ]
  },
  "soso-ya-kotumba": {
    title: "Soso ya kotumba",
    seoTitle: "Soso ya kotumba recipe — grilled chicken",
    description:
      "Soso ya kotumba recipe: chicken marinated with aromatics then grilled or roasted until the skin is crisp — Congolese grill food, distinct from poulet mayo.",
    region: "Kinshasa",
    imageAlt: "Golden grilled chicken ready to serve",
    prepTime: "25 min + 2 h marinade",
    cookTime: "50 min",
    ingredients: [
      "1 whole chicken or pieces (about 1.5 kg)",
      "2 onions, one grated",
      "4 garlic cloves, crushed",
      "2 cm ginger, grated",
      "Juice of 1 lemon",
      "3 tbsp oil",
      "1 tsp herbes de Provence or thyme",
      "Pili-pili, salt and pepper",
      "1 stock cube, optional",
    ],
    steps: [
      "Mix grated onion, garlic, ginger, lemon, oil, herbs, salt, pepper, pili-pili and crumbled cube.",
      "Score the chicken, coat with marinade and chill at least 2 hours.",
      "Par-cook 15–20 minutes with a little water and leftover marinade, or go straight to the grill.",
      "Grill over medium coals (or roast at 200 °C) 30–40 minutes, basting, until the skin is golden and the meat cooked.",
      "Serve with pili-pili sauce, raw onion, fries or plantain.",
    ],
    tags: ["soso ya kotumba", "grilled chicken", "braise", "Kinshasa", "street food"],
    body: "Soso ya kotumba (“grilled chicken” in Lingala) is about marinade and fire—not mayo sauce or moambe. In the oven, aim for the same crisp skin as over wood coals.",
  },
  mikila: {
    title: "Mikila",
    seoTitle: "Mikila recipe — Congolese oxtail",
    description:
      "Mikila recipe: oxtail simmered long in a tomato-onion sauce until falling-apart tender — a feast and diaspora favourite.",
    region: "Kinshasa",
    imageAlt: "Beef stew in a rich sauce",
    prepTime: "30 min",
    cookTime: "2 h 30",
    ingredients: [
      "1.5 kg oxtail, cut into sections",
      "3 onions, sliced",
      "4 ripe tomatoes, crushed (or 400 g chopped tomatoes)",
      "4 garlic cloves, crushed",
      "2 cm ginger, grated",
      "2 tbsp tomato paste",
      "3 tbsp oil",
      "2 bay leaves",
      "1 stock cube",
      "Salt, pepper and pili-pili",
      "Water",
    ],
    steps: [
      "Rinse the oxtail pieces. Brown in hot oil, then set aside.",
      "In the same pot, sweat the onions. Add garlic, ginger, tomatoes and paste.",
      "Cook 8–10 minutes until the sauce starts to reduce.",
      "Return the meat, add bay, cube, salt, pepper and enough water to cover.",
      "Cover and simmer gently 2 h to 2 h 30, adding water if needed, until very tender.",
      "Adjust seasoning and chili. Serve with fufu, rice or chikwangue.",
    ],
    tags: ["mikila", "oxtail", "tomato sauce", "feast"],
    body: "Mikila (oxtail) needs time: collagen melts into a sticky sauce typical of big tables. Common in the diaspora where frozen oxtail is easy to find.",
  },
  makoso: {
    title: "Makoso",
    seoTitle: "Makoso recipe — Congolese pig trotters",
    description:
      "Makoso recipe: pig trotters simmered long in a fragrant, chili-forward broth — a Kinshasa feast classic.",
    region: "Kinshasa",
    imageAlt: "Cooked pig trotters ready to simmer",
    prepTime: "35 min",
    cookTime: "2 h 15",
    ingredients: [
      "1.5 kg pig trotters, cut and cleaned well",
      "2 onions, sliced",
      "4 garlic cloves",
      "3 cm ginger",
      "2 tomatoes, crushed, optional",
      "2 tbsp oil",
      "1 bouquet garni (celery, bay, thyme)",
      "1–2 chilies to taste",
      "1 stock cube",
      "Salt and pepper",
      "Water",
    ],
    steps: [
      "Blanch the trotters 10 minutes in boiling water, drain and rinse.",
      "Return to a clean pot, cover with fresh water, add salt, bouquet and cube. Bring to a boil.",
      "Skim, then simmer 1 h 30 to 2 h until the meat nearly leaves the bone.",
      "In a pan, sweat onions, garlic and ginger in oil. Add tomatoes if using.",
      "Stir into the pot with the trotters, add chili and cook 20–30 minutes more.",
      "Adjust seasoning. Serve very hot with bread, plantain or fufu.",
    ],
    tags: ["makoso", "pig trotters", "pepper soup", "Kinshasa", "feast"],
    body: "Makoso (pig trotters) is a patient feast dish: long-simmered, often spicy, served in a fragrant broth. Some tables treat it like pepper soup; others like it thicker with tomato.",
  },
  "fufu-manioc": {
    title: "Cassava fufu",
    seoTitle: "Cassava fufu recipe",
    description:
      "Cassava fufu recipe: cassava flour worked with hot water into a smooth, elastic dough — a DRC staple side, distinct from maize bukari.",
    region: "Whole DRC",
    imageAlt: "Ball of fufu (foufou) served as a side",
    prepTime: "5 min",
    cookTime: "20 min",
    ingredients: [
      "500 g cassava flour (fufu / milled cossette)",
      "1.2 l water",
      "A pinch of salt, optional",
    ],
    steps: [
      "Bring about one litre of water to a boil in a heavy pot.",
      "Loosen a little flour in the remaining cold water, then pour into the pot while stirring.",
      "Let it thicken a few minutes into an even porridge.",
      "Add the rest of the flour gradually while working hard with a sturdy spatula.",
      "Turn and press the dough against the sides until smooth, elastic and leaving the pot.",
      "Shape into balls with a wet ladle. Serve at once with a sauce.",
    ],
    tags: ["fufu", "cassava fufu", "cassava flour", "side", "everyday"],
    body: "Cassava fufu (sometimes just fufu or foufou) is pinched by hand to scoop sauce. It is not bukari (maize flour, East) nor chikwangue (fermented leaf-wrapped loaf).",
  },
  "plantains-vapeur": {
    title: "Steamed plantains",
    seoTitle: "Steamed plantain recipe",
    description:
      "Steamed plantain recipe: green or just-ripe plantains cooked until tender — a simple side, distinct from fried makemba and pounded lituma.",
    region: "Whole DRC",
    imageAlt: "Plantains cooked in water or steam",
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      "4 green or just-yellow plantains",
      "Water",
      "A pinch of salt, optional",
    ],
    steps: [
      "Trim the ends, slit the skin lengthwise and peel.",
      "Cut into 4–5 cm pieces.",
      "Steam over simmering water (or simmer in lightly salted water).",
      "Cook 20–25 minutes until a knife slides in easily.",
      "Drain if needed and serve hot with fish, stewed meat or greens.",
    ],
    tags: ["steamed plantains", "plantain", "steam", "side", "quick"],
    body: "Steamed (or boiled) plantains stay neutral and starchy: they carry sauce without the caramelised sweetness of fried makemba. When pounded, they become lituma.",
  },
  "loso-na-madesu": {
    title: "Loso na madesu",
    seoTitle: "Loso na madesu recipe — rice and beans",
    description:
      "Loso na madesu recipe: rice and beans cooked together with onion, tomato and a little palm oil — an everyday Kinshasa plate.",
    region: "Kinshasa",
    imageAlt: "White rice with stewed red beans",
    prepTime: "20 min + 8 h soaking",
    cookTime: "1 h 15",
    ingredients: [
      "400 g dried red or brown beans",
      "400 g rice",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "3 tbsp red palm oil (or neutral oil)",
      "2 garlic cloves, chopped",
      "1 bay leaf",
      "Salt",
      "Water",
    ],
    steps: [
      "Soak the beans overnight, drain, then cook 50–60 minutes with the bay leaf until tender. Salt at the end.",
      "Sweat onions and garlic in oil, add tomatoes and reduce 8 minutes.",
      "Add drained beans (keep a little cooking water) and rinsed rice.",
      "Add water to cover (about 1.5× the rice volume), stir, bring to a boil.",
      "Lower the heat, cover and cook 18–20 minutes without stirring until absorbed.",
      "Rest 5 minutes covered, then fluff with a fork. Adjust salt.",
    ],
    tags: ["loso na madesu", "rice and beans", "madesu", "Kinshasa", "everyday"],
    body: "Loso na madesu (“rice and beans”) is a simple everyday plate: less saucy than madesu alone, more filling than plain rice. Cook the beans ahead to speed things up.",
  },
  "sauce-pili-pili": {
    title: "Pili-pili sauce",
    seoTitle: "Congolese pili-pili sauce recipe",
    description:
      "Pili-pili sauce recipe: fresh chilies blended with garlic, onion and a little oil — a sharp condiment for grills, fish and Kinshasa tables.",
    region: "Whole DRC",
    imageAlt: "Red chili sauce like piri-piri / pili-pili",
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      "15–25 fresh chilies (to heat preference), stemmed",
      "4 garlic cloves",
      "1 small onion",
      "1 ripe tomato, optional",
      "Juice of ½ lemon",
      "3 tbsp oil",
      "1 tsp salt",
      "2 tbsp water",
    ],
    steps: [
      "Wash the chilies. Remove some seeds to soften the heat if needed.",
      "Blend chilies, garlic, onion, tomato (if using), lemon, salt and water to a coarse paste.",
      "Heat the oil in a small pan over medium heat.",
      "Add the paste and cook 8–10 minutes until the raw smell fades and it thickens slightly.",
      "Taste, adjust salt. Cool and jar in the fridge.",
      "Serve in small amounts beside grills and fish.",
    ],
    tags: ["pili-pili", "chili sauce", "condiment", "grill", "chili"],
    body: "Pili-pili sauce is not a main dish: it is the table’s heat. Every household doses chili differently; tomato softens, lemon brightens. Serve with grilled chicken, ntaba, braised fish or kamundele.",
  },
  sambaza: {
    title: "Sambaza with tomatoes",
    seoTitle: "Sambaza recipe — Lake Tanganyika fish",
    description:
      "Sambaza recipe: small Lake Tanganyika fish pan-fried then simmered in a tomato-onion sauce — eastern DRC classic, cousin to kapenta.",
    region: "Haut-Katanga & Tanganyika",
    imageAlt: "Small lake fish like sambaza / kapenta",
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "400 g sambaza, fresh or dried",
      "3 ripe tomatoes, crushed",
      "2 onions, sliced",
      "2 garlic cloves, chopped",
      "4 tbsp oil",
      "1 small chili",
      "Salt and pepper",
      "80 ml water",
    ],
    steps: [
      "If dried, rinse the sambaza two or three times quickly, then drain well.",
      "Heat half the oil and fry the fish 5–7 minutes until crisp. Set aside.",
      "Add the rest of the oil, soften the onions, then add garlic, tomatoes and chili.",
      "Cook the sauce 8–10 minutes, add water and gently return the sambaza.",
      "Simmer uncovered 5 minutes, adjust salt and pepper. Serve with bukari or rice.",
    ],
    tags: ["sambaza", "Tanganyika", "small fish", "tomato", "East"],
    body: "Sambaza are the small fish of Lake Tanganyika, close to kapenta depending on market and language. Fresh or dried changes rinsing and salt; the tomato-onion sauce is the everyday eastern gesture.",
  },
  ndunda: {
    title: "Ndunda",
    seoTitle: "Ndunda recipe — Congolese greens",
    description:
      "Ndunda recipe: leafy greens (spinach, amaranth or a market mix) simmered with tomato and onion — everyday Kinshasa greens, distinct from Kasai biteku-teku.",
    region: "Kinshasa",
    imageAlt: "Plate of greens like ndunda / callaloo",
    prepTime: "20 min",
    cookTime: "25 min",
    ingredients: [
      "800 g leafy greens (spinach, amaranth or a mix)",
      "2 ripe tomatoes, crushed",
      "1 large onion, sliced",
      "2 garlic cloves, chopped",
      "3 tbsp oil (palm or neutral)",
      "1 small chili, optional",
      "Salt",
      "150 ml water",
    ],
    steps: [
      "Sort and wash the leaves several times. Chop roughly, keep tender stems.",
      "Sweat the onion in oil, add garlic, tomatoes and chili. Reduce 8 minutes.",
      "Add the leaves and water, salt, cover.",
      "Cook 12–15 minutes, stirring, until the leaves are tender and the sauce short.",
      "Adjust salt. Serve with fufu, rice or chikwangue.",
    ],
    tags: ["ndunda", "greens", "spinach", "Kinshasa", "everyday"],
    body: "Ndunda is Kinshasa’s everyday greens—sometimes amaranth, sometimes spinach or a market mix. In Kasai the close page is biteku-teku (lenga-lenga); here the gesture stays a short tomato sauce, peanuts optional.",
  },
  "poisson-fume-tomates": {
    title: "Smoked fish with tomatoes",
    seoTitle: "Smoked fish with tomatoes recipe",
    description:
      "Smoked fish with tomatoes recipe: smoked fish soaked then simmered in a tomato-onion sauce — everyday Congo River plate, distinct from salted makayabu.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Smoked fish ready to cook",
    prepTime: "25 min + 30 min soaking",
    cookTime: "40 min",
    ingredients: [
      "500 g smoked fish (whole or pieces)",
      "4 ripe tomatoes, crushed",
      "2 onions, sliced",
      "3 garlic cloves, crushed",
      "3 tbsp oil",
      "1 small chili, optional",
      "1 stock cube, optional",
      "Salt and pepper (go easy: smoked fish is already salty)",
      "200 ml water",
    ],
    steps: [
      "Soak the smoked fish 20–30 minutes in warm water. Drain, remove large bones and flake or cut into portions.",
      "Sweat the onions in oil, add garlic, tomatoes and chili. Reduce 10 minutes.",
      "Add the fish, water and crumbled cube if using.",
      "Cover and simmer gently 20–25 minutes without stirring much.",
      "Taste before salting. Pepper and serve with chikwangue, fufu or rice.",
    ],
    tags: ["smoked fish", "tomato", "Congo River", "everyday", "sauce"],
    body: "Smoked fish with tomatoes is the market’s quick plate: no long desalting like makayabu, just a short soak to soften. Smoke carries the flavour; the tomato-onion sauce does the rest.",
  },
  "aubergines-africaines": {
    title: "African eggplants in sauce",
    seoTitle: "African eggplant (garden eggs) recipe",
    description:
      "African eggplant (garden eggs) recipe: simmered with tomato, onion and a little oil — a Congolese market vegetable, often served with fufu or rice.",
    region: "Kinshasa & Western DRC",
    imageAlt: "Fresh African eggplants (garden eggs)",
    prepTime: "20 min",
    cookTime: "35 min",
    ingredients: [
      "600 g African eggplants (garden eggs), washed",
      "3 ripe tomatoes, crushed",
      "2 onions, sliced",
      "2 garlic cloves, chopped",
      "3 tbsp palm or neutral oil",
      "1 small chili, optional",
      "Salt",
      "150 ml water",
    ],
    steps: [
      "Halve or quarter the eggplants. Blanch 5 minutes in salted boiling water, then drain.",
      "Sweat the onions in oil, add garlic, tomatoes and chili. Reduce 8–10 minutes.",
      "Add the eggplants and water. Salt lightly.",
      "Cover and simmer gently 20 minutes until tender and the sauce is bound.",
      "Adjust salt. Serve with fufu, rice or plantain.",
    ],
    tags: ["African eggplant", "garden eggs", "vegetables", "tomato", "market"],
    body: "African eggplants (garden eggs) are smaller and more bitter than long aubergine. A quick blanch softens the taste before the tomato sauce. Easy to find in Kinshasa markets.",
  },
  "igname-bouillie": {
    title: "Boiled yam",
    seoTitle: "Boiled yam recipe",
    description:
      "Boiled yam recipe: tubers cooked in water until tender, served plain or with a short sauce — a simple side still under-documented in the catalogue.",
    region: "Whole DRC",
    imageAlt: "Pieces of boiled yam",
    prepTime: "15 min",
    cookTime: "35 min",
    ingredients: [
      "1 kg yam",
      "Water",
      "1 tsp salt",
      "Juice of ½ lemon, optional (cooking water)",
    ],
    steps: [
      "Peel the yam carefully (the skin can irritate—use gloves if needed). Cut into large pieces.",
      "Cover with cold salted water, optionally with lemon.",
      "Bring to a boil and cook 25–35 minutes until a knife slides in easily.",
      "Drain. Serve hot plain, with a tomato sauce, fish, or oil and pili-pili.",
    ],
    tags: ["yam", "tuber", "boiled", "side", "simple"],
    body: "Boiled yam is a neutral starch that carries river and market sauces well. Less visible in diaspora catalogues than plantain or cassava, it remains common when in season.",
  },
  "taro-mijote": {
    title: "Simmered taro",
    seoTitle: "Taro / malanga stew recipe",
    description:
      "Taro (malanga) stew recipe: tubers softened then cooked in a tomato-onion sauce — Cuvette and forest plate, cousin to other catalogue starches.",
    region: "Central Basin",
    imageAlt: "Taro tubers",
    prepTime: "25 min",
    cookTime: "45 min",
    ingredients: [
      "1 kg taro (malanga), peeled",
      "3 ripe tomatoes, crushed",
      "2 onions, sliced",
      "2 garlic cloves, chopped",
      "3 tbsp palm or neutral oil",
      "1 small chili, optional",
      "Salt",
      "300 ml water",
    ],
    steps: [
      "Cut the taro into medium pieces. Blanch 10 minutes in boiling water, then drain (some taro scratches the throat if raw).",
      "Sweat the onions in oil, add garlic, tomatoes and chili. Reduce 8 minutes.",
      "Add the taro and water, salt. Cover and simmer gently 25–30 minutes until tender.",
      "Stir gently at the end to bind the sauce without crushing every piece.",
      "Serve hot with fish, meat or alone as a vegetable plate.",
    ],
    tags: ["taro", "malanga", "tuber", "Cuvette", "tomato sauce"],
    body: "Taro (often called malanga in markets) is cooked after a blanch to soften the tuber. In the Cuvette and forest it sits beside liboke and fish sauces.",
  },
  "jus-mangue": {
    title: "Mango juice",
    seoTitle: "Mango juice recipe",
    description:
      "Mango juice recipe: ripe mangoes blended with water and a little sugar — seasonal Kinshasa drink, cousin to passion fruit juice and bissap.",
    region: "Kinshasa & Western DRC",
    imageAlt: "Glass of mango juice",
    prepTime: "15 min",
    cookTime: "0 min",
    ingredients: [
      "4 very ripe mangoes",
      "600 ml cold water",
      "40 to 60 g sugar, depending on the fruit",
      "Juice of ½ lemon, optional",
    ],
    steps: [
      "Wash the mangoes, peel and remove the stone. Cut the flesh into pieces.",
      "Blend with the water until smooth.",
      "Taste: sweeten if needed, add lemon to brighten.",
      "Strain for a smoother juice, or keep the pulp if you prefer.",
      "Serve very cold, with ice.",
    ],
    tags: ["mango", "juice", "fruit", "drink", "seasonal"],
    body: "Mango juice follows the mango season: when fruit is fully ripe, little sugar is needed. Out of season, frozen pulp remains an honest base.",
  },
  "jus-ananas": {
    title: "Pineapple juice",
    seoTitle: "Pineapple juice recipe",
    description:
      "Pineapple juice recipe: fresh pineapple blended with water — tart and fragrant, a market and home classic in Kinshasa.",
    region: "Kinshasa & Western DRC",
    imageAlt: "Glass of fresh pineapple juice",
    prepTime: "20 min",
    cookTime: "0 min",
    ingredients: [
      "1 ripe pineapple (about 1 kg)",
      "500 ml cold water",
      "30 to 50 g sugar, optional",
      "Juice of ½ lemon, optional",
    ],
    steps: [
      "Peel the pineapple, remove the fibrous core if needed, cut the flesh into cubes.",
      "Blend with the water until fluid.",
      "Strain through a fine sieve for a clearer juice, or keep the pulp.",
      "Sweeten and add lemon to taste.",
      "Serve iced.",
    ],
    tags: ["pineapple", "juice", "fruit", "drink"],
    body: "Market pineapple makes a more fragrant juice than cartons. Very ripe fruit often needs no sugar.",
  },
  "jus-safou": {
    title: "Safou juice",
    seoTitle: "Safou (nsafu) juice recipe",
    description:
      "Safou juice recipe: nsafu pulp blended with water and a little sugar — seasonal Western DRC drink, distinct from grilled nsafu.",
    region: "Western DRC",
    imageAlt: "Nsafu (safou) ready to prepare",
    prepTime: "20 min",
    cookTime: "5 min",
    ingredients: [
      "10 ripe nsafu (safou)",
      "700 ml water",
      "50 to 80 g sugar",
      "A pinch of salt, optional",
    ],
    steps: [
      "Rinse the nsafu. Blanch 3–5 minutes in just-boiled water to soften (or grill briefly).",
      "Open, remove the stone and collect all the pulp.",
      "Blend the pulp with water into a creamy drink.",
      "Sweeten, add a pinch of salt if desired. Taste and adjust.",
      "Serve warm or cold; stir before drinking (the pulp settles).",
    ],
    tags: ["safou", "nsafu", "juice", "seasonal", "drink"],
    body: "Safou juice extends the fruit’s season: the same buttery flesh as grilled nsafu, as a drink. The texture stays a little thick — that is intentional.",
  },
  "pain-mayonnaise": {
    title: "Pain mayonnaise",
    seoTitle: "Pain mayonnaise recipe — Kinshasa street sandwich",
    description:
      "Pain mayonnaise recipe: street baguette filled with mayonnaise, egg and optionally sausage or grilled meat — Kinshasa street-food snack.",
    region: "Kinshasa",
    imageAlt: "Street bread filled with egg, sausage and mayonnaise",
    prepTime: "15 min",
    cookTime: "10 min",
    ingredients: [
      "2 half baguettes or street rolls",
      "4 tbsp mayonnaise",
      "2 eggs",
      "2 sausages or 100 g grilled meat, optional",
      "1 small onion, sliced, optional",
      "Chili powder or pili-pili sauce",
      "Salt",
    ],
    steps: [
      "Cook the eggs fried or as a thin omelette. Salt lightly.",
      "If using sausages, brown them in a pan; otherwise warm the grilled meat.",
      "Open the bread without splitting it fully. Spread mayonnaise generously.",
      "Fill with egg, sausage or meat, and onion if using.",
      "Dust with chili. Serve at once, still warm.",
    ],
    tags: ["pain mayonnaise", "sandwich", "street food", "Kinshasa", "mayonnaise"],
    body: "Pain mayonnaise is Kinshasa street fuel: not a sit-down plate, but a quick sandwich between errands. Mayo binds everything; chili does the rest.",
  },
  "beignets-manioc": {
    title: "Cassava fritters",
    seoTitle: "Cassava fritters recipe",
    description:
      "Cassava fritters recipe: grated sweet cassava bound into a batter then fried — a snack distinct from mikate (leavened dough) and banana fritters.",
    region: "Across the DRC",
    imageAlt: "Golden fried cassava fritters",
    prepTime: "25 min",
    cookTime: "20 min",
    ingredients: [
      "600 g sweet cassava, peeled and finely grated",
      "80 g flour",
      "40 g sugar",
      "1 egg",
      "1 tsp baking powder",
      "A pinch of salt",
      "Frying oil",
    ],
    steps: [
      "Squeeze the grated cassava in a cloth to remove excess water.",
      "Mix cassava, flour, sugar, salt, baking powder and egg into a batter that holds.",
      "Heat the oil over medium heat. Shape small patties or spoonfuls.",
      "Fry 3–4 minutes per side until crisp and golden.",
      "Drain on paper. Serve warm, plain or with peanut paste.",
    ],
    tags: ["cassava", "fritter", "snack", "frying"],
    body: "Cassava fritters keep the tuber’s taste: firmer than mikate, less sweet than banana fritters. Use only sweet cassava meant for eating.",
  },
  "bouillie-mais": {
    title: "Maize porridge",
    seoTitle: "Maize porridge recipe",
    description:
      "Maize porridge recipe: fine maize flour cooked in water until creamy, then sweetened — breakfast and snack, distinct from peanut porridge.",
    region: "Across the DRC",
    imageAlt: "Bowl of maize porridge",
    prepTime: "5 min",
    cookTime: "20 min",
    ingredients: [
      "150 g fine maize flour",
      "1 l water",
      "60 to 80 g sugar",
      "A pinch of salt",
      "1 tsp vanilla or lemon zest, optional",
      "Milk, to serve, optional",
    ],
    steps: [
      "Loosen the flour in 250 ml cold water until lump-free.",
      "Bring the rest of the water to a boil with the salt.",
      "Pour in the flour mixture in a thin stream while stirring hard.",
      "Cook 12–15 minutes over medium heat, stirring constantly, until creamy.",
      "Stir in the sugar and flavouring. Serve warm, plain or with a splash of milk.",
    ],
    tags: ["maize", "porridge", "breakfast", "snack"],
    body: "Maize porridge is the simple snack without peanut — lighter than peanut porridge. Thickness is set with water; some households like it almost firm.",
  },
  "capitaine-braise": {
    title: "Grilled capitaine",
    seoTitle: "Grilled capitaine recipe — Nile perch",
    description:
      "Grilled capitaine recipe: whole Nile perch marinated with aromatics and grilled until the skin is smoky — river grillade, distinct from generic Kinkole braised fish.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Large grilled fish served with sides",
    prepTime: "30 min + 1 h marinade",
    cookTime: "35 min",
    ingredients: [
      "1 capitaine (Nile perch), 1.2–1.5 kg, cleaned and scaled",
      "2 onions, one grated",
      "4 garlic cloves, crushed",
      "2 cm ginger, grated",
      "Juice of 2 lemons",
      "3 tbsp oil",
      "Chili, salt and pepper",
      "1 stock cube, optional",
    ],
    steps: [
      "Score the fish on both sides. Mix grated onion, garlic, ginger, lemon, oil, salt, pepper, chili and crumbled cube.",
      "Coat the fish, stuff a little into the cavity and marinate cold at least 1 hour.",
      "Par-cook 10 minutes with a splash of water and leftover marinade, or go straight to the grill.",
      "Grill over medium coals 20–25 minutes, turning and basting.",
      "Serve with plantain, chikwangue, raw onion and chili sauce.",
    ],
    tags: ["capitaine", "Nile perch", "grill", "Kinshasa", "river"],
    body: "Capitaine usually means Nile perch in Kinshasa markets—a larger piece than many river fish. The Kinkole braised-fish page stays the generic street gesture; here species and size set the cooking time.",
  },
  "poisson-mayo": {
    title: "Fish mayo",
    seoTitle: "Fish mayo recipe Kinshasa",
    description:
      "Fish mayo recipe: fried or grilled fish finished with garlic-chili mayonnaise — Kinshasa street food, the fish twin of chicken mayo.",
    region: "Kinshasa",
    imageAlt: "Fried fish fillet served with mayonnaise",
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      "800 g fish fillets or steaks (tilapia, capitaine…)",
      "3 tbsp oil for frying or grilling",
      "2 onions, sliced",
      "2 garlic cloves, crushed",
      "180 ml mayonnaise",
      "1 tsp mustard",
      "1 tbsp lemon juice",
      "Chili, salt and pepper",
      "Flour for a light coating, optional",
    ],
    steps: [
      "Season the fish with salt, pepper and lemon. Dust lightly with flour if you want a crust.",
      "Brown the fish in hot oil (or grill). Keep warm.",
      "Sweat onions and garlic in a little oil. Deglaze with a splash of water.",
      "Off the heat, mix mayonnaise, mustard, lemon and chili. Coat the hot fish.",
      "Serve at once with fries, rice or bread.",
    ],
    tags: ["fish mayo", "mayonnaise", "street food", "Kinshasa", "fried"],
    body: "Like chicken mayo, the mayonnaise goes on at the end so it does not split. Fish mayo is a Kinshasa street and party plate; chili is always to taste.",
  },
  "ngulu-ya-sauce": {
    title: "Ngulu in sauce",
    seoTitle: "Ngulu ya sauce recipe — pork stew",
    description:
      "Ngulu ya sauce recipe: pork simmered in tomato-onion sauce until tender — Kinshasa table dish, distinct from charcoal-braised pork.",
    region: "Kinshasa",
    imageAlt: "Cooked pork ready to serve in sauce",
    prepTime: "25 min",
    cookTime: "1 h 15",
    ingredients: [
      "1.2 kg pork (shoulder or loin) in pieces",
      "3 onions, sliced",
      "4 garlic cloves, crushed",
      "4 ripe tomatoes, crushed (or 400 g pulp)",
      "3 tbsp oil",
      "1 stock cube",
      "Chili, salt and pepper",
      "400 ml water",
      "1 bay leaf, optional",
    ],
    steps: [
      "Brown the pork in oil. Set aside.",
      "Sweat the onions, add garlic then tomatoes. Reduce 8–10 minutes.",
      "Return the pork with cube, bay leaf, water, salt, pepper and chili.",
      "Cover and simmer gently 50–60 minutes until tender and the sauce thickens.",
      "Adjust seasoning. Serve with rice, fufu, chikwangue or plantain.",
    ],
    tags: ["ngulu", "pork", "tomato sauce", "Kinshasa", "stew"],
    body: "Ngulu means pork in Lingala. This page is the sauced stew, not the grill—see braised pork for charcoal. Pig’s trotters have their own page: makoso.",
  },
  "boeuf-ya-kotumba": {
    title: "Beef ya kotumba",
    seoTitle: "Beef ya kotumba recipe — grilled beef",
    description:
      "Beef ya kotumba recipe: marinated beef pieces grilled to a smoky crust — Kinshasa grillade, distinct from kamundele skewers.",
    region: "Kinshasa",
    imageAlt: "Grilled beef served as a portion",
    prepTime: "25 min + 2 h marinade",
    cookTime: "40 min",
    ingredients: [
      "1.2 kg beef (chuck, blade or rump) in large pieces",
      "2 onions, one grated",
      "4 garlic cloves, crushed",
      "2 cm ginger, grated",
      "Juice of 1 lemon",
      "3 tbsp oil",
      "Chili, salt and pepper",
      "1 stock cube, optional",
    ],
    steps: [
      "Make a marinade with grated onion, garlic, ginger, lemon, oil, salt, pepper, chili and cube.",
      "Coat the beef and marinate cold at least 2 hours.",
      "Par-cook 15–20 minutes with a splash of water and the marinade.",
      "Drain, then grill over medium coals 15–20 minutes, basting.",
      "Serve with raw onion, chili sauce, fries or chikwangue.",
    ],
    tags: ["beef", "kotumba", "grill", "Kinshasa", "braise"],
    body: "Kotumba points to grilling or roasting. Soso ya kotumba is the chicken; here beef comes in larger pieces than kamundele skewers. For stewed beef, see viande ya sauce.",
  },
  "loso-mayonnaise": {
    title: "Loso mayonnaise",
    seoTitle: "Loso mayonnaise recipe — Kinshasa mayo rice",
    description:
      "Loso mayonnaise recipe: plain rice mixed or topped with seasoned mayonnaise — everyday Kinshasa side and street plate.",
    region: "Kinshasa",
    imageAlt: "Plate of rice served with a creamy sauce",
    prepTime: "10 min",
    cookTime: "25 min",
    ingredients: [
      "400 g long-grain rice",
      "750 ml water",
      "1 tsp salt",
      "150 ml mayonnaise",
      "1 garlic clove, crushed, optional",
      "1 tsp mustard, optional",
      "Chili and pepper",
      "1 tbsp lemon juice, optional",
    ],
    steps: [
      "Rinse the rice. Cook in salted water until absorbed (about 18 minutes). Fluff and let it cool slightly.",
      "Mix mayonnaise, garlic, mustard, lemon, chili and pepper.",
      "Fold the sauce into the warm rice, or plate the rice and spoon the mayo on top.",
      "Taste and adjust salt. Serve with chicken, fish, skewers or on its own.",
    ],
    tags: ["loso", "rice", "mayonnaise", "Kinshasa", "street food"],
    body: "Loso mayonnaise is not fried rice—it is plain rice plus a cold mayo dressing, cousin to pain mayonnaise and chicken mayo. In Kinshasa it shows up as street portions and table sides alike.",
  },
  "poulet-pane": {
    title: "Breaded chicken",
    seoTitle: "Breaded chicken recipe Kinshasa",
    description:
      "Breaded chicken recipe: chicken pieces coated and fried until crisp — Kinshasa street snack, distinct from mayo or grilled chicken.",
    region: "Kinshasa",
    imageAlt: "Golden breaded fried chicken pieces",
    prepTime: "25 min",
    cookTime: "25 min",
    ingredients: [
      "800 g chicken (boneless thighs or breasts) in pieces",
      "2 eggs, beaten",
      "150 g flour",
      "120 g breadcrumbs",
      "1 tsp salt",
      "Pepper and chili",
      "1 tsp garlic powder or 1 crushed clove",
      "Oil for frying",
    ],
    steps: [
      "Season the chicken with salt, pepper, chili and garlic. Rest 15 minutes.",
      "Flour each piece, dip in egg, then press into breadcrumbs.",
      "Heat oil to medium-high. Fry 6–8 minutes per side until golden and cooked through.",
      "Drain on paper. Serve hot with chili sauce, mayonnaise or ketchup.",
    ],
    tags: ["breaded chicken", "fried", "street food", "Kinshasa", "crispy"],
    body: "Breaded chicken is the crisp fried version—not mayo-coated and not charcoal-grilled. In Kinshasa it turns up as a snack, kids’ party food and street portion.",
  },
  "saucisse-frites": {
    title: "Sausage and fries",
    seoTitle: "Sausage and fries recipe Kinshasa",
    description:
      "Sausage and fries recipe: browned sausages with crisp fries — a Kinshasa street-food combo.",
    region: "Kinshasa",
    imageAlt: "Sausage served with fries",
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      "8 sausages (cocktail or grilling sausages)",
      "800 g potatoes",
      "Oil for frying",
      "Salt",
      "Chili sauce or ketchup, to serve",
      "1 sliced onion, optional",
    ],
    steps: [
      "Peel and cut the potatoes into fries; rinse and dry well.",
      "Heat the oil. Blanch the fries 5–6 minutes over medium heat; drain. Raise the heat and brown 3–4 minutes. Salt.",
      "In a pan or the oil, brown the sausages 8–10 minutes, pricking them lightly.",
      "Serve sausages and fries together with onion, chili or ketchup.",
    ],
    tags: ["sausage", "fries", "street food", "Kinshasa", "snack"],
    body: "Sausage and fries is a simple, everywhere Kinshasa street combo, alongside kamundele and pain mayonnaise on evening stalls.",
  },
  "brochettes-foie": {
    title: "Liver skewers",
    seoTitle: "Liver skewers recipe Kinshasa",
    description:
      "Liver skewers recipe: beef liver cubes threaded and grilled quickly — Kinshasa street food, distinct from pan-sautéed liver.",
    region: "Kinshasa",
    imageAlt: "Liver skewers grilled over charcoal",
    prepTime: "20 min + 30 min marinade",
    cookTime: "10 min",
    ingredients: [
      "600 g beef liver, cubed",
      "1 onion, grated or very finely sliced",
      "2 garlic cloves, crushed",
      "2 tbsp lemon juice",
      "2 tbsp oil",
      "Chili, salt and pepper",
      "Wooden skewers, soaked in water",
    ],
    steps: [
      "Mix onion, garlic, lemon, oil, salt, pepper and chili. Coat the liver and marinate cold 30 minutes.",
      "Thread the cubes without packing them too tight.",
      "Grill over hot coals 3–4 minutes per side; the liver should stay slightly pink inside.",
      "Serve at once with raw onion, chili sauce and bread or fries.",
    ],
    tags: ["liver", "skewers", "grill", "Kinshasa", "street food"],
    body: "Liver skewers cook fast on the fire; sautéed liver stays the pan version. Overcooked liver turns tough—hence the short grill, like much Kinshasa street meat.",
  },
  "dongo-dongo": {
    title: "Dongo-dongo",
    seoTitle: "Dongo-dongo recipe — okra with smoked fish",
    description:
      "Dongo-dongo recipe: okra simmered with smoked fish into a silky, briny sauce — everyday plate, distinct from plain okra sauce without smoke.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Okra sauce served with fish",
    prepTime: "25 min",
    cookTime: "45 min",
    ingredients: [
      "500 g fresh okra",
      "250 g smoked (or dried) fish, desalinated if needed",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp palm oil or neutral oil",
      "Salt, chili and a little water",
    ],
    steps: [
      "Wash the okra, trim the ends and slice into rounds.",
      "Soak the smoked fish briefly if too salty, drain and break into pieces.",
      "Sweat onions and garlic in oil, add tomatoes for 5 minutes.",
      "Add okra, fish and a splash of water. Simmer 30–35 minutes, stirring.",
      "Salt at the end (the smoke already seasons). Serve with rice, fufu or chikwangue.",
    ],
    tags: ["dongo-dongo", "okra", "smoked fish", "Kinshasa", "sauce"],
    body: "Dongo-dongo puts smoked fish at the centre of a stretchy okra sauce. Sauce gombo stays the more vegetable-forward version (smoke optional); here the smoke is not a side note.",
  },
  "sauce-arachide": {
    title: "Peanut sauce",
    seoTitle: "Congolese peanut sauce recipe (nguba)",
    description:
      "Peanut sauce (nguba) recipe: unsweetened peanut paste loosened and simmered with onion and tomato — a standalone sauce, distinct from fumbwa in peanut sauce.",
    region: "Across the DRC",
    imageAlt: "Creamy peanut sauce in a dish",
    prepTime: "15 min",
    cookTime: "35 min",
    ingredients: [
      "200 g unsweetened peanut paste (or roasted pounded peanuts)",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "2 tbsp oil",
      "400 ml hot water",
      "Salt, chili",
      "100 g smoked fish or meat, optional",
    ],
    steps: [
      "Sweat the onions in oil, add garlic and tomatoes. Cook 8 minutes.",
      "Loosen the peanut paste with hot water into a thick milk, no lumps.",
      "Pour into the pot, add smoked fish if using. Simmer gently 20–25 minutes, stirring.",
      "Season with salt and chili. The sauce should coat a spoon without scorching.",
      "Serve with rice, fufu, chikwangue, plantain or greens.",
    ],
    tags: ["peanut sauce", "nguba", "peanut", "vegetable", "sauce"],
    body: "This peanut sauce (often called nguba) is a base on its own—no fumbwa leaves. For leaves in peanut, see fumbwa with peanuts or matembele. Mbika uses squash seeds, not peanut.",
  },
  "makemba-na-mbisi": {
    title: "Makemba na mbisi",
    seoTitle: "Makemba na mbisi recipe — plantains and fish",
    description:
      "Makemba na mbisi recipe: fried plantains served with fish (fried, grilled or in sauce) — a very common composed plate across the DRC.",
    region: "Across the DRC",
    imageAlt: "Fried plantains served with fish",
    prepTime: "20 min",
    cookTime: "35 min",
    ingredients: [
      "4 ripe plantains",
      "600 g fish (tilapia, capitaine or smoked fish)",
      "Frying oil",
      "1 onion, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "Juice of 1 lemon",
      "Salt, chili",
    ],
    steps: [
      "Season the fish with salt, pepper and lemon. Brown in a pan or grill. Set aside.",
      "Peel the plantains, slice and fry until golden. Drain and salt.",
      "Optional short sauce: sweat onion and garlic, add tomatoes and a splash of water, 8 minutes. Spoon over the fish.",
      "Plate makemba and mbisi together. Serve at once.",
    ],
    tags: ["makemba", "mbisi", "plantain", "fish", "plate"],
    body: "Makemba na mbisi is not a new technique—it is the plate pairing of fried plantains and fish (grilled, fried or smoked). In Kinshasa and across the provinces it is one of the most requested compositions.",
  },
  "chikwangue-grillee": {
    title: "Grilled chikwangue",
    seoTitle: "Grilled chikwangue recipe",
    description:
      "Grilled chikwangue recipe: kwanga slices finished on coals or in a pan until smoky and crusty — a separate gesture from steamed chikwangue.",
    region: "Congo Basin & Kinshasa",
    imageAlt: "Chikwangue cut into slices",
    prepTime: "5 min",
    cookTime: "10 min",
    ingredients: [
      "1–2 cooked chikwangue (kwanga)",
      "1 tbsp oil, optional",
      "A pinch of salt",
      "Chili sauce, to serve",
    ],
    steps: [
      "Unwrap the chikwangue and cut into slices about 1 cm thick.",
      "Heat a pan or coals. Brush lightly with oil if needed.",
      "Grill the slices 3–4 minutes per side until marked and lightly crisp.",
      "Salt sparingly. Serve hot with pondu, fish, stewed meat or chili sauce.",
    ],
    tags: ["chikwangue", "kwanga", "grill", "cassava", "side"],
    body: "Grilled chikwangue starts from chikwangue already steamed—you do not re-ferment, you reseize the slices. The smoky crust changes the table gesture completely.",
  },
  "courge-sauce": {
    title: "Pumpkin in sauce",
    seoTitle: "Yellow pumpkin in sauce recipe",
    description:
      "Pumpkin in sauce recipe: yellow squash simmered with onion, tomato and oil — a vegetable dish, distinct from mujibujibu leaves and mbika seed paste.",
    region: "Kinshasa & western DRC",
    imageAlt: "Vegetables simmered in sauce",
    prepTime: "20 min",
    cookTime: "40 min",
    ingredients: [
      "800 g yellow squash or pumpkin, cubed",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp palm oil or neutral oil",
      "200 ml water",
      "Salt, chili",
      "80 g pounded peanuts, optional",
    ],
    steps: [
      "Sweat the onions in oil, add garlic and tomatoes. Cook 8 minutes.",
      "Add the squash cubes, water, salt and chili. Cover and simmer 25–30 minutes.",
      "When tender, mash some cubes lightly to thicken the sauce.",
      "Stir in pounded peanuts if using; cook 5 minutes more.",
      "Serve with rice, fufu or chikwangue.",
    ],
    tags: ["pumpkin", "squash", "tomato sauce", "vegetable", "greens"],
    body: "Here you cook the squash fruit—not the leaves (mujibujibu) and not the seed paste (mbika). Peanuts are optional to thicken without becoming a full nguba sauce.",
  },
  "haricots-verts-palme": {
    title: "Green beans in palm oil",
    seoTitle: "Green beans with palm oil recipe",
    description:
      "Green beans with palm oil recipe: fresh beans sautéed with onion and tomato — a bright side, distinct from madesu (dried beans).",
    region: "Kinshasa & western DRC",
    imageAlt: "Green beans cooked in a pan",
    prepTime: "15 min",
    cookTime: "20 min",
    ingredients: [
      "500 g fresh green beans, trimmed",
      "2 tbsp red palm oil",
      "1 onion, sliced",
      "2 tomatoes, crushed",
      "1 garlic clove",
      "Salt, chili",
      "50 ml water",
    ],
    steps: [
      "Wash the beans; cut into lengths if very long. Blanch 4 minutes in salted boiling water; drain.",
      "Heat the palm oil. Sweat the onion, add garlic and tomatoes for 5 minutes.",
      "Add the beans and water. Cover 8–10 minutes—they should stay slightly crisp.",
      "Season with salt and chili. Serve with rice, fish or meat.",
    ],
    tags: ["green beans", "palm oil", "vegetables", "quick", "side"],
    body: "Green beans are fresh and green—not madesu (dried red/brown beans simmered for a long time). Palm oil gives the colour and Congolese table perfume.",
  },
  "ndagala-tomates": {
    title: "Ndagala with tomatoes",
    seoTitle: "Ndagala with tomatoes recipe — Lake Kivu small fish",
    description:
      "Ndagala with tomatoes recipe: Lake Kivu small fish (fresh or dried) fried then simmered in tomato sauce — Eastern classic, distinct from Katanga kapenta / sambaza.",
    region: "North Kivu & South Kivu",
    imageAlt: "Small dried lake fish like ndagala",
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      "400 g fresh or dried ndagala",
      "4 ripe tomatoes, crushed",
      "2 onions, sliced",
      "2 garlic cloves, chopped",
      "4 tbsp oil",
      "1 small chili",
      "Salt and pepper",
      "100 ml water",
    ],
    steps: [
      "If dried, rinse the ndagala quickly two or three times and drain well. Salt sparingly.",
      "Heat half the oil and fry the fish 5–8 minutes. Set aside.",
      "Add the rest of the oil, sweat the onions, then add garlic, tomatoes and chili.",
      "Cook the sauce 10 minutes, add water and return the ndagala gently.",
      "Simmer uncovered 5 minutes. Serve with bukari, rice, plantain or fufu.",
    ],
    tags: ["ndagala", "Kivu", "small fish", "tomato", "East"],
    body: "Ndagala are the small fish tied especially to Lake Kivu and the East. The gesture resembles Kapenta or Tanganyika sambaza, but the name, market and regional anchor differ.",
  },
  "poisson-kivu-grille": {
    title: "Grilled Lake Kivu fish",
    seoTitle: "Grilled Lake Kivu fish recipe",
    description:
      "Grilled Lake Kivu fish recipe: whole lake fish marinated with aromatics then grilled until the skin is smoky — Eastern grillade, distinct from Kinkole river braise.",
    region: "North Kivu & South Kivu",
    imageAlt: "Whole grilled fish with golden skin",
    prepTime: "25 min + 1 h marinade",
    cookTime: "30 min",
    ingredients: [
      "1 lake fish (tilapia or local species), 1–1.2 kg, cleaned",
      "2 onions, one grated",
      "3 garlic cloves, crushed",
      "2 cm ginger, grated",
      "Juice of 2 lemons",
      "3 tbsp oil",
      "Chili, salt and pepper",
    ],
    steps: [
      "Score the fish. Mix grated onion, garlic, ginger, lemon, oil, salt, pepper and chili.",
      "Coat the fish, stuff a little into the cavity and marinate cold at least 1 hour.",
      "Grill over medium coals 25–30 minutes, turning and basting.",
      "Serve with plantain, fries, rice or ndagala as a sauced side.",
    ],
    tags: ["Lake Kivu", "grilled fish", "East", "braise", "Goma"],
    body: "Around Goma and Bukavu, lake fish is often grilled whole with a lemon-garlic marinade close to Kinshasa grillades. The Kinkole page documents the capital’s river gesture; here the anchor is lacustrine and Eastern.",
  },
  kabambale: {
    title: "Kabambale",
    seoTitle: "Kabambale recipe — dried fish",
    description:
      "Kabambale recipe: dried fish soaked then simmered with onion and tomato — Congo Basin store cupboard fish, distinct from softer smoked fish in sauce.",
    region: "Congo Basin & Cuvette",
    imageAlt: "Dried fish displayed at a market",
    prepTime: "30 min + 1 h soaking",
    cookTime: "40 min",
    ingredients: [
      "300 g kabambale (dried fish)",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp palm oil or neutral oil",
      "Chili, salt",
      "250 ml water",
    ],
    steps: [
      "Soak the kabambale 45–60 minutes in lukewarm water, changing once. Drain and break into pieces.",
      "Sweat the onions in oil, add garlic and tomatoes. Cook 8 minutes.",
      "Add the fish and water. Simmer gently 25–30 minutes.",
      "Taste before salting (dried fish is often already salty). Add chili. Serve with rice, fufu or chikwangue.",
    ],
    tags: ["kabambale", "dried fish", "preserve", "Congo Basin", "tomato sauce"],
    body: "Kabambale is a dried fish form from the basin, used as a market store. It differs from smoked fish with tomatoes (smoked, softer) and makayabu (imported salted cod). Close cousin: missole.",
  },
  missole: {
    title: "Missole",
    seoTitle: "Missole recipe — Congolese dried fish",
    description:
      "Missole (misolè) recipe: dried fish strips soaked then simmered in a short sauce — everyday preserve, distinct from kabambale in larger pieces.",
    region: "Kinshasa & Congo Basin",
    imageAlt: "Small dried fish like a market preserve",
    prepTime: "25 min + 45 min soaking",
    cookTime: "35 min",
    ingredients: [
      "250 g missole (dried fish strips)",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp oil",
      "Chili, salt",
      "200 ml water",
      "1 tbsp lemon juice, optional",
    ],
    steps: [
      "Soak the missole 30–45 minutes, rinse and drain. Lemon lightly if the taste is very strong.",
      "Sweat onions and garlic in oil, add tomatoes 6–8 minutes.",
      "Add the missole and water. Simmer gently 20–25 minutes.",
      "Adjust salt last. Serve with rice, fufu, plantain or chikwangue.",
    ],
    tags: ["missole", "misolè", "dried fish", "Kinshasa", "preserve"],
    body: "Missole / misolè often means thinner dried fish strips than kabambale. On Kinshasa markets the word varies by seller; the gesture stays: soak, rinse, simmer without over-salting.",
  },
  mbala: {
    title: "Mbala",
    seoTitle: "Mbala recipe — sweet potato",
    description:
      "Mbala recipe: sweet potatoes boiled or roasted until soft — everyday tuber, distinct from matembele leaves.",
    region: "Across the DRC",
    imageAlt: "Boiled sweet potatoes served in a dish",
    prepTime: "10 min",
    cookTime: "30 min",
    ingredients: [
      "1 kg sweet potatoes (mbala)",
      "Water",
      "1 tsp salt",
      "1 tbsp oil or a knob of butter, optional",
    ],
    steps: [
      "Wash the sweet potatoes. Cook whole in their skins or peeled and cut into large pieces.",
      "Cover with cold salted water, bring to a boil and cook 25–35 minutes until tender.",
      "Drain. Serve plain, with a little oil, or beside fish and sauces.",
      "Variant: roast in the oven or on coals about 40 minutes for a caramelised skin.",
    ],
    tags: ["mbala", "sweet potato", "tuber", "boiled", "side"],
    body: "Mbala means the sweet potato tuber. Matembele are the leaves of the same plant—another gesture, another page. Feculent cousins: boiled yam, steamed plantains.",
  },
  "beignets-igname": {
    title: "Yam fritters",
    seoTitle: "Yam fritters recipe",
    description:
      "Yam fritters recipe: grated or mashed yam seasoned and fried into cakes — a snack distinct from boiled yam and cassava fritters.",
    region: "Across the DRC",
    imageAlt: "Golden yam fritters",
    prepTime: "25 min",
    cookTime: "20 min",
    ingredients: [
      "800 g yam, peeled",
      "1 egg",
      "2 tbsp flour, if the batter is too loose",
      "1 grated onion, optional (savoury version)",
      "1 tbsp sugar, optional (sweet version)",
      "Salt (or sugar depending on version)",
      "Frying oil",
    ],
    steps: [
      "Grate the yam finely or half-cook then mash. Squeeze lightly if very wet.",
      "Mix with the egg, flour if needed, and either onion + salt (savoury) or sugar (sweet).",
      "Heat oil to medium. Drop spoonfuls of batter. Flatten slightly.",
      "Fry 3–4 minutes per side until golden. Drain on paper.",
      "Serve hot, plain or with a tomato / chili sauce (savoury version).",
    ],
    tags: ["fritters", "yam", "frying", "snack", "treat"],
    body: "Yam fritters turn the tuber into a crisp snack—no longer boiled yam. Firmer than mikate, less “cassava” than cassava fritters.",
  },
  "bananes-douces-vapeur": {
    title: "Steamed sweet bananas",
    seoTitle: "Steamed sweet bananas recipe",
    description:
      "Steamed sweet bananas recipe: dessert bananas steamed until soft — a simple treat, distinct from plantains (makemba / steamed).",
    region: "Across the DRC",
    imageAlt: "Ripe cooked bananas served as a side",
    prepTime: "5 min",
    cookTime: "20 min",
    ingredients: [
      "6 sweet bananas, ripe but firm",
      "Water for steaming",
      "A pinch of salt, optional",
      "A knob of butter or a little oil, optional",
    ],
    steps: [
      "Wash the bananas. Cook in the skin or peeled, according to household habit.",
      "Place in a steamer basket over simmering water.",
      "Cook 15–20 minutes until tender.",
      "Peel if cooked in the skin. Serve warm, plain or with a little butter / sugar.",
    ],
    tags: ["sweet banana", "steam", "snack", "dessert", "simple"],
    body: "Sweet bananas are not plantains: sweeter and softer. Steamed plantains and makemba stay on the savoury starch side; this is the light snack or dessert.",
  },
  "andazi-tanganyika": {
    title: "Tanganyika andazi",
    seoTitle: "Andazi / mandazi recipe — Tanganyika fritters",
    description:
      "Andazi (mandazi) recipe: lightly sweet flour fritters fried until golden — everyday snack in Kalemie and around Lake Tanganyika.",
    region: "Haut-Katanga & Tanganyika",
    imageAlt: "Fresh andazi just fried, Lake Tanganyika",
    prepTime: "25 min + 45 min rest",
    cookTime: "20 min",
    ingredients: [
      "500 g wheat flour",
      "80 g sugar",
      "1 packet baker’s yeast (7 g) or 1 tsp baking powder",
      "1 egg, optional",
      "250 ml warm milk or warm water",
      "2 tbsp oil in the dough",
      "1 pinch of salt",
      "½ tsp cardamom or vanilla, optional",
      "Frying oil",
    ],
    steps: [
      "Mix flour, sugar, salt and yeast (or baking powder). Add the egg if using, oil and warm liquid to a soft dough.",
      "Knead 5 minutes. Cover and rise 45 minutes (or rest 20 minutes if baking powder).",
      "Roll out on a floured board; cut into diamonds or rectangles about 1 cm thick.",
      "Heat oil to medium. Fry the andazi without crowding.",
      "Cook 2–3 minutes per side until golden. Drain.",
      "Serve warm, plain, with tea or coffee.",
    ],
    tags: ["andazi", "mandazi", "fritters", "Tanganyika", "Kalemie"],
    body: "Andazi (also mandazi in Swahili) are everyday fritters on the Congolese shore of Tanganyika—Kalemie first. Less sweet than some city doughnuts; breakfast or snack.\n\nCousins: [mikate](/en/recettes/mikate/), [cassava fritters](/en/recettes/beignets-manioc/). Local drink: [munkoyo](/en/recettes/munkoyo/).",
  },
  "mukeke-grille": {
    title: "Grilled mukeke",
    seoTitle: "Grilled mukeke recipe — Lake Tanganyika fish",
    description:
      "Grilled mukeke recipe: large Lake Tanganyika fish marinated then cooked over fire or in the oven — feast and market gesture in the East (Kalemie, lake shores).",
    region: "Haut-Katanga & Tanganyika",
    imageAlt: "Large Lake Tanganyika fish at a market near the port",
    prepTime: "25 min + 30 min marinade",
    cookTime: "35 min",
    ingredients: [
      "1 mukeke (or other large lake fish), 1.2–1.5 kg, gutted and butterflied",
      "Juice of 2 lemons",
      "4 garlic cloves, crushed",
      "1 onion, sliced",
      "2 tbsp oil",
      "1 tsp grated ginger, optional",
      "Salt, pepper, pili-pili",
      "A few sprigs of parsley or coriander, optional",
    ],
    steps: [
      "Rinse and dry the fish. Score the flesh without cutting through the skin.",
      "Mix lemon, garlic, onion, oil, ginger, salt, pepper and chili. Coat inside and out. Marinate 30 minutes.",
      "Prepare coals or an oven at 200 °C.",
      "Grill 15–20 minutes per side (or 30–35 minutes in the oven), basting with marinade.",
      "Check that the flesh flakes easily. Scatter herbs if you have them.",
      "Serve with bugali, bukari, plantain or rice, and tomato or pili-pili sauce on the side.",
    ],
    tags: ["mukeke", "Tanganyika", "grilled fish", "East", "Kalemie"],
    body: "Mukeke, on many markets, means a large **Lake Tanganyika** fish—a feast piece when the port lands it. The gesture stays simple: lemon, garlic, fire. Smaller fish from the same lake are [sambaza](/en/recettes/sambaza/) or [kapenta](/en/recettes/kapenta-tomates/).\n\nIn Kivu, the grilled cousin: [Kivu fish](/en/recettes/poisson-kivu-grille/).",
  },
  "pilau-kivu": {
    title: "Kivu pilau",
    seoTitle: "Pilau recipe — spiced rice from Kivu",
    description:
      "Pilau (pilaw) recipe: rice cooked in a spiced broth with meat or vegetables — East African–influenced dish common in North and South Kivu.",
    region: "North Kivu & South Kivu",
    imageAlt: "Plate of pilau, spiced rice",
    prepTime: "25 min",
    cookTime: "45 min",
    ingredients: [
      "500 g long-grain rice, rinsed",
      "400 g beef, goat or chicken, in pieces",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "3 garlic cloves",
      "1 tsp cumin",
      "1 tsp ground coriander",
      "½ tsp cinnamon or 1 stick",
      "½ tsp ginger",
      "4 tbsp oil",
      "1 l stock or water",
      "Salt, pepper, pili-pili",
    ],
    steps: [
      "Brown the meat in oil. Set aside.",
      "In the same pot, soften onions, add garlic, tomatoes and spices 5 minutes.",
      "Return the meat, add a little stock and simmer 15 minutes.",
      "Add the rice and the rest of the salted liquid; it should sit a finger above the rice.",
      "Bring to a boil, cover on low heat 18–20 minutes without stirring.",
      "Rest 5 minutes covered, fluff with a fork and serve.",
    ],
    tags: ["pilau", "pilaw", "rice", "Kivu", "spices"],
    body: "Pilau (or pilaw) travels the Swahili-speaking East: spices, rice, meat. In Kivu it sits beside [bugali](/en/recettes/bugali-kivu/) and lake dishes. It is not Kinshasa [loso mayonnaise](/en/recettes/loso-mayonnaise/): here the rice drinks the spiced broth.\n\nAtmosphere photo from East Africa (Commons credit)—the gesture remains that of households in Goma, Bukavu and around.",
  },
  "bugali-kivu": {
    title: "Bugali",
    seoTitle: "Bugali recipe — Kivu maize paste",
    description:
      "Bugali recipe: maize flour worked with hot water into a firm paste — staple side in Kivu (cousin of Katanga bukari and East African ugali).",
    region: "North Kivu & South Kivu",
    imageAlt: "Maize paste like bugali / ugali served with cabbage",
    prepTime: "5 min",
    cookTime: "20 min",
    ingredients: [
      "500 g fine white maize flour",
      "1.2 l water",
      "1 pinch of salt, optional",
    ],
    steps: [
      "Bring about a litre of water to a boil in a heavy pot.",
      "Slake some flour in the remaining cold water, pour into the pot while stirring.",
      "Thicken for a few minutes.",
      "Add the rest of the flour gradually, working vigorously.",
      "Continue until a smooth paste pulls from the sides.",
      "Shape portions and serve at once with sauce, fish or greens.",
    ],
    tags: ["bugali", "ugali", "maize fufu", "Kivu", "side"],
    body: "Bugali (close to East African ugali / posho) is Kivu’s maize paste. In Greater Katanga people more often say [bukari](/en/recettes/bukari-katanga/); in Kasai, bidia. Same gesture: water, flour, wrist strength.\n\nCommon greens beside it: [simmered cabbage](/en/recettes/chou-mijote-est/), [sukuma](/en/recettes/sukuma-est/).",
  },
  "haricots-maharage": {
    title: "Maharage with tomatoes",
    seoTitle: "Maharage recipe — Eastern beans",
    description:
      "Maharage recipe: red beans simmered with tomato and onion — everyday Kivu side, often served with bugali.",
    region: "North Kivu & South Kivu",
    imageAlt: "Beans served with maize paste",
    prepTime: "15 min (+ soaking if dried)",
    cookTime: "1 h 15",
    ingredients: [
      "400 g dried red beans (soaked overnight) or 800 g cooked",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "3 garlic cloves",
      "3 tbsp oil",
      "1 bay leaf, optional",
      "Salt, pepper, pili-pili",
      "Water or stock",
    ],
    steps: [
      "If dried: cook the beans in plenty of water until tender (45–60 min). Drain, keeping a little cooking liquid.",
      "Sweat onions and garlic in oil, add tomatoes and spices 8 minutes.",
      "Stir in the beans and a little liquid. Simmer covered 15–20 minutes.",
      "Adjust salt. The sauce should coat the beans without being watery.",
      "Serve with bugali, rice or plantain.",
    ],
    tags: ["maharage", "beans", "Kivu", "tomato", "East"],
    body: "Maharage (Swahili) are Eastern beans, cousins of Western [madesu](/en/recettes/madesu/). In Kivu they often sit with [bugali](/en/recettes/bugali-kivu/). Less peanut sauce than some Kasai plates: tomato, onion, patience.",
  },
  "chou-mijote-est": {
    title: "Eastern simmered cabbage",
    seoTitle: "Simmered cabbage recipe — Kivu / East side",
    description:
      "Simmered cabbage recipe: white cabbage softened with onion and tomato — simple everyday Eastern green, served with bugali or rice.",
    region: "North Kivu & South Kivu",
    imageAlt: "Cooked cabbage served beside maize paste",
    prepTime: "15 min",
    cookTime: "25 min",
    ingredients: [
      "1 small white cabbage, shredded",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "2 garlic cloves",
      "3 tbsp oil",
      "Salt, pepper, pili-pili",
      "80 ml water",
    ],
    steps: [
      "Sweat onions and garlic in oil. Add tomatoes 5 minutes.",
      "Add the cabbage, salt and pepper. Stir.",
      "Add water, cover and simmer 15–20 minutes to the tenderness you want.",
      "Uncover 2 minutes if too wet. Adjust seasoning.",
      "Serve hot with bugali, rice or grilled meat.",
    ],
    tags: ["cabbage", "greens", "Kivu", "East", "side"],
    body: "Simmered cabbage is an Eastern table green—less sung than [pondu](/en/recettes/pondu/) but common when the market has it. It sits beside [bugali](/en/recettes/bugali-kivu/). Another everyday Swahili green: [sukuma](/en/recettes/sukuma-est/).",
  },
  "sukuma-est": {
    title: "Sukuma",
    seoTitle: "Sukuma wiki recipe — Eastern greens",
    description:
      "Sukuma (sukuma wiki) recipe: kale-style or market greens quickly sautéed with onion — fast Kivu and Swahili-speaking East vegetable.",
    region: "North Kivu & South Kivu",
    imageAlt: "Sukuma wiki served with maize paste",
    prepTime: "15 min",
    cookTime: "15 min",
    ingredients: [
      "2 bunches sukuma (kale / market greens), washed and shredded",
      "1 large onion, sliced",
      "2 tomatoes, crushed, optional",
      "2 garlic cloves",
      "3 tbsp oil",
      "Salt, pepper, pili-pili",
    ],
    steps: [
      "Sweat onion and garlic in oil until translucent.",
      "Add tomatoes if using, 3 minutes.",
      "Add the sukuma still damp from washing. Cover 5–8 minutes.",
      "Stir, salt and pepper. Leaves should stay green and tender, not black.",
      "Serve at once with bugali or rice.",
    ],
    tags: ["sukuma", "sukuma wiki", "greens", "Kivu", "East"],
    body: "Sukuma wiki (“push the week” in Swahili) is the cheap green that stretches meals. In Kivu the gesture meets East Africa; in Kinshasa people more often say [ndunda](/en/recettes/ndunda/). Natural partner: [bugali](/en/recettes/bugali-kivu/).",
  },
  "tilapia-bugali": {
    title: "Tilapia with bugali",
    seoTitle: "Grilled tilapia with bugali recipe — Kivu",
    description:
      "Grilled or pan-fried tilapia served with bugali — lake fish + maize paste duo common in Kivu and around the great lakes.",
    region: "North Kivu & South Kivu",
    imageAlt: "Tilapia served with maize paste like bugali",
    prepTime: "20 min",
    cookTime: "30 min",
    ingredients: [
      "2 whole tilapia (about 800 g–1 kg total), gutted",
      "Juice of 2 lemons",
      "3 garlic cloves",
      "2 tbsp oil",
      "Salt, pepper, pili-pili",
      "1 onion, sliced into rings",
      "Bugali to serve (see bugali page)",
    ],
    steps: [
      "Score the tilapia; rub with lemon, garlic, salt, pepper and chili. Rest 15 minutes.",
      "Oil and grill or pan-fry 8–12 minutes per side depending on thickness.",
      "Quickly fry onion rings separately, optional.",
      "Make the bugali while the fish cooks.",
      "Serve the fish on or beside the bugali, onions and lemon on the side.",
    ],
    tags: ["tilapia", "bugali", "Kivu", "lake", "fish"],
    body: "Tilapia + bugali: a lakeside plate when the market has fresh fish. Less “long sauce” than [fish moambe](/en/recettes/poisson-moambe/); more direct than [ndagala](/en/recettes/ndagala-tomates/). For the paste alone: [bugali](/en/recettes/bugali-kivu/).",
  },
  "mbinzo-grillees": {
    title: "Grilled mbinzo",
    seoTitle: "Grilled mbinzo recipe — edible caterpillars",
    description:
      "Grilled mbinzo recipe: edible caterpillars roughly seasoned and seared in a pan or over fire — seasonal protein in Kasai and Katanga.",
    region: "Greater Kasai",
    imageAlt: "Congolese plate with grilled caterpillars, fish and fufu",
    prepTime: "20 min",
    cookTime: "15 min",
    ingredients: [
      "300 g mbinzo (edible caterpillars), already cleaned",
      "1 onion, sliced",
      "2 garlic cloves",
      "2 tbsp oil",
      "Salt, pepper, pili-pili",
      "Juice of half a lemon, optional",
    ],
    steps: [
      "Check the mbinzo are clean (no tree residue). Rinse quickly and drain.",
      "Heat the oil; sweat onion and garlic 2 minutes.",
      "Add the mbinzo; salt, pepper and chili. Stir over high heat 8–12 minutes until well seared.",
      "Lemon at the end if you like.",
      "Serve with bidia / bukari, chikwangue or rice, and a green vegetable.",
    ],
    tags: ["mbinzo", "caterpillars", "Kasai", "protein", "season"],
    body: "Grilled mbinzo is the dry, crunchy seasonal gesture—distinct from [mbinzo with tomatoes](/en/recettes/mbinzo-tomates/). In Kasai as in Katanga they sit beside the paste. Other insect protein: [cricket skewers](/en/recettes/brochettes-grillons/).",
  },
  "mbala-grillee": {
    title: "Grilled mbala",
    seoTitle: "Grilled mbala recipe — fire-roasted sweet potato",
    description:
      "Grilled mbala recipe: sweet potatoes cooked in coals or in the oven until the skin caramelises — simple Kasai tuber and beyond.",
    region: "Greater Kasai",
    imageAlt: "Cooked sweet potatoes like mbala",
    prepTime: "5 min",
    cookTime: "40 min",
    ingredients: [
      "1 kg sweet potatoes (mbala), washed",
      "1 pinch of salt, optional",
      "1 tbsp oil, optional",
    ],
    steps: [
      "Choose firm, medium mbala.",
      "In coals: bury in hot ashes 35–45 minutes, turning.",
      "In the oven: 200 °C, about 40 minutes, optionally brushed with a little oil.",
      "Check tenderness with a knife tip.",
      "Split, salt lightly, serve plain or with a sauce.",
    ],
    tags: ["mbala", "sweet potato", "grilled", "Kasai", "tuber"],
    body: "Grilled mbala is the fire version of [boiled mbala](/en/recettes/mbala/). In Kasai it accompanies meats and greens; [matembele](/en/recettes/matembele-katanga/) remain the **leaves**—another page.",
  },
  "makosso-pommes": {
    title: "Makosso with potatoes",
    seoTitle: "Makosso recipe — pork trotters and potatoes",
    description:
      "Makosso recipe: pork trotters simmered a long time, served with potatoes — a sharing dish in Kasai and beyond.",
    region: "Greater Kasai",
    imageAlt: "Pork-trotter broth (makosso) served with potatoes",
    prepTime: "30 min",
    cookTime: "2 h 30",
    ingredients: [
      "1.5 kg pork trotters, cut and well cleaned",
      "1 kg potatoes",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "4 garlic cloves",
      "2 tbsp oil",
      "1 bay leaf, optional",
      "Salt, pepper, pili-pili",
      "Water",
    ],
    steps: [
      "Blanch the trotters 10 minutes in plenty of water. Drain and rinse.",
      "Sweat onions and garlic in oil; add tomatoes 5 minutes.",
      "Add the trotters, cover with water, bay leaf and salt. Simmer covered 1½–2 hours until tender.",
      "Peel the potatoes, cut into large pieces. Add them 25–30 minutes before the end.",
      "Adjust salt and chili. The sauce should coat without being watery.",
      "Serve hot with bidia / bukari or bread.",
    ],
    tags: ["makosso", "pork trotters", "potatoes", "Kasai", "stew"],
    body: "**Makosso** (pork trotters in sauce) is a family sharing dish. In Kasai it often meets **potatoes**—a highland starch, cousin to [grilled mbala](/en/recettes/mbala-grillee/). Other pork in sauce: [ngulu ya sauce](/en/recettes/ngulu-ya-sauce/).",
  },
  "ntaba-mijotee-kasai": {
    title: "Simmered ntaba",
    seoTitle: "Simmered ntaba recipe — Kasai goat stew",
    description:
      "Simmered ntaba recipe: goat cooked long with tomato and aromatics — Kasai sauced version, distinct from Kinshasa grilled ntaba.",
    region: "Greater Kasai",
    imageAlt: "Meat in sauce served with fufu",
    prepTime: "25 min",
    cookTime: "1 h 30",
    ingredients: [
      "1.5 kg goat, cut (with bone)",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "4 garlic cloves",
      "2 cm ginger",
      "3 tbsp oil",
      "400 ml water",
      "Salt, pepper, pili-pili",
    ],
    steps: [
      "Season the goat (salt, pepper, crushed garlic, ginger). Rest 20 minutes.",
      "Brown the pieces in oil. Set aside.",
      "Sweat the onions; add tomatoes 8 minutes.",
      "Return the meat, pour in the water. Cover and simmer gently 1–1¼ hours.",
      "Adjust seasoning. The meat should come off the bone easily.",
      "Serve with bidia / bukari, rice or chikwangue.",
    ],
    tags: ["ntaba", "goat", "Kasai", "sauce", "bidia"],
    body: "In Kasai, **simmered goat** sits beside [chicken with lumba-lumba](/en/recettes/soso-lumba-lumba/). In Kinshasa the grill gesture is more often [ntaba](/en/recettes/ntaba/); Western [ntaba in sauce](/en/recettes/ntaba-sauce/) is another page. Here: patience, tomato, bidia.",
  },
  "haricots-nguba-kasai": {
    title: "Beans with nguba",
    seoTitle: "Nguba beans recipe — Kasai peanut",
    description:
      "Nguba beans recipe: beans simmered in a peanut sauce — Greater Kasai side, often with bidia.",
    region: "Greater Kasai",
    imageAlt: "Plate of beans and greens served in the Democratic Republic of the Congo",
    prepTime: "15 min (+ soak if dry)",
    cookTime: "1 h 20",
    ingredients: [
      "400 g dry beans (soaked overnight) or 800 g cooked",
      "120 g roasted ground peanuts (nguba)",
      "2 onions, sliced",
      "2 tomatoes, crushed",
      "3 tbsp oil",
      "Salt, pili-pili",
      "Water",
    ],
    steps: [
      "If dry: cook the beans until tender (45–60 min). Drain, reserving some cooking liquid.",
      "Sweat onions in oil; add tomatoes 6 minutes.",
      "Stir in the ground peanuts and a little liquid until creamy.",
      "Add the beans. Simmer gently 15–20 minutes.",
      "Salt and chili. Serve with bidia, rice or plantain.",
    ],
    tags: ["beans", "nguba", "peanuts", "Kasai", "bidia"],
    body: "**Beans with nguba** (peanut) are the Kasai peanut gesture on legumes—cousins of Western [madesu](/en/recettes/madesu/) and Eastern [maharage](/en/recettes/haricots-maharage/) (more tomato). Sauce alone: [peanut sauce](/en/recettes/sauce-arachide/).",
  },
  "poisson-fume-bidia": {
    title: "Smoked fish with bidia",
    seoTitle: "Smoked fish recipe — short Kasai sauce",
    description:
      "Smoked fish in a short sauce: soaked, simmered with tomato — pantry protein in Kasai, served with bidia.",
    region: "Greater Kasai",
    imageAlt: "Basket of dried / smoked fish at a Congolese market",
    prepTime: "20 min + 40 min soak",
    cookTime: "35 min",
    ingredients: [
      "300 g smoked fish (pieces)",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "3 garlic cloves",
      "3 tbsp oil",
      "Salt, pili-pili",
      "250 ml water",
      "Juice of half a lemon, optional",
    ],
    steps: [
      "Soak the fish 30–40 minutes. Rinse and drain. Lemon lightly if the taste is very strong.",
      "Sweat onions and garlic; add tomatoes 8 minutes.",
      "Add the fish and water. Simmer gently 20–25 minutes.",
      "Salt at the end (smoked fish is already salty). Add chili.",
      "Serve with bidia / bukari, chikwangue or rice.",
    ],
    tags: ["smoked fish", "bidia", "Kasai", "preserve"],
    body: "Kasai **smoked fish** sits with bidia as Western [smoked fish with tomatoes](/en/recettes/poisson-fume-tomates/) does. Larger pieces than [missole](/en/recettes/missole/); other preserve: [kabambale](/en/recettes/kabambale/).",
  },
  "pommes-sautees-katanga": {
    title: "Sautéed potatoes",
    seoTitle: "Sautéed potatoes recipe — Katanga",
    description:
      "Sautéed potatoes recipe: cubes browned with onion — everyday side in Lubumbashi and Greater Katanga.",
    region: "Greater Katanga",
    imageAlt: "Potatoes in a Congolese dish",
    prepTime: "15 min",
    cookTime: "30 min",
    ingredients: [
      "1 kg potatoes",
      "2 onions, sliced",
      "3 tbsp oil",
      "Salt, pepper",
      "Parsley or spring onion, optional",
    ],
    steps: [
      "Peel the potatoes, cut into cubes. Blanch 8–10 minutes, drain.",
      "Heat the oil. Brown the cubes over medium heat, stirring.",
      "Add the onions; cook until soft and the potatoes are golden.",
      "Salt and pepper. Scatter herbs if you have them.",
      "Serve with grilled meat, fish or a green (matembele, sombe).",
    ],
    tags: ["potatoes", "Katanga", "Lubumbashi", "side"],
    body: "In **Greater Katanga**, potato complements [bukari](/en/recettes/bukari-katanga/) without replacing it—especially in town. For a longer dish: [makosso with potatoes](/en/recettes/makosso-pommes/). Regional green: [matembele](/en/recettes/matembele-katanga/).",
  },
  "brochettes-lubumbashi": {
    title: "Lubumbashi skewers",
    seoTitle: "Lubumbashi skewers recipe — Katanga street food",
    description:
      "Lubumbashi skewers recipe: marinated beef grilled over coals — Greater Katanga street food, cousin to Kinshasa kamundele.",
    region: "Greater Katanga",
    imageAlt: "Marinated beef skewers with sides",
    prepTime: "25 min + 1 h marinade",
    cookTime: "15 min",
    ingredients: [
      "700 g beef (skewer cut)",
      "1 onion, grated",
      "3 garlic cloves",
      "1 tsp grated ginger",
      "2 tbsp oil",
      "1 tbsp lemon juice",
      "Salt, pepper, pili-pili",
      "Wooden skewers",
    ],
    steps: [
      "Cut the meat into even cubes.",
      "Mix onion, garlic, ginger, oil, lemon, salt, pepper, chili. Coat. Marinate 1 hour cold.",
      "Thread onto skewers without packing too tight.",
      "Grill over medium coals 12–15 minutes, turning.",
      "Serve with raw onions, pili-pili, andazi, or fries.",
    ],
    tags: ["skewers", "Lubumbashi", "Katanga", "street food", "beef"],
    body: "In **Lubumbashi**, street skewers share the gesture of Kinshasa [kamundele](/en/recettes/kamundele/)—marinade, coals, sharing. Local side: [andazi](/en/recettes/andazi-tanganyika/) or [bukari](/en/recettes/bukari-katanga/). Commons photo: same Congolese skewer family (credit on the page).",
  },
  "viande-sechee-tomates": {
    title: "Dried meat with tomatoes",
    seoTitle: "Dried meat recipe — Katanga",
    description:
      "Dried meat with tomatoes: rehydrated pieces then simmered — pantry protein of Greater Katanga and the highlands.",
    region: "Greater Katanga",
    imageAlt: "Congolese meal table with sauces and sides",
    prepTime: "20 min + 1 h soak",
    cookTime: "50 min",
    ingredients: [
      "300 g dried meat (beef or goat)",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "3 garlic cloves",
      "3 tbsp oil",
      "Salt, pepper, pili-pili",
      "400 ml water",
    ],
    steps: [
      "Soak the meat 45–60 minutes in warm water. Rinse and cut into pieces.",
      "Sweat onions and garlic; add tomatoes 8 minutes.",
      "Add the meat and water. Simmer covered 35–45 minutes until tender.",
      "Adjust salt (often already salted). Add chili.",
      "Serve with bukari, potatoes or rice.",
    ],
    tags: ["dried meat", "Katanga", "preserve", "tomato"],
    body: "**Dried meat** travels well on the Katanga plateaus—like [kapenta](/en/recettes/kapenta-tomates/) on the lake side. Fresh cousin in sauce: [viande ya sauce](/en/recettes/viande-ya-sauce/).",
  },
  "loso-sauce-katanga": {
    title: "Loso ya sauce",
    seoTitle: "Loso ya sauce recipe — Katanga tomato rice",
    description:
      "Loso ya sauce recipe: white rice with a tomato meat sauce — everyday Lubumbashi plate, distinct from Kinshasa loso mayonnaise.",
    region: "Greater Katanga",
    imageAlt: "Congolese plate with fufu, greens and sauce",
    prepTime: "20 min",
    cookTime: "45 min",
    ingredients: [
      "400 g rice",
      "500 g beef or chicken pieces",
      "2 onions, sliced",
      "3 tomatoes, crushed",
      "3 garlic cloves",
      "3 tbsp oil",
      "Salt, pepper, pili-pili",
      "300 ml water for the sauce",
    ],
    steps: [
      "Cook the rice in salted water. Drain and keep warm.",
      "Brown the meat in oil. Set aside.",
      "Sweat onions and garlic; add tomatoes 8 minutes.",
      "Return the meat, pour in the water. Simmer 25–30 minutes.",
      "Season. Serve the sauce on or beside the rice.",
    ],
    tags: ["loso", "rice", "Katanga", "Lubumbashi", "tomato sauce"],
    body: "**Loso ya sauce** in Lubumbashi: rice + tomato sauce, without the mayonnaise of Kinshasa [loso mayonnaise](/en/recettes/loso-mayonnaise/). Other Eastern rice: [Kivu pilau](/en/recettes/pilau-kivu/). When you want the paste: [bukari](/en/recettes/bukari-katanga/).",
  },
  "sambousa-pommes": {
    title: "Potato sambousa",
    seoTitle: "Sambousa recipe — potato pastries (Goma / East)",
    description:
      "Potato sambousa recipe: fried stuffed pastries — street snack in Goma and the East, cousin to East African samosas.",
    region: "North & South Kivu",
    imageAlt: "Potato sambousa seller in Goma",
    prepTime: "40 min",
    cookTime: "25 min",
    ingredients: [
      "500 g potatoes",
      "1 onion, sliced",
      "2 garlic cloves",
      "1 tsp curry or cumin, optional",
      "Salt, pepper, pili-pili",
      "2 tbsp oil for the filling",
      "250 g samosa / brick pastry, or homemade dough",
      "Frying oil",
    ],
    steps: [
      "Cook the potatoes and mash roughly.",
      "Sweat onion and garlic, add spices, then the potatoes. Season. Cool.",
      "Cut pastry into rectangles. Add a spoonful of filling, fold into a triangle. Seal with water.",
      "Fry over medium heat until golden (2–3 min per side). Drain.",
      "Serve hot, optionally with tomato or pili-pili sauce.",
    ],
    tags: ["sambousa", "samosa", "potatoes", "Goma", "street food"],
    body: "**Sambousa** (samosas) with potato are a **Goma** and Swahili-speaking East snack—seller photo on Commons. Fried cousins: [andazi](/en/recettes/andazi-tanganyika/), [mikate](/en/recettes/mikate/).",
  },
};


