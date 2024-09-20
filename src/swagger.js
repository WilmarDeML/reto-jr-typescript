import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { PORT } from './config.js'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Reto Coordinador Jr',
      description: 'API endpoints para el reto coordinadora, tracking y otros documentado en swagger',
      contact: {
        name: 'Wilmar De MelquisedecLisbet',
        email: 'carewaz23@hotmail.com',
        url: 'https://github.com/WilmarDeML'
      },
      license: {
        name: 'MIT',
        url: 'https://github.com/DesmondSanctity/node-js-swagger'
      },
      version: '1.0.0'
    },
    servers: [
      {
        url: `http://localhost:${PORT}/`,
        description: 'Local server'
      }
    ]
  },
  // looks for configuration in specified directories
  apis: ['./src/routes/*.js']
}
const swaggerSpec = swaggerJsdoc(options)
function swaggerDocs (app, port) {
  // Swagger Page
  app.use('/challenge/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // Documentation in JSON format
  app.get('/challenge/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
export default swaggerDocs
