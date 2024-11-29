import React from 'react';
import './WashingMachine.css';
import { Link } from 'react-router-dom';

const WashingMachineService = () => {
  return (
    <div className="washing-machine-service">
      <header className="wm-hero" style={{ backgroundImage: `url(images/WashingmachineHero.jpg)` }}>
        <div className="hero-text">
          <h1>Washing Machine Services</h1>
          <p>Expert installation, maintenance, and repair services for all washing machine models.</p>
        </div>
      </header>

      <section className="wm-info">
        <h2>Why Choose Our Washing Machine Services?</h2>
        <p>Our team offers reliable, efficient, and affordable washing machine services, including installation, regular maintenance, and emergency repairs.</p>
      </section>

      <section className="wm-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="images/Washingmachineinstallation.webp" alt="Installation" />
            <h3><Link to='/problem'>Installation</Link></h3>
            <p>Expert installation for all types and brands of washing machines.</p>
          </div>
          <div className="service-card">
            <img src="images/Washingmachinemaintainance.png" alt="Maintenance" />
            <h3><Link to='/Problem'>Maintenance</Link></h3>
            <p>Keep your washing machine running smoothly with regular maintenance checks.</p>
          </div>
          <div className="service-card">
            <img src="images/washer.png" alt="Repair" />
            <h3><Link to='/Problem'>Repair</Link></h3>
            <p>Quick and reliable repairs for all washing machine issues.</p>
          </div>
          <div className="service-card">
            <img src="images/Drum.png" alt="Drum Cleaning" />
            <h3><Link to='/Problem'>Drum Cleaning</Link></h3>
            <p>Professional drum cleaning to eliminate odors and prolong machine life.</p>
          </div>
          <div className="service-car">
          </div>
          <div className="service-card">
            <img src="images/Emergency.png" alt="Emergency Services" />
            <h3><Link to='/Problem'>Emergency Services</Link></h3>
            <p>24/7 support for urgent washing machine repairs.</p>
          </div>
        </div>
      </section>

      <section className="wm-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          <blockquote>
            “Quick and professional repair service. My washing machine works perfectly now!”
            <cite>– Meera T.</cite>
          </blockquote>
          <blockquote>
            “Excellent service and affordable rates. Highly recommend for washing machine maintenance.”
            <cite>– Arjun R.</cite>
          </blockquote>
        </div>
      </section>

      <section className="wm-contact">
        <h2>Need Washing Machine Assistance?</h2>
        <p>Contact us today to schedule an appointment or get a free quote for our washing machine services.</p>
        <button><Link to="/Contact">Contact Us</Link></button>
      </section>
    </div>
  );
};

export default WashingMachineService;
