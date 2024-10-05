import React from 'react';
import './IntellectualPropertyRights.css';
import DiyarahLogo from '/icons/SpportSphere.png'

import Header from '../../components/Layout/Header'
import HeroSection from '../../components/Other/HeroSection';
import Footer from '../../components/Layout/Footer';
import Up from '../../components/Other/Up';

const IntellectualPropertyRights = () => {
  return (
    <>
      <div className='overlay-image'></div>
      <Header />
      <HeroSection />
      <Up />
      <div className="intellectual-property-rights-container">
        <header>
          <h1 className="intellectual-property-rights-title">حقوق الملكية الفكرية</h1>
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

export default IntellectualPropertyRights;
