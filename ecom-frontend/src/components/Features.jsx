// components/Features.jsx
import React from 'react';
import './Features.css';
import { Truck, Clock, Headphones, BadgeCheck } from 'lucide-react';


const Features = () => {
  const featuresList = [
    {
      icon: <Truck size={24} />,
      title: 'Easy For Shopping',
      description: 'Quick and easy shopping experience'
    },
    {
      icon: <Clock size={24} />,
      title: 'Fast & Free Shipping',
      description: 'Free delivery on all orders'
    },
    {
        icon: <Headphones size={24} />,
        title: '24/7 Support',
        description: 'Always here to help you'
      },      
    {
      icon: <BadgeCheck size={24} />,
      title: 'Money Back Guarantee',
      description: '30-day return policy'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-grid">
          {featuresList.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;