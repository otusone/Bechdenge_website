import React from 'react';
import reviewLogo from '../assets/review.png';

const ReviewCard = ({ text, image, compName, name }) => {
    return (
        <div className="max-w-md mx-auto p-6 bg-[#F9F9F9] rounded-[10px]">
            {/* Top Quote Icon and Review Text */}
            <div className="mb-8 text-left">
                <img src={reviewLogo} alt="Quote" className=" w-[30px] h-[32px] mb-4" />
                <p className="text-gray-700 text-sm">{text}</p>
            </div>

            {/* Bottom Profile Section */}
            <div className="relative bg-black text-white rounded-[20px] pt-14 mt-25 pb-6 px-6 text-center">
                {/* Image Overlapping */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <img
                        src={image}
                        alt="Reviewer"
                        className="w-15 h-15 rounded-full  object-cover shadow-lg"
                    />
                </div>

                {/* Info */}
                <p className="text-sm text-white/60 font-medium mt-4">{compName}</p>
                <p className="text-lg text-white">{name}</p>
            </div>
        </div>
    );
};

export default ReviewCard;
