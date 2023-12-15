"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-slate-700 rounded-md bg-gradient-to-b from-[#091534] to-[#060E23] to-[84%] p-4 bottom-0">
      <div className="flex flex-col md:flex-row justify-start gap-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/Logo Gunadarma (Universitas Gunadarma) Original PNG.png"
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
        <div className="flex flex-col">
          <h1 className="text-xl">Social media</h1>
          <Link
            href="http://instagram.com/ug_bemfikti"
            className="text-gray-400 hover:text-purpleText"
          >
            Instagram
          </Link>
          <Link href="/" className="text-gray-400 hover:text-purpleText">
            X
          </Link>
          <Link
            href="http://tiktok.com/@ug.bemfikti"
            className="text-gray-400 hover:text-purpleText"
          >
            Tiktok
          </Link>
          <Link
            href="https://youtube.com/@BEMFIKTI"
            className="text-gray-400 hover:text-purpleText"
          >
            Youtube
          </Link>
          <Link
            href="https://www.linkedin.com/in/bem-fikti-ug-b349921b1"
            className="text-gray-400 hover:text-purpleText"
          >
            Linkedin
          </Link>
          <Link
            href="http://instagram.com/fikti.careercenter"
            className="text-gray-400 hover:text-purpleText"
          >
            FIKTI Career Center
          </Link>
        </div>

        <div className="flex-initial md:w-96">
          <h1 className="text-xl mb-3">Kontak</h1>

          <div className="flex flex-row gap-5 items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 align-top"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              <p>bemfikti.ug@gmail.com</p>
            </Link>
          </div>

          <div className="flex flex-row gap-5 items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 align-top"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              <p>+62 877-8524-7632</p>
            </Link>
          </div>
          <div className="flex flex-row gap-5 items-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-32 md:w-28 h-8 align-top"
              width="24"
              height="24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <Link href="/" className="text-gray-400 hover:text-purpleText">
              <p>
                Alamat Sekretariat BEM FIKTI: Pusat Kegiatan Mahasiswa (PUSGIWA)
                Gedung 4 Lantai 3 Kampus E Universitas Gunadarma Jl. Komjen Pol.
                M. Jasin Kelapa Dua Depok
              </p>
            </Link>
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
