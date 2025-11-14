import express from 'express';
import { body } from 'express-validator';
import {
  submitContactForm,
  getContactMessages,
  updateContactStatus,
} from '../controllers/contactController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('subject').notEmpty().withMessage('Subject is required'),
    body('message').notEmpty().withMessage('Message is required'),
  ],
  submitContactForm
);

router.get('/', protect, authorizeRoles('Admin'), getContactMessages);

router.patch(
  '/:id/status',
  protect,
  authorizeRoles('Admin'),
  [body('status').isIn(['New', 'In Progress', 'Resolved']).withMessage('Invalid status')],
  updateContactStatus
);

export default router;


