import React from 'react'
import formImage from '../../../public/formImg.png'
import Image from 'next/image'

const CustomReport = () => {
  return (
    <div className="relative w-full">
    <div className='py-24 flex items-center justify-center xl:grid grid-cols-2  bg-white w-full max-w-7xl mx-auto px-2'>
        <form className='bg-[#F7F7FD] xl:w-auto md:w-[70%] w-full rounded-[8px] border-[1.5px] border-[#E0DEF7] py-10 px-5 shadow-md'>
            <h1 className="text-[#252756] font-[700] text-[24px] md:text-[28px] ">Request Your Custom Report</h1>
            <div className="flex flex-col mt-8 gap-6">
                <div className="">
                <div className="">
                        <h2 className="text-[#170F49] sm:text-[18px] font-medium">
                        City, Neighborhood, or Address
                        </h2>
                        <input
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
                <h2 className="text-[#170F49] sm:text-[18px] font-medium">

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
  )
}

export default CustomReport