import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Contact', contactSchema);
