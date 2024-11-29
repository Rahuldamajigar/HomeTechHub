// src/components/AboutUs.js
import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-description">
        Welcome to HomeTech Connect! Our mission is to connect homeowners with skilled professionals
        for all their technical repair and maintenance needs. We believe in quality, reliability, 
        and convenience, ensuring our clients receive top-notch service from trusted experts.
      </p>
      
      <div className="about-sections">
        <div className="about-card">
          <img src="images/team.jpg" alt="Our Team" className="about-image" />
          <h3>Our Team</h3>
          <p>
            Our team is composed of experienced professionals dedicated to providing exceptional 
            service. We work closely with certified technicians to ensure high standards of 
            reliability and expertise.
          </p>
        </div>
        
        <div className="about-card">
          <img src="images/mission.jpg" alt="Our Mission" className="about-image" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to make home repairs and maintenance easier and more accessible.
            We aim to create a trusted community where homeowners and professionals can
            connect with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
