import React, { useState } from 'react';

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    salary: "",
    company: "",
    gpay: "",
    phonepe: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9090/api/profile/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Profile saved successfully!");
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (err) {
      setMessage("❌ Error saving profile: " + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
  type="email"
  name="email"
  className="form-control mb-3"
  placeholder="Enter Email"
  value={form.email}
  onChange={handleChange}
  required
/>

        <input
          type="number"
          name="salary"
          className="form-control mb-3"
          placeholder="Enter Salary"
          value={form.salary}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="company"
          className="form-control mb-3"
          placeholder="Enter Company"
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="gpay"
          className="form-control mb-3"
          placeholder="GPay UPI Link"
          value={form.gpay}
          onChange={handleChange}
        />
        <input
          type="url"
          name="phonepe"
          className="form-control mb-3"
          placeholder="PhonePe UPI Link"
          value={form.phonepe}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>

      {message && <div className="alert alert-info mt-4">{message}</div>}
    </div>
  );
}
