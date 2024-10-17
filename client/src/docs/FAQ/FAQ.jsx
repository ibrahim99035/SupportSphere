import React, { useState, useRef } from 'react';
import './FAQ.css';

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';
import FAQCOM from '../../components/Other/FQACOM';

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
      <FAQCOM/>
      <Up />
      <Footer />
    </>
  );
};

export default FAQ;