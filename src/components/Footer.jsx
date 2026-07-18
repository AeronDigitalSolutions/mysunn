import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">NEW ARRIVALS</a></li>
              <li><a href="#">BESTSELLERS</a></li>
              <li><a href="#">SHOP ALL</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>INFORMATION</h4>
            <ul>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">TERMS OF SERVICE</a></li>
              <li><a href="#">PRIVACY POLICY</a></li>
              <li><a href="#">SHIPPING POLICY</a></li>
              <li><a href="#">REFUND POLICY</a></li>
              <li><a href="#">EXCHANGE POLICY</a></li>
              <li><a href="#">CASHBACK TERMS</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>CONTACT</h4>
            <ul>
              <li><a href="#">CONTACT</a></li>
              <li><a href="#">TRACK ORDER</a></li>
              <li><a href="#">BULK ORDERS - QUERY FORM</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>OTHER</h4>
            <ul>
              <li><a href="#">ACCOUNT & LOGIN</a></li>
              <li><a href="#">GET HELP</a></li>
            </ul>
            
            <h4 className="mt-2">FOLLOW US</h4>
            <div className="social-links-text">
              <a href="#">INSTAGRAM</a> &bull; <a href="#">FACEBOOK</a> &bull; <a href="#">YOUTUBE</a>
            </div>
          </div>
        </div>

        <div className="footer-slogan text-red">
          <h1>AGAINST THE ORDINARY!</h1>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026, mysunn - Powered by Aeron Digital</p>
          <div className="scam-alert">
            <h5><span className="text-red">⚠ SCAM ALERT</span></h5>
            <p>We have noticed a rise in fraudulent activities through calls, SMS, WhatsApp messages, emails, and other mediums.</p>
            <p>Please be aware that <strong>mysunn will never ask for OTPs, passwords, bank details, or payments via calls, SMS, WhatsApp, or email.</strong> We also never request payments for any promotional activities through unauthorized channels.</p>
            <p>If you receive any such communication, stay cautious and reach out to us immediately at our <strong>customer care number +91 9999999999</strong> or email us at <strong>support@mysunn.com</strong>.</p>
            <p><strong>Stay safe!</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
