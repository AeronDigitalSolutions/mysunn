import React from 'react';
import './FeaturedBrands.css';

const brands = ['BRAND ONE', 'GIGA TECH', 'HOME ESSENTIALS', 'LIFESTYLE PRO', 'BEAUTY CO', 'FITNESS MAX'];

const FeaturedBrands = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <h3 className="brands-title">TRUSTED BY TOP RETAILERS</h3>
        <div className="brands-marquee">
          <div className="brands-track">
            {brands.map((brand, idx) => (
              <div key={idx} className="brand-item">{brand}</div>
            ))}
            {brands.map((brand, idx) => (
              <div key={`clone-${idx}`} className="brand-item">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
