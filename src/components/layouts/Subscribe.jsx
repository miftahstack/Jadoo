import React from "react";
import Container from "../Container";

import { PiEnvelopeThin } from "react-icons/pi";

const Subscribe = () => {
  return (
    <section>
      <Container>
        <div className="bg-[url(/src/assets/subscribe.jpg)] bg-cover bg-center bg-no-repeat py-[120px] md:py-[200px] px-5 md:px-0">
          <h3 className="text-[#5E6282] mb-8 md:mb-15 text-[16px] md:text-[33px] font-bold text-center md:px-40 leading-snug">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h3>

          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 sm:gap-x-5 justify-center items-center">
            <div className="relative flex items-center w-full sm:w-[400px] bg-white rounded-xl shadow-sm">
              <PiEnvelopeThin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full pl-12 pr-14 py-3 rounded-xl outline-none border border-gray-300 text-sm md:text-base"
              />
            </div>

            <button className="w-full sm:w-auto px-6 py-3 cursor-pointer rounded-xl text-white shadow-lg bg-gradient-to-t from-[#FF7F68] to-[#FF936D] hover:scale-105 transition-transform duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
