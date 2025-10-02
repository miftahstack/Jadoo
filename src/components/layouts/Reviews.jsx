import React from 'react'
import Container from '../Container'
// Img
import reviewOne from '../../assets'
// Img

const Reviews = () => {
   return (
      <section className='py-25'>
         <Container>
            <div className="mb-17.5">
               <h4 className='text-[16px] font-semibold text-[#5E6282]'>TESTIMONIALS</h4>
               <h3 className='text-[50px] font-bold font-Volkhov capitalize w-[450px] text-[#14183E]'>What people say about Us.</h3>
            </div>

            <div className="">
               <div className="">
                  <img src={reviewOne} alt="" />
               </div>
               <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
               <h5>Mike taylor</h5>
               <p>Lahore, Pakistan</p>
            </div>

         </Container>
      </section>
   )
}

export default Reviews