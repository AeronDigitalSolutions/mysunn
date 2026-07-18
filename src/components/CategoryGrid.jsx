import React from 'react';
import { Smartphone, Monitor, Coffee, Shirt, Umbrella, Heart, Zap, Gift } from 'lucide-react';
import './CategoryGrid.css';

const categories = [
  { name: 'Electronics', icon: <Smartphone size={28} /> },
  { name: 'Home & Kitchen', icon: <Coffee size={28} /> },
  { name: 'Fashion', icon: <Shirt size={28} /> },
  { name: 'Outdoor', icon: <Umbrella size={28} /> },
  { name: 'Beauty', icon: <Heart size={28} /> },
  { name: 'Gadgets', icon: <Zap size={28} /> },
  { name: 'Office', icon: <Monitor size={28} /> },
  { name: 'Gifts', icon: <Gift size={28} /> }
];

const CategoryGrid = () => {
  return (
    <section className="category-section container">
      <div className="category-grid">
        {categories.map((cat, idx) => (
          <a key={idx} href="#" className="category-item">
            <div className="category-icon">
              {cat.icon}
            </div>
            <span>{cat.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
