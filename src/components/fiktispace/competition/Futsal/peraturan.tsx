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
              "9. Setiap peserta bertanggung jawab atas keselamatan diri sendiri selama kompetisi berlangsung.",
              "10. Panitia berhak mendiskualifikasi tim atau individu yang melanggar peraturan yang telah ditetapkan.",
              "11. Dilarang membawa rokok / vape / pod / alat sejenisnya. Jika benda-benda tersebut ditemukan, maka akan disita oleh pihak panitia dan akan dikembalikan setelah pertandingan selesai. ",
              "12. Dilarang merokok, vape, atau kegiatan lainnya yang menimbulkan asap di area pertandingan. Apabila masih melakukan hal tersebut, teguran akan diberikan maksimal dua (2) kali. Lebih dari itu, akan dikenakan denda hingga diusir dari area pertandingan. ",
              "13. Dilarang menyentuh,bersandar, dan memasuki area pertandingan lewat jaring yang berada di dalam lapangan (kecuali panitia dalam keadaan tertentu).",
              "14. Dilarang membuang sampah sembarangan. ",
              "15. Dilarang membawa makanan & minuman dari luar yang bersifat kemasan (dianjurkan untuk membawa tempat minum dan makan sendiri).",
              "16. Penonton atau suporter dan pemain dilarang membuat kerusuhan",
              "17. Dilarang melakukan kontak fisik yang menimbulkan kekerasan hingga kericuhan di area pertandingan, baik di saat pertandingan berlangsung atau di luar pertandingan baik bagi pemain maupun penonton. ",
              "18. Penonton atau suporter dilarang memasuki area pertandingan saat pertandingan berlangsung.",
              "19. Dilarang melempar benda atau apapun ke arah kelompok suporter lain maupun ke arah lapangan pertandingan. ",
              "20. Dilarang membawa terompet, flare, bahan peledak, minuman keras, narkoba, alkohol, tongkat, senjata api, pisau serta senjata tajam dan benda berbahaya lainnya. Jika benda-benda tersebut ditemukan, maka akan disita oleh pihak panitia dan tidak akan dikembalikan.",
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Setiap team terdiri dari 5 Pemain utama di lapangan dan maksimal 5 pemain cadangan per team.", 
              "2. Untuk peserta dari kampus region Salemba, Kalimalang, Karawaci dan Cengkareng diperbolehkan untuk membuat team dari angkatan 2021 - 2024.", 
              "3. Untuk peserta dari kampus region Depok, hanya diperbolehkan membuat team dari 1 angkatan yang sama dengan ketentuan maksimal dari 5 kelas yang berbeda.", 
              "4. Pemain yang sudah terdaftar dalam satu tim tidak diperbolehkan bermain di tim lain.", 
              "5. Setiap pemain harus menggunakan pakaian yang sama dan warna pakaian kiper harus berbeda dengan pemain lainnya.",
              "6. Memakai pengaman kaki (deker) yang terbuat dari bahan layak (karet, plastik, atau bahan sejenisnya).",
              "7. Semua pemain tidak diperbolehkan menggunakan aksesoris seperti gelang, cincin, jam, dan sebagainya.",
              "8. Jika suatu tim tidak hadir pada jadwal yang telah ditetapkan, pertandingan ditunda selama 5 menit.",
              "9. Jika setelah penundaan tim masih tidak hadir, tim tersebut dinyatakan kalah Walk Out (WO).",
              "10. Sistem pertandingan menggunakan sistem babak grup.",
              "11. Jika terjadi extra time, berlaku golden goal (tim pertama yang mencetak gol menang).",
              "12. Setiap tim diperbolehkan meminta 1 time out per babak dengan durasi 60 detik.",
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