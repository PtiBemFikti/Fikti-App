'use client';

// components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

const Navbar: React.FC = () => {
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
    <motion.nav initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ type: 'keyframes', duration: 0.5, delay: 0.5 }} className="bg-[#ffffff] p-4 top-0 sticky z-50">
      <div className="container mx-auto flex justify-between items-center -mb-32">
        <Link href="/technofair" className="flex items-center ml-5 mb-32">
          <Image src="/technofair/logo-tf.png" alt="Logo" width={50} height={50} className="mr-20" />
        </Link>
        <div className="text-[#241525] md:hidden block mb-32">
          <h1 className="font-Lato font-bold text-2xl">TechnoFair 11.0</h1>
        </div>
        <div className="md:absolute md:right-0 md:pr-20">
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
            {/* <Link
            className="block text-black hover:text-purpleText duration-300 py-2"
            href="/dept&biro"
          >
            Departemen
          </Link> */}

            {/* Add more navigation links as needed */}
          </div>
        </div>
        <div className="md:block hidden">
          {/* <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px] mb-32">
            <div className="">
              <SignUpBox />
            </div>
            <div className="">
              <SignInBox />
            </div>
          </div> */}
          {/* {status === 'unauthenticated' ? (
            <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px] mb-32">
              <button onLoad={() => signIn()}>
                <div className="">
                  <SignUpBox />
                </div>
              </button>
              <div className="">
                <SignInBox />
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <div className="">
                <p className="font-[Poppins] text-base">Mio Mirza</p>
              </div>
              <div className="">
                <button onClick={() => signOut()}>
                  <Image src={'/technofair/profile.png'} alt="Profile" width={48} height={48} />
                </button>
              </div>
            </div>
          )} */}
        </div>
        <div className="md:hidden">
          {/* Hamburger menu icon */}
          <button onClick={toggleMenu} className={`text-white mr-4 p-1 mb-32 ${isMenuOpen ? 'bg-[#eeeeee] backdrop-blur-sm shadow-md rounded-md ' : ''}`}>
            <Image src={'/technofair/hamburger-btn.png'} alt="Hamburger menu Btn" width={20} height={20} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div className="flex flex-col gap-3 md:hidden mt-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5, ease: 'easeInOut' }} onClick={toggleMenu}>
          <Link className="text-[#241525] hover:text-purpleText text-center" href="#about">
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
          </Link>
          <div className="md:hidden block">
            {/* <div className="flex justify-center items-center">
              <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px]">
                <div className="text-[#241525] ml-3">
                  <SignUpBox />
                </div>
                <div className="">
                  <SignInBox />
                </div>
              </div>
            </div> */}
            {/* {status === 'authenticated' ? (
              <div className="flex gap-4">
                <div className="">
                  <p className="font-[Poppins] text-base">Mio Mirza</p>
                </div>
                <div className="">
                  <button onClick={() => signOut()}>
                    <Image src={'/technofair/profile.png'} alt="Profile" width={48} height={48} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <div className="flex justify-between items-center w-64 h-14 bg-[#DDDFE4] rounded-[24px]">
                  <div className="text-[#241525] ml-3">
                    <SignUpBox />
                  </div>
                  <div className="">
                    <SignInBox />
                  </div>
                </div>
              </div>
            )} */}
          </div>
          {/* <Link className="hover:text-purpleText" href="/dept&biro">
            Departemen
          </Link> */}
          {/* Add more navigation links as needed */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
