"use client";

// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    controls.start({ opacity: isMenuOpen ? 0 : 1, y: isMenuOpen ? -10 : 0 });
  };

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ type: "keyframes", duration: 0.5, delay: 0.5 }}
      className="bg-slate-500 backdrop-blur-md bg-opacity-5 p-4 sticky top-0 z-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link className="block text-white py-2" href="/">
            Beranda
          </Link>
          <Link className="block text-white py-2" href="/about">
            Tentang
          </Link>
          {/* Add more navigation links as needed */}
        </div>
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
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
          transition={{ duration: 0.3 }}
        >
          <Link href="/">Beranda</Link>
          <Link href="/about">Tentang</Link>
          {/* Add more navigation links as needed */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
