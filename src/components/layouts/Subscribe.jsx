import React from 'react'
import Container from '../Container'

import { PiEnvelopeThin } from "react-icons/pi";

const Subscribe = () => {
   return (
      <section>
         <Container>
            <div className="bg-[url(/src/assets/subscribe.jpg)] bg-contain bg-center bg-no-repeat py-[200px]">
               <h3 className='text-[#5E6282] mb-15  text-[33px] px-40 font-bold text-center'>Subscribe to get information, latest news and other
                  interesting offers about Jadoo</h3>
               <div className="flex gap-x-5 justify-center">
                  <div className="relative flex items-center bg-white rounded-xl shadow-sm ">
                     <PiEnvelopeThin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                     <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-14 py-3 rounded-xl outline-none 
               border border-gray-300 "
                     />
                  </div>
                  <button class="px-6 py-3 cursor-pointer rounded-xl text-white  shadow-lg bg-gradient-to-t from-[#FF7F68] to-[#FF936D]">
                     Subscribe
                  </button>
               </div>
            </div>
         </Container>
      </section>
   )
}

export default Subscribe