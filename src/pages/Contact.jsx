import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXmark, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div className="py-40 bg-black/95 text-center text-white px-4">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 font-[Poppins]">
          Get In Touch
        </h1>
        <p className="font-[Poppins] mt-5 ">Make sure to follow us and report your case here</p>
      </div>

      <div className="p-12 max-w-[1200px] mx-auto">
        <div className="">
          <div className="p-12 bg-black/95 flex flex-col md:w-full mx-auto rounded shadow-lg shadow-orange-700">
          <h1 className="text-white text-center font-bold font-[Poppins] text-3xl mb-5 ">Contact Us</h1>
            <input
              className="my-2 p-2 rounded border-2 border-black focus:outline-none font-semibold font-[Poppins] text-[#6B7280]"
              type="text"
              placeholder="Name"
            />
            <input
              className="my-2 p-2 rounded border-2 border-black focus:outline-none font-semibold font-[Poppins] text-[#6B7280]"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="my-2 p-2 rounded border-2 border-black focus:outline-none h-24  font-semibold font-[Poppins] text-[#6B7280]"
              placeholder="Message"
            ></textarea>

            <div className="p-4 my-2">
              <button className="bg-orange-500 text-white p-2 rounded-sm hover:bg-white hover:text-orange-500 w-full font-semibold font-[Poppins] transition-colors duration-300">
                Submit
              </button>
              <div className="flex gap-8 items-center justify-center">
                <i>
                  <FaFacebook className="text-2xl mt-4 text-white hover:text-orange-500 cursor-pointer" />
                </i>
                <i>
                  <FaInstagram className="text-2xl mt-4 text-white hover:text-orange-500 cursor-pointer" />
                </i>
                <i>
                  <FaXTwitter className="text-2xl mt-4 text-white hover:text-orange-500 cursor-pointer" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
