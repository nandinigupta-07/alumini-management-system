import asyncHandler from 'express-async-handler';
import Alumni from '../models/Alumni.js';
import validateRequest from '../utils/validateRequest.js';

const createAlumni = asyncHandler(async (req, res) => {
  validateRequest(req);

  const data = { ...req.body };
  if (req.file) {
    data.profileImage = `/uploads/${req.file.filename}`;
  }
  if (req.user) {
    data.user = req.user._id;
  }

  const alumni = await Alumni.create(data);
  res.status(201).json({ message: 'Alumni profile created', alumni });
});

const getAlumniList = asyncHandler(async (req, res) => {
  const alumni = await Alumni.find().sort({ createdAt: -1 });
  res.json({ alumni });
});

const getAlumniById = asyncHandler(async (req, res) => {
  const alumni = await Alumni.findById(req.params.id);
  if (!alumni) {
    res.status(404);
    throw new Error('Alumni profile not found');
  }
  res.json({ alumni });
});

const updateAlumni = asyncHandler(async (req, res) => {
  validateRequest(req);

  const updates = { ...req.body };
  if (req.file) {
    updates.profileImage = `/uploads/${req.file.filename}`;
  }

  const alumni = await Alumni.findByIdAndUpdate(req.params.id, updates, {
    new: true,
    runValidators: true,
  });

  if (!alumni) {
    res.status(404);
    throw new Error('Alumni profile not found');
  }

  res.json({ message: 'Alumni profile updated', alumni });
});

const deleteAlumni = asyncHandler(async (req, res) => {
  const alumni = await Alumni.findById(req.params.id);

  if (!alumni) {
    res.status(404);
    throw new Error('Alumni profile not found');
  }

  await alumni.deleteOne();
  res.json({ message: 'Alumni profile removed' });
});

export { createAlumni, getAlumniList, getAlumniById, updateAlumni, deleteAlumni };


