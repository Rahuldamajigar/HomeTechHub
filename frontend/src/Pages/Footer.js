import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-links">
      <a href="/about" className="footer-link">About Us</a>
      <a href="/services" className="footer-link">Services</a>
      <Link to="/ServiceList" className="footer-link">Reviews</Link>
      <a href="/contact" className="footer-link">Contact</a>
      <a href="/faq" className="footer-link">FAQs</a>
    </div>
    <div className="footer-contact">
      <p>Email: contact@hometechhub.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  </footer>
  )
}

export default Footer