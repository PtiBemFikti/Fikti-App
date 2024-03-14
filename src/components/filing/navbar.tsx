"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";  

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const pathname = usePathname();

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
      className="bg-[#25243A] p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center ml-5">
          <Image
            src="/filing/logo 1.png"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          </Link>         
          <div className="text-white md:hidden block">
          <h1 className="font-Lato font-bold text-2xl">FIKTI LEARNING</h1>
        </div>
        <div className="hidden md:flex md:gap-10 space-x-4 -ml-96">
          <Link className="block text-white hover:text-purpleText duration-300 py-2" href="#about">
            About
          </Link>
          <Link className={`block ${pathname === "/bootcamp" ? "text-purpleText" : "text-white"} hover:text-purpleText duration-300 py-2`} href="/bootcamp">
            Bootcamp List
          </Link>
          <Link className="block text-white hover:text-purpleText duration-300 py-2" href="/documentation">
            Documentation
          </Link>
          <Link className="block text-white hover:text-purpleText duration-300 py-2" href="/contact">
            FAQ
          </Link>
          {/* <Link
            className="block text-white hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}
          </div>
          <div className="md:block hidden">
          <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px]">
            <div className="px-5 text-[#241525] ml-3">
              <button>Sign Up</button>
            </div>
            <div className="rounded-[21px] h-11 bg-[#241525] w-28 mx-3 flex justify-center items-center hover:bg-[#401e42]">
              <button>Sign In</button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button onClick={toggleMenu} className={`text-[#11111B] mr-4 p-1 ${isMenuOpen ? 'bg-[#100819] backdrop-blur-sm shadow-md rounded-md ' : ''}`}>
            <Image src={'/filing/hamburger-btn.png'} alt="Hamburger menu Btn" width={20} height={20} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div className="flex flex-col gap-3 md:hidden mt-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} onClick={toggleMenu}>
          <Link className="text-white hover:text-purpleText text-center" href="#about">
            About
          </Link>
          <Link className="text-white hover:text-purpleText text-center" href="/bootcamp">
            Bootcamp List
          </Link>
        <Link className="text-white hover:text-purpleText text-center" href="/documentation">
            Documentation
          </Link>
          <Link className="text-white hover:text-purpleText text-center" href="/contact">
            FAQ
          </Link>
          <div className="md:hidden block">
            <div className="flex justify-center items-center">
              <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px]">
                <div className="px-5 text-[#241525] ml-3">
                  <button>Sign Up</button>
                </div>
                <div className="rounded-[21px] h-11 bg-[#241525] w-28 mx-3 flex justify-center items-center hover:bg-[#401e42]">
                  <button>Sign In</button>
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
