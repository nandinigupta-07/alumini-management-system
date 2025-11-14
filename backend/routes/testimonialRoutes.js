import express from 'express';
import { body } from 'express-validator';
import {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getTestimonials)
  .post(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    upload.single('image'),
    [
      body('alumniName').notEmpty().withMessage('Alumni name is required'),
      body('message').notEmpty().withMessage('Message is required'),
    ],
    createTestimonial
  );

router
  .route('/:id')
  .get(getTestimonialById)
  .put(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    upload.single('image'),
    [body('message').optional().notEmpty()],
    updateTestimonial
  )
  .delete(protect, authorizeRoles('Admin'), deleteTestimonial);

export default router;


