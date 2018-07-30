exports.up = function up(knex) {
  const create = table => {
    table.increments();
    table.string('email_address').notNullable();
    table.string('password').notNullable();
    table.integer('user_type'); // .references('id').inTable('user_types');
    table.integer('user_status'); // .references('id').inTable('status');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  };

  return knex.schema.createTable('users', create);

};

exports.down = function down(knex) {
  return knex.schema.dropTable('users');
};