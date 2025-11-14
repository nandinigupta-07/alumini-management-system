import asyncHandler from 'express-async-handler';
import Donation from '../models/Donation.js';
import validateRequest from '../utils/validateRequest.js';

const createDonation = asyncHandler(async (req, res) => {
  validateRequest(req);
  const donation = await Donation.create(req.body);
  res.status(201).json({ message: 'Donation recorded', donation });
});

const getDonations = asyncHandler(async (req, res) => {
  const donations = await Donation.find().sort({ date: -1 });
  res.json({ donations });
});

const getDonationById = asyncHandler(async (req, res) => {
  const donation = await Donation.findById(req.params.id);
  if (!donation) {
    res.status(404);
    throw new Error('Donation not found');
  }
  res.json({ donation });
});

const updateDonation = asyncHandler(async (req, res) => {
  validateRequest(req);

  const donation = await Donation.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!donation) {
    res.status(404);
    throw new Error('Donation not found');
  }

  res.json({ message: 'Donation updated', donation });
});

const deleteDonation = asyncHandler(async (req, res) => {
  const donation = await Donation.findById(req.params.id);
  if (!donation) {
    res.status(404);
    throw new Error('Donation not found');
  }
  await donation.deleteOne();
  res.json({ message: 'Donation removed' });
});

export { createDonation, getDonations, getDonationById, updateDonation, deleteDonation };


