import mongoose from 'mongoose';

const alumniSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    batch: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String },
    company: { type: String },
    position: { type: String },
    achievements: { type: String },
    profileImage: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Alumni = mongoose.model('Alumni', alumniSchema);

export default Alumni;


