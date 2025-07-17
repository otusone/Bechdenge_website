import React from 'react';

const BlogCards = ({ image, subhead, h3, desc }) => {
    return (
        <div className="bg-white rounded-[30px] shadow-md overflow-hidden flex flex-col w-full">
            {/* Image Section */}
            <div className="h-[230px] md:h-[270px]">
                <img
                    src={image}
                    alt={typeof h3 === 'string' ? h3 : 'Blog Image'}
                    className="w-full h-full object-cover rounded-t-[30px]"
                />
            </div>

            {/* Text Section */}
            <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                    <p className="text-xs text-gray-500 text-center">{subhead}</p>
                    <h4 className="text-lg font-semibold mt-1 mb-3 text-center">{h3}</h4>
                    <p className="text-sm text-gray-700 text-justify">{desc}</p>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                    <button className="w-full py-2 px-4 border border-black text-sm font-medium text-black rounded-[10px] hover:bg-black hover:text-white transition">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogCards;
