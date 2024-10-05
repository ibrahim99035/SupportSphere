import React, { useState, useRef } from 'react';

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

import './HelpCenter.css';

const HelpCenter = () => {
  const [activeSection, setActiveSection] = useState('faq');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

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
        <div className="overlay-image"></div>
        <Header />
        <HeroSection />  
        <div className="help-center-container">
            <div className="help-center-header">
                <h1>مرحبًا بك في مركز المساعدة</h1>
                <p>هنا يمكنك العثور على إجابات للأسئلة الشائعة أو التواصل مع فريق الدعم الخاص بنا</p>
            </div>

            <div className="help-center-menu">
                <button
                className={`menu-button ${activeSection === 'faq' ? 'active' : ''}`}
                onClick={() => handleSectionChange('faq')}
                >
                الأسئلة الشائعة
                </button>
                <button
                className={`menu-button ${activeSection === 'support' ? 'active' : ''}`}
                onClick={() => handleSectionChange('support')}
                >
                دعم العملاء
                </button>
                <button
                className={`menu-button ${activeSection === 'inquiry' ? 'active' : ''}`}
                onClick={() => handleSectionChange('inquiry')}
                >
                تقديم استفسار
                </button>
            </div>

            <div className="help-center-content">
                {activeSection === 'faq' && (
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
                )}

                {activeSection === 'support' && (
                <div className="support-section">
                    <h2>دعم العملاء</h2>
                    <p>إذا كنت بحاجة إلى المساعدة، يمكنك التواصل مع فريق الدعم لدينا عن طريق البريد الإلكتروني أو الهاتف.</p>
                    <ul>
                    <li>البريد الإلكتروني: support@example.com</li>
                    <li>الهاتف: 123-456-7890</li>
                    </ul>
                </div>
                )}

                {activeSection === 'inquiry' && (
                <div className="inquiry-section">
                    <h2>تقديم استفسار</h2>
                    <p>إذا كان لديك أي استفسار أو طلب خاص، يمكنك ملء النموذج التالي وسنقوم بالرد عليك في أقرب وقت ممكن.</p>
                    <form className="inquiry-form">
                    <div className="form-group">
                        <label>الاسم</label>
                        <input type="text" placeholder="أدخل اسمك" required />
                    </div>
                    <div className="form-group">
                        <label>البريد الإلكتروني</label>
                        <input type="email" placeholder="أدخل بريدك الإلكتروني" required />
                    </div>
                    <div className="form-group">
                        <label>الاستفسار</label>
                        <textarea placeholder="أدخل استفسارك" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">إرسال الاستفسار</button>
                    </form>
                </div>
                )}
            </div>
        </div> 
        <Up />
        <Footer />
    </>
  );
};

export default HelpCenter;