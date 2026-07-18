import React from 'react';
import { Star } from 'lucide-react';
import './CustomerReviews.css';

const reviews = [
  { id: 1, name: 'Rahul Sharma', business: 'Electronics Hub', text: 'Incredible margins on smartwatches. Sold out my first batch in two days. Highly recommend mysunn for B2B!', rating: 5 },
  { id: 2, name: 'Anita Desai', business: 'Home Essentials Store', text: 'The quality of kitchenware is top-notch. Customer service is super responsive on WhatsApp.', rating: 5 },
  { id: 3, name: 'Vikram Singh', business: 'Gadget World', text: 'Fast shipping and great packaging. Rarely see any defective items. A true game changer for my retail store.', rating: 4 }
];

const CustomerReviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Loved by <span className="text-red">15,000+</span> Retailers</h2>
        </div>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="stars text-red">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer-info">
                <h4>{review.name}</h4>
                <span>{review.business}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
