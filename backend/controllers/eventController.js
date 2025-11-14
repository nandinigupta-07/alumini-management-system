import asyncHandler from 'express-async-handler';
import Event from '../models/Event.js';
import validateRequest from '../utils/validateRequest.js';

const createEvent = asyncHandler(async (req, res) => {
  validateRequest(req);

  const event = await Event.create({
    ...req.body,
    createdBy: req.user?._id,
  });

  res.status(201).json({ message: 'Event created', event });
});

const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json({ events });
});

const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }
  res.json({ event });
});

const updateEvent = asyncHandler(async (req, res) => {
  validateRequest(req);

  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }

  res.json({ message: 'Event updated', event });
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    res.status(404);
    throw new Error('Event not found');
  }
  await event.deleteOne();
  res.json({ message: 'Event removed' });
});

export { createEvent, getEvents, getEventById, updateEvent, deleteEvent };


