import React from 'react';
import QuestionCards from '../QuestionsCard';

const Questions = () => {
    const data = [
        {
            question: "How does it work?",
            answer: "Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut integer tristique ut. Pellentesque id nibh sed nulla non nulla."
        },
        {
            question: "Can you really sell anything?",
            answer: "We offer real execution-based marketing consulting, including hotel and restaurant management, team training, and growth strategies backed by real ownership and sales results."
        },
        {
            question: "What makes you different from others?",
            answer: "We offer real execution-based marketing consulting, including hotel and restaurant management, team training, and growth strategies backed by real ownership and sales results."
        },
        {
            question: "Do you work with every product or brand?",
            answer: "We offer real execution-based marketing consulting, including hotel and restaurant management, team training, and growth strategies backed by real ownership and sales results."
        },
        {
            question: "How fast can you deliver results?",
            answer: "We offer real execution-based marketing consulting, including hotel and restaurant management, team training, and growth strategies backed by real ownership and sales results."
        },
    ];

    return (
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-white overflow-x-hidden">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
                Top Bech Denge Questions
            </h2>

            <div className="space-y-6">
                {data.map((item, index) => (
                    <QuestionCards
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
        </div>
    );
};

export default Questions;
