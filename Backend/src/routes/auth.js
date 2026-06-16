import { Router } from 'express'

import { studentRouter } from './student.js'
import { instituteRouter } from './institute.js'
import { officerRouter } from './officer.js'
import { scholarshipRouter } from './scholarship.js'

export const authRouter = Router()

// Mount modularized routers
authRouter.use('/', studentRouter)
authRouter.use('/', instituteRouter)
authRouter.use('/', officerRouter)
authRouter.use('/', scholarshipRouter)
