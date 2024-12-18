import React from "react";
import Image from "next/image";
import Img from "../../../public/realstate.png";

const Partner = () => {
  return (
    <>
      <div className="w-full pt-10">
        <div className="w-full mx-auto">
          <h1 className="mt-7 md:text-[50px] text-[40px] text-center  md:mb-20 mb-2  font-[600] leading-[60px] text-[#000000]">
            Your Trusted Real Estate <br /> Partner
          </h1>
        </div>
        <div className=" max-w-[1309.99px] mx-auto h-[449px] gap-10 items-center justify-between  bg-white p-6  md:flex">
          <div className="mb-6 md:mt-28 lg:-mt-14 md:mb-0 md:w-[55%]">
            <h2 className=" mt-7 text-[38px] mb-14  font-[600] leading-[45.6px] text-[#000000]">
              Empowering Your Real <br /> Estate Journey
            </h2>
            <p className="mt-4 font-[400] mb-10 text-[16px] leading-[24px] text-[#000000]">
              With nearly 20 years of experience in helping families and
              investors, we deliver unmatched market insights, personalized
              attention, and a seamless experience. Our consistent track record
              of winning multiple industry awards highlights our commitment to
              excellence and outstanding achievement year after year. Whether
              you're buying, selling, or just exploring, we're here to guide you
              every step of the way with flexible and competitive commission
              rates tailored to your needs.
            </p>
            <button className="mt-6 rounded-[40px] text-[16px] uppercase fo bg-[#6965FD] px-[30px] py-[17px] font-[400] leading-[19.2px] text-[#FEFEFF] hover:bg-blue-600 ">
              Contact Now
            </button>
          </div>
          <div
            className="flex md:h-[390px] md:-mt-5 md:max-w-[400px] rounded-[14px] justify-center md:w-1/2"
            style={{
              background:
                "linear-gradient(to top, #C1DEE8B2, #FFFFFF00, #FBD9B9B2)",
            }}
          >
            <Image
              src={Img}
              alt="d"
              className="object-cover opacity-70 w-full rounded-[14px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
