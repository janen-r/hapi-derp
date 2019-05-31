exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("role_access")) return;

  return knex.schema.createTable("role_access", function (table) {
    table.bigInteger("id").primary();
    table.bigInteger("role_section_id", 36).references("role_sections.id");
    table.bigInteger("role_id", 36).references("roles.id");
    table.boolean("view").defaultTo(0);
    table.boolean("edit").defaultTo(0);
    table.boolean("create").defaultTo(0);
    table.boolean("approve").defaultTo(0);
    table.integer("status").comment("1 - active, 2 - inactive , 3 - deleted");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("role_access");
};