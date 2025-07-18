import React from "react";
import MarketingImage from "../../assets/marketing.png";
import PropertyImage from "../../assets/Property.png";
import MenuImage from "../../assets/Menu.png";
import StaffImage from "../../assets/Staff.png";

const services = [
    {
        title: "Marketing & Branding",
        description:
            "We focus on fully prepped properties—whether it's a premium apartment project or a ready-to-sell development.",
        image: MarketingImage,
        reverse: false,
    },
    {
        title: "Property Branding",
        description:
            "I handle everything from property branding and graphic design to making sure your project gets the attention it deserves in the market.",
        image: PropertyImage,
        reverse: true,
    },
    {
        title: "Menu & Staff Development",
        description:
            "I help develop your brand identity in food or services with menu design and staff training to ensure your team represents the brand’s best.",
        image: MenuImage,
        reverse: false,
    },
    {
        title: "Staff Recruitment & Training",
        description:
            "Building teams that get things done right—whether it's for a hotel, restaurant, or real estate development.",
        image: StaffImage,
        reverse: true,
    },
];

const Marketing = () => {
    return (
        <div>
            {/* Header */}
            <div className="text-center p-10">
                <h3 className="text-4xl font-bold mb-2">Services</h3>
                <p>
                    <span className="text-gray-700">Home /</span> Services
                </p>
            </div>

            {/* Content Sections */}
            <div className="px-6 md:px-20">
                <h2 className="text-2xl md:text-3xl font-semibold mb-10">
                    Contract Work – Marketing, Branding, & Staff Development
                </h2>

                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-6 mb-10 ${service.reverse ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text Section */}
                        <div className="flex-1">
                            <h5 className="text-xl font-medium mb-4">{service.title}</h5>
                            <p className="text-gray-700 leading-relaxed">
                                {service.description}
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="flex-2">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full max-w-[849px] h-auto rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marketing;
