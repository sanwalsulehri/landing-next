'use client'

import React from 'react'
import Image from 'next/image'
import data from '../../../public/data.svg'
import insights from '../../../public/insights.svg'
import access from '../../../public/access.svg'

const MarketReport = () => {

    const Reports = [
        {
            icon: data,
            heading: 'Comprehensive Data',
            para: 'Stay updated with real estate market reports, price trends, market days, new listings, neighborhood insights, and expert investment tips and advice.'
        },
        {
            icon: insights,
            heading: 'Hyper-Local Insights',
            para: 'Get detailed Real Estate Market Reports tailored to your city or neighborhood, with trends, pricing, expert insights, and local data analysis.'
        },
        {
            icon: access,
            heading: 'Easy to Access',
            para: 'Get your personalized report in your inbox within minutes, complete with housing market trends, expert insights, and property updates.'
        }
    ]

  return (
    <div className='pb-24 pt-8 px-2'>
        <div className="max-w-7xl mx-auto">
            <h1 className="font-[700] text-[35px] sm:text-[40px] md:text-[48px] text-center text-[#252756]">What’s Inside Your Market Report?</h1>
            <p className="font-[400] md:text-[18px] pt-[2px] text-[#464646] text-center">
            Get insights into market trends, pricing, and property values. Access real-time data,<br /> including sold home statistics and market predictions.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10 xl:gap-x-6 gap-y-10 xl:gap-y-0 gap-x-4">
                {Reports.map((report,idx)=>(
                     <div key={idx} className="xl:mx-auto xl:w-[80%]">
                     <div className="w-[64px] h-[64px] border rounded-full border-[#F2EBFC] flex items-center justify-center">
                         <div className="w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#F2EBFC]">
                             <Image src={report.icon} alt="card img" />
                         </div>
                     </div>
                     <h1 className="font-[700] pt-6 pb-4 text-[20px] sm:text-[24px] text-[#000929]">{report.heading}</h1>
                     <p className="sm:text-[18px] font-[400] text-[#4D5461]">
                     {report.para}
                     </p>
                 </div>
                ))}
               
            </div>


        </div>
    </div>
  )
}

export default MarketReport;