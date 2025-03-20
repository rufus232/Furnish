// components/Header.jsx
import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { ShoppingCart, Search, Heart, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Furnish.</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About Us</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>

          </ul>
        </nav>
        
        <div className="header-actions">
          <button className="icon-button">
            <Search size={20} />
          </button>
          <button className="icon-button">
            <Heart size={20} />
          </button>
          <Link to="/cart" className="icon-button">  
            <ShoppingCart size={20} />
          </Link>

          <button className="icon-button">
            <User size={20} />
          </button>
        </div>
        
        <button 
          className="mobile-menu-button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;