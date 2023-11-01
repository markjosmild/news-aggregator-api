const knex = require('../../../knexFile')

module.exports = {
  async find ({ body }) {
    const [id] = await knex('users').where(body)

    return id
  }
}
