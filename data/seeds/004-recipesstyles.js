exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('recipe_styles').insert([
    { name: 'cheese', dish_id: '1', recipe_id: '1' },
    { name: 'pepperoni', dish_id: '2', recipe_id: '2' },
    { name: 'anchovies', dish_id: '2', recipe_id: '3' },
    { name: 'florentine', dish_id: '3', recipe_id: '3' },
    { name: 'Italian', dish_id: '3', recipe_id: '3' },
    { name: 'salmon', dish_id: '3', recipe_id: '3' },
    { name: 'tuna', dish_id: '3', recipe_id: '5' }
  ]);
};
