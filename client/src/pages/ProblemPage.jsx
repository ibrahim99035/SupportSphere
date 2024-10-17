import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import HeroSection from '../components/Other/HeroSection';
import Up from '../components/Other/Up';
import PostComponent from '../components/Problem/PostComponent';

const ProblemPage = () => {

    return(
        <div>
            <div className="overlay-image"></div>
            <Header />
            <HeroSection />
            <br /> <br />
            <PostComponent />
            <br /> <br />
            <Up />
            <Footer />
        </div>
    );

};

export default ProblemPage;