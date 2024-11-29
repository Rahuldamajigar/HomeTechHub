import express from "express";
import Payment from "../model/payment.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const paymentData = req.body;

  try {
    const newPayment = new Payment(paymentData);
    await newPayment.save();

    res.status(201).json({ message: "Payment details saved successfully. We will contact you ASAP" });
  } catch (error) {
    console.error("Error saving payment details:", error);
    res.status(500).json({ message: "Failed to save payment details" });
  }
});

export default router;
