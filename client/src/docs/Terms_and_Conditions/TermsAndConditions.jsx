import React from 'react';
import './TermsAndConditions.css';

import DiyarahLogo from '/icons/SpportSphere.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const TermsAndConditions = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="terms-and-conditions-container">
        <header>
          <h1 className="terms-and-conditions-title">شروط وأحكام الاستخدام</h1>
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

export default TermsAndConditions;
