import React from 'react';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';

import NewsMain from '../components/Other/NewsMain';

import Icon from '/icons/SpportSphere.png';

const News = () => {

    return(
        <div id='news-page'>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <h1>منصة نطاق الدعم - الأخبار</h1>
            <NewsMain />
            <div id='news-page-logo'>
                <img src={Icon} alt="Malls Icon" />
            </div>
            <Up />
            <Footer />
        </div>
    );

};

export default News;