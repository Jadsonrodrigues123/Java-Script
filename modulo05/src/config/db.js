const { Pool }  = require('pg');

module.exports = new Pool({
  user: 'posgres',
  password: 'super',
  host: 'localhost',
  port: '5432',
  database: 'gymmanager'
})