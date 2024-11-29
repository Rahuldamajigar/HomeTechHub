import React from 'react';
import './AC.css';
import { Link } from 'react-router-dom';

const ACService = () => {
  return (
    <div className="ac-service-container">
      <h2 className="service-title">Air Conditioning Services</h2>
      <p className="service-description">Professional services for all your air conditioning needs.</p>
      
      <div className="ac-service-grid">
        <div className="service-card">
          <img src="images/ACinstallation.jpg" alt="AC Installation" className="service-image" />
          <h3><Link to='/Problem'>AC Installation</Link></h3>
          <p>Expert installation to ensure optimal cooling and efficiency.</p>
        </div>
        
        <div className="service-card">
          <img src="images/ACmaintainance.jpg" alt="AC Maintenance" className="service-image" />
          <h3><Link to='/Problem'>AC Maintenance</Link></h3>
          <p>Regular maintenance services to keep your AC running smoothly.</p>
        </div>

        <div className="service-card">
          <img src="images/ACrepair.jpg" alt="AC Repair" className="service-image" />
          <h3><Link to='/Problem'>AC Repair</Link></h3>
          <p>Quick and reliable repair services for all AC brands and models.</p>
        </div>
      </div>
    </div>
  );
};

export default ACService;
