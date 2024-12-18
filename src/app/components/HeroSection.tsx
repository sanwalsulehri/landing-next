import React from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/heroImg.png'

const HeroSection = () => {
  return (
    <>
      <div className="my-14 xl:min-h-[617px] text-white relative w-full bg-gradient-to-r from-[#6965FD] to-[#FBD9B9] px-4 sm:px-10 py-16 rounded-[15px]">
        <div className="xl:w-[40%] flex xl:text-left text-center xl:items-start flex-col items-center">
        <p className="font-[400] sm:text-[16px] text-sm">Know Your Home’s True Worth in Minutes</p>
        <h1 className="font-semibold sm:text-[35px] text-[30px] md:text-[50px] xl:text-[67px] py-5 leading-tight">
        Home Value Calculator
        </h1>
        <p className="font-[400] sm:text-[16px] text-sm">Accurate and Instant Home Valuation at Your Fingertips.</p>

        <div className="relative xl:mx-0 mx-auto w-full h-fit mt-12">
            <input type="text" className='bg-[#FEFEFF] w-full rounded-full pr-32 placeholder:truncate sm:pr-40 pl-4 py-3  text-black outline-none placeholder:text-sm sm:placeholder:text-[16px]' placeholder='Enter Your Property Address' />
            <button className="bg-[#6965FD] px-4 sm:px-6 py-2.5 absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full text-[#FEFEFF] sm:text-[16px] text-sm sm:font-semibold">Get Valuation</button>
        </div>
        </div>
        <div className="absolute xl:block hidden xl:w-auto w-1/2 -bottom-14 right-0">
            <Image src={HeroImg} alt='heroimg' />
        </div>
      </div>
    </>
  )
}

export default HeroSection