import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const AllImagesPage = () => {
    const { cardName } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { images, name } = location.state || { images: [], name: cardName };

    if (!images.length) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-xl font-bold">No images found.</h2>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate("/")}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-10 lg:px-20 mt-10">
            <h1 className="text-3xl font-bold mb-6">{name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, i) => (
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

export default AllImagesPage;
