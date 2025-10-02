import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import { CiHeart } from "react-icons/ci";

// Img
import stepOne from '../../assets/stepOne.svg'
import stepTwo from '../../assets/stepTwo.svg'
import stepThree from '../../assets/stepthree.svg'

import stepImg from '../../assets/Rectangle 17.jpg'
import stepMask from '../../assets/Mask Group.png'

import stepIconOne from '../../assets/LEAF.svg'
import stepIconTwo from '../../assets/map icon.svg'
import stepIconThree from '../../assets/send.svg'
import stepIconFour from '../../assets/send.svg'

// Img

const Steps = () => {
   return (
      <section>
         <Container>
            <Flex className={` justify-between overflow-hidden`}>
               <div className=" ">
                  <div className="mb-17.5">
                     <h4 className='text-[16px] font-semibold text-[#5E6282]'>Easy and Fast</h4>
                     <h3 className='text-[50px] font-bold font-Volkhov capitalize w-[450px] text-[#14183E]'>Book your next trip in 3 easy steps</h3>
                  </div>

                  <div className="space-y-12">
                     <div className="flex gap-x-5 items-center">
                        <div className="">
                           <img src={stepOne} alt="" />
                        </div>
                        <div className="">
                           <h4 className='text-[#5E6282] font-bold'>Choose Destination</h4>
                           <p className='text-[#5E6282] w-[350px] '>Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                     </div>
                     <div className="flex gap-x-5 items-center">
                        <div className="">
                           <img src={stepTwo} alt="" />
                        </div>
                        <div className="">
                           <h4 className='text-[#5E6282] font-bold'>Make Payment</h4>
                           <p className='text-[#5E6282] w-[350px] '>Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                     </div>
                     <div className="flex gap-x-5 items-center">
                        <div className="">
                           <img src={stepThree} alt="" />
                        </div>
                        <div className="">
                           <h4 className='text-[#5E6282] font-bold'>Reach Airport on Selected Date</h4>
                           <p className='text-[#5E6282] w-[350px] '>Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="relative  right-1/7 rounded-4xl shadow-2xl p-5 py-5 ">
                  
                  <div className="pb-5">
                     <img src={stepImg} alt="" />
                  </div>
                  <h4 className='text-[18px] py-2'>Trip To Greece</h4>
                  <p className='text-[#84829A]'> 14-29 June | by Robbin joseph </p>

                  <div className="flex gap-x-4 py-5">
                     <img src={stepIconOne} alt="" />
                     <img src={stepIconTwo} alt="" />
                     <img src={stepIconThree} alt="" />
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex items-center gap-x-4">
                        <div className="">
                           <img src={stepIconFour} alt="" />
                        </div>
                        <span className='text-[#84829A]'>24 people going</span>
                     </div>
                     <CiHeart className='text-[30px]' />
                  </div>

                  <div className="absolute -right-80 bottom-15 p-5   bg-white rounded-3xl ">
                     <div className="flex gap-x-5 items-center">
                        <div className="">
                           <img src={stepMask} alt="" />
                        </div>
                        <div className=" ">
                           <p className='text-[#5E6282] w-[350px] '>Ongoing</p>
                           <h4 className='text-[20px] pb-2'>Trip to Remove</h4>
                           <p><span className='text-[#8A79DF]'>40%</span>completed</p>
                           <progress className="progress w-56 h-2 bg-[#8A79DF] rounded-full" value={0} max="400"></progress>
                        </div>
                     </div>
                  </div>

               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Steps