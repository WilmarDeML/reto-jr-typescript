import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from './routes/index.js'
import redirect from './routes/redirect.js'
import swaggerDocs from './swagger.js'
import { PORT } from './config.js'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
swaggerDocs(app, PORT)
app.use('/challenge', routes)
app.use('*', redirect)

app.use((error, req, res, next) => {
  console.error(error)
  const statusCode = error.statusCode
  return res.status(statusCode ?? 500).send({ message: 'Ha ocurrido un error en este método', error: error.message })
})

export default app
