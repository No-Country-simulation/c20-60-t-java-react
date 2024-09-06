import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

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
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['openapi.yaml']
}

const specs = swaggerJsdoc(options)
export { swaggerUi, specs }
