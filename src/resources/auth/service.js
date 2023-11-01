const knex = require('../../../knexFile')

module.exports = {
  async store ({ body }) {
    const [id] = await knex('users').insert(body)

    return id
  }
}
