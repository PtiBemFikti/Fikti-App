"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { poppins } from "@/styles/font";
import { AnimatePresence, motion , useScroll, useMotionValue, easeInOut, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
  ];

  // untuk navbar mobile
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };
  
  // untuk navbar desktop
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
    variants={{
      visible: { y: 0 },
      hidden: { y:"-100%" },
    }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.35, ease: "easeInOut" }}

    className={`bg-[#100F21] w-full fixed z-50 lg:bg-[#FFFAF0]`}>

      <div className="lg:container lg:mx-auto flex justify-between items-center lg:justify-center lg:p-[10px] relative">
        
        <div className="flex py-7 items-center">
          <Link key={"top"} href={"#top"} className="lg:absolute left-0 px-5 lg:p-2 hover:cursor-pointer" >
            <Image src="/technofair/logoTF12/Logo TF 12.0 Tanpa BG.png" alt="Logo" width={50} height={50}/>
          </Link>

          <h1 className={`${poppins.className} text-white text-2xl font-semibold lg:hidden`}>Technofair 12.0</h1>

        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="px-5">
            <Image src="/technofair/logoTF12/burger-menu.svg" alt="btn" width={40} height={40} />
          </button>
        </div>

        <div className="hidden lg:flex justify-center gap-x-32">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative overflow-hidden h-6 text-center group inline-block"
            >
              <span className="relative flex flex-col items-center h-full">
                <span className="flex items-center justify-center text-black transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>

                <span className="flex items-center justify-center text-[#FE8A16] transition-transform duration-300 group-hover:-translate-y-full absolute top-full left-0">
                  {link.name}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#100F21] pb-4 px-4 flex flex-col space-y-4"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} 
                className="text-white text-lg"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
