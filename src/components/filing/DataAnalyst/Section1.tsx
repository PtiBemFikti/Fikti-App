import React from "react";
import Link from "next/link";
import Image from "next/image";
import dataAnalyst from "@/../public/filing/BootcampImage1.png"

const Section1: React.FC = () => {
  return (
    <div className="bg-white p-10">
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
      <div className="space-y-3">
        <Image src={dataAnalyst} alt="" className="mt-4"/>
        <div className="text-black space-y-1">
          <h1 className="font-CircleAmolens text-[40px]">Data Analyst</h1>
          <h2 className="font-Poppins italic font-light text-[16px]  text-[#6C6A67]">&quot;Started The Journey as a Data Analyst with Python & Tableau&quot;</h2>
          <h2 className="font-Poppins text-[14px]">27 April 2024 - 18 Mei 2024</h2>
        </div>
        <div className="flex justify-between gap-2">
          <div className="shadow-xl border border-[#B4B1AC] w-full rounded-lg p-2 text-[#6C6A67] text-center text-[14px] font-Poppins">Hubungi Kami</div>
          <div className="shadow-xl bg-[#21B573] w-full rounded-lg p-2 font-Poppins text-[14px] text-center">Daftar Sekarang</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
