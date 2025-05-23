import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXmark, FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)

  // navItems
  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    // { id: 4, name: "News", path: "/blogs" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  // model details
  const openModal = ()=>{
    setIsModalOpen(true)
  }

  const closeModal = ()=>{
    setIsModalOpen(false)
  }

  return (
    <div>
      <header className="bg-black">
        <nav className="p-4 flex justify-between items-center max-w-[1200px] mx-auto">
          <div>
            <a
              href="/"
              className="text-3xl font-extrabold font-[Poppins] text-white"
            >
              News.<span className="text-orange-500">Org</span>
            </a>
          </div>

          <div>
            <ul className="md:flex md:items-center gap-12 hidden">
              {navItems.map(({ id, name, path }) => (
                <li
                  key={id}
                  className="text-white font-normal font-[Poppins] hover:text-orange-400"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-white"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <i
              className="text-3xl text-white md:hidden cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaXmark /> : <IoMenu />}
            </i>
            {/* Mobile Menu */}
            <div
              className={`absolute md:hidden top-14 left-0 w-full bg-black p-4 flex flex-col items-center gap-7 font-normal font-[Poppins] transition-transform ${
                isMenuOpen
                  ? "transform translate-y-0 opacity-100"
                  : "transform translate-y-full opacity-0"
              }`}
              style={{ transition: "transform 0.5s ease, opacity 0.3s ease" }}
            >
              {navItems.map(({ id, name, path }) => (
                <li
                  key={id}
                  className="text-white font-normal list-none font-[Poppins] hover:text-orange-400"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "text-orange-500" : "text-white"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              <div className="flex items-center flex-col">
                <button onClick={openModal} className="bg-orange-500 text-white p-2 rounded-sm hover:bg-white hover:text-orange-500">
                  Log in
                </button>
                <div className="flex mt-4 gap-3">
                  <i>
                    <FaFacebook className="text-md text-white hover:text-orange-500" />
                  </i>
                  <i>
                    <FaInstagram className="text-md text-white hover:text-orange-500" />
                  </i>
                  <i>
                    <FaXTwitter className="text-md text-white hover:text-orange-500" />
                  </i>
                </div>
              </div>
            </div>
          </div>

          {/* modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal}/>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <i>
              <FaFacebook className="text-md text-white hover:text-orange-500" />
            </i>
            <i>
              <FaInstagram className="text-md text-white hover:text-orange-500" />
            </i>
            <i>
              <FaXTwitter className="text-md text-white hover:text-orange-500" />
            </i>
            <button onClick={openModal}  className="bg-orange-500 text-white p-2 rounded-sm hover:bg-white hover:text-orange-500">
              Log in
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
