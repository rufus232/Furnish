// components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import { ShoppingCart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-title">
          Découvrez votre <span className="text-accent">Espace</span> <br />idéal
          </h2>
          <p className="hero-description">
            
            Transformez votre intérieur grâce à notre sélection soignée de meubles élégants et fonctionnels
          </p>
          <button className="primary-button mon-button">Achetez maintenant <ShoppingCart size={20}/></button>
        </div>
        <div className="hero-image">
          {/* Image d'un canapé blanc avec des coussins et une couverture bleue turquoise */}
          <img src="https://i.pinimg.com/736x/54/7c/4a/547c4a7e98ba1bf218d070dcf83eb8bf.jpg" alt="Modern living room with comfortable sofa" />
        </div>
      </div>
    </section>
  );
};
// https://i.pinimg.com/736x/8f/5c/6f/8f5c6f78adbba2a5ec11f30b12372f69.jpg
export default HeroSection;