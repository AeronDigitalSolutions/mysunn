import React from 'react';
import './LifestyleGrid.css';

const lifestyles = [
  { name: 'Kitchen Masters', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Pet Lovers', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=600&q=80' },
  { name: 'Travel Light', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80' },
  { name: 'Beauty Routine', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80' }
];

const LifestyleGrid = () => {
  return (
    <section className="lifestyle-section container">
      <div className="section-header flex justify-between items-center">
        <h2 className="section-title">Shop by <span className="text-red">Lifestyle</span></h2>
      </div>

      <div className="lifestyle-grid">
        {lifestyles.map((style, idx) => (
          <div key={idx} className="lifestyle-card">
            <img src={style.img} alt={style.name} />
            <div className="lifestyle-overlay">
              <h3>{style.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifestyleGrid;
