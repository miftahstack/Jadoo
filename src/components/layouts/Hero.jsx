import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

// React Icons
// import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
// React Icons

// Img
import logo from '../../assets/Logo.svg'
import travel from '../../assets/travel.png'
// Img

const Hero = () => {
   return (
         <section className='mb-50'>
            <div className=" bg-[url(/src/assets/decore.png)] bg-contain bg-right bg-no-repeat pt-1 h-[600px]">
               <Container>
                  <Flex className={`justify-between mt-13.5`}>
                     <div className="">
                        <img src={logo} alt="logo.png" />
                     </div>
                     <div className="">
                        <ul className='flex gap-x-13.5 items-center'>
                           <li>Desitnations</li>
                           <li>Hotels</li>
                           <li>Flights</li>
                           <li>Bookings</li>
                           <li>Login</li>
                           <li className='border px-4 py-1.5 rounded-[5px]'>Sign Up</li>
                           <li>En</li>
                        </ul>
                     </div>
                  </Flex>
               </Container>

               <Container className={`py-7.5`}>
                  <Flex className={`justify-between`}>
                     <div className="">
                        <h2 className='text-[16px] text-[#DF6951] font-bold'>Best Destinations around the world</h2>
                        <h1 className='text-[80px] w-[500px] -tracking-[2px] font-bold font-Volkhov'>Travel, enjoy
                           and live a new
                           and full life</h1>
                        <p className='w-[500px]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                     </div>
                     <div className="">
                        <img className='w-[700px]' src={travel} alt="travel.png" />
                     </div>
                  </Flex>
                  <Flex className={`gap-x-5`}>
                     <button className=' rounded-[5px] bg-amber-400  text-white px-4 py-2'>Find Out More</button>
                     <div className="flex items-center gap-x-4">
                        <button className='bg-[#DF6951] text-white w-10 h-10 flex items-center justify-center rounded-full'>
                           <IoIosPlay />
                        </button>
                        <span className='text-[#404040]'>Play Demo</span>
                     </div>
                  </Flex>
               </Container>
            </div>
         </section>
   )
}

export default Hero