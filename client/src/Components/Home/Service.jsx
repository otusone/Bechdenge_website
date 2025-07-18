import React from 'react';
import realestate from '../../assets/realEstate.png';
import villa from '../../assets/hotels&villas.png';
import restaurants from '../../assets/HeroImg.png';
import RightArrow from '../../assets/rightArrow.png';

import SectionCards from '../sectionCards';

const Service = () => {
    const cardData = [
        {
            image: realestate,
            h3: 'Real Estate',
            desc: (
                <>
                    Whether you're looking for a cozy flat, a
                    luxurious villa, or an open plot for future
                    development, we offer flexible options
                    tailored to your needs.
                </>
            ),
        },
        {
            image: villa,
            h3: 'Hotels & Villas',
            desc: (
                <>
                    We always strive to deliver the finest
                    hospitality experience — whether you're
                    staying in one of our elegant hotels or relaxing
                    in a private villa.
                </>
            ),
        },
        {
            image: restaurants,
            h3: 'Restaurant',
            desc: (
                <>
                    From concept to crowd, we help you launch
                    your restaurant, promote it with precision, and
                    pack it with happy customers. Your culinary
                    dream.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white">
            {/* Top Heading */}
            <div className="container mx-auto px-4 sm:px-10 md:px-20 py-8 md:py-12">
                <h3 className="text-2xl sm:text-3xl md:text-[44px] font-semibold leading-snug">
                    We Always Provide The <br className="hidden sm:block" /> Best Service
                </h3>
            </div>

            {/* Divider */}
            <hr className="bg-[#83A790] h-[2px] w-[90%] mx-auto md:ml-20" />

            {/* Cards */}
            <div className="container mx-auto px-4 sm:px-10 md:px-20 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {cardData.map((card, index) => (
                    <div key={index} className="relative">
                        <SectionCards image={card.image} h3={card.h3} desc={card.desc} />

                        {/* Arrow Button - Last Card Only */}
                        {index === 2 && (
                            <button
                                className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 
                                           bg-black p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
                            >
                                <img src={RightArrow} alt="arrow" className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
