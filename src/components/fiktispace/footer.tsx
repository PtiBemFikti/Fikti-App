"use client";
import { Urbanist } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-4 bottom-0">
      <div className="flex flex-col md:flex-row justify-start gap-2">
        <div className="flex justify-center items-center mt-4 gap-3">
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
        <div className="text-xs text-[#E8E8F0] text-center">
          <p>BEM FIKTI UG 2023/2024</p>
          <p>FIKTI SPACE</p>
        </div>
        <div className="flex">
          <div className="flex flex-col text-center mt-4 gap-1">
            <h1 className="text-xl">Social media</h1>
            <Link
              href="http://instagram.com/ug_bemfikti"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Instagram
            </Link>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              X
            </Link>
            <Link
              href="http://tiktok.com/@ug.bemfikti"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Tiktok
            </Link>
            <Link
              href="https://youtube.com/@BEMFIKTI"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Youtube
            </Link>
            <Link
              href="https://www.linkedin.com/in/bem-fikti-ug-b349921b1"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              Linkedin
            </Link>
            <Link
              href="http://instagram.com/fikti.careercenter"
              className="text-gray-400 hover:text-purpleText"
              target="_blank"
            >
              FIKTI Career Center
            </Link>
          </div>

          <div className="flex-initial mt-4 px-6 md:w-96">
            <h1 className="text-xl text-center mb-2">Kontak</h1>
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
                className="text-gray-400 text-base hover:text-purpleText"
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
