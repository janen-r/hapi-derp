const {
  Model
} = require('../../../config')

class COMPONENT_NAME extends Model {
  static get tableName() {
    return 'COMPONENT_NAME'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email'],

      properties: {
        user_id: {
          type: 'string'
        },
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        email: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        password: {
          type: 'string'
        },
        created_at: {
          type: 'date'
        },
        updated_at: {
          type: 'date'
        }
      }
    }
  }
}

module.exports = COMPONENT_NAME