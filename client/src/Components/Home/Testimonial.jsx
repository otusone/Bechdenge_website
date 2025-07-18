import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import testimonialPic from '../../assets/testimonialPic.png';
import Quotation from '../../assets/Quotation.png';

const Testimonial = () => {
    return (
        <section className="bg-[#FAFAFA] py-12 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* Left Section */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            Feedback About Their <br /> Experience With Us
                        </h2>

                        <p className="text-gray-700 text-sm md:text-base leading-6 mb-6 max-w-xl">
                            Read testimonials from our satisfied clients. See how our cleaning services
                            have made a difference in their lives and homes.
                        </p>

                        <div className="flex gap-3">
                            <button
                                aria-label="Previous"
                                className="w-10 h-10 border border-black rounded flex items-center justify-center 
                                           hover:bg-black hover:text-white transition"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button
                                aria-label="Next"
                                className="w-10 h-10 border border-black rounded flex items-center justify-center 
                                           hover:bg-black hover:text-white transition"
                            >
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-[20px] border-t-[10px] border-r-[10px] border-black 
                                        shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">

                            {/* Testimonial Image */}
                            <img
                                src={testimonialPic}
                                alt="Client Testimonial"
                                className="w-[120px] sm:w-[140px] h-[180px] sm:h-[200px] object-cover rounded-[10px] border border-gray-300"
                            />

                            {/* Text Content */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start gap-2">
                                    <div>
                                        <h4 className="text-lg font-semibold">Robert Fox</h4>
                                        <p className="text-sm text-gray-600">Business Man</p>
                                        <div className="flex text-yellow-400 mt-1">
                                            {Array(5).fill().map((_, i) => (
                                                <FontAwesomeIcon key={i} icon={faStar} />
                                            ))}
                                        </div>
                                    </div>
                                    <img
                                        src={Quotation}
                                        alt="Quote"
                                        className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] object-contain"
                                    />
                                </div>

                                <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                                    Excellent service! The team was punctual, thorough, and left my home
                                    sparkling clean. Highly recommend for anyone needing a reliable and
                                    detailed cleaning service.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonial;
