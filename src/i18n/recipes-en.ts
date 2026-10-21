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
};

export const recipeTranslationsEn: Record<string, RecipeTranslation> = {
  "biteku-teku-kasai": {
    "title": "Biteku-teku",
    "seoTitle": "Biteku-teku recipe (lenga-lenga)",
    "description": "Biteku-teku recipe: amaranth simmered with onion, tomato and peanut — Greater Kasai dish, also called lenga-lenga in Kinshasa.",
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
    "body": "Biteku-teku is popular in Kasai. In Kinshasa and the West, the same amaranth is often called lenga-lenga, more commonly simmered with tomato and palm oil. Eat with bidia; peanuts are optional."
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
    "body": "Bukari (sometimes linked to bidia / maize fufu) anchors meals in Greater Katanga: leafy greens, fish and stewed meats cling to it. In the West, fermented cassava “bread” is more often chikwangue."
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
    "body": "Fumbwa (also called koko, okazi or eru) is not pondu: it is a forest vine leaf, often sold already shredded. Cook the sauce gently so the peanut paste turns round and creamy. Serve with chikwangue or fufu."
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
    "body": "Madesu means the everyday palm-oil beans of Congolese kitchens—economical, filling, endlessly varied. Add cassava leaves and you get saka-madesu; serve with chikwangue or rice."
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
    "body": "Makayabu usually means salted dried fish in the DRC; species and tomato quantity vary. Desalting is the critical step—too much salt and the dish is hard to rescue. Serve with chikwangue."
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
    "body": "Chicken moambe (mwamba) is one of the Congolese dishes best known abroad. Palm cream comes in tins or sachets in African grocery stores; you can also extract it from fresh palm nuts. Each household adjusts thickness, heat and sides."
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
      "Season and serve with bidia or fufu."
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
    "body": "Ngai-ngai (Guinean sorrel / roselle) is prized for its sharp acidity. Tomato, smoked fish and fat are dosed differently from kitchen to kitchen. Another leaf stew to compare: pondu."
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
    "body": "Pondu—also called saka-saka or mpondu—is the cassava-leaf stew most associated with Congolese home cooking. A vegetarian version without fish or meat is common on fasting days. The long simmer softens the leaves and builds the sauce; serve with chikwangue or fufu."
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
    "body": "Saka-madesu joins two everyday pillars: saka (pondu / cassava leaves) and madesu (beans). Some versions add smoked fish; others stay plant-based. See also separate pondu and madesu pages."
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
      "Season and serve with bidia or fufu."
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
    description:
      "Liver slices quickly seared with onion and chili — street-food and express cooking common in Kinshasa.",
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
    tags: ["liver", "beef", "pan", "street food"],
    body: "Liver hardens if it stays too long on the heat. In Kinshasa it is often sold as a hot street portion with plenty of onion.",
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
};
