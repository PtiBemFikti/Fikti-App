import React from "react";
import Link from "next/link";
import Image from "next/image";
import dataScience from "@/../public/filing/Data Scince Cover.svg";
import { circleAmolens } from "@/styles/font";

const Section1: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-white  p-10 md:px-[50px] md:py-[30px]">
      <div className="w-fit">
        <Link href={"/filing"}>
          <div className="flex gap-1 border-black text-black hover:border-purpleText hover:text-purpleText">
            <button className="rounded-full border border-black hover:border-purpleText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h1 className="text-[18px]">Back</h1>
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-wrap md:flex-nowrap gap-10 space-y-1">
        <div className="w-full md:w-1/3">
          <Image
            src={dataScience}
            alt=""
            className="mt-4"
          />
        </div>
        <div className="text-black w-full md:w-2/3 flex flex-col">
          <h1 className="text-4xl font-extrabold mb-2">
            Data Science
          </h1>
          <h2 className="italic font-normal text-[24px] text-black md:text-[20px] mb-2">
            &quot;Exploring the Data Universe : Hands-On Learning for Beginners&quot;
          </h2>
          <h2 className="text-[24px] text-black font-semibold mb-8">
            26 April 2025 - 17 Mei 2025
          </h2>
          <div className="space-y-1">
            <p className="text-[#545350] text-[20px]">
              FILING hadir dengan bootcamp data science yang dirancang untuk membekali kamu dengan keterampilan mengelolah data, pemrograman, dan pemodelan yang dibutuhkan untuk menjadi Data Sience yang andal. <br /></p>
            <p className="text-[#545350] text-[20px]">
              Kuasai teknik data-driven dan jadilah Data Sience profesional bersama Bootcamp FILING! <br /><br />
              <span className="text-[#DF615C]">Kuota Terbatas!</span>
            </p>
            <p className="text-[18px]"></p>
          </div>
          <div className="flex flex-wrap gap-4 md:mt-auto mt-8 pb-3">
            <Link href="https://wa.me/6285156854807" target="_blank">
              <button className="w-auto h-10 py-6 px-4 bg-white rounded-lg shadow-xl border border-black justify-center items-center flex text-black text-[16px] font-semibold font-['Poppins']">
                  Hubungi Kami
              </button>
            </Link>
            <Link href="" target="_blank" rel="noopener noreferrer"> {/* kalau sudah ada gform nya */}
              <button className="w-auto h-10 py-6 px-4 bg-[#3F3381] rounded-lg shadow-xl justify-center items-center flex text-white text-[16px] font-['Poppins']">
                  Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
