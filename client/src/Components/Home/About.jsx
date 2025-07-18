import React from 'react';

import About2 from '../../assets/aboutPic2.png';
import About1 from '../../assets/restaurant1.png';
import tick from '../../assets/tick.png';

const About = () => {
    return (
        <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
            <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 mt-8">

                {/* Left Side: Images */}
                <div className="relative w-full md:w-1/2 max-w-md mx-auto md:mx-0">
                    <img
                        src={About1}
                        alt="Main About"
                        className="w-[320px] sm:w-[365px] h-[340px] sm:h-[394px] rounded-[20px] border-t-[10px] border-l-[10px] "
                    />

                    <img
                        src={About2}
                        alt="Overlay About"
                        className="absolute bottom-[-30px] right-[-30px] sm:bottom-[-40px] sm:right-[-50px] w-[180px] sm:w-[230px] h-[200px] sm:h-[265px] rounded-2xl shadow-lg"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2 max-w-2xl text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
                        REAL ESTATE with a <br />REALITY CHECK
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base mb-8 text-justify">
                        No hype, no fluff—just real numbers, real returns, and the real picture.
                        Because your family's future deserves more than brochures and buzzwords.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                        {[
                            "Real Estate",
                            "Hotel & Villas",
                            "Restaurants",
                            "Google Reviews & Reputation",
                            "Hiring & Training",
                            "Affordable Prices",
                            "Lease",
                            "Sell property"
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-[#F5F4F4] px-3 py-2 rounded gap-2"
                            >
                                <img src={tick} alt="Tick" className="w-5 h-5" />
                                <p className="text-sm text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition transform hover:scale-105">
                            Book Now
                        </button>
                        <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition transform hover:scale-105">
                            Know More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
