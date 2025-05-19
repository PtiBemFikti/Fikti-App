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
              "2. Peserta harus hadir tepat waktu sesuai jadwal pertandingan dan acara yang telah ditetapkan.", 
              "3. Peserta wajib mengikuti alur teknis dan waktu tampil sesuai jadwal yang sudah ditentukan.", 
              "4. Peserta harus bersikap sportif dan menjaga etika selama kegiatan berlangsung.",
              "5. Peserta wajib menghormati sesama peserta, juri, panitia, dan penonton.",
              "6. Peserta harus menjaga kebersihan dan ketertiban area acara.",
              "7. Setiap penampilan harus mengikuti durasi maksimal 10 menit; melebihi batas waktu akan dikenai pengurangan nilai atau diskualifikasi.",
              "8. Peserta dilarang melakukan tindakan curang seperti menyabotase peserta lain, menggunakan identitas palsu, atau menyuap juri.",
              "9. Tidak diperbolehkan menampilkan aksi yang mengandung unsur SARA, pornografi, kekerasan, ujaran kebencian, vulgar, serta penampilan yang merendahkan atau menyinggung individu, kelompok, atau instansi tertentu.",
              "10. Peserta dilarang melakukan duplikasi atau plagiarisme karya orang lain tanpa izin atau modifikasi yang sah. ",
              "11. Tidak boleh menggunakan properti berbahaya atau yang dapat merusak panggung, fasilitas, atau peralatan milik panitia maupun pihak lain.",
              "12. Peserta tidak diperbolehkan membawa alkohol, narkoba, rokok, atau zat terlarang lainnya ke dalam area acara.",
              "13. Panitia berhak mendiskualifikasi temm atau individu yang melanggar peraturan yang ditetapkan. ",
              "14. Keputusan juri bersifat mutlak; protes secara tidak sopan atau mengganggu jalannya acara akan dikenai sanksi.",              
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Peserta adalah mahasiswa aktif dari SELURUH FAKULTAS.", 
              "2. Pendaftaran dilakukan dengan mengisi formulir yang telah disediakan.", 
              "3. Penampilan FIKTI Got Talent dapat berupa individu atau grup dengan maksimal 5 orang", 
              "3. Penampilan FIKTI Got Talent khusus untuk Tari Tradisional diperbolehkan maksimal 10 orang.", 
              "4. Mengirimkan video audisi adalah opsi, khususnya jika ada tahapan seleksi awal.",
              "5. Peserta wajib membawa alat atau perlengkapan sendiri jika diperlukan saat penampilan.",              
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