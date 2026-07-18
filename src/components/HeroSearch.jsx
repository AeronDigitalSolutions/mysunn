import React from 'react';
import { Search } from 'lucide-react';
import './HeroSearch.css';

const HeroSearch = () => {
  return (
    <section className="hero-search-section">
      <div className="hero-search-overlay"></div>
      <div className="hero-search-content container">
        <h1 className="hero-headline">Find Your Next Winning Product</h1>
        <p className="hero-subheadline">Wholesale deals on electronics, kitchenware, lifestyle, and more.</p>
        
        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Search for products, categories, or brands..." 
            className="main-search-input"
          />
          <button className="main-search-btn">
            <Search size={24} />
          </button>
        </div>
        
        <div className="popular-searches">
          <span>Popular:</span>
          <a href="#">Smart Watches</a>
          <a href="#">Blenders</a>
          <a href="#">Airpods Case</a>
          <a href="#">Ring Lights</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSearch;
