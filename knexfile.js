// Update with your config settings.
require('dotenv').config();

const database = process.env.DATABASE_DATABASE;
const host = process.env.DATABASE_HOST;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;
const client = process.env.DATABASE_CLIENT;
const pool = {
  min: 2,
  max: 10
};

module.exports = {

  development: {
    client,
    connection: {
      host,
      port,
      database,
      user,
      password,
    },
    pool,
    migrations: {
      tableName: 'knexMigrations',
    }
  },

};
