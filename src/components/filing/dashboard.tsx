import React from "react";
import Image from "next/image";
import vector from "@/../public/filing/Vector.png";
import learning2 from "@/../public/filing/learning 2 1.png";
import Link from "next/link";
import { circleAmolens } from "@/styles/font";
import { motion } from "framer-motion";

const imageUrls = [
"/filing/Kalilinux 1.png",
"/filing/Cyber Security.png",
"/filing/Artificial Intelligence.png",
"/filing/Python.png",
"/filing/SQL.png",
];

const Dashboard: React.FC = () => {
  return (
    <div >
      <div>
        {/* Desktop */}
        <div className="sm:block hidden">
          <div className="bg-[url(/filing/Unsplash-BG.png)] bg-cover bg-center px-5 md:px-20 lg:px-36 pb-10">
            <div className="text-black max-w-full md:w-3/5">
              <Link href="/">
              <Image src={"/filing/back.png"} alt="back" width={40} height={40} className="pb-6 pt-5" />
              </Link>
              <div className="flex gap-2">
                <h1 className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-[#F0ECE5] px-4 py-1.5 text-sm md:text-[15px] rounded-3xl font-serif tracking-wide">
                  FIKTI LEARNING
                </h1>
                <h1 className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-[#F0ECE5] px-4 py-1.5 text-sm md:text-[15px] rounded-3xl font-serif tracking-wide">
                  2025
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-3xl font-bold text-white pt-10 font-serif">
                  TINGKATKAN KEMAMPUAN ANDA UNTUK MENGHADAPI INDUSTRI 5.0 DENGAN MENGOLAH DATA
                </h1>
                <p className="font-extralight text-base md:text-lg text-white mt-5 leading-6 md:leading-[30px] font-serif w-4/6">
                Dapatkan pengetahuan dan keterampilan yang Anda butuhkan untuk berkembang di dunia yang berubah dengan cepat saat ini dengan kursus online bootcamp kami yang fleksibel dan terjangkau.
                </p>
                <div className="flex gap-5 mt-8">
                  <Link href={"/filing#bootcamp"}>
                  <button className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-white px-4 text-sm md:text-[17px] rounded-lg font-semibold py-2 duration-300 font-serif">
                    Lihat program
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="bg-[url(/filing/Unsplash-BG.png)] bg-cover bg-center px-3 sm:px-5 pb-10">
            <div className="text-black max-w-full">
              <Link href="/">
              <Image src={"/filing/back.png"} alt="back" width={40} height={40} className="pb-6 pt-5" />
              </Link>
              <div className="flex gap-2">
                <h1 className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-[#F0ECE5] px-4 py-1.5 text-sm rounded-3xl font-serif tracking-wide">
                  FIKTI LEARNING
                </h1>
                <h1 className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-[#F0ECE5] px-4 py-1.5 text-sm rounded-3xl font-serif tracking-wide">
                  2025
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-white pt-10 leading-tight font-serif break-words mx-auto">
                  TINGKATKAN KEMAMPUAN ANDA UNTUK MENGHADAPI INDUSTRI 5.0 DENGAN MENGOLAH DATA
                </h1>
                <p className="text-sm font-extralight text-white mt-3 leading-5 md:leading-[30px] font-serif">
                Dapatkan pengetahuan dan keterampilan yang Anda butuhkan untuk berkembang di dunia yang berubah dengan cepat saat ini dengan kursus online bootcamp kami yang fleksibel dan terjangkau.
                </p>
                <div className="flex gap-5 mt-4">
                  <Link href={"/filing#bootcamp"}>
                    <button className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-white px-4 sm:px-6 text-xs sm:text-sm md:text-[17px] rounded-xl font-semibold py-3 duration-300 font-serif">
                    Lihat program
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* logo */}

        {/* bergerak */}
        <div className="overflow-hidden bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10 justify-between">
          <div className="flex animate-infinite-scroll-slow whitespace-nowrap">
            {Array(100)
              .fill(imageUrls)
              .flat()
              .map((url, index) => (
                <div
                  key={index}
                  className="flex-none mx-3 md:mx-12 items-center flex justify-between"
                >
                  <Image
                    src={url}
                    alt={`Logo ${index + 1}`}
                    width={90}
                    height={90}
                    className="w-16 md:w-20"
                  />
                </div>
              ))}
          </div>
        </div>

        {/* tidak gerak */}
        {/* <div className="w-full bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10">
          <div className="flex justify-evenly items-center">
            <Image
              src="/filing/Kalilinux 1.png"
              alt="logo"
              width={90}
              height={90}
              className="w-12 sm:w-20 h-auto"
            />
            <Image
              src="/filing/Cyber Security.png"
              alt="logo"
              width={90}
              height={90}
              className="w-12 sm:w-20 h-auto"
            />
            <Image
              src="/filing/Artificial Intelligence.png"
              alt="logo"
              width={90}
              height={90}
              className="w-12 sm:w-20 h-auto"
            />
            <Image
              src="/filing/Python.png"
              alt="logo"
              width={90}
              height={90}
              className="w-12 sm:w-20 h-auto"
            />
            <Image
              src="/filing/SQL.png"
              alt="logo"
              width={90}
              height={90}
              className="w-12 sm:w-20 h-auto"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;