"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import {
  MonumentExtendedBold,
  MonumentExtendedRegular,
  Montserrat,
} from "@/styles/font";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative h-fit rounded-md bg-dark-green-fikti p-4 bottom-0 overflow-x-hidden overflow-y-hidden">
      {/* <div className="wrapper">
        <div className="blop1"></div>
        <div className="blop2"></div>
        <div className="blop3"></div>
      </div> */}

      <div
        className="flex flex-col lg:flex-row items-center justify-around relative z-20 gap-10 py-10 lg:pt-20
      "
      >
        <div className="flex flex-col gap-5 lg:w-[13%] w-full">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Tautan Cepat</h1>
            <Link
              href="#about"
              className="group relative text-gray-400 hover:text-cream-fikti"
            >
              Tentang Kami
            </Link>
            {/* <Link
              href="#"
              className="group relative text-gray-400 hover:text-cream-fikti"
            >
              Organizational Structure
            </Link> */}
            <Link
              href="#"
              className="group relative text-gray-400 hover:text-cream-fikti"
            >
              Proyek Kami
            </Link>
            <Link
              href="https://www.instagram.com/fikti.careercenter/"
              className="group relative text-gray-400 hover:text-cream-fikti"
            >
              FIKTI Career Center
            </Link>
          </div>

          <div className="flex flex-col  gap-4 ">
            <h1 className="text-xl font-">Sosial Media Kami</h1>
            <div className="space-y-4">
              <Link
                href="https://www.instagram.com/ug_bemfikti/"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-cream-fikti"
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
                className="flex items-center gap-2 group text-gray-400 hover:text-cream-fikti"
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
                className="flex items-center gap-2 group text-gray-400 hover:text-cream-fikti"
              >
                <FaYoutube
                  size={25}
                  className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                />
                @BEMFIKTI
              </Link>
              <Link
                href="https://www.linkedin.com/company/bemfikti/"
                target="_blank"
                className="flex items-center gap-2 group text-gray-400 hover:text-cream-fikti"
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
        <div className="flex flex-col justify-center items-center self- gap-4 order-1 lg:order-none  max-md:self-center">
          <div className="flex justify-center items-center gap-4 border-b-1 pb-4">
            <div className="w-[7rem] h-[7rem] max-md:w-16 max-md:h-16 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
              <Image
                src="/logo-universitas-gunadarma.png"
                alt="Logo Universitas Gunadarma"
                width={300}
                height={300}
                className="bg-cover h-[5rem] w-[5rem] max-md:w-12 max-md:h-fit
                "
              />
            </div>
            <div className="w-[7rem] h-[7rem] max-md:w-16 max-md:h-16 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
              <Image
                src="/logo-fikti.png"
                alt="Logo FIKTI"
                width={300}
                height={300}
                className="bg-cover h-fit w-16 max-md:w-9
                "
              />
            </div>
            <Image
              src="/LOGO ADIRAKA ROUND.png"
              alt="Logo Kabinet Adiraka"
              width={300}
              height={300}
              className="bg-cover h-[7rem] w-[7rem] max-md:w-16 max-md:h-16 cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>

          <div className="text-center">
            <h1
              className={`${MonumentExtendedBold.className} text-2xl tracking-wider`}
            >
              BEM FIKTI UG
            </h1>
            <h2 className={`${Montserrat.className} text-lg`}>
              Kabinet Adiraka
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-[13%] ">
          <h1 className="text-xl">Info Kontak</h1>
          <Link
            href="mailto:bemfikti.ug@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-cream-fikti"
          >
            <CiMail size={25} />
            <p className="ml-2">bemfikti.ug@gmail.com</p>
          </Link>

          <Link
            href="https://wa.me/6285150935519"
            className="flex items-center gap-2 text-gray-400 hover:text-cream-fikti"
          >
            <FaPhone size={25} />
            <p className="ml-2">+62 851-5093-5519</p>
          </Link>
          <Link
            href="https://www.google.com/maps/place/Universitas+Gunadarma/@-6.363234,106.831725,17z" // Ganti dengan link lokasi spesifik
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-gray-400 hover:text-cream-fikti"
          >
            <FaLocationDot size={25} className="flex-shrink-0" />
            <p className="ml-2 w-1/2 lg:w-full">
              Alamat Sekretariat BEM FIKTI: Pusat Kegiatan Mahasiswa (PUSGIWA)
              Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol.
              M. Jasin Kelapa Dua Depok
            </p>
          </Link>
        </div>
      </div>
      <div className="container mt-10  mx-auto relative z-20">
        <p className="text-center border-t-2 pt-3 border-gray-500 text-gray-400 text-xs md:text-base font-normal">
          Copyright © 2024 - {`${year}`} BEM FIKTI UG - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
