import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Value from './components/Value'
import Featured from './components/Featured'
import Newsletter from './components/Newsletter'
import Partner from './components/Partner'
import './style.css'

const page = () => {
  return (
    <div className='bg-white 2xl:max-w-8xl px-4 2xl:mx-auto'>
      <NavBar />
      <HeroSection />
      <Value />
      <Featured />
      <Partner />
      <Newsletter />
    </div>
  )
}

export default page