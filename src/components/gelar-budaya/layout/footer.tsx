"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { MonumentExtendedRegular } from "@/styles/font";

export default function GelbudFooter() {
  return (
    <footer className="relative flex flex-col py-10 justify-end h-fit border-t-2 border-slate-700 p-4 bottom-0 overflow-x-hidden text-gray-300">
      <div
        className="flex flex-col lg:flex-row items-start self-end justify-around relative z-20 py-10
      "
      >
        <div className="flex flex-col gap-4 ">
          <h1 className="text-xl text-white">Contact Info</h1>
          <Link
            href="mailto:bemfikti.ug@gmail.com"
            className="flex items-center gap-2 hover:text-[#ECDDC1]"
          >
            <CiMail size={25} className="flex-shrink-0" />
            <p className="ml-2">bemfikti.ug@gmail.com</p>
          </Link>

          <div className="flex items-center gap-2 group">
            <FaPhone size={25} className="group" />
            <p className="ml-2">
              <a
                href="https://wa.me/6285150935519"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[#ECDDC1]"
              >
                +62 8xx-xxxx-xxxx
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center gap-5 mb-3 md:mb-5 lg:mb-3">
            <Link href="https://www.instagram.com/ug_bemfikti/" target="_blank">
              <FaInstagram
                size={30}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </Link>

            <Link href="http://tiktok.com/@ug.bemfikti" target="_blank">
              <FaTiktok
                size={30}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </Link>
            <Link href="https://youtube.com/@BEMFIKTI" target="_blank">
              <FaYoutube
                size={30}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/bemfikti/"
              target="_blank"
            >
              <FaLinkedin
                size={30}
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center order-last lg:order-none self-center mt-5 lg:mt-0">
          <div className="flex justify-center items-center gap-4">
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
            <div className="mb-14 w-[7rem] h-[7rem] max-md:w-16 max-md:h-16 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
              <Image
                src="/logo-fikti.png"
                alt="Logo FIKTI"
                width={300}
                height={300}
                className="bg-cover h-fit w-16 max-md:w-9"
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

          <h1 className="text-base md:text-xl text-center font-bold">
            BEM FIKTI UG 2024/2025 <br />
            GELAR BUDAYA
          </h1>
        </div>
        <div className="flex flex-col gap-5 w-1/2  lg:w-[24%] xl:w-[15%]">
          <Link
            href="https://www.google.com/maps?q=Pusat+Kegiatan+Mahasiswa+(PUSGIWA)+Gedung+4+Lantai+3+Kampus+E+Universitas+Gunadarma,+Jl.+Komjen+Pol.+M.+Jasin+Kelapa+Dua+Depok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 hover:text-[#ECDDC1]"
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
        <p className="text-center border-t-2 pt-3 border-gray-500 text-xs md:text-base font-normal">
          Copyright © 2025 BEM FIKTI UG & Made with by BIRO PTI
        </p>
      </div>
    </footer>
  );
}
