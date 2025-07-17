import React from 'react';

const Banner = () => {
    return (
        <div className="bg-black text-white py-12 px-6 md:px-20 m-20 mt-5 rounded-[20px] ">
            <div className="max-w-4xl mx-auto flex flex-col gap-6">
                <h3 className="text-3xl md:text-4xl font-bold">Looking for Us?</h3>
                <h4 className="text-xl md:text-2xl font-semibold text-yellow-400">+91 85299 25583</h4>

                <p className="text-white/70 leading-relaxed text-justify">
                    Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in.
                    Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis elit magna magna at.
                    Fames etiam quis diam nunc. Gravida auctor fermentum morbi vulputate ac egestas orci.
                    Pretium convallis id diam sed commodo vestibulum lobortis volutpat praesent. Cras nulla
                    semper tellus enim malesuada ornare curabitur dui.
                </p>

                <button className="bg-[#FF9E0C] text-white font-semibold px-6 py-3 rounded-[12px] shadow hover:bg-gray-200 transition duration-300 w-fit">
                    Book now
                </button>
            </div>
        </div>
    );
};

export default Banner;
