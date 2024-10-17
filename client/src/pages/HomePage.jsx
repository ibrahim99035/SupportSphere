import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import PartenersSlider from '../components/Sliders/PartenersSlider';
import PopUpCardGrid from '../components/Other/PopUpCardGrid';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import LiveChatWidget from '../components/Home/LiveChatWidget';
import AnimatedInfographic from '../components/Home/AnimatedInfographic'; 
import Moodboard from '../components/Home/Moodboard';
import CountdownTimer from '../components/Home/PromotionsCountDown';
import SeasonalTips from '../components/Home/SeasonalTips';
import FAQCOM from '../components/Other/FQACOM';
import SubscriptionForm from '../components/Home/SubscriptionForm'

const HomePage = () => { 

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <PopUpCardGrid />
            <LiveChatWidget />
            <hr />
            <AnimatedInfographic />
            <hr />
            <Moodboard />
            <hr />
            <CountdownTimer />
            <hr />
            <SeasonalTips />
            <hr />
            <FAQCOM />
            <hr />
            <SubscriptionForm />
            <hr />
            <PartenersSlider />
            <Up />
            <Footer />
        </div>
    );

};

export default HomePage;