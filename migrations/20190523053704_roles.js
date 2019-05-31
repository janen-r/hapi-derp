exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("roles")) {
    return;
  }

  return knex.schema.createTable("roles", function (table) {
    table.bigInteger("id").primary();
    table.string("role_name", 20).notNullable();
    table.string("description", 255);
    table.bigInteger("created_by", 36).references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};