import { Router } from 'express'

import average from './average'
import stringManipulation from './stringManipulation'
import sumArray from './sumArray'
import transformArray from './transformArray'
import myCows from './myCows'
import tracking from './tracking'
import arrayScore from './arrayScore'

const router = Router()

router.use('/average', average)
router.use('/strManipulation', stringManipulation)
router.use('/sumArray', sumArray)
router.use('/transformArray', transformArray)
router.use('/myCows', myCows)
router.use('/tracking', tracking)
router.use('/arrayScore', arrayScore)

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
            },
        }
    })
})

export default router