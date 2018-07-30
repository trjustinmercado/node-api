exports.up = function up(knex) {
  const create = table => {
    table.increments();
    table.string('label').notNullable();
    table.string('description');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  };

  return knex.schema.createTable('user_types', create);

};

exports.down = function down(knex) {
  return knex.schema.dropTable('user_types');
};