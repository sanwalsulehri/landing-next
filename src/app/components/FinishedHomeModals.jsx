'use Client'

import React, { useState } from 'react'

const FinishedHomeModals = () => {
    const [modal, setmodal] = useState(true)

    const modalHandler = () => {
        setmodal((prev)=>!prev)
    }
  return (
    <>
  
{modal && 
  <div className="flex items-center flex-col fixed top-0 left-0 bg-transparent z-[9999] justify-center  pt-5 h-screen w-full">
  <div onClick={modalHandler} className="bg-[#000000B2] h-full w-full absolute top-0 left-0"></div>
<div className="max-w-[698px] w-full min-h-[564px] z-[999999] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-10 text-center shadow-lg">

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


<h1 className="text-[24px] font-[700] text-[#221B52]">Thank you!</h1>
<p className="mt-4 text-[18px] font-[500] ">Your personalized market report will be sent to<br /> your emailaddress.</p>




<div className="flex w-[70%] mx-auto mt-12 items-center justify-between gap-2 lg:flex-row flex-col">
        <button onClick={modalHandler} className="bg-[#F0F0F0] text-[18px] rounded-full  font-medium py-2 sm:py-2.5 px-4 sm:px-6 sm:max-w-[180px] w-full hover:bg-gray-200">
          Save Report
        </button>
        <button
        onClick={modalHandler}
          className="bg-[#6965FD] text-white text-[18px] rounded-full shadow-sm font-medium py-2 sm:py-2.5 px-4 sm:px-6 sm:max-w-[180px] w-full hover:bg-opacity-90"
        >
          Okay
        </button>
      </div>
</div>

</div>
}


  </>
  )
}

export default FinishedHomeModals