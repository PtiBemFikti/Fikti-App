"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GelbudNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/gelar-budaya/#tentang", label: "Tentang" },
    { href: "/gelar-budaya/#jadwal", label: "Jadwal" },
    { href: "/gelar-budaya/#lokasi", label: "Lokasi" },
    { href: "/gelar-budaya/#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 mx-auto py-4 z-50 transition-all duration-300 bg-[#071D2B] ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/gelar-budaya" className="px-4">
            <Image
              src="/gelar-budaya/logo-gelar-budaya-nobg.png"
              alt="logo gelar budaya"
              width={100}
              height={100}
              className="w-12 h-12"
            />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-[#ECDCC1] focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-end gap-1 group">
              <span
                className={`block h-0.5 bg-[#ECDCC1] group group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-[#ECDCC1] group group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "w-5 opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-[#ECDCC1] group group-hover:bg-white transition-all duration-300 ${
                  isMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full text-center px-4 py-3 hover:text-white text-[#ECDCC1] font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center">
          <div
            className={`px-8 rounded-2xl flex items-center justify-center gap-8 font-semibold text-lg text-[#ECDCC1] transition-all duration-300 `}
          >
            {navItems.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 hover:text-white text-xl"
              >
                {item.label}
              </Link>
            ))}

            <Link href="/gelar-budaya" className="px-4">
              <Image
                src="/gelar-budaya/logo-gelar-budaya-nobg.png"
                alt="logo gelar budaya"
                width={100}
                height={100}
                className="w-14 h-14"
              />
            </Link>

            {navItems.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 hover:text-white text-xl"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
