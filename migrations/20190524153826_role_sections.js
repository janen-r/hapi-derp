exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("role_sections")) return;

  return knex.schema.createTable("role_sections", function (table) {
    table.bigInteger("id").primary();
    table.string("name", 20).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("role_sections");
};