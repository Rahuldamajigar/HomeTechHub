import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4001/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      alert(result.message || 'Message sent successfully!');
      setFormData({ subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Fetch Error:', error.message);
      alert('Failed to send the message. Check the console for details.');
    }
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We’re here to help! If you have questions about our services or need assistance, feel free to reach out.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your message"
            required
          />
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Email: support@hometechhub.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Tech Street, Cityville, TX 78945</p>
      </div>
    </div>
  );
};

export default Contact;
