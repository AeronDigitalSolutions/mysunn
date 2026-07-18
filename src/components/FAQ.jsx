import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'WHAT DO YOU OFFER?',
    answer: 'We offer a wide range of premium wholesale products for retailers and dropshippers at unbeatable prices.'
  },
  {
    question: 'WHAT IF I ENTER THE WRONG ADDRESS?',
    answer: 'Please contact our support within 24 hours to update your shipping address before the order is dispatched.'
  },
  {
    question: 'ARE YOUR PRODUCTS HIGH QUALITY?',
    answer: 'Yes, we source directly from top-tier manufacturers ensuring high margins and low return rates for your business.'
  },
  {
    question: 'HOW DO I CONTACT CUSTOMER SUPPORT?',
    answer: 'You can reach us at support@mysunn.com or via WhatsApp on our business number.'
  },
  {
    question: 'DO YOU HAVE BULK PURCHASE OFFERS?',
    answer: 'Absolutely. We specialize in B2B wholesale. Check our Bulk Deals section for tiered pricing.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <section className="faq-section container">
        <div className="faq-header">
          <h2>FAQS</h2>
          <p>Curiosity didn't kill the cat - it just brought you here!<br/>You got questions. We've got answers. If anything else pops up, WhatsApp us anytime.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                {openIndex === index ? <ChevronUp className="text-red" /> : <ChevronDown className="text-red" />}
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
