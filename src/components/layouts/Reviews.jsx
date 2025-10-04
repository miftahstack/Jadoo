import React from 'react'
import Container from '../Container'

import { FaChevronUp } from "react-icons/fa";

// Img
import reviewOne from '../../assets/reviewOne.png'
import Flex from '../Flex'
import { FaChevronDown } from 'react-icons/fa6';
// Img

const Reviews = () => {



   const handleUp = () => {
      console.log("Clicked");
   }

   return (
      <section className='py-50'>
         <Container>
            <Flex className={`justify-between`}>

               <div className="mb-17.5 ">
                  <h4 className='text-[16px] font-semibold text-[#5E6282]'>TESTIMONIALS</h4>
                  <h3 className='text-[50px] font-bold font-Volkhov capitalize w-[450px] text-[#14183E]'>What people say about Us.</h3>
               </div>

               <div className="flex items-center gap-x-5">
                  <div className="relative">
                     <div className="absolute -top-12 -left-10">
                        <img className='w-20 h-20 bg-cover rounded-full' src={reviewOne} alt="" />
                     </div>

                     <div className="text-[#5E6282] p-7.5 rounded-xl h-[240px] w-[630px] pr-17 shadow-2xl">
                        <p className='mb-10 leading-7 text-[18px]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <h5 className='text-[20px] font-semibold'>Mike taylor</h5>
                        <p>Lahore, Pakistan</p>
                     </div>
                  </div>

                  <div className="space-y-5">
                     <FaChevronUp onClick={handleUp} />
                     <FaChevronDown />
                  </div>
               </div>
            </Flex>
         </Container>
      </section >
   )
}

export default Reviews