import React from 'react';
import callUS from '../../assets/Call icon.png';
import email from '../../assets/Email icon.png';
import location from '../../assets/Address icon.png';

const ContactInfo = () => {
    return (
        <section className="px-4 sm:px-6 md:px-20 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
                {/* Left – Contact Info */}
                <div className="w-full md:w-1/2 space-y-5 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Find Us</h2>

                    {/* Contact Cards */}
                    {[
                        { icon: callUS, title: "Call Us", info: "+91 85299 25583" },
                        { icon: email, title: "Email Now", info: "axitak111@gmail.com" },
                        { icon: location, title: "Address", info: "Udaipur, Rajasthan" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 bg-[#FBFBFB] p-4 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <img src={item.icon} alt={item.title} className="w-8 sm:w-10 h-8 sm:h-10 mt-1" />
                            <div>
                                <h4 className="text-base font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-700">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right – Contact Form */}
                <div className="w-full md:w-1/2">
                    <h5 className="text-xs sm:text-sm text-gray-500 uppercase font-semibold mb-2">Contact Info</h5>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Keep In Touch</h2>
                    <p className="text-sm sm:text-base text-gray-700 mb-6">
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
