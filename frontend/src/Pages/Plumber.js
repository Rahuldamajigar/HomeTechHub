import React from 'react';
import './Plumber.css';
import { Link } from 'react-router-dom';

const PlumberService = () => {
  return (
    <div className="plumber-service">
      <header className="plumber-hero" style={{ backgroundImage: `url(images/Plumberhero.avif)` }}>
        <div className="hero-text">
          <h1>Expert Plumbing Services</h1>
          <p>Fast, reliable, and professional solutions for all your plumbing needs.</p>
        </div>
      </header>

      <section className="plumber-info">
        <h2>Why Choose Us?</h2>
        <p>We offer comprehensive plumbing services, from repairs to installations, with licensed professionals and transparent pricing.</p>
      </section>

      <section className="plumber-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="images/PipeLeak.jpg" alt="Leak Repairs" />
            <h3><Link to='/Problem'>Leak Repairs</Link></h3>
            <p>Quick fixes for leaky faucets, pipes, and more.</p>
          </div>
          <div className="service-card">
            <img src="images/Drain.jpg" alt="Drain Cleaning" />
            <h3><Link to='/Problem'>Drain Cleaning</Link></h3>
            <p>Keep your pipes flowing freely with professional cleaning.</p>
          </div>
          <div className="service-card">
            <img src="images/WaterHeater.jpg" alt="Water Heater Installation" />
            <h3><Link to='/Problem'>Water Heater Installation</Link></h3>
            <p>Safe and efficient water heater installation services.</p>
          </div>
          <div className="service-card">
            <img src="images/Replacement.jpg" alt="Pipe Replacement" />
            <h3><Link to='/Problem'>Pipe Replacement</Link></h3>
            <p>Durable and effective pipe replacements.</p>
          </div>
          <div className="service-car">
            <p></p>
          </div>
          <div className="service-card">
            <img src="images/EmergencyService.jpg" alt="Emergency Plumbing" />
            <h3><Link to='/Problem'>Emergency Services</Link></h3>
            <p>24/7 emergency plumbing assistance.</p>
          </div>
        </div>
      </section>

      <section className="plumber-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          <blockquote>
            “Fantastic service, very prompt and solved the issue with no hassle!”
            <cite>– Linda S.</cite>
          </blockquote>
          <blockquote>
            “The plumber was professional and courteous. Highly recommend!”
            <cite>– George K.</cite>
          </blockquote>
        </div>
      </section>

      <section className="plumber-contact">
        <h2>Get in Touch</h2>
        <p>Need a plumber? Contact us today for a free consultation or to schedule a service.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default PlumberService;
