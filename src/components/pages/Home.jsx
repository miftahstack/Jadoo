import React from 'react'
import Hero from '../layouts/Hero'
import Footer from '../layouts/Footer'
import Destinations from '../layouts/Destinations'
import Service from '../layouts/Service'

const Home = () => {
  return (
    <>
      <Hero />
      <Service/>
      <Destinations/>
      <Footer />
    </>
  )
}

export default Home