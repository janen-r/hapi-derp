exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("deal_types")) return;

  return knex.schema.createTable("deal_types", function (table) {
    table.bigInteger("id").primary();
    table.string("name", 20).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("deal_types");
};