"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function OprecNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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

  return (
    <nav
      className={`fixed z-50 self-center right-[25%] w-1/2 h-[5rem] flex items-center justify-center gap-16 px-10 AnimationNav transition-all duration-500 ${
        isScrolled
          ? "top-5  rounded-[40px] bg-black/40 backdrop-blur-md text-white"
          : "top-5  text-white"
      }`}
    >
      <div className="flex items-center gap-20">
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
        <Link href="#home" className="cursor-pointer">
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
    </nav>
  );
}
