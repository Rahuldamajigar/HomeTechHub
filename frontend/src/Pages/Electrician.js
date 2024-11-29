// src/components/ElectricianService.js
import React from 'react';
import './Electrician.css';
import { Link } from 'react-router-dom';

const ElectricianService = () => {
  return (
    <div className="electrician-service-container">
      <h2 className="service-title">Electrician Services</h2>
      <p className="service-description">Professional electrical services for your home and office needs.</p>
      
      <div className="electrician-service-grid">
        <div className="service-card">
          <img src="images/wiring.jpg" alt="Wiring Service" className="service-image" />
          <h3><Link to='/Problem'>Wiring Installation</Link></h3>
          <p>Safe and efficient wiring installation for new constructions and renovations.</p>
        </div>
        
        <div className="service-card">
          <img src="images/lighting.jpg" alt="Lighting Installation" className="service-image" />
          <h3><Link to='/Problem'>Lighting Installation</Link></h3>
          <p>Expert installation of lighting fixtures to brighten up your space.</p>
        </div>

        <div className="service-card">
          <img src="images/circuit.jpg" alt="Circuit Repair" className="service-image" />
          <h3><Link to='/Problem'>Circuit Repair</Link></h3>
          <p>Quick and reliable circuit repairs to ensure your safety and functionality.</p>
        </div>
      </div>
    </div>
  );
};

export default ElectricianService;
