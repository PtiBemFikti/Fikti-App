"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = async () => {
    // Set animasi saat menu dibuka
    await controls.start({
      opacity: isMenuOpen ? 0 : 1,
      y: isMenuOpen ? -10 : 0,
      animation: "infinite",
      transition: { duration: 2, delay: 1 },
    });

    // Set animasi saat menu ditutup
    if (!isMenuOpen) {
      await controls.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.5, delay: 2 },
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
      className="bg-[#112C70] px-4 lg:px-16 py-4 fixed w-full z-30"
    >
      <div className="">
        <div className="bg-[#2A2364] items-center flex justify-between px-5 py-3 rounded-2xl">
          <Link href="#" className="items-center">
            <Image
              src="/fiktispace/LOGO FS 4.png"
              alt="Logo"
              width={75}
              height={75}
              className="mr-2"
            />
          </Link>
          <div className="hidden lg:flex md:gap-20">
            <Link className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300" href="#about">
              Competition List
            </Link>
            <Link className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300" href="#schedule">
              Schedule
            </Link>
            <Link className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300" href="#schedule">
              Documentation
            </Link>
            <Link className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300" href="#contact">
              FAQ
            </Link>
          </div>
          <div className="hidden lg:flex justify-evenly gap-10">
            <Link className="" href="">
              <button className="bg-[#FF8797] rounded-full px-3 py-2">Contact Us</button>
            </Link>
            <Link className="" href="">
              <button className="bg-[#FF8797] rounded-full px-5 py-2">Daftar</button>
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
          <Link className="text-[#F1EAF6] hover:text-purpleText text-lg text-center" href="#about">
            About
          </Link>
          <Link className="text-[#F1EAF6] hover:text-purpleText text-lg text-center" href="#schedule">
            Schedule  
          </Link>
          <Link className="text-[#F1EAF6] hover:text-purpleText text-lg text-center" href="#schedule">
            Documentation
          </Link>
          <Link className="text-[#F1EAF6] hover:text-purpleText text-lg text-center" href="#contact">
            FAQ
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

export default Navbar;
