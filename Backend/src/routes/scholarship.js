import { Router } from 'express'
import { requireStudentAuth, requireInstituteAuth, requireOfficerAuth } from '../middleware/auth.js'

import { 
  getStudentApplications, createScholarshipApplication, getInstituteApplications, 
  decideInstituteScholarship, getOfficerScholarshipApplications, getMinistryScholarshipApplications, 
  decideOfficerScholarship, getScholarshipStatus 
} from '../controllers/scholarshipController.js'

export const scholarshipRouter = Router()

// --- Scholarship Controller Routes ---
scholarshipRouter.get('/student/applications', requireStudentAuth, getStudentApplications)
scholarshipRouter.post('/scholarship', requireStudentAuth, createScholarshipApplication)
scholarshipRouter.get('/institute/applications', requireInstituteAuth, getInstituteApplications)
scholarshipRouter.post('/institute/applications/:id/decision', requireInstituteAuth, decideInstituteScholarship)
scholarshipRouter.get('/officer/scholarship-applications', requireOfficerAuth, getOfficerScholarshipApplications)
scholarshipRouter.get('/officer/ministry/scholarship-applications', requireOfficerAuth, getMinistryScholarshipApplications)
scholarshipRouter.post('/officer/scholarship/:id/decision', requireOfficerAuth, decideOfficerScholarship)
scholarshipRouter.get('/scholarship/status/:appId', getScholarshipStatus)