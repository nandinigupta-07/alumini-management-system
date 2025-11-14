import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    amount: { type: Number, required: true },
    purpose: { type: String, required: true },
    date: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: true }
);

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;


