import React from 'react'
import Hero from '../layouts/Hero'
import Footer from '../layouts/Footer'
import Destinations from '../layouts/Destinations'
import Service from '../layouts/Service'
import Logo from '../layouts/Logo'
import Steps from '../layouts/Steps'
import Subscribe from '../layouts/Subscribe'
import Reviews from '../layouts/Reviews'

const Home = () => {
  return (
    <>
      <Hero />
      <Service/>
      <Steps/>
      <Destinations/>
      <Reviews/>
      <Logo/>
      <Subscribe/>
      <Footer />
    </>
  )
}

export default Home