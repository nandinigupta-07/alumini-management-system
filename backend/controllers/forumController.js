import asyncHandler from 'express-async-handler';
import ForumPost from '../models/ForumPost.js';
import validateRequest from '../utils/validateRequest.js';

const createPost = asyncHandler(async (req, res) => {
  validateRequest(req);

  const post = await ForumPost.create({
    ...req.body,
    author: req.user?._id,
    authorName: req.user?.name || req.body.authorName,
  });

  res.status(201).json({ message: 'Post created', post });
});

const getPosts = asyncHandler(async (req, res) => {
  const posts = await ForumPost.find().sort({ createdAt: -1 });
  res.json({ posts });
});

const getPostById = asyncHandler(async (req, res) => {
  const post = await ForumPost.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  res.json({ post });
});

const updatePost = asyncHandler(async (req, res) => {
  validateRequest(req);

  const post = await ForumPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  res.json({ message: 'Post updated', post });
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await ForumPost.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }
  await post.deleteOne();
  res.json({ message: 'Post removed' });
});

const addReply = asyncHandler(async (req, res) => {
  validateRequest(req);

  const post = await ForumPost.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  post.replies.push({
    author: req.user?._id,
    authorName: req.user?.name || req.body.authorName,
    message: req.body.message,
  });

  await post.save();

  res.status(201).json({ message: 'Reply added', post });
});

export { createPost, getPosts, getPostById, updatePost, deletePost, addReply };


