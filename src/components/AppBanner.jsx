import React from 'react';
import './AppBanner.css';

const AppBanner = () => {
  return (
    <section className="app-banner-section container">
      <div className="app-banner-card">
        <div className="app-banner-content">
          <h2>Get 10% Off Your First In-App Purchase</h2>
          <p>Download the mysunn wholesale app for exclusive flash deals, easier tracking, and faster checkout.</p>
          <div className="app-buttons">
            <button className="store-btn">Download on App Store</button>
            <button className="store-btn">Get it on Google Play</button>
          </div>
        </div>
        <div className="app-banner-image">
          <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" alt="Mobile App" />
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
