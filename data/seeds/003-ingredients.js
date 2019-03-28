exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name: 'Dash onion powder' },
    { name: 'Cup of Mozzarella Chese' },
    { name: 'Gram Pizza Dough' },
    { name: 'Gram of granny sause' },
    { name: '1/2 cup of avacado' },
    { name: '1/2 gram of peas' }
  ]);
};
