import React, { useState } from "react";
import axios from "axios";
import "./PaymentOptions.css";

const PaymentOptions = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  const handlePaymentSelect = (event) => {
    setSelectedPayment(event.target.value);
    setPaymentDetails({ cardNumber: "", expiryDate: "", cvv: "", upiId: "" });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dataToSend = {
      paymentMethod: selectedPayment,
      details: selectedPayment === "UPI" ? paymentDetails.upiId : paymentDetails,
    };

    try {
      const response = await axios.post("http://localhost:4001/payments", dataToSend);
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting payment details:", error);
      alert("Failed to submit payment details. Please try again.");
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Choose Your Payment Method</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-option">
          <input
            type="radio"
            id="cod"
            name="payment"
            value="Cash on Delivery"
            onChange={handlePaymentSelect}
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="credit"
            name="payment"
            value="Credit Card"
            onChange={handlePaymentSelect}
          />
          <label htmlFor="credit">Credit Card</label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="debit"
            name="payment"
            value="Debit Card"
            onChange={handlePaymentSelect}
          />
          <label htmlFor="debit">Debit Card</label>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="upi"
            name="payment"
            value="UPI"
            onChange={handlePaymentSelect}
          />
          <label htmlFor="upi">UPI</label>
        </div>

        {["Credit Card", "Debit Card"].includes(selectedPayment) && (
          <div className="payment-details">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="Expiry Date (MM/YY)"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        {selectedPayment === "UPI" && (
          <div className="payment-details">
            <input
              type="text"
              name="upiId"
              placeholder="UPI ID"
              value={paymentDetails.upiId}
              onChange={handleInputChange}
              required
            />
          </div>
        )}

        <button type="submit" className="submit-button">
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentOptions;
