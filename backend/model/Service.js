// backend/model/Service.js
import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  priceRange: { type: String, required: true },
  imageUrl: { type: String },
  serviceProviders: [
    {
      name: { type: String },
      rating: { type: Number },
      contact: { type: String }
    }
  ]
}, { timestamps: true });

export const Service = mongoose.model('Service', serviceSchema);