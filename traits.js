/**
 * traits.js — Hachiko PFP Creator
 * Defines all trait categories, items, layer order, and rarity weights.
 */

// ── Layer render order (bottom → top) ──────────────────────────────────────
const LAYER_ORDER = ['backgrounds', 'hero', 'dress', 'neck', 'eyes', 'hairs'];

// ── Rarity System ──────────────────────────────────────────────────────────
const RARITY = {
  common:    { label: 'Common',    color: '#94a3b8', weight: 60 },
  rare:      { label: 'Rare',      color: '#38bdf8', weight: 25 },
  epic:      { label: 'Epic',      color: '#a855f7', weight: 12 },
  legendary: { label: 'Legendary', color: '#fbbf24', weight: 3  },
};

// ── Category Icons ─────────────────────────────────────────────────────────
const CATEGORY_ICONS = {
  backgrounds: '🌅',
  dress:       '👗',
  eyes:        '👁',
  hairs:       '💇',
  neck:        '📿',
};

// ── TRAITS ─────────────────────────────────────────────────────────────────
// Each trait: { id, name, file, rarity }
// `file` is relative to assets/<category>/

// traits.js — corrected to match your actual asset folder names

const TRAITS = {

  backgrounds: [
    { name: 'Beach',      path: 'assets/backgrounds/scene/beach.jpg' },
    { name: 'Dark Sky',   path: 'assets/backgrounds/scene/darksky.png' },
    { name: 'Spa',        path: 'assets/backgrounds/scene/Spa.jpg' },
    { name: 'Flowers',    path: 'assets/backgrounds/scene/flowers.png' },
    { name: 'Funky',        path: 'assets/backgrounds/scene/funky.png' },
    { name: 'Glossy',        path: 'assets/backgrounds/scene/Glossy.png' },
    { name: 'Topical',    path: 'assets/backgrounds/scene/Tropical Island.jpg' },
    { name: 'Under',      path: 'assets/backgrounds/scene/under water.jpg' },
    { name: 'Beige',      path: 'assets/backgrounds/solid/Beige.jpg' },
    { name: 'Blue',       path: 'assets/backgrounds/solid/blue.jpg' },
    { name: 'Green',      path: 'assets/backgrounds/solid/Green.jpg' },
    { name: 'Mint',       path: 'assets/backgrounds/solid/mint.jpg' },
    { name: 'Pink',       path: 'assets/backgrounds/solid/pink.jpg' },
    { name: 'Dark Pink',       path: 'assets/backgrounds/solid/dpink.png' },
    { name: 'Purple',     path: 'assets/backgrounds/solid/Purple.jpg' },
    { name: 'Yellow',     path: 'assets/backgrounds/solid/Yellow.jpg' },
    { name: 'Tangerine',  path: 'assets/backgrounds/solid/Tangerine.jpg' },
    { name: 'Red',        path: 'assets/backgrounds/solid/Red.jpg' },
  
  ],

dress: [
  { name: 'Banana Suit',      path: 'assets/dress/Banana Suit.png' },
  { name: 'Bath Robe',        path: 'assets/dress/Bath Robe.png' },
  { name: 'Biker Jacket',     path: 'assets/dress/Biker Jacket.png' },
  { name: 'Cat Suit',         path: 'assets/dress/Cat Suit.png' },

  { name: 'Christmas Sweater', path: 'assets/dress/Christmas Sweater Blue.png' },
  { name: 'Crop Top',          path: 'assets/dress/Crop Top.png' },
  { name: 'Dr strange cape',   path: 'assets/dress/Dr strange cape.png' },
  { name: 'Hawaiian Shirt',    path: 'assets/dress/Hawaiian Shirt.png' },

  { name: 'Hoodie Black',      path: 'assets/dress/Hoodie Black.png' },
  { name: 'Hoodie Pink',       path: 'assets/dress/Hoodie Pink.png' },

  { name: 'Ice Coating',       path: 'assets/dress/Ice Coat.png' },

  { name: 'Kimono Blue',       path: 'assets/dress/Kimono Blue.png' },
  { name: 'Kimono Brown',      path: 'assets/dress/Kimono Brown.png' },
  { name: 'Kimono Gold',       path: 'assets/dress/Kimono Gold.png' },
  { name: 'Kimono Ice',        path: 'assets/dress/Kimono Ice.png' },
  { name: 'Kimono Orange',     path: 'assets/dress/Kimono Orange.png' },
  { name: 'Kimono Pink',       path: 'assets/dress/Kimono Pink.png' },
  { name: 'Kimono Red',        path: 'assets/dress/Kimono Red.png' },
  { name: 'Kimono White',      path: 'assets/dress/Kimono White.png' },

  { name: 'Lab Coat',          path: 'assets/dress/Lab Coat.png' },
  { name: 'LV tshirt',         path: 'assets/dress/LV tshirt.png' },

  { name: 'Pink dress',    path: 'assets/dress/Pink dress (1).png' },

  { name: 'Puffer Blue',       path: 'assets/dress/Puffer Blue.png' },
  { name: 'Puffer green',      path: 'assets/dress/Puffer green.png' },
  { name: 'Puffer orange',     path: 'assets/dress/Puffer orange.png' },

  { name: 'Shiba color body',  path: 'assets/dress/Shiba color body.png' },

  { name: 'Suit with blue tie', path: 'assets/dress/Suit with blue tie.png' },
  { name: 'Suit with red tie',  path: 'assets/dress/Suit with red tie.png' },

  { name: 'Tank Top Blue',      path: 'assets/dress/Tank Top Blue.png' },
  { name: 'Tank Top Yellow',    path: 'assets/dress/Tank Top Yellow.png' },

  { name: 'HODL', path: 'assets/dress/HODL.png' },

  { name: 'Turtleneck Blue',    path: 'assets/dress/Turtleneck Blue.png' },
  { name: 'Turtleneck Green',   path: 'assets/dress/Turtleneck Green.png' },
  { name: 'Turtleneck Grey',    path: 'assets/dress/Turtleneck Grey.png' },
  { name: 'Turtleneck Pink',    path: 'assets/dress/Turtleneck Pink.png' },

  { name: 'Bath Robe', path: 'assets/dress/Versace red bath robe.png' },

  { name: 'White dress',        path: 'assets/dress/White dress.png' },
],

eyes: [
  { name: 'Aviator glasses',    path: 'assets/eyes/Aviator glasses.png' },
  { name: 'Blushing',           path: 'assets/eyes/Blushing.png' },
  { name: 'Cartier glasses',    path: 'assets/eyes/Cartier glasses.png' },
  { name: 'Circle Glasses',     path: 'assets/eyes/Circle Glasses.png' },
  { name: 'Clout Goggles',      path: 'assets/eyes/Clout Goggles.png' },
  { name: 'Cross Eye',          path: 'assets/eyes/Cross Eye.png' },
  { name: 'Cucumbers on eyes',  path: 'assets/eyes/Cucumbers on eyes.png' },
  { name: 'Cyclops',            path: 'assets/eyes/Cyclops.png' },
  { name: 'Dior Eye patches',   path: 'assets/eyes/Dior Eye patches.png' },
  { name: 'Eyepatch',           path: 'assets/eyes/Eyepatch.png' },
  { name: 'Goggles',            path: 'assets/eyes/Goggles.png' },

  { name: 'Hero Mask Blue',     path: 'assets/eyes/Hero Mask Blue.png' },
  { name: 'Hero Mask Pink',     path: 'assets/eyes/Hero Mask Pink.png' },
  { name: 'Hero Mask Red',      path: 'assets/eyes/Hero Mask Red.png' },

  { name: 'MOG glasses',        path: 'assets/eyes/MOG glasses.png' },
  { name: 'Monocle',            path: 'assets/eyes/Monocle.png' },

  { name: 'Red Laser eyes',     path: 'assets/eyes/Red Laser eyes.png' },
  { name: 'Scar',               path: 'assets/eyes/Scar.png' },
  { name: 'Shocked eyes',       path: 'assets/eyes/Shocked eyes.png' },

  { name: 'Star Glasses',       path: 'assets/eyes/Star Glasses.png' },
  { name: 'Star Struck',        path: 'assets/eyes/Star Struck.png' },

  { name: 'Thug glasses',       path: 'assets/eyes/Thug glasses.png' },
  { name: 'Winking',            path: 'assets/eyes/Winking.png' },
],

hairs: [
  { name: 'Afro',                    path: 'assets/hairs/Afro.png' },

  { name: 'Army helmet',             path: 'assets/hairs/Army helmet (camo light brown).png' },

  { name: 'blue cap',                path: 'assets/hairs/blue cap.png' },


  { name: 'Batman mask',             path: 'assets/hairs/Batman mask.png' },

  { name: 'Black Biker Helmet',      path: 'assets/hairs/Black Biker Helmet.png' },

  { name: 'Bucket Hat Blue',         path: 'assets/hairs/Bucket Hat Blue.png' },
  { name: 'Bucket Hat Tan',          path: 'assets/hairs/Bucket Hat Tan.png' },

  { name: 'Bull horns',              path: 'assets/hairs/Bull horns.png' },

  { name: 'Cowboy Hat',              path: 'assets/hairs/Cowboy Hat.png' },

  { name: 'Crown',                   path: 'assets/hairs/crown.png' },

  { name: 'Devil horns',             path: 'assets/hairs/Devil horns.png' },

  { name: 'Durag Black',             path: 'assets/hairs/Durag Black.png' },
  { name: 'Durag Orange',            path: 'assets/hairs/Durag Orange.png' },
  { name: 'Durag Pink',              path: 'assets/hairs/Durag Pink.png' },

  { name: 'Floki helmet',            path: 'assets/hairs/Floki helmet.png' },

  { name: 'Flower Crown',            path: 'assets/hairs/Flower Crown.png' },

  { name: 'Fluffy hat',              path: 'assets/hairs/Fluffy hat.png' },

  { name: 'Goku hair',               path: 'assets/hairs/Goku hair.png' },
  { name: 'Green cap',                path: 'assets/hairs/green cap.png' },
  { name: 'Grey cap',                path: 'assets/hairs/grey cap.png' },



  { name: 'Golden ears',             path: 'assets/hairs/Golden ears.png' },

  { name: 'Gucci Bucket Hat',        path: 'assets/hairs/Gucci Bucket Hat.png' },

  { name: 'Halo',                    path: 'assets/hairs/Halo.png' },

  { name: 'Hat Blue',                path: 'assets/hairs/Hat Blue.png' },

  { name: 'Hat Prada Black',         path: 'assets/hairs/Hat Prada black.png' },
  { name: 'Hat Red',                 path: 'assets/hairs/Hat Red.png' },

  { name: 'SHIB Headband',       path: 'assets/hairs/Headband with shiba logo.png' },

  { name: 'Ice Crown',               path: 'assets/hairs/Ice Crown.png' },

  { name: 'Jesters Hat',             path: 'assets/hairs/Jesters Hat.png' },

  { name: 'Macaron',                 path: 'assets/hairs/Macaroni.png' },

  { name: 'Mohawk Green',            path: 'assets/hairs/Mohawk Green.png' },
  { name: 'Mohawk Purple',           path: 'assets/hairs/Mohawk Purple.png' },

  { name: 'Ninja Headband',          path: 'assets/hairs/Ninja Headband.png' },
  { name: 'Orange cap',                path: 'assets/hairs/orange cap.png' },


  { name: 'Panda Hat',               path: 'assets/hairs/Panda Hat.png' },

  { name: 'Party Hat',               path: 'assets/hairs/Party Hat.png' },

  { name: 'Pink Biker Helmet',       path: 'assets/hairs/Pink Biker Helmet with cat ears.png' },
  { name: 'Pink cap',                path: 'assets/hairs/pink cap.png' },


  { name: 'Pink Flower',             path: 'assets/hairs/Pink Flower.png' },

  { name: 'Pirate Hat',              path: 'assets/hairs/Pirate Hat.png' },

  { name: 'Red Rose on ear',         path: 'assets/hairs/Red Rose on ear.png' },

  { name: 'Santa Hat',               path: 'assets/hairs/Santa Hat.png' },

  { name: 'Soviet hat',              path: 'assets/hairs/Soviet hat.png' },

  { name: 'Viking Helmet',           path: 'assets/hairs/Viking Helmet.png' },

  { name: 'Wizard Hat',              path: 'assets/hairs/Wizard Hat.png' },
],

neck: [
  { name: 'Bow Tie Black', path: 'assets/neck/Bow Tie Black.png' },
  { name: 'Bow Tie Blue', path: 'assets/neck/Bow Tie Blue.png' },
  { name: 'Bow Tie Pink', path: 'assets/neck/Bow Tie Pink.png' },
  { name: 'Gold Medal', path: 'assets/neck/Gold Medal.png' },
  { name: 'Goldchain', path: 'assets/neck/hachiko collar goldchain.png' },
  { name: 'Goldchainred', path: 'assets/neck/hachiko collar goldchainred.png' },
  { name: 'Hawaii flowers on neck', path: 'assets/neck/Hawaii flowers on neck.png' },
  { name: 'Scarf Blue', path: 'assets/neck/Scarf Blue.png' },
  { name: 'Scarf Green', path: 'assets/neck/Scarf Green.png' },
  { name: 'Scarf Pink', path: 'assets/neck/Scarf Pink.png' },
  { name: 'Shiba logo necklace', path: 'assets/neck/Shiba logo necklace.png' },
  { name: 'Silver Medal', path: 'assets/neck/Silver Medal.png' },
]

};
// ── Path resolver ───────────────────────────────────────────────────────────
function getTraitPath(category, file) {
  return `assets/${category}/${file}`;
}

