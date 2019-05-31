exports.up = async function (knex, Promise) {
  if (await knex.schema.hasTable("deals")) return;

  return knex.schema.createTable("deals", function (table) {
    table.bigInteger("id").primary();
    table.string("title", 30).notNullable();
    table.bigInteger("deal_type_id").references("deal_types.id");
    table.bigInteger("deal_category_id").references("deal_categories.id");
    table.bigInteger("merchant_id").references("merchants.id");
    table.bigInteger("merchant_outlet_id").references("merchant_outlets.id");
    table.bigInteger("tag_id").references("tags.id");
    table.string("cta_button_text", 55).notNullable();
    table.datetime("promotion_start_at").notNullable();
    table.datetime("promotion_end_at").notNullable();
    table.string("image", 255).notNullable();
    table
      .integer("container_expiry_type")
      .defaultTo(4)
      .comment(
        "1 - on time of promotion, 2 -2 days of after promotion start, 3 - custom date & time, 4 - null"
      );
    table.datetime("container_expiry_at");
    table.string("container_timer_image", 255);
    table
      .integer("arrival_element")
      .defaultTo(3)
      .comment("");
    table.string("push_notification_message", 255);
    table
      .integer("push_notification_condition")
      .defaultTo(4)
      .comment("");
    table.string("push_notification_location");
    table
      .integer("voucher_type")
      .defaultTo(1)
      .comment("1 - Single-Use, 2 - Multi-Use ");
    table
      .integer("voucher_expiry_type")
      .defaultTo(1)
      .comment(
        "1 - when promotion end, 2 - 2 days after promotion start, 3 - custom time"
      );
    table.integer("voucher_expiry_time", 10).comment("For custome time");
    table.integer("grab_limit", 20);
    table.integer("reedem_limit", 20);
    table
      .integer("targeting_option")
      .defaultTo(1)
      .comment("1 - Everyone, 2 - selected users, 3 - special rule");
    table.integer("approve_status").comment("0 - pending ,1 - approved, 2 - rejected");
    table
      .integer("status")
      .defaultTo(0)
      .comment("0 - draft, 1 - active, 2 - inactive , 3 - deleted");
    table.bigInteger("created_by").references("users.id");
    table.bigInteger("updated_by").references("users.id");
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("deals");
};