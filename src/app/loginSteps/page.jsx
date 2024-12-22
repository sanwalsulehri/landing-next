"use client";

import React, { useState, useEffect, useRef } from "react";
import stepsBg from "../../../public/stepsBg.jpg";
import Finished from "../components/Finished";
import '../style.css'
import { useRouter } from 'next/navigation';

const steps = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: true },
  { id: 5, active: false },
  { id: 6 },
];

const Page = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = React.useState(1);
  // const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    squareFootage: '',
    name: '',
    email: '',
    phone: '',
    countryCode: ''
  });

  const addressInputRef = useRef(null);

  useEffect(() => {
    if (window.google && addressInputRef.current) {
      const autocomplete = new google.maps.places.Autocomplete(addressInputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        handleInputChange('address', place.formatted_address || '');
      });
    }
  }, []);

  const handleStepClick = (id) => {
    setActiveStep(id);
  };
  
  

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const goToNextStep = async () => {
    console.log(JSON.stringify(formData));
  
    if (activeStep === steps.length) {
      try {
        const response = await fetch('/api/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        
        setActiveStep(prev => prev + 1);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Failed to submit form. Please try again.');
      }
    } else {
      setActiveStep(prev => prev + 1);
    }
  };


  if (activeStep > steps.length) {
    return <Finished />;
  }

  const handlePrevious = () => {
    if (activeStep === 1) {
      router.push('/'); // Navigate to the root route
    } else {
      setActiveStep(activeStep - 1); // Decrement the active step
    }
  };
 


  return (
    <div
      className="w-full min-h-screen overflow-auto pt-20 h-full bg-center bg-cover relative"
      style={{ backgroundImage: `url(${stepsBg.src})` }}
    >
      <div className="bg-[#000000B0] backdrop-blur-[44px] h-full w-full absolute top-0 left-0"></div>
     <div className="max-w-[698px] px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
     <div className="border border-[#EFF0F6] rounded-[24px] py-10 px-4 sm:px-8 z-[999] w-full  bg-white ">
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-6 items-start ">
          <div
            onClick={handlePrevious}
            className="rotate-180 cursor-pointer mb-6 w-fit"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-fit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4301 5.92999L20.5001 12L14.4301 18.07"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 12H20.33"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="w-full">
            <div className="flex  justify-between border-b w-full border-[#D9DBE9] pb-6 items-center gap-2">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center sm:gap-3">
                  <div
                    className={`w-[22.50px] h-[22.50px] ${
                      activeStep >= step.id
                        ? "bg-[#6965FD] text-white"
                        : "bg-[#EFF0F6] text-black"
                    } rounded-full flex cursor-pointer items-center justify-center text-[10px] font-medium`}
                    onClick={() => handleStepClick(step.id)}
                  >
                    {step.id}
                  </div>
                  <div
                    className={`relative md:w-auto w-0 ${step.id === 6 ? "hidden" : "block"}`}
                  >
                    <div className="md:h-1 w-0 md:w-[64px] md:bg-[#EFF0F6] rounded-full"></div>
                    <div
                      className={`absolute h-full top-0 left-0 ${
                        activeStep >= step.id ? "bg-[#6965FD]" : "bg-[#EFF0F6]"
                      } rounded-full ${
                        activeStep === step.id ? "w-[50%]" : "w-[100%]"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`mt-10 ${
                    activeStep === step.id ? "block" : "hidden"
                  }`}
                >
                  {step.id === 1 && (
                    <div className="">
                      <h2 className="text-[#170F49] text-[20px] font-medium">
                        Address
                      </h2>
                      <input
                        ref={addressInputRef}
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Enter your street address for an accurate market report"
                        type="text"
                        className="placeholder:text-[#B5B5B5] mt-3 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-2.5"
                      />
                    </div>
                  )}
                  {step.id === 2 && (
                    <div className="">
                      <h2 className="text-[#170F49] text-[20px] font-medium">
                        Select Type of Property
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-4">
                        {[
                          "Semi-detached",
                          "Condo",
                          "Townhouse",
                          "Multi-family home",
                          "land",
                        ].map((item, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleInputChange('propertyType', item)}
                            className={`${
                              formData.propertyType === item 
                                ? 'bg-[#7D38DF1A] border-[#6965FD] text-[#6965FD]' 
                                : 'bg-[#FBFBFB] border-[#E1E1E1]'
                              } whitespace-nowrap border rounded-full py-1.5 sm:py-2.5 px-4 sm:px-10 font-[400] shadow-[0px_2px_8px_0px_#13124208] text-sm sm:text-[16px]`}

                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.id === 3 && (
                      <div className="">
                      <h2 className="text-[#170F49] text-[20px] font-medium">
                      Select no of bedrooms
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-4">
                        {[
                          "1+",
                          "2+",
                          "3+",
                          "4+",
                          "5+",
                        ].map((item, idx) => (
                          <button 
                            key={idx} 
                            onClick={() => handleInputChange('propertyType', item)}
                            className={`${
                              formData.propertyType === item 
                                ? 'bg-[#7D38DF1A] border-[#6965FD] text-[#6965FD]' 
                                : 'bg-[#FBFBFB] border-[#E1E1E1]'
                              } whitespace-nowrap border rounded-full py-1.5 sm:py-2.5 px-4 sm:px-10 font-[400] shadow-[0px_2px_8px_0px_#13124208] text-sm sm:text-[16px]`}

                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {step.id === 4 && (
                    <div className="">
                    <h2 className="text-[#170F49] text-[20px] font-medium">
                    Select no of bedrooms
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {[
                        "1+",
                        "2+",
                        "3+",
                        "4+",
                        "5+",
                      ].map((item, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => handleInputChange('propertyType', item)}
                          className={`${
                            formData.propertyType === item 
                              ? 'bg-[#7D38DF1A] border-[#6965FD] text-[#6965FD]' 
                              : 'bg-[#FBFBFB] border-[#E1E1E1]'
                            } whitespace-nowrap border rounded-full py-1.5 sm:py-2.5 px-4 sm:px-10 font-[400] shadow-[0px_2px_8px_0px_#13124208] text-sm sm:text-[16px]`}

                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  )}
                  {step.id === 5 && (
                    <div className="">
                      <h2 className="text-[#170F49] text-[20px] font-medium">
                        Square Footage Range
                      </h2>
                      <div className="text-[#B5B5B5] cursor-pointer mt-3 font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-2.5 flex items-center justify-between gap-2 relative">
                        <select 
                          value={formData.squareFootage}
                          onChange={(e) => handleInputChange('squareFootage', e.target.value)}
                          className="appearance-none sm:text-[16px] text-xs bg-transparent w-full outline-none text-left"
                        >
                          <option value="">Select Square footage range</option>
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
                  )}
                  {step.id === 6 && (
                    <form className="flex flex-col gap-6">
                      <div className="">
                        <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                          Name
                        </h2>
                        <input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                          type="text"
                          className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 sm:mt-3 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                        />
                      </div>

                      <div className="">
                        <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                          Email Address
                        </h2>
                        <input
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                          type="text"
                          className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 sm:mt-3 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                        />
                      </div>

                      <div className="">
                        <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                          Phone Number
                        </h2>
                        <div className=" mt-2 sm:mt-3 flex shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full sm:pl-4 pr-4 py-1.5 sm:py-2.5"
                        >
                          <div className="grid  sm:w-auto w-16 sm:shrink-0 grid-cols-1 focus-within:relative">
                            <select
                              value={formData.countryCode}
                              onChange={(e) => handleInputChange('countryCode', e.target.value)}
                              id="country"
                              name="country"
                              aria-label="Select Country"
                              className="col-start-1 shrink-0 bg-transparent row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 sm:pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            >
                              <option value="">Select a country</option>
                              <option value="US">US</option>
                              <option value="CA">CA</option>
                              <option value="EU">EU</option>
                            </select>
                            <svg
                              className="pointer-events-none col-start-1 row-start-1 sm:mr-2 self-center justify-self-end sm:justify-self-end text-gray-500 size-4"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <input
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            type="text"
                            name="phone-number"
                            id="phone-number"
                            className="block min-w-0 sm:w-auto w-full grow pl-1 pr-3 text-base bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              ))}

              <button
                onClick={goToNextStep}
                className="rounded-full mt-10 w-full py-3 px-4 sm:text-[18px] font-semibold bg-[#6965FD] shadow-[0px_2px_6px_0px_#13124212] text-white hover:bg-opacity-90"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Page;
