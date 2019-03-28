exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex('dishes').insert([
    { name: 'pizza' },
    { name: 'pizza blue' },
    { name: 'pizza red' }
  ]);
};
