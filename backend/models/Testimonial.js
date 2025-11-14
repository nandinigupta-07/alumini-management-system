import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    alumniName: { type: String, required: true },
    message: { type: String, required: true },
    year: { type: String },
    designation: { type: String },
    image: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;


