import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const QuestionsCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAnswer = () => setIsOpen(!isOpen);

    return (
        <div className="bg-white shadow-md rounded-xl px-4 py-5 w-full border border-gray-200 mb-4 transition-all">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAnswer}
            >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 pr-4">
                    {question}
                </h3>
                <FontAwesomeIcon
                    icon={isOpen ? faChevronUp : faChevronDown}
                    className="text-gray-600"
                />
            </div>

            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                }}
                className={`transition-all duration-500 ease-in-out overflow-hidden mt-2`}
            >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify pt-2">
                    {answer}
                </p>
            </div>
        </div>
    );
};

export default QuestionsCard;
