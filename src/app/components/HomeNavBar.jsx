"use client";

import React, { useState } from "react";
import logo from "../../../public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import HomeSteps from "./homeSteps";

const HomeNavBar = ({signInhandler}) => {
  const [drawer, setdrawer] = useState(false);


  const drawerHandler = () => {
    setdrawer((prev) => !prev);
  };

  return (
    <>
      <nav className="bg-[#E0DEF7] px-2">
        <div className="max-w-7xl 2xl:max-w-8xl  min-h-[82px] mx-auto flex items-center justify-between gap-2">
          <Link href={"/home"}>
            <Image src={logo} alt="logo" />
          </Link>

          <div className="lg:flex hidden items-center gap-5 xl:gap-10">
            {["Home", "Map Search", "Home Valuation", "Blog", "Contact us"].map(
              (link, idx) => {
                return (
                  <Link
                    key={idx}
                    href={"#"}
                    className="text-[18px] font-medium pb-[2px] leading-none transition-all duration-400 border-b-2 border-transparent hover:border-[#6965FD]"
                  >
                    {link}
                  </Link>
                );
              }
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button onClick={signInhandler} className="md:py-3 py-1.5 sm:py-2 px-4 sm:px-5 md:px-[46px] rounded-full bg-[#6965FD] sm:text-[18px] font-semibold text-white hover:bg-opacity-80">
              Sign In
            </button>
            <div onClick={drawerHandler} className="lg:hidden block cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M20 7H4m16 5H4m16 5H4"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* drawer links */}
      <div
        className={`w-full z-[99999999999] ${
          drawer ? "translate-y-0" : "-translate-y-full"
        } h-screen overflow-auto transition-all duration-900 ease-in bg-white fixed top-0 left-0 py-6 px-10`}
      >
        <div onClick={drawerHandler} className="absolute  cursor-pointer right-4 top-4">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06" />
              <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0" />
            </g>
          </svg>
        </div>

        <Link href={"/home"}>
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex flex-col mt-14 gap-5 xl:gap-10">
          {["Home", "Map Search", "Home Valuation", "Blog", "Contact us"].map(
            (link, idx) => {
              return (
                <Link
                  key={idx}
                  href={"#"}
                  className="sm:text-[24px] text-[18px] w-fit font-medium pb-[2px] leading-none transition-all duration-400 border-b-2 border-transparent hover:border-[#6965FD]"
                >
                  {link}
                </Link>
              );
            }
          )}
        </div>
      </div>



    </>
  );
};

export default HomeNavBar;
