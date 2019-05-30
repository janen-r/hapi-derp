const {
  handlers,
  helpers
} = require('./COMPONENT_NAME.controller')
const validator = require('./COMPONENT_NAME.validators')

const routes = [
  /* GET - /user */
  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      description: "Open route which doesn't require authentication",
      notes: 'Returns a test response',
      tags: ['api']
    },
    handler: handlers.open
  },
  /* GET - /user/getToken - Get a token to test JWT */
  {
    method: 'POST',
    path: '/login',
    config: {
      auth: false,
      description: 'A login route which generates a JWT token',
      notes: 'Returns data along with a JWT token',
      tags: ['api'],
      validate: validator('userLogin')
    },
    handler: handlers.login
  },
  /* GET - /user/protected - protected route */
  {
    method: 'GET',
    path: '/protected',
    config: {
      auth: 'jwt',
      description: 'A protected route',
      notes: 'Returns a test response',
      tags: ['api']
    },

    handler: handlers.protected
  }
]

module.exports = {
  plugin: {
    register(server) {
      server.dependency('hapi-auth-jwt2')
      server.dependency('hapi-swagger')
      server.route(routes)
    },
    name: 'COMPONENT_NAME-routes'
  },
  routes: {
    prefix: '/COMPONENT_NAME'
  }
}