import { Router } from 'express'

import average from './average.js'
import stringManipulation from './stringManipulation.js'
import sumArray from './sumArray.js'
import sumArrayBody from './sumArrayBody.js'
import transformArray from './transformArray.js'
import { myCowsPost, myCowsGet } from './myCows.js'
import tracking from './tracking.js'
import arrayScore from './arrayScore.js'

const router = Router()

router.get('/average', average)
router.get('/strManipulation', stringManipulation)
router.get('/sumArray', sumArray)
router.post('/sumArrayBody', sumArrayBody)
router.post('/transformArray', transformArray)
router.post('/myCows', myCowsPost)
router.get('/myCows', myCowsGet)
router.get('/tracking/:codigo', tracking)
router.get('/arrayScore', arrayScore)

router.get('/', (req, res) => {
  res.send({
    mensajes: {
      bienvenida: 'Hola Mundo router principal del reto coordinadora jr!!!',
      creador: {
        nombreMain: 'Wilmar De MelquisedecLisbet',
        nombre: 'Wilmar Arley Zapata Villa',
        mail: 'carewaz23@hotmail.com',
        cel: '+57 3194859791',
        linkedin: 'https://www.linkedin.com/in/wilmardeml-dev/',
        github: 'https://github.com/WilmarDeML'
      }
    }
  })
})

export default router
