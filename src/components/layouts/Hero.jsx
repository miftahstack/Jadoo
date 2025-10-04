import React, { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";

// React Icons
// import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosPlay } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
// React Icons

// Img
import logo from "../../assets/Logo.svg";
import travel from "../../assets/travel.png";
// Img

const Hero = () => {
  const [bar, setBar] = useState(false);
  const handleBar = () => {
    setBar(!bar);
  };

  return (
    <section className="mb-50">
      <div className=" bg-[url(/src/assets/decore.png)] bg-contain bg-top-right bg-no-repeat pt-1 md:h-[600px] ">
        {/* Only For Mobile */}
        <Container className={`md:hidden pb-6.5`}>
          <Flex className={`justify-between p-5`}>
            <div className="">
              <img src={logo} alt="logo.png" />
            </div>

            <div onClick={handleBar} className="cursor-pointer z-50">
              {bar ? (
                <RxCross2
                  FaBars
                  className="text-[26px] text-gray-700 hover:rotate-90  transition-all duration-300"
                />
              ) : (
                <FaBars className="text-[24px] text-gray-700 hover:scale-110 transition-all duration-200" />
              )}
            </div>

            {bar && (
              <>
                <ul className="space-y-7.5 text-[18px] text-center bg-primaryy  text-white absolute p-5 top-20 left-0 w-full">
                  <li className="">Desitnations</li>
                  <li className="">Hotels</li>
                  <li className="">Flights</li>
                  <li className="">Bookings</li>
                  <li className="">Login</li>
                  <li className="border px-4 py-1.5 rounded-[5px]">Sign Up</li>
                  <li>En</li>
                </ul>
              </>
            )}
          </Flex>
        </Container>
        {/* Only For Mobile */}
        <Container>
          <Flex className={`hidden md:flex justify-between mt-13.5`}>
            <div className="">
              <img src={logo} alt="logo.png" />
            </div>
            <div className="">
              <ul className="flex gap-x-13.5 items-center">
                <li>Desitnations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
                <li>Login</li>
                <li className="border px-4 py-1.5 rounded-[5px]">Sign Up</li>
                <li>En</li>
              </ul>
            </div>
          </Flex>
        </Container>

        <Container className={`py-7.5`}>
          <Flex
            className={`md:justify-between flex-col text-center md:flex-row`}
          >
            <div className=" md:text-left mb-17.5">
              <h2 className="md:text-[16px] text-[14px] text-[#DF6951] font-bold uppercase">
                Best Destinations around the world
              </h2>
              <h1 className="md:text-[80px] text-[42px] leading-12 md:leading-22.5 py-5 px-15 md:px-0 md:w-[550px] md:-tracking-[2px] font-bold font-Volkhov">
                Travel, enjoy and live a new and full life
              </h1>
              <p className="md:w-[430px] px-7.5 md:px-0 text-[#5E6282]">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="flex items-center gap-x-7.5 justify-center md:justify-start mt-10">
                <button className=" rounded-[10px] bg-amber-400 drop-shadow-[#F1A501] cursor-pointer drop-shadow-sm text-white px-8 py-4">
                  Find Out More
                </button>
                <div className="flex items-center gap-x-4">
                  <button className="bg-[#DF6951] drop-shadow-[#DF6951] drop-shadow-2xl  text-white w-13.5 h-13.5 flex items-center justify-center rounded-full">
                    <IoIosPlay className="text-[25px]" />
                  </button>
                  <span className="text-[#404040]">Play Demo</span>
                </div>
              </div>
            </div>
            <div className="">
              <img className="w-[700px]" src={travel} alt="travel.png" />
            </div>
          </Flex>
          <Flex className={`gap-x-5`}></Flex>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
