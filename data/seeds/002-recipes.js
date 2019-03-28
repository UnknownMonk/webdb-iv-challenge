exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex('recipes').insert([
    { name: 'Cheese', directions: 'Order in!' },
    { name: 'Cream', directions: 'Order in!' },
    { name: 'Crap', directions: 'Order in!' },
    { name: 'Spicy Meat Ball', directions: 'Order in!' },
    { name: ' Meat Ball', directions: 'Order in!' },
    { name: 'Spaghetti', directions: 'Order in!' },
    { name: 'Chix marsala', directions: 'Order in!' },
    { name: 'Gree eggs and hame', directions: 'Order in!' }
  ]);
};
