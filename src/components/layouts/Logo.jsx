import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

import logoOne from '../../assets/logoOne.svg'
// import logoOne from '../../assets/logoOne.svg'
// import logoOne from '../../assets/logoOne.svg'
// import logoOne from '../../assets/logoOne.svg'
// import logoOne from '../../assets/logoOne.svg'

const Logo = () => {
   return (
      <section className='py-25'>
         <Container>
            <Flex>
               <div className="np hover:shadow-lg">
                  <img src={logoOne} alt="" />
               </div>
            </Flex>
         </Container>
      </section>
   )
}

export default Logo