const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
require('dotenv/config')

const PORT = process.env.SERVER_PORT || 3001

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Pawsome Friend API',
      version: '1.0.0',
      description: 'API documentation for the Pawsome Friend'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['openapi.yaml']
}

const specs = swaggerJsdoc(options)
module.exports = { swaggerUi, specs }
