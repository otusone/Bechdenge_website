import React from 'react';
import QuoteImage1 from '../../assets/quoteImage1.png';
import QuoteImage2 from '../../assets/quoteImage2.png';

const Quote = () => {
    return (
        <section className="px-6 md:px-20 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14">
                {/* Left: Text Content */}
                <div className="max-w-xl w-full">
                    <p className="text-lg font-medium text-gray-600">Affordable renting solutions</p>
                    <h3 className="text-2xl md:text-3xl font-bold font-bevietnam mt-2">
                        Why BECH DENGE?
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-gray-700 mt-5 text-sm md:text-base">
                        <li>No fake promises</li>
                        <li>No fancy words</li>
                        <li>No middleman screwing you over</li>
                        <li>Just direct marketing that puts money in your pocket</li>
                    </ul>
                    <button className="mt-8 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
                        Get a quote
                    </button>
                </div>

                {/* Right: Images */}
                <div className="relative w-full max-w-sm">
                    <div className="border-t-[10px] border-r-[10px] bg-black rounded-[20px] overflow-hidden">
                        <img
                            src={QuoteImage1}
                            alt="Quote 1"
                            className="w-full h-[380px] object-cover rounded-[20px]"
                        />
                    </div>
                    <img
                        src={QuoteImage2}
                        alt="Quote 2"
                        className="w-[200px] h-[240px] object-cover rounded-[20px] border-[10px] border-black absolute -bottom-10 -left-10 bg-black hidden sm:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default Quote;
