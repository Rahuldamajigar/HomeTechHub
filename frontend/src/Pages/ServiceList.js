import React, { useEffect, useState } from 'react';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4001/services') // Now using /services instead of /api/services
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  return (
    <div className="service-list">
      {services.map((service) => (
        <div key={service._id} className="service-card">
          <img src={service.imageUrl} alt={service.name} />
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p>Price Range: {service.priceRange}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
