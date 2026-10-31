/* Scott & Sarah's Camp Kitchen — recipe data.
   Each ingredient can have:
     s: [shop name, qty, unit, aisle]  → feeds the shopping list (aisles: veg, bakery, fridge, pantry)
     n: [NUT key, grams or ml used]    → feeds calories and protein per serve
     kit: true                         → comes from the bring-from-home pantry kit
   Calories and protein per serve = sum of n ÷ portions. Values are estimates; brands vary. */

const CATS = {
  pantry: { label: "Pantry one-pots", short: "Pantry", note: "Any night of the cycle" },
  fresh:  { label: "Fresh-first nights", short: "Fresh-first", note: "Cook in the first 2–3 nights after a shop" },
  easy:   { label: "Easy extras", short: "Easy", note: "Breakfasts, lunches and leftover rescues" },
  snacks: { label: "Snacks", short: "Snacks", note: "High protein, little cooking" }
};

/* Nutrition per 100 g (or 100 ml): [kcal, protein g]. Typical Australian label values.
   Yoghurt is Chobani Natural Light (56 kcal, 9.3 g protein per 100 g); coconut milk is Ayam Light (172 kcal per 100 ml). */
const NUT = {
  oil: [884, 0], butter: [717, 0.9], sesame: [884, 0],
  onion: [40, 1.1], garlic: [149, 6.4], ginger: [80, 1.8], springonion: [32, 1.8],
  sweetpotato: [86, 1.6], potato: [75, 2.2], pumpkin: [45, 1.1], carrot: [35, 0.9], celery: [14, 0.7],
  cabbage: [28, 1.4], capsicum: [30, 1.0], zucchini: [17, 1.2], spinach: [23, 2.9], mushrooms: [25, 3.0],
  cucumber: [13, 0.6], avocado: [160, 2.0], lemon: [22, 0.4], apple: [55, 0.3], strawberries: [33, 0.7],
  tomatoes: [22, 1.0], crushed: [25, 1.2], tomatopaste: [80, 4.0], rcapsicum: [30, 1.0],
  blackbeans: [110, 7.0], kidney: [100, 7.5], cannellini: [95, 7.0], chickpeas: [120, 7.0], lentils: [340, 24],
  coconutlight: [172, 1.9], currypaste: [100, 2.0], soy: [60, 8.0], stock: [200, 10], anchovy: [210, 29], olives: [200, 1.5], porcini: [290, 25],
  rice: [160, 3.4], wrap: [290, 9.0], lebbread: [250, 9.0], sourdough: [250, 9.0], crispbread: [340, 9.0],
  pasta: [355, 12.5], wmpasta: [340, 13.5], barley: [350, 10], couscous: [360, 13], oats: [380, 12.5],
  mince: [140, 21], chicken: [140, 20], salmon: [205, 20], hotsmoked: [195, 23], tunaspring: [110, 25], chorizo: [455, 24], egg: [144, 12.6],
  yoghurt: [56, 9.3], cheddar: [403, 25], parmesan: [392, 33], feta: [264, 17], uhtlight: [46, 3.6],
  almonds: [600, 21], walnuts: [690, 15], pepitas: [590, 30], chia: [490, 17], almondbutter: [620, 21], honey: [300, 0.3]
};

