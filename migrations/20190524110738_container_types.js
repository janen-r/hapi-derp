exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("container_types")) {
    return;
  }

  return knex.schema.createTable("container_types", function (table) {
    table.bigInteger("id").primary();
    table.string("name", 30).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("container_types");
};