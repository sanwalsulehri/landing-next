'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";
import newsletterbg from "../../../public/newsletterbg.png";
// import Img from '../../../public/newsletterImg.png'
const Newsletter = () => {
  const [isBackgroundEnabled, setIsBackgroundEnabled] = useState(true);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setShowMessage(true);
      setIsLoading(true);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setIsLoading(false);
        setEmail(""); // Clear input
      } else {
        setMessage(data.message || "Something went wrong.");
        setIsLoading(false);
      }
    } catch (error) {
      setMessage("Error submitting form. Please try again.");
    }
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => setShowMessage(false), 5000);
    }
  }, [showMessage]);

  return (
    <div
      onClick={() => setIsBackgroundEnabled(isBackgroundEnabled)}
      style={{
        background: isBackgroundEnabled
          ? `linear-gradient(to right, #C1DEE8, #FBD9B9), url(${newsletterbg.src})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="my-20 xl:min-h-[457px] relative w-full px-4 sm:px-10 py-16 mix-blend-multiply rounded-[15px]"
    >
      <div className="xl:w-[50%] md:max-w-2xl md:mx-auto xl:mx-0 flex xl:text-left text-center flex-col xl:items-start items-center">
        <h1 className="font-semibold sm:text-[35px] text-[30px] md:text-[50px] py-5 leading-tight">
          Subscribe Our Newsletter
        </h1>
        <p className="font-[400] xl:pr-28 sm:text-[16px] text-sm">
          Stay ahead in the real estate market with our exclusive updates!
        </p>
        <form onSubmit={handleSubmit} className="relative xl:w-[80%] xl:mx-0 mx-auto w-full h-fit mt-12">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#FEFEFF] w-full rounded-full pr-32 placeholder:truncate sm:pr-40 pl-4 py-3 text-black outline-none placeholder:text-sm sm:placeholder:text-[16px]"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="bg-[#6965FD] px-4 sm:px-6 py-2.5 absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full text-[#FEFEFF] sm:text-[16px] text-sm sm:font-semibold"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {/* show message for 5 seconds */}
        { showMessage && <p className="mt-4 text-sm text-gray-500">{message}</p>}
      </div>
    </div>
  );
};

export default Newsletter;
