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
              "1. Jumlah pemain utama di lapangan sebanyak 5 orang, dan 5 pemain cadangan per tim.", 
              // "2. Untuk tim, dibuat aturan bebas dalam pembentukan tim, namun seangkatan yang sama maksimal 3 kelas campuran dalam satu tim.", 
              "3. Pemain yang terdaftar di satu tim tidak diperbolehkan bermain di tim lain.", 
              "4. Pertandingan berlangsung selama 4 kuarter, masing-masing berdurasi 10 menit.",
              "5. Sistem pertandingan menggunakan format sistem gugur.",
              "6. Bola dianggap keluar jika menyentuh garis lapangan atau melewati batas lapangan.",
              "7. Pemain harus menunggu di meja pencatat skor dan mendapatkan izin wasit sebelum memasuki lapangan.",
              "8. Setiap tim harus memakai jersey seragam dengan warna yang kontras dengan lawan.",
              "9. Hanya diperbolehkan memakai aksesoris tertentu seperti headband tanpa ikatan, knee sleeves, elbow sleeves, dan mouthguard.",
              "10. Dilarang memakai perhiasan, topi, kuku panjang, atau aksesori dengan bagian keras/tajam.",             
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