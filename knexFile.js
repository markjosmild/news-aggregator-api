require('dotenv').config()

module.exports = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'Defaultpw',
    database: 'news_aggregator'
  }
})
