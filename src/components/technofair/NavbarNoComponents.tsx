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
      <div className="flex justify-between items-center  bg-[#FFE9CF] w-full h-10 lg:h-auto">
        <Link href="/technofair" className="hidden lg:flex justify-center items-center py-5 ml-10">
          <Image src="/technofair/logoTF12/Logo TF 12.0 Tanpa BG.png" alt="Logo" width={50} height={50} className="" />
        </Link>
        
      </div>
      
    
  );
};

export default NavbarNoComponents;
