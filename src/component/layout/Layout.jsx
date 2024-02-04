import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import HeroSection from '../hero-section/HeroSection'
import Filter from '../filter/Filter'

export default function Layout() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Filter></Filter>
      <Footer></Footer>
    </>
  )
}
