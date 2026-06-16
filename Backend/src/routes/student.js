import { Router } from 'express'
import { requireStudentAuth } from '../middleware/auth.js'

import {
  registerStudent, loginStudent, logout, getStudentMe, 
  forgotPassword, verifyOtp, resetPassword 
} from '../controllers/studentController.js'

export const studentRouter = Router()

// --- Student Controller Routes ---
studentRouter.post('/register', registerStudent)
studentRouter.post('/login', loginStudent)
studentRouter.post('/logout', logout)
studentRouter.get('/me', requireStudentAuth, getStudentMe)

studentRouter.post('/forgot', forgotPassword)
studentRouter.post('/verify-otp', verifyOtp)
studentRouter.post('/reset-password', resetPassword)