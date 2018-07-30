exports.up = function up(knex) {
  const create = table => {
    table.increments();
    table.integer('bookmark_id'); // .references('id').inTable('bookmarks');
    table.string('content').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  };

  return knex.schema.createTable('tag_bookmark', create);

};

exports.down = function down(knex) {
  return knex.schema.dropTable('tag_bookmark');
};