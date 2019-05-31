exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("tags")) return;

  return knex.schema.createTable("tags", function (table) {
    table.bigInteger("id").primary();
    table.string("name", 30).notNullable();
    table.string("icon", 255).notNullable();
    table.bigInteger("created_by").references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("tags");
};