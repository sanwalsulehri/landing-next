'use client'


import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const Faqs = [
        {
            quest: 'What data is included in the report?',
            ans: 'The report includes market trends, pricing data, average days on market, new listings, and neighborhood insights. It provides expert analysis to help guide your real estate decisions.',
        },
        {
            quest: 'How accurate are the reports?',
            ans: 'The report includes market trends, pricing data, average days on market, new listings, and neighborhood insights. It provides expert analysis to help guide your real estate decisions.',
        },
        {
            quest: 'Can I request multiple reports?',
            ans: 'The report includes market trends, pricing data, average days on market, new listings, and neighborhood insights. It provides expert analysis to help guide your real estate decisions.',
        },
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#F3F2FC] py-14">
            <div className="px-2 max-w-6xl mx-auto">
                <h1 className="md:text-[48px] text-center sm:text-[40px] text-[35px] font-[700] text-[#141415]">
                    Frequently Asked Questions
                </h1>

                <div className="mt-12 flex flex-col gap-5">
                    {Faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white cursor-pointer rounded-[12px] shadow-md border border-[#EBEBEB80] py-4 sm:py-6 px-6 sm:px-8"
                            onClick={() => toggleFaq(idx)}
                        >
                            <div className="flex items-center justify-between gap-2">
                                <h1 className="sm:text-[20px] text-[18px] font-semibold text-[#222222]">
                                    {faq.quest}
                                </h1>
                                <svg
                                    width="22"
                                    height="12"
                                    viewBox="0 0 22 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-300 ${
                                        activeIndex === idx ? 'rotate-180' : ''
                                    }`}
                                >
                                    <path
                                        d="M21.0001 10.2857L11.0296 1.71423L1.05908 10.2857"
                                        stroke="#222222"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            {activeIndex === idx && (
                                <p className="w-[95%] py-4 font-[400] sm:text-[18px] text-[#5A5A5A]">
                                    {faq.ans}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
