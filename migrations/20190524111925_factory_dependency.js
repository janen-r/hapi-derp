exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("factory_dependencies")) return;

  return knex.schema.createTable("factory_dependencies", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("tag_id", 36).references("tags.id");
    table.string("title", 30).notNullable();
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("factory_dependencies");
};