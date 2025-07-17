import React from 'react';
import logo from '../assets/footerLogo.png';

const Footer = () => {
    return (
        <div className="bg-black text-white px-6 md:px-20 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

            {/* Column 1: Logo */}
            <div>
                <img src={logo} alt="Logo" className="mb-4 w-[200px] h-auto" />
            </div>

            {/* Column 2: Description */}
            <div className="p-1 md:p-5 col-span-1 md:col-span-1">
                <p className="text-sm font-light text-justify text-gray-300">
                    Stay updated with our latest cleaning tips, service updates, and helpful articles
                    on maintaining a spotless home.
                </p>
            </div>

            {/* Column 3: Company Links */}
            <div className="p-1 md:p-5">
                <h5 className="font-semibold mb-2">Company</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Our Team</li>
                </ul>
            </div>

            {/* Column 4: Know More Links */}
            <div className="p-1 md:p-5">
                <h5 className="font-semibold mb-2">Know More</h5>
                <ul className="space-y-1 text-sm text-gray-400">
                    <li>Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className="p-1 md:pl-5 md:py-5 col-span-1 md:col-span-1">
                <h5 className="font-semibold mb-2">Newsletter</h5>
                <form className="flex flex-col gap-3">
                    <input
                        type="email"
                        placeholder="Email goes here"
                        className="px-4 py-2 rounded bg-white text-black placeholder:text-[#9E9E9E] focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Footer;
