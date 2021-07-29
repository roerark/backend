exports.up = function (knex) {
  return knex.schema
    .createTable("locations", (tbl) => {
      tbl.increments("location_id");
      tbl.string("location_name").notNullable().unique();
    })
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl
        .integer("location_id")
        .unsigned()
        .notNullable()
        .references("location_id")
        .inTable("locations")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    })
    .createTable("items", (item) => {
      item.increments('item_id');
      item.string("name", 128).notNullable();

      item.string("description", 1500);

      item.string("photo_url", 3000);

      item.float("price").notNullable();

      item
        .integer("user_id")
        .notNullable()
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
        item
        .integer("location_id")
        .notNullable()
        .unsigned()
        .references("location_id")
        .inTable("locations")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("locations");
};
