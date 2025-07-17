import React from 'react';
import Navbar from '../Components/Navbar';


import Hero from '../Components/Home/Hero';
import Service from '../Components/Home/Service';
import Quote from '../Components/Home/Quote';
import Expertise from '../Components/Home/Expertise';
import About from '../Components/Home/About';
import Testimonial from '../Components/Home/Testimonial';
import Blog from '../Components/Home/Blog';
import ContactInfo from '../Components/Home/ContactInfo';
import Footer from '../Components/Footer';













const Home = () => {
   

   

   
    return (
        <div className="w-full">
            <Navbar />
            <Hero />

            <Service />

            <Quote />

           

            <Expertise />

            <About />



           
            <Testimonial />

          


            <Blog />

            

            <ContactInfo />


        


            <Footer />
        </div>
    );
};

export default Home;
