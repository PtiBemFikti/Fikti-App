"use client";
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
    await controls.start({
      opacity: isMenuOpen ? 0 : 1,
      y: isMenuOpen ? -10 : 0,
      transition: { duration: 0.5, delay: 1 },
    });

    if (!isMenuOpen) {
      await controls.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.5, delay: 0 },
      });
    }

    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ type: "keyframes", duration: 0.5, delay: 0.5 }}
      className="bg-white p-4 md:px-20 sticky top-0 z-50"
    >
      <div className="flex items-center w-full justify-between lg:justify-around">

        {/* Navigation Links */}
        <div className="w-2/5 md:w-1/6 lg:w-2/5 hidden lg:flex gap-3 md:gap-5 font-medium">
          <Link className="block text-lg text-black hover:text-purpleText duration-300 py-2" href="#about">About</Link>
          <Link className={`block ${pathname === "/filing#bootcamp" ? "text-purpleText" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#bootcamp">Bootcamp List</Link>
          <Link className={`block ${pathname === "/filing#documentation" ? "text-purpleText" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#documentation">Documentation</Link>
          <Link className={`block ${pathname === "/filing#faq" ? "text-purpleText" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#faq">FAQ</Link>
        </div>

        {/* Logo */}
        <div className="fixed left-1/2 transform -translate-x-1/2">
          <Link href="#" className="duration-300">
            <Image src="/filing/LOGO FILING.png" alt="Logo" width={125} height={125} className="mr-2" />
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="w-2/5  justify-end text-white hidden lg:flex gap-4">

          {/* <button className="px-7 py-2 text-[17px] rounded-3xl font-serif font-thin tracking-wide text-black bg-transparent border-[3px] border-transparent bg-gradient-to-r from-[#3F3381] via-[#CBA2EA] to-[#91D2F4] bg-clip-border"> */}
          <button className="px-4 py-1 text-[20px] rounded-2xl font-serif font-thin tracking-wide text-black bg-transparent border-[3px] border-black">
            Contact Us
          </button>

          <button className="px-4 py-1 text-[20px] rounded-2xl font-serif font-thin tracking-wide bg-[#3F3381] hover:bg-[#2c2563] transition-all">
            Daftar
          </button>

        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`text-[#11111B] mr-4 p-1 ${isMenuOpen ? "bg-[#25243A] backdrop-blur-sm shadow-md rounded-md" : "bg-[#25243A]"}`}>
            <Image src={"/filing/hamburger-btn.png"} alt="Hamburger menu Btn" width={20} height={20} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="flex flex-col gap-3 lg:hidden mt-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={toggleMenu}
        >
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#about">About</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#bootcamp">Bootcamp List</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#documentation">Documentation</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#faq">FAQ</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;