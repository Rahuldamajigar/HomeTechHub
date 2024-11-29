import React from 'react';
import './RoService.css';
import { Link } from 'react-router-dom';

const ROService = () => {
  return (
    <div className="ro-service">
      <header className="ro-hero" style={{ backgroundImage: `url(images/ROHero.jpg)` }}>
        <div className="hero-text">
          <h1>RO Water Purification Services</h1>
          <p>Pure and clean water solutions for your health and well-being.</p>
        </div>
      </header>

      <section className="ro-info">
        <h2>Why Choose Our RO Services?</h2>
        <p>Our team provides comprehensive RO water purification services, including installation, maintenance, and emergency repairs. Ensuring your access to safe, clean water is our top priority.</p>
      </section>

      <section className="ro-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src="images/ROinstallation.png" alt="RO Installation" />
            <h3><Link to='/Problem'> Installation</Link></h3>
            <p>Professional RO system installation to ensure safe, clean drinking water.</p>
          </div>
          <div className="service-card">
            <img src="images/ROmaintainance.png" alt="RO Maintenance" />
            <h3><Link to='/Problem'>Maintenance</Link></h3>
            <p>Regular maintenance for optimal performance and longevity of your RO system.</p>
          </div>
          <div className="service-card">
            <img src="images/ROfilter.png" alt="Filter Replacement" />
            <h3><Link to='/Problem'>Filter Replacement</Link></h3>
            <p>Timely replacement of filters to ensure continued water purity.</p>
          </div>
          <div className="service-card">
            <img src="images/ROquality.png" alt="Water Quality Testing" />
            <h3><Link to='/Problem'>Water Quality Testing</Link></h3>
            <p>Ensure the water you drink is safe with professional quality testing.</p>
          </div>
          <div className="service-card">
            <img src="images/ROemergency.png" alt="Emergency Services" />
            <h3><Link to='/Problem'>Emergency Services</Link></h3>
            <p>24/7 support for urgent RO system repairs and water quality issues.</p>
          </div>
        </div>
      </section>

      <section className="ro-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          <blockquote>
            “Excellent service! The team was prompt and very knowledgeable about RO systems.”
            <cite>– Priya M.</cite>
          </blockquote>
          <blockquote>
            “Quick and reliable! My RO system is now working perfectly after their maintenance visit.”
            <cite>– Rahul S.</cite>
          </blockquote>
        </div>
      </section>

      <section className="ro-contact">
        <h2>Need RO Water Purification Help?</h2>
        <p>Contact us today for a free consultation or to schedule a service appointment.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default ROService;
