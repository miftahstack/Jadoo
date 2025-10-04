import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import destinationOne from '../../assets/1.png'
import destinationTwo from '../../assets/2.png'
import destinationThree from '../../assets/3.png'
import spiral from '../../assets/spiral.png'


// Aos
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from 'react'
// Aos

import { FaLocationArrow } from "react-icons/fa6";

const Destinations = () => {
     useEffect(() => {
          AOS.init({
            duration: 1000, // Animation duration
            once: true, // Whether animation should only happen once
            disable: "mobile", // Disable animations on mobile devices
          });
        }, []);
   return (
      <section className='pb-50'>
         <Container>
            <div data-aos="fade-up"  className="text-center mb-17.5">
               <h4 className='text-[16px] font-semibold text-[#5E6282]'>Top Selling</h4>
               <h3 className='md:text-[50px] text-[32px] font-bold font-Volkhov'>Top Destinations</h3>
            </div>
            <Flex className={`md:justify-evenly justify-items-center md:space-y-0 space-y-60 md:flex-row flex-col `}>
               <div data-aos="fade-up"   data-aos-delay="200" className=" w-[335px] h-[350px] shadow-lg">
                  <div className="">
                     <img className='rounded-t-2xl w-[335px] h-[400px]' src={destinationThree} alt="place01.png" />
                  </div>
                  <div className="p-3 bg-white shadow-2xl rounded-b-2xl text-[#5E6282]">
                     <div className="flex justify-between py-3">
                        <p>Rome, Italy</p>
                        <span>$5.42k</span>
                     </div>
                     <p className='flex items-center pb-5'><FaLocationArrow className='mr-2 text-black' /> 10 Days Trip</p>
                  </div>
               </div>
               <div data-aos="fade-up"   data-aos-delay="200" className=" w-[335px] h-[350px] shadow-lg">
                  <div className="">
                     <img className='rounded-t-2xl w-[335px] h-[400px]' src={destinationTwo} alt="place01.png" />
                  </div>
                  <div className="p-3 bg-white shadow-2xl rounded-b-2xl text-[#5E6282]">
                     <div className="flex justify-between py-3">
                        <p>Rome, Italy</p>
                        <span>$5.42k</span>
                     </div>
                     <p className='flex items-center pb-5'><FaLocationArrow className='mr-2 text-black' /> 10 Days Trip</p>
                  </div>
               </div>
               <div data-aos="fade-up"   data-aos-delay="200" className="relative w-[335px] h-[350px] shadow-lg">
                  <div className="">
                     <img className='rounded-t-2xl w-[335px] h-[400px]' src={destinationOne} alt="place01.png" />
                  </div>
                  <div className="p-3 bg-white shadow-2xl rounded-b-2xl text-[#5E6282]">
                     <div className="flex justify-between py-3">
                        <p>Rome, Italy</p>
                        <span>$5.42k</span>
                     </div>
                     <p className='flex items-center pb-5'><FaLocationArrow className='mr-2 text-black' /> 10 Days Trip</p>
                  </div>
                  <img className='absolute top-1/2 -right-15 -z-10' src={spiral} alt="" />
               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Destinations