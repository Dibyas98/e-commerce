import React from 'react'
import HeroSection from '../../component/hero-section/HeroSection'
import Filter from '../../component/filter/Filter'
import Track from '../../component/track/Track'
import Testimonial from '../../component/testimonial/Testimonial'
import Footer from '../../component/footer/Footer'

export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
    <Filter></Filter>
    <Track></Track>
    <Testimonial></Testimonial>
    <Footer></Footer>
    </>
  )
}
