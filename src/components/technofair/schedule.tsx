"use client";
import { Montserrat, poppins } from "@/styles/font";
import Link from "next/link";
import { useState } from "react";

const kontenSeminar = [
    { tanggal: "05 Juli 2025", waktu: "09.00 – 12.00 WIB", judul: "Internet of Things", metode: "Offline", href: "/technofair/details/seminar/iot" },
    { tanggal: "19 Juli 2025", waktu: "09.00 – 13.25 WIB", judul: "Cyber Security", metode: "Offline", href: "/technofair/details/seminar/cyber-security" },
];
const kontenWorkshop = [
    { tanggal: "28 Juni 2025", waktu: "09.00 – 23.00 WIB", judul: "Data Analyst", metode: "Offline", href: "/technofair/details/workshop/data-analyst" },
    { tanggal: "5 Juli 2025", waktu: "09.00 – 13.00 WIB", judul: "Artificial Intelligence", metode: "Offline", href: "/technofair/details/workshop/artificial-intelligence" },
];
const kontenKompetisi = [
    { tanggal: "22 Juni - 12 Juli 2025", waktu: "", judul: "Mobile App UI/UX Design", metode: "Hybrid", href: "/technofair/details/competitions/mobile-design" },
    { tanggal: "22 Juni - 12 Juli 2025", waktu: "", judul: "Competitive Programming", metode: "Hybrid", href: "/technofair/details/competitions/competitive-programming" },
    { tanggal: "22 Juni - 12 Juli 2025", waktu: "", judul: "Capture The Flag", metode: "Hybrid", href: "/technofair/details/competitions/capture-the-flag" },
];

export function Schedule() {

    const [tabAktif, setTabAktif] = useState("tab1")

    const tabs = [
        {id:"tab1", label:"Seminar"},
        {id:"tab2", label:"Workshop"},
        {id:"tab3", label:"Kompetisi"},
    ];

    const konten = {
        tab1: (
            <div>
                {kontenSeminar.map((item, index) => (
                
                <div key={index} className="flex justify-between mt-3 border-[2px] border-white sm:w-[600px] lg:w-[800px] lg:h-[150px] mx-1 sm:mx-auto lg:mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="flex">
                        <div className="items-center my-auto ml-3 sm:ml-10 whitespace-nowrap ">
                            <h1 className={`${Montserrat.className} font-extrabold text-xs lg:text-[14px]`}>{item.tanggal}</h1>
                            <h1 className={`${poppins.className} font-light text-sm lg:text-[16px]`}>{item.waktu}</h1>
                        </div>

                        <div className="bg-white h-20 lg:h-[130px] w-[1px] my-auto mx-5 lg:mx-14"></div>

                        <div className=" my-auto ">
                            <h1 className={`${Montserrat.className} font-extrabold lg:text-[25px]`}>{item.judul}</h1>
                            <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[12px] lg:text-[14x]`}>{item.metode}</h1>  
                        </div>
                    </div>
                    <Link href={item.href}>
                        <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-75 lg:scale-100 transition-all duration-500 my-auto lg:mt-[43px] mr-3 max-w-[38px] md:mr-8 md:max-w-full fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                        />
                        </svg>
                    </Link>

                </div>
                ))}
            </div>
        ),
        tab2: (
            <div>
                {kontenWorkshop.map((item, index) => (
                <div key={index} className="flex justify-between mt-3 border-[2px] border-white sm:w-[600px] lg:w-[800px] lg:h-[150px] mx-1 sm:mx-auto lg:mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="flex">
                        <div className="items-center my-auto ml-3 sm:ml-10 whitespace-nowrap ">
                            <h1 className={`${Montserrat.className} font-extrabold text-xs lg:text-[14px]`}>{item.tanggal}</h1>
                            <h1 className={`${poppins.className} font-light text-sm lg:text-[16px]`}>{item.waktu}</h1>
                        </div>

                        <div className="bg-white h-20 lg:h-[130px] w-[1px] my-auto mx-5 lg:mx-14"></div>

                        <div className=" my-auto ">
                            <h1 className={`${Montserrat.className} font-extrabold lg:text-[25px]`}>{item.judul}</h1>
                            <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[12px] lg:text-[14x]`}>{item.metode}</h1>  
                        </div>
                    </div>

                    <Link href={item.href}>
                        <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-75 lg:scale-100 transition-all duration-500 my-auto lg:mt-[43px] mr-3 max-w-[38px] md:mr-8 md:max-w-full fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                        />
                        </svg>
                    </Link>

                </div>
                ))}
            </div>
        ),
        tab3: (
            <div>
                {kontenKompetisi.map((item, index) => (
                <div key={index} className="flex justify-between mt-3 border-[2px] border-white sm:w-[600px] lg:w-[800px] lg:h-[150px] mx-1 sm:mx-auto lg:mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="justify-between flex">
                        <div className="items-center my-auto ml-3 sm:ml-10 whitespace-nowrap ">
                            <h1 className={`${Montserrat.className} font-extrabold text-xs lg:text-xl`}>{item.tanggal}</h1>
                        </div>

                        <div className="bg-white h-20 lg:h-[130px] w-[1px] my-auto mx-5 lg:mx-14"></div>

                        <div className=" my-auto ">
                            <h1 className={`${Montserrat.className} font-extrabold lg:text-[25px]`}>{item.judul}</h1>
                            <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[12px] lg:text-[14x]`}>{item.metode}</h1>  
                        </div>
                    </div>

                    <Link href={item.href}>
                        <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        className="scale-75 lg:scale-100 transition-all duration-500 my-auto lg:mt-[43px] mr-3 max-w-[38px] md:mr-8 md:max-w-full fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                        />
                        </svg>
                    </Link>

                </div>
                ))}
            </div>
        )
    }

    return(
        
        <div className="justify-center mt-52 lg:mt-96 [background-image:linear-gradient(180deg,#100F21_0%,#181736_17.72%,#181736_68.34%,#100F21_100%)]">
            <div className="justify-center items-center text-center mt-[200px]">
                <h1 className={`${poppins.className} text-white text-[44px] font-extrabold`}>Schedule</h1>
                <p className={`${poppins.className} text-white text-[16px]`}>Jadwal  rangkaian  acara dari TechnoFair 12.0</p>
                <div className="w-3/4 lg:w-[800px] h-[1px] bg-white mt-5 lg:mt-[34px] mx-auto"></div>
            </div>

            <div className="mt-5 pb-40">
                <div className="flex flex-wrap justify-center">
                    {tabs.map((tab => (
                        <button key={tab.id} className={`mx-1 mb-10 py-1 px-5 text-lg md:px-10 lg:px-20 md:py-2 md:mx-2 font-semibold md:text-[20px] rounded-full transition-all duration-300 ${
                            tabAktif === tab.id ? "bg-white text-black " : "bg-[#FE8A16] text-gray-500 hover:text-black"
                        }`}
                        onClick={() => setTabAktif(tab.id)}
                        >
                            {tab.label}
                        </button>
                    )))}
                </div>

                <div className="">{konten[tabAktif as keyof typeof konten]}</div>

            </div>

            
        </div>
    )
}