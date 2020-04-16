const IngredientDB = [
  {
    id: 1,
    name: 'Apples',
    volume: 'Quiet-Moderate',
    weight: 'Medium',
    matches: [ 'Bacon', 'Chicken', 'Cheese' ],
    avoids: [ 'Nuts', 'Green God Kush' ],
    flavour: [ 'Sweet', 'Astirgent' ],
    techniques: [ 'Bake', 'Caramelize', 'Deep-fry', 'Grill', 'Raw', 'Saute', 'Stew' ],
  },
  {
    id: 2,
    name: 'Apricots',
    volume: 'Moderate',
    weight: 'Medium',
    matches: [ 'Almonds', 'Apples', 'Brandy' ],
    avoids: [ 'Memes', 'Stuff' ],
    flavour: [ 'Sweet' ],
    techniques: [ 'bake', 'grill', 'poach', 'raw', 'stew' ],
  },
  {
    id: 3,
    name: 'Artichokes',
    volume: 'Moderate',
    weight: 'Medium',
    matches: [ 'Celery', 'Chives', 'Butter' ],
    avoids: [ 'Yams', 'Cream Of TarTar' ],
    techniques: [ 'bake', 'blanche', 'cream', 'fry', 'roast', 'saute' ],
  },
  {
    id: 4,
    name: 'Arugula',
    volume: 'moderate-loud',
    weight: 'light-medium',
    matches: [ 'almonds', 'chicken', 'cilantro' ],
    avoids: [ 'Corona' ],
    techniques: [ 'braise', 'raw', 'saute', 'wilt' ],
  },
  {
    id: 5,
    name: 'Asparagus',
    volume: 'Moderate',
    weight: 'light-medium',
    matches: [ 'almonds', 'anchovies', ' beets' ],
    avoids: [ ' kimchi' ],
    techniques: [ 'blanche', 'boil', 'deepfry', 'grill', ' simmer', 'steam ' ],
  },

  {
    id: 6,
    name: 'Avocados',
    volume: 'Moderate',
    weight: 'medium-heavy',
    matches: [ 'arugula', 'bacon', 'basil', 'beans' ],
    avoids: [ 'kimchi' ],
    techniques: [ 'raw' ],
  },
];

export default IngredientDB;