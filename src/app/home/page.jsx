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
import Login from '../components/Login'


const page = () => {
  const [steps, setsteps] = useState(false)

  const stepsHandler = () => {
    setsteps((prev)=>!prev)
  }


  
   const [signInModal, setsignInModal] = useState(false)
  
    const signInhandler = () => {
      setsignInModal((prev)=>!prev)
    }


  return (
    <div className=''>
      <HeroHome signInhandler={signInhandler} handler={stepsHandler}  />
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

{/* sign In */}
{signInModal && 
 <Login signInhandler={signInhandler}/>
}
    </div>
  )
}

export default page;