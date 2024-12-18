'use client'

import React, { useState } from "react";
import Image from "next/image";
import newsletterbg from "../../../public/newsletterbg.png";
import Img from '../../../public/newsletterImg.png'

const Newsletter = () => {
    const [isBackgroundEnabled, setIsBackgroundEnabled] = useState(true);

  return (
    <>
      <div
      onClick={()=> setIsBackgroundEnabled(isBackgroundEnabled)}
              style={{
                background: isBackgroundEnabled
                  ? `linear-gradient(to right, #C1DEE8, #FBD9B9), url(${newsletterbg.src})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
      
        className="my-20 xl:min-h-[457px]  relative w-full px-4 sm:px-10 py-16 mix-blend-multiply rounded-[15px]"
      >
        <div  className="xl:w-[50%] md:max-w-2xl md:mx-auto xl:mx-0 flex xl:text-left text-center flex-col xl:items-start items-center">
        
          <h1 className="font-semibold sm:text-[35px] text-[30px] md:text-[50px] py-5 leading-tight">
          Subscribe Our Newsletter
          </h1>
          <p className="font-[400] xl:pr-28 sm:text-[16px] text-sm">
          Stay ahead in the real estate market with our exclusive updates! Subscribe to our newsletter for the latest market reports, expert insights, and tips to maximize your buying or selling experience. Be the first to know about new listings, market trends, and exclusive opportunities—all delivered straight to your inbox.
          </p>

          <div className="relative xl:w-[80%] xl:mx-0 mx-auto w-full h-fit mt-12">
            <input
              type="text"
              className="bg-[#FEFEFF] w-full rounded-full pr-32 placeholder:truncate sm:pr-40 pl-4 py-3  text-black outline-none placeholder:text-sm sm:placeholder:text-[16px]"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#6965FD] px-4 sm:px-6 py-2.5 absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full text-[#FEFEFF] sm:text-[16px] text-sm sm:font-semibold">
              Get a Quote
            </button>
          </div>
        </div>
        <div className="absolute xl:block hidden xl:w-auto w-1/2 -bottom-14 right-0">
          <Image src={Img} alt="heroimg" />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
