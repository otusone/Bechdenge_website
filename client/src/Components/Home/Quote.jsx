import React from 'react';
import QuoteImage1 from '../../assets/quotepic1.png';
import QuoteImage2 from '../../assets/quotepic2.png';

const Quote = () => {
    return (
        <section className="px-4 sm:px-8 md:px-20 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

                {/* Left: Text Content */}
                <div className="max-w-xl w-full text-center md:text-left">
                    <p className="text-base sm:text-lg font-medium text-gray-600">
                        Affordable renting solutions
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-bevietnam mt-2">
                        Why BECH DENGE?
                    </h3>
                    <ul className="list-disc list-inside space-y-2 sm:space-y-3 text-gray-700 mt-5 text-sm sm:text-base">
                        <li>No fake promises</li>
                        <li>No fancy words</li>
                        <li>No middleman screwing you over</li>
                        <li>Just direct marketing that puts money in your pocket</li>
                    </ul>
                    <button className="mt-6 sm:mt-8 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                        Get a quote
                    </button>
                </div>

                {/* Right: Images */}
                <div className="relative w-full max-w-[320px] sm:max-w-sm mx-auto">
                    <div className="bg-black rounded-[20px] overflow-hidden">
                        <img
                            src={QuoteImage1}
                            alt="Quote 1"
                            className="w-full h-[300px] sm:h-[380px] object-cover rounded-[20px]"
                        />
                    </div>
                    <img
                        src={QuoteImage2}
                        alt="Quote 2"
                        className="w-[140px] sm:w-[190px] md:w-[230px] h-auto object-cover rounded-[20px] absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-14 md:-left-24 bg-black hidden sm:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default Quote;
