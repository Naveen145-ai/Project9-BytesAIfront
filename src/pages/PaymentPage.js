import React, { useState } from 'react';
import axios from 'axios';

export default function PaymentPage() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [message, setMessage] = useState('');

  const categories = [
    'Food', 'Rent', 'Travel and Transport', 'Shopping',
    'Grocery', 'Medical', 'Entertainment', 'Personal'
  ];

  const handlePay = async () => {
    if (!email || !category) {
      setMessage("Please fill in email and select a category.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:9090/api/payment", {
        email,
        category
      });

      setPaymentData(response.data);
      setMessage("✅ Payment successful!");
    } catch (error) {
      console.error(error);
      setMessage("❌ Payment failed.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Make a Payment</h2>

      <div className="form-group mt-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <strong>Select a category:</strong>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-${category === cat ? 'primary' : 'outline-primary'}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <button className="btn btn-success mt-3" onClick={handlePay}>
        Pay
      </button>

      {paymentData && (
        <div className="alert alert-success mt-4">
          <p><strong>Payment Details:</strong></p>
          <p>Category: {paymentData.category}</p>
          <p>Amount Paid: ₹{paymentData.amount}</p>
          <p>Paid At: {new Date(paymentData.paidAt).toLocaleString()}</p>
        </div>
      )}

      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}
