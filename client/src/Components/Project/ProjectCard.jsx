import React from "react";
import RightIcon from "../../assets/rightIcon.png";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ name, desc, images }) => {
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`/images/${encodeURIComponent(name)}`, { state: { images, name } });
    };

    return (
        <div className="rounded-lg bg-white w-full max-w-[1317px] p-6 mb-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{name}</h3>
                <button
                    className="flex items-center gap-2 text-sm font-medium border-b-2 border-[#0099FF]"
                    onClick={handleViewMore}
                >
                    View More
                    <img src={RightIcon} alt="View More" className="w-4 h-4" />
                </button>
            </div>

            {/* Description */}
            <div className="mb-6 max-w-md">
                <p className="text-gray-600 text-sm text-justify mb-2">{desc}</p>
            </div>

            {/* Images Row (show first 4 images only) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {images.slice(0, 4).map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`${name} ${i + 1}`}
                        className="rounded-md w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
