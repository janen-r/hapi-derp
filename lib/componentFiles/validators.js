const joi = require('@hapi/joi')

function COMPONENT_NAMEValidators(route) {
  const validators = {
    COMPONENT_NAMELogin: {
      payload: {
        username: joi.string().required(),
        password: joi.string().required()
      }
    }
  }

  if (!validators[route]) throw new Error('Invalid route passed to validator')

  return validators[route]
}

module.exports = COMPONENT_NAMEValidators