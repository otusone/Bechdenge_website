import React, { useEffect, useState } from 'react';
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/aboutUs' },
        { name: 'Service', path: '/service' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 py-4 md:px-10">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-[60px] w-auto" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-[#4D4D4D] font-medium">
                    {menuItems.map((item, i) => (
                        <li key={i} className={`hover:text-[#111D15] ${location.pathname === item.path ? 'text-[#111D15] font-semibold' : ''}`}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button className="bg-[#111D15] text-white px-6 py-2 rounded-sm hover:bg-green-700 transition">
                            Get a quote
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="focus:outline-none focus:ring-2 focus:ring-[#111D15] p-2"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden px-4 pb-6 bg-white shadow-inner transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'
                    }`}
            >
                <ul className="flex flex-col space-y-4 text-[#4D4D4D] font-medium">
                    {menuItems.map((item, i) => (
                        <li key={i} className="hover:text-[#111D15]">
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to="/contact">
                    <button className="mt-4 w-full bg-[#111D15] text-white py-2 rounded-sm hover:bg-green-700 transition">
                        Get a quote
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
