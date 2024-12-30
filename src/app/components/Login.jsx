"use client"

import React, { useState } from "react";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import welcome from "../../../public/welcome.svg";
import Google from "../../../public/google.png";
import apple from "../../../public/apple.png";
import thanks from "../../../public/thanks.svg";

const Login = ({ signInhandler }) => {
  const [showFirstModal, setShowFirstModal] = useState(true); 
  const [showSecondModal, setShowSecondModal] = useState(false); 
  const [showThirdModal, setShowThirdModal] = useState(false);
  const [showThanksModal, setshowThanksModal] = useState(false);

  const handleLoginClick = () => {
    setShowFirstModal(false); 
    setShowSecondModal(true);
  };

  const handleSubmit = () => {
    setShowSecondModal(false); 
    setShowThirdModal(true);
  };


  const handleThanksModal = () => {
    setShowThirdModal(false); 
    setshowThanksModal(true);
  };
  
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleclick = () => {
    setIsSignup(false);
    // Add login logic here
  };


  const [isFirstOn, setIsFirstOn] = useState(false); 
  const [isSecondOn, setIsSecondOn] = useState(true);
  const [isthirdOn, setIsthirdOn] = useState(true); 

  const toggleFirstState = () => {
    setIsFirstOn(!isFirstOn); 
  };

  const toggleSecondState = () => {
    setIsSecondOn(!isSecondOn); 
  };

  const toggleThirdState = () => {
    setIsthirdOn(!isthirdOn); 
  };

  const cards = [
    { id: 1, label: '0-3 Months' },
    { id: 2, label: '3-6 Months' },
    { id: 3, label: '6-12 Months' },
    { id: 4, label: '6-12 Months' },
    { id: 5, label: '12+ Months' },
    { id: 6, label: 'Just Curious' },
  ];




  return (
    <>
      <div className="flex fixed top-0 left-0 min-h-screen w-full h-full z-[999999999999999] items-center px-4 justify-center">
        <div
          onClick={signInhandler}
          className="fixed z-[20] w-full h-full bg-black/60 top-0 left-0"
        ></div>

        {/* First Modal */}
        showFirstModal && (
      <div className="overflow-auto absolute top-1/2 max-h-[97vh] h-fit -translate-y-1/2 z-[999] bg-white max-w-[98%] sm:max-w-[523px] sm:h-auto h-[90%] w-full px-4 py-12 rounded-[20px] mx-auto">
        <form className="max-w-[302px] mx-auto">
          <div className="shadow-[0px_4px_4px_0px_#00000040] rounded-[20px] overflow-hidden grid grid-cols-2">
            <button
              type="button"
              onClick={handleclick}
              className={`py-1.5 ${
                !isSignup ? 'bg-[#6965FD] text-white' : 'bg-[#F9F9F9B2] text-[#7D7AED]'
              } font-[700] text-center cursor-pointer`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleSignupClick}
              className={`py-1.5 ${
                isSignup ? 'bg-[#6965FD] text-white' : 'bg-[#F9F9F9B2] text-[#7D7AED]'
              } font-[700] text-center cursor-pointer border-l border-[#77798033]`}
            >
              Signup
            </button>
          </div>

          <div className="mx-auto w-fit pt-10">
            <Image alt="welcome" src={welcome} />
          </div>

          <div className="font-[400] tracking-tighter pt-3 text-center text-sm">
            Still don't have an account?{' '}
            <a href="#" className="underline hover:text-[#6965FD]">
              Sign up
            </a>
          </div>

          {/* Common Input for Email */}
          <div className="pt-8">
            <label htmlFor="email" className="font-[300] text-xs pl-5">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="househunter@gmail.com"
              className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
            />
          </div>

          {/* Show Name and Password Inputs in Signup Mode */}
          {isSignup && (
            <>
              <div className="pt-4">
                <label htmlFor="name" className="font-[300] text-xs pl-5">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
                />
              </div>
              <div className="pt-4">
                <label htmlFor="password" className="font-[300] text-xs pl-5">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
                />
              </div>
            </>
          )}

          <button
            type="button"
            onClick={isSignup ? handleSignupClick : handleLoginClick}
            className="bg-[#6965FD] mt-4 font-[700] text-white py-2 w-full rounded-full text-center"
          >
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>

        <div className="pt-10 max-w-[360px] mx-auto">
          <div className="relative bg-black h-[1px] w-full">
            <div className="min-w-[36px] text-xs font-[300] absolute top-1/2 left-1/2 bg-white min-h-[16px] text-center -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
              OR
            </div>
          </div>

          <div className="shadow-[0px_4px_4px_0px_#00000040] bg-[#F9F9F9B2] border border-[#77798033] max-h-[38px] mt-10 max-w-[362px] mx-auto rounded-[20px] overflow-hidden grid grid-cols-2">
            <button className="py-1.5 hover:bg-gray-100 flex items-center gap-1 sm:gap-3 font-[300] text-[10px] sm:text-xs justify-center text-center cursor-pointer">
              <Image src={Google} className="sm:w-6 w-4 h-4 sm:h-6 object-cover" alt="Google" />
              Sign in with Google
            </button>
            <button className="py-1.5 border-l border-[#C5C5C5] hover:bg-gray-100 flex items-center gap-1 sm:gap-3 font-[300] text-[10px] sm:text-xs justify-center text-center cursor-pointer">
              <Image src={apple} className="sm:w-6 w-4 h-4 sm:h-6 object-cover" alt="Apple" />
              Sign in with Apple
            </button>
          </div>
        </div>
      </div>
    )

        {/* Second Modal */}
        {showSecondModal && (
          <div className="overflow-auto absolute top-1/2 -translate-y-1/2 z-[999] bg-white max-w-[98%] sm:max-w-[523px] sm:h-auto h-[90%] w-full px-4 py-12 rounded-[20px] mx-auto">
            <form className="max-w-[327px] flex flex-col items-center mx-auto">
              <h1
                className="text-[#6965FD] text-center font-semibold text-[28px]"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                Entering VIP Zone...
              </h1>

              <p className="text-[#6965FD] pt-7 text-center text-sm font-medium">
                Just a few clicks and you're officially awesome.
              </p>

              <div className="pt-8 w-full">
                <label htmlFor="name" className="font-[300] text-xs pl-5">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Johnsnow@gmail.com"
                  className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
                />
              </div>

              <div className="pt-5 w-full">
                <label htmlFor="password" className="font-[300] text-xs pl-5">
                  Password (Phone#)
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="XXX - XXX - XXXX"
                  className="border rounded-full bg-[#D9D9D933] border-[#DFDFDFB2] px-5 py-2 w-full text-[#747171] placeholder:text-[#747171] placeholder:text-xs text-sm font-[400] outline-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                type="button"
                className="bg-[#6965FD] mt-6 font-[700] text-white py-1.5 w-full rounded-full text-center"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Third Modal */}
        {showThirdModal && (
          <div className="overflow-auto h-fit max-h-[95vh] absolute top-1/2 -translate-y-1/2 z-[999] bg-white max-w-[98%] sm:max-w-[523px]  w-full px-4 py-12 rounded-[20px] mx-auto">
            <form>
              <div  className="max-w-[399px] flex flex-col mx-auto">
              <h1
                className="text-[#6965FD] text-center font-semibold text-[28px]"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                Almost Done!
              </h1>

              <div className="text-[#6965FD] pt-4 text-center text-sm font-medium">
                Help us help you find the{" "}
                <a href="#" className="underline">
                  one.
                </a>
              </div>

              <div className="py-10 flex flex-col gap-8">
                <div className="flex items-start justify-between gap-2">
                  <h1 className="font-[300] sm:text-[16px] text-sm">
                    Do you need assistance with mortgage financing?
                  </h1>
                  <div
                    onClick={toggleFirstState}
                    className={`flex items-center border border-[#CCCCCC] shrink-0 cursor-pointer justify-between py-2 w-[49px] h-6 rounded-full transition-colors 
          ${isFirstOn ? "bg-[#7A5CFA]" : "bg-white"}`}
                  >
                    <div
                      className={`w-[18px] h-[18px] border-[#CCCCCC] border rounded-full transition-transform 
            ${
              isFirstOn
                ? "translate-x-[27px] bg-white"
                : "translate-x-[2px] bg-[#F4F4F4]"
            }`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h1 className="font-[300] sm:text-[16px] text-sm">Are you a first time buyer?</h1>
                  <div
                    onClick={toggleSecondState}
                    className={`flex items-center border border-[#CCCCCC] cursor-pointer justify-between py-2 w-[49px] h-6 rounded-full transition-colors 
          ${isSecondOn ? "bg-[#7A5CFA]" : "bg-white"}`}
                  >
                    <div
                      className={`w-[18px] h-[18px] border-[#CCCCCC] border rounded-full transition-transform 
            ${
              isSecondOn
                ? "translate-x-[27px] bg-white"
                : "translate-x-[2px] bg-[#F4F4F4]"
            }`}
                    ></div>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-2">
                  <h1 className="font-[300] sm:text-[16px] text-sm">Do you have a house to sell?</h1>
                  <div
                    onClick={toggleThirdState}
                    className={`flex items-center border border-[#CCCCCC] cursor-pointer justify-between py-2 w-[49px] h-6 rounded-full transition-colors 
          ${isthirdOn ? "bg-[#7A5CFA]" : "bg-white"}`}
                  >
                    <div
                      className={`w-[18px] h-[18px] border-[#CCCCCC] border rounded-full transition-transform 
            ${
              isthirdOn
                ? "translate-x-[27px] bg-white"
                : "translate-x-[2px] bg-[#F4F4F4]"
            }`}
                    ></div>
                  </div>
                </div>
              </div>

              <h1 className="font-[300] sm:text-[16px] text-sm text-left w-fit ">
                What is the time frame for you move
              </h1>

              
              </div>
              <div className="grid mt-8 gap-x-2 gap-y-4 grid-cols-2 sm:grid-cols-3">
      {cards.map((card) => (
        <label key={card.id} className="relative">
          <input
            type="radio"
            name="card"
            id={`${card.id}`}
            className="peer hidden"
          />
          <div className="card flex items-center justify-center h-full text-sm text-center max-w-[120px] mx-auto min-h-[40px] border text-[#777980]  cursor-pointer hover:bg-gray-50 transition-all bg-[#F8F8FA] rounded-full border-[#E9E9EAB2] peer-checked:bg-[#6965FD] peer-checked:border-[#6965FD] peer-checked:text-white">
            <span className="">{card.label}</span>
          </div>
        </label>
      ))}
    </div>

<div className="flex items-center mt-10 justify-center">
              <button
                onClick={handleThanksModal}
                type="button"
                className="bg-[#6965FD] max-w-[302px] mx-auto mt-6 font-[700] text-white py-1.5 w-full rounded-full text-center"
              >
                Submit
              </button>
              </div>
            </form>

         
          </div>
        )}




         {/* fourth Modal */}
         {showThanksModal && (
          <div className="overflow-auto flex min-h-[455px] justify-center flex-col items-center absolute top-1/2 -translate-y-1/2 z-[999] bg-white max-w-[98%] sm:max-w-[523px]  w-full px-4 py-12 rounded-[20px] mx-auto">
            <Image src={thanks} alt="s" className="" />
         <h2 className="text-[#6965FD] font-[400] text-[20px] text-center py-5">for signing up</h2>
<Link href={"/"} className="w-full mx-auto flex items-center justify-center">
         <button
                type="button"
                className="bg-[#6965FD] max-w-[302px] mx-auto mt-10 font-[700] text-white py-1.5 w-full rounded-full text-center"
              >
                Back to Listing
              </button>
              </Link>
          </div>

        )}
      </div>
    </>
  );
};

export default Login;
