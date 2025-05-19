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
              "1. Peserta harus terdaftar secara resmi sebelum batas waktu pendaftaran yang ditentukan.", 
              "2. Setiap tim/individu wajib membayar biaya pendaftaran sesuai dengan cabang olahraga yang diikuti.", 
              "3. Peserta harus hadir tepat waktu sesuai dengan jadwal pertandingan yang telah ditentukan.", 
              "4. Semua peserta wajib menggunakan perlengkapan olahraga yang sesuai dengan standar keamanan dan peraturan kompetisi.",
              "5. Keputusan wasit atau juri bersifat mutlak dan tidak dapat diganggu gugat.",
              "6. Setiap tim hanya boleh mendaftarkan jumlah pemain sesuai dengan peraturan masing-masing cabang olahraga.",
              "7. Dilarang menggunakan doping atau zat terlarang dalam bentuk apa pun.",
              "8. Peserta wajib menjaga sportivitas dan menghormati panitia, wasit, serta peserta lain.",
              "9. Setiap peserta bertanggung jawab atas keselamatan diri sendiri selama kompetisi berlangsung..",
              "10. Panitia berhak mendiskualifikasi tim atau individu yang melanggar peraturan yang telah ditetapkan.",             
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Pertandingan dilakukan dengan satu lawan satu.", 
              "2. Pemain yang lebih dulu melakukan break ditentukan dengan cara lagging", 
              "3. Saat break, pemain harus memasukkan satu bola dan/atau membuat setidaknya tiga bola menyentuh sisi meja.", 
              "4. Jika pemain tidak berhasil memasukkan bola maupun tidak membuat tiga bola menyentuh sisi, maka bola harus disusun ulang, dan giliran break diberikan kepada lawan.",
              "5. Pemain diperbolehkan terus memukul bola selama berhasil memasukkan bola dengan sah.",
              "6. Jika pemain gagal memasukkan bola atau melakukan pelanggaran, giliran bermain berpindah ke lawan.",              
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