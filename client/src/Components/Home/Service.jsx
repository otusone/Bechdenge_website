import React from 'react';
import realestate from '../../assets/realEstate.png';
import villa from '../../assets/villa.png';
import restaurants from '../../assets/restaurants.png';
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
            <div className="container mx-auto px-6 md:px-20 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-semibold font-bevietnam leading-snug">
                            We Always Provide The <br /> Best Service
                        </h3>
                    </div>
                    <div className="max-w-xl">
                        <h4 className="text-lg md:text-xl font-semibold mb-2 font-bevietnam">Services</h4>
                        <p className="text-base text-gray-700 text-justify">
                            While we can customize your purchasing plan to suit your needs, most clients prefer our
                            renting services for their flexibility, convenience, and cost-effectiveness.
                        </p>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="bg-[#83A790] h-[2px] w-[90%] mx-auto" />

            {/* Cards */}
            <div className="container mx-auto px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {cardData.map((card, index) => (
                    <div key={index} className="relative">
                        <SectionCards image={card.image} h3={card.h3} desc={card.desc} />

                        {/* Right arrow on third card only */}
                        {index === 2 && (
                            <button
                                className="absolute hidden md:block top-1/2 right-[-28px] transform -translate-y-1/2 
                                    bg-black p-2 rounded-full shadow-lg transition hover:bg-gray-800"
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
