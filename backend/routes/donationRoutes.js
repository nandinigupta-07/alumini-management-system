import express from 'express';
import { body } from 'express-validator';
import {
  createDonation,
  getDonations,
  getDonationById,
  updateDonation,
  deleteDonation,
} from '../controllers/donationController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(protect, authorizeRoles('Admin'), getDonations)
  .post(
    protect,
    authorizeRoles('Admin'),
    [
      body('donorName').notEmpty().withMessage('Donor name is required'),
      body('amount').isNumeric().withMessage('Amount must be a number'),
      body('purpose').notEmpty().withMessage('Purpose is required'),
      body('date').optional().isISO8601().toDate(),
    ],
    createDonation
  );

router
  .route('/:id')
  .get(protect, authorizeRoles('Admin'), getDonationById)
  .put(
    protect,
    authorizeRoles('Admin'),
    [
      body('donorName').optional().notEmpty(),
      body('amount').optional().isNumeric(),
      body('date').optional().isISO8601().toDate(),
    ],
    updateDonation
  )
  .delete(protect, authorizeRoles('Admin'), deleteDonation);

export default router;


