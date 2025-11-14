import express from 'express';
import { body } from 'express-validator';
import {
  createVerificationRequest,
  getVerificationRequests,
  getMyVerificationRequests,
  updateVerificationStatus,
} from '../controllers/verificationController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.post(
  '/',
  protect,
  authorizeRoles('Alumni'),
  upload.single('document'),
  [
    body('fullName').notEmpty().withMessage('Full name is required'),
    body('batch').notEmpty().withMessage('Batch is required'),
  ],
  createVerificationRequest
);

router.get('/', protect, authorizeRoles('Admin'), getVerificationRequests);
router.get('/mine', protect, authorizeRoles('Alumni'), getMyVerificationRequests);

router.patch(
  '/:id/status',
  protect,
  authorizeRoles('Admin'),
  [body('status').isIn(['Pending', 'Approved', 'Rejected']).withMessage('Invalid status')],
  updateVerificationStatus
);

export default router;


