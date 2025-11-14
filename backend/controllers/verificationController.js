import asyncHandler from 'express-async-handler';
import VerificationRequest from '../models/VerificationRequest.js';
import validateRequest from '../utils/validateRequest.js';

const createVerificationRequest = asyncHandler(async (req, res) => {
  validateRequest(req);

  const data = {
    ...req.body,
    alumni: req.user?._id,
  };

  if (req.file) {
    data.document = `/uploads/${req.file.filename}`;
  }

  const request = await VerificationRequest.create(data);
  res.status(201).json({ message: 'Verification request submitted', request });
});

const getVerificationRequests = asyncHandler(async (req, res) => {
  const requests = await VerificationRequest.find().sort({ createdAt: -1 });
  res.json({ requests });
});

const getMyVerificationRequests = asyncHandler(async (req, res) => {
  const requests = await VerificationRequest.find({ alumni: req.user._id }).sort({ createdAt: -1 });
  res.json({ requests });
});

const updateVerificationStatus = asyncHandler(async (req, res) => {
  validateRequest(req);

  const { status, notes } = req.body;

  const request = await VerificationRequest.findById(req.params.id);
  if (!request) {
    res.status(404);
    throw new Error('Verification request not found');
  }

  request.status = status;
  request.notes = notes;
  request.reviewedBy = req.user._id;
  request.reviewedAt = new Date();

  await request.save();

  res.json({ message: 'Verification status updated', request });
});

export {
  createVerificationRequest,
  getVerificationRequests,
  getMyVerificationRequests,
  updateVerificationStatus,
};


