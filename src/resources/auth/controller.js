const Joi = require('joi')
const authService = require('./service')
const authHelper = require('./helper')

module.exports = {
  async register (ctx) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required()
    })

    try {
      const request = await schema.validateAsync(ctx.request.body)

      const exist = await authHelper.find({ body: { username: request.username } })

      if (exist) {
        ctx.body = 'Username is already used'
        ctx.status = 403
        return
      }

      const response = await authService.store({ body: request })

      if (response) {
        ctx.body = 'Registration completed!'
      }
    } catch (error) {
      ctx.body = error
    }
  },

  async login (ctx) {
    try {
      const request = ctx.request.body

      const user = await authHelper.find({ body: request })

      if (!user) {
        ctx.body = 'Incorrect username/password'
        ctx.status = 404
        return
      }

      if (user) { 
        const { password, ...others } = user
        ctx.body = others
      }
    } catch (error) {
      ctx.body = error
    }
  }
}
