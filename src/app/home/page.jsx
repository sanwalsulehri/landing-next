import React from 'react'
import HeroHome from '../components/HeroHome'
import ExploreHome from '../components/ExploreHome'
import MarketReport from '../components/MarketReport'
import HomeWonors from '../components/HomeWonors'
import '../style.css'
import CustomReport from '../components/CustomReport'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div className=''>
      <HeroHome />
      <ExploreHome />
      <MarketReport />
      <HomeWonors />
      <CustomReport />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page