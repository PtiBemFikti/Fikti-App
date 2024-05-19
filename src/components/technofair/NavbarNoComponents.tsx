'use client';

// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { poppins } from '@/styles/font';

const NavbarNoComponents: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const toggleMenu = async () => {
    // Set animasi saat menu dibuka
    await controls.start({
      opacity: isMenuOpen ? 0 : 1,
      y: isMenuOpen ? -10 : 0,
      animation: 'infinite',
      transition: { duration: 2, delay: 1 },
    });

    // Set animasi saat menu ditutup
    if (!isMenuOpen) {
      await controls.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.5, delay: 2 },
        animation: 'backwards',
      });
    }

    // Update status menu
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5, delay: 0.5 }} className="bg-[#ffffff] p-4 top-0 sticky z-10">
      <div className="md:mx-10 flex justify-between items-center -mb-32">
        <Link href="/technofair" className="flex justify-center items-center ml-5 mb-32">
          <Image src="/technofair/logo-tf.png" alt="Logo" width={50} height={50} className="" />
        </Link>
        <div className={`text-[#241525] md:hidden block mb-32`}>
          <h1 className={`font-Lato font-bold text-xl text-center mx-9 ${poppins.className}`}>TechnoFair 11.0</h1>
        </div>
        {/* <div className="md:absolute md:right-0 md:pr-20">
          <div className="hidden md:flex md:gap-10 space-x-4 md:mb-32">
            <Link className="block text-[#241525] hover:text-purpleText duration-300" href="#about">
              About
            </Link>
            <Link href={'#event'} className="block text-[#241525] hover:text-purpleText duration-300">
              Events
            </Link>
            <Link className="block text-[#241525] hover:text-purpleText duration-300" href="#schedule">
              Schedule
            </Link>
            <Link className="block text-[#241525] hover:text-purpleText duration-300" href="#faq">
              FAQ
            </Link>
          </div>
        </div> */}
      </div>
      {isMenuOpen && (
        <motion.div className="flex flex-col gap-3 md:hidden mt-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} onClick={toggleMenu}>
          {/* <Link className="text-[#241525] hover:text-purpleText text-center" href="#about">
            About
          </Link>
          <Link href={'#event'} className="text-[#241525] hover:text-purpleText text-center">
            Events
          </Link>
          <Link className="text-[#241525] hover:text-purpleText text-center" href="#schedule">
            Schedule
          </Link>
          <Link className="text-[#241525] hover:text-purpleText text-center" href="#faq">
            FAQ
          </Link> */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default NavbarNoComponents;