// ── Get all traits for a category ──────────────────────────────────────────
function getTraits(category) {
  return TRAITS[category] || [];
}

// ── Get a single trait by id ───────────────────────────────────────────────
function getTraitById(id) {
  for (const cat of Object.keys(TRAITS)) {
    const found = TRAITS[cat].find(t => t.id === id);
    if (found) return { ...found, category: cat };
  }
  return null;
}

// ── Calculate overall rarity from active trait set ─────────────────────────
function calculateRarity(selectedTraits) {
  // selectedTraits: { category: traitId | null }
  const active = Object.values(selectedTraits).filter(Boolean);
  if (active.length === 0) return 'common';

  let totalWeight = 0;
  let count = 0;

  for (const id of active) {
    const trait = getTraitById(id);
    if (trait) {
      totalWeight += RARITY[trait.rarity].weight;
      count++;
    }
  }

  const avg = totalWeight / count;

  if (avg <= 5)  return 'legendary';
  if (avg <= 15) return 'epic';
  if (avg <= 35) return 'rare';
  return 'common';
}

// ── Generate a random trait set ────────────────────────────────────────────
function randomizeTraits() {
  const result = {};
  const categories = Object.keys(TRAITS);

  for (const cat of categories) {
    const arr = TRAITS[cat];
    // 80% chance to include each category (except dress which is always included)
    const include = cat === 'dress' ? true : Math.random() > 0.2;
    if (include && arr.length > 0) {
      result[cat] = arr[Math.floor(Math.random() * arr.length)].id;
    } else {
      result[cat] = null;
    }
  }

  return result;
}

// ── Generate a random token number ────────────────────────────────────────
function generateToken() {
  return '#' + String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0');
}

// ── Rarity score as percentage ────────────────────────────────────────────
function rarityScore(selectedTraits) {
  const active = Object.values(selectedTraits).filter(Boolean);
  if (active.length === 0) return 0;

  const totalPossible = Object.keys(TRAITS).length;
  const rarityMap = { legendary: 100, epic: 70, rare: 40, common: 15 };

  let score = 0;
  for (const id of active) {
    const trait = getTraitById(id);
    if (trait) score += rarityMap[trait.rarity] || 0;
  }
  return Math.min(100, Math.round(score / totalPossible));
}