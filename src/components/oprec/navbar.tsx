'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [navbar, setHeader] = useState(false);

  const scrollNavbar = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollNavbar);

    return () => {
      window.removeEventListener('scroll', scrollNavbar);
    };
  }, []);
  return (
    <div className={navbar ? 'fixed w-full text-white bg-purple-dark' : 'bg-transparent'}>
      <nav className="mx-auto my-3 px-11 flex justify-between items-center">
        <Link href="/" className="">
          <Image src="/logo-kabinet.png" alt="logo" width={40} height={40} />
        </Link>
        <div className="flex font-lato">
          <Link href="/" className="font-semibold text-lg px-5 hover:underline">
            <p>Home</p>
          </Link>
          <Link href="#timeline" className="font-semibold text-lg px-5 hover:underline">
            <p>Timeline</p>
          </Link>
          <Link href="#announce" className="font-semibold text-lg px-5 hover:underline">
            <p>Announcement</p>
          </Link>
          <Link href="#contact" className="font-semibold text-lg px-5 hover:underline">
            <p>Contact</p>
          </Link>
        </div>
        <button className="bg-brown-1 rounded-full px-3 py-1">Apply Now!</button>
      </nav>
    </div>
  );
}
