"use client";

// components/Navbar.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import DropdownMenuNav from "./DropdownMenu";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
  const getAboutHref = () => {
    return pathname === "/" ? "#about" : "/#about";
  };

  return (
    <nav
      className={`fixed text-base font-bold w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "p-4 bg-black/50 backdrop-blur-lg text-white fill-black max-md:p-0 max-md:py-4"
          : "p-8 top-0 bg-transparent text-white fill-white max-md:p-0 max-md:py-8"
      }`}
    >
      <div
        className={` ${
          isScrolled ? "space-x-5" : "space-x-0 "
        } container mx-auto space-x-8 flex justify-between items-center`}
      >
        <Link href="/" className="flex items-center ml-5">
          <Image
            src="/logo-fikti.png"
            alt="Logo"
            width={35}
            height={35}
            className="mr-2"
          />
          <div>
            <h1 className="text-lg">BEM FIKTI</h1>
            <p className="text-xs font-light">Universitas Gunadarma</p>
          </div>
        </Link>
        <div className="hidden md:flex md:gap-10 space-x-4 mr-8">
          <Link
            className="relative block group hover:text-cream-fikti duration-300 py-2"
            href="/"
          >
            Beranda
            <span className="absolute left-0 bottom-0 h-0.5 bg-cream-fikti w-0 group-hover:w-full duration-300"></span>
          </Link>
          <Link
            className="relative block group hover:text-cream-fikti duration-300 py-2"
            href={getAboutHref()}
          >
            Tentang
            <span className="absolute left-0 bottom-0 h-0.5 bg-cream-fikti w-0 group-hover:w-full duration-300"></span>
          </Link>
          {/* <Link
            className="relative block group hover:text-cream-fikti duration-300 py-2"
            href="/struktur-organisasi"
          >
            Struktur
            <span className="absolute left-0 bottom-0 h-0.5 bg-cream-fikti w-0 group-hover:w-full duration-300"></span>
          </Link> */}
          <div>
            <DropdownMenuNav />
          </div>
        </div>

        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button
            onClick={toggleMenu}
            className={` mr-4 p-1 ${
              isMenuOpen
                ? "bg-[#100819] backdrop-blur-sm shadow-md rounded-md "
                : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className={`flex flex-col gap-3 md:hidden mt-4 px-4 py-6 w-full transition-none duration-0 ${
            isScrolled ? " bg-transparent" : " bg-black/30 backdrop-blur-lg"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={toggleMenu}
        >
          <Link className="hover:text-cream-fikti text-center" href="/">
            Beranda
          </Link>
          <Link
            className="hover:text-cream-fikti text-center"
            href={getAboutHref()}
          >
            Tentang
          </Link>
          {/* <Link
            className="hover:text-cream-fikti text-center"
            href="/struktur-organisasi"
          >
            Struktur Organisasi
          </Link> */}
          <div className="flex justify-center items-center">
            <DropdownMenuNav />
          </div>
          {/* <Link className="hover:text-cream-fikti" href="/dept&biro">
            Departemen
          </Link> */}
          {/* Add more navigation links as needed */}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
