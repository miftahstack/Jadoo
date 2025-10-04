import React from "react";
import Container from "../Container";
import Flex from "../Flex";

import { CiHeart } from "react-icons/ci";

// Img
import stepOne from "../../assets/stepOne.svg";
import stepTwo from "../../assets/stepTwo.svg";
import stepThree from "../../assets/stepthree.svg";

import stepImg from "../../assets/Rectangle 17.jpg";
import stepMask from "../../assets/Mask Group.png";

import stepIconOne from "../../assets/LEAF.svg";
import stepIconTwo from "../../assets/map icon.svg";
import stepIconThree from "../../assets/send.svg";
import stepIconFour from "../../assets/send.svg";
// Img


// Aos
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import React, { useEffect } from 'react'
// Aos

const Steps = () => {
 useEffect(() => {
       AOS.init({
         duration: 1000, // Animation duration
         once: true, // Whether animation should only happen once
         disable: "mobile", // Disable animations on mobile devices
       });
     }, []);

  return (
    <section className="py-25 ">
      <Container>
        <Flex
          className={`flex-col md:flex-row md:justify-between md:overflow-hidden`}
        >
          <div className=" ">
            <div className="mb-17.5 md:text-left text-center">
              <h4 className="text-[16px] font-semibold text-[#5E6282]">
                Easy and Fast
              </h4>
              <h3 className="md:text-[50px] text-[32px] px-5 md:px-0 font-bold font-Volkhov capitalize w-[450px] text-[#14183E]">
                Book your next trip in 3 easy steps
              </h3>
            </div>

            <div className="space-y-7.5 flex flex-col md:text-left text-center">
              <div className=" flex flex-col md:flex-row  gap-x-5 items-center">
                <div className="md:mb-0 mb-3">
                  <img src={stepOne} alt="" />
                </div>
                <div className="">
                  <h4 className="text-[#5E6282] font-bold">
                    Choose Destination
                  </h4>
                  <p className="text-[#5E6282] w-[350px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row  gap-x-5 items-center">
                <div className="md:mb-0 mb-3">
                  <img src={stepTwo} alt="" />
                </div>
                <div className="">
                  <h4 className="text-[#5E6282] font-bold">Make Payment</h4>
                  <p className="text-[#5E6282] w-[350px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row  gap-x-5 items-center">
                <div className="md:mb-0 mb-3">
                  <img src={stepThree} alt="" />
                </div>
                <div className="">
                  <h4 className="text-[#5E6282] font-bold">
                    Reach Airport on Selected Date
                  </h4>
                  <p className="text-[#5E6282] w-[350px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna, tortor tempus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up"  className="md:relative mt-8 md:mt-0 md:right-1/7 rounded-4xl shadow-2xl md:p-5 p-4">
            <div className="pb-4 md:pb-5 flex flex-col items-center">
              <img className="w-full px-3 md:px-0" src={stepImg} alt="" />
            </div>

            <div className="px-3 md:p-0">
              <h4 className="text-[18px] py-1 md:py-2">Trip To Greece</h4>
              <p className="text-[#84829A] text-[15px]">
                14-29 June | by Robbin Joseph
              </p>
            </div>

            <div className="flex gap-x-3 md:gap-x-4 py-4 md:py-5 px-3 md:px-0">
              <img src={stepIconOne} alt="" />
              <img src={stepIconTwo} alt="" />
              <img src={stepIconThree} alt="" />
            </div>

            <div className="flex justify-between items-center px-3 md:px-0">
              <div className="flex items-center gap-x-3 md:gap-x-4">
                <img src={stepIconFour} alt="" />
                <span className="text-[#84829A] text-[14px] md:text-[15px]">
                  24 people going
                </span>
              </div>
              <CiHeart className="text-[26px] md:text-[30px]" />
            </div>

            <div className="md:absolute md:-right-80 md:bottom-15 mt-6 md:mt-0 p-4 md:p-5 bg-white rounded-3xl shadow-md">
              <div className="flex gap-x-4 md:gap-x-5 items-center">
                <img className="w-[50px] md:w-full" src={stepMask} alt="" />
                <div>
                  <p className="text-[#5E6282] text-[14px] md:w-[350px]">
                    Ongoing
                  </p>
                  <h4 className="text-[18px] md:text-[20px] pb-1 md:pb-2">
                    Trip to Rome
                  </h4>
                  <p className="text-[14px]">
                    <span className="text-[#8A79DF]">100%</span> completed
                  </p>
                  <progress
                    className="progress w-[200px] md:w-56 h-[6px] bg-[#8A79DF] rounded-full"
                    value={0}
                    max="400"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Steps;
