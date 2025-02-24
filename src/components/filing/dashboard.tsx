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
    <div>
      <div>
        {/* Desktop */}
        <div className="sm:block hidden">
          <div className="bg-[url(/filing/Unsplash-BG.png)] bg-cover bg-center px-5 md:px-20 lg:px-36 pb-10">
            <div className="text-black max-w-full md:w-[497px]">
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
                <h1 className="text-2xl md:text-4xl font-bold text-white pt-10 font-serif">
                  POWER UP YOUR SKILLS TO FACE INDUSTRY 5.0 WITH DATA ANALYTICS AND WEB DEVELOPMENT
                </h1>
                <h2 className="text-base md:text-lg text-white mt-3 leading-6 md:leading-[30px] font-serif">
                  Get the knowledge and skills you need to thrive in today’s rapidly changing world with our flexible and affordable bootcamp online courses.
                </h2>
                <div className="flex gap-5 mt-4">
                  <Link href={"/filing#bootcamp"}>
                  <button className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-white px-6 md:px-7 text-sm md:text-[17px] rounded-xl font-semibold py-3 duration-300 font-serif">
                    See Program
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          <div className="bg-[url(/filing/Unsplash-BG.png)] bg-cover bg-center px-5 pb-10">
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
                <h1 className="text-xl font-bold text-white pt-10 leading-tight font-serif">
                  POWER UP YOUR SKILLS<br/> TO FACE INDUSTRY 5.0<br/> WITH DATA ANALYTICS<br/> AND WEB DEVELOPMENT
                </h1>
                <h2 className="text-sm text-white mt-3 leading-5 md:leading-[30px] font-serif">
                  Get the knowledge and skills you need to thrive in today’s rapidly changing world with our flexible and affordable bootcamp online courses.
                </h2>
                <div className="flex gap-5 mt-4">
                  <Link href={"/filing#bootcamp"}>
                  <button
                    className="bg-gradient-to-r from-[#3F3381] to-[#B07FD6] text-white px-6 text-sm md:text-[17px] rounded-xl font-semibold py-3 duration-300 font-serif">
                    See Program
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* logo */}

        {/* bergerak */}
        {/* <div className="overflow-hidden bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10 justify-between">
          <div className="flex animate-infinite-scroll whitespace-nowrap">
            {Array(100)
              .fill(imageUrls)
              .flat()
              .map((url, index) => (
                <div
                  key={index}
                  className="flex-none mx-3 md:mx-16 items-center flex justify-between"
                >
                  <Image
                    src={url}
                    alt={`Logo ${index + 1}`}
                    width={90}
                    height={90}
                  />
                </div>
              ))}
          </div>
        </div> */}

        {/* tidak gerak */}
        <div className="w-full bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10">
          <div className="flex justify-evenly items-center">
            <Image
              src="/filing/Kalilinux 1.png"
              alt="logo"
              width={90}
              height={90}
            />
            <Image
              src="/filing/Cyber Security.png"
              alt="logo"
              width={90}
              height={90}
            />
            <Image
              src="/filing/Artificial Intelligence.png"
              alt="logo"
              width={90}
              height={90}
            />
            <Image
              src="/filing/Python.png"
              alt="logo"
              width={90}
              height={90}
            />
            <Image
              src="/filing/SQL.png"
              alt="logo"
              width={90}
              height={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;