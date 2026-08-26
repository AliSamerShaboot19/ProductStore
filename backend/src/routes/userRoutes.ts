import { Router } from 'express'
import * as userController from '../controllers/userController'
import { requireAuth } from '@clerk/express'
const router = Router()

// api/users/sync - POST => sync the clerk user to database

router.post('/sync', requireAuth(), userController.syncUser)
export default router
