'use client'

import React, { useState } from 'react'
import HeroHome from '../components/HeroHome'
import ExploreHome from '../components/ExploreHome'
import MarketReport from '../components/MarketReport'
import HomeWonors from '../components/HomeWonors'
import '../style.css'
import CustomReport from '../components/CustomReport'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import HomeSteps from '../components/homeSteps'


const page = () => {
  const [steps, setsteps] = useState(false)

  const stepsHandler = () => {
    setsteps((prev)=>!prev)
  }
  return (
    <div className=''>
      <HeroHome handler={stepsHandler}  />
      <ExploreHome />
      <MarketReport />
      <HomeWonors />
      <CustomReport />
      <FAQ />
      <Footer />



      {/* steps */}
{steps && 
      <HomeSteps handler={stepsHandler} />
}
    </div>
  )
}

export default page;