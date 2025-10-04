
import Container from '../Container'
import Flex from '../Flex'

// Img
import serviceOne from '../../assets/serviceOne.svg'
import serviceTwo from '../../assets/serviceTwo.svg'
import serviceThree from '../../assets/serviceThree.svg'
import serviceFour from '../../assets/serviceFour.svg'
// Img

// Aos
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import React, { useEffect } from 'react'
// Aos

const Service = () => {
   useEffect(() => {
       AOS.init({
         duration: 1000, // Animation duration
         once: true, // Whether animation should only happen once
         disable: "mobile", // Disable animations on mobile devices
       });
     }, []);
   return (
      <section className='py-25'>
         <Container>
            <div data-aos="fade-up" className="text-center mb-17.5">
               <h4 className='text-[16px] font-semibold text-[#5E6282]'>Services</h4>
               <h3  className=' md:text-[50px] text-[32px] font-bold font-Volkhov'>We Offer Best Services</h3>
            </div>
            <Flex className={`md:justify-between justify-items-center grid space-y-7.5 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 `}>
               <div className="relative group cursor-pointer">
                  <div className="w-[250px] h-[290px] p-5 flex flex-col justify-center items-center  hover:shadow-lg rounded-4xl z-10 bg-white">
                     <div className="">
                        <img src={serviceOne} alt="" />
                     </div>
                     <div className="text-center py-4">
                        <h4 className='text-[#1E1D4C] text-[20px] pb-2'>Calculated Weather</h4>
                        <p className='text-[#5E6282] px-5 '>Built Wicket longer admire do barton vanity itself do in it.</p>
                     </div>
                  </div>
                  <div className="rounded-t-4xl bg-[#DF6951] w-[80px] h-[80px] absolute bottom-0 left-0 translate-y-[40%] -translate-x-[40%] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
               </div>
               <div className="relative group cursor-pointer">
                  <div className="w-[250px] h-[290px] p-5 flex flex-col justify-center items-center  hover:shadow-lg rounded-4xl z-10 bg-white">
                     <div className="">
                        <img className='scale-200 w-20 pb-3' src={serviceTwo} alt="" />
                     </div>
                     <div className="text-center ">
                        <h4 className='text-[#1E1D4C] text-[20px] pb-2'>Best Flights</h4>
                        <p className='text-[#5E6282] px-5 '>Engrossed listening. Park gate sell they west hard for the.</p>
                     </div>
                  </div>
                  <div className="rounded-t-4xl bg-[#DF6951] w-[80px] h-[80px] absolute bottom-0 left-0 translate-y-[40%] -translate-x-[40%] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
               </div>
               <div className="relative group cursor-pointer">
                  <div className="w-[250px] h-[290px] p-5 flex flex-col justify-center items-center  hover:shadow-lg rounded-4xl z-10 bg-white">
                     <div className="">
                        <img src={serviceThree} alt="" />
                     </div>
                     <div className="text-center py-4">
                        <h4 className='text-[#1E1D4C] text-[20px] pb-2'>Local Events</h4>
                        <p className='text-[#5E6282] px-5 '>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                     </div>
                  </div>
                  <div className="rounded-t-4xl bg-[#DF6951] w-[80px] h-[80px] absolute bottom-0 left-0 translate-y-[40%] -translate-x-[40%] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
               </div>
               <div className="relative group cursor-pointer">
                  <div className="w-[250px] h-[290px] p-5 flex flex-col justify-center items-center  hover:shadow-lg rounded-4xl z-10 bg-white">
                     <div className="">
                        <img src={serviceFour} alt="" />
                     </div>
                     <div className="text-center py-4">
                        <h4 className='text-[#1E1D4C] text-[20px] pb-2'>Customization</h4>
                         <p className='text-[#5E6282] px-5 '>We deliver outsourced aviation services formilitary customers</p>
                     </div>
                  </div>
                  <div className="rounded-t-4xl bg-[#DF6951] w-[80px] h-[80px] absolute bottom-0 left-0 translate-y-[40%] -translate-x-[40%] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Service