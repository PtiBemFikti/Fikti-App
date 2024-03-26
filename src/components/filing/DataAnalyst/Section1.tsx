import React from "react";
import Link from "next/link";
import Image from "next/image";
import dataAnalyst from "@/../public/filing/BootcampImage1.png";

const Section1: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-white  p-10 md:px-[150px] md:py-[80px]">
      <div className="w-fit">
        <Link href={"/filing"}>
          <div className="flex gap-1">
            <button className="rounded-full border border-[#545350]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#545350] w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <h1 className="text-[#545350] font-Poppins text-[16px]">Back</h1>
          </div>
        </Link>
      </div>
      <div className="w-[300px] md:w-full flex flex-wrap gap-10 space-y-3">
        <Image src={dataAnalyst} alt="" className="mt-4 md:w-[462px] md:h-[346px]" />
        <div className="text-black space-y-2 md:w-[650px] flex flex-col justify-between">
          <h1 className="font-CircleAmolens text-[30px] md:text-[40px]">Data Analyst</h1>
          <h2 className="font-Poppins italic font-light text-[16px]  text-[#6C6A67] md:text-[20px]">&quot;Started The Journey as a Data Analyst with Python & Tableau&quot;</h2>
          <h2 className="font-Poppins text-[14px] md:text-[20px] text-[#545350] font-semibold">27 April 2024 - 18 Mei 2024</h2>
          <div className="hidden md:block font-Poppins space-y-2">
            <h1 className="text-[#545350] text-[16px]">FILING hadir dengan bootcamp untuk membekali kamu dengan keterampilan dan pengetahuan yang dibutuhkan untuk menjadi Data Analyst yang handal.</h1>
            <h1 className="text-[#545350] text-[16px]"></h1>
            <h1 className="text-[#545350] text-[16px]">
              Kuasai dan Jadilah Data Analyst dengan Bootcamp FILING! <br />
              <b>GRATIS, tanpa biaya apapun!</b> <span className="text-[#DF615C]">Kuota Terbatas!</span>
            </h1>
            <h1 className="text-[16px]"></h1>
          </div>
          <div className="flex justify-between gap-2 md:w-[400px] md:h-[52px]">
            <div className="shadow-xl border border-[#B4B1AC] w-full rounded-lg p-2 text-[#6C6A67] flex items-center justify-center text-[14px] font-Poppins">
              <h1>Hubungi Kami</h1>
            </div>
            <div className="shadow-xl bg-[#21B573] text-[#FEFDFC] w-full rounded-lg p-2 font-Poppins text-[14px] flex items-center justify-center">Daftar Sekarang</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
