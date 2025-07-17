import React from 'react';
import infoPic from '../../assets/Img.png';

const Info = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

                {/* Left Text Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who Runs BECH DENGE?</h2>

                    <p className="text-lg font-semibold mb-2">About Akshi Tak:</p>

                    <p className="text-gray-700 mb-4 text-justify">
                        I own hotels and restaurants. I train teams. I run marketing. <br />
                        No fluff, no gimmicks — just real experience driving real sales.
                        <br /><br />
                        <strong>BECH DENGE</strong> = Hands-on execution backed by ownership.
                    </p>

                    <div className="mb-4">
                        <p className="font-semibold mb-2">Credentials:</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Owner, Hotel Gyangarh</li>
                            <li>Founder, Dazzle Rooftop Café</li>
                            <li>₹6L consulting project for Dhabalogy</li>
                            <li>Master’s in Communication, NYIT</li>
                        </ul>
                    </div>

                    <p className="text-gray-800 font-medium">
                        We do what we say and we get results.
                    </p>
                </div>

                {/* Right Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <img
                        src={infoPic}
                        alt="Founder Info"
                        className="rounded-lg shadow-lg w-full max-h-[410px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Info;
