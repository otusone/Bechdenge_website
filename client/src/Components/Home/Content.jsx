import React from 'react';
import pic1 from '../../assets/contentPic.png';
import pic2 from '../../assets/contentPic2.png';
import pic3 from '../../assets/contentPic3.png';
import pic4 from '../../assets/contentPic4.png';
import pic5 from '../../assets/contentPic5.png';

const Content = () => {
    return (
        <div className="px-4 md:px-10 lg:px-20 mt-10 flex flex-col lg:flex-row justify-between gap-10 items-center mb-10">
            {/* Left Content */}
            <div className="flex-1">
                <div className="flex items-center mb-2">
                    <div className="bg-[#40DDB6] h-3 w-3 mr-2"></div>
                    <h5 className="text-lg leading-tight font-semibold">BECH DENGE</h5>
                </div>
                <h3 className="max-w-[640px] text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug mb-4">
                    From Lead to Sell. No Bullsh*t In Between.
                </h3>
                <p className="text-justify text-gray-700 leading-relaxed text-sm sm:text-base">
                    Welcome to BECH DENGE—where we cut through the fluff and get straight to results. With
                    over 5 years of hands-on experience in property development, real estate sales, branding,
                    marketing, and staffing, I specialize in closing deals fast and building sustainable business
                    growth. From prepping properties to launching bookings, I help businesses scale up, make
                    sales, and achieve their goals quickly.
                </p>
            </div>

            {/* Right Content (Images) */}
            <div className="flex-1 flex justify-center relative mt-8 md:mt-12 lg:mt-0">
                {/* Container for images */}
                <div className="relative w-[200px] sm:w-[220px] h-[200px] sm:h-[220px] mb-10 md:mb-16">
                    <div className="absolute top-0 right-0 w-[150px] sm:w-[204px] h-[150px] sm:h-[204px] rounded-xl overflow-hidden shadow-md">
                        <img src={pic2} alt="pic2" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute bottom-[-10px] left-[-20px] sm:left-[-30px] w-[90px] sm:w-[125px] h-[100px] sm:h-[143px] rounded-xl overflow-hidden shadow-md">
                        <img src={pic1} alt="pic1" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute top-[-25px] sm:top-[-35px] right-[-90px] sm:right-[-134px] w-[90px] sm:w-[125px] h-[100px] sm:h-[143px] rounded-xl overflow-hidden shadow-md">
                        <img src={pic3} alt="pic3" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute bottom-[-70px] sm:bottom-[-100px] right-[-100px] sm:right-[-140px] w-[140px] sm:w-[204px] h-[140px] sm:h-[204px] rounded-xl overflow-hidden shadow-md">
                        <img src={pic4} alt="pic4" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute bottom-[-90px] sm:bottom-[-128px] right-[-10px] w-[90px] sm:w-[125px] h-[100px] sm:h-[143px] rounded-xl overflow-hidden shadow-md">
                        <img src={pic5} alt="pic5" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
