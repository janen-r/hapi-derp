exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("users")) {
    return;
  }

  return knex.schema.createTable("users", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("role_id").references("roles.id");
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255);
    table
      .string("status", 36)
      .comment("1 - active, 2 - inactive , 3 - deleted");
    table.bigInteger("created_by").references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};