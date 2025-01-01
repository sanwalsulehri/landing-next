'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import city from '../../../public/city.svg'
import neighborhood from '../../../public/neighborhood.svg'
import radius from '../../../public/radius.svg'
import address from '../../../public/address.svg'
import CityModal from './CityModal';
import NeighborhoodModal from './NeighborhoodModal';
import RadiusModal from './RadiusModal';
import AddressModal from './AddressModal';

const ExploreHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [steps, setSteps] = useState(false);

  const Cards = [
    {
      icon: city,
      heading: 'By City',
    },
    {
      icon: neighborhood,
      heading: 'By Neighborhood',
    },
    {
      icon: radius,
      heading: 'By Radius',
    },
    {
      icon: address,
      heading: 'By Address',
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setSteps(false);
    setInputValue(''); // Clear input value when closing modal
  };

  const fetchCityAddress = async (cityName) => {
    const apiKey = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBP-6bgmDYXRRWdOHP8EkTJpaZhZ7yc73w&libraries=places'; // Replace with your actual API key
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${cityName}&key=${apiKey}`);
    const data = await response.json();
    return data.results; // Return the results from the API
  };

  const handleCitySearch = async () => {
    if (selectedCard.heading === 'By City' && inputValue) {
      const results = await fetchCityAddress(inputValue); 
      console.log(results); // Handle the results as needed (e.g., display them in the modal)
    }
  };

 

  return (
    <>
      <div className='py-24 overflow-hidden w-[75vw] px-2'>
        <div className="max-w-7xl 2xl:max-w-8xl mx-auto">
          <h1 className="font-[700] text-[35px] sm:text-[40px] md:text-[48px] text-center text-[#252756]">How Would You Like to Search?</h1>
          <p className="font-[400] md:text-[18px] pt-[2px] text-[#464646] text-center">
            Enter your neighborhood to explore hyper-local real estate trends and market insights, or<br /> provide a specific address for a tailored real estate report
          </p>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-5">
            {Cards.map((card, idx) => {
              const isSelected = selectedCard?.heading === card.heading;
              return (
                <div
                  key={idx}
                  onClick={() => openModal(card)}
                  className={`border-2 text-center cursor-pointer group relative overflow-hidden ${isSelected ? 'bg-[#6965FD]/10' : 'bg-white'} hover:scale-[1.05] min-h-[190px] flex flex-col justify-between h-full transition-all duration-600 border-[#DBDBDB] shadow-[0px_0px_30px_14px_#0000000D] rounded-[20px] py-6 px-4 xl:px-10`}
                >
                  <div className=" flex items-center justify-center flex-col  relative z-[99]">
                    <div className="bg-[#F2EBFC] h-[65px] rounded-full flex items-center justify-center w-[65px]">
                      <Image src={card.icon} />
                    </div>
                  </div>
                  <h3 className="text-[#24283F] text-[17px] font-semibold py-2">{card.heading}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreHome;
