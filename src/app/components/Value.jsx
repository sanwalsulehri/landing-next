"use client"

import React from 'react'
import Image from 'next/image'
import answer from '../../../public/answer.svg'
import quote from '../../../public/quote.svg'
import connect from '../../../public/connect.svg'

const Value = () => {
    const Values = [
        {
            icon: answer,
            heading: 'Answer a Few Questions',
            para: 'Tell us about your property’s location, size, and features. It only takes a minute!',
        },
        {
            icon: quote,
            heading: 'Receive a Valuation Quote',
            para: 'Get an accurate home valuation based on the latest market trends and comparable sales.',
        },
        {
            icon: connect,
            heading: 'Connect with a Local Expert',
            para: 'Schedule a consultation with one of our experienced agents to explore your options.',
        }
    ];

    return (
        <div className='py-20'>
            <p className="sm:text-[22px] font-medium text-center">Get My Home Value</p>
            <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-semibold text-center py-1">Everything should be this easy.</h1>
            <div className="my-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-5">
                {Values.map((value, index) => (
                    <div key={index} className="flex flex-col lg:text-left text-center items-center lg:items-start">
                        <Image
                            src={value.icon}
                            alt=""
                            className="mx-auto drop-shadow-[0px_4px_4px_0px_#00000040]"
                        />
                        <h1 className="text-[24px]  xl:mx-auto text-center lg:text-left font-semibold py-2.5">
                            {value.heading}
                        </h1>
                        <p className={`font-[400] mx-auto ${
  index === 2 ? 'xl:w-[73%]' :
  index === 0 ? 'xl:w-[65%]' :
  index === 1 ? 'xl:w-[69%]' :
  '' 
}`}>
  {value.para}
</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Value;
