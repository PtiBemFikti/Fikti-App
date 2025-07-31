"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConfirmModal } from "../section/ConfirmModal";

export default function PemiraNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: "/pemira/#tentang", label: "Tentang" },
    { href: "/pemira/#kandidat", label: "Kandidat" },
    { href: "/pemira/#faq", label: "FAQ" },
  ];

  // Variants for animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const menuItemVariants = {
    // closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const handleVClassClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirmModal(true);
  };
  return (
    <>
      <motion.nav
        // initial="hidden"
        // animate="visible"
        // variants={navVariants}
        // transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all  duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-lg bg-[#19554B] py-4" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between md:hidden">
            <Link href="/pemira" className="px-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/pemira/logo-pemira-adiraka.png"
                  alt="logo pemira adiraka"
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full"
                />
              </motion.div>
            </Link>

            <motion.button
              onClick={toggleMenu}
              className="p-2 text-[#DEDAD1] focus:outline-none"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 flex flex-col items-end gap-1 group">
                <span
                  className={`block h-0.5 bg-white group-hover:bg-white transition-all duration-300 ${
                    isMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white group-hover:bg-white transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "w-5 opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white group-hover:bg-white transition-all duration-300 ${
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
                        className="w-full text-center px-4 py-3 hover:text-white text-[#DEDAD1] font-semibold block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <button
                    onClick={handleVClassClick}
                    className="border-1 bg-gradient-to-r  from-[#cebc93] to-[#DEDAD1] text-center border-white text-[#19554b] px-6 py-2 w-full rounded-md font-semibold hover:bg-gradient-to-r hover:from-[#19554B] hover:to-[#19554B] hover:text-white hover:border-[#19554B] transition-all duration-300"
                  >
                    Masuk Dengan V-Class
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Navbar */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <Link href="/pemira" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/pemira/logo-pemira-adiraka.png"
                  alt="logo pemira adiraka"
                  width={100}
                  height={100}
                  className="w-14 h-14 rounded-full"
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
                    className="relative group hover:text-[#DEDAD1] text-xl mx-3 transition-colors duration-300"
                  >
                    {item.label}
                    <span className="absolute rounded-sm left-0 bottom-0 h-0.5 bg-[#DEDAD1] w-0 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Login) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button
                onClick={handleVClassClick}
                className="relative overflow-hidden group border-none bg-gradient-to-r from-[#DEDAD1] to-[#cebc93] text-[#19554B] px-6 py-2 rounded-md font-semibold transition-all duration-300"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[rgba(222,218,209,0.8)] to-[rgba(206,188,147,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                <span className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] group-hover:left-[100%] transition-all duration-700"></span>
                </span>

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Masuk Dengan V-Class
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
      />
    </>
  );
}
