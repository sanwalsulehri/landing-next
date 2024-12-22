import React, { useState } from 'react'
import formImage from '../../../public/formImg.png'
import Image from 'next/image'

const CustomReport = () => {
  const [thankyou, setthankyou] = useState(false)

  const thankyouHandler = () => {
    setthankyou((prev)=>!prev)
  }


  
  return (
    <>
    <div className="relative w-full">
    <div className='py-24 flex items-center justify-center xl:grid grid-cols-2  bg-white w-full max-w-7xl 2xl:max-w-8xl mx-auto px-2'>
        <form className='bg-[#F7F7FD] xl:w-auto md:w-[70%] w-full rounded-[8px] border-[1.5px] border-[#E0DEF7] py-10 px-5 shadow-md'>
            <h1 className="text-[#252756] font-[700] text-[24px] md:text-[28px] ">Request Your Custom Report</h1>
            <div className="flex flex-col mt-8 gap-6">
                <div className="">
                <div className="">
                        <h2 className="text-[#170F49] sm:text-[18px] font-medium">
                        City, Neighborhood, or Address
                        </h2>
                        <input
                        required
                          placeholder="Enter your full name"
                          type="text"
                          className="placeholder:text-[#A8A8A8] shadow-[8px_20px_30px_0px_#30364D08] sm:placeholder:text-[16px] placeholder:text-sm mt-2 sm:mt-3 placeholder:font-[400]  border border-[#BEC4CD] bg-[#FFFFFF] w-full rounded-[10px] px-4 py-1.5 sm:py-2.5"
                        />
                        <div className="flex items-start gap-2 mt-4">
                            <input type="checkbox" name="" id="optional" />
                            <label htmlFor='optional' className="font-[400] leading-none text-[#464646]">
                            Use my Current location for a more precise radius-based<br /> report (optional)
                            </label>
                        </div>
                      </div>
                </div>


                <div className="">
                <h2 className="text-[#170F49]   sm:text-[18px] font-medium">

                Select Report Type
                      </h2>
                      <div
                                                className="flex items-center justify-between text-[#A8A8A8] shadow-[8px_20px_30px_0px_#30364D08] sm:text-[16px] placeholder:text-sm mt-2 sm:mt-3 font-[400]  border border-[#BEC4CD] bg-[#FFFFFF] w-full rounded-[10px] px-4 py-1.5 sm:py-3.5"
>
                        <select 
                        
                          className="appearance-none sm:text-[16px] text-xs bg-transparent w-full outline-none text-left"
                        >
                          <option value="">City-wide Report</option>
                          <option value="0-500">Under 1,000 sq. ft.</option>
                          <option value="501-1000">1,000 - 1,500 sq. ft</option>
                          <option value="1001-1500">
                            1,500 - 2,000 sq. ft
                          </option>
                          <option value="1501-2000">
                            2,000 - 2,500 sq. ft
                          </option>
                          <option value="2001-2500">
                            3,000 - 3,500 sq. ft
                          </option>
                          <option value="2501-3000">
                            3,500 - 5,000 sq. ft
                          </option>
                          <option value="2501-3000">5,000+ sq. ft</option>
                        </select>
                        <div className="">
                          <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.485 7.00204L13.7226 0.764394L14.97 2.01175L8.10868 8.87307C7.94325 9.03844 7.71891 9.13135 7.485 9.13135C7.25109 9.13135 7.02675 9.03844 6.86132 8.87307L0 2.01175L1.24735 0.764394L7.485 7.00204Z"
                              fill="#5A5B69"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>


                    <div className="">
                <div className="">
                        <h2 className="text-[#170F49] sm:text-[18px] font-medium">
                        Email Address
                        </h2>
                        <input
                        required
                          placeholder="Your Email"
                          type="email"
                          className="placeholder:text-[#A8A8A8] shadow-[8px_20px_30px_0px_#30364D08] sm:placeholder:text-[16px] placeholder:text-sm mt-2 sm:mt-3 placeholder:font-[400]  border border-[#BEC4CD] bg-[#FFFFFF] w-full rounded-[10px] px-4 py-1.5 sm:py-2.5"
                        />
                        <div className="flex items-start gap-2 mt-4">
                            <input type="checkbox" name="" id="agree" />
                            <label htmlFor='agree' className="font-[400] leading-none text-[#464646]">
                            I agree to receive updates
                            </label>
                        </div>
                      </div>
                </div>
            </div>


            <button
            onClick={thankyouHandler}
                className="rounded-full mt-10 w-full py-3 px-4 sm:text-[18px] font-semibold bg-[#6965FD] shadow-[0px_2px_6px_0px_#13124212] text-white hover:bg-opacity-90"
              >
                Submit
              </button>

        </form>

        
    </div>


    <div className="absolute right-0 w-[45%] h-[629px] justify-end xl:flex hidden top-24">
            <Image src={formImage}  alt='img'/>
        </div>
    </div>


{thankyou &&
    <div className="flex items-center  flex-col fixed top-0 left-0 bg-transparent z-[9999999999999999999] justify-center  pt-5 h-screen w-full">
  <div onClick={thankyouHandler}  className="bg-[#000000B2] h-full w-full absolute top-0 left-0"></div>
<div className="max-w-fit w-full h-fit z-[999999] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] bg-white p-10 text-center shadow-lg">

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





</div>

</div>
}

</>
  )
}

export default CustomReport