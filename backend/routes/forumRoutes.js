import express from 'express';
import { body } from 'express-validator';
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  addReply,
} from '../controllers/forumController.js';
import { protect, authorizeRoles } from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getPosts)
  .post(
    protect,
    authorizeRoles('Admin', 'Alumni', 'Student'),
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('content').notEmpty().withMessage('Content is required'),
    ],
    createPost
  );

router
  .route('/:id')
  .get(getPostById)
  .put(
    protect,
    authorizeRoles('Admin', 'Alumni'),
    [body('title').optional().notEmpty()],
    updatePost
  )
  .delete(protect, authorizeRoles('Admin'), deletePost);

router.post(
  '/:id/replies',
  protect,
  authorizeRoles('Admin', 'Alumni', 'Student'),
  [body('message').notEmpty().withMessage('Message is required')],
  addReply
);

export default router;


