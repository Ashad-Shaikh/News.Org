import React from "react";
import { FaHandshake } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";

const Services = () => {
  return (
    <div>
      <div className="py-40 bg-black/95 text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 font-[Poppins]">
          Our Services
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mt-12">
          <h1 className="font-[Poppins] text-3xl md:text-5xl font-bold text-orange-500">What We Have To Offer</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap gap-8 py-12 px-4 mx-auto">
          <div className="max-w-[350px] bg-black text-white p-8 text-center rounded hover:scale-105 transition-all  duration-300 border-2 border-black font-[Poppins] cursor-pointer">
            <i>
              <FaHandshake className="text-5xl text-orange-500 mx-auto mb-4" />
            </i>
            <div>
              <h1 className="font-semibold text-3xl my-2">Trusted Sources</h1>
              <p>
                "We bring you news from reliable, verified, and trusted sources
                you can count on."
              </p>
            </div>
          </div>

          <div className="max-w-[350px] bg-black text-white p-8 text-center rounded hover:scale-105 border-2 border-black font-[Poppins]  transition-all  duration-300 cursor-pointer">
            <i>
              <FaHourglassHalf className="text-5xl text-orange-500 mx-auto mb-4" />
            </i>
            <div>
              <h1 className="font-semibold text-3xl my-2">24/7 Updated</h1>
              <p>
                "We bring you news from reliable, verified, and trusted sources
                you can count on."
              </p>
            </div>
          </div>

          <div className="max-w-[350px] bg-black text-white p-8 text-center rounded hover:scale-105 border-2 border-black font-[Poppins] transition-all  duration-300 cursor-pointer">
            <i>
              <AiOutlineSecurityScan className="text-5xl text-orange-500 mx-auto mb-4" />
            </i>
            <div>
              <h1 className="font-semibold text-3xl my-2">Secure Data</h1>
              <p>
                "We bring you news from reliable, verified, and trusted sources
                you can count on."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
