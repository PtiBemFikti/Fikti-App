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
              "1. Tema poster: The Future Is Now.", 
              "2. Peserta harus terdaftar secara resmi sebelum batas waktu pendaftaran yang telah ditentukan.", 
              "3. Poster harus orisinal dan belum pernah dipublikasikan atau diikutsertakan dalam lomba lain.", 
              "4. Poster tidak mengandung unsur SARA, pornografi, kekerasan, sadisme, atau hal-hal yang tidak sesuai dengan norma kesopanan.",
              "5. Peserta dilarang mengirim karya poster yang mengandung unsur plagiarisme (menjiplak/menggunakan karya orang lain, termasuk dari internet).",
              "6. Peserta dilarang mengirim karya poster yang mengandung unsur promosi merek/produk tanpa izin.",
              "7. Peserta dilarang menggunakan poster yang seluruhnya dibuat dengan AI (Artificial Intelligence) tanpa proses kreatif yang jelas.",
              "8. Format file: JPG atau PNG dengan resolusi minimal 1080x1350 px dan kapasitas maksimal 2 MB.",
              "9. Poster berukuran A4 (portrait).",
              "10. Desain dapat dibuat menggunakan software seperti Photoshop, Illustrator, Canva, dll.",
              "11. Tidak diperbolehkan menggunakan template yang sudah jadi. Karya harus merupakan hasil karya sendiri. ",
              "12. Keputusan dewan juri bersifat final dan tidak dapat diganggu gugat. ",
              "13. Karya akan didiskualifikasi jika terbukti melanggar larangan di atas, bukan hasil karya sendiri, atau dikirim melewati batas waktu tanpa pemberitahuan resmi.",
              "14. Hak cipta tetap milik peserta, namun panitia berhak menggunakan karya untuk keperluan publikasi lomba dengan mencantumkan kredit nama pembuat. ",              
            ]
        },
        "SYARAT DAN KETENTUAN PESERTA": {
            points: [
              "1. Peserta adalah mahasiswa aktif dari semua fakultas.", 
              "2. Setiap peserta hanya diperbolehkan mengirimkan satu karya.", 
              "3. Poster harus dikirim melalui form yang telah disediakan sebelum batas waktu deadline.", 
              "4. Peserta wajib menyertakan deskripsi singkat mengenai konsep atau ide di balik poster.",
              "5. Dengan mendaftar, peserta dianggap telah membaca dan menyetujui semua peraturan lomba.",
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