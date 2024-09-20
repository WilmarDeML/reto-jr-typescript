import server from './src/app.js'
import { PORT } from './src/config.js'

server.listen(PORT, function () {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
