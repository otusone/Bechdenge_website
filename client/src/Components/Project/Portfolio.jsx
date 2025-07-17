import React from 'react';
import HotelGyangarh from '../../assets/HotelGyangarh.png';
import DazzleCafe from '../../assets/DazzleCafe.png';
import Dhabalogy from '../../assets/Dhabalogy.png';
import RealEstateSales from '../../assets/Real Estate Sales.png';
import ParijatVentures from "../../assets/Parijat Ventures.png";
import RightIcon from "../../assets/rightIcon.png";

const Portfolio = () => {
    const data = [
        {
            image: HotelGyangarh,
            Name: "Hotel Gyangarh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam."
        },
        {
            image: DazzleCafe,
            Name: "Dazzle Rooftop Café",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam."
        },
        {
            image: Dhabalogy,
            Name: "Dhabalogy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam."
        },
        {
            image: RealEstateSales,
            Name: "Real Estate Sales",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam."
        },
        {
            image: ParijatVentures,
            Name: "Parijat Ventures",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam."
        },
    ];

    return (
        <div className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
            <div className="text-center mb-12">
                <h5 className="text-black text-lg font-medium mb-2">Portfolio</h5>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Projects — Real Results, No Bullsh*t</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mi blandit et ac elit eros, viverra. Elementum pellentesque sed scelerisque pellentesque auctor accumsan.
                </p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
                {data.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between gap-4">
                        <img src={item.image} alt={item.Name} className="w-[376px] h-[376px] object-cover rounded-md mb-4" />
                        <h4 className="text-2xl font-bold text-black">{item.Name}</h4>
                        <p className="text-gray-600 text-sm text-justify">{item.desc}</p>

                        <button className="mt-auto flex items-center gap-2 text-black font-medium w-fit border-b-[2px] border-[#0099FF] pb-2 hover:text-[#0099FF] transition">
                            Read more
                            <img src={RightIcon} alt="arrow" className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>


            <div className="flex justify-center mt-10">
                <button className="bg-black text-white rounded px-6 py-2 hover:bg-gray-800 transition duration-300">
                    See All Portfolio
                </button>
            </div>
        </div>
    );
};

export default Portfolio;
