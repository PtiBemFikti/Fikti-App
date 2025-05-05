"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Navbar2: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      className="bg-[#2A2364] mt-3 fixed w-[91%] z-30 rounded-3xl left-1/2 -translate-x-1/2"
    >
      <div className=" items-center flex px-5 py-3 rounded-2xl">
        <Link href="#" className="items-center w-10/12 lg:w-2/12">
          <Image
            src="/fiktispace/LOGO FS 4.png"
            alt="Logo"
            width={75}
            height={75}
            className="mr-2"
          />
        </Link>
        <div className="hidden lg:flex md:gap-20 w-7/12">
          <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="/fiktispace">
            Back to Home
          </Link>
          <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#about">
            About
          </Link>
          <Link className="block text-lg text-white hover:text-[#FF8797] group transition-all duration-300 ease-in-out hover:scale-[1.09] hover:font-bold" href="#peraturan">
            Peraturan
          </Link>
        </div>
        <div className="hidden lg:flex justify-end gap-10 w-3/12">
          <Link className="" href="">
            <button className="bg-[#FF8797] rounded-full px-3 py-2">Contact Us</button>
          </Link>
          <Link className="" href="">
            <button className="bg-[#FF8797] rounded-full px-5 py-2">Daftar</button>
          </Link>
        </div>
        <div className="flex justify-end w-3/12 lg:hidden items-center">
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
      {isMenuOpen && (
        <motion.div
          className="flex flex-col gap-3 lg:hidden py-5 bg-[#2A2364] -mt-3 rounded-br-2xl rounded-bl-2xl"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          onClick={toggleMenu}
        >
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="/fiktispace">
            Back to Home
          </Link>
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#about">
            About
          </Link>
          <Link className="text-white hover:text-[#FF8797] text-lg text-center" href="#peraturan">
            Peraturan 
          </Link>
          <div className="lg:hidden flex flex-col gap-3 px-10">
            <Link className="" href="">
              <button className="bg-[#FF8797] rounded-full py-2 w-full">Contact Us</button>
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

export default Navbar2;
