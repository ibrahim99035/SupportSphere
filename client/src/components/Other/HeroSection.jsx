import React from 'react';
import '../../CSS/HeroSection.css';
import Logo from '/icons/SpportSphere.png'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">نطاق الدعم</h1>
          <p className="hero-subtitle">الحلول الأسرع لأعطال سيارتك في دائرة من الدعم - خبراء الإصلاح في متناول يدك</p>
          <img src={Logo} alt="Hero Section Logo" /> <br />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;