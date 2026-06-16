import { Router } from 'express'
import { requireOfficerAuth } from '../middleware/auth.js'

import { 
  loginOfficer, getOfficerInstituteApplications, forwardInstitute, 
  decideInstitute, getMinistryInstituteApplications 
} from '../controllers/officerController.js'

export const officerRouter = Router()

// --- Officer Controller Routes ---
officerRouter.post('/officer/login', loginOfficer)
officerRouter.get('/officer/institute-applications', requireOfficerAuth, getOfficerInstituteApplications)
officerRouter.post('/officer/institute/:id/forward', requireOfficerAuth, forwardInstitute)
officerRouter.post('/officer/institute/:id/decision', requireOfficerAuth, decideInstitute)
officerRouter.get('/officer/ministry/institute-applications', requireOfficerAuth, getMinistryInstituteApplications)