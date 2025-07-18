import React from 'react';
import Arrow from '../assets/arrowIcon.png';

const Frame1Cards = ({ image, h3, desc, showButton = true }) => {
    return (
        <div className="bg-white rounded-2xl hover:shadow-md overflow-hidden w-full max-w-[370px] mx-auto">
            {/* Image */}
            <img
                src={image}
                alt={h3}
                className="w-full h-[262px] object-cover"
            />

            {/* Text */}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{h3}</h3>
                <p className="text-sm text-[#666666] text-justify mb-4">
                    {desc}
                </p>

                {/* Button */}
                {showButton && (
                    <button className="flex items-center gap-2 border border-[#111D15] rounded px-4 py-2 text-[#111D15] font-semibold hover:bg-black hover:text-white transition">
                        Get Now
                        <img src={Arrow} alt="Arrow" className="w-3 h-3 mt-[1px]" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Frame1Cards;
