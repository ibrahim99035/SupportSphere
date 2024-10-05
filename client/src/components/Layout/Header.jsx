import React, { useState } from 'react';
import '../../CSS/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    // Toggle login state (for demo purposes)
    setLoggedIn(!loggedIn);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/icons/SpportSphere.png" alt="Logo" />
      </div>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">الرئيسية</a></li>
          <li><a href="/about-us">عنا</a></li>
          <li><a href="/contact-us">تواصل معنا</a></li>
        </ul>
      </nav>
      <div className="header-right">
        {!loggedIn ? (
          <button className="join-us-button" onClick={handleLogin}>إنضم الأن</button>
        ) : (
          <div className="user-icon" onClick={handleLogin}>
            <img src="/icons/user-icon.png" alt="User Icon" />
          </div>
        )}
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;