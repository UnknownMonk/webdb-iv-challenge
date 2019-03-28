exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('recipe_ingredients').insert([
    { quantity: '2.5', ingredient_id: '4', recipe_id: '3' },
    { quantity: '5', ingredient_id: '3', recipe_id: '6' },
    { quantity: '2.3', ingredient_id: '5', recipe_id: '4' },
    { quantity: '6.3', ingredient_id: '4', recipe_id: '4' },
    { quantity: '5.3', ingredient_id: '6', recipe_id: '6' },
    { quantity: '7.3', ingredient_id: '3', recipe_id: '5' },
    { quantity: '9.3', ingredient_id: '4', recipe_id: '5' }
  ]);
};
