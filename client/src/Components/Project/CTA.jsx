import React from 'react';

const CTA = () => {
    return (
        <div className="bg-[#333333] text-white py-16 px-6 md:px-20 mt-16 mb-20 rounded-[4px]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

                {/* Text Section */}
                <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">
                        Do you have a project in mind?
                    </h4>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br className="hidden md:block" />
                        Amet diam in est pharetra porttitor libero.
                    </p>
                </div>

                {/* Buttons Section */}
                <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
                    <button className="bg-[#0099FF] hover:bg-[#007acc] text-white px-6 py-3 rounded-lg transition font-medium">
                        Let's Talk
                    </button>
                    <button className="bg-[#0099FF] hover:bg-[#007acc] text-white px-6 py-3 rounded-lg transition font-medium">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
