import React, { useEffect, useState, useRef } from 'react';
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const location = useLocation();
    const menuRef = useRef();

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);


    useEffect(() => {
        setIsOpen(false);
    }, [location]);


    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="w-full bg-white shadow-md z-50">
            <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-8 lg:px-10">

                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-[36px] sm:h-[45px] md:h-[55px] w-auto"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:space-x-6 lg:space-x-8 text-[#4D4D4D] font-medium">
                    {menuItems.map((item, i) => (
                        <li
                            key={i}
                            className={`hover:text-[#111D15] transition ${location.pathname === item.path
                                ? 'text-[#111D15] font-semibold'
                                : ''
                                }`}
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Button */}
                <div className="hidden md:block md:ml-4 lg:ml-8">
                    <Link to="/quote">
                        <button className="bg-[#111D15] text-white px-5 sm:px-6 py-2 rounded-sm hover:bg-green-700 transition">
                            Get a quote
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                        className="focus:outline-none p-2"
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                ref={menuRef}
                className={`md:hidden bg-white shadow-inner transform transition-transform duration-300 origin-top ${isOpen
                    ? 'scale-y-100 opacity-100'
                    : 'scale-y-0 opacity-0 pointer-events-none'
                    }`}
            >
                <ul className="flex flex-col px-4 py-4 space-y-4 text-[#4D4D4D] font-medium">
                    {menuItems.map((item, i) => (
                        <li
                            key={i}
                            className={`hover:text-[#111D15] ${location.pathname === item.path
                                ? 'text-[#111D15] font-semibold'
                                : ''
                                }`}
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>

                <div className="px-4 pb-4">
                    <Link to="/quote">
                        <button className="w-full bg-[#111D15] text-white py-2 rounded-sm hover:bg-green-700 transition">
                            Get a quote
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
