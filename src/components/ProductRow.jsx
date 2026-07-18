import React from 'react';
import './ProductRow.css';

const ProductRow = ({ title, highlight, products, viewAllLink = "#", bgClass = "" }) => {
  return (
    <section className={`product-row-section ${bgClass}`}>
      <div className="container">
        <div className="section-header flex justify-between items-center">
          <h2 className="section-title">
            {highlight && <span className="text-red">{highlight}</span>} {title}
          </h2>
          <a href={viewAllLink} className="view-all-link">View All</a>
        </div>

        <div className="product-scroll-row">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              {product.tag && <span className="product-tag">{product.tag}</span>}
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
              <h4 className="product-title">{product.title}</h4>
              <p className="product-desc">{product.description}</p>
              
              <div className="product-pricing">
                <span className="price">₹{product.price}</span>
                {product.originalPrice && <span className="original-price">₹{product.originalPrice}</span>}
                {product.discount && <span className="discount">{product.discount}</span>}
              </div>
              
              <div className="product-badges">
                {product.badges && product.badges.map((badge, idx) => (
                  <span key={idx} className="badge">{badge}</span>
                ))}
              </div>
            </div>
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default ProductRow;
