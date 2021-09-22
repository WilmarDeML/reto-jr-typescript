import { Router } from 'express'

import average from './average'
import stringManipulation from './stringManipulation'
import sumArray from './sumArray'
import transformArray from './transformArray'
import myCows from './myCows'
import tracking from './tracking'

const router = Router()

router.use('/average', average)
router.use('/strManipulation', stringManipulation)
router.use('/sumArray', sumArray)
router.use('/transformArray', transformArray)
router.use('/myCows', myCows)
router.use('/tracking', tracking)

export default router