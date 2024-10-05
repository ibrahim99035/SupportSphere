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
      question: 'هل يمكنني شراء الأثاث مباشرة عبر المنصة؟',
      answer: 'لا، منصتنا مخصصة لعرض الأثاث والديكورات المنزلية. للحصول على المنتجات، يمكنك التواصل مع المتاجر المدرجة على المنصة مباشرة.',
    },
    {
      question: 'كيف يمكنني التواصل مع المتاجر أو الموردين؟',
      answer: 'يمكنك العثور على معلومات التواصل الخاصة بكل متجر أو مورد في صفحة تفاصيل المنتج، بما في ذلك أرقام الهواتف وعناوين البريد الإلكتروني.',
    },
    {
      question: 'هل تقدمون خدمة التوصيل أو التركيب؟',
      answer: 'نحن لا نقدم خدمات التوصيل أو التركيب. ننصح بالتواصل مع المتاجر لمعرفة إذا كانت تقدم هذه الخدمات.',
    },
    {
      question: 'كيف يمكنني معرفة تفاصيل الأثاث المعروض؟',
      answer: 'كل قطعة أثاث تحتوي على وصف تفصيلي يشمل المقاسات، المواد المستخدمة، والألوان المتاحة. إذا كنت بحاجة إلى مزيد من المعلومات، يمكنك التواصل مع المتجر مباشرة.',
    },
    {
      question: 'هل يمكنني حجز قطعة أثاث عبر المنصة؟',
      answer: 'لا تتوفر خدمة الحجز عبر المنصة. نوصي بالتواصل المباشر مع المتجر المعني للاستفسار عن توافر القطع.',
    },
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