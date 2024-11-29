import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);  // Toggle the answer visibility
  };

  const faqData = [
    {
      question: "What is HomeTechHub?",
      answer: "HomeTechHub connects homeowners with skilled professionals for appliance repairs and maintenance."
    },
    {
      question: "How can I book a service?",
      answer: "You can book a service through our website by selecting your required service and filling in the necessary details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept payments via Stripe and UPI for secure transactions."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through the Contact page or by emailing support@hometechhub.com."
    }
  ];

  return (
    <div className="homepage">
       <div className="image-section">
  <div className="content-container">
    <div className="text-content">
      <h1>Welcome to HomeTechHub</h1>
      <p>Your trusted hub for <strong>reliable home repairs</strong> and <strong>top-notch maintenance services</strong>. Experience the ease of connecting with skilled professionals.</p>
    </div>
    <div className="image">
      <img className="home" src="images/Full-size.png" alt="H" />
    </div>
  </div>
</div>

        <div className="image-grid">
  <div className="grid-item"><Link to='/Kitchen'>
    <img src="images/Kitchenappliances.jpg" alt=" 1"/>
    <p>Kitchen Appliances</p></Link></div>
  <div className="grid-item"><Link to='/AC'>
    <img src="images/AC.png" alt=" 2"/>
    <p>AC Services</p></Link></div>
  <div className="grid-item"><Link to='/Electrician'>
    <img src="images/Electrician.png" alt="3"/>
    <p>Electrician</p></Link></div>
  <div className="grid-item"><Link to='/Plumber'>
    <img src="images/Plumber.jpg" alt=" 4"/>
    <p>Plumber</p></Link></div>
  <div className="grid-item"><Link to='/RORepair'>
    <img src="images/RO-repair.jpg" alt=" 5"/>
    <p>RO Services</p></Link></div>
  <div className="grid-item"><Link to='/WashingMachine'>
    <img src="images/washing-machine.png" alt="6"/>
    <p>Washing Machine</p></Link></div>
</div>
      <div class="image-row">
    <img src="images/1.jpg" alt="Imag 1"/>
    <img src="images/2.jpg" alt="Imag 2"/>
    <img src="images/3.jpg" alt="Imag 3"/>
</div>

<div className="faq-section">
        <div className="faq-title">
          <p>Frequently Asked Questions</p>
        </div>
        <div className="faq-content">
          {faqData.map((item, index) => (
            <div className={`faq-item ${openQuestion === index ? 'active' : ''}`} key={index}>
              <button className="faq-question" onClick={() => toggleQuestion(index)}>
                {item.question}
              </button>
              {openQuestion === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
</div>
  )
}

export default Homepage