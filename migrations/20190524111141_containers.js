exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("containers")) {
    return;
  }

  return knex.schema.createTable("containers", function (table) {
    table.bigInteger("id", 36).primary();
    table.bigInteger("container_type_id").references("container_types.id");
    table.string("name", 30).notNullable();
    table.bigInteger("created_by").references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.integer("status").comment("1 - active, 2 - inactive, 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("containers");
};