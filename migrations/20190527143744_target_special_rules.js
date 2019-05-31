exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("target_special_rules")) return;

  return knex.schema.createTable("target_special_rules", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("deal_id").references("deals.id");
    table
      .integer("target_type")
      .notNullable()
      .comment("");
    table.integer("no_of_users", 20);
    table.integer("day_type").comment("1 - week, 2 - month, 3 - day");
    table.integer("value").notNullable();
    table.integer("amount");
    table.integer("points");
    table
      .integer("status")
      .defaultTo(1)
      .comment("");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("target_special_rules");
};