import React from 'react';
import './PrivacyPloicy.css'; 
import DiyarahLogo from '/icons/SpportSphere.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const PrivacyPolicy = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="privacy-policy-container">
        <header>
          <h1 className="privacy-policy-title">سياسة الخصوصية</h1>
        </header>
        <section>
          <h2>سيتم إضافتها لاحقا</h2>
          <p>
          </p>
        </section>

        <div id='plogoDiv'>
          <img src={DiyarahLogo} alt="Company Logo" className="plogo" loading="lazy" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
