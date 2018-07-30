exports.up = function up(knex) {
  const create = table => {
    table.increments();
    table.integer('bookmark_type'); // .references('id').inTable('bookmark_types');
    table.integer('user_id'); // .references('id').inTable('users');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  };

  return knex.schema.createTable('bookmarks', create);

};

exports.down = function down(knex) {
  return knex.schema.dropTable('bookmarks');
};