import React from 'react';
import ProjectCard from './ProjectCard';

import Tiruville from "../../assets/tiruville.png";
import TiruvilleRoom1 from "../../assets/tiruvilleRoom1.png";
import TiruvilleRoom2 from "../../assets/tiruvilleRoom2.png";
import TiruvilleRoom3 from "../../assets/tiruvilleRoom3.png";
import TiruvilleRoom5 from "../../assets/tiruvilleRoom5.png";
import TiruvilleRoom6 from "../../assets/tiruvilleRoom6.png";
import TiruvilleRoom7 from "../../assets/tiruvilleRoom7.png";
import TiruvilleRoom8 from "../../assets/tiruvilleRoom8.png";
import TiruvilleRoom9 from "../../assets/tiruvilleRoom9.png";

import AltitudeApartment from "../../assets/altitudeApartments.png";
import AltitudeRoom1 from "../../assets/altitudeRoom1.png";
import AltitudeRoom2 from "../../assets/altitudeRoom2.png";
import AltitudeRoom3 from "../../assets/altitudeRoom3.png";
import AltitudeRoom4 from "../../assets/altitudeRoom4.png";
import AltitudeRoom5 from "../../assets/altitudeRoom5.png";
import AltitudeRoom6 from "../../assets/altitudeRoom6.png";
import AltitudeRoom7 from "../../assets/altitudeRoom7.png";
import AltitudeRoom8 from "../../assets/altitudeRoom8.png";



import Gyangarh from "../../assets/gyangarh.png";
import GyangarhRoom1 from "../../assets/gyangarhRoom1.png";
import GyangarhRoom2 from "../../assets/gyangarhRoom2.png";
import GyangarhRoom3 from "../../assets/gyangarhRoom3.png";
import GyangarhRoom4 from "../../assets/gyangarhRoom4.png";
import GyangarhRoom5 from "../../assets/gyangarhRoom5.png";
import GyangarhRoom6 from "../../assets/gyangarhRoom6.png";
import GyangarhRoom7 from "../../assets/gyangarhRoom7.png";
import GyangarhRoom8 from "../../assets/gyangarhRoom8.png";
import GyangarhRoom9 from "../../assets/gyangarhRoom9.png";


import Dazzle from "../../assets/dazzle.png";
import DazzleRoom1 from "../../assets/dazzleRoom1.png";
import DazzleRoom2 from "../../assets/dazzleRoom2.png";
import DazzleRoom3 from "../../assets/dazzleRoom3.png";
import DazzleRoom4 from "../../assets/dazzleRoom4.png";
import DazzleRoom5 from "../../assets/dazzleRoom5.png";
import DazzleRoom6 from "../../assets/dazzleRoom6.png";
import DazzleRoom7 from "../../assets/dazzleRoom7.png";

import Navratna from "../../assets/navratna.png";
import NavratnaRoom1 from "../../assets/navratnaRoom1.png";
import NavratnaRoom2 from "../../assets/navratnaRoom2.png";
import NavratnaRoom3 from "../../assets/navratnaRoom3.png";
import NavratnaRoom4 from "../../assets/navratnaRoom4.png";
import NavratnaRoom5 from "../../assets/navratnaRoom5.png";
import NavratnaRoom6 from "../../assets/navratnaRoom6.png";
import NavratnaRoom7 from "../../assets/navratnaRoom7.png";
import NavratnaRoom8 from "../../assets/navratnaRoom8.png";

const Portfolio = () => {
    const data = [
        {
            name: "Hotel Gyangarh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            images: [
                Gyangarh,
                GyangarhRoom1,
                GyangarhRoom2,
                GyangarhRoom3,
                GyangarhRoom4,
                GyangarhRoom5,
                GyangarhRoom6,
                GyangarhRoom7,
                GyangarhRoom8,
                GyangarhRoom9,
            ],
        },
        {
            name: "Dazzle Rooftop",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            images: [Dazzle,
                DazzleRoom1,
                DazzleRoom2,
                DazzleRoom3,
                DazzleRoom4,
                DazzleRoom5,
                DazzleRoom6,
                DazzleRoom7


            ],
        },
        {
            name: "Tiruville Apartments",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            images: [Tiruville, TiruvilleRoom1, TiruvilleRoom2, TiruvilleRoom3, TiruvilleRoom5, TiruvilleRoom6, TiruvilleRoom7, TiruvilleRoom8, TiruvilleRoom9],
        },
        {
            name: "Altitude Apartments",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            images: [AltitudeApartment, AltitudeRoom1, AltitudeRoom2, AltitudeRoom3, AltitudeRoom4, AltitudeRoom5, AltitudeRoom6, AltitudeRoom7, AltitudeRoom8],
        },
        {
            name: "Navratna Skylight",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed consectetur malesuada sodales enim viverra odio diam. Nascetur dui elementum.",
            images: [Navratna, NavratnaRoom1, NavratnaRoom2, NavratnaRoom3, NavratnaRoom4, NavratnaRoom5, NavratnaRoom6, NavratnaRoom7, NavratnaRoom8],
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
                        images={item.images} // Pass array of images
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
