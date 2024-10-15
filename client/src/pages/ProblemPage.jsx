import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import PopUpCardGrid from '../components/Other/PopUpCardGrid';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import PostComponent from '../components/Problem/PostComponent';

const ProblemPage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <PostComponent />
            <Up />
            <Footer />
        </div>
    );

};

export default ProblemPage;