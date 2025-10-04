import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import logoThree from '../../assets/output-onlinepngtools-3.png'
import logoOne from '../../assets/output-onlinepngtools.png'
import logoTwo from '../../assets/output-onlinepngtools-2.png'
import logoFour from '../../assets/logoFour.svg'
import logoFive from '../../assets/logoFive.svg'


// Aos
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import  { useEffect } from 'react'
// Aos


const Logo = () => {
    useEffect(() => {
          AOS.init({
            duration: 1000, 
            once: true, 
            disable: "mobile", 
          });
        }, []);
   return (
      <section className='py-25'>
         <Container>
            <Flex className={`md:justify-between md:flex-row flex-col  space-y-5`}>
               <div data-aos="fade-right" className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoThree} alt="l" />
               </div>
               <div data-aos="fade-up"  className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoTwo} alt="l" />
               </div>
               <div data-aos="zoom-in" className="hover:shadow-lg h-[80px]  w-[160px] grayscale hover:grayscale-0 duration-300 transition-all  flex items-center justify-center rounded-2xl">
                  <img className='scale-90' src={logoOne} alt="l" />
               </div>
               <div data-aos="fade-down" className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoFour} alt="l" />
               </div>
               <div data-aos="fade-left" className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoFive} alt="l" />
               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Logo