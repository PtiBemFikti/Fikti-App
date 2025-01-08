"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OprecNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed z-50 self-center right-[25%] w-1/2 max-md:w-full max-md:right-0 h-[5rem] flex items-center justify-center gap-16 max-md:gap-10 px-10 max-md:px-8 AnimationNav transition-all duration-500 ${
        isScrolled
          ? "top-5  rounded-[40px] bg-black/40 backdrop-blur-md text-white max-md:bg-black/80 max-md:top-0 max-md:rounded-none"
          : "top-5  text-white"
      }`}
    >
      <div className="flex items-center gap-20 max-md:hidden">
        <Link
          href="#benefit"
          className="group relative text-lg font-bold hover:text-purple-700 transition duration-300"
        >
          Benefit
          <span className="absolute left-0 -bottom-[2px] block h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#timeline"
          className="group relative text-lg font-bold hover:text-purple-700 transition duration-300"
        >
          Timeline
          <span className="absolute left-0 -bottom-[2px] block h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="#home" className="cursor-pointer flex-shrink-0">
          <Image src="/logo-fikti.png" alt="Logo" width={35} height={35} />
        </Link>
        <Link
          href="#project-list"
          className="group relative text-lg font-bold hover:text-purple-700 transition duration-300"
        >
          Project List
          <span className="absolute left-0 -bottom-[2px] block h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="#requirement"
          className="group relative text-lg font-bold hover:text-purple-700 transition duration-300"
        >
          Requirement
          <span className="absolute left-0 -bottom-[2px] block h-[2px] w-0 bg-purple-700 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>

      <div className="hidden max-md:w-full max-md:flex max-md:items-center max-md:justify-between">
        <Link href="#home" className="cursor-pointer">
          <Image src="/logo-fikti.png" alt="Logo" width={35} height={35} />
        </Link>
        <div
          className="flex flex-col w-7 h-7 justify-center items-center gap-2 cursor-pointer"
          onClick={toggleMenu}
        >
          <div
            className={`w-full h-[2px] bg-white transition-transform duration-300 transform ${
              isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />

          <div
            className={`w-full h-[2px] bg-white transition-transform duration-300 transform ${
              isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </div>
      </div>
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div
          style={{
            animation: "fadeOut 0.5s reverse",
          }}
          className="lg:hidden md:hidden absolute top-[5rem] right-0 w-full backdrop-blur-md bg-black/80 text-white flex flex-col gap-7 px-8 py-6 transition-all duration-500"
        >
          <Link
            href="#benefit"
            className="text-lg font-bold hover:text-purple-700 transition duration-300"
          >
            Benefit
          </Link>
          <Link
            href="#timeline"
            className="text-lg font-bold hover:text-purple-700 transition duration-300"
          >
            Timeline
          </Link>
          <Link
            href="#project-list"
            className="text-lg font-bold hover:text-purple-700 transition duration-300"
          >
            Project List
          </Link>
          <Link
            href="#requirement"
            className="text-lg font-bold hover:text-purple-700 transition duration-300"
          >
            Requirement
          </Link>
        </div>
      )}
    </nav>
  );
}
