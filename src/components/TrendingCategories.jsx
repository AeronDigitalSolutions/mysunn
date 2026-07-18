import React from 'react';
import './TrendingCategories.css';

const trends = [
  { title: 'Smart Home Hub', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80', span: 2 },
  { title: 'Fitness Gear', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=400&q=80', span: 1 },
  { title: 'Travel Essentials', image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=400&q=80', span: 1 }
];

const TrendingCategories = () => {
  return (
    <section className="trending-section container">
      <h2 className="section-title mb-4">Trending Now</h2>
      <div className="trending-grid">
        {trends.map((trend, idx) => (
          <div key={idx} className={`trend-card span-${trend.span}`} style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${trend.image})`}}>
            <div className="trend-content">
              <h3>{trend.title}</h3>
              <a href="#" className="shop-link">Shop Collection &rarr;</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
