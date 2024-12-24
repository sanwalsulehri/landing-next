
'use client'
import React from 'react'
import stepsBg from "../../../public/stepsBg.jpg";
import Link from 'next/link';


const Finished = () => {
  return (
    <>
        <div
      className="w-full min-h-screen h-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${stepsBg.src})` }}
    >
      <div className="bg-[#000000B0] backdrop-blur-[44px] h-full w-full absolute top-0 left-0"></div>

     <div className="max-w-[698px] z-[999999] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-10 text-center shadow-lg">
     
     <div className="mx-auto mb-4 mt-9 flex items-center justify-center rounded-full ">
      <svg width="158" height="140" viewBox="0 0 158 144" fill="none" xmlns="http://www.w3.org/2000/svg">
       <rect opacity="0.5" x="14.0488" width="51.5427" height="51.5427" rx="10" fill="#9E96FF"/>
       <rect opacity="0.5" x="128" y="32.8701" width="29.3594" height="29.3594" rx="10" fill="#9E96FF"/>
       <rect opacity="0.5" y="74.8701" width="31.5329" height="31.5329" rx="8" fill="#DEDBFF"/>
       <rect opacity="0.5" x="114.287" y="106.821" width="36.5935" height="36.5935" rx="8" fill="#DEDBFF"/>
       <circle cx="83.4766" cy="78.3755" r="60" fill="#6965FD"/>
       <g filter="url(#filter0_d_1_6119)">
       <path d="M60.7598 81.6202L73.7403 94.6007L106.192 62.1494" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
       </g>
       <defs>
       <filter id="filter0_d_1_6119" x="26.7598" y="32.1494" width="113.432" height="100.451" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
       <feFlood flood-opacity="0" result="BackgroundImageFix"/>
       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
       <feOffset dy="4"/>
       <feGaussianBlur stdDeviation="15"/>
       <feColorMatrix type="matrix" values="0 0 0 0 0.290196 0 0 0 0 0.227451 0 0 0 0 1 0 0 0 0.3 0"/>
       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6119"/>
       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6119" result="shape"/>
       </filter>
       </defs>
       </svg>

     </div>

     
     <h1 className="text-[32px] leading-[35px] font-[700] text-[#221B52]">Thank you!</h1>
     <p className="mt-4 text-[18px] leading-[30px] font-[500] text-[#6F6C90]">Thank you for filling out the form. We will get <br /> back to you soon with the market report.</p>
     <p className="mt-4 text-[18px] leading-[35px] font-[500] text-[#6F6C90]">Would you like to receive monthly market updates and insights?</p>

     
     <div className="mt-4 flex items-center justify-center">
       <input type="checkbox" id="subscribe" className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
       <label htmlFor="subscribe" className="ml-2 text-[18px] leading-[35px] font-[500] text-[#6F6C90]">Yes, send me regular updates</label>
     </div>

    <Link href='/'>
     <button className="mt-6 mb-4 max-w-[592px] w-full rounded-full bg-[#6965FD] px-6 py-3 h-[66px] leading-[35px] text-[18px] font-[600] text-white shadow-md hover:bg-blue-700 ">Complete</button>
     </Link>
   </div>
   </div>
    </>
  )
}

export default Finished