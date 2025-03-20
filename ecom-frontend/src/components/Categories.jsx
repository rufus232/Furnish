// components/Categories.jsx
import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      title: 'Table',
      image: './public/images/téléchargement.png',
      itemCount: '120+ Items',
      minPrice: '$350.00'
    },
    {
      title: 'Chairs',
      image: './public/images/téléchargement2.png',
      itemCount: '65+ Items',
      minPrice: '$180.00'
    },
    {
      title: 'Light',
      image: './public/images/téléchargement3.png',
      itemCount: '45+ Items',
      minPrice: '$75.00'
    }
  ];

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      
      <div className="featured-item">
        <div className="featured-image">
          <img src="https://i.pinimg.com/736x/e7/23/64/e72364bd16909914e4a0da35af721a5a.jpg" alt="Beautiful bedroom setup" />
        </div>
        <div className="featured-content">
          <span className="featured-tag">COMFORT GUARANTEED</span>
          <h3 className="featured-title">Explore Furnish's curated collection of soft, classic and functional items that blend perfectly to create luxury and functional homes</h3>
          <div className="featured-buttons">
            <button className="primary-button">Shop Now</button>
            <button className="outlined-button">Make Enquiries</button>
          </div>
        </div>
      </div>
      
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="">
            <h3 className="category-title">{category.title}</h3>
            <p className="category-meta">{category.itemCount}</p>
            <p className="category-price">Starting for <br></br> <span className="price">{category.minPrice}</span></p>

            </div>
            <img src={category.image} alt={category.title} className="category-image mon-image" />
            {index === 2 && (
              <div className="category-offer">
                <span className="offer-text">30% OFFER</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;