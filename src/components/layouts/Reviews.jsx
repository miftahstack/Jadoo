import React from "react";
import Container from "../Container";

import { FaChevronUp } from "react-icons/fa";

// Aos
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import  { useEffect } from 'react'
// Ao

// Img
import reviewOne from "../../assets/reviewOne.png";
import Flex from "../Flex";
import { FaChevronDown } from "react-icons/fa6";
// Img

const Reviews = () => {
  const handleUp = () => {
    console.log("Clicked");
  };

   useEffect(() => {
         AOS.init({
           duration: 1000, 
           once: true, 
           disable: "mobile", 
         });
       }, []);

  return (
    <section className="md:py-50 py-25">
      <Container>
        <Flex
          className={`md:justify-between justify-items-center flex-col md:flex-row md:items-start gap-y-10`}
        >
          <div className="mb-17.5 md:text-left text-center">
            <h4 className="text-[16px] font-semibold text-[#5E6282] uppercase">
              Testimonials
            </h4>
            <h3 className="md:text-[50px] text-[32px] px-5 md:px-0 font-bold font-Volkhov capitalize w-[450px] text-[#14183E]">
              What people say about Us.
            </h3>
          </div>

          <div data-aos="fade-down"  className="flex flex-col md:flex-row items-center gap-y-6 md:gap-x-5 relative">
            <div className="relative flex flex-col md:block items-center md:items-start">
              <div className="absolute md:static -top-10 md:-top-12 md:-left-10">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 bg-cover rounded-full shadow-md"
                  src={reviewOne}
                  alt="Reviewer"
                />
              </div>

              <div className="text-[#5E6282] mt-10 md:mt-0 p-5 md:p-7.5 rounded-xl md:h-[240px] w-[90vw] md:w-[630px] pr-5 md:pr-17 shadow-2xl bg-white text-center md:text-left">
                <p className="mb-6 md:mb-10 leading-7 text-[16px] md:text-[18px]">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <h5 className="text-[18px] md:text-[20px] font-semibold">
                  Mike Taylor
                </h5>
                <p className="text-[14px]">Lahore, Pakistan</p>
              </div>
            </div>

            <div
              className="flex md:flex-col gap-x-8 md:gap-x-0 md:space-y-5 mt-4 md:mt-0 
                  md:absolute md:left-full md:ml-4 md:top-1/2 md:-translate-y-1/2"
            >
              <FaChevronUp
                onClick={handleUp}
                className="text-gray-600 hover:text-gray-800 cursor-pointer text-[20px]"
              />
              <FaChevronDown className="text-gray-600 hover:text-gray-800 cursor-pointer text-[20px]" />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Reviews;
