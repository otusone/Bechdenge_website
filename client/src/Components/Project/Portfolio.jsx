import React from 'react';
import ProjectCard from './ProjectCard';

import Tiruville from "../../assets/tiruville.png";
import TiruvilleRoom1 from "../../assets/tiruvilleRoom1.png";
import TiruvilleRoom2 from "../../assets/tiruvilleRoom2.png";
import TiruvilleRoom3 from "../../assets/tiruvilleRoom3.png";

import AltitudeApartment from "../../assets/altitudeApartments.png";
import AltitudeRoom1 from "../../assets/altitudeRoom1.png";
import AltitudeRoom2 from "../../assets/altitudeRoom2.png";
import AltitudeRoom3 from "../../assets/altitudeRoom3.png";

import Gyangarh from "../../assets/gyangarh.png";
import GyangarhRoom1 from "../../assets/gyangarhRoom1.png";
import GyangarhRoom2 from "../../assets/gyangarhRoom2.png";
import GyangarhRoom3 from "../../assets/gyangarhRoom3.png";


import Dazzle from "../../assets/dazzle.png";
import DazzleRoom1 from "../../assets/dazzleRoom1.png";
import DazzleRoom2 from "../../assets/dazzleRoom2.png";
import DazzleRoom3 from "../../assets/dazzleRoom3.png";

import Navratna from "../../assets/navratna.png";
import NavratnaRoom1 from "../../assets/navratnaRoom1.png";
import NavratnaRoom2 from "../../assets/navratnaRoom2.png";
import NavratnaRoom3 from "../../assets/navratnaRoom3.png";



const Portfolio = () => {
    const data = [
        {
            name: "Tiruville Apartments",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            image1: Tiruville,
            image2: TiruvilleRoom1,
            image3: TiruvilleRoom2,
            image4: TiruvilleRoom3
        },
        {
            name: "Altitude Apartments",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            image1: AltitudeApartment,
            image2: AltitudeRoom1,
            image3: AltitudeRoom2,
            image4: AltitudeRoom3
        },
        {
            name: "Hotel Gyangarh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            image1: Gyangarh,
            image2: GyangarhRoom1,
            image3: GyangarhRoom2,
            image4: GyangarhRoom3
        },
        {
            name: "Dazzle Rooftop",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            image1: Dazzle,
            image2: DazzleRoom1,
            image3: DazzleRoom2,
            image4: DazzleRoom3
        },
        {
            name: "Navratna Skylight",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            image1: Navratna,
            image2: NavratnaRoom1,
            image3: NavratnaRoom2,
            image4: NavratnaRoom3
        },
    ];

    return (
        <div className="px-6 md:px-20 py-16 bg-[#F9F9F9]">
            {/* Heading Section */}
            <div className="text-center mb-12">
                <h5 className="text-black text-lg font-medium mb-2">Portfolio</h5>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Projects — Real Results, No Bullsh*t
                </h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt mi
                    blandit et ac elit eros, viverra. Elementum pellentesque sed scelerisque
                    pellentesque auctor accumsan.
                </p>
            </div>

            {/* Project Cards */}
            <div className="space-y-10">
                {data.map((item, index) => (
                    <ProjectCard
                        key={index}
                        name={item.name}
                        desc={item.desc}
                        image1={item.image1}
                        image2={item.image2}
                        image3={item.image3}
                        image4={item.image4}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
