"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import DropdownMenuNav from "./DropdownMenu";
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
      className="bg-[#060E23] p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center ml-5">
          <Image
            src="/logo-fikti.png"
            alt="Logo"
            width={25}
            height={25}
            className="mr-2"
          />
          <h1 className="text-white font-bold">FIKTI</h1>
        </Link>
        <div className="hidden md:flex md:gap-10 space-x-4 mr-8">
          <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/"
          >
            Beranda
          </Link>
          <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/departemen"
          >
            Struktur Organisasi
          </Link>
          <div>
            <DropdownMenuNav />
          </div>
          {/* <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}
          <Link
            className="flex text-white py-2 px-3 border-2 border-gray-400 hover:bg-orange-600 hover:duration-300 hover:end-10 rounded-full"
            href="https://bit.ly/HotlineFIKTI"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              className="w-6 h-6 mr-2"
            >
              <path
                fill="#ffffff"
                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
              />
            </svg>
            Hotline Fikti
          </Link>

          {/* Add more navigation links as needed */}
        </div>
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            className={`text-white mr-4 p-1 ${
              isMenuOpen
                ? "bg-[#100819] backdrop-blur-sm shadow-md rounded-md "
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
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
          <Link className="hover:text-purpleText text-center" href="/">
            Beranda
          </Link>
          <Link
            className="hover:text-purpleText text-center"
            href="/departemen"
          >
            Struktur Organisasi
          </Link>
          <div className="flex justify-center items-center">
            <DropdownMenuNav />
          </div>
          <Link
            className="flex text-white py-2 px-3 mx-20 justify-center border-2 border-gray-400 hover:bg-orange-600 hover:duration-300 hover:end-10 rounded-full gap-2"
            href="https://bit.ly/HotlineFIKTI"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              className="w-6 h-6"
            >
              <path
                fill="#ffffff"
                d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"
              />
            </svg>
            <p>Hotline Fikti</p>
          </Link>
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
