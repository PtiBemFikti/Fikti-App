"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin,FaWhatsapp, FaWhatsappSquare, FaMailBulk } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Lato } from "@/styles/font";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className='text-black'>
      <footer className="relative overflow-hidden bg-[#FF8797] bottom-0">
        <div className="flex flex-wrap lg:flex lg:flex-row items-center justify-evenly relative gap-10 pt-10 mb-5 px-5 md:px-20">
            <div className="flex flex-col gap-4 lg:w-1/5 w-full font-medium">
                <h1 className="text-xl text-white font-bold">Sosial Media</h1>
                <div className="space-y-4">
                  <Link
                    href="https://www.instagram.com/fiktispace.ug/"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-[#0A2352]"
                  >
                    <FaInstagram
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    @fiktispace.ug
                  </Link>
                  <Link
                    href="https://wa.me/62085819191776"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-[#0A2352]"
                  >
                    <FaWhatsapp
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    0858-1919-1776 (Siti Nazua)
                  </Link>
                  <Link
                    href="https://wa.me/6285883321315"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-[#0A2352]"
                  >
                    <FaWhatsapp
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    0858-8332-1315 (Nayla)
                  </Link>
                  <Link
                    href="mailto:bemfikti.ug@gmail.com"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-[#0A2352]"
                  >
                    <CiMail
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300 font-bold"
                    />
                    bemfikti.ug@gmail.com
                  </Link>
                </div>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center lg:w-2/5 w-full self-end gap-4 max-lg:order-1 max-md:self-center">
              <div className="flex justify-center items-center gap-4 pb-4">
                {/* pake round */}
                {/* <div className="w-24 h-24 max-md:w-24 max-md:h-24 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <Image
                    src="/logo-universitas-gunadarma.png"
                    alt="Logo Universitas Gunadarma"
                    width={300}
                    height={300}
                    className="bg-cover h-16 w-16
                    "
                  />
                </div>
                <div className="w-24 h-24 max-md:w-24 max-md:h-24 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <Image
                    src="/logo-fikti.png"
                    alt="Logo FIKTI"
                    width={300}
                    height={300}
                    className="bg-cover h-fit w-14
                    "
                  />
                </div>
                <Image
                  src="/LOGO ADIRAKA ROUND.png"
                  alt="Logo Kabinet Adiraka"
                  width={300}
                  height={300}
                  className="bg-cover h-24 w-24 cursor-pointer hover:scale-110 transition-all duration-300"
                /> */}
                {/* tidak pake round */}
                <Image
                    src="/logo-universitas-gunadarma.png"
                    alt="Logo Universitas Gunadarma"
                    width={300}
                    height={300}
                    className="bg-cover h-16 w-16 cursor-pointer hover:scale-110 transition-all duration-300"
                  />
                <Image
                    src="/logo-fikti.png"
                    alt="Logo FIKTI"
                    width={300}
                    height={300}
                    className="bg-cover h-24 w-20 cursor-pointer hover:scale-110 transition-all duration-300"
                  />
                <Image
                  src="/LOGO ADIRAKA TRANSPARAN.png"
                  alt="Logo Adiraka"
                  width={300}
                  height={300}
                  className="bg-cover h-[3.5rem] w-[4.5rem] cursor-pointer hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className={`text-xl text-center text-white ${Lato.className} font-extrabold `}>
                BEM FIKTI UG 2024/2025<br />FIKTI SPACE
              </h1>
            </div>
            <div className="flex flex-col gap-4 lg:w-1/5 w-full font-medium">
              <div className='flex gap-2 text-white'>
                <FaLocationDot size={25} className="flex-shrink-0" />
                <h1 className="text-xl font-bold">Lokasi</h1>
              </div>
              <Link
                href="https://maps.app.goo.gl/etmNsRtGszuWaD1cA" // Ganti dengan link lokasi spesifik
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-[#0A2352] hover:underline"
              >
                <p className="ml-2 font-medium">
                    Sekretariat BEM FIKTI: <br />Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok
                </p>
              </Link>
            </div>
        </div>
        <hr className='w-5/6 mx-auto'></hr>
        <div className='text-white text-center py-5 text-[9px] md:text-lg font-medium mx-3 lg:mx-0'>
            Copyright © 2025 BEM FIKTI UG & Made with 💛 by BIRO PTI
        </div>
      </footer>
    </div>
  );
};

export default Footer;
