import React from 'react';

const Video = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 overflow-x-hidden">
            {/* Video Section */}
            <div className="w-full aspect-video mb-10 rounded-xl overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Promo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h2 className="text-5xl font-bold text-black">20k+</h2>
                    <p className="text-black font-semibold mt-2">Happy Customers</p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold text-black">540+</h2>
                    <p className="text-black font-semibold mt-2">Count of Cars</p>
                </div>

                <div>
                    <h2 className="text-5xl font-bold text-black">25+</h2>
                    <p className="text-black font-semibold mt-2">Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Video;
