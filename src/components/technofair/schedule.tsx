"use client";


import { Montserrat, poppins } from "@/styles/font";
import { useState } from "react";

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
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
            </div>
        ),
        tab2: (
            <div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
            </div>
        ),
        tab3: (
            <div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                <div className="flex mt-3 border-[2px] border-white w-[800px] h-[150px] mx-auto rounded-3xl  transform transition-transform duration-300">
                    <div className="items-center my-auto ml-[51px] ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[14x]`}>24 May 2025</h1>
                        <h1 className={`${poppins.className} font-light text-[12x]`}>00.00 - 12.00 WIB</h1>
                    </div>

                    <div className="bg-white h-[130px] w-[1px] my-auto mx-14"></div>

                    <div className="items-center my-auto ">
                        <h1 className={`${Montserrat.className} font-extrabold text-[25px]`}>Capture The Flag</h1>
                        <h1 className={`${Montserrat.className} text-[#FF8E00] font-extrabold text-[14x]`}>Hybrid</h1>  
                    </div>

                    <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-all duration-500 mt-[43px] ml-[130px] fill-white hover:fill-yellow-500 hover:cursor-pointer hover:scale-110"
                    >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.0137 10.6667L45.347 32.0001L24.0137 53.3334L18.667 48.0001L34.6803 32.0001L18.667 16.0001L24.0137 10.6667Z"
                    />
                    </svg>

                </div>
                
                
            </div>
        )
    }




    return(
        
        <div className="justify-center mt-[127px] [background-image:linear-gradient(180deg,#100F21_0%,#181736_17.72%,#181736_68.34%,#100F21_100%)]">
            <div className="justify-center items-center text-center mt-[200px]">
                <h1 className={`${poppins.className} text-white text-[44px] font-extrabold`}>Schedule</h1>
                <p className={`${poppins.className} text-white text-[16px]`}>Jadwal  rangkaian  acara dari TechnoFair 12.0</p>
                <div className="w-[800px] h-[1px] bg-white mt-[34px] mx-auto"></div>
            </div>

            <div className="mt-5 pb-40">
                <div className="flex flex-wrap justify-center">
                    {tabs.map((tab => (
                        <button key={tab.id} className={`mx-2 mb-10 px-20 py-2 font-semibold text-[20px] rounded-full transition-all duration-300 ${
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