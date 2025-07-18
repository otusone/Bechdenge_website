import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import contactPhone from '../assets/contactphone.png';
import contactEmail from '../assets/contactemail.png';
import contactLocation from '../assets/contactlocation.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faPinterestP, faDribbble, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Components/Footer';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        need: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/v1/contactForm/create", formData, {
                headers: { "Content-Type": "application/json" }
            });
            console.log(response);


            alert(response.data.message || "Message sent successfully!");
            setFormData({ name: '', email: '', need: '', message: '' });
        } catch (error) {
            // console.error("Error submitting contact form", error);
            alert("Something went wrong, please try again!");
        }
    };

    return (
        <div>
            <Navbar />
            <div className="relative flex flex-col md:flex-row justify-between gap-12 px-6 md:px-20 py-16 mx-6 md:mx-20 my-10 border border-[#C2BDBD] rounded-[4px] shadow-md bg-white max-w-7xl mx-auto">

                {/* Left Side */}
                <div className="flex flex-col justify-between w-full md:w-1/2">
                    <div>
                        <h4 className="text-3xl font-bold text-black mb-4 leading-tight">
                            Let's Sell Something<br />No Pitch. Just Work.
                        </h4>
                        <p className="text-gray-700 mb-8">
                            Fill up the form and our team will get back to <br />you within 24 hours.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <img src={contactPhone} className="w-6 h-6" alt="Phone" />
                                <p className="text-[#333333]">+91 85299 25583</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={contactEmail} className="w-6 h-6" alt="Email" />
                                <p className="text-[#333333]">support@example.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={contactLocation} className="w-6 h-6" alt="Location" />
                                <p className="text-[#333333]">123 Main Street, Delhi, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-6 mt-10">
                        <FontAwesomeIcon icon={faFacebookF} className="text-[#333333] hover:text-blue-600 cursor-pointer text-xl" />
                        <FontAwesomeIcon icon={faPinterestP} className="text-[#333333] hover:text-red-600 cursor-pointer text-xl" />
                        <FontAwesomeIcon icon={faDribbble} className="text-[#333333] hover:text-pink-500 cursor-pointer text-xl" />
                        <FontAwesomeIcon icon={faInstagram} className="text-[#333333] hover:text-pink-600 cursor-pointer text-xl" />
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="w-full md:w-1/2">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className="w-full border-b border-[#33333380] focus:outline-none py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="itagencyc@gmail.com"
                                className="w-full border-b border-[#33333380] focus:outline-none py-2"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-black mb-2">What do you need?</label>
                            <div className="flex flex-wrap gap-4">
                                {["Real Estate", "Hotel", "Restaurant"].map((option) => (
                                    <label key={option} className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="need"
                                            value={option}
                                            checked={formData.need === option}
                                            onChange={handleChange}
                                        />
                                        <span>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-black mb-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your message"
                                rows="1"
                                className="w-full border-b border-[#33333380] focus:outline-none py-2 resize-none"
                                required
                            />
                        </div>

                        <button type="submit" className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition duration-300">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Decorative Circle */}
                <div className="absolute bottom-0 right-0 w-[170px] h-[170px] bg-[#0099FF1A] rounded-tl-[900px]">
                    <div className="absolute top-14 left-11 w-[60px] h-[60px] bg-black rounded-full" />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