const RECIPES = [
  {
    id: "burritos", short: "Burritos", name: "Black bean & sweet potato burritos", emoji: "🌯", cat: "pantry",
    mins: 35, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "for the filling, in the fridge",
    blurb: "Each serve is one wrap packed with beans, sweet potato and a big lime-cabbage slaw. The slaw stays crunchy for days, so the lunches hold up.",
    ing: [
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 small sweet potato (≈250 g), in 1.5 cm dice", s: ["Sweet potato", 250, "g", "veg"], n: ["sweetpotato", 250] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, 1 tsp dried oregano, ½ tsp chilli flakes", kit: true },
      { t: "2 × 400 g tins black beans, drained", s: ["Black beans, 400 g tin", 2, "tins", "pantry"], n: ["blackbeans", 480] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"], n: ["tomatoes", 400] },
      { t: "2 limes", s: ["Lime", 2, "", "veg"], n: ["lemon", 40] },
      { t: "¼ red cabbage (≈250 g), finely shredded", s: ["Red cabbage", 0.25, "", "veg"], n: ["cabbage", 250] },
      { t: "1 carrot, grated", s: ["Carrot", 1, "", "veg"], n: ["carrot", 120] },
      { t: "½ avocado", s: ["Avocado", 0.5, "", "veg"], n: ["avocado", 70] },
      { t: "30 g cheddar, finely grated", s: ["Cheddar, block", 30, "g", "fridge"], n: ["cheddar", 30] },
      { t: "200 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 200, "g", "fridge"], n: ["yoghurt", 200] },
      { t: "4 wholemeal wraps", s: ["Wholemeal wraps", 4, "", "bakery"], n: ["wrap", 240] }
    ],
    steps: [
      "Heat the oil in your biggest pan over medium heat. Cook the onion for 5 minutes until soft.",
      "Add the sweet potato, spices and a pinch of salt and stir for a minute. Add ½ cup water, put the lid on and simmer for 10 minutes until the sweet potato is just tender.",
      "Stir in the garlic, beans and tomatoes. Simmer uncovered for 8–10 minutes, mashing some of the beans, until thick. Squeeze in one lime and season.",
      "For the slaw, toss the cabbage and carrot with the second lime's juice and a pinch of salt.",
      "Warm the wraps in the wiped-out pan for 20 seconds a side. Fill each with a quarter of the beans, a big handful of slaw, a spoon of yoghurt, the cheese and sliced avocado."
    ],
    leftovers: "Box two serves of filling and slaw separately for lunch, and wrap them just before eating so the wrap doesn't go soggy.",
    tip: "Finely grated cheese spreads further, so 30 g covers four wraps. Grate it straight from the block."
  },
  {
    id: "dal", short: "Dal", name: "Red lentil & carrot dal", emoji: "🫓", cat: "pantry",
    mins: 35, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "4 days", keepLabel: "in the fridge",
    blurb: "Red lentils need no soaking and collapse into something creamy in 20 minutes. Yoghurt stirred in at the end replaces the coconut milk.",
    ing: [
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"], n: ["ginger", 20] },
      { t: "1 tsp turmeric, 2 tsp cumin, 2 tsp garam masala, ½ tsp chilli flakes", kit: true },
      { t: "1½ cups (300 g) red lentils, rinsed", s: ["Red lentils", 300, "g", "pantry"], n: ["lentils", 300] },
      { t: "2 carrots, diced small", s: ["Carrot", 2, "", "veg"], n: ["carrot", 240] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"], n: ["tomatoes", 400] },
      { t: "1.2 L water + 1 stock cube", kit: true, n: ["stock", 10] },
      { t: "2 big handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "200 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 200, "g", "fridge"], n: ["yoghurt", 200] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"], n: ["lemon", 40] },
      { t: "2 wholemeal Lebanese breads, halved", s: ["Wholemeal Lebanese bread", 2, "", "bakery"], n: ["lebbread", 140] }
    ],
    steps: [
      "Cook the onion in the oil for 5 minutes. Add the garlic, ginger and spices and stir for a minute until fragrant.",
      "Add the lentils, carrots, tomatoes, water and stock cube and bring to a simmer.",
      "Simmer with the lid ajar for 20–25 minutes, stirring often so it doesn't catch, until the lentils have collapsed. Add water if it gets too thick.",
      "Stir through the spinach until wilted. Take the pot off the heat, then stir in half the yoghurt and the lemon juice. Season well.",
      "Warm the bread in a dry pan and serve with the rest of the yoghurt on top."
    ],
    leftovers: "It thickens overnight, so loosen it with a splash of water when reheating. Add the yoghurt after reheating, off the heat, so it doesn't split.",
    tip: "Stir from the bottom. Lentils catch on a camp stove's concentrated flame faster than at home."
  },
  {
    id: "curry", short: "Curry", name: "Chickpea, pumpkin & lentil curry", emoji: "🎃", cat: "pantry",
    mins: 35, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "in the fridge",
    blurb: "Red lentils thicken the sauce and add protein, so one small tin of light coconut milk goes a long way. It tastes better on day two.",
    ing: [
      { t: "1 × 250 g microwave brown rice pouch", s: ["Microwave rice pouch, 250 g", 1, "", "pantry"], n: ["rice", 250] },
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "2 garlic cloves, crushed", s: ["Garlic", 2, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"], n: ["ginger", 20] },
      { t: "3 tbsp red curry paste", s: ["Red curry paste, jar", 3, "tbsp", "pantry"], n: ["currypaste", 45] },
      { t: "500 g butternut pumpkin, in 2 cm cubes", s: ["Butternut pumpkin", 0.5, "", "veg"], n: ["pumpkin", 500] },
      { t: "½ cup (100 g) red lentils, rinsed", s: ["Red lentils", 100, "g", "pantry"], n: ["lentils", 100] },
      { t: "1 × 270 ml tin light coconut milk + 1 cup water", s: ["Light coconut milk, 270 ml tin", 1, "tins", "pantry"], n: ["coconutlight", 270] },
      { t: "1 × 400 g tin chickpeas, drained", s: ["Chickpeas, 400 g tin", 1, "tins", "pantry"], n: ["chickpeas", 240] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "1 tbsp soy sauce", kit: true },
      { t: "1 lime", s: ["Lime", 1, "", "veg"], n: ["lemon", 20] },
      { t: "200 g high-protein Greek yoghurt, to serve", s: ["High-protein Greek yoghurt, plain", 200, "g", "fridge"], n: ["yoghurt", 200] }
    ],
    steps: [
      "Heat the rice first. Squeeze the pouch to break up the grains, tip it into the pan with 2 tbsp water and stir for 3 minutes until hot. Tip it into a bowl and cover with a plate.",
      "In the same pan, cook the onion in the oil for 4 minutes. Add the garlic, ginger and curry paste and fry for 1–2 minutes until fragrant.",
      "Add the pumpkin, lentils, coconut milk and water. Put the lid on and simmer for 15–18 minutes, stirring now and then, until the pumpkin is tender and the lentils have softened.",
      "Add the chickpeas and simmer uncovered for 5 minutes. Stir in the spinach, soy sauce and lime juice. Taste and adjust.",
      "Serve over a small scoop of rice with a spoon of yoghurt."
    ],
    leftovers: "Store the curry and rice separately. Reheat until steaming all the way through.",
    tip: "Light coconut milk varies a lot. Ayam Light has 172 kcal per 100 ml; a brand under 100 kcal saves about 50 kcal a serve, so check the label."
  },
  {
    id: "chilli", short: "Chilli", name: "Beef & bean chilli with lime slaw", emoji: "🌶️", cat: "fresh",
    mins: 40, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "in the fridge",
    blurb: "Lean mince, two kinds of beans and grated carrot in a thick tomato sauce. It's the most protein per serve on the list, and slaw takes the place of rice.",
    ing: [
      { t: "500 g lean beef mince (5-star)", s: ["Lean beef mince (5-star)", 500, "g", "fridge"], n: ["mince", 500] },
      { t: "1 tsp olive oil", kit: true, n: ["oil", 4.5] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "2 carrots, grated", s: ["Carrot", 2, "", "veg"], n: ["carrot", 240] },
      { t: "1 red capsicum, diced", s: ["Red capsicum", 1, "", "veg"], n: ["capsicum", 160] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, 1 tsp dried oregano, 1 tsp chilli flakes, ½ tsp cinnamon", kit: true },
      { t: "1 tbsp tomato paste", s: ["Tomato paste, tube", 1, "tbsp", "pantry"], n: ["tomatopaste", 16] },
      { t: "1 × 400 g tin red kidney beans, drained", s: ["Red kidney beans, 400 g tin", 1, "tins", "pantry"], n: ["kidney", 240] },
      { t: "1 × 400 g tin black beans, drained", s: ["Black beans, 400 g tin", 1, "tins", "pantry"], n: ["blackbeans", 240] },
      { t: "2 × 400 g tins crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 2, "tins", "pantry"], n: ["crushed", 800] },
      { t: "¼ green cabbage (≈250 g), shredded", s: ["Green cabbage", 0.25, "", "veg"], n: ["cabbage", 250] },
      { t: "1 lime", s: ["Lime", 1, "", "veg"], n: ["lemon", 20] },
      { t: "40 g cheddar, finely grated", s: ["Cheddar, block", 40, "g", "fridge"], n: ["cheddar", 40] },
      { t: "200 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 200, "g", "fridge"], n: ["yoghurt", 200] }
    ],
    steps: [
      "Brown the mince in the oil over high heat for 5–6 minutes, breaking it up. Push it to one side and add the onion, carrot and capsicum. Cook for 5 minutes.",
      "Add the garlic, spices and tomato paste and stir for a minute.",
      "Add the beans, tomatoes and ½ cup water. Simmer uncovered for 20 minutes, stirring now and then, until thick. Season with salt.",
      "Toss the cabbage with the lime juice and a pinch of salt.",
      "Serve the chilli on a pile of slaw, topped with yoghurt and cheese."
    ],
    leftovers: "Day two, wrap it in a wholemeal wrap with slaw, or spoon it over a baked sweet potato.",
    tip: "Rinse the bean tins and use them as a mini rubbish caddy for food scraps."
  },
  {
    id: "minestrone", short: "Minestrone", name: "Bean & veg minestrone", emoji: "🥣", cat: "pantry",
    mins: 40, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "in the fridge",
    blurb: "A big pot of broth, veg and three tins of beans for cold, wet Tassie nights. It's high in volume and fibre for its calories.",
    ing: [
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "2 carrots, diced", s: ["Carrot", 2, "", "veg"], n: ["carrot", 240] },
      { t: "2 celery sticks, diced", s: ["Celery", 2, "sticks", "veg"], n: ["celery", 100] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 tsp dried oregano, 1 tsp dried thyme, 1 bay leaf", kit: true },
      { t: "1 large potato (≈200 g), in 1.5 cm dice", s: ["Potatoes", 200, "g", "veg"], n: ["potato", 200] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"], n: ["tomatoes", 400] },
      { t: "1.5 L water + 2 stock cubes", kit: true, n: ["stock", 20] },
      { t: "80 g risoni", s: ["Risoni", 80, "g", "pantry"], n: ["pasta", 80] },
      { t: "2 × 400 g tins cannellini beans, drained", s: ["Cannellini beans, 400 g tin", 2, "tins", "pantry"], n: ["cannellini", 480] },
      { t: "1 × 400 g tin chickpeas, drained", s: ["Chickpeas, 400 g tin", 1, "tins", "pantry"], n: ["chickpeas", 240] },
      { t: "¼ green cabbage (≈250 g), shredded", s: ["Green cabbage", 0.25, "", "veg"], n: ["cabbage", 250] },
      { t: "40 g parmesan, shaved (and its rind, if you have one)", s: ["Parmesan, block", 40, "g", "fridge"], n: ["parmesan", 40] }
    ],
    steps: [
      "Cook the onion, carrot and celery in the oil for 6 minutes.",
      "Add the garlic and herbs and stir for a minute. Add the potato, tomatoes, water, stock cubes and the parmesan rind. Simmer for 10 minutes.",
      "Add the risoni, beans and chickpeas and simmer for 8 minutes. Add the cabbage for the last 4 minutes.",
      "Season, then shave the parmesan over each bowl."
    ],
    leftovers: "The risoni keeps drinking the broth, so add water when you reheat.",
    tip: "Save every parmesan rind in a zip bag in the fridge. Each one flavours a whole pot for almost no calories."
  },
  {
    id: "puttanesca", short: "Puttanesca", name: "One-pot puttanesca with tuna", emoji: "🍝", cat: "pantry",
    mins: 20, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "2 days", keepLabel: "in the fridge",
    blurb: "The pasta cooks in the sauce, so there's no draining and no second pot. Two tins of tuna and a bag of spinach make it filling without extra pasta.",
    ing: [
      { t: "1 tbsp olive oil", kit: true, n: ["oil", 13.5] },
      { t: "4 garlic cloves, sliced", s: ["Garlic", 4, "cloves", "veg"] },
      { t: "½ tsp chilli flakes", kit: true },
      { t: "4 anchovy fillets", s: ["Anchovies, jar", 4, "fillets", "pantry"], n: ["anchovy", 16] },
      { t: "2 × 400 g tins crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 2, "tins", "pantry"], n: ["crushed", 800] },
      { t: "2 tbsp capers", s: ["Capers, jar", 2, "tbsp", "pantry"] },
      { t: "50 g pitted kalamata olives, halved", s: ["Pitted kalamata olives", 50, "g", "pantry"], n: ["olives", 50] },
      { t: "1 L water", kit: true },
      { t: "300 g wholemeal spaghetti, snapped in half", s: ["Wholemeal spaghetti", 300, "g", "pantry"], n: ["wmpasta", 300] },
      { t: "2 × 185 g tins tuna in springwater, drained", s: ["Tuna in springwater, 185 g tin", 2, "tins", "pantry"], n: ["tunaspring", 260] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "1 lemon, zest and juice", s: ["Lemon", 1, "", "veg"], n: ["lemon", 40] },
      { t: "20 g parmesan, grated", s: ["Parmesan, block", 20, "g", "fridge"], n: ["parmesan", 20] }
    ],
    steps: [
      "Warm the oil in a wide pan. Cook the garlic, chilli and anchovies for 1–2 minutes until the anchovies melt.",
      "Add the tomatoes, capers, olives, water and a pinch of salt and bring to the boil.",
      "Add the pasta and push it under. Boil steadily for 10–12 minutes, stirring every minute or two, until the pasta is al dente and the sauce clings. Add a splash of water if it dries out.",
      "Off the heat, stir in the spinach until wilted, then flake in the tuna and add the lemon zest and juice. Top with parmesan."
    ],
    leftovers: "Eat it cold as a pasta salad for lunch.",
    tip: "Tuna in springwater has about half the calories of tuna in oil. The olive oil in the pan gives the sauce all the richness it needs."
  },
  {
    id: "barley", short: "Barley risotto", name: "Mushroom, barley & white bean risotto", emoji: "🍄", cat: "pantry",
    mins: 45, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "in the fridge",
    blurb: "This version has double the mushrooms, less barley and a soft-boiled egg on top. Barley stays chewy as leftovers where rice turns to mush. Cook it within 5 days of a shop for the fresh mushrooms.",
    ing: [
      { t: "20 g dried porcini", s: ["Dried porcini", 20, "g", "pantry"], n: ["porcini", 20] },
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "500 g Swiss brown mushrooms, sliced", s: ["Swiss brown mushrooms", 500, "g", "fridge"], n: ["mushrooms", 500] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 tsp dried thyme", kit: true },
      { t: "1 cup (200 g) pearl barley", s: ["Pearl barley", 200, "g", "pantry"], n: ["barley", 200] },
      { t: "1.1 L water + 2 stock cubes", kit: true, n: ["stock", 20] },
      { t: "1 × 400 g tin cannellini beans, drained", s: ["Cannellini beans, 400 g tin", 1, "tins", "pantry"], n: ["cannellini", 240] },
      { t: "40 g parmesan, grated", s: ["Parmesan, block", 40, "g", "fridge"], n: ["parmesan", 40] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "½ lemon", s: ["Lemon", 0.5, "", "veg"], n: ["lemon", 20] },
      { t: "4 eggs", s: ["Eggs", 4, "", "fridge"], n: ["egg", 200] }
    ],
    steps: [
      "Boil 1 cup of water in the Jetboil and pour it over the porcini in a mug. Soak for 10 minutes, then chop the porcini and keep the liquid.",
      "Heat the oil and cook the onion for 5 minutes, then the fresh mushrooms for 6–8 minutes until they've given up their water and turned golden. Add the garlic and thyme for a minute.",
      "Add the barley and stir for a minute. Pour in the porcini liquid (leave the grit in the mug), the water and the stock cubes.",
      "Simmer with the lid ajar for 30–35 minutes, stirring now and then, until the barley is tender and creamy. Top up with water as needed. Stir in the beans for the last 5 minutes.",
      "Meanwhile, boil the eggs for 6½ minutes in the Jetboil or a small pot, then cool them in cold water and peel.",
      "Stir the parmesan, spinach and lemon juice into the barley with plenty of pepper. Serve each bowl with a halved egg on top."
    ],
    leftovers: "Keep the lunch eggs unpeeled in the fridge. Reheat the barley with a splash of water.",
    tip: "This is the longest simmer on the list, so save it for a sheltered evening with a full gas bottle."
  },
  {
    id: "chorizo", short: "Chorizo stew", name: "Chorizo, chickpea & egg stew", emoji: "🥘", cat: "pantry",
    mins: 35, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "3 days", keepLabel: "in the fridge",
    blurb: "Half the usual chorizo gives the whole pot its smoky flavour, and eggs baked into the stew carry the protein. Sealed cured chorizo lasts for weeks, so this works at the end of a cycle.",
    ing: [
      { t: "100 g cured chorizo, sliced", s: ["Cured chorizo", 100, "g", "fridge"], n: ["chorizo", 100] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "1 red capsicum, diced", s: ["Red capsicum", 1, "", "veg"], n: ["capsicum", 160] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp smoked paprika", kit: true },
      { t: "400 g waxy potatoes (Kipfler or Dutch cream), in 2 cm cubes", s: ["Potatoes", 400, "g", "veg"], n: ["potato", 400] },
      { t: "1 × 400 g tin crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 1, "tins", "pantry"], n: ["crushed", 400] },
      { t: "1 cup (250 ml) water + 1 stock cube", kit: true, n: ["stock", 10] },
      { t: "2 × 400 g tins chickpeas, drained", s: ["Chickpeas, 400 g tin", 2, "tins", "pantry"], n: ["chickpeas", 480] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "4 eggs", s: ["Eggs", 4, "", "fridge"], n: ["egg", 200] }
    ],
    steps: [
      "Fry the chorizo in a dry pan for 3 minutes until it releases its oil. Add the onion and capsicum and cook for 5 minutes.",
      "Add the garlic and paprika and stir for a minute. Add the potatoes, tomatoes, water and stock cube. Put the lid on and simmer for 15–18 minutes until the potatoes are tender.",
      "Add the chickpeas and simmer uncovered for 5 minutes. Stir in the spinach and season.",
      "Make four wells, crack an egg into each, put the lid on and cook on low for 5–7 minutes until the whites are set."
    ],
    leftovers: "Lift two serves, each with its egg, into containers once cool. The yolks firm up on reheating, which is fine.",
    tip: "No spinach left? A handful of shredded cabbage does the same job."
  },
  {
    id: "salmon", short: "Salmon", name: "Tassie salmon, crushed potatoes & slaw", emoji: "🐟", cat: "fresh",
    mins: 30, portions: 2, serves: "2 dinners, plus potatoes for tomorrow's hash", keepShort: "Day 1", keepLabel: "cook the salmon on shop day",
    blurb: "Crisp-skinned local salmon on lightly buttered potatoes, with a yoghurt slaw instead of mayonnaise. Cook it on shop day, when the salmon is freshest.",
    ing: [
      { t: "650 g baby potatoes, halved (250 g is for tomorrow)", s: ["Baby potatoes", 650, "g", "veg"], n: ["potato", 400] },
      { t: "10 g butter", s: ["Butter", 10, "g", "fridge"], n: ["butter", 10] },
      { t: "2 Tasmanian salmon fillets, skin on (≈250 g)", s: ["Tasmanian salmon fillets, skin on", 2, "", "fridge"], n: ["salmon", 250] },
      { t: "1 tsp olive oil", kit: true, n: ["oil", 4.5] },
      { t: "¼ red cabbage (≈250 g), finely shredded", s: ["Red cabbage", 0.25, "", "veg"], n: ["cabbage", 250] },
      { t: "1 carrot, grated", s: ["Carrot", 1, "", "veg"], n: ["carrot", 120] },
      { t: "100 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 100, "g", "fridge"], n: ["yoghurt", 100] },
      { t: "1 tsp Dijon mustard", s: ["Dijon mustard, jar", 1, "tsp", "pantry"] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"], n: ["lemon", 20] },
      { t: "1 tsp dried dill, salt and pepper", kit: true }
    ],
    steps: [
      "Cover the potatoes with salted water in your pot and boil for 12–15 minutes until tender. Drain. Set 250 g aside for tomorrow, then crush the rest with the butter, salt and pepper. Tip into a bowl and cover with a plate.",
      "For the slaw, mix the cabbage, carrot, yoghurt, Dijon, half the lemon's juice, dill and a pinch of salt.",
      "Wipe out the pan, add the oil and heat it high. Lay the salmon skin-side down, press flat for 10 seconds, and cook for 4 minutes until the skin is crisp. Flip for 1–2 minutes.",
      "Serve the salmon on the potatoes with a big pile of slaw and lemon wedges."
    ],
    leftovers: "Tomorrow's breakfast hash: fry the reserved potatoes with onion until crisp, then top with eggs.",
    tip: "Salmon's skin crisps in its own fat, so a teaspoon of oil is enough."
  },
  {
    id: "chicken", short: "Lemony chicken", name: "Lemony chicken, zucchini & white beans", emoji: "🍋", cat: "fresh",
    mins: 35, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "2 days", keepLabel: "in the fridge",
    blurb: "Browned thighs braise in garlicky beans, zucchini and lemon on the stove. Cook it on the second night after a shop.",
    ing: [
      { t: "600 g boneless, skinless chicken thighs, trimmed", s: ["Chicken thigh fillets", 600, "g", "fridge"], n: ["chicken", 600] },
      { t: "1 tsp dried oregano, ½ tsp chilli flakes, salt", kit: true },
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, sliced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "4 garlic cloves, sliced", s: ["Garlic", 4, "cloves", "veg"] },
      { t: "2 zucchini (≈400 g), in thick half-moons", s: ["Zucchini", 2, "", "fridge"], n: ["zucchini", 400] },
      { t: "2 × 400 g tins cannellini or butter beans, drained", s: ["Cannellini beans, 400 g tin", 2, "tins", "pantry"], n: ["cannellini", 480] },
      { t: "1 cup (250 ml) water + 1 stock cube", kit: true, n: ["stock", 10] },
      { t: "1 lemon, zest and juice", s: ["Lemon", 1, "", "veg"], n: ["lemon", 40] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "20 g parmesan, grated", s: ["Parmesan, block", 20, "g", "fridge"], n: ["parmesan", 20] }
    ],
    steps: [
      "Season the chicken with oregano and salt. Brown it in the oil over medium-high heat for 4–5 minutes a side, then set aside on a plate.",
      "In the same pan, cook the onion and zucchini for 5 minutes, then the garlic and chilli for a minute.",
      "Add the beans, water, stock cube and lemon zest and scrape up the brown bits. Nestle the chicken back in, put the lid on and simmer for 10 minutes until cooked through with no pink inside.",
      "Stir in the spinach, lemon juice and parmesan."
    ],
    leftovers: "Shred the leftover chicken through the beans for lunch, warm or cold.",
    tip: "Keep raw chicken on the lowest shelf of the fridge, sealed, so it can't drip on anything."
  },
  {
    id: "shakshuka", short: "Shakshuka", name: "Chickpea shakshuka with feta", emoji: "🍳", cat: "fresh",
    mins: 30, portions: 4, serves: "4 serves (2 tonight + sauce for a second round)", keepShort: "3 days", keepLabel: "for the saved sauce",
    blurb: "Two eggs each, poached in spiced tomato with chickpeas stirred through. Half the sauce goes in the fridge for a second breakfast or dinner later in the cycle.",
    ing: [
      { t: "2 tsp olive oil", kit: true, n: ["oil", 9] },
      { t: "1 brown onion, sliced", s: ["Brown onion", 1, "", "veg"], n: ["onion", 150] },
      { t: "2 red capsicums, sliced", s: ["Red capsicum", 2, "", "veg"], n: ["capsicum", 320] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, ½ tsp chilli flakes", kit: true },
      { t: "2 × 400 g tins diced tomatoes", s: ["Diced tomatoes, 400 g tin", 2, "tins", "pantry"], n: ["tomatoes", 800] },
      { t: "1 × 400 g tin chickpeas, drained", s: ["Chickpeas, 400 g tin", 1, "tins", "pantry"], n: ["chickpeas", 240] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "8 eggs (4 tonight, 4 for round two)", s: ["Eggs", 8, "", "fridge"], n: ["egg", 400] },
      { t: "60 g feta", s: ["Feta, in brine", 60, "g", "fridge"], n: ["feta", 60] },
      { t: "4 slices sourdough (1 each)", s: ["Sourdough loaf", 1, "", "bakery"], n: ["sourdough", 200] }
    ],
    steps: [
      "Cook the onion and capsicum in the oil for 7 minutes until soft. Add the garlic and spices for a minute.",
      "Add the tomatoes and chickpeas and simmer for 10 minutes until thick. Stir in the spinach and season.",
      "Spoon half the sauce into a container. Once it has cooled, put it in the fridge.",
      "Make four wells in the remaining sauce and crack in the eggs. Cover and cook on low for 5–7 minutes until the whites are set.",
      "Crumble half the feta over the top and serve with one slice of toasted sourdough each."
    ],
    leftovers: "Round two: reheat the saved sauce until bubbling, then add four fresh eggs and the rest of the feta.",
    tip: "Carry eggs in a hard plastic case. Corrugations will shake a carton apart."
  },
  {
    id: "friedrice", short: "Fried rice", name: "Egg & veg fried rice", emoji: "🍚", cat: "easy",
    mins: 20, portions: 4, serves: "4 serves (2 dinners + 2 lunches)", keepShort: "1 day", keepLabel: "eat leftovers the next day",
    blurb: "Two eggs each and more veg than rice. Rice pouches suit fried rice because the grains are dry and separate.",
    ing: [
      { t: "2 × 250 g microwave brown rice pouches", s: ["Microwave rice pouch, 250 g", 2, "", "pantry"], n: ["rice", 500] },
      { t: "1 tbsp olive oil", kit: true, n: ["oil", 13.5] },
      { t: "8 eggs, beaten", s: ["Eggs", 8, "", "fridge"], n: ["egg", 400] },
      { t: "2 carrots, grated", s: ["Carrot", 2, "", "veg"], n: ["carrot", 240] },
      { t: "¼ green cabbage (≈250 g), shredded", s: ["Green cabbage", 0.25, "", "veg"], n: ["cabbage", 250] },
      { t: "1 red capsicum, diced", s: ["Red capsicum", 1, "", "veg"], n: ["capsicum", 160] },
      { t: "4 spring onions, whites and greens sliced separately", s: ["Spring onions", 4, "", "veg"], n: ["springonion", 60] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"], n: ["ginger", 20] },
      { t: "3 tbsp soy sauce, chilli sauce to serve", kit: true, n: ["soy", 45] },
      { t: "1 tsp sesame oil", kit: true, n: ["sesame", 4.5] },
      { t: "Any leftover chicken or chorizo (optional, not counted)", kit: true }
    ],
    steps: [
      "Squeeze the pouches before opening to break up the rice.",
      "Get the pan hot with 1 tsp of the oil. Scramble the eggs until just set, then tip them out.",
      "Add the rest of the oil, then the carrot, cabbage, capsicum and spring onion whites for 4 minutes. Add the garlic and ginger for 30 seconds.",
      "Add the rice, press it flat and leave it for a minute to crisp, then toss. Repeat for 3–4 minutes until hot right through.",
      "Add the soy, sesame oil, eggs, any leftover protein and the spring onion greens."
    ],
    leftovers: "Rice is the one to be strict with. Cool it fast, get it in the fridge within an hour, eat it the next day and reheat until steaming.",
    tip: "Spring onions last about a week in the fridge. Use them early in the cycle, or swap in half a brown onion."
  },
  {
    id: "couscous", short: "Couscous", name: "Jetboil couscous & chickpea salad", emoji: "🥗", cat: "easy",
    mins: 10, portions: 4, serves: "4 lunches", keepShort: "2 days", keepLabel: "in the fridge",
    blurb: "It needs only boiling water, no stove. Two tins of chickpeas and less couscous make it more filling per calorie, and it packs well for hike-day lunches.",
    ing: [
      { t: "⅔ cup (120 g) wholemeal couscous", s: ["Wholemeal couscous", 120, "g", "pantry"], n: ["couscous", 120] },
      { t: "⅔ cup boiling water + 1 stock cube", kit: true, n: ["stock", 10] },
      { t: "2 × 400 g tins chickpeas, drained", s: ["Chickpeas, 400 g tin", 2, "tins", "pantry"], n: ["chickpeas", 480] },
      { t: "150 g jarred roasted capsicum in brine, sliced", s: ["Roasted capsicum in brine, jar", 150, "g", "pantry"], n: ["rcapsicum", 150] },
      { t: "2 Lebanese cucumbers, diced", s: ["Lebanese cucumber", 2, "", "fridge"], n: ["cucumber", 300] },
      { t: "2 handfuls baby spinach (≈120 g), shredded", s: ["Baby spinach", 120, "g", "fridge"], n: ["spinach", 120] },
      { t: "80 g feta, crumbled", s: ["Feta, in brine", 80, "g", "fridge"], n: ["feta", 80] },
      { t: "30 g pepitas", s: ["Pepitas", 30, "g", "pantry"], n: ["pepitas", 30] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"], n: ["lemon", 40] },
      { t: "1 tbsp olive oil, 1 tsp dried mint or oregano", kit: true, n: ["oil", 13.5] }
    ],
    steps: [
      "Boil the water in the Jetboil. Pour it over the couscous and crumbled stock cube in a bowl, cover and leave for 5 minutes.",
      "Fluff with a fork and dress with the lemon juice, oil and dried mint while still warm.",
      "Fold in the chickpeas, capsicum, cucumber, spinach, feta and pepitas."
    ],
    leftovers: "Packs straight into lunch containers. Keep it in the fridge and eat within 2 days.",
    tip: "Run a second Jetboil of water into the bowl afterwards and it's half-washed already."
  },
  {
    id: "porridge", short: "Porridge", name: "Apple-cinnamon protein porridge", emoji: "🍎", cat: "easy",
    mins: 10, portions: 2, serves: "2 breakfasts", keepShort: "Fresh", keepLabel: "best eaten straight away",
    blurb: "A warm breakfast for cold mornings. Light milk and a big spoon of yoghurt add protein, so it keeps you going until lunch.",
    ing: [
      { t: "80 g rolled oats", s: ["Rolled oats", 80, "g", "pantry"], n: ["oats", 80] },
      { t: "300 ml UHT light milk + 200 ml water", s: ["UHT light milk", 0.3, "L", "pantry"], n: ["uhtlight", 300] },
      { t: "1 apple, grated or diced", s: ["Apples", 1, "", "veg"], n: ["apple", 150] },
      { t: "1 tsp cinnamon, pinch of salt", kit: true },
      { t: "20 g walnuts", s: ["Walnuts", 20, "g", "pantry"], n: ["walnuts", 20] },
      { t: "2 tsp Tasmanian honey", s: ["Tasmanian honey (buy local)", 0.67, "tbsp", "pantry"], n: ["honey", 14] },
      { t: "200 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 200, "g", "fridge"], n: ["yoghurt", 200] }
    ],
    steps: [
      "Put the oats, milk, water, apple, cinnamon and salt in a small pot. Simmer, stirring, for 4–5 minutes.",
      "Divide between two bowls and top each with yoghurt, walnuts and a teaspoon of honey."
    ],
    leftovers: "None, it's best fresh. For a no-pot version, pour Jetboil water over oats in an insulated mug and cover for 5 minutes.",
    tip: "UHT milk keeps for months unopened, so it saves fridge space until you need it."
  },
  {
    id: "eggs", batch: "4 serves of 2 eggs", short: "Boiled eggs", name: "Boiled eggs for the week", emoji: "🥚", cat: "snacks",
    mins: 15, portions: 4, serves: "4 serves (2 eggs each)", keepShort: "1 week", keepLabel: "in the fridge",
    blurb: "Boil eight at once and you have a grab-and-go snack for most of the week.",
    ing: [
      { t: "8 eggs", s: ["Eggs", 8, "", "fridge"], n: ["egg", 400] },
      { t: "Salt, pepper and chilli flakes, to serve", kit: true }
    ],
    steps: [
      "Bring a pot of water to the boil. Boiling it in the Jetboil first and tipping it in saves gas.",
      "Lower the eggs in with a spoon and boil for 10 minutes for firm yolks.",
      "Drain and cover with cold water for 5 minutes so they stop cooking and peel more easily.",
      "Dry them and store them in a lidded container in the fridge. Peel and season as you eat them."
    ],
    leftovers: "Peeled or not, they keep for about a week in the fridge. Unpeeled ones are easier to carry in a daypack.",
    tip: "Older eggs peel more cleanly than very fresh ones, so boil the oldest in the case."
  },
  {
    id: "yoghurt", batch: "4 bowls", short: "Yoghurt bowls", name: "Greek yoghurt, strawberries & toasted almonds", emoji: "🍓", cat: "snacks",
    mins: 5, portions: 4, serves: "4 bowls", keepShort: "1 week", keepLabel: "for the tub, once open",
    blurb: "Tasmanian strawberries are in season from November. A high-protein yoghurt like Chobani Natural Light has 9 g of protein per 100 g, so check the label, since some Greek-style tubs have far less.",
    ing: [
      { t: "600 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 600, "g", "fridge"], n: ["yoghurt", 600] },
      { t: "1 punnet (250 g) strawberries", s: ["Strawberries", 250, "g", "veg"], n: ["strawberries", 250] },
      { t: "40 g almonds, roughly chopped", s: ["Almonds", 40, "g", "pantry"], n: ["almonds", 40] },
      { t: "1 tbsp Tasmanian honey", s: ["Tasmanian honey (buy local)", 1, "tbsp", "pantry"], n: ["honey", 21] },
      { t: "Pinch of cinnamon", kit: true }
    ],
    steps: [
      "Toast the almonds in a dry pan over medium heat for 3–4 minutes, shaking often, until they smell nutty. Let them cool.",
      "Hull and slice the strawberries.",
      "Spoon 150 g of yoghurt into each bowl, top with strawberries and almonds, and finish with a drizzle of honey and cinnamon."
    ],
    leftovers: "Keep the toasted almonds in a jar and slice strawberries fresh each time. Cut strawberries go soft within a day.",
    tip: "Strawberries bruise in a moving car, so carry the punnet on top of everything else in the fridge."
  },
  {
    id: "smokedsalmon", batch: "4 serves", short: "Smoked salmon", name: "Hot-smoked salmon on rye crispbread", emoji: "🥒", cat: "snacks",
    mins: 10, portions: 4, serves: "4 serves (2 crispbreads each)", keepShort: "2 days", keepLabel: "once the pack is open",
    blurb: "Tasmanian hot-smoked salmon is cooked and ready to eat, so this needs only a knife and a spoon.",
    ing: [
      { t: "200 g Tasmanian hot-smoked salmon", s: ["Tasmanian hot-smoked salmon", 200, "g", "fridge"], n: ["hotsmoked", 200] },
      { t: "8 rye crispbreads", s: ["Rye crispbread", 8, "", "pantry"], n: ["crispbread", 80] },
      { t: "120 g high-protein Greek yoghurt", s: ["High-protein Greek yoghurt, plain", 120, "g", "fridge"], n: ["yoghurt", 120] },
      { t: "1 Lebanese cucumber", s: ["Lebanese cucumber", 1, "", "fridge"], n: ["cucumber", 150] },
      { t: "½ lemon", s: ["Lemon", 0.5, "", "veg"], n: ["lemon", 20] },
      { t: "1 tsp dried dill, salt and pepper", kit: true }
    ],
    steps: [
      "Mix the yoghurt with the dill, a squeeze of lemon and a pinch of salt.",
      "Slice the cucumber into thin rounds.",
      "Spread each crispbread with the yoghurt, layer on the cucumber and flake the salmon over the top. Finish with pepper and more lemon."
    ],
    leftovers: "Build them as you eat them, because crispbread goes soft under the topping. Keep opened salmon wrapped in the fridge and eat it within 2 days.",
    tip: "A sealed pack keeps until its use-by date, so buy it on shop day and open it when you need it."
  },
  {
    id: "tunasmash", batch: "4 serves", short: "Tuna smash", name: "Tuna & white bean smash", emoji: "🫘", cat: "snacks",
    mins: 10, portions: 4, serves: "4 serves", keepShort: "2 days", keepLabel: "in the fridge",
    blurb: "Everything comes from a tin or a drawer, and a fork is the only tool. Scoop it up with capsicum strips and one crispbread each.",
    ing: [
      { t: "1 × 400 g tin cannellini beans, drained", s: ["Cannellini beans, 400 g tin", 1, "tins", "pantry"], n: ["cannellini", 240] },
      { t: "1 × 185 g tin tuna in springwater, drained", s: ["Tuna in springwater, 185 g tin", 1, "tins", "pantry"], n: ["tunaspring", 130] },
      { t: "1 tsp olive oil", kit: true, n: ["oil", 4.5] },
      { t: "1 lemon, zest and juice", s: ["Lemon", 1, "", "veg"], n: ["lemon", 40] },
      { t: "1 tbsp capers, chopped", s: ["Capers, jar", 1, "tbsp", "pantry"] },
      { t: "1 red capsicum, in strips", s: ["Red capsicum", 1, "", "veg"], n: ["capsicum", 160] },
      { t: "4 rye crispbreads", s: ["Rye crispbread", 4, "", "pantry"], n: ["crispbread", 40] },
      { t: "Pepper", kit: true }
    ],
    steps: [
      "Mash the beans in a bowl with a fork until mostly smooth.",
      "Flake in the tuna, then add the oil, lemon zest and juice, capers and plenty of pepper. Mix well.",
      "Serve with capsicum strips and a crispbread each."
    ],
    leftovers: "Keep it covered in the fridge and eat it within 2 days.",
    tip: "The beans and lemon make it creamy, so it needs only a teaspoon of oil."
  },
  {
    id: "oatbites", batch: "6 serves of 2 bites", short: "Oat bites", name: "Almond butter oat bites", emoji: "🍯", cat: "snacks",
    mins: 15, portions: 6, serves: "12 bites (6 serves of 2)", keepShort: "1 week", keepLabel: "in the fridge",
    blurb: "These take one bowl and no cooking. They're the most calorie-dense snack here, so save them for long walking days.",
    ing: [
      { t: "1 cup (90 g) rolled oats", s: ["Rolled oats", 90, "g", "pantry"], n: ["oats", 90] },
      { t: "100 g natural almond butter", s: ["Natural almond butter (100% almonds)", 100, "g", "pantry"], n: ["almondbutter", 100] },
      { t: "2 tbsp Tasmanian honey", s: ["Tasmanian honey (buy local)", 2, "tbsp", "pantry"], n: ["honey", 42] },
      { t: "2 tbsp (24 g) chia seeds", s: ["Chia seeds", 24, "g", "pantry"], n: ["chia", 24] },
      { t: "30 g pepitas", s: ["Pepitas", 30, "g", "pantry"], n: ["pepitas", 30] },
      { t: "½ tsp cinnamon and a pinch of salt", kit: true }
    ],
    steps: [
      "Stir everything together in a bowl until it clumps. If it's crumbly, add water a teaspoon at a time.",
      "Roll into 12 balls about the size of a walnut. Damp hands stop the mix sticking.",
      "Chill in a lidded container for at least an hour to firm up."
    ],
    leftovers: "They keep for a week in the fridge. Out of the fridge they soften, but they're fine in a daypack for the day.",
    tip: "Natural almond butter separates in the jar, so stir the oil back in before you measure it."
  },
  {
    id: "chickpeas", batch: "4 serves", short: "Crispy chickpeas", name: "Crispy parmesan chickpeas", emoji: "🧆", cat: "snacks",
    mins: 20, portions: 4, serves: "4 serves", keepShort: "1 day", keepLabel: "before they soften",
    blurb: "Fry them until they rattle in the pan, then toss them with parmesan and smoked paprika. They're best eaten warm.",
    ing: [
      { t: "2 × 400 g tins chickpeas, drained", s: ["Chickpeas, 400 g tin", 2, "tins", "pantry"], n: ["chickpeas", 480] },
      { t: "1 tbsp olive oil", kit: true, n: ["oil", 13.5] },
      { t: "1 tsp smoked paprika, ½ tsp cumin, salt", kit: true },
      { t: "20 g parmesan, finely grated", s: ["Parmesan, block", 20, "g", "fridge"], n: ["parmesan", 20] }
    ],
    steps: [
      "Drain the chickpeas and pat them very dry with paper towel, since wet chickpeas steam instead of crisping.",
      "Heat the oil in your widest pan over medium-high heat. Add the chickpeas in one layer and fry for 12–15 minutes, shaking the pan every minute, until golden and crunchy.",
      "Take the pan off the heat and toss with the paprika, cumin, salt and parmesan."
    ],
    leftovers: "They go soft within a day. Keep leftovers sealed and re-crisp them in a dry pan for 2 minutes.",
    tip: "Hold a lid loosely over the pan, because the odd chickpea pops."
  },
  {
    id: "snackbox", batch: "4 boxes", short: "Snack box", name: "Egg, cheddar & crunchy veg box", emoji: "🧀", cat: "snacks",
    mins: 5, portions: 4, serves: "4 boxes", keepShort: "Same day", keepLabel: "pack it fresh",
    blurb: "A no-cook box for walking days. Swapping nuts for a boiled egg and crunchy veg keeps it filling for fewer calories.",
    ing: [
      { t: "4 boiled eggs", s: ["Eggs", 4, "", "fridge"], n: ["egg", 200] },
      { t: "80 g Tasmanian cheddar", s: ["Cheddar, block", 80, "g", "fridge"], n: ["cheddar", 80] },
      { t: "2 carrots", s: ["Carrot", 2, "", "veg"], n: ["carrot", 240] },
      { t: "1 Lebanese cucumber", s: ["Lebanese cucumber", 1, "", "fridge"], n: ["cucumber", 150] },
      { t: "1 apple", s: ["Apples", 1, "", "veg"], n: ["apple", 150] }
    ],
    steps: [
      "Use eggs from a batch of boiled eggs, or boil four for 10 minutes and cool them in cold water.",
      "Cut the cheddar into fingers and the carrots and cucumber into sticks. Quarter and core the apple just before you pack it.",
      "Divide everything between four containers, with one egg and about 20 g of cheese in each."
    ],
    leftovers: "Wrap cut cheese tightly and keep it in the fridge. Cut veg stays crisp for a day in a sealed box.",
    tip: "A squeeze of lemon over cut apple stops it going brown."
  }
];

/* How long things keep. Shown in the shopping list. */
const KEEPS = {
  "Brown onion": "Weeks in a dark, airy drawer",
  "Garlic": "Months, cool and dry",
  "Ginger": "2–3 weeks in the fridge",
  "Sweet potato": "2–3 weeks, cool and dark",
  "Potatoes": "Weeks to months, cool and dark",
  "Baby potatoes": "Weeks, cool and dark",
  "Carrot": "1–2 weeks or more",
  "Red cabbage": "Several weeks; peel tired outer leaves",
  "Green cabbage": "Several weeks; peel tired outer leaves",
  "Butternut pumpkin": "Weeks whole; fridge once cut",
  "Lime": "2+ weeks; longer in the fridge",
  "Lemon": "2+ weeks; longer in the fridge",
  "Avocado": "Buy rock-hard; ripens in 3–5 days",
  "Red capsicum": "1–2 weeks in the fridge",
  "Celery": "1–2 weeks wrapped in the fridge",
  "Zucchini": "About a week in the fridge",
  "Spring onions": "About a week in the fridge",
  "Apples": "Weeks, kept cool",
  "Strawberries": "2–3 days in the fridge, so buy near the day",
  "Lebanese cucumber": "About a week in the fridge",
  "Baby spinach": "4–6 days, so use early",
  "Swiss brown mushrooms": "5–7 days in a paper bag",
  "Tasmanian salmon fillets, skin on": "Cook within 1–2 days",
  "Tasmanian hot-smoked salmon": "Sealed until its use-by; 2 days once open",
  "Chicken thigh fillets": "Cook within 2 days",
  "Lean beef mince (5-star)": "Cook within 1–2 days",
  "Eggs": "Fridge, in a hard case",
  "Feta, in brine": "About a week once open; keep in brine",
  "Cheddar, block": "Weeks sealed; wrap tightly once cut",
  "Parmesan, block": "Weeks; the hardest cheese lasts longest",
  "High-protein Greek yoghurt, plain": "Check the date; about a week once open",
  "Cured chorizo": "Weeks sealed",
  "Butter": "Weeks in the fridge",
  "Wholemeal wraps": "Check the date; 1–2 weeks sealed",
  "Wholemeal Lebanese bread": "Check the date",
  "Sourdough loaf": "3–4 days",
  "UHT light milk": "Months unopened; fridge once open",
  "Microwave rice pouch, 250 g": "Months; once opened, fridge and use next day",
  "Red curry paste, jar": "Fridge once opened",
  "Light coconut milk, 270 ml tin": "Months unopened",
  "Almonds": "Months in a sealed bag",
  "Natural almond butter (100% almonds)": "Months; no fridge needed",
  "Chia seeds": "Months, kept dry",
  "Rye crispbread": "Months sealed; keep it dry"
};

/* Two rotating 7-dinner cycles. Each dinner makes the next day's lunch. */
const CYCLES = {
  A: { name: "Cycle A", plan: ["salmon", "chicken", "barley", "curry", "burritos", "puttanesca", "dal"], extras: { porridge: 7, couscous: 1 } },
  B: { name: "Cycle B", plan: ["chilli", "shakshuka", "chorizo", "minestrone", "friedrice", "dal", "puttanesca"], extras: { porridge: 7, couscous: 1 } }
};

/* Bring-from-home kit. Everything here is a category Biosecurity Tasmania allows: dried herbs and spices, oils, sauces, pasta, rice, pulses, tins. */
const KIT = [
  { group: "Spice tin", items: ["Ground cumin", "Smoked paprika", "Dried oregano", "Chilli flakes", "Turmeric", "Garam masala", "Cinnamon", "Dried thyme", "Dried dill", "Dried mint", "Bay leaves", "Salt and pepper grinders"] },
  { group: "Bottles", items: ["Olive oil (1 L)", "Measuring spoons, for the oil", "Sesame oil", "Soy sauce", "Chilli sauce"] },
  { group: "Dry goods", items: ["Stock cubes (2 boxes)", "Red lentils", "Pearl barley", "Wholemeal couscous", "Wholemeal spaghetti", "Risoni", "Rolled oats", "Microwave brown rice pouches", "Dried porcini", "Walnuts, almonds and pepitas", "Chia seeds", "Natural almond butter (100% almonds)", "Rye crispbread"] },
  { group: "Tins and jars for Cycle A", items: ["Black beans ×2", "Chickpeas ×3", "Cannellini ×3", "Diced tomatoes ×2", "Crushed tomatoes ×2", "Light coconut milk, 270 ml ×1", "Tuna in springwater ×2", "Capers, olives, anchovies", "Red curry paste, Dijon, tomato paste", "Roasted capsicum in brine", "UHT light milk, 3 × 1 L (2.1 L needed)"] },
  { group: "Kit, not food", items: ["Paper towel (wipe pans before washing)", "Zip bags for parmesan rinds and leftovers", "Breathable produce bags", "Hard egg case", "4 lidded leftover containers", "Fridge thermometer"] }
];

/* Calories and protein for one serve, from the n values above. */
function nutrition(r) {
  let kcal = 0, protein = 0;
  for (const i of r.ing) {
    if (!i.n) continue;
    const f = NUT[i.n[0]];
    kcal += f[0] * i.n[1] / 100;
    protein += f[1] * i.n[1] / 100;
  }
  return { kcal: Math.round(kcal / r.portions / 10) * 10, protein: Math.round(protein / r.portions) };
}
