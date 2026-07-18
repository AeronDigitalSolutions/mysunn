import React from 'react';
import { Truck, ShieldCheck, Headphones, Tag } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  { icon: <Truck size={40} />, title: 'Fast & Free Delivery', desc: 'Nationwide shipping on all wholesale orders over ₹10,000.' },
  { icon: <Tag size={40} />, title: 'Unbeatable Margins', desc: 'Direct from factory pricing ensures you get the highest profit.' },
  { icon: <ShieldCheck size={40} />, title: 'Quality Assured', desc: 'Every product passes strict quality checks before dispatch.' },
  { icon: <Headphones size={40} />, title: '24/7 B2B Support', desc: 'Dedicated account managers for your business needs.' }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section container">
      <div className="section-header text-center">
        <h2 className="section-title">Why Partner With <span className="text-red">mysunn</span>?</h2>
      </div>

      <div className="features-grid">
        {features.map((feat, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon text-red">
              {feat.icon}
            </div>
            <h4>{feat.title}</h4>
            <p>{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
