"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Lato } from "@/styles/font";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className='text-black'>
      <footer className="relative overflow-hidden bg-[#FECB62] bottom-0">
        <div className="flex flex-wrap lg:flex lg:flex-row items-start justify-evenly relative gap-10 pt-10 mb-5 px-8 md:px-20">
            <div className="flex flex-col gap-4 lg:w-1/5 w-full font-medium">
                <div className="space-y-4">
                  <Link
                    href="https://www.instagram.com/fiktispace.ug/"
                    target="_blank"
                    className="flex items-center gap-2 group text-[#0A2352] hover:text-[#FF8797] font-medium"
                  >
                    <FaInstagram
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    @fiktispace.ug
                  </Link>
                  <Link
                    href="https://www.instagram.com/fspace_creamart/"
                    target="_blank"
                    className="flex items-center gap-2 group text-[#0A2352] hover:text-[#FF8797] font-medium"
                  >
                    <FaInstagram
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    @fspace_creamart
                  </Link>
                  <Link
                    href="https://wa.me/62085819191776"
                    target="_blank"
                    className="flex items-center gap-2 group text-[#0A2352] hover:text-[#FF8797] font-medium"
                  >
                    <FaWhatsapp
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    0858-1919-1776 (Nazua)
                  </Link>
                  <Link
                    href="https://wa.me/6285883321315"
                    target="_blank"
                    className="flex items-center gap-2 group text-[#0A2352] hover:text-[#FF8797] font-medium"
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
                    className="flex items-center gap-2 group text-[#0A2352] hover:text-[#FF8797] font-medium"
                  >
                    <FaEnvelope
                      size={23}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300 font-medium"
                    />
                    Bemfikti.ug@gmail.com
                  </Link>
                </div>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-center lg:w-2/5 w-full self-end max-lg:order-1 max-md:self-center">
              <div className="flex justify-center items-center gap-4">
                <div className="w-[7.5rem] h-[7.5rem] max-md:w-20 max-md:h-20 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <Image
                    src="/logo-universitas-gunadarma.png"
                    alt="Logo Universitas Gunadarma"
                    width={300}
                    height={300}
                    className="bg-cover h-[5rem] w-[5rem] max-md:w-14 max-md:h-fit
                            "
                  />
                </div>
                <div className="mb-14 w-[7.5rem] h-[7.5rem] max-md:w-20 max-md:h-20 bg-white rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-all duration-300">
                  <Image
                    src="/logo-fikti.png"
                    alt="Logo FIKTI"
                    width={300}
                    height={300}
                    className="bg-cover h-fit w-16 max-md:w-12"
                  />
                </div>
                <Image
                  src="/LOGO ADIRAKA ROUND.png"
                  alt="Logo Kabinet Adiraka"
                  width={300}
                  height={300}
                  className="bg-cover h-[7.5rem] w-[7.5rem] max-md:w-20 max-md:h-20 cursor-pointer hover:scale-110 transition-all duration-300"
                />
              </div>
              <h1 className={`text-2xl text-center text-[#0A2352] ${Lato.className} font-extrabold`}>
                BEM FIKTI UG 2024/2025<br />FIKTI SPACE
              </h1>
            </div>
            <div className="flex flex-col gap-2 lg:w-1/5 w-full font-medium">
              <Link
                href="https://maps.app.goo.gl/etmNsRtGszuWaD1cA" // Ganti dengan link lokasi spesifik
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#0A2352] hover:text-[#FF8797] flex transition-all duration-300 cursor-pointer"
              >
                <FaLocationDot size={25} className="flex-shrink-0 group-hover:scale-110 transition-all duration-300" />
                <p className="ml-2 font-medium">
                    Sekretariat BEM FIKTI : <br />Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok
                </p>
              </Link>
            </div>
        </div>
        <hr className='w-5/6 mx-auto border-[#0A2352]'></hr>
        <div className='text-[#0A2352] text-center py-5 text-[9px] md:text-lg font-medium mx-3 lg:mx-0'>
            Copyright © 2025 BEM FIKTI UG & Made with 💙 by BIRO PTI
        </div>
      </footer>
    </div>
  );
};

export default Footer;
