exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("code_generations")) return;

  return knex.schema.createTable("code_generations", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("deal_id").references("deals.id");
    table.string("code", 30).notNullable();
    table
      .integer("status")
      .defaultTo(1)
      .comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("code_generations");
};