// components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column company-info">
            <h3 className="footer-logo">Furnish.</h3>
            <p className="company-description">
              We provide high-quality furniture that transforms your living space into a stylish and comfortable haven.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              <li><a href="#">Sofas</a></li>
              <li><a href="#">Chairs</a></li>
              <li><a href="#">Tables</a></li>
              <li><a href="#">Beds</a></li>
              <li><a href="#">Lighting</a></li>
            </ul>
          </div>
          
          <div className="footer-column contact">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <MapPin size={18} />
                <span>123 Furniture Street, Design City</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <Mail size={18} />
                <span>support@furnish.com</span>
              </li>
            </ul>
            <div className="newsletter">
              <h4 className="newsletter-heading">Subscribe to our newsletter</h4>
              <div className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 Furnish. All rights reserved.</p>
          <div className="payment-methods">
            <span>Payment Methods:</span>
            <div className="payment-icons">
              <img src="/images/visa.svg" alt="Visa" />
              <img src="/images/mastercard.svg" alt="Mastercard" />
              <img src="/images/paypal.svg" alt="PayPal" />
              <img src="/images/apple-pay.svg" alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;