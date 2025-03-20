// components/Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Adams',
      position: 'Interior Designer',
      content: 'The furniture pieces from Furnish are not only beautiful but also extremely durable. My clients are always impressed with the quality and design of the products.',
      rating: 5,
      image: 'https://i.pinimg.com/736x/1a/ee/75/1aee7557cf429da9f7ac2df1955851ea.jpg'
    },
    {
      id: 2,
      name: 'Michael Brown',
      position: 'Homeowner',
      content: 'I completely transformed my living room with Furnish products. The customer service was outstanding and the delivery was prompt. Highly recommend!',
      rating: 5,
      image: 'https://i.pinimg.com/736x/e7/34/fe/e734fe533464cd4e56f883b3643d5c42.jpg'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      position: 'Architect',
      content: 'As an architect, I appreciate the attention to detail in Furnish products. They blend functionality with aesthetic appeal perfectly.',
      rating: 4,
      image: 'https://i.pinimg.com/736x/c6/f8/b3/c6f8b3854f0966e105c93f79b17afa4b.jpg'
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Our Clients Beautiful Words For Furnish</h2>
      
      <div className="testimonials-container">
        <div className="testimonials-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-image">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < testimonial.rating ? "#FFD700" : "none"} 
                      color={i < testimonial.rating ? "#FFD700" : "#D1D5DB"}
                    />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-controls">
          <button className="slider-button prev" onClick={prevSlide}>
            <ArrowLeft size={20} />
          </button>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <button className="slider-button next" onClick={nextSlide}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;