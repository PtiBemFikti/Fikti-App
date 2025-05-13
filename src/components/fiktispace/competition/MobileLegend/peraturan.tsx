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
              "1. Seluruh tim wajib hadir 30 menit sebelum pertandingan dimulai.", 
              "2. Semua tim dan pemain harus sudah berada di lobi game paling lambat 5 menit sebelum jadwal pertandingan.", 
              "3. Waktu keterlambatan maksimal hanya 5 menit dari jadwal yang telah ditentukan.", 
              "4. Apabila tim belum lengkap atau belum hadir lebih dari waktu keterlambatan yang ditetapkan, tim tersebut akan didiskualifikasi.",
              "5. Pembuktian absence (WO) dapat dilakukan melalui screenshot lobby dengan jam yang tertera sebagai bukti kehadiran.",
              "6. Babak 32 besar sampai semifinal menggunakan mode custom, draft pick 5v5, dengan spectator / panitia turnamen.",
              "7. Babak final menggunakan room turnamen dengan banned item sebanyak 10.",
              "8. Penyisihan awal menggunakan format BO1 (Best Of 1).",
              "9. Penyisihan antar kabupaten/kota sampai semifinal menggunakan sistem BO3 (Best Of Three).",              
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Setiap tim terdiri dari 5 pemain utama dan 1 pemain cadangan (opsional), semua dari kelas yang sama (Fakultas Ilmu Komputer dan Teknologi Informasi).", 
              "2. Pemain dalam satu tim harus berasal dari Fakultas Ilmu Komputer dan Teknologi Informasi.", 
              "3. Daftar pemain harus mencantumkan nama lengkap, username, dan ID akun yang akan digunakan saat bertanding.", 
              "4. Wajib menunjukkan KRS asli atau blanko pembayaran saat bertanding sebagai bukti keabsahan.",
              "5. Username akun dan ID harus sama dengan yang terdaftar saat registrasi dan tidak dapat diganti di kondisi apapun.",
              "6. Nickname peserta tidak boleh mengandung unsur negatif, SARA, atau hal-hal tidak pantas lainnya.",
              "7. Seluruh informasi yang diberikan oleh peserta menjadi tanggung jawab pribadi peserta.",
              "8. Peserta wajib menjunjung sikap sportif dan adil selama pertandingan.",
              "9. Satu pemain hanya boleh membela satu tim saja.",
              "10. Koneksi internet dan device sepenuhnya menjadi tanggung jawab peserta.",
              "11. Apabila terjadi masalah server pada hari pertandingan, maka jadwal ulang akan dijadwalkan kembali oleh panitia.",
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
              <Link href="https://wa.me/62085819191776" target="_blank">
                <p className={`text-sm sm:text-base lg:text-lg ${Lato.className} hover:underline hover:font-semibold`}>
                  0858-1919-1776 (Siti Nazua)
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