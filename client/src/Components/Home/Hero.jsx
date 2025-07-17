import React from 'react';
import HeroImg from '../../assets/HeroImg.png';

const Hero = () => {
    return (
        <section
            className="relative w-full h-[500px] md:h-[585px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60" />

            {/* Content */}
            <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 py-12 max-w-7xl mx-auto w-full">
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-medium mb-2 font-bevietnam">
                    From Lead to Sell — NO Bullshit In Between.
                </h3>

                <h1 className="text-[36px] sm:text-[52px] md:text-[80px] font-bold leading-tight font-caveat">
                    BECH DENGE
                </h1>

                <p className="text-[15px] sm:text-[16px] md:text-[18px] mt-4 mb-6 leading-relaxed max-w-2xl font-bevietnam">
                    <span className="block">
                        We don’t waste your time. We don’t mess around. You want to SELL? We MAKE IT HAPPEN.
                    </span>
                    <span className="block mt-2">
                        Flats, hotels, restaurants, staff — we close deals fast and hard.
                    </span>
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4">
                    <button className="bg-transparent border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black transition">
                        Get Started Now
                    </button>
                    <button className="bg-transparent border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-black transition">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
