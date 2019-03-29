const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  addDish,
  getDish
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => {
      return findById(ids[0]);
    });
}
function getDish(id) {
  return db('dishes')
    .innerJoin('recipe_styles', 'dishes.id', '=', 'recipe_styles.id')
    .innerJoin('recipes', 'recipe_styles.id', '=', 'recipes.id')
    .select('recipes.name')
    .where({ 'recipe_styles.dish_id': id })
    .then(recipes => {
      return db('dishes')
        .where({ id })
        .first()
        .then(dish => {
          return { ...dish, recipes };
        });
    });
}
