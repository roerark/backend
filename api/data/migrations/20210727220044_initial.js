
exports.up = function(knex) {
  return knex.schema
  .createTable('locations', tbl => {
      tbl.increments('location_id')
      tbl.string('location_name').notNullable().unique()
  })
  .createTable('users', tbl => {
    tbl.increments('user_id')
    tbl.string('username').notNullable().unique()
    tbl.string('password').notNullable()
    tbl.integer('location_id')
        .unsigned()
        .notNullable()
        .references('location_id')
        .inTable('locations')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
  .dropTableIfExists('locations')
};
