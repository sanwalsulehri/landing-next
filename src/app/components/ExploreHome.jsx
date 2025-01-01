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
  const [steps, setSteps] = useState(false)

  const Cards = [
    {
      icon: city,
      heading: 'By City',
      para: 'Find detailed market analysis and comprehensive real estate insights by searching your city'
    },
    {
      icon: neighborhood,
      heading: 'By Neighborhood',
      para: 'Enter your neighborhood to explore hyper-local real estate trends and market insights'
    },
    {
      icon: radius,
      heading: 'By Radius',
      para: 'Get real estate insights within a 5 km radius of your location for detailed market analysis'
    },
    {
      icon: address,
      heading: 'By Address',
      para: 'Provide a specific address now for a tailored Real Estate Market Report'
    }
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
    setSteps(false)
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

  const renderModal = () => {
    switch (selectedCard?.heading) {
      case 'By City':
        return <CityModal closeModal={closeModal} steps={steps}  inputValue={inputValue} setInputValue={setInputValue} handleCitySearch={handleCitySearch} />;
      case 'By Neighborhood':
        return <NeighborhoodModal closeModal={closeModal} inputValue={inputValue} setInputValue={setInputValue} />;
      case 'By Radius':
        return <RadiusModal closeModal={closeModal} inputValue={inputValue} setInputValue={setInputValue} />;
      case 'By Address':
        return <AddressModal closeModal={closeModal} inputValue={inputValue} setInputValue={setInputValue} />;
      default:
        return null;
    }
  };

  return (
    <div className='py-24 px-2'>
      <div className="max-w-7xl 2xl:max-w-8xl mx-auto">
        <h1 className="font-[700] text-[35px] sm:text-[40px] md:text-[48px] text-center text-[#252756]">How Would You Like to Search?</h1>
        <p className="font-[400] md:text-[18px] pt-[2px] text-[#464646] text-center">
          Enter your neighborhood to explore hyper-local real estate trends and market insights, or<br /> provide a specific address for a tailored real estate report
        </p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-5">
          {Cards.map((card, idx) => {
            return (
              <div key={idx} onClick={() => openModal(card)} className="border-2 cursor-pointer group relative overflow-hidden hover:scale-[1.05] transition-all duration-600 border-[#DBDBDB] bg-white shadow-[0px_0px_30px_14px_#0000000D] rounded-[20px] py-6 px-4 xl:px-10">
                <div className="h-full w-full absolute top-0 left-0  translate-y-full group-hover:translate-y-0 transition-all duration-600 bg-[#6965FD]/10 z-[2]"></div>
                <div className=" flex items-center justify-center flex-col  relative z-[99]">
                  <div className="bg-[#F2EBFC] h-[65px] rounded-full flex items-center justify-center w-[65px]">
                    <Image src={card.icon} />
                  </div>
                  <h3 className="text-[#24283F] text-[17px] font-semibold py-2">{card.heading}</h3>
                  <p className="text-[#464646] font-[400] text-sm text-center pt-[1px]">
                    {card.para}
                  </p>

                  <div className="flex text-[#6965FD] cursor-pointer mt-4 group-hover:text-white transition-all duration-200 group-hover:bg-[#6965FD] items-center size-[36px] rounded-full justify-center border border-[#E5E5E5]">
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM1.06575e-09 4.5L12 4.5L12 3.5L-1.06575e-09 3.5L1.06575e-09 4.5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div onClick={closeModal} className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50">
          <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            {renderModal()}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExploreHome;