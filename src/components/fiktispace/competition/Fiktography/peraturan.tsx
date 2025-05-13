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
              "1. Tema foto:Celebrating Freedom of Expression.", 
              "2. Peserta harus terdaftar secara resmi sebelum batas waktu pendaftaran yang telah ditentukan.", 
              "3. Foto harus orisinal dan belum pernah dipublikasikan atau diikutsertakan dalam lomba lain.", 
              "4. Peserta wajib mengirimkan 3 foto yang mewakili masing-masing kategori: Seni, Sport, Esport.",
              "5. Setiap foto harus dikirim dalam dua versi: Before (mentah) dan After (final edit).",
              "6. Editing diperbolehkan dalam batas wajar (color grading, cropping, dll.), tetapi tidak boleh mengubah elemen utama foto.",
              "7. Format file: JPG atau PNG dengan resolusi minimal 1080p.",
              "8. Foto dikirim melalui email atau form yang telah disediakan sebelum deadline.",
              "9. Foto tidak mengandung unsur SARA, pornografi, kekerasan, sadisme, atau hal-hal yang tidak sesuai norma kesopanan.",
              "10. Peserta dilarang mengirim karya yang mengandung unsur plagiarisme (menjiplak/menggunakan karya orang lain, termasuk dari internet).",
              "11.Peserta dilarang mengirim karya yang mengandung unsur promosi merek/produk tanpa izin. ",
              "12. Keputusan juri bersifat mutlak dan tidak dapat diganggu gugat. ",
              "13. Karya akan didiskualifikasi jika melanggar larangan di atas, bukan hasil karya sendiri, atau dikirim melewati batas waktu tanpa pemberitahuan resmi.",
              "14. Hak cipta tetap milik peserta, tetapi panitia berhak menggunakan karya untuk keperluan publikasi lomba dengan tetap mencantumkan kredit nama fotografer. ",              
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Peserta adalah mahasiswa aktif dari semua fakultas.", 
              "2. Mendaftar diri melalui formulir yang telah disediakan.", 
              "3. Foto dikirim melalui formulir yang telah disediakan sebelum batas waktu deadline.", 
              "4. Setiap peserta hanya boleh mengirimkan satu set foto (dengan 3 kategori x 2 versi = total 6 foto).",
              "5. Dengan melakukan pendaftaran, peserta dianggap telah membaca dan menyetujui semua peraturan lomba.",
              "6. Semua karya yang dikirimkan adalah hasil karya pribadi, bukan milik atau atas nama orang lain.",              
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