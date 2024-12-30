'use client'


import React from 'react'
import Image from 'next/image';
import HomeNavBar from './HomeNavBar';
import homehero from '../../../public/homehero.png'
import herohomechart from '../../../public/herohomechart.png'
import HeroImg from '../../../public/heroImg.png'


const HeroHome = ({ handler, signInhandler }) => {
  return (
    <div className='shadow-[0px_4px_24px_0px_#E8F9F733] relative   xl:min-h-[745px] '>
      <HomeNavBar signInhandler={signInhandler} />
      <div className="bg-gradient-to-b  from-[#E0DEF7] to-[#E0DEF700]  h-full w-full">
        <div className="2xl:max-w-8xl max-w-7xl mx-auto px-2 py-[153px]"
        >
          <div className="xl:w-[45%] xl:text-left flex  flex-col items-center xl:items-start text-center pt-8">
            <h1 className="font-[700] text-[#000929] sm:text-[40px] text-[35px] md:text-[55px] leading-none">Unlock Local Market Insights and Trends</h1>
            <p className="font-medium sm:text-[22px] py-5">
              Discover housing market trends, values, and activity in your area with a personalized market report
            </p>
            <button onClick={handler} className="md:py-3 shadow-[0px_4px_34px_0px_#7D38DF30] py-1.5 sm:py-2 px-4 sm:px-5 md:px-7 mt-6 rounded-full bg-[#6965FD] sm:text-[18px] font-semibold text-white hover:bg-opacity-80">
              Get Market Report
            </button>
            <div className="flex text-left xl:mx-0 mx-auto  mt-10 items-start gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5015 0.0654011C8.6776 0.290457 6.90996 0.946875 5.38613 1.95963C3.02303 3.53034 1.30228 5.8278 0.495829 8.50036C0.303593 9.11926 0.116045 10.0617 0.0457147 10.6947C-0.0152382 11.2808 -0.0152382 12.7155 0.0457147 13.3016C0.552093 18.0559 3.91389 22.1163 8.50411 23.5042C9.12302 23.6964 10.0654 23.884 10.6984 23.9543C11.2845 24.0152 12.7192 24.0152 13.3053 23.9543C16.081 23.6589 18.6551 22.3976 20.6338 20.3627C21.9888 18.9608 22.95 17.3385 23.5079 15.4959C23.8549 14.3565 24.0049 13.3016 24.0049 11.9981C24.0049 11.0182 23.958 10.479 23.7892 9.63033C22.9406 5.31674 19.7242 1.77209 15.4996 0.492071C14.8807 0.299835 13.9383 0.112288 13.3053 0.0419579C12.6911 -0.0236855 11.1063 -0.00961876 10.5015 0.0654011ZM13.5257 4.70252C14.1587 4.87131 14.6557 5.33549 14.8104 5.9122C14.8995 6.23103 14.862 6.71865 14.7213 7.00466C14.4541 7.56262 13.8258 7.96585 13.1787 8.00336C11.7487 8.08306 10.7828 6.62957 11.5096 5.48084C11.6315 5.2886 12.0019 4.94633 12.1988 4.84318C12.5692 4.65094 13.1225 4.59468 13.5257 4.70252ZM12.1191 9.71004C12.7239 9.83663 13.2116 10.2024 13.4647 10.7228C13.6195 11.0323 13.6195 11.0416 13.6148 11.6934C13.6101 12.4482 13.6148 12.4248 13.0568 14.4128C12.5786 16.1007 12.4707 16.593 12.4707 17.0807C12.4707 17.7746 12.6724 17.9903 13.3804 18.0325C13.732 18.0559 14.2478 17.9715 14.5853 17.8355C14.6557 17.8074 14.6557 17.8402 14.576 18.1684C14.5291 18.3701 14.4728 18.5482 14.4541 18.567C14.3697 18.6467 12.8458 19.1859 12.527 19.2468C12.0957 19.3312 11.3595 19.3312 11.0079 19.2468C10.2342 19.0593 9.64347 18.5482 9.46998 17.9106C9.39497 17.6246 9.40903 16.9306 9.49812 16.4524C9.54031 16.232 9.76537 15.388 9.99512 14.5769C10.4734 12.8796 10.5953 12.3263 10.5953 11.8668C10.5953 11.3229 10.4499 11.0557 10.117 10.9619C9.78413 10.8728 9.19335 10.9057 8.7995 11.0276C8.60258 11.0932 8.43847 11.1307 8.43847 11.112C8.44316 10.9807 8.6354 10.3805 8.68228 10.3524C8.79012 10.2821 9.88259 9.88821 10.2342 9.79444C10.9141 9.60689 11.5049 9.57876 12.1191 9.71004Z" fill="#6965FD" />
              </svg>
              <h6 className="md:text-[18px] font-[400] text-[#263043]">
                Reports available for your city, neighborhood, address, or a specific radius
              </h6>

            </div>
          </div>

          <div className="absolute xl:block hidden right-0 bottom-0 h-fit w-1/2">
            <Image src={HeroImg} alt="img" />
            <div className="-top-10 -left-16 absolute">
              <Image src={herohomechart} className='w-auto h-[350px]' width={500} height={500} alt='chart' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroHome;