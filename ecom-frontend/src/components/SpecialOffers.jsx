// components/SpecialOffers.jsx
import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  return (
    <section className="special-offers-section">
      <h2 className="section-title">Super Sale!</h2>
      <p className="section-subtitle">Get your desired product with amazing discounts</p>
      
      <div className="countdown-timer">
        <div className="timer-unit">
          <span className="timer-number">05</span>
          <span className="timer-label">d</span>
        </div>
        <div className="timer-separator">:</div>
        <div className="timer-unit">
          <span className="timer-number">14</span>
          <span className="timer-label">h</span>
        </div>
        <div className="timer-separator">:</div>
        <div className="timer-unit">
          <span className="timer-number">25</span>
          <span className="timer-label">m</span>
        </div>
        <div className="timer-separator">:</div>
        <div className="timer-unit">
          <span className="timer-number">20</span>
          <span className="timer-label">s</span>
        </div>
      </div>
      
      <div className="offers-container">
        <div className="offer-product">
          <img src="https://i.pinimg.com/736x/2b/a9/d6/2ba9d6b4737add822b059aa16bffb966.jpg" alt="Gray sofa on sale" className="offer-image" />
          <div className="offer-details">
            <button className="shop-now-button">Shop Now</button>
          </div>
          <img src="https://i.pinimg.com/736x/7c/8a/d5/7c8ad52cdc3feba4e1973e7f483f67fe.jpg" alt="Gray sofa on sale" className="offer-image" />

        </div>

        
        <div className="offer-images">
          <div className="offer-image-container">
            <img src="https://i.pinimg.com/736x/b2/b5/0c/b2b50ce103d683d4eb438ec45a557c33.jpg" alt="Modern mirror" />
          </div>
          <div className="offer-image-container">
            <img src="https://i.pinimg.com/736x/ab/5c/fa/ab5cfa033d2084045a7926f402c3a26a.jpg" alt="Interior with plant" />
          </div>
          <div className="offer-image-container">
            <img src="https://i.pinimg.com/736x/0b/56/cf/0b56cfbc3949d83a9ab814fc7346066e.jpg" alt="Modern mirror" />
          </div>
          <div className="offer-image-container">
            <img src="https://i.pinimg.com/736x/b8/2f/83/b82f83e12c7ad8d8af34911aa62389db.jpg" alt="Interior with plant" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;