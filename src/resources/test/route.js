const testController = require('./controller')

module.exports = ({ router }) => router
  .prefix('/test')

  .get('/te', testController.test)
