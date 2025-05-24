import { Montserrat, OpenSauceSans, poppins } from "@/styles/font";
import Link from "next/link";
import { useState, useRef } from "react";

interface CardData {
  id: number;
  category: string;
  mode: string;
  title: string;
  subtitle: string;
  date: string;
  details1: string;
  details2: string;
  href: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    category: "Workshop",
    mode: "TBA",
    title: "Data Analyst",
    subtitle: "“Mastering Data Analytics : From Raw Data to Business Impact”",
    date: "To be Announced",
    details1: "To be Announced",
    details2: "To be Announced",
    href: "/technofair/details/workshop/data-analyst",
  },
  {
    id: 2,
    category: "Workshop",
    mode: "TBA",
    title: "Artificial Intelligence",
    subtitle: "“AI in Action: Transforming Industries with Deep Learning and NLP”",
    date: "To be Announced",
    details1: "To be Announced",
    details2: "To be Announced",
    href: "/technofair/details/workshop/artificial-intelligence",
  },
];

function Card({ data }: { data: CardData }) {
  return (
    <div className="bg-[#FFEFD7] w-[320px] h-[450px] rounded-[30px] shadow-[10px_9px_5px_0px_rgba(94,77,73,0.50)]">
      <div className="p-5 flex-grow">
        <div className="h-[150px] w-[280px] rounded-3xl bg-black mb-6 py-12">
          <h1 className="text-red-600 border-2 w-fit px-3 py-2 text-xl border-red-600 font-bold mx-auto my-auto">
            TO BE ANNOUNCED..
          </h1>
        </div>
        <div className="flex gap-1 mb-2">
          <h5 className="text-[#FFFAF0] text-xs px-3 py-[2px] tracking-tight font-semibold bg-[#053B64] rounded-full">
            {data.category}
          </h5>
          <h5 className="text-[#FFFAF0] text-xs px-3 py-[2px] tracking-tight font-semibold bg-[#053B64] rounded-full">
            {data.mode}
          </h5>
        </div>
        <div>
          <h1 className="tracking-tight text-3xl font-extrabold text-[#0E0D1F]">
            {data.title}
          </h1>
          <p className="tracking-tight text-base text-[#0E0D1F]">
            {data.subtitle}
          </p>
        </div>
        <div className="mt-[30px]">
          <div className="flex gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#000" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"/></svg>
            <p className="tracking-tight text-base text-[#0E0D1F]">
              {data.details1}
            </p>
          </div>
          <div className="flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.44 5.78L4.198 16.02a2 2 0 0 0-.565 1.125l-.553 3.774l3.775-.553A2 2 0 0 0 7.98 19.8L18.22 9.56m-3.78-3.78l2.229-2.23a1.6 1.6 0 0 1 2.263 0l1.518 1.518a1.6 1.6 0 0 1 0 2.263l-2.23 2.23M14.44 5.78l3.78 3.78"/></svg>
            <p className="tracking-tight text-base text-[#0E0D1F]">
              {data.details2}
            </p>
          </div>
        </div>
        <div className="p-5 pt-0 text-right">
          <Link href={data.href} className="text-black text-xl font-semibold">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WorkshopSection() {
  return (
    <div className="relative">
      <div className="absolute right-0 top-0 bg-[#FE8A16] rounded-l-[50px] w-[80%] lg:w-[70%] h-full lg:h-[600px] z-0"></div>
      <div className="relative z-10 lg:grid lg:grid-cols-[60%_40%] pb-10 lg:pb-0 lg:h-[550px]">
        <h1 className={`${Montserrat.className} relative mr-6 pt-5 text-right text-4xl lg:text-[60px] font-bold text-black lg:hidden`}>
          Workshop
        </h1>
        <div className="flex flex-col items-center mt-[-30px] lg:mt-10 scale-80 lg:scale-100">
          <div className="flex gap-5 overflow-x-auto w-full py-5 justify-end pr-4">
            {cardData.map((data) => (
              <div key={data.id} className="flex-shrink-0">
                <Card data={data} />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block relative mr-6 lg:mr-0 pt-5 lg:pr-[112px] lg:pt-[100px] lg:py-[200px] text-right overflow-auto">
          <h1 className={`${Montserrat.className} text-4xl lg:text-[60px] font-bold text-black`}>
            Workshop
          </h1>
          <p className={`${Montserrat.className} tracking-tight text-black pt-5 pl-10`}>
            Workshop TechnoFair 12.0 menghadirkan dua sesi praktis bersama para ahli dan praktisi industri: “Mastering Data Analytics: From Raw Data to Business Impact” yang mengajarkan konsep, tools, dan studi kasus nyata dalam mengolah data untuk menghasilkan insight strategis, serta “AI in Action: Transforming Industries with Deep Learning and NLP” yang mengeksplorasi dasar-dasar AI, penerapan deep learning dan NLP, serta praktik membangun solusi sederhana berbasis AI. Dapatkan pengalaman hands-on dalam menganalisis data dan mengembangkan model AI, sambil memperluas jaringan dengan sesama peserta yang antusias dalam memimpin transformasi digital berbasis data dan kecerdasan buatan.
          </p>
        </div>
      </div>
    </div>
  );
}
