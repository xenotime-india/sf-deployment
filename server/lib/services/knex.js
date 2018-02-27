import pg from 'pg';
import config from 'config';
let databaseUrl = config.DATABASE_URL;
pg.defaults.ssl = databaseUrl.indexOf('127.0.0.1') < 0;

export default require('knex')({
  client: 'pg',
  connection: databaseUrl,
  searchPath: 'public'
});