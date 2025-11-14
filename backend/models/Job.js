import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema(
  {
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    email: { type: String, required: true },
    resume: { type: String },
    coverLetter: { type: String },
    appliedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    location: { type: String, required: true },
    eligibility: { type: String },
    description: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    applicants: [jobApplicationSchema],
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;


