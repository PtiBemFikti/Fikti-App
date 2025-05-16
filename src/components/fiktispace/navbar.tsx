"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = async () => {
    // Set animasi saat menu dibuka
    await controls.start({
      opacity: isMenuOpen ? 0 : 1,
      y: isMenuOpen ? -5 : 0,
      animation: "infinite",
      transition: { duration: 0.5, delay: 0.5 },
    });

    // Set animasi saat menu ditutup
    if (!isMenuOpen) {
      await controls.start({
        opacity: 0,
        y: -5,
        transition: { duration: 0.5, delay: 0.5 },
        animation: "backwards",
      });
    }

    // Update status menu
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ type: "keyframes", duration: 0.5, delay: 0.5 }}
      className="bg-[#0A2352] px-4 lg:px-[3.75rem] py-3.5 fixed w-full z-30"
    >
      <div className="">
        <div className="bg-[#2A2364] items-center flex justify-between px-10 py-4 rounded-lg">
          <Link href="#" className="items-center w-10/12 lg:w-1/12">
            <Image
              src="/fiktispace/LOGO FS 4.png"
              alt="Logo"
              width={55}
              height={55}
              className="mr-2"
            />
          </Link>
          <div className="hidden lg:flex lg:w-7/12 md:gap-20">
            <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#compe-list">
              Competition List
            </Link>
            <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#schedule">
              Schedule
            </Link>
            <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#documentation">
              Documentation
            </Link>
            <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#contact">
              FAQ
            </Link>
          </div>
          <div className="hidden lg:flex lg:w-4/12 justify-end gap-6">
            {/* Dropdown Button */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="bg-[#FF8797] rounded-lg px-5 py-2">Contact Us</button>
            
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-9 right-0 bg-[#FF8797] rounded-lg p-2 shadow-lg w-44 z-10">
                  <Link href="https://wa.me/62085819191776">
                    <p className="rounded-md block px-2 py-2 text-white hover:bg-[#FAACB3] cursor-pointer">CP1 (Nazua)</p>
                  </Link>
                  <Link href="https://wa.me/6285883321315">
                    <p className="rounded-md block px-2 py-2 text-white hover:bg-[#FAACB3] cursor-pointer">CP2 (Nayla)</p>
                  </Link>
                </div>
              )}
            </div>
            <Link className="" href="">
              <button className="bg-[#FF8797] rounded-lg px-5 py-2">Daftar</button>
            </Link>
          </div>
          <div className="lg:hidden items-center">
            {/* Hamburger menu icon */}
            <button
              onClick={toggleMenu}
              className={`text-white mr-4 p-1 lg:mb-32 ${
                isMenuOpen
                  ? "bg-[#0A0723] shadow-md rounded-md "
                  : ""
              }`}
            >
              <Image
                src={"/fiktispace/hamburgerbtn.png"}
                alt="Hamburger menu Btn"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="flex flex-col gap-3 lg:hidden py-5 bg-[#2A2364] -mt-3 rounded-br-2xl rounded-bl-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          onClick={toggleMenu}
        >
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#compe-list">
            Competition List
          </Link>
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#schedule">
            Schedule  
          </Link>
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#documentation">
            Documentation
          </Link>
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#contact">
            FAQ
          </Link>
          <div className="lg:hidden flex flex-col gap-3 px-10">
            <Link className="" href="https://wa.me/62085819191776">
              <button className="bg-[#FF8797] rounded-full py-2 w-full">CP1 (Nazua)</button>
            </Link>
            <Link className="" href="https://wa.me/6285883321315">
              <button className="bg-[#FF8797] rounded-full py-2 w-full">CP2 (Nayla)</button>
            </Link>
            <Link className="justify-center" href="">
              <button className="bg-[#FF8797] rounded-full py-2 w-full">Daftar</button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
