import React from 'react';
import HeroImg from '../../assets/HeroImg.png';

const Hero = () => {
    return (
        <section
            className="relative w-full h-[400px] sm:h-[500px] md:h-[585px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 text-white px-4 sm:px-8 md:px-20 py-12 max-w-7xl mx-auto w-full text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-medium mb-2 font-bevietnam">
                    From Lead to Sell — NO Bullshit In Between.
                </h3>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight font-caveat">
                    BECH DENGE
                </h1>

                <p className="text-sm sm:text-base md:text-lg mt-4 mb-6 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                    We don’t waste your time. We don’t mess around. You want to SELL? We MAKE IT HAPPEN.
                    <br className="hidden sm:block" />
                    Flats, hotels, restaurants, staff — we close deals fast and hard.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                    <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded hover:bg-white hover:text-black transition">
                        Get Started Now
                    </button>
                    <button className="bg-transparent border border-white text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded hover:bg-white hover:text-black transition">
                        View All Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
