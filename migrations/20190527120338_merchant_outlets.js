exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("merchant_outlets")) return;

  return knex.schema.createTable("merchant_outlets", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("merchant_id", 36).references("merchants.id");
    table.string("name", 255).notNullable();
    table.string("address", 50);
    table.string("phone", 50);
    table.decimal("latitude", 10, 8).notNullable();
    table.decimal("longitude", 10, 8).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("merchant_outlets");
};