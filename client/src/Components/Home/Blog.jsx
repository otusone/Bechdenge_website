import React from 'react';
import BlogCards from '../blogCards';

import Navratan from '../../assets/navratan.png';
import Tiruville from '../../assets/tiruville.png';
import Gyangarh from '../../assets/gyangarh.png';

const Blog = () => {
    const blogCards = [
        {
            image: Navratan,
            subhead: 'JOHN HELTON   JAN 6, 2025',
            h3: 'Navratan Skylight',
            desc: (
                <>
                    As the CEO & Marketing Head, I led the
                    development of a 10-floor apartment
                    building with 20 premium flats in Udaipur.
                </>
            ),
        },
        {
            image: Tiruville,
            subhead: 'JOHN HELTON   JAN 6, 2025',
            h3: 'Tiruville Apartments',
            desc: (
                <>
                    Located in the heart of Fatehpura,
                    Udaipur, I’m hands-on as CEO &
                    Marketing Head for these fully developed
                    apartments.
                </>
            ),
        },
        {
            image: Gyangarh,
            subhead: 'JOHN HELTON   JAN 6, 2025',
            h3: 'Hotel Gyangarh',
            desc: (
                <>
                    Understand the numerous advantages of
                    scheduling regular professional cleanings.
                    From improving indoor air...
                </>
            ),
        },
    ];

    return (
        <section className="px-6 md:px-20 py-12">
            <h3 className="text-[32px] md:text-[44px] font-semibold text-center md:text-left mb-6">
                How It Works – Real Projects, Real Results
                <br className="hidden md:block" />
                Tips & Service News!
            </h3>

            <hr className="bg-[#83A790] h-[2px] w-full mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {blogCards.map((item, index) => (
                    <BlogCards
                        key={index}
                        image={item.image}
                        subhead={item.subhead}
                        h3={item.h3}
                        desc={item.desc}
                    />
                ))}
            </div>
        </section>
    );
};

export default Blog;
