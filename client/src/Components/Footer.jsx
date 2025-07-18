import React from 'react';
import logo from '../assets/footerLogo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-4 sm:px-6 md:px-20 pt-10">
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8">

                {/* Column 1: Logo */}
                <div>
                    <img
                        src={logo}
                        alt="Logo"
                        className="mb-4 w-32 sm:w-40 md:w-48 h-auto"
                    />
                </div>

                {/* Column 2: Description */}
                <div className="p-1 md:p-5">
                    <p className="text-xs sm:text-sm font-light text-justify text-gray-300">
                        Stay updated with our latest cleaning tips, service updates, and helpful articles
                        on maintaining a spotless home.
                    </p>
                </div>

                {/* Column 3: Company Links */}
                <div className="p-1 md:p-5">
                    <h5 className="font-semibold mb-2">Company</h5>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Team</li>
                    </ul>
                </div>

                {/* Column 4: Know More Links */}
                <div className="p-1 md:p-5">
                    <h5 className="font-semibold mb-2">Know More</h5>
                    <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                        <li>Support</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Column 5: Newsletter */}
                <div className="p-1 md:pl-5 md:py-5">
                    <h5 className="font-semibold mb-2">Newsletter</h5>
                    <form className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email goes here"
                            className="px-3 sm:px-4 py-2 rounded bg-white text-black placeholder:text-[#9E9E9E] focus:outline-none text-sm"
                        />
                        <button
                            type="submit"
                            className="border border-white text-white px-4 sm:px-6 py-2 rounded hover:bg-white hover:text-black transition text-sm"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>

            {/* Horizontal Divider */}
            <hr className="w-[90%] mx-auto border-gray-700" />

            {/* Bottom Section */}
            <div className="text-center py-4 text-gray-400 text-xs sm:text-sm">
                <p>© 2024 “Procleaning”. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
