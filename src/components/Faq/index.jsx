import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const faqs = [
    {
        question: 'What are your interest rates?',
        answer: 'Our interest rates vary depending on the savings plan you choose. Generally, our rates are higher than the average bank interest rates.'
    },
    {
        question: 'What happens to my interest when I switch to Halal?',
        answer: 'When you switch to Halal, your interest is adjusted according to the principles of Halal banking, ensuring compliance with Sharia law.'
    },
    {
        question: 'What is the minimum interest rate I am entitled to?',
        answer: 'The minimum interest rate you are entitled to depends on the savings plan you select. Please check our website for detailed information on each plan.'
    },
    {
        question: 'What is Ardilla?',
        answer: 'Ardilla is a financial services platform that helps you save and invest to achieve your financial goals. We offer various savings plans with competitive interest rates.'
    },
    {
        question: 'What is Ardilla?',
        answer: 'Ardilla is a financial services platform that helps you save and invest to achieve your financial goals. We offer various savings plans with competitive interest rates.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white font-cabinet lg:px-32 md:px-16 px-8 lg:pb-40 md:pb-28 pb-20">
            <div className=" mx-auto">
                <h2 className="text-5xl md:text-5xl lg:text-[4rem] font-bold text-[#3D0072] mb-14">Questions We Have Been Asked</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-8 shadow-md">
                            <button
                                className="flex items-center justify-between w-full text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-[#8807F7] text-base font-medium">{faq.question}</span>
                                <FaPlus className={`transform text-[#3D0072] h-[14px] transition-transform ${openIndex === index ? 'rotate-45' : ''}`} />
                            </button>
                            {openIndex === index && (
                                <div className="mt-4 text-base font-medium text-gray-700">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;