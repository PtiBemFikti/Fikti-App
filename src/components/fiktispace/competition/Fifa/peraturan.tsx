"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import { AkiraExpanded, Lato } from "@/styles/font";

// text silabus
type SyllabusModule = {
    points: string[];
};

const syllabus : Record < string,
    SyllabusModule > = {
        "PERATURAN DAN KETENTUAN UMUM": {
            points: [
              "1. Durasi pertandingan : 6 menit per babak (total 12 menit) atau 10 menit per babak (total 20 menit), sesuai kesepakatan kedua tim.", 
              "2. Pemain dapat memilih timnas atau klub sesuai keinginan sendiri.", 
              "3. Team yang digunakan dalam game harus disetujui oleh lawan sebelum pertandingan dimulai.", 
              "4. Pengaturan pertandingan: Injuries = Off, Handball = Off, Offsid = On, Weather = Clear, Stadium = Netral (sesuai kesepakatan).",
              "5. Level pertandingan : Super Star",
              "6. Substitusi : maksimal 3 kali",
              "7. Emotikon pemain : Off",
              "8. Kondisi Home & Away : Yellow (Normal)",
              "9. Cedera : Off",
              "10. Radar appearance : Bottom/Translucent ",
              "11. Time score : On ",
              "12. Stamina gauge : On",
              "13. Power gauge : On ",
              "14. Kamera : Dynamic Wide untuk semua pertandingan.",
              "15. Speed game : 0 (standar kecepatan normal)",
              "16. Kategori : Team Klub ",
              "17. Status team diatur sama rata.",
              "18. Waktu pertandingan, Extra Time, dan Penalty Kick akan disesuaikan kemudian.",
              "19. Pause hanya diperbolehkan untuk mengganti taktik atau pemain, dengan maksimal durasi pause 5 menit. ",             
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Turnamen terbuka untuk pemain individu dari mahasiswa aktif Fakultas Ilmu Komputer dan Teknologi Informasi.", 
              "2. Wajib menunjukkan KRS asli atau blanko pembayaran saat pertandingan sebagai bukti keabsahan.", 
              "3. Peserta harus mendaftar melalui formulir registrasi yang disediakan oleh panitia.", 
              "4. Peserta diharapkan hadir minimal 10 menit sebelum jadwal pertandingan.",
              "5. Keterlambatan lebih dari 10 menit akan menyebabkan peserta otomatis kalah (walkover).",
              "6. Peserta harus menjaga sikap sportivitas dan fair play selama turnamen berlangsung..",                            
            ]
        }
    };

type TabKeys = keyof typeof syllabus;

export default function Section1() {
    const tabs = Object.keys(syllabus);
    const [activeTab, setActiveTab] = useState("PERATURAN DAN KETENTUAN UMUM");
    const syllabusKeys = Object.keys(syllabus);
    const [activeIndex, setActiveIndex] = useState(0);
    const activeModule = syllabus[activeTab];

    const nextModule = () => {
        setActiveIndex((prev) => (prev + 1) % syllabusKeys.length);
        setActiveTab(syllabusKeys[(activeIndex + 1) % syllabusKeys.length]as TabKeys);
    };

    const prevModule = () => {
        setActiveIndex((prev) => (prev - 1 + syllabusKeys.length) % syllabusKeys.length);
        setActiveTab(syllabusKeys[(activeIndex - 1 + syllabusKeys.length) % syllabusKeys.length]as TabKeys);
    };
    return (
      <div id="peraturan"className="px-6 md:px-10 lg:px-16 pt-32 md:pt-28 lg:pt-28 pb-10">

        {/* tab desktop */}
        <div className="hidden md:block text-black space-y-10">
          {/* Tabs */}
          <div className="flex flex-row mb-6 gap-8 justify-evenly">
            {Object.keys(syllabus).map((tab) => (
            <button key={tab} onClick={()=> setActiveTab(tab as TabKeys)}
              className={`${activeTab === tab ? "border-b-3 border-white font-semibold text-white text-2xl": "text-gray-200 text-2xl"}`}
              >
              {tab}
            </button>
            ))}
          </div>
          {/* Content */}
          <div className="bg-gray-100 p-8 rounded-lg shadow">
            <ul className="text-black ">
              {activeModule.points.map((point, index) => (
              <li className="mb-2" key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* tab mobile */}
        <div id="peraturan" className="block md:hidden text-black space-y-10 pt-[5rem]">
          <div className="block md:hidden">
            {/* tabs */}
            <div className="flex justify-between items-center mb-4 gap-2">
              <button onClick={prevModule} className="text-lg text-white">
                <FaArrowLeft />
              </button>
              <h3 className="font-medium text-center text-lg text-white">
                {tabs[activeIndex]}
              </h3>
              <button onClick={nextModule} className="text-lg text-white">
                <FaArrowRight />
              </button>
            </div>
            {/* content */}
            <div className="bg-gray-100 p-8 rounded-lg shadow">
              <ul className="text-black">
                {activeModule.points.map((point, index) => (
                <li className="mb-2" key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <h1 className={`${AkiraExpanded.className} text-2xl md:text-[3rem] text-white leading-none`}>
            Contact Us
          </h1>
          <p className={`${Lato.className} text-medium md:text-xl text-white mt-1 md:mt-3`}>
            Can’t find what you are looking for? feel free to ask us!
          </p>
          <div className="flex mt-6 md:mt-4 gap-4 justify-center text-left">
            <Image
              src={"/fiktispace/wa.svg"}
              alt="whatsapp"
              width={40}
              height={30}
            ></Image>
            <div className="flex flex-col gap-y-">
              <Link href="https://wa.me/6285819191776" target="_blank">
                <p className={`text-sm sm:text-base lg:text-lg ${Lato.className} hover:underline hover:font-semibold`}>
                  0858-1919-1776 (Nazua)
                </p>
              </Link>
              <Link href="https://wa.me/6285883321315" target="_blank">
                <p className={`text-sm sm:text-base lg:text-lg ${Lato.className} hover:underline hover:font-semibold`}>
                  0858-8332-1315 (Nayla)
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}