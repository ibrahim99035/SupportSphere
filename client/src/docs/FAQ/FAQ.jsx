import React, { useState, useRef } from 'react';
import './FAQ.css';

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqData = [
    {
      question: 'سؤال؟',
      answer: 'إجابة',
    }
  ];

  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />   
      <div className="faq-container">
        <h2 className="faq-title">الأسئلة الشائعة</h2>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`}>+</span>
              </div>
              <div
                ref={(el) => (contentRef.current[index] = el)}
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? `${contentRef.current[index]?.scrollHeight}px` : '0px',
                  opacity: activeIndex === index ? '1' : '0',
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Up />
      <Footer />
    </>
  );
};

export default FAQ;