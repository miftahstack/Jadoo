import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import logoThree from '../../assets/output-onlinepngtools-3.png'
import logoOne from '../../assets/output-onlinepngtools.png'
import logoTwo from '../../assets/output-onlinepngtools-2.png'
import logoFour from '../../assets/logoFour.svg'
import logoFive from '../../assets/logoFive.svg'

const Logo = () => {
   return (
      <section className='py-25'>
         <Container>
            <Flex className={`justify-between`}>
               <div className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoThree} alt="l" />
               </div>
               <div className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoTwo} alt="l" />
               </div>
               <div className="hover:shadow-lg h-[80px]  w-[160px] grayscale hover:grayscale-0 duration-300 transition-all  flex items-center justify-center rounded-2xl">
                  <img className='scale-90' src={logoOne} alt="l" />
               </div>
               <div className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoFour} alt="l" />
               </div>
               <div className="hover:shadow-lg h-[80px] w-[160px] grayscale hover:grayscale-0 duration-300 transition-all flex items-center justify-center rounded-2xl">
                  <img src={logoFive} alt="l" />
               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Logo