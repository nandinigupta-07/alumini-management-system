import asyncHandler from 'express-async-handler';
import Job from '../models/Job.js';
import validateRequest from '../utils/validateRequest.js';

const createJob = asyncHandler(async (req, res) => {
  validateRequest(req);

  const job = await Job.create({
    ...req.body,
    postedBy: req.user?._id,
  });

  res.status(201).json({ message: 'Job posted', job });
});

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json({ jobs });
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  res.json({ job });
});

const updateJob = asyncHandler(async (req, res) => {
  validateRequest(req);

  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  res.json({ message: 'Job updated', job });
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }
  await job.deleteOne();
  res.json({ message: 'Job removed' });
});

const applyForJob = asyncHandler(async (req, res) => {
  validateRequest(req);

  const job = await Job.findById(req.params.id);
  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  const existingApplication = job.applicants.find((app) => {
    if (req.user?._id && app.applicant) {
      return app.applicant.toString() === req.user._id.toString();
    }
    return app.email === req.body.email;
  });

  if (existingApplication) {
    res.status(400);
    throw new Error('You have already applied for this job');
  }

  job.applicants.push({
    applicant: req.user?._id,
    name: req.body.name,
    email: req.body.email,
    resume: req.file ? `/uploads/${req.file.filename}` : req.body.resume,
    coverLetter: req.body.coverLetter,
  });

  await job.save();

  res.status(201).json({ message: 'Application submitted', job });
});

export { createJob, getJobs, getJobById, updateJob, deleteJob, applyForJob };


