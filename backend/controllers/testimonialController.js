import asyncHandler from 'express-async-handler';
import Testimonial from '../models/Testimonial.js';
import validateRequest from '../utils/validateRequest.js';

const createTestimonial = asyncHandler(async (req, res) => {
  validateRequest(req);

  const data = {
    ...req.body,
    user: req.user?._id,
  };

  if (req.file) {
    data.image = `/uploads/${req.file.filename}`;
  }

  const testimonial = await Testimonial.create(data);
  res.status(201).json({ message: 'Testimonial created', testimonial });
});

const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find().sort({ createdAt: -1 });
  res.json({ testimonials });
});

const getTestimonialById = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }
  res.json({ testimonial });
});

const updateTestimonial = asyncHandler(async (req, res) => {
  validateRequest(req);

  const updates = { ...req.body };
  if (req.file) {
    updates.image = `/uploads/${req.file.filename}`;
  }

  const testimonial = await Testimonial.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }

  res.json({ message: 'Testimonial updated', testimonial });
});

const deleteTestimonial = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial) {
    res.status(404);
    throw new Error('Testimonial not found');
  }
  await testimonial.deleteOne();
  res.json({ message: 'Testimonial removed' });
});

export {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
};


