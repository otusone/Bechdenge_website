import React from "react";
import RightIcon from "../../assets/rightIcon.png";
import RightArrow from "../../assets/rightArrow.png";

const ProjectCard = ({ name, desc, image1, image2, image3, image4 }) => {
    const images = [image1, image2, image3, image4];

    return (
        <div className="rounded-lg bg-white w-full max-w-[1317px] p-6 mb-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{name}</h3>
                <button className="flex items-center gap-2 text-sm font-medium border-b-2 border-[#0099FF]">
                    View More
                    <img src={RightIcon} alt="View More" className="w-4 h-4" />
                </button>
            </div>

            {/* Description */}
            <div className="mb-6 max-w-md">
                <p className="text-gray-600 text-sm text-justify mb-2">{desc}</p>
                <button className="flex items-center gap-2 text-sm font-medium border-b-2 border-[#0099FF]">
                    See More
                    <img src={RightIcon} alt="See More" className="w-4 h-4" />
                </button>
            </div>

            {/* Images Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${name} ${i + 1}`}
                        className="rounded-md w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
                    />
                ))}
            </div>

            {/* Arrow Button */}
            <div className="flex justify-end">
                <button className="bg-black p-3 rounded-full hover:bg-gray-800 transition">
                    <img src={RightArrow} alt="Arrow" className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
