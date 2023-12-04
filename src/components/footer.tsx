"use client";
import Image from "next/image";
import Link from "next/link";
// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-slate-700 rounded-md bg-gradient-to-b from-[#091534] to-[#060E23] to-[84%] py-6 bottom-0">
      <div className="flex flex-col md:flex-row justify-start items-start">
        <div className="ml-5 my-5 md:ml-72 flex flex-col gap-3">
          <Image
            src="/logo-kabinet.png"
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
        <div className="ml-5 my-5 md:mr-72 flex flex-col md:flex-row gap-10">
          <div className="flex flex-col">
            <div className="gap-3 text-lg mb-3">Social media</div>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              Instagram
            </Link>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              X
            </Link>
            <Link href="/" className="text-gray-400 hover:text-purpleText">
              Tiktok
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-left ml-5 text-white font-semibold">
          Made with 💛 by PTI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
