import express from 'express';
import { body } from 'express-validator';
import {
  createAlumni,
  getAlumniList,
  getAlumniById,
  updateAlumni,
  deleteAlumni,
} from '../controllers/alumniController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getAlumniList)
  .post(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    upload.single('profileImage'),
    [
      body('name').notEmpty().withMessage('Name is required'),
      body('batch').notEmpty().withMessage('Batch is required'),
      body('course').notEmpty().withMessage('Course is required'),
      body('email').isEmail().withMessage('A valid email is required'),
    ],
    createAlumni
  );

router
  .route('/:id')
  .get(getAlumniById)
  .put(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    upload.single('profileImage'),
    [
      body('name').optional().notEmpty(),
      body('email').optional().isEmail(),
    ],
    updateAlumni
  )
  .delete(protect, authorizeRoles('Admin'), deleteAlumni);

export default router;


