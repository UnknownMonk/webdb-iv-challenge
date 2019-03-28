exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishs', function(tbl) {
      // primary key, called id and make it auto-increment
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();

      // tbl.unique('name');
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 128);
      tbl.text('directions').notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl.decimal('quantity').notNullable();
    })
    .createTable('recipestyles', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('recipe-ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 255)
        .notNullable()
        .unique();
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists('recipe-ingredients')
    .dropTableIfExists('recipestyles')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishs');
};
