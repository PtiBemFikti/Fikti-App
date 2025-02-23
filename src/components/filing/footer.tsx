import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin,FaWhatsapp, FaWhatsappSquare, FaMailBulk } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { MonumentExtendedRegular } from "@/styles/font";

const footer: React.FC = () => {
  return (
    <div className='text-black'>
        <footer className="bg-[linear-gradient(89.94deg,#3F3381_-6.02%,#CBA2EA_57.77%,#91D2F4_121.56%)] rounded-t-md p-4 bottom-0 overflow-x-hidden">
        <div className="flex flex-wrap lg:flex lg:flex-row items-center justify-evenly relative gap-10 py-10 px-5 md:px-20 border-b-1">
            <div className="flex flex-col gap-8 lg:w-1/5 w-full">
                <h1 className="text-xl font-serif text-white">Sosial Media Kami</h1>
                <div className="space-y-7">
                  <Link
                    href="https://www.instagram.com/academicc_insight/"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-purpleText"
                  >
                    <FaInstagram
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    @academicc_insight
                  </Link>

                  <Link
                    href="https://wa.me/6285156854807"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-purpleText"
                  >
                    <FaWhatsapp
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
                    />
                    +6285156854807
                  </Link>
                  <Link
                    href="mailto:bemfikti.ug@gmail.com"
                    target="_blank"
                    className="flex items-center gap-2 group text-white hover:text-purpleText"
                  >
                    <CiMail
                      size={25}
                      className="cursor-pointer group-hover:scale-110 transition-all duration-300"
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
                    className="bg-cover h-16 w-16 hover:scale-110 transition-all duration-300"
                  />
                <Image
                    src="/logo-fikti.png"
                    alt="Logo FIKTI"
                    width={300}
                    height={300}
                    className="bg-cover h-24 w-20 hover:scale-110 transition-all duration-300"
                  />
                <Image
                  src="/LOGO ADIRAKA TRANSPARAN.png"
                  alt="Logo Adiraka"
                  width={300}
                  height={300}
                  className="bg-cover h-[3.5rem] w-[5rem] cursor-pointer hover:scale-110 transition-all duration-300"
                />
              </div>

              <h1 className="text-xl text-center text-white font-serif">
                BEM FIKTI UG 2024/2025<br />FIKTI LEARNING
              </h1>
            </div>

            <div className="flex flex-col gap-4 lg:w-1/5 w-full font-serif">
              <div className='flex gap-2 text-white'>
                <FaLocationDot size={25} className="flex-shrink-0" />
                <h1 className="text-xl font-serif">Sosial Media Kami</h1>
              </div>
              <Link
                href="https://www.google.com/maps/place/Universitas+Gunadarma/@-6.363234,106.831725,17z" // Ganti dengan link lokasi spesifik
                target="_blank"
                rel="noopener noreferrer"
                className=" text-white hover:text-violet-800"
              >
                <p className="ml-2">
                    Sekretariat BEM FIKTI: Pusat Kegiatan Mahasiswa (PUSGIWA) Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol. M. Jasin Kelapa Dua Depok
                </p>
              </Link>
            </div>
        </div>
        <div className='text-white text-center py-3'>
            Copyright © 2025 BEM FIKTI UG - All rights reserved.
        </div>
        </footer>
    </div>
  )
}

export default footer;