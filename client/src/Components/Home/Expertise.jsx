import React from 'react';
import SectionCards from '../sectionCards';

import realEstate1 from '../../assets/realEstate1.png';
import hotel from '../../assets/hotel.png';
import restaurant1 from '../../assets/restaurant1.png';

const Expertise = () => {
    const cardData2 = [
        {
            image: realEstate1,
            h3: (
                <>
                    Real Estate <br /> Made Properties
                </>
            ),
            desc: (
                <>
                    He is an expert cleaning staff member
                    who provides thorough cleaning with
                    precision.
                </>
            ),
        },
        {
            image: hotel,
            h3: (
                <>
                    Hotel & Booking <br /> Systems
                </>
            ),
            desc: (
                <>
                    We know how to boost your
                    occupancy rates and enhance
                    your online reputation.
                </>
            ),
        },
        {
            image: restaurant1,
            h3: (
                <>
                    Restaurant Branding <br /> & Launch
                </>
            ),
            desc: (
                <>
                    I’ll get your restaurant ready to launch,
                    develop your brand identity, train your
                    staff, and drive traffic.
                </>
            ),
        },
    ];

    return (
        <section className="px-6 md:px-20 py-10">
            {/* Heading */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
                {/* Left Heading */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        What We Do – No Talk, All <br /> Action
                    </h2>
                </div>

                {/* Right Text */}
                <div className="max-w-md">
                    <h4 className="text-xl font-semibold mb-2">Expertise</h4>
                    <p className="text-base text-gray-700 text-justify">
                        Here’s a quick look at what we’re all about:
                    </p>
                </div>
            </div>

            {/* Divider */}
            <hr className="bg-[#83A790] h-[2px] w-full mb-10" />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cardData2.map((card, index) => (
                    <SectionCards
                        key={index}
                        image={card.image}
                        h3={card.h3}
                        desc={card.desc}
                        showButton={false}
                    />
                ))}
            </div>
        </section>
    );
};

export default Expertise;
