import React from 'react'
import Hero from '../layouts/Hero'
import Footer from '../layouts/Footer'
import Destinations from '../layouts/Destinations'
import Service from '../layouts/Service'
import Logo from '../layouts/Logo'
import Steps from '../layouts/Steps'

const Home = () => {
  return (
    <>
      <Hero />
      <Service/>
      <Steps/>
      <Destinations/>
      <Logo/>
      <Footer />
    </>
  )
}

export default Home