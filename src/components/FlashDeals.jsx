import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import './FlashDeals.css';

const FlashDeals = () => {
  const [timeLeft, setTimeLeft] = useState(3600 * 5); // 5 hours

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  const deals = [
    { id: 1, title: 'Ergonomic Chair', price: 2999, original: 5999, img: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=300&q=80' },
    { id: 2, title: 'Mechanical Keyboard', price: 1499, original: 3000, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80' },
    { id: 3, title: 'Wireless Mouse', price: 799, original: 1500, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80' },
    { id: 4, title: 'Monitor Arm', price: 1299, original: 2500, img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="flash-deals-section">
      <div className="container">
        <div className="flash-header flex justify-between items-center">
          <div className="flash-title-wrap">
            <h2 className="section-title text-white">FLASH DEALS</h2>
            <div className="timer-badge">
              <Clock size={16} />
              <span>Ends in {formatTime(timeLeft)}</span>
            </div>
          </div>
          <a href="#" className="view-all-link text-white">View All Deals</a>
        </div>

        <div className="flash-grid">
          {deals.map(deal => (
            <div key={deal.id} className="flash-card">
              <div className="flash-img-wrapper">
                <span className="discount-badge">50% OFF</span>
                <img src={deal.img} alt={deal.title} />
              </div>
              <div className="flash-info">
                <h4>{deal.title}</h4>
                <div className="flash-pricing">
                  <span className="price">₹{deal.price}</span>
                  <span className="original">₹{deal.original}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
