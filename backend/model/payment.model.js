import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  paymentMethod: { type: String, required: true },
  details: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Payment", PaymentSchema);
