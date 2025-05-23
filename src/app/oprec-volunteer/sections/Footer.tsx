"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";
import { FaInstagram, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

import { MonumentExtendedRegular } from "@/styles/font";

const OprecFooter: React.FC = () => {
  return (
    <footer className="relative max-md:h-fit flex flex-col py-10 justify-end bg-[#0c0b1d] h-fit border-t-2 border-slate-700 p-4 bottom-0 overflow-x-hidden">
      <h1
        className={`${MonumentExtendedRegular.className} max-md:text-[1.3rem] max-md:mx-5 max-md:my-7 relative z-20 text-center text-[5rem] px-5 py-7 mx-40 my-14 border-2 border-white italic font-Bricolage_Grotesque hover:shadow-lg hover:shadow-white hover:bg-white hover:text-black transition-all duration-500 rounded-2xl cursor-pointer`}
      >
        KABINET ADIRAKA
      </h1>
      <div
        className="flex flex-col md:flex-row items-start self-end justify-evenly relative z-20
      "
      >
        <div className="flex flex-col gap-4 w-[14%] max-md:w-full">
          <h1 className="text-xl">Contact Info</h1>
          <Link
            href="mailto:bemfikti.ug@gmail.com"
            className="flex items-center gap-2 text-white hover:text-purpleText"
          >
            <CiMail size={25} className="flex-shrink-0" />
            <p className="ml-2">bemfikti.ug@gmail.com</p>
          </Link>

          <div className="flex items-center gap-2 text-white group">
            <FaPhone size={25} className="group" />
            <p className="ml-2">
              <a
                href="https://wa.me/6285150935519"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-purpleText"
              >
                +62 851-5093-5519
              </a>
            </p>
          </div>

          <Link
            href="https://www.google.com/maps?q=Pusat+Kegiatan+Mahasiswa+(PUSGIWA)+Gedung+4+Lantai+3+Kampus+E+Universitas+Gunadarma,+Jl.+Komjen+Pol.+M.+Jasin+Kelapa+Dua+Depok"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-white hover:text-purpleText"
          >
            <FaLocationDot size={25} className="flex-shrink-0" />
            <p className="ml-2">
              Alamat Sekretariat BEM FIKTI: Pusat Kegiatan Mahasiswa (PUSGIWA)
              Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol.
              M. Jasin Kelapa Dua Depok
            </p>
          </Link>

          <div className="flex items-center justify-center gap-5 max-md:my-10">
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

        <div className="flex self-end gap-4 max-md:order-1 max-md:hidden">
          <Image
            src="/oprec-volunteer/bg-footer.png"
            alt="Logo"
            width={800}
            height={800}
            className="opacity-40 bg-cover max-md:w-20 max-md:h-20"
          />
        </div>
        <div className="flex flex-col gap-5 w-[15%] max-md:w-full">
          <div className="flex flex-col gap-3 ">
            <h1 className="text-xl font-bold">Join us</h1>
            <p>
              Kami mengajak Sobat FIKTI untuk bergabung dengan kami dan membuat
              perbedaan. Daftarkan diri Sobat FIKTI sekarang juga!
            </p>
            <p>
              Sobat FIKTI akan dialihkan ke link formulir pendaftaran yang kami
              sediakan
            </p>
            <Link href="https://bit.ly/OpenRegistRecruitmentVolunteer">
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-green-500 px-16 py-4 transition-all duration-200 hover:shadow-[0px_0px_10px_2px] group shadow-white bg-green-500 rounded-lg font-bold mt-4">
                Join us
              </button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 p-2 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/logo-universitas-gunadarma.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
              <div className="w-12 h-12 p-[0.6rem] bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/logo-fikti.png"
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
              <Image
                src="/LOGO ADIRAKA ROUND.png"
                alt="Logo"
                width={200}
                height={200}
                className="bg-cover w-12 h-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-10  mx-auto relative z-20">
        <p className="text-center border-t-2 pt-3 border-gray-500 text-white text-xs md:text-base font-normal">
          Copyright © 2025 BEM FIKTI UG & Made with by BIRO PTI
        </p>
      </div>
    </footer>
  );
};

export default OprecFooter;
