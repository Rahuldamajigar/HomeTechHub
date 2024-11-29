import React from 'react';
import './Kitchen.css';
import { Link } from 'react-router-dom';

const KitchenApplianceService = () => {
  return (
    <div className="kitchen-service-container">
      <h3 className="service-title">Kitchen Appliance Services</h3>
      <p className="service-description">We provide professional repair and maintenance for all your kitchen appliances.</p>
      
      <div className="appliance-grid">
        <div className="appliance-card">
          <img src="images/appliance1.jpg" alt="Microwave" className="appliance-image" />
          <h3><Link to='/Problem'>Microwave Repair</Link></h3>
          <p>Quick and reliable repair for all microwave brands and models.</p>
        </div>
        
        <div className="appliance-card">
          <img src="images/appliance2.jpg" alt="Refrigerator" className="appliance-image" />
          <h3><Link to='/Problem'>Refrigerator Repair</Link></h3>
          <p>Expert repair services to keep your fridge running efficiently.</p>
        </div>

        <div className="appliance-card">
          <img src="images/appliance3.jpg" alt="Oven" className="appliance-image" />
          <h3><Link to='/problem'>Oven & Stove Repair</Link></h3>
          <p>Maintenance and repair for gas and electric ovens and stoves.</p>
        </div>
      </div>
    </div>
  );
};

export default KitchenApplianceService;
