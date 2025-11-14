import express from 'express';
import { body } from 'express-validator';
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getEvents)
  .post(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('description').notEmpty().withMessage('Description is required'),
      body('date').notEmpty().withMessage('Date is required').bail().isISO8601().toDate(),
      body('venue').notEmpty().withMessage('Venue is required'),
      body('organizer').notEmpty().withMessage('Organizer is required'),
    ],
    createEvent
  );

router
  .route('/:id')
  .get(getEventById)
  .put(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    [
      body('title').optional().notEmpty(),
      body('description').optional().notEmpty(),
      body('date').optional().isISO8601().toDate(),
    ],
    updateEvent
  )
  .delete(protect, authorizeRoles('Admin'), deleteEvent);

export default router;


