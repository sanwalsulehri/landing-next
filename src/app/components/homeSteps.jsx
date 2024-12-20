'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import completeStep from '../../../public/completeStep.svg';
import Finished from './FinishedHomeModals';
import Link from 'next/link';

const HomeSteps = ({handler}) => {
    const [modal, setmodal] = useState(false)

    const modalHandler = () => {
        setmodal((prev) => !prev)
    }

    const [isVisible, setIsVisible] = useState(true); // New state for visibility
    const [activeStep, setActiveStep] = useState(1);
    const [formData, setFormData] = useState({
      address: '',
      propertyType: '',
      bedrooms: '',
      bathrooms: '',
      squareFootage: '',
      name: '',
      email: '',
      phone: '',
      countryCode: '',
    });
  
    const steps = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: false },
      { id: 4, active: true },
    ];
  
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
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    };
  
    const goToNextStep = async () => {
      console.log(JSON.stringify(formData));
  
      if (activeStep === 4) {
        setActiveStep(5);
      } else if (activeStep === steps.length) {
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
  
          setActiveStep((prev) => prev + 1);
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('Failed to submit form. Please try again.');
        }
      } else {
        setActiveStep((prev) => prev + 1);
      }
    };
  
    if (activeStep > steps.length) {
      return <Finished />;
    }
  
    if (!isVisible) return null;
  return (
    <>
      <div className="flex z-[9999999999999999999999999999999999999999999999999] items-center flex-col fixed top-0 left-0 bg-transparent  justify-center  pt-5 h-screen w-full">
        <div className="bg-[#000000B2] h-full w-full absolute top-0 left-0"></div>
        <div className="max-w-[698px] no-scrollBar max-h-[95vh] overflow-auto px-4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="border  border-[#EFF0F6] rounded-[24px] py-10 px-4 sm:px-8 z-[999] w-full bg-white">
            <div className="flex   sm:flex-row-reverse justify-between flex-col gap-2 sm:gap-6 items-start">
              <div   onClick={handler} className="w-[31px] cursor-pointer border-b  border-[#D9DBE9] shrink-0 h-[31px] bg-[#6965FD] rounded-full flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.513069 0.0507393C0.304041 0.134351 0.193826 0.233164 0.0950129 0.430791C-0.0152021 0.658822 -0.0304041 0.951462 0.0570077 1.17189C0.0988134 1.2707 0.900722 2.09922 2.70977 3.90446L5.30172 6.50021L2.70977 9.09216C0.900722 10.9012 0.0988134 11.7297 0.0570077 11.8285C0.0266036 11.9083 0 12.0642 0 12.1782C0 12.7597 0.51687 13.1207 1.12115 12.9573C1.25037 12.9231 1.64182 12.5506 3.88793 10.3083L6.49888 7.69737L9.11363 10.3083C11.9374 13.1283 11.7854 12.9991 12.2035 12.9991C12.3251 12.9991 12.4467 12.9649 12.5835 12.8927C12.7469 12.8091 12.8077 12.7483 12.8913 12.5848C13.0168 12.3492 13.032 12.0566 12.9408 11.8285C12.8989 11.7297 12.097 10.9012 10.288 9.09596L7.69604 6.50021L10.307 3.88926C13.127 1.06168 12.9978 1.2137 12.9978 0.79564C12.9978 0.674024 12.9636 0.552407 12.8913 0.415589C12.8077 0.252167 12.7469 0.191359 12.5835 0.107747C12.3479 -0.0176697 12.0552 -0.0328712 11.8272 0.058341C11.7284 0.100146 10.8999 0.902055 9.09463 2.7111L6.49888 5.30305L3.90693 2.7111C2.09788 0.902055 1.26937 0.100146 1.17056 0.058341C1.00714 -0.0100689 0.676491 -0.0138693 0.513069 0.0507393Z" fill="white"/>
</svg>

              </div>
              <div className="w-[90%]">
                <div className="flex  w-full border-b pb-6  border-[#D9DBE9] justify-between items-center gap-2">
                  {steps.map((step, index) => (
                    <div key={index} className="flex w-full items-center sm:gap-7">
                      <div
                        className={`w-[22.50px] h-[22.50px] ${
                          activeStep > index
                            ? 'bg-[#6965FD] text-white'
                            : 'bg-[#EFF0F6] text-black'
                        } rounded-full flex cursor-pointer items-center justify-center text-[10px] font-medium`}
                        onClick={() => handleStepClick(index + 1)}
                      >
                        {step.id === 'complete' ? (
                          <Image
                            src={step.icon}
                            alt="Complete Step"
                            width={12}
                            height={12}
                          />
                        ) : (
                          step.id
                        )}
                      </div>
                      {index !== steps.length - 1 && (
                        <div className="relative md:w-auto w-0">
                          <div className="md:h-1 md:w-[64px] bg-[#EFF0F6] rounded-full"></div>
                          <div
                            className={`absolute h-full top-0 left-0 ${
                              activeStep > index ? 'bg-[#6965FD]' : 'bg-[#EFF0F6]'
                            } rounded-full w-[100%]`}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="">
                  {steps.map((step) => (
                    <div
                      key={step.id}
                      className={`mt-6 ${
                        activeStep === step.id ? "block" : "hidden"
                      }`}
                    >
                      {step.id === 1 && (
                        <div className="">
                          <h2 className="text-[#170F49] text-[20px] sm:text-[ 22px] font-semibold">
                            Select Report type
                          </h2>
                          <p className="font-medium text-[#170F49] sm:text-[20px]">What kind of market report would you like?</p>

                          <div className="flex flex-col gap-3 my-6">
                            {['By City', 'By Neighborhood', 'By Radius', 'By Address'].map((label, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <input type="radio" name="first" id={label} />
                                <label className='text-[20px] font-medium text-[#170F49]' htmlFor={label}>{label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {step.id === 2 && (
                        <div className="">
                          <h2 className="text-[#170F49] text-[20px] sm:text-[22px] font-semibold">
                            Enter Location Details
                          </h2>

                          <div className="flex mb-10 flex-col mt-6 gap-5">
                            <div className="">
                              <h2 className="text-[#170F49] text-[20px] font-medium">
                                City
                              </h2>
                              <div className="text-[#B5B5B5] cursor-pointer mt-2 font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-3 flex items-center justify-between gap-2 relative">
                                <select
                                  className="appearance-none sm:text-[16px] text-xs bg-transparent w-full outline-none text-left"
                                >
                                  <option value="">Select City</option>
                                  <option value="0-500">Under 1,000 sq. ft.</option>
                                  <option value="501-1000">1,000 - 1,500 sq. ft</option>
                                  <option value="1001-1500">1,500 - 2,000 sq. ft</option>
                                  <option value="1501-2000">2,000 - 2,500 sq. ft</option>
                                  <option value="2001-2500">3,000 - 3,500 sq. ft</option>
                                  <option value="2501-3000">3,500 - 5,000 sq. ft</option>
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
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Neighborhood
                              </h2>
                              <input
                                placeholder="Specify your Neighborhood"
                                type="text"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>

                            <div className="">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Starting Address
                              </h2>
                              <input
                                placeholder="Starting Address"
                                type="text"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder :text-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>

                            <div className="w-full">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Starting Address
                              </h2>
                              <input className='w-full mt-2' type="range" value={50} />
                            </div>

                            <div className="">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Property Address
                              </h2>
                              <input
                                placeholder="Property Address"
                                type="text"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {step.id === 3 && (
                        <div className="">
                          <h2 className="text-[#170F49] text-[20px] sm:text-[22px] font-semibold">
                            Report Options
                          </h2>
                          <p className="font-medium text-[#170F49] sm:text-[20px]">What information would you like to include in your report?</p>

                          <div className="flex flex-col gap-3 my-6">
                            {['Average home price', 'Recent sales activity', 'Days on market', 'Market trends and forecasts', 'Nearby amenities and schools'].map((label, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <input type="checkbox" name="first" id={label} />
                                <label className='text-[20px] font-medium text-[#170F49]' htmlFor={label}>{label}</label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {step.id === 4 && (
                        <div className="">
                          <h2 className="text-[#170F49] text-[20px] sm:text-[22px] font-semibold">
                            Contact Information
                          </h2>
                          <p className="font-medium text-[#170F49] sm:text-[20px]">Where should we send your report?</p>

                          <div className="flex mb-10 flex-col mt-6 gap-5">
                            <div className="">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Name
                              </h2>
                              <input
                                placeholder="Your Name"
                                type="text"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>

                            <div className="">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Email Address
                              </h2>
                              <input
                                placeholder="Email Address"
                                type="email"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder:font-[400] shadow-[0px_2px_8px_0px_#13124208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>

                            <div className="">
                              <h2 className="text-[#170F49] sm:text-[20px] font-medium">
                                Phone Number (Optional)
                              </h2>
                              <input
                                placeholder="Your Phone Number"
                                type="text"
                                className="placeholder:text-[#B5B5B5] sm:placeholder:text-[16px] placeholder:text-sm mt-2 placeholder:font-[400] shadow-[0px_2px_8px_0px_#131 24208] border border-[#E1E1E1] bg-[#FBFBFB] w-full rounded-full px-4 py-1.5 sm:py-2.5"
                              />
                            </div>

                            <div className="flex text-[#464646] items-center gap-2">
                              <input type="checkbox" name="ok" id="ok" />
                              <label htmlFor="ok">I agree to receive updates</label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                </div>

              </div>
            </div>
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <button onClick={modalHandler} className="bg-[#F0F0F0] text-[18px] rounded-full  font-medium py-2 sm:py-2.5 px-4 sm:px-6 sm:max-w-[180px] w-full hover:bg-gray-200">
                Save progress
              </button>
              <button
                onClick={goToNextStep}
                className="bg-[#6965FD] text-white text-[18px] rounded-full shadow-sm font-medium py-2 sm:py-2.5 px-4 sm:px-6 sm:max-w-[180px] w-full hover:bg-opacity-90"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>






      
  {/* modal */}
  {modal && 
  <div className="z-[9999999999999]  fixed h-full w-full top-0 left-0">
  <div onClick={modalHandler} className="bg-[#000000B2] h-full w-full absolute top-0 left-0"></div>
  <div className="bg-white md:w-full w-[95%] max-w-[511px]  px-4 text-center min-h-[337px] py-4 rounded-[24px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999999999999999999999999999999999999] flex flex-col items-center justify-center">
  <h1 className="font-[700] text-[24px] text-[#221B52]">Are you sure want to leave?</h1>
  <p className="font-medium text-[18px] py-3 leading-loose">Your progress will be saved. You can return and complete the form later.</p>

  <div className="flex mt-12 items-center justify-between gap-4 md:gap-10 md:flex-row flex-col w-full">
              <button onClick={modalHandler} className="bg-[#F0F0F0] w-full text-[18px] rounded-full md:w-1/2 font-medium py-2 sm:py-2.5 px-4   hover:bg-gray-200">
                Save Report
              </button>
              <Link className='md:w-1/2 w-full' href='/home'>             
               <button
               onClick={() => setIsVisible(false)}
                className="bg-[#6965FD] text-white text-[18px]  rounded-full shadow-sm font-medium py-2 sm:py-2.5 px-4 w-full hover:bg-opacity-90"
              >
                Okay
              </button>
              </Link>

            </div>


  </div>
  </div>

}

    </>
  );
};

export default HomeSteps;