// components/Inspiration.jsx
import React from 'react';
import './Inspiration.css';

const Inspiration = () => {
  return (
    <section className="inspiration-section">
      <h2 className="section-title">The Unique Furniture Inspirations</h2>
      <p className="section-subtitle">Get inspired by our collections and transform your space</p>
      
      <div className="inspiration-container">
        <div className="inspiration-content">
          <p className="inspiration-text">
            Discover unique furniture pieces that reflect your personal style and enhance your living space
          </p>
          <button className="inspiration-button">Explore More</button>
        </div>
        
        <div className="inspiration-gallery">
          <div className="gallery-item">
            <img src="https://i.pinimg.com/736x/7b/5a/34/7b5a3465d0ec30e8dd1f3d49e0dfe66a.jpg" alt="Modern living room design" />
            <div className="gallery-overlay">
              <h3>Elegant Design</h3>
              <button className="gallery-button">See Details</button>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://i.pinimg.com/736x/18/ca/06/18ca067ebf269cfa9f60bc9dfeee9337.jpg" alt="Cozy bedroom design" />
            <div className="gallery-overlay">
              <h3>Cozy Space</h3>
              <button className="gallery-button">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;