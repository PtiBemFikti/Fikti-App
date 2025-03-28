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
        <div className="w-2/5 md:w-1/6 lg:w-2/5 hidden lg:flex gap-3 md:gap-5 font-medium font-serif">
          <Link className="block text-lg text-black hover:text-purpleText duration-300 py-2" href="#about">Tentang</Link>
          <Link className={`block ${pathname === "#benefit" ? "text-purpleText underline" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#benefit">Benefit</Link>
          <Link className={`block ${pathname === "#detail" ? "text-purpleText underline" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#detail">Jadwal</Link>
          <Link className={`block ${pathname === "#silabus" ? "text-purpleText underline" : "text-black"} text-lg hover:text-purpleText duration-300 py-2`} href="#silabus">Silabus</Link>
        </div>

        {/* Logo */}
        <div className="fixed left-1/2 transform -translate-x-1/2">
          <Link href="" className="duration-300 scroll-smooth">
            <Image src="/filing/LOGO FILING.png" alt="Logo" width={125} height={125} className="mr-2" />
          </Link>
        </div>

        {/* Contact Us Button */}
        <div className="w-2/5  justify-end text-white hidden lg:flex gap-4">

          {/* <button className="px-7 py-2 text-[17px] rounded-3xl font-serif font-thin tracking-wide text-black bg-transparent border-[3px] border-transparent bg-gradient-to-r from-[#3F3381] via-[#CBA2EA] to-[#91D2F4] bg-clip-border"> */}
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScO7P7O8HyY2jnlX1NjDY8Qxz_ZqYMIO-Tj5WnowEiRe9Aj1w/viewform?usp=sharing" target="_blank" rel="noopener noreferrer"> {/* kalau sudah ada gform nya */}
            <button className="px-4 py-1 text-[20px] rounded-xl font-serif font-thin tracking-wide bg-gradient-to-r from-[#3F3381] to-[#B07FD6] hover:bg-[#2c2563] transition-all">
              Daftar
            </button>
          </Link>
          
          <Link href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-1 text-[18px] rounded-xl font-serif font-thin tracking-wide text-black bg-transparent border-[2px] border-black">
              CP Rafa
            </button>
          </Link>

          <Link href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-1 text-[18px] rounded-xl font-serif font-thin tracking-wide text-black bg-transparent border-[2px] border-black">
              CP Rizky
            </button>
          </Link>

        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className={`text-[#11111B] mr-4 p-1 ${isMenuOpen ? " backdrop-blur-sm shadow-md rounded-md" : ""}`}>
            <Image src={"/filing/Ham Btn.png"} alt="Hamburger menu Btn" width={30} height={30} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="flex flex-col gap-3 lg:hidden mt-4 font-serif"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={toggleMenu}
        >
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#about">Tentang</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#benefit">Benefit</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#detail">Jadwal</Link>
          <Link className="text-black text-lg hover:text-purpleText text-center" href="#silabus">Silabus</Link>
          
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScO7P7O8HyY2jnlX1NjDY8Qxz_ZqYMIO-Tj5WnowEiRe9Aj1w/viewform?usp=sharing" target="_blank" rel="noopener noreferrer"> {/* kalau sudah ada gform nya */}
            <button className="w-full px-4 py-1 text-[20px] rounded-2xl font-serif font-thin tracking-wide bg-gradient-to-r from-[#3F3381] to-[#B07FD6] hover:bg-[#2c2563] transition-all">
              Daftar
            </button>
          </Link>

          <Link href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
            <button className="w-full px-4 py-1 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-black bg-transparent border-[3px] border-black">
              CP Rafa
            </button>
          </Link>

          <Link href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
            <button className="w-full px-4 py-1 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-black bg-transparent border-[3px] border-black">
              CP Rizky
            </button>
          </Link>

        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;