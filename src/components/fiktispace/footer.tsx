"use client";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bottom-0">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:px-16 mt-16">
        <div className="md:hidden flex-col">
          <div className="flex md:flex-col justify-center items-center mt-4 gap-3">
            <Image
              src="/logo-universitas-gunadarma.png"
              alt="Logo"
              width={50}
              height={50}
              className="bg-cover"
            />
            <Image
              src="/logo-fikti.png"
              alt="Logo"
              width={50}
              height={50}
              className="bg-cover"
            />
            <Image
              src="/logo-kabinet.png"
              alt="Logo"
              width={50}
              height={50}
              className="bg-cover"
            />
          </div>
          <div className="text-xs mt-1 text-[#E8E8F0] text-center">
            <p>BEM FIKTI UG 2023/2024</p>
            <p>FIKTI SPACE</p>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-2.5 ">
              <Image
                src="/logo-universitas-gunadarma.png"
                alt="Logo"
                width={70}
                height={50}
                className="bg-cover"
              />
              <Image
                src="/logo-fikti.png"
                alt="Logo"
                width={70}
                height={50}
                className="bg-cover"
              />

              <Image
                src="/logo-kabinet.png"
                alt="Logo"
                width={70}
                height={50}
                className="bg-cover"
              />
            </div>
            <div className="text-base w-48 text-[#E8E8F0] mt-1 text-center md:block hidden">
              <p>BEM FIKTI UG 2023/2024</p>
              <p>FIKTI SPACE</p>
            </div>
          </div>
        </div>

        <div className="flex md:mx-8">
          <div className="flex flex-col text-center mt-4 gap-1">
            <h1 className="text-xl">Social Media</h1>
            <Link
              href="https://www.instagram.com/fiktispace.ug"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://tiktok.com/@fiktispace"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Tiktok
            </Link>
          </div>

          <div className="flex-initial mt-4 px-6 md:w-96 md:mx-8">
            <h1 className="text-xl text-center mb-2">Contact Us</h1>
            <div className="flex justify-center items-center">
              <div className="w-36 flex items-center justify-center text-center text-xs">
                <Link href="/" className="text-gray-400 hover:text-purpleText">
                  <p>
                    Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus
                    E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua
                    Depok
                  </p>
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <Link
                href="/"
                className="text-gray-400 text-center text-base hover:text-purpleText"
              >
                <p>bemfikti.ug@gmail.com</p>
              </Link>
            </div>
            <div className="items-center mb-5">
              <Link
                href="/"
                className="text-gray-400 text-center text-base hover:text-purpleText"
              >
                <p>+62 877-8524-7632</p>
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <div className="flex mx-8 w-32">
              <div className="flex flex-col text-center mt-4 gap-1">
                <h1 className="text-xl">Useful Links</h1>
                <Link href="#" className="text-gray-400 hover:text-purpleText">
                  Home
                </Link>
                <Link
                  href="#schedule"
                  className="text-gray-400 hover:text-purpleText"
                >
                  Competition List
                </Link>
                <Link
                  href="#schedule"
                  className="text-gray-400 hover:text-purpleText"
                >
                  Timeline
                </Link>
                <Link
                  href="#documentation"
                  className="text-gray-400 hover:text-purpleText"
                >
                  Documentation
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-purpleText"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10 mx-auto">
        <p className="text-center border-t-2 border-gray-500 text-gray-400 text-xs md:text-base font-normal">
          Copyright © 2024 BEM FIKTI UG & Made with 💛 by BIRO PTI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
