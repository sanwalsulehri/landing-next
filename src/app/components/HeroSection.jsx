'use client'
/// <reference types="@types/google.maps" />
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import HeroImg from '../../../public/heroImg.png'
import Link from 'next/link'

const HeroSection = () => {
  //here i want to use google place api to get the address
  //here is the key AIzaSyBP-6bgmDYXRRWdOHP8EkTJpaZhZ7yc73w

  const [address, setAddress] = useState('')
  const autoCompleteRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!inputRef.current) return;

    autoCompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      componentRestrictions: { country: "ca" },
      fields: ["address_components", "formatted_address", "geometry"],
      types: ["address"]
    });

    const ontarioBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(41.6723, -95.1565),
      new google.maps.LatLng(56.8515, -74.3441)
    );
    
    autoCompleteRef.current.setBounds(ontarioBounds);
    autoCompleteRef.current.setOptions({ strictBounds: true });

    autoCompleteRef.current.addListener("place_changed", () => {
      const place = autoCompleteRef.current?.getPlace();
      if (place?.formatted_address) {
        setAddress(place.formatted_address);
      }
    });
  }, []);

  return (
    <>
      <div className="my-14 xl:min-h-[617px] text-white relative w-full bg-gradient-to-r from-[#6965FD] to-[#FBD9B9] px-4 sm:px-10 py-16 rounded-[15px]">
        <div className="xl:w-[40%] flex xl:text-left text-center xl:items-start flex-col items-center">
        <p className="font-[500] sm:text-[16px] text-sm">Know Your Home’s True Worth in Minutes</p>
        <h1 className="font-bold sm:text-[35px] text-[30px] md:text-[50px] xl:text-[67px] py-5 leading-tight">
        Home Value Calculator
        </h1>
        <p className="font-[500] sm:text-[16px] text-sm">Accurate and Instant Home Valuation at Your Fingertips.</p>

        <div className="relative xl:mx-0 mx-auto w-full h-fit mt-12">
            <input 
              ref={inputRef}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text" 
              className='bg-[#FEFEFF] w-full rounded-full pr-32 placeholder:truncate sm:pr-40 pl-4 py-3 text-black outline-none placeholder:text-sm sm:placeholder:text-[16px]' 
              placeholder='Enter Your Property Address' 
            />
            <Link disabled={!address} href='/loginSteps' className="bg-[#6965FD] px-4 sm:px-6 py-2.5 absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full text-[#FEFEFF] sm:text-[16px] text-sm sm:font-semibold">
              Get Valuation
            </Link>
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