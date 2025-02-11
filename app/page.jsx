import About from '@/components/About'
import Footer from '@/components/Footer'
import HeroCarousel from '@/components/HeroCarousel'
import Navbar from '@/components/Navbar'

import OurServices from '@/components/OurServices'
import Reviews from '@/components/Reviews'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <HeroCarousel />
    <About />
    <OurServices />
    <Reviews />
   
    
    </>
  )
}

export default Home
