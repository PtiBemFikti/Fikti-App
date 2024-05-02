import React from "react";
import Image from "next/image";
import vector from "@/../public/filing/Vector.png";
import learning2 from "@/../public/filing/learning 2 1.png";
import Link from "next/link";
import { circleAmolens } from "@/styles/font";
const Dashboard: React.FC = () => {
  return (
    <div>
      <div>
        {/*desktop*/}
        <div className="sm:block hidden">
          <div className="bg-gradient-to-b from-slate-200 to-white h-[617px] flex gap-16 items-center justify-center">
            <div className="text-black w-[497px]">
              <Link href="/">
                <Image
                  src={"/filing/back.png"}
                  alt="back"
                  width={50}
                  height={50}
                  className="pb-4"
                />
              </Link>
              <div className="flex gap-2">
                <h1 className="bg-[#545350] text-[#F0ECE5] px-2 text-[24px] gap-[10px] rounded-r-3xl font-Poppins font-thin tracking-wide">
                  FIKTI LEARNING
                </h1>
                <h1 className="bg-[#545350] text-[#F0ECE5] px-2 text-[24px] rounded-3xl font-Poppins font-thin tracking-wide">
                  2024
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                <h1
                  className={`${circleAmolens.className} text-[40px] font-bold`}
                >
                  POWER UP YOUR SKILLS TO FACE INDUSTRY 5.0 WITH DATA ANALYST
                  AND WEB
                </h1>

                <h2 className="font-Poppins leading-[30px] text-[20px] text-[#6C6A67]">
                  Get the knowledge and skills you need to thrive in today’s
                  rapidly changing world with our flexible and affordable
                  bootcamp online courses
                </h2>
                <div className="flex gap-5 scroll-smooth">
                  <Link href={"/filing#about"}>
                    <button className="bg-[#11111B] rounded-md text-[#FEFDFC] text-[16px] leading-6 py-2 px-9 font-semibold">
                      Learn More
                    </button>
                  </Link>
                  <Link href={"/filing#bootcamp"}>
                    <button className="border border-[#11111B] rounded-md text-[16px] text-[#11111B] leading-6 py-2 px-9 font-semibold">
                      Lihat Bootcamp
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image
                src={"/filing/learning 2 1.png"}
                alt=""
                width={600}
                height={437}
              />
            </div>
          </div>
        </div>
        <div className="sm:hidden">
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
                  <Link href={"/filing#about"}>
                    <button className="bg-white text-black w-full rounded-xl font-semibold text-[18px] py-3">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
