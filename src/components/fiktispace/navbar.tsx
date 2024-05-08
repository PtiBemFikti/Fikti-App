"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import DropdownMenuNav from "./DropdownMenu";
import { Guardians } from "@/styles/font";

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
      className="bg-[#0A0723] p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center md:-mb-32">
        <Link href="#" className="flex items-center ml-5 md:mb-32">
          <Image
            src="/fiktispace/logofs.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </Link>
        <div className="text-[#F1EAF6] font-['Poppins'] md:hidden block md:mb-32">
          <h1 className={`${Guardians.className} font-bold text-xl`}>
            FIKTI SPACE
          </h1>
        </div>
        <div className="hidden md:flex md:gap-10 space-x-4 -ml-80 md:mb-32">
          <a
            className="block text-[#F1EAF6] text-lg hover:text-purpleText duration-300 mt-4"
            href="#about"
          >
            About
          </a>
          <div className="block text-lg hover:text-purpleText duration-300 py-2">
            <DropdownMenuNav />
          </div>
          <Link
            className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300 mt-4"
            href="/schedule"
          >
            Schedule
          </Link>
          <Link
            className="block text-lg text-[#F1EAF6] hover:text-purpleText duration-300 mt-4"
            href="/contact"
          >
            Contacts
          </Link>
          {/* <Link
            className="block text-black hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}

          {/* Add more navigation links as needed */}
        </div>
        <div className="md:block hidden">
          <div className="flex justify-between items-center w-64 h-14 bg-[#0A0723] rounded-[24px] mb-32">
            <div className="px-5 rounded-[21px] text-lg h-11 bg-[#1D1564] w-48 mx-3 flex justify-center items-center hover:bg-[#110D3C] text-[#F1EAF6] ml-3">
              <button>Daftar Kompetisi</button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            className={`text-white mr-4 p-1 md:mb-32 ${
              isMenuOpen
                ? "bg-[#0A0723] backdrop-blur-sm shadow-md rounded-md "
                : ""
            }`}
          >
            <Image
              src={"/fiktispace/hamburgerbtn.png"}
              alt="Hamburger menu Btn"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="flex flex-col gap-3 md:hidden mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={toggleMenu}
        >
          <a
            className="text-[#F1EAF6] hover:text-purpleText text-lg text-center"
            href="#about"
          >
            About
          </a>
          <div className="text-[#F1EAF6] hover:text-purpleText text-lg text-center">
            <DropdownMenuNav />
          </div>
          <Link
            className="text-[#F1EAF6] hover:text-purpleText text-lg text-center"
            href="/schedule"
          >
            Schedule
          </Link>
          <Link
            className="text-[#F1EAF6] hover:text-purpleText text-lg text-center"
            href="/contact"
          >
            Contacts
          </Link>
          <div className="md:hidden block">
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center w-80 h-14 bg-[#0A0723] rounded-[24px]">
                <div className="px-5 rounded-[21px] text-lg h-11 bg-[#1D1564] w-48 flex justify-center items-center hover:bg-[#1A135A] text-[#F1EAF6]">
                  <button>Daftar Kompetisi</button>
                </div>
              </div>
            </div>
          </div>
          {/* <Link className="hover:text-purpleText" href="/dept&biro">
            Departemen
          </Link> */}
          {/* Add more navigation links as needed */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
