import React from 'react';

const Hero = () => {
    return (
        <div className="overflow-x-hidden">
            {/* Header */}
            <div className="text-center p-10">
                <h3 className="text-4xl font-bold mb-2">About Us</h3>
                <p><span className="text-gray-700">Home /</span> About Us</p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 flex flex-col lg:flex-row gap-10">

                {/* Left Column */}
                <div className="w-full lg:w-1/3">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Less talk.<br />More doing
                    </h2>
                </div>

                {/* Middle Column */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Real Estate – Made Properties</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            We focus on fully prepped properties—whether it's a premium apartment project or a
                            ready-to-sell development.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Restaurant Branding & Launch</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            I’ll get your restaurant ready to launch, develop your brand identity, train your staff, and drive
                            buzz that packs your place with customers.
                        </p>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Hotel & Booking Systems</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            We know how to boost your occupancy rates and enhance your online reputation. From
                            killer reviews to booking blitzes, we make sure your rooms fill.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Staffing & Training</h3>
                        <p className="text-sm text-gray-700 text-justify">
                            Forget about freeloaders. We hire rockstar staff and give them the training they need to
                            deliver results that align with your business goals.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Hero;
