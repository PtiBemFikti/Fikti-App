"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { epilogue } from "@/styles/font";
import LoginPopUp from "./Auth/login";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePopUp: any = () => {
    const modal = document.getElementById("login-popup") as HTMLDialogElement;
    modal.showModal();
  };

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
      className="bg-[#101415] md:bg-[#101415E5] shadow-[#00000080] border-[#1014151F] px-4 py-10 md:px-10 md:py-7 sticky top-0 z-50"
    >
      <div className="container mx-auto md:flex md:justify-between md:items-center">
        <div className="hidden md:block">
          <Link href="#" className="flex items-center ml-5">
            <Image
              src="/pemira/logo-pemira.png"
              alt="logo pemira"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="hidden md:flex md:gap-10 space-x-4">
          <Link
            className="block text-lg text-white hover:text-purpleText duration-300 py-2"
            href="#"
          >
            Home
          </Link>
          <Link
            className={`block ${
              pathname === "/nominasi"
                ? "text-purpleText"
                : "text-white text-lg"
            } hover:text-purpleText duration-300 py-2`}
            href="#candidates"
          >
            Candidates
          </Link>
          <Link
            className={`block ${
              pathname === "/livereport"
                ? "text-purpleText"
                : "text-white text-lg"
            } hover:text-purpleText duration-300 py-2`}
            href="#vote"
          >
            Live Report
          </Link>
        </div>
        <div className="hidden md:block">
          <button
            className={`md:w-24 bg-gradient-to-l from-[#669BBC] to-[#003049] md:px-6 md:py-3 md:rounded-lg ${epilogue.className}`}
            onClick={handlePopUp}
          >
            {/* <Image src={'/pemira/user.svg'} alt="user" width={25} height={25}></Image>
            <ChevronDownIcon className={`h-6 w-12 transform ${isOpen ? '-rotate-180' : ''}`} /> */}
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:hidden block">
          <div className="text-sm">
            <div className="flex gap-1">
              <p>Hello Warga FIKTI</p>
            </div>
            <p>
              Welcome to <strong>PEMIRA FIKTI UG 2024</strong>
            </p>
          </div>
        </div>

        {/* <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}

        {/* Btn Humbuerger */}
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            className={`text-[#11111B] mr-4 p-1 ${
              isMenuOpen
                ? "bg-[#25243A] backdrop-blur-sm shadow-md rounded-md "
                : ""
            }`}
          >
            <Image
              src={"/filing/hamburger-btn.png"}
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
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#candidates"
          >
            Candidates
          </Link>
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#vote"
          >
            Live Report
          </Link>
          <div className="block md:hidden">
            <div className="flex justify-center items-center">
              <button
                className={`bg-gradient-to-l from-[#669BBC] to-[#003049] text-sm px-6 py-3 rounded-lg ${epilogue.className}`}
                onClick={handlePopUp}
              >
                {/* <Image src={'/pemira/user.svg'} alt="user" width={25} height={25}></Image>
            <ChevronDownIcon className={`h-6 w-12 transform ${isOpen ? '-rotate-180' : ''}`} /> */}
                Login
              </button>
            </div>
          </div>

          {/* <Link className="hover:text-purpleText" href="/dept&biro">
            Departemen
          </Link> */}
          {/* Add more navigation links as needed */}
        </motion.div>
      )}
      <dialog id="login-popup" className="modal">
        <LoginPopUp />
      </dialog>
    </motion.nav>
  );
};

export default Navbar;
