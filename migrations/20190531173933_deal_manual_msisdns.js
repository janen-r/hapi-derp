exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("deal_manual_msisdns")) return;

  return knex.schema.createTable("deal_manual_msisdns", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("deal_id").references("deals.id");
    table.string("msisdn", 20).notNullable();
    table
      .integer("status")
      .defaultTo(1)
      .comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("deal_manual_msisdns");
};