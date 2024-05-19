import React from "react";
import Link from "next/link";
import Image from "next/image";
import web from "@/../public/filing/Web.png";

const Section1: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-white  p-10 md:px-[50px] md:py-[30px]">
      <div className="w-fit">
        <Link href={"/filing"}>
          <div className="flex gap-1">
            <button className="rounded-full border border-[#545350]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="text-[#545350] w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h1 className="text-[#545350] font-Poppins text-[16px]">Back</h1>
          </div>
        </Link>
      </div>
      <div className="w-[300px] md:w-full flex flex-wrap gap-10 space-y-3">
        <Image src={web} alt="" className="mt-4 md:w-[462px] md:h-[346px]" />
        <div className="text-black space-y-2 md:w-[650px] flex flex-col justify-between">
          <h1 className="font-CircleAmolens text-[30px] md:text-[40px]">
            Web Development
          </h1>
          <h2 className="font-Poppins italic font-light text-[16px]  text-[#6C6A67] md:text-[20px]">
            &quot;Create Interactive Websites to Become a Web Developer with
            HTML, CSS & JS&quot;
          </h2>
          <h2 className="font-Poppins text-[14px] md:text-[20px] text-[#545350] font-semibold">
            27 April 2024 - 18 Mei 2024
          </h2>
          <div className="hidden md:block font-Poppins space-y-2">
            <h1 className="text-[#545350] text-[16px]">
              FILING hadir dengan bootcamp untuk membekali kamu dengan
              keterampilan dan pengetahuan yang dibutuhkan untuk menjadi Web
              Developer yang handal.
            </h1>
            <h1 className="text-[#545350] text-[16px]">
              Kuasai dan Jadilah Web Developer dengan Bootcamp FILING! <br />
              <span className="text-[#DF615C]">Kuota Terbatas!</span>
            </h1>
            <h1 className="text-[16px]"></h1>
          </div>
          <div className="justify-start items-center gap-2 inline-flex md:w-[400px] md:h-[52px]">
            <Link href="https://www.evernote.com/shard/s684/sh/6bba8628-a7cf-c26f-84b8-1996b92a3f4e/npUZo0Vd4Dp0pPWO4yUYoBVraTAj-dTPsxKUT6WEnZLH3_DS4NKOaGWuZg">
              <div className="w-36 h-10 py-6 bg-white rounded-lg shadow-xl border border-stone-400 justify-center items-center flex">
                <div className="text-stone-500 text-[14px] font-semibold font-['Poppins']">
                  Hubungi Kami
                </div>
              </div>
            </Link>
            <Link href="https://forms.gle/Uiq9XonHsovGqdT18">
              <div className="w-36 h-10 py-6 bg-emerald-500 rounded-lg shadow-xl border border-emerald-600 justify-center items-center flex">
                <div className="text-white text-[14px] font-['Poppins']">
                  Daftar Sekarang
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
