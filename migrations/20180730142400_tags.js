exports.up = function up(knex) {
  const create = table => {
    table.increments();
    table.string('label').notNullable();
    table.integer('user_id'); // .references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  };

  return knex.schema.createTable('tags', create);

};

exports.down = function down(knex) {
  return knex.schema.dropTable('tags');
};