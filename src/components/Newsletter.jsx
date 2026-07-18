import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container text-center">
        <h2>STAY AHEAD OF THE MARKET</h2>
        <p>Subscribe to our newsletter for early access to flash deals, new product launches, and industry insights.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your business email" />
          <button type="button">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
