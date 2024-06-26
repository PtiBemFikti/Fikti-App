"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
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
      className="bg-[#101415E5] shadow-[#00000080] border-[#1014151F] p-4 md:px-10 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center ml-5 gap-3">
          <Image
            src="/pemira/logo-universitas-gunadarma.png"
            alt="logo univ"
            width={40}
            height={40}
          />
          <Image
            src="/pemira/logo-kabinet.png"
            alt="logo fikti"
            width={40}
            height={40}
          />
          <Image
            src="/pemira/logo-fikti.png"
            alt="logo fikti"
            width={40}
            height={40}
          />
        </Link>
        <div className="text-white md:hidden block">
          <Image
            src="/pemira/logo-universitas-gunadarma.png"
            alt="logo univ"
            width={30}
            height={50}
          />
        </div>
        <div className="hidden md:flex md:gap-10 space-x-4 ml-96">
          <Link
            className="block text-lg text-white hover:text-purpleText duration-300 py-2"
            href="#home"
          >
            Home
          </Link>
          <Link
            className={`block ${
              pathname === "/nominasi"
                ? "text-purpleText"
                : "text-white text-lg"
            } hover:text-purpleText duration-300 py-2`}
            href="#nominasi"
          >
            Nominees
          </Link>
          <Link
            className={`block ${
              pathname === "/livereport"
                ? "text-purpleText"
                : "text-white text-lg"
            } hover:text-purpleText duration-300 py-2`}
            href="#livereport"
          >
            Live Report
          </Link>
        </div>
        <button className="flex items-center" onClick={handleToggle}>
          <Image
            src={"/pemira/user.svg"}
            alt="user"
            width={25}
            height={25}
          ></Image>
          <ChevronDownIcon
            className={`h-6 w-12 transform ${isOpen ? "-rotate-90" : ""}`}
          />
        </button>

        {/* <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}

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
            href="#about"
            id="AboutPage"
          >
            About
          </Link>
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#bootcamp"
          >
            Bootcamp List
          </Link>
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#documentation"
          >
            Documentation
          </Link>
          <Link
            className="text-white text-lg hover:text-purpleText text-center"
            href="#faq"
          >
            FAQ
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
