import { Router } from 'express'

import average from './average'
import stringManipulation from './stringManipulation'
import sumArray from './sumArray'

const router = Router()

router.use('/average', average)
router.use('/strManipulation', stringManipulation)
router.use('/sumArray', sumArray)

export default router