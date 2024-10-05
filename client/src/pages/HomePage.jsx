import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import MallSlider from '../components/Sliders/MallSlider'
import StoreSlider from '../components/Sliders/StoreSlider';
import CardGrid from '../components/Product/CardGrid';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import PopUpCardGrid from '../components/Other/PopUpCardGrid';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import Logo from '/icons/SpportSphere.png'

const HomePage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <PopUpCardGrid />
            <PartenersSlider />
            <Up />
            <Footer />
        </div>
    );

};

export default HomePage;