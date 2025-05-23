import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div>
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="text-gray-300 font-medium font-[Poppins] tracking-wide">
                Category
              </p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Refrences
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 font-medium font-[Poppins] tracking-wide">
                Hot
              </p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Climate Change
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Polution
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Fosil Fuel
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Science
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 font-medium font-[Poppins] tracking-wide">
                Trending
              </p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Hot Headlines
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Inovation
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Tech
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-gray-300 font-medium font-[Poppins] tracking-wide">
                Services
              </p>
              <ul className="mt-2 space-y-2 ">
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Webs
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribtion */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0 mt-5 py-6">
            <p className="font-medium font-[Poppins] tracking-wide text-gray-300">
              Subscribe For Updates
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />

              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 mt-2 rounded-sm text-white transition-colors duration-300 hover:bg-gray-500"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="text-center">
            <p className="text-gray-400 border-t-2 py-2 border-gray-500">
              Copyright 2025 | All Rights Reserves
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
