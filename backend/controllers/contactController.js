import asyncHandler from 'express-async-handler';
import ContactMessage from '../models/ContactMessage.js';
import validateRequest from '../utils/validateRequest.js';

const submitContactForm = asyncHandler(async (req, res) => {
  validateRequest(req);

  const contact = await ContactMessage.create(req.body);
  res.status(201).json({ message: 'Message received', contact });
});

const getContactMessages = asyncHandler(async (req, res) => {
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  res.json({ messages });
});

const updateContactStatus = asyncHandler(async (req, res) => {
  validateRequest(req);

  const message = await ContactMessage.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true, runValidators: true }
  );

  if (!message) {
    res.status(404);
    throw new Error('Contact message not found');
  }

  res.json({ message: 'Status updated', contact: message });
});

export { submitContactForm, getContactMessages, updateContactStatus };


