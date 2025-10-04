import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

// Img
import social from '../../assets/Social.svg'
import socialTwo from '../../assets/Social-2.svg'
import socialThree from '../../assets/Social-3.svg'
import playStore from '../../assets/Play Store.svg'
import appStore from '../../assets/Google Play.svg'

// Img

const Footer = () => {
   return (
      <section>
         <Container className={``}>
            <Flex className={`md:justify-between text-center md:flex-row space-y-5 justify-center flex-col md:items-start md:py-20`}>
               <div className="">
                  <h3 className='text-[#181E4B] text-[44px]'>Jadoo.</h3>
                  <p className='text-[#5E6282] w-[300px]'>Book your trip in minute, get full
                     Control for much longer.
                  </p>
               </div>
               <div className="">
                  <ul className='space-y-2.5'>
                     <li className='text-[21px] font-bold'>Company</li>
                     <li className='text-[#5E6282]'>About</li>
                     <li className='text-[#5E6282]'>Careers</li>
                     <li className='text-[#5E6282]'>Mobile</li>
                  </ul>
               </div>
               <div className="">
                  <ul className='space-y-2.5'>
                     <li className='text-[21px] font-bold'>Contact</li>
                     <li className='text-[#5E6282]'>Help/FAQ</li>
                     <li className='text-[#5E6282]'>Press</li>
                     <li className='text-[#5E6282]'>Affiliate</li>
                  </ul>
               </div>
               <div className="">
                  <ul className='space-y-2.5'>
                     <li className='text-[21px] font-bold'>More</li>
                     <li className='text-[#5E6282]'>Airlinefees</li>
                     <li className='text-[#5E6282]'>Airline</li>
                     <li className='text-[#5E6282]'>Low fair tips</li>
                  </ul>
               </div>
               <div className="">
                  <div className="flex justify-center pb-3">
                     <img src={social} alt="" />
                     <img src={socialTwo} alt="" />
                     <img src={socialThree} alt="" />
                  </div>
                  <span className='text-[#404040] '>Discover Our App</span>
                  <div className="flex gap-x-3 mt-3">
                     <img src={appStore} alt="" />
                     <img src={playStore} alt="" />
                  </div>
               </div>
            </Flex>
            <h4 className='text-center pb-10 text-[#404040] mt-2'>All rights reserved@jadoo.co</h4>
         </Container>
      </section>
   )
}

export default Footer