/* Tassie Camp Kitchen — recipe data.
   Each ingredient: { t: display text, s: [shop name, qty, unit, aisle] } or { t, kit: true } for pantry-kit staples.
   Aisles: veg = Fruit & veg, bakery = Bread & wraps, fridge = Fridge & deli, pantry = Pantry & tins.
   Quantities make 4 serves (dinner for 2 + lunch for 2) unless the recipe says otherwise. */

const CATS = {
  pantry: { label: "Pantry one-pots", short: "Pantry", note: "Any night of the cycle" },
  fresh:  { label: "Fresh-first nights", short: "Fresh-first", note: "Cook in the first 2–3 nights after a shop" },
  easy:   { label: "Easy extras", short: "Easy", note: "Breakfasts, lunches and leftover rescues" }
};

const RECIPES = [
  {
    id: "burritos", short: "Burritos", name: "Black bean & sweet potato burritos", emoji: "🌯", cat: "pantry",
    mins: 35, serves: "4 (2 dinners + 2 lunches)", keeps: "Filling keeps 3 days",
    blurb: "Black beans and sweet potato in tortillas, with a lime-cabbage slaw that stays crunchy for days where lettuce would wilt.",
    ing: [
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 large sweet potato (≈500 g), in 1.5 cm dice", s: ["Sweet potato", 500, "g", "veg"] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, 1 tsp dried oregano, ½ tsp chilli flakes", kit: true },
      { t: "2 × 400 g tins black beans, drained", s: ["Black beans, 400 g tin", 2, "tins", "pantry"] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"] },
      { t: "2 limes", s: ["Lime", 2, "", "veg"] },
      { t: "¼ red cabbage, finely shredded", s: ["Red cabbage", 0.25, "", "veg"] },
      { t: "1 avocado", s: ["Avocado", 1, "", "veg"] },
      { t: "100 g cheddar, grated from the block", s: ["Cheddar, block", 100, "g", "fridge"] },
      { t: "8 wholemeal tortillas", s: ["Wholemeal tortillas", 8, "", "bakery"] },
      { t: "Greek yoghurt, to serve (optional)", s: ["Greek yoghurt, plain", 100, "g", "fridge"] }
    ],
    steps: [
      "Heat the oil in your biggest pan over medium heat. Cook the onion for 5 minutes until soft.",
      "Add the sweet potato, spices and a pinch of salt and stir for a minute. Add ½ cup water, put the lid on and simmer for 10 minutes until the sweet potato is just tender.",
      "Stir in the garlic, beans and tomatoes. Simmer uncovered for 8–10 minutes, mashing some of the beans, until thick. Squeeze in one lime and season.",
      "For the slaw, toss the cabbage with the second lime's juice, a pinch of salt and a splash of oil.",
      "Warm the tortillas in the wiped-out pan for 20 seconds a side. Fill with the beans, slaw, cheese, avocado and yoghurt."
    ],
    leftovers: "Wrap tomorrow's lunch straight away, or reheat the filling and crack two eggs into it for breakfast.",
    tip: "Block cheddar outlasts pre-grated by weeks. Grate only what you need."
  },
  {
    id: "dal", short: "Dal", name: "Red lentil dal with flatbreads", emoji: "🫓", cat: "pantry",
    mins: 35, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 4 days",
    blurb: "Red lentils need no soaking and collapse into something creamy in 20 minutes.",
    ing: [
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"] },
      { t: "1 tsp turmeric, 2 tsp cumin, 2 tsp garam masala, ½ tsp chilli flakes", kit: true },
      { t: "1½ cups (300 g) red lentils, rinsed", s: ["Red lentils", 300, "g", "pantry"] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"] },
      { t: "1 × 400 ml tin coconut milk", s: ["Coconut milk, 400 ml tin", 1, "tins", "pantry"] },
      { t: "3 cups (750 ml) water", kit: true },
      { t: "2 big handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"] },
      { t: "4 wholemeal flatbreads or naan", s: ["Flatbreads or naan", 4, "", "bakery"] }
    ],
    steps: [
      "Cook the onion in the oil for 5 minutes. Add the garlic, ginger and spices and stir for a minute until fragrant.",
      "Add the lentils, tomatoes, coconut milk and water and bring to a simmer.",
      "Simmer with the lid ajar for 20–25 minutes, stirring often so it doesn't catch, until the lentils have collapsed. Add water if it gets too thick.",
      "Season well with salt, stir through the spinach until wilted and finish with lemon juice.",
      "Warm the flatbreads in a dry pan and serve."
    ],
    leftovers: "It thickens overnight, so loosen with a splash of water when reheating. Thinned right down, it's a good soup.",
    tip: "Stir from the bottom. Lentils catch on a camp stove's concentrated flame faster than at home."
  },
  {
    id: "curry", short: "Curry", name: "Chickpea, pumpkin & coconut curry", emoji: "🎃", cat: "pantry",
    mins: 35, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 3 days",
    blurb: "Butternut keeps for weeks whole, and this curry tastes better on day two.",
    ing: [
      { t: "3 × 250 g microwave rice pouches (brown or basmati)", s: ["Microwave rice pouch, 250 g", 3, "", "pantry"] },
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "2 garlic cloves, crushed", s: ["Garlic", 2, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"] },
      { t: "3 tbsp red curry paste", s: ["Red curry paste, jar", 3, "tbsp", "pantry"] },
      { t: "½ butternut pumpkin (≈700 g), in 2 cm cubes", s: ["Butternut pumpkin", 0.5, "", "veg"] },
      { t: "1 × 400 ml tin coconut milk", s: ["Coconut milk, 400 ml tin", 1, "tins", "pantry"] },
      { t: "2 × 400 g tins chickpeas, drained", s: ["Chickpeas, 400 g tin", 2, "tins", "pantry"] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"] },
      { t: "1 tbsp soy sauce", kit: true },
      { t: "1 lime", s: ["Lime", 1, "", "veg"] }
    ],
    steps: [
      "Heat the rice first. Squeeze the pouches to break up the grains, tip into the pan with 2 tbsp water and stir for 3 minutes until hot. Tip into a bowl and cover with a plate.",
      "In the same pan, cook the onion in the oil for 4 minutes. Add the garlic, ginger and curry paste and fry for 1–2 minutes until fragrant.",
      "Add the pumpkin, coconut milk and ½ cup water. Put the lid on and simmer for 15 minutes until the pumpkin is tender.",
      "Add the chickpeas and simmer uncovered for 5 minutes. Stir in the spinach, soy sauce and lime juice. Taste and adjust.",
      "Serve over the rice."
    ],
    leftovers: "Store the curry and rice separately. Reheat until steaming all the way through.",
    tip: "Once the curry paste jar is open, it lives in the fridge. It'll see you through several cycles."
  },
  {
    id: "chilli", short: "Chilli", name: "Three-bean chilli", emoji: "🌶️", cat: "pantry",
    mins: 40, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 3 days",
    blurb: "All pantry, or add mince on a fresh-first night. The leftovers become burrito filling.",
    ing: [
      { t: "500 g beef mince (optional, fresh-first nights only)", s: ["Beef mince (optional)", 500, "g", "fridge"] },
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "1 carrot, grated", s: ["Carrot", 1, "", "veg"] },
      { t: "1 red capsicum, diced", s: ["Red capsicum", 1, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, 1 tsp dried oregano, 1 tsp chilli flakes, ½ tsp cinnamon", kit: true },
      { t: "1 tbsp tomato paste", s: ["Tomato paste, tube", 1, "tbsp", "pantry"] },
      { t: "1 × 400 g tin red kidney beans, drained", s: ["Red kidney beans, 400 g tin", 1, "tins", "pantry"] },
      { t: "1 × 400 g tin black beans, drained", s: ["Black beans, 400 g tin", 1, "tins", "pantry"] },
      { t: "1 × 400 g tin cannellini beans, drained", s: ["Cannellini beans, 400 g tin", 1, "tins", "pantry"] },
      { t: "2 × 400 g tins crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 2, "tins", "pantry"] },
      { t: "1 tsp red wine vinegar", kit: true },
      { t: "80 g cheddar, grated, to serve", s: ["Cheddar, block", 80, "g", "fridge"] },
      { t: "2 × 250 g microwave rice pouches", s: ["Microwave rice pouch, 250 g", 2, "", "pantry"] }
    ],
    steps: [
      "If using mince, brown it in the oil for 5–6 minutes, breaking it up, then push it to one side. Add the onion, carrot and capsicum and cook for 6 minutes.",
      "Add the garlic, spices and tomato paste and stir for a minute.",
      "Add the drained beans, tomatoes and ½ cup water. Simmer uncovered for 20 minutes, stirring now and then, until thick.",
      "Season with salt and the vinegar. Heat the rice pouches as in the curry (pan, 2 tbsp water, 3 minutes) and serve with cheese."
    ],
    leftovers: "Day two: wrap it in tortillas with slaw, or spoon it over crushed potatoes.",
    tip: "Rinse the bean tins and use them as a mini rubbish caddy for food scraps."
  },
  {
    id: "minestrone", short: "Minestrone", name: "Camp minestrone", emoji: "🥣", cat: "pantry",
    mins: 40, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 3 days",
    blurb: "A big pot of veg, beans and pasta for cold, wet Tassie nights, finished with shaved parmesan.",
    ing: [
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "2 carrots, diced", s: ["Carrot", 2, "", "veg"] },
      { t: "2 celery sticks, diced (optional)", s: ["Celery", 2, "sticks", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 tsp dried oregano, 1 tsp dried thyme, 1 bay leaf", kit: true },
      { t: "2 potatoes (≈350 g), in 1.5 cm dice", s: ["Potatoes", 350, "g", "veg"] },
      { t: "1 × 400 g tin diced tomatoes", s: ["Diced tomatoes, 400 g tin", 1, "tins", "pantry"] },
      { t: "1.5 L water + 2 stock cubes", kit: true },
      { t: "120 g small pasta (risoni or ditalini)", s: ["Small pasta (risoni or ditalini)", 120, "g", "pantry"] },
      { t: "1 × 400 g tin cannellini beans, drained", s: ["Cannellini beans, 400 g tin", 1, "tins", "pantry"] },
      { t: "¼ green cabbage, shredded", s: ["Green cabbage", 0.25, "", "veg"] },
      { t: "50 g parmesan (and its rind, if you have one)", s: ["Parmesan, block", 50, "g", "fridge"] },
      { t: "Sourdough, to serve (optional)", s: ["Sourdough loaf", 1, "", "bakery"] }
    ],
    steps: [
      "Cook the onion, carrot and celery in the oil for 6 minutes.",
      "Add the garlic and herbs and stir for a minute. Add the potato, tomatoes, water, stock cubes and the parmesan rind. Simmer for 10 minutes.",
      "Add the pasta and beans and simmer for 8 minutes. Add the cabbage for the last 4 minutes.",
      "Season, then shave parmesan over each bowl."
    ],
    leftovers: "The pasta keeps drinking the broth. Add water when you reheat, or enjoy it thick with bread.",
    tip: "Save every parmesan rind in a zip bag in the fridge. Each one flavours a whole pot."
  },
  {
    id: "puttanesca", short: "Puttanesca", name: "One-pot puttanesca with tuna", emoji: "🍝", cat: "pantry",
    mins: 20, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 2 days",
    blurb: "The pasta cooks in the sauce, so there's no draining and no second pot. Every ingredient keeps in a drawer.",
    ing: [
      { t: "2 tbsp olive oil", kit: true },
      { t: "4 garlic cloves, sliced", s: ["Garlic", 4, "cloves", "veg"] },
      { t: "½ tsp chilli flakes", kit: true },
      { t: "4 anchovy fillets (optional)", s: ["Anchovies, jar (optional)", 4, "fillets", "pantry"] },
      { t: "1 × 400 g tin crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 1, "tins", "pantry"] },
      { t: "2 tbsp capers", s: ["Capers, jar", 2, "tbsp", "pantry"] },
      { t: "½ cup (80 g) pitted kalamata olives", s: ["Pitted kalamata olives", 80, "g", "pantry"] },
      { t: "900 ml water", kit: true },
      { t: "350 g wholemeal spaghetti, snapped in half", s: ["Wholemeal spaghetti", 350, "g", "pantry"] },
      { t: "1 × 185 g tin tuna in olive oil", s: ["Tuna in olive oil, 185 g tin", 1, "tins", "pantry"] },
      { t: "1 lemon, zest and juice", s: ["Lemon", 1, "", "veg"] },
      { t: "Parmesan, to serve", s: ["Parmesan, block", 20, "g", "fridge"] }
    ],
    steps: [
      "Warm the oil in a wide pan. Cook the garlic, chilli and anchovies for 1–2 minutes until the anchovies melt.",
      "Add the tomatoes, capers, olives, water and a pinch of salt and bring to the boil.",
      "Add the pasta and push it under. Boil steadily for 10–12 minutes, stirring every minute or two, until the pasta is al dente and the sauce clings. Add a splash of water if it dries out.",
      "Off the heat, flake in the tuna with its oil and add the lemon zest and juice."
    ],
    leftovers: "Eat it cold as a pasta salad for lunch.",
    tip: "Use a wide pan so the snapped spaghetti lies flat in the liquid."
  },
  {
    id: "barley", short: "Barley risotto", name: "Mushroom & pearl barley risotto", emoji: "🍄", cat: "pantry",
    mins: 45, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 3 days",
    blurb: "Barley stays chewy as leftovers where rice turns to mush. Cook it within 5 days of a shop for the fresh mushrooms.",
    ing: [
      { t: "20 g dried porcini", s: ["Dried porcini", 20, "g", "pantry"] },
      { t: "1 tbsp olive oil", kit: true },
      { t: "20 g butter", s: ["Butter", 20, "g", "fridge"] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "250 g Swiss brown mushrooms, sliced", s: ["Swiss brown mushrooms", 250, "g", "fridge"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "1 tsp dried thyme", kit: true },
      { t: "1½ cups (300 g) pearl barley", s: ["Pearl barley", 300, "g", "pantry"] },
      { t: "1.25 L water + 2 stock cubes", kit: true },
      { t: "60 g parmesan, grated", s: ["Parmesan, block", 60, "g", "fridge"] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"] },
      { t: "½ lemon", s: ["Lemon", 0.5, "", "veg"] }
    ],
    steps: [
      "Boil 1 cup of water in the Jetboil and pour it over the porcini in a mug. Soak for 10 minutes, then chop the porcini and keep the liquid.",
      "Heat the oil and butter and cook the onion for 5 minutes, then the mushrooms for 5 minutes until golden. Add the garlic and thyme for a minute.",
      "Add the barley and stir for a minute. Pour in the porcini liquid (leave the grit in the mug), the water and the stock cubes.",
      "Simmer with the lid ajar for 30–35 minutes, stirring now and then, until the barley is tender and creamy. Top up with water as needed.",
      "Stir in the parmesan, spinach, lemon juice and plenty of pepper."
    ],
    leftovers: "Reheat with a splash of water, or press cold leftovers into patties and fry them golden.",
    tip: "This is the longest simmer on the list, so save it for a sheltered evening with a full gas bottle."
  },
  {
    id: "chorizo", short: "Chorizo stew", name: "Chorizo, chickpea & potato stew", emoji: "🥘", cat: "pantry",
    mins: 35, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 3 days",
    blurb: "Cured chorizo lasts for weeks sealed in the fridge. It's the emergency protein for the end of a cycle.",
    ing: [
      { t: "1 cured chorizo (≈200 g), sliced", s: ["Cured chorizo", 200, "g", "fridge"] },
      { t: "1 brown onion, diced", s: ["Brown onion", 1, "", "veg"] },
      { t: "1 red capsicum, diced", s: ["Red capsicum", 1, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp smoked paprika", kit: true },
      { t: "500 g waxy potatoes (Kipfler or Dutch cream), in 2 cm cubes", s: ["Potatoes", 500, "g", "veg"] },
      { t: "1 × 400 g tin crushed tomatoes", s: ["Crushed tomatoes, 400 g tin", 1, "tins", "pantry"] },
      { t: "1 cup (250 ml) water + 1 stock cube", kit: true },
      { t: "1 × 400 g tin chickpeas, drained", s: ["Chickpeas, 400 g tin", 1, "tins", "pantry"] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"] }
    ],
    steps: [
      "Fry the chorizo in a dry pan for 3 minutes until it releases its oil. Add the onion and capsicum and cook for 5 minutes.",
      "Add the garlic and paprika and stir for a minute. Add the potatoes, tomatoes, water and stock cube. Put the lid on and simmer for 15–18 minutes until the potatoes are tender.",
      "Add the chickpeas and simmer uncovered for 5 minutes. Stir in the spinach and season."
    ],
    leftovers: "Breakfast: reheat it, make four wells, crack in eggs and cover for 4 minutes.",
    tip: "No spinach left? A handful of shredded cabbage does the same job."
  },
  {
    id: "salmon", short: "Salmon", name: "Tassie salmon, crushed potatoes & slaw", emoji: "🐟", cat: "fresh",
    mins: 30, serves: "2, plus potatoes for tomorrow's hash", keeps: "Cook salmon within 1–2 days of buying",
    blurb: "Cook this on shop day, when the salmon is freshest. Crisp-skinned local salmon, buttery potatoes and a yoghurt slaw all come out of one pan.",
    ing: [
      { t: "900 g baby potatoes, halved (a third is for tomorrow)", s: ["Baby potatoes", 900, "g", "veg"] },
      { t: "20 g butter", s: ["Butter", 20, "g", "fridge"] },
      { t: "2 Tasmanian salmon fillets, skin on (≈350 g)", s: ["Tasmanian salmon fillets, skin on", 2, "", "fridge"] },
      { t: "¼ red cabbage, finely shredded", s: ["Red cabbage", 0.25, "", "veg"] },
      { t: "1 carrot, grated", s: ["Carrot", 1, "", "veg"] },
      { t: "3 tbsp Greek yoghurt", s: ["Greek yoghurt, plain", 60, "g", "fridge"] },
      { t: "1 tsp Dijon mustard", s: ["Dijon mustard, jar", 1, "tsp", "pantry"] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"] },
      { t: "1 tsp dried dill, salt, pepper, oil", kit: true }
    ],
    steps: [
      "Cover the potatoes with salted water in your pot and boil for 12–15 minutes until tender. Drain. Set a third aside for tomorrow, then crush the rest with the butter, salt and pepper. Tip into a bowl and cover with a plate.",
      "For the slaw, mix the cabbage, carrot, yoghurt, Dijon, half the lemon's juice, dill and a pinch of salt.",
      "Wipe out the pan, add a film of oil and heat it high. Lay the salmon skin-side down, press flat for 10 seconds, and cook for 4 minutes until the skin is crisp. Flip for 1–2 minutes.",
      "Serve the salmon on the potatoes with slaw and lemon wedges."
    ],
    leftovers: "Tomorrow's breakfast hash: fry the reserved potatoes with onion until crisp, then top with fried eggs.",
    tip: "Buy the salmon on shop day and cook it that night. Fish is the most perishable thing in the fridge."
  },
  {
    id: "chicken", short: "Lemony chicken", name: "Lemony chicken & white beans", emoji: "🍋", cat: "fresh",
    mins: 35, serves: "4 (2 dinners + 2 lunches)", keeps: "Keeps 2 days",
    blurb: "Cook this on the second night after a shop. Browned thighs braise in garlicky beans and lemon on the stove.",
    ing: [
      { t: "600 g boneless, skinless chicken thighs", s: ["Chicken thigh fillets", 600, "g", "fridge"] },
      { t: "1 tsp dried oregano, ½ tsp chilli flakes, salt, 1 tbsp oil", kit: true },
      { t: "1 brown onion, sliced", s: ["Brown onion", 1, "", "veg"] },
      { t: "4 garlic cloves, sliced", s: ["Garlic", 4, "cloves", "veg"] },
      { t: "2 × 400 g tins cannellini or butter beans, drained", s: ["Cannellini beans, 400 g tin", 2, "tins", "pantry"] },
      { t: "1 cup (250 ml) water + 1 stock cube", kit: true },
      { t: "1 lemon, zest and juice", s: ["Lemon", 1, "", "veg"] },
      { t: "2 handfuls baby spinach (≈120 g)", s: ["Baby spinach", 120, "g", "fridge"] },
      { t: "30 g parmesan, grated", s: ["Parmesan, block", 30, "g", "fridge"] }
    ],
    steps: [
      "Season the chicken with oregano and salt. Brown it in the oil over medium-high heat for 4–5 minutes a side, then set aside on a plate.",
      "In the same pan, cook the onion for 4 minutes, then the garlic and chilli for a minute.",
      "Add the beans, water, stock cube and lemon zest and scrape up the brown bits. Nestle the chicken back in, put the lid on and simmer for 10 minutes until cooked through with no pink inside.",
      "Stir in the spinach, lemon juice and parmesan."
    ],
    leftovers: "Shred the leftover chicken into tortillas with slaw for lunch.",
    tip: "Keep raw chicken on the lowest shelf of the fridge, sealed, so it can't drip on anything."
  },
  {
    id: "shakshuka", short: "Shakshuka", name: "Shakshuka with feta", emoji: "🍳", cat: "fresh",
    mins: 30, serves: "2, plus sauce for a second round", keeps: "Sauce keeps 3 days",
    blurb: "Eggs poached in spiced tomato. Make double the sauce and you get a second breakfast or dinner later in the cycle.",
    ing: [
      { t: "1 tbsp olive oil", kit: true },
      { t: "1 brown onion, sliced", s: ["Brown onion", 1, "", "veg"] },
      { t: "1 red capsicum, sliced", s: ["Red capsicum", 1, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "2 tsp cumin, 2 tsp smoked paprika, ½ tsp chilli flakes", kit: true },
      { t: "2 × 400 g tins diced tomatoes", s: ["Diced tomatoes, 400 g tin", 2, "tins", "pantry"] },
      { t: "8 eggs (4 tonight, 4 for round two)", s: ["Eggs", 8, "", "fridge"] },
      { t: "100 g feta", s: ["Feta, in brine", 100, "g", "fridge"] },
      { t: "Sourdough or flatbreads, to serve", s: ["Sourdough loaf", 1, "", "bakery"] }
    ],
    steps: [
      "Cook the onion and capsicum in the oil for 7 minutes until soft. Add the garlic and spices for a minute.",
      "Add the tomatoes and simmer for 10 minutes until thick. Season.",
      "Spoon half the sauce into a container. Once it has cooled, put it in the fridge.",
      "Make four wells in the remaining sauce and crack in the eggs. Cover and cook on low for 5–7 minutes until the whites are set.",
      "Crumble the feta over the top and serve with bread."
    ],
    leftovers: "Round two: reheat the saved sauce until bubbling, then add four fresh eggs.",
    tip: "Carry eggs in a hard plastic case. Corrugations will shake a carton apart."
  },
  {
    id: "friedrice", short: "Fried rice", name: "Fridge-raid fried rice", emoji: "🍚", cat: "easy",
    mins: 20, serves: "3 (2 dinners + 1 lunch)", keeps: "Eat by the next day",
    blurb: "Rice pouches suit fried rice because the grains are dry and separate. It's also where leftover chicken, chorizo and tired veg end up.",
    ing: [
      { t: "3 × 250 g microwave rice pouches", s: ["Microwave rice pouch, 250 g", 3, "", "pantry"] },
      { t: "2 tbsp oil", kit: true },
      { t: "3 eggs, beaten", s: ["Eggs", 3, "", "fridge"] },
      { t: "2 carrots, grated", s: ["Carrot", 2, "", "veg"] },
      { t: "¼ green cabbage, shredded", s: ["Green cabbage", 0.25, "", "veg"] },
      { t: "4 spring onions, whites and greens sliced separately", s: ["Spring onions", 4, "", "veg"] },
      { t: "3 garlic cloves, crushed", s: ["Garlic", 3, "cloves", "veg"] },
      { t: "Thumb of ginger (≈20 g), grated", s: ["Ginger", 20, "g", "veg"] },
      { t: "3 tbsp soy sauce, 1 tsp sesame oil, chilli sauce to serve", kit: true },
      { t: "Any leftover chicken or chorizo (optional)", kit: true }
    ],
    steps: [
      "Squeeze the pouches before opening to break up the rice.",
      "Get the pan hot with 1 tbsp oil. Scramble the eggs until just set, then tip them out.",
      "Add the rest of the oil, then the carrot, cabbage and spring onion whites for 3 minutes. Add the garlic and ginger for 30 seconds.",
      "Add the rice, press it flat and leave it for a minute to crisp, then toss. Repeat for 3–4 minutes until hot right through.",
      "Add the soy, sesame oil, eggs, any leftover protein and the spring onion greens."
    ],
    leftovers: "Rice is the one to be strict with. Cool it fast, get it in the fridge within an hour, eat it the next day and reheat until steaming.",
    tip: "Spring onions last about a week in the fridge. Use them early in the cycle, or swap in half a brown onion."
  },
  {
    id: "couscous", short: "Couscous", name: "Jetboil couscous salad", emoji: "🥗", cat: "easy",
    mins: 10, serves: "4 lunches", keeps: "Keeps 2 days",
    blurb: "It needs only boiling water, no stove, and packs well for hike-day lunches.",
    ing: [
      { t: "1 cup (190 g) wholemeal couscous", s: ["Wholemeal couscous", 190, "g", "pantry"] },
      { t: "1 cup boiling water + 1 stock cube", kit: true },
      { t: "1 × 400 g tin chickpeas, drained", s: ["Chickpeas, 400 g tin", 1, "tins", "pantry"] },
      { t: "150 g jarred roasted capsicum, sliced", s: ["Roasted capsicum, jar", 150, "g", "pantry"] },
      { t: "1 Lebanese cucumber, diced", s: ["Lebanese cucumber", 1, "", "fridge"] },
      { t: "100 g feta, crumbled", s: ["Feta, in brine", 100, "g", "fridge"] },
      { t: "40 g pepitas or almonds", s: ["Pepitas", 40, "g", "pantry"] },
      { t: "1 lemon", s: ["Lemon", 1, "", "veg"] },
      { t: "3 tbsp olive oil, 1 tsp dried mint or oregano", kit: true }
    ],
    steps: [
      "Boil 1 cup of water in the Jetboil. Pour it over the couscous and crumbled stock cube in a bowl, cover and leave for 5 minutes.",
      "Fluff with a fork and dress with the lemon juice, oil and dried mint while still warm.",
      "Fold in the chickpeas, capsicum, cucumber, feta and pepitas."
    ],
    leftovers: "Packs straight into lunch containers. Keep it in the fridge and eat within 2 days.",
    tip: "Run a second Jetboil of water into the bowl afterwards and it's half-washed already."
  },
  {
    id: "porridge", short: "Porridge", name: "Apple-cinnamon porridge", emoji: "🍎", cat: "easy",
    mins: 10, serves: "2 breakfasts", keeps: "Make fresh",
    blurb: "A warm breakfast for cold mornings, made with Tassie apples, which keep for weeks in a drawer.",
    ing: [
      { t: "1 cup (90 g) rolled oats", s: ["Rolled oats", 90, "g", "pantry"] },
      { t: "2 cups (500 ml) UHT long-life milk, or half water", s: ["UHT long-life milk", 0.5, "L", "pantry"] },
      { t: "1 apple, grated or diced", s: ["Apples", 1, "", "veg"] },
      { t: "1 tsp cinnamon, pinch of salt", kit: true },
      { t: "30 g walnuts", s: ["Walnuts", 30, "g", "pantry"] },
      { t: "2 tbsp Tasmanian honey", s: ["Tasmanian honey (buy local)", 2, "tbsp", "pantry"] },
      { t: "Greek yoghurt, to serve", s: ["Greek yoghurt, plain", 80, "g", "fridge"] }
    ],
    steps: [
      "Put the oats, milk, apple, cinnamon and salt in a small pot. Simmer, stirring, for 4–5 minutes.",
      "Top with walnuts, honey and yoghurt."
    ],
    leftovers: "None, it's best fresh. For a no-pot version, pour Jetboil water over oats in an insulated mug and cover for 5 minutes.",
    tip: "UHT milk keeps for months unopened, so it saves fridge space until you need it."
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
  "Spring onions": "About a week in the fridge",
  "Apples": "Weeks, kept cool",
  "Lebanese cucumber": "About a week in the fridge",
  "Baby spinach": "4–6 days, so use early",
  "Swiss brown mushrooms": "5–7 days in a paper bag",
  "Tasmanian salmon fillets, skin on": "Cook within 1–2 days",
  "Chicken thigh fillets": "Cook within 2 days",
  "Beef mince (optional)": "Cook within 1–2 days",
  "Eggs": "Fridge, in a hard case",
  "Feta, in brine": "About a week once open; keep in brine",
  "Cheddar, block": "Weeks sealed; wrap tightly once cut",
  "Parmesan, block": "Weeks; the hardest cheese lasts longest",
  "Greek yoghurt, plain": "Check the date; about a week once open",
  "Cured chorizo": "Weeks sealed",
  "Butter": "Weeks in the fridge",
  "Wholemeal tortillas": "Check the date; 1–2 weeks sealed",
  "Flatbreads or naan": "Check the date",
  "Sourdough loaf": "3–4 days",
  "UHT long-life milk": "Months unopened; fridge once open",
  "Microwave rice pouch, 250 g": "Months; once opened, fridge and use next day",
  "Red curry paste, jar": "Fridge once opened"
};

/* Two rotating 7-dinner cycles. Each dinner makes the next day's lunch. */
const CYCLES = {
  A: { name: "Cycle A", plan: ["salmon", "chicken", "barley", "curry", "burritos", "puttanesca", "dal"], extras: { porridge: 7, couscous: 1 } },
  B: { name: "Cycle B", plan: ["chilli", "shakshuka", "chorizo", "minestrone", "friedrice", "dal", "puttanesca"], extras: { porridge: 7, couscous: 1 } }
};

/* Bring-from-home kit. Everything here is a category Biosecurity Tasmania allows: dried herbs and spices, oils, sauces, pasta, rice, pulses, tins. */
const KIT = [
  { group: "Spice tin", items: ["Ground cumin", "Smoked paprika", "Dried oregano", "Chilli flakes", "Turmeric", "Garam masala", "Cinnamon", "Dried thyme", "Dried dill", "Dried mint", "Bay leaves", "Salt and pepper grinders"] },
  { group: "Bottles", items: ["Olive oil (1 L)", "Sesame oil", "Soy sauce", "Red wine vinegar", "Chilli sauce"] },
  { group: "Dry goods", items: ["Stock cubes (2 boxes)", "Red lentils", "Pearl barley", "Wholemeal couscous", "Wholemeal spaghetti", "Risoni", "Rolled oats", "Microwave rice pouches", "Dried porcini", "Walnuts and pepitas"] },
  { group: "Tins and jars for Cycle A", items: ["Black beans ×2", "Chickpeas ×3", "Cannellini ×2", "Diced tomatoes ×2", "Crushed tomatoes ×1", "Coconut milk ×2", "Tuna in olive oil ×1", "Capers, olives, anchovies", "Red curry paste, Dijon, tomato paste", "Roasted capsicum jar", "UHT milk ×2 (1 L)"] },
  { group: "Kit, not food", items: ["Paper towel (wipe pans before washing)", "Zip bags for parmesan rinds and leftovers", "Breathable produce bags", "Hard egg case", "4 lidded leftover containers", "Fridge thermometer"] }
];
