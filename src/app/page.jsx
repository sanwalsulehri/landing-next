'use client'

import React, { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Value from './components/Value'
import Featured from './components/Featured'
import Newsletter from './components/Newsletter'
import Partner from './components/Partner'
import Login from './components/Login'
import './style.css'

const Page = () => {
  const [signInModal, setsignInModal] = useState(false)

  const signInhandler = () => {
    setsignInModal((prev)=>!prev)
  }

  
  return (
    <div className='bg-white 2xl:max-w-8xl px-4 2xl:mx-auto'>
      <NavBar signInhandler={signInhandler}  />
      <HeroSection />
      <Value />
      <Featured />
      <Partner signInhandler={signInhandler} />
      <Newsletter />


      {signInModal && 
 <Login signInhandler={signInhandler}/>
}
    </div>
  )
}

export default Page