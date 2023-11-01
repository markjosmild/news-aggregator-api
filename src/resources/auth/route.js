const authController = require('./controller')

module.exports = ({ router }) => router
  .prefix('/auth')

  .post('/register', authController.register)

  .post('/login', authController.login)
