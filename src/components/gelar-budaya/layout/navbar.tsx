"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GelbudNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/gelar-budaya/#tentang", label: "Tentang" },
    { href: "/gelar-budaya/#jadwal", label: "Jadwal" },
    { href: "/gelar-budaya/#lokasi", label: "Lokasi" },
    { href: "/gelar-budaya/#faq", label: "FAQ" },
  ];

  // Variants for animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      // initial="hidden"
      // animate="visible"
      // variants={navVariants}
      // transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg bg-black py-5" : "py-7"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/gelar-budaya" className="px-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="/gelar-budaya/logo-gelar-budaya-nobg.png"
                alt="logo gelar budaya"
                width={100}
                height={100}
                className="w-12 h-12"
              />
            </motion.div>
          </Link>

          <motion.button
            onClick={toggleMenu}
            className="p-2 text-[#ECDCC1] focus:outline-none"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 flex flex-col items-end gap-1 group">
              <span
                className={`block h-0.5 bg-[#ECDCC1] group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                }`}
              />
              <span
                className={`block h-0.5 bg-[#ECDCC1] group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "w-5 opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 bg-[#ECDCC1] group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-4"
                }`}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-4 pt-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuItemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className="w-full text-center px-4 py-3 hover:text-white text-[#ECDCC1] font-semibold block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <Link href="/gelar-budaya" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/gelar-budaya/logo-gelar-budaya-nobg.png"
                alt="logo gelar budaya"
                width={100}
                height={100}
                className="w-14 h-14"
              />
            </motion.div>
          </Link>

          {/* Nav Items (center) */}
          <div className="flex gap-12 font-normal text-lg text-white">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className="relative group hover:text-[#ECDCC1] text-xl mx-3 transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute rounded-sm left-0 bottom-0 h-0.5 bg-[#ECDCC1] w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Buy Ticket Button (kanan) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link
              target="_blank"
              href="https://bit.ly/RegistrasiPesertaGelarBudaya2025"
              className="border-1 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-[#ECDCC1] hover:text-black hover:border-[#ECDCC1] transition-all duration-300"
            >
              Buy Ticket
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
