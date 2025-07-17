import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/About/Hero'
import Video from '../Components/About/Video';
import Info from '../Components/About/Info';
import Review from '../Components/About/Review';
import Questions from '../Components/About/Questions';
import Banner from '../Components/About/Banner';
import Footer from '../Components/Footer'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Video />
            <Info />
            <Review />
            <Questions />
            <Banner />
            <Footer />

        </div>
    );
};

export default AboutUs;
