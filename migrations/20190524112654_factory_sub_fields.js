exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("factory_sub_fields")) return;

  return knex.schema.createTable("factory_sub_fields", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("factory_field_id").references("factory_fields.id");
    table.string("name", 30).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("factory_sub_fields");
};