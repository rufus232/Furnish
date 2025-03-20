import React, { useState, useEffect } from 'react';
import './BestSelling.css';
import { ShoppingCart, Heart, Star } from 'lucide-react';

const BestSelling = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState([]);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'chairs', name: 'Chairs' },
    { id: 'sofas', name: 'Sofas' },
    { id: 'tables', name: 'Tables' },
    { id: 'lights', name: 'Lights' }
  ];

  // Utiliser useEffect pour récupérer les produits depuis l'API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');  // Remplace par l'URL de ton API
        const data = await response.json();
        setProducts(data);  // Assure-toi que la réponse de l'API est un tableau de produits
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProducts();
  }, []);  // Le tableau vide signifie que l'effet ne sera exécuté qu'une seule fois, lors du premier rendu

  // Filtrer les produits en fonction de la catégorie et de la note (rating)
  const filteredProducts = activeCategory === 'all'
    ? products.filter(product => product.rating === 5)  // Filtrer uniquement les produits avec rating == 5
    : products.filter(product => product.category === activeCategory && product.rating === 5);  // Filtrer par catégorie et rating == 5

  return (
    <section className="best-selling-section">
      <h2 className="section-title">Our Best Selling Product</h2>
      
      <div className="product-categories">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? filteredProducts.map(product => (
          <div className="product-card" key={product._id}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-actions">
                <button className="product-action-button">
                  <ShoppingCart size={18} />
                </button>
                <button className="product-action-button">
                  <Heart size={18} />
                </button>
              </div>
              {product.discount && (
                <span className="discount-badge">{product.discount}% OFF</span>
              )}
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(product.rating) ? "#FFD700" : "none"} 
                    color={i < Math.floor(product.rating) ? "#FFD700" : "#D1D5DB"}
                  />
                ))}
                <span className="rating-number">({product.rating})</span>
              </div>
              <div className="product-price">
                <span className="current-price">${product.price.toFixed(2)}</span>
                {product.discount && (
                  <span className="original-price">
                    ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                  </span>
                )}
              </div>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        )) : (
          <p>No products found with rating 5 in this category.</p>
        )}
      </div>
      
      <div className="view-all-container">
        <button className="view-all-button">View All</button>
      </div>
    </section>
  );
};

export default BestSelling;
