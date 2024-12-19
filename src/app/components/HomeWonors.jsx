'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper';

const HomeWonors = () => {
  const cards = Array(7).fill(null); // Array to generate 7 cards

  return (
    <div className="bg-[#F3F2FC] py-16">
      <div className="px-3">
        <h1 className="text-[30px] sm:text-[40px] md:text-[48px] font-[700] text-center text-[#333333]">
          Trusted By 5,000 Homeowners
        </h1>
        <p className="sm:text-[18px] text-center pt-[2px] leading-loose font-[400]">
          Trusted by 5,000 homeowners for reliable market insights and tailored reports. Join the
          <br className='xl:block hidden' /> thousands who make informed property decisions with confidence.
        </p>
      </div>

      <div className="relative sm:px-0 px-2 mt-10 w-full mx-auto overflow-hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={3.5} // Display 3.5 cards per view on desktop
          breakpoints={{
            200: {
                slidesPerView: 1, // Display 2 cards per view on screens wider than 786px

            },
            630: {
              slidesPerView: 2.2, // Display 2 cards per view on screens wider than 786px
            },
            1024: {
              slidesPerView: 3.5, // Display only 1 card per view on mobile
            }
          }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
        >
          {cards.map((_, index) => (
            <SwiperSlide key={index} className="bg-white rounded-[16px] w-[370px] px-4 py-5">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.47 15.566V10.922C11.47 8.006 12.154 5.63 13.522 3.794C14.926 1.922 16.996 0.697997 19.732 0.121998V3.632C18.508 3.92 17.536 4.46 16.816 5.252C16.096 6.008 15.628 6.926 15.412 8.006H18.652V15.566H11.47ZM0.562 15.566V10.922C0.562 8.006 1.246 5.63 2.614 3.794C4.018 1.922 6.07 0.697997 8.77 0.121998V3.632C7.546 3.92 6.574 4.46 5.854 5.252C5.134 6.008 4.666 6.926 4.45 8.006H7.69V15.566H0.562Z"
                  fill="black"
                />
              </svg>
              <p className="text-[#4D4D51] py-5 xl:w-[90%]">
                The real estate service was excellent—prompt, professional, and insightful. The reports were
                detailed, covering pricing trends, market analysis, and neighborhood data. This gave me
                confidence to make informed decisions. I highly recommend their service for buyers and sellers.
              </p>

              <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center rounded-full bg-[#A73EBC] w-[38px] font-semibold text-white h-[38px]">
                  M
                </div>
                <h1 className="text-[#3C3A4B] font-medium">Maria Johnson</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeWonors;
