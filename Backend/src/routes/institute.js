import { Router } from 'express'
import { requireStudentAuth } from '../middleware/auth.js'

import { 
  registerInstitute, loginInstitute, getInstituteNameByCode
} from '../controllers/instituteController.js'

export const instituteRouter = Router()

// --- Institute Controller Routes ---
instituteRouter.post('/register/institute', registerInstitute)
instituteRouter.post('/institute/login', loginInstitute)
instituteRouter.get('/institute/info/:code', requireStudentAuth, getInstituteNameByCode)