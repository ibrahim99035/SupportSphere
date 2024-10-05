import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Up from '../components/Other/Up';
import Login from '../components/Auth/Login';
import HeroSection from '../components/Other/HeroSection';
import PartenersSlider from '../components/Sliders/PartenersSlider';

const Auth = () =>{

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <Login />
            <PartenersSlider />
            <Up />
            <Footer />
        </div>
    );
}

export default Auth;