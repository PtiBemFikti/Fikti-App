"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Schedule", href: "#schedule" },
    { name: "FAQ", href: "#faq" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-[#FFFAF0] w-full fixed z-50 transition-transform duration-300 transform-gpu ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex items-center justify-center p-[42px] relative">
        
        <Link key={"top"} href={"#top"} className="absolute left-0 p-2 hover:cursor-pointer" >
          <Image src="/technofair/logo-tf.png" alt="Logo" width={50} height={50} />
        </Link>

        <div className="flex justify-center gap-x-32">
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
    </nav>
  );
}
