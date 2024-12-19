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
    <div className=' 2xl:max-w-8xl  2xl:mx-auto'>
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