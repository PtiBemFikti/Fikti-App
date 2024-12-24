"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { Permanent_Marker } from "next/font/google";
const PermanentMarkerFont = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
});

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t-2 border-slate-700 rounded-md bg-transparent p-4 bottom-0 overflow-x-hidden">
      <div className="wrapper">
        {/* Blop Elemen Tambahan */}
        <div className="blop1"></div>
        <div className="blop2"></div>
        <div className="blop3"></div>
      </div>
      <h1
        className={`${PermanentMarkerFont.className} max-md:text-[1.5rem] max-md:mx-5 max-md:my-7 relative z-20 text-center text-[5rem] px-5 py-7 mx-40 my-14 border-2 border-white italic font-Bricolage_Grotesque hover:shadow-lg hover:shadow-white hover:bg-white hover:text-black transition-all duration-500 rounded-2xl cursor-pointer`}
      >
        KABINET ADIRAKA
      </h1>
      <div
        className="flex flex-col md:flex-row items-center justify-around relative z-20 gap-10 py-10
      "
      >
        <div className="flex flex-col gap-5 w-[13%] max-md:w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Quick Links</h1>
            <Link
              href="/tentang"
              className="group relative text-gray-400 hover:text-purpleText"
            >
              Tentang
            </Link>
            <Link
              href="#"
              className="group relative text-gray-400 hover:text-purpleText"
            >
              Projek
            </Link>
            <Link
              href="#"
              className="group relative text-gray-400 hover:text-purpleText"
            >
              Struktur Organisasi
            </Link>
            <Link
              href="https://www.instagram.com/fikti.careercenter/"
              className="group relative text-gray-400 hover:text-purpleText"
            >
              FIKTI Career Center
            </Link>
          </div>

          <div className="flex flex-col  gap-4 ">
            <h1 className="text-xl font-">Our Social Media</h1>
            <div className="space-y-4">
              <Link
                href="https://www.instagram.com/ug_bemfikti/"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-purpleText"
              >
                <FaInstagram
                  size={25}
                  className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                />
                @ug_bemfikti
              </Link>

              <Link
                href="http://tiktok.com/@ug.bemfikti"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-purpleText"
              >
                <FaTiktok
                  size={25}
                  className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                />
                @ug.bemfikti
              </Link>
              <Link
                href="https://youtube.com/@BEMFIKTI"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-purpleText"
              >
                <FaYoutube
                  size={25}
                  className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                />
                @BEMFIKTI
              </Link>
              <Link
                href="https://www.linkedin.com/in/bem-fikti-ug-b349921b1?original_referer=https%3A%2F%2Fbemfikti-gunadarma.web.id%2F"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-purpleText"
              >
                <FaLinkedin
                  size={25}
                  className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                />
                BEM FIKTI UG
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-end gap-4 max-md:order-1 max-md:self-center">
          <div className="flex justify-center items-center gap-4 border-b-1 pb-4">
            <Image
              src="/logo-universitas-gunadarma.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer bg-cover hover:scale-110 transition-all duration-300 max-md:w-20 max-md:h-20"
            />
            <Image
              src="/logo-fikti.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer bg-cover hover:scale-110 transition-all duration-300 max-md:w-20 max-md:h-24"
            />
            <Image
              src="/LOGO ADIRAKA ROUND.png"
              alt="Logo"
              width={100}
              height={100}
              className="cursor-pointer bg-cover hover:scale-110 transition-all duration-300 max-md:w-20 max-md:h-20"
            />
          </div>
          <h1 className="text-lg text-center">
            Badan Eksekutif Mahasiswa <br />
            Fakultas Ilmu Komputer dan Teknologi Informasi
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-[13%] max-md:w-full">
          <h1 className="text-xl">Contact Info</h1>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-purpleText"
          >
            <CiMail size={25} />
            <p className="ml-2">bemfikti.ug@gmail.com</p>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-purpleText"
          >
            <FaPhone size={25} />
            <p className="ml-2">+62 877-8524-7632</p>
          </Link>
          <Link
            href="/"
            className="flex items-start gap-2 text-gray-400 hover:text-purpleText"
          >
            <FaLocationDot size={25} className="flex-shrink-0" />
            <p className="ml-2">
              Alamat Sekretariat BEM FIKTI: Pusat Kegiatan Mahasiswa (PUSGIWA)
              Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol.
              M. Jasin Kelapa Dua Depok
            </p>
          </Link>
        </div>
      </div>
      <div className="container mt-10  mx-auto relative z-20">
        <p className="text-center border-t-2 pt-3 border-gray-500 text-gray-400 text-xs md:text-base font-normal">
          Copyright © 2024 BEM FIKTI UG - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
