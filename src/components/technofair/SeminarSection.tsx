import { Montserrat, OpenSauceSans, poppins } from "@/styles/font";
import Image from "next/image";
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
    image: string;
  }

  const cardData: CardData[] = [
    {
      id: 1,
      category: "Seminar",
      mode: "Offline",
      title: "Internet of Things",
      subtitle: "“Innovating IoT with AI: A New Era of Customer-Centric Business Growth”",
      date: "To be Announced",
      details1: "Sabtu, 21 Juni 2025",
      details2: "Connectivity & Innovation",
      href: "/technofair/details/seminar/iot",
      image: "/technofair/logoTF12/Cover Web Acara/Cover Seminar/Seminar IoT .PNG",
    },
    {
      id: 2,
      category: "Seminar",
      mode: "Offilne",
      title: "Cyber Security",
      subtitle: "“The Future Of Cybersecurity: Trends, Threats, and Technologies”",
      date: "To be Announced",
      details1: "Sabtu, 19 Juli 2025",
      details2: "Cyber Security & Trends",
      href: "/technofair/details/seminar/cyber-security",
      image: "/technofair/logoTF12/Cover Web Acara/Cover Seminar/Seminar CS .PNG",
    },
  ];

  function Card({ data }: { data: CardData }) {
    return (
      <div className="bg-[#FFEFD7] w-[320px] rounded-[30px] shadow-[10px_9px_5px_0px_rgba(94,77,73,0.50)]">
        <div className="p-5 flex-grow">
          <div className="rounded-3xl  mb-6">
              <Image src={data.image} alt="image" width={280} height={150} className="rounded-3xl"/>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#000" d="M5.673 0a.7.7 0 0 1 .7.7v1.309h7.517v-1.3a.7.7 0 0 1 1.4 0v1.3H18a2 2 0 0 1 2 1.999v13.993A2 2 0 0 1 18 20H2a2 2 0 0 1-2-1.999V4.008a2 2 0 0 1 2-1.999h2.973V.699a.7.7 0 0 1 .7-.699M1.4 7.742v10.259a.6.6 0 0 0 .6.6h16a.6.6 0 0 0 .6-.6V7.756zm5.267 6.877v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zm-8.333-3.977v1.666H5v-1.666zm4.166 0v1.666H9.167v-1.666zm4.167 0v1.666h-1.667v-1.666zM4.973 3.408H2a.6.6 0 0 0-.6.6v2.335l17.2.014V4.008a.6.6 0 0 0-.6-.6h-2.71v.929a.7.7 0 0 1-1.4 0v-.929H6.373v.92a.7.7 0 0 1-1.4 0z"/></svg>
                <p className="tracking-tight text-base text-[#0E0D1F]">
                  {data.details1}
                </p>
              </div>
              <div className="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.44 5.78L4.198 16.02a2 2 0 0 0-.565 1.125l-.553 3.774l3.775-.553A2 2 0 0 0 7.98 19.8L18.22 9.56m-3.78-3.78l2.229-2.23a1.6 1.6 0 0 1 2.263 0l1.518 1.518a1.6 1.6 0 0 1 0 2.263l-2.23 2.23M14.44 5.78l3.78 3.78"/></svg>
                <p className="tracking-tight text-base text-[#0E0D1F]">
                  {data.details2}
                </p>
              </div>
          </div>
          <div className="p-5 pt-0 text-right ">
            <Link href={data.href} className="text-black text-xl font-semibold">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    );
  }


export default function SeminarSection() {

    return(
        <div className="relative">

            <div className="absolute left-0 top-0 bg-[#FE8A16] rounded-r-[50px] w-[80%] lg:w-[70%] h-full lg:h-[600px]"></div>

                <div className="lg:grid lg:grid-cols-[40%_60%] pb-10 lg:pb-0 lg:h-[550px]">

                <div className="relative ml-6 pt-5 lg:ml-[112px] lg:pt-[100px] lg:py-[200px]">
                    <h1 className={`${Montserrat.className} text-4xl lg:text-[60px] font-bold text-black`}>Seminar</h1>
                    <p className={`${Montserrat.className} hidden lg:block pt-5 tracking-tight mr-8 text-black text-justify`}>Seminar TechnoFair 12.0 menghadirkan dua sesi mendalam bersama para ahli dan praktisi industri: “Innovating IoT with AI” yang mengupas integrasi IoT dan AI untuk menciptakan solusi bisnis yang cerdas dan berfokus pada pelanggan, serta “The Future of Cybersecurity” yang mengulas tren, ancaman, dan teknologi mutakhir dalam melindungi data dan sistem digital. Dapatkan pemahaman praktis melalui studi kasus nyata, strategi inovatif, dan keterampilan dasar penerapan teknologi, sambil memperluas jaringan dengan peserta lain yang antusias menghadapi era transformasi digital.</p>
                </div>

                <div className="relative flex flex-col mt-[-30px] lg:mt-10 scale-80 lg:scale-100"> 
                    <div className="relative flex gap-5 overflow-x-auto items-center w-full h-full"> 
                    {cardData.map((data) => (
                        <div key={data.id} className="flex-shrink-0">
                        <Card data={data} />
                        </div>
                    ))} 
                    </div> 
                </div>
            </div>
        </div>
    )
}