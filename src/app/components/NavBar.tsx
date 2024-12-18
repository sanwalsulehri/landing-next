'use client'


import React, { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
  const [searchModal, setsearchModal] = useState(false)
  const [linksModal, setlinksModal] = useState(false)

  const searchModalChanger = () => {
    setsearchModal((prev) => !prev)
  }


  const linksModalChanger = () => {
    setlinksModal((prev) => !prev)
  }

  return (
    <>
    <div className="py-4 flex bg-white text-black items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div onClick={linksModalChanger} className="cursor-pointer xl:hidden block">
            <svg className='size-6' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" d="M4.5 6.5h12m-12.002 4h11.997M4.5 14.5h11.995"/></svg>
            </div>
            <h1 className="lg:text-[50px] text-[25px] sm:text-[36px] font-medium">LOGO</h1>
            </div>
            <div className="xl:flex hidden items-center gap-6">
              {['Home','Map Search','Home Valuation','Blog','Contact us'].map((link,idx)=>{
                return(
                    <Link
                    key={idx}
                    href={"#"}
                    className={`font-medium ${idx === 2 ? 'border-[#6965FD]' : 'border-transparent'} border-b-2 transition-all duration-200 hover:border-[#6965FD] leading-none pb-1 text-[18px]`}
                     >
                        {link}
                     </Link>
                )
              })}
            </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-14">
            <div className="relative md:block hidden">
                <input type="text" className='border border-[#0000004D] bg-white rounded-[8px] outline-none py-1 placeholder:text-sm pr-8 pl-3' placeholder='Search' />
                <div className="absolute top-1/2 right-3 -translate-y-1/2">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="5.90384" cy="6.49116" rx="5.37577" ry="6.41938" fill="white"/>
<path d="M10.7796 6.49116C10.7796 9.84711 8.51723 12.4105 5.90384 12.4105C3.29046 12.4105 1.02808 9.84711 1.02808 6.49116C1.02808 3.13521 3.29046 0.571777 5.90384 0.571777C8.51723 0.571777 10.7796 3.13521 10.7796 6.49116Z" stroke="#00000080" />
<line y1="-0.5" x2="5.8247" y2="-0.5" transform="matrix(0.642035 0.766675 -0.642035 0.766675 9.40771 10.6777)" stroke="#00000080"/>
</svg>

                </div>
            </div>
            <div className="flex items-center gap-1 lg:gap-3">
<div onClick={searchModalChanger} className='md:hidden flex w-8 h-8 items-center justify-center hover:bg-[#6965FD]/10 rounded-lg'>
<svg  width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="5.90384" cy="6.49116" rx="5.37577" ry="6.41938" fill="white"/>
<path d="M10.7796 6.49116C10.7796 9.84711 8.51723 12.4105 5.90384 12.4105C3.29046 12.4105 1.02808 9.84711 1.02808 6.49116C1.02808 3.13521 3.29046 0.571777 5.90384 0.571777C8.51723 0.571777 10.7796 3.13521 10.7796 6.49116Z" stroke="#00000080" />
<line y1="-0.5" x2="5.8247" y2="-0.5" transform="matrix(0.642035 0.766675 -0.642035 0.766675 9.40771 10.6777)" stroke="#00000080"/>
</svg>
</div>

                <button className="rounded-[8px] bg-[#6965FD] border-[#6965FD] border text-white md:text-[18px] font-medium px-2 sm:px-4 md:px-6 py-[7px] hover:bg-blue-600 hover:border-blue-600 leading-none">Download</button>
                <Link href='/steps'>
                <button className="rounded-[8px] bg-[#6965FD] border-[#6965FD] border text-white md:text-[18px] font-medium px-2 sm:px-4 md:px-6 py-[7px] hover:bg-blue-600 hover:border-blue-600 leading-none">Login</button>
                </Link>
            </div>
        </div>
    </div>




    {/* search modal */}
    {searchModal &&
       <div onClick={searchModalChanger} className="fixed top-0 left-0 bg-black/30 h-screen w-screen z-[99999999] inset-0 flex jsutify-center">
       <div className="bg-white w-[80%] px-5 py-5 top-[20%] absolute left-1/2 -translate-x-1/2 h-[60%] lg:h-[20%] rounded-xl flex mx-auto">
       <div className="relative mx-auto  w-full h-fit">
                   <input type="text" className='border w-full border-[#0000004D] bg-white rounded-[8px] outline-none py-1 placeholder:text-sm pr-8 pl-3' placeholder='Search' />
                   <div className="absolute top-1/2 right-3 -translate-y-1/2">
                   <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <ellipse cx="5.90384" cy="6.49116" rx="5.37577" ry="6.41938" fill="white"/>
   <path d="M10.7796 6.49116C10.7796 9.84711 8.51723 12.4105 5.90384 12.4105C3.29046 12.4105 1.02808 9.84711 1.02808 6.49116C1.02808 3.13521 3.29046 0.571777 5.90384 0.571777C8.51723 0.571777 10.7796 3.13521 10.7796 6.49116Z" stroke="#00000080" />
   <line y1="-0.5" x2="5.8247" y2="-0.5" transform="matrix(0.642035 0.766675 -0.642035 0.766675 9.40771 10.6777)" stroke="#00000080"/>
   </svg>
   
                   </div>
               </div>
               </div>
       </div>
    }



    {/* links drawer */}
    {linksModal &&
    <div className="flex h-screen transition-all duration-500 flex-col w-full fixed top-0 left-0 bg-white z-[9999999999999999] p-8  gap-6">
    <div onClick={linksModalChanger} className="absolute right-4 cursor-pointer top-4">
    <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.066 8.995a.75.75 0 1 0-1.06-1.061L12 10.939L8.995 7.934a.75.75 0 1 0-1.06 1.06L10.938 12l-3.005 3.005a.75.75 0 0 0 1.06 1.06L12 13.06l3.005 3.006a.75.75 0 0 0 1.06-1.06L13.062 12z"/></svg>
    </div>
            {['Home','Map Search','Home Valuation','Blog','Contact us'].map((link,idx)=>{
              return(
                  <Link
                  key={idx}
                  href={"#"}
                  className={`w-fit font-medium ${idx === 2 ? 'border-[#6965FD]' : 'border-transparent'} border-b-2 transition-all duration-200 hover:border-[#6965FD] leading-none pb-1 text-[18px]`}
                   >
                      {link}
                   </Link>
              )
            })}
          </div>
    }

 
    </>
  )
}

export default NavBar