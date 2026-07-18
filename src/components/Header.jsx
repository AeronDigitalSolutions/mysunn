import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo">
          <h2>mysunn</h2>
          <span className="logo-subtitle">WHOLESALE</span>
        </div>
        
        <nav className="nav-links">
          <a href="#" className="active">NEW ARRIVALS</a>
          <a href="#">BEST SELLERS</a>
          <a href="#">ELECTRONICS</a>
          <a href="#">KITCHENWARE</a>
          <a href="#">HARDWARE</a>
          <a href="#">BULK DEALS</a>
          <a href="#">SHOP ALL</a>
          <a href="#">ABOUT US</a>
        </nav>

        <div className="header-icons">
          <button className="icon-btn" aria-label="User account">
            <User size={20} />
          </button>
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="icon-btn cart-btn" aria-label="Shopping cart">
            <ShoppingBag size={20} />
            <span className="cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
