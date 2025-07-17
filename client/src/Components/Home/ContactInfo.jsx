import React from 'react';
import callUS from '../../assets/Call icon.png';
import email from '../../assets/Email icon.png';
import location from '../../assets/Address icon.png';

const ContactInfo = () => {
    return (
        <section className="px-6 md:px-20 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                {/* Left – Contact Info */}
                <div className="w-full md:w-1/2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Find Us</h2>

                    {/* Phone */}
                    <div className="flex items-start gap-4 bg-[#FBFBFB] p-4 rounded-lg">
                        <img src={callUS} alt="Call" className="w-10 h-10 mt-1" />
                        <div>
                            <h4 className="text-base font-semibold">Call Us</h4>
                            <p className="text-sm text-gray-700">+91 85299 25583</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 bg-[#FBFBFB] p-4 rounded-lg">
                        <img src={email} alt="Email" className="w-10 h-10 mt-1" />
                        <div>
                            <h4 className="text-base font-semibold">Email Now</h4>
                            <p className="text-sm text-gray-700">axitak111@gmail.com</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-4 bg-[#FBFBFB] p-4 rounded-lg">
                        <img src={location} alt="Location" className="w-10 h-10 mt-1" />
                        <div>
                            <h4 className="text-base font-semibold">Address</h4>
                            <p className="text-sm text-gray-700">Udaipur, Rajasthan</p>
                        </div>
                    </div>
                </div>

                {/* Right – Contact Form */}
                <div className="w-full md:w-1/2">
                    <h5 className="text-sm text-gray-500 uppercase font-semibold mb-2">Contact Info</h5>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Keep In Touch</h2>
                    <p className="text-sm text-gray-700 mb-6">
                        We prioritize responding to your inquiries promptly to ensure you
                        receive the assistance you need in a timely manner.
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
                        />
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:border-black"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full md:w-auto bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
