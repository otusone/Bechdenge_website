import React from 'react';

import About1 from '../../assets/aboutPic1.png';
import About2 from '../../assets/aboutPic2.png';
import tick from '../../assets/tick.png';

const About = () => {
    return (
        <div className="py-16 px-4 sm:px-8 lg:px-20 bg-white">
            <div className="flex flex-col md:flex-row items-start gap-12 mt-12">
                {/* Left Side: Images */}
                <div className="relative w-full md:w-1/2 max-w-md mx-auto">
                    <div className="rounded-2xl border-t-[10px] border-r-[10px] bg-black overflow-hidden">
                        <img
                            src={About1}
                            alt="Main About"
                            className="w-full h-auto object-cover rounded-2xl"
                        />
                    </div>
                    <img
                        src={About2}
                        alt="Overlay About"
                        className="absolute bottom-[-30px] right-[-30px] w-[60%] sm:w-[50%] md:w-[231px] md:h-[265px] rounded-2xl border-[10px] border-black object-cover bg-black"
                    />
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full md:w-1/2 max-w-2xl text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
                        Welcome To Our <br /> Pro-cleaning Company!
                    </h2>

                    <p className="text-gray-700 text-sm sm:text-base mb-8 text-justify">
                        We are a professional and reliable cleaning service company
                        offering top-notch solutions for both homes and businesses.
                        With attention to detail and a commitment to excellence, we
                        guarantee your satisfaction — every time.
                    </p>

                    {/* Services List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {[
                            "Real Estate",
                            "Hotel & Villas",
                            "Restaurants",
                            "Google Reviews & Reputation",
                            "Hiring & Training",
                            "Affordable Prices",
                        ].map((item, index) => (
                            <div key={index} className="flex items-center bg-[#F5F4F4] px-3 py-2 rounded gap-2">
                                <img src={tick} alt="Tick" className="w-5 h-5" />
                                <p className="text-sm text-gray-800">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
                            Book Now
                        </button>
                        <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
                            Know More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
