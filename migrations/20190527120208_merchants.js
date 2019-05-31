exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("merchants")) return;

  return knex.schema.createTable("merchants", function (table) {
    table.bigInteger("id").primary();
    table.string("name").notNullable();
    table.string("website").notNullable();
    table.string("logo").notNullable();
    table.string("email").notNullable();
    table.bigInteger("created_by").references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("merchant");
};