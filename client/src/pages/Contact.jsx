import React from 'react';
import '../CSS/Contact.css'; 
import Logo from '/icons/SpportSphere.png';
import TinyLogo from '/icons/SpportSphere.png';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import HeroSection from '../components/Other/HeroSection';

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      
      <h1>معارض الضجيج للأثاث - تواصل معنا</h1>
      <div id="ContactPageLogo">
        <img src={Logo} alt="Malls Logo" />
      </div>
      <div className='overlay-image'></div>
      <div className="contact-us">
        <h2>تواصل معنا</h2>
        <p>نحب أن نسمع منك, تواصل معنا عبر حساباتنا على وسائل التواصل الاجتماعي, أو أرسل لنا رسالة.</p>

        <form className="contact-form">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" id='facebookIcon'>
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" id='twitterIcon'>
              <FaSquareXTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" id='instgramIcon'>
              <FaSquareInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id='linkedIcon'>
              <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id='youtubeIcon'>
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" id='tiktokIcon'>
              <AiFillTikTok />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" id='whatsappIcon'>
              <FaSquareWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" id='telegramIcon'>
              <FaTelegramPlane />
            </a>
            <a href="mailto:contact@example.com" target="_blank" rel="noopener noreferrer" id='gmailIcon'>
              <SiGmail />
            </a>
          </div>
          <input type="text" placeholder="اسمكك" required />
          <input type="email" placeholder="بيردك الالكتروني" required />
          <textarea placeholder="رسالتك" required></textarea>
          <button type="submit">أرسل الأن !</button>
        </form>
      </div>
      <div id="ContactPageLogoTiny">
        <img src={TinyLogo} alt="Malls Logo" />
      </div>
      <Footer />
      <Up />
    </div>
  );
}

export default Contact;