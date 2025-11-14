import express from 'express';
import { body } from 'express-validator';
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
  applyForJob,
} from '../controllers/jobController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getJobs)
  .post(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('company').notEmpty().withMessage('Company is required'),
      body('location').notEmpty().withMessage('Location is required'),
      body('description').notEmpty().withMessage('Description is required'),
    ],
    createJob
  );

router
  .route('/:id')
  .get(getJobById)
  .put(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    [
      body('title').optional().notEmpty(),
      body('company').optional().notEmpty(),
    ],
    updateJob
  )
  .delete(protect, authorizeRoles('Admin'), deleteJob);

router.post(
  '/:id/apply',
  protect,
  authorizeRoles('Student', 'Alumni'),
  upload.single('resume'),
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
  ],
  applyForJob
);

export default router;


