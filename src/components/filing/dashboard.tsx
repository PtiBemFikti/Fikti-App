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
        {/*desktop*/}
        <div className="sm:block hidden">
          <div className="bg-[url(/filing/Unsplash-BG.png)] px-36 pb-10">
            <div className="text-black w-[497px]">
              <Link href="/">
                <Image
                  src={"/filing/back.png"}
                  alt="back"
                  width={40}
                  height={40}
                  className="pb-6 pt-5"
                />
              </Link>
              <div className="flex gap-2">
                <h1 className="bg-gradient-to-r from-[#3F3381] from-10% to-[#B07FD6] to-75% text-[#F0ECE5] px-4 py-1.5 text-[15px] gap-[10px] rounded-3xl font-serif font-thin tracking-wide">
                  FIKTI LEARNING
                </h1>
                <h1 className="bg-gradient-to-r from-[#3F3381] from-10% to-[#B07FD6] to-75% text-[#F0ECE5] px-4 py-1.5  text-[15px] rounded-3xl font-serif font-thin tracking-wide ">
                  2025
                </h1>
              </div>
              <div className="flex flex-col">
                <h1
                  className={`font-serif text-[36px] font-bold text-white pt-10`}
                >
                  POWER UP YOUR SKILLS TO FACE INDUSTRY 5.0 WITH DATA ANALYTICS AND WEB DEVELOMENT
                </h1>

                <h2 className="font-serif leading-[30px] text-[22px] text-white">
                Get  the knowledge and skills you need to thrive in today’s rapidly changing  world with our flexible and affordable bootcamp online courses
                </h2>
                <div className="flex gap-5 scroll-smooth mt-4">
                  <Link href={"/filing#bootcamp"}>
                    <button className="bg-gradient-to-r from-[#3F3381] from-10% to-[#B07FD6] to-75% text-white px-7 text-[17px] font-serif rounded-xl font-semibold py-3">
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
        <div className="overflow-hidden bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10 justify-between">
          {/* Wrapper for scrolling images */}
          <div className="flex animate-infinite-scroll whitespace-nowrap">
            {Array(100)
              .fill(imageUrls)
              .flat()
              .map((url, index) => (
                <div
                  key={index}
                  className="flex-none mx-3 md:mx-20 items-center flex justify-between"
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
        </div>

        {/* tidak gerak */}
        {/* <div className="w-full bg-[linear-gradient(89.96deg,#3F3381_18.51%,#CBA2EA_70.22%,#91D2F4_111.48%)] py-4 mt-10">
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
        </div> */}

        {/* view Handphone */}
        {/* <div className="sm:hidden">
          <div className="bg-gradient-to-b from-slate-200 to-white">
            <div className="absolute flex flex-col gap-1 w-[308px] pt-5 mx-5">
              <Link href="/">
                <Image
                  src={"/filing/back.png"}
                  alt="back"
                  width={30}
                  height={30}
                  className="pb-1"
                />
              </Link>
              <div className="flex gap-2">
                <h1 className="bg-[#545350] text-[#F0ECE5] px-2 text-[14px] gap-[10px] rounded-r-3xl font-Poppins font-thin tracking-wide">
                  FIKTI LEARNING
                </h1>
                <h1 className="bg-[#545350] text-[#F0ECE5] px-2 text-[14px] rounded-3xl font-Poppins font-thin tracking-wide">
                  2024
                </h1>
              </div>
              <div>
                <h1
                  className={`${circleAmolens.className} font-bold text-[30px] text-black leading-[1.05]`}
                >
                  POWER UP YOUR SKILLS TO FACE INDUSTRY 5.0 WITH DATA ANALYST
                  AND WEB
                </h1>
              </div>
            </div>
            <Image src={learning2} alt="" className="pt-[180px]" />
            <div className="relative ">
              <Image src={vector} alt="" className="md:hidden w-full h-full" />
              <div className="flex justify-center">
                <div className="w-[330px] flex flex-col gap-3 absolute top-12 scroll-smooth">
                  <h2 className="font-Poppins leading-[30px] text-[16px] text-[#F0ECE5] text-center">
                    Get the knowledge and skills you need to thrive in today’s
                    rapidly changing world with our flexible and affordable
                    bootcamp online courses
                  </h2>
                  <Link href={"/filing#bootcamp"}>
                    <button className="bg-white text-black w-full rounded-xl font-semibold text-[18px] py-3">
                      See Program
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
