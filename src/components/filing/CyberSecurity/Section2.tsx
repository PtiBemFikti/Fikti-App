"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { circleAmolens } from "@/styles/font";
import { FaArrowLeft, FaArrowRight, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';

// photo
import check from "@/../public/filing/mdi_check-bold.png";
import Date from "@/../public/filing/date.png";
import OS from "@/../public/filing/Sistem Operasi.png";
import Processor from "@/../public/filing/Processor.png";
import RAM from "@/../public/filing/RAM.png";

// text silabus
type SyllabusModule = {
  title: string;
  points: string[];
};

const syllabus: Record<string, SyllabusModule> = {
  "Ethical Hacking Introduction": {
    title: "Modul 01 : Ethical Hacking Introduction",
    points: [
      "Pengenalan Ethical Hacking dan Keamanan Informasi",
      "Terminology Hacking",
      "The Elements of Information Security",
      "Type of Attack",
      "Sesi Diskusi dan Studi Kasus",
    ],
  },
  "Security Fundamentals": {
    title: "Modul 02 : Fundamental Security System",
    points: [
      "Pengenalan Linux sebagai alat utama dalam keamanan siber.",
      "Mengelola pengguna, grup, dan izin akses untuk keamanan.",
      "CC",
      "Network & System Security",
      "Interactive Hands-on",
    ],
  },
  "Kali Linux Introduction": {
    title: "Modul 03 : Kali Linux Introduction",
    points: [
      "Pengenalan Kali Linux & Tools",
      "Basic Kali Linux Commands & Configuration",
      "Pentesting Dasar dengan Kali Linux",
      "Interactive Hands-on",
    ],
  },
  "Management and Security": {
    title: "Modul 04 : Management and Security",
    points: [
      "Pengelolaan Layanan dan Server di Kali Linux",
      "Pemantauan dan Analisis Sistem di Kali Linux",
      "Pengelolaan Storage dan Backup untuk Keamanan",
      "Manajemen Pengguna dan Keamanan Server",
      "Simulasi Serangan dan Penanggulangan di Kali Linux",
    ],
  },
};

type TabKeys = keyof typeof syllabus;

const Section2: React.FC = () => {
  const tabs = Object.keys(syllabus);
  const [activeTab, setActiveTab] = useState("Ethical Hacking Introduction"); 
  const syllabusKeys = Object.keys(syllabus);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeModule = syllabus[activeTab];

  const nextModule = () => {
    setActiveIndex((prev) => (prev + 1) % syllabusKeys.length);
    setActiveTab(syllabusKeys[(activeIndex + 1) % syllabusKeys.length] as TabKeys);
  };
  
  const prevModule = () => {
    setActiveIndex((prev) => (prev - 1 + syllabusKeys.length) % syllabusKeys.length);
    setActiveTab(syllabusKeys[(activeIndex - 1 + syllabusKeys.length) % syllabusKeys.length] as TabKeys);
  };


  return (
    <div className="bg-white p-10 flex gap-16 md:px-[50px] -mt-20">
      <div>
        <div className="">

          {/* about */}
          <div id="about" className="text-[#545350] space-y-10 pt-[4.5rem]">
            <h1 className="font-bold text-2xl md:text-4xl text-black">Tentang Bootcamp</h1>
            <div className="text-[18px] md:text-[20px] space-y-5">
              {/* <h1 className="font-semibold text-black">
                Jadi Ahli Data dengan Bootcamp Data Science FILING!
              </h1> */}
              <h1 className="font-normal">
                FILING membuka kesempatan bagi kamu yang ingin menjadi praktisi keamanan siber melalui bootcamp intensif dengan 4x live class yang akan dibimbing dari pemula hingga mahir. Program ini akan mempersiapkan kalian untuk berkarir sebagai Spesialis Keamanan Siber atau Security Pentester. Selain itu kalian juga akan dibekali strategi praktis dan tips yang dapat langsung diterapkan di dunia kerja.
              </h1>
              <h1 className="font-normal">
                Wujudkan karir impian Anda di bidang Cyber Security sekarang juga!
              </h1>
              <div>
                <h1 className="font-semibold text-black">
                  Biaya Pendaftaran:
                </h1>
                <h1 className="font-normal text-black">
                  <b>Rp 30.000/peserta</b> atau <b>Rp 75.000/3 peserta</b>
                </h1>
              </div>
            </div>
          </div>
          
          {/* benefit */}
          <div id="benefit" className="text-[#545350] space-y-10 pt-[4.5rem]">
          <h1 className="font-bold text-2xl md:text-4xl text-black">Benefit Bootcamp</h1>
            <div className="text-[18px] md:text-[20px] space-y-3">
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Konsep Fundamental Keamanan Informasi.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Penguasaan Linux untuk Keamanan Siber.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Penggunaan Kali Linux untuk Pentesting.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Pemantauan Sistem dan Simulasi Serangan.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Virtualization Software dengan VMWare Workstation, Oracle VirtualBox, atau Hyper-V
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Essential Cybersecurity Tools  dengan Nmap, Wireshark, Metasploit, Burp Suite, John The Ripper / Hashcat, tcpdump, dan Fail2Ban
                </p>
              </div>
            </div>
            <div className="mt-8 bg-[linear-gradient(113.76deg,#3F3381_31.41%,#B07FD6_65.27%,#91D2F4_96.84%)] px-10 md:px-20 py-10 rounded-xl">
              <h1 className="text-center text-white font-bold text-xl md:text-2xl"> Spesifikasi Minimum Device Pembelajaran</h1>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col mt-14 items-center w-full md:w-1/4">
                  <div>
                    <Image src={OS} alt="" className="w-32 h-32"></Image>
                  </div>
                  <div className="text-lg font-semibold font-serif text-white mt-4">Sistem Operasi</div>
                  <div className="text-white font-serif text-base mt-2">
                    <ul className="list-disc px-auto">
                      <li>Windows 10/11 (64-bit)</li>
                      <li>macOS (Intel/M1/M2 dengan virtualisasi yang kompatibel)</li>
                      <li>Linux (Ubuntu, Debian, Fedora, atau distro lainnya yang mendukung virtualisasi</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col mt-14 items-center w-full md:w-1/4">
                  <div>
                    <Image src={Processor} alt="" className="h-32 w-32"></Image>
                  </div>
                  <div className="text-lg font-semibold font-serif text-white mt-4">Processor</div>
                  <div className="text-white font-serif text-base mt-2 text-center">
                    Dual-core (Intel i5 / AMD Ryzen 5 atau setara)
                  </div>
                </div>
                <div className="flex flex-col mt-14 items-center w-full md:w-1/4">
                  <div>
                    <Image src={RAM} alt="" className="h-32 w-32"></Image>
                  </div>
                  <div className="text-lg font-semibold font-serif text-white mt-4">RAM</div>
                  <div className="text-white font-serif text-base mt-2 text-center">
                  8GB (Minimum)<br/>
                  16GB (Rekomendasi
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* jadwal */}
          <div  id="detail" className=" text-[#545350] space-y-10 pt-[4.5rem]">
            <h1 className="font-bold text-2xl md:text-4xl text-black">
              Jadwal Bootcamp
            </h1>
            <div className="flex gap-2 justify-between">
              <div className=" space-y-4">
                <h1 className="font-semibold md:text-xl">
                  Pelaksanaan Kelas :
                </h1>
                <div className="flex flex-col md:flex-row gap-14">
                  <div className="space-y-16">
                    
                    <div className="flex gap-2 md:gap-7 items-center">
                      <h1 className="text-[30px] md:text-[48px] text-[#969695]">1.</h1>
                      <div>
                        <table className="text-[16px] md:text-[20px]">
                          <tbody>
                            <tr>
                              <td className="font-semibold">Hari, Tanggal</td>
                              <td>: Minggu, 27 April 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 13.00 - 16.30 WIB</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Tempat</td>
                              <td>: <i>Zoom Cloud Meeting</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex gap-2 md:gap-7 items-center">
                      <h1 className="text-[30px] md:text-[48px] text-[#969695]">
                        2.
                      </h1>
                      <div>
                        <table className="text-[16px] md:text-[20px]">
                          <tbody>
                            <tr>
                              <td className="font-semibold">Hari, Tanggal</td>
                              <td>: Minggu, 04 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 13.00 - 16.30 WIB</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Tempat</td>
                              <td>
                                : <i>Zoom Cloud Meeting</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>

                  <div className="space-y-16">

                    <div className="flex gap-2 md:gap-7 items-center">
                      <h1 className="text-[30px] md:text-[48px] text-[#969695]">
                        3.
                      </h1>
                      <div>
                        <table className="text-[16px] md:text-[20px]">
                          <tbody>
                            <tr>
                              <td className="font-semibold">Hari, Tanggal</td>
                              <td>: Minggu, 11 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 13.00 - 16.30 WIB</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Tempat</td>
                              <td>
                                : <i>Zoom Cloud Meeting</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="flex gap-1.5 md:gap-7 items-center">
                      <h1 className="text-[30px] md:text-[48px] text-[#969695]">
                        4.
                      </h1>
                      <div>
                        <table className="text-[16px] md:text-[20px]">
                          <tbody>
                            <tr>
                              <td className="font-semibold">Hari, Tanggal</td>
                              <td>: Minggu, 18 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 13.00 - 16.30 WIB</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Tempat</td>
                              <td>
                                : <i>Zoom Cloud Meeting</i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Silabus */}
          <div id="silabus" className="hidden md:block text-[#545350] space-y-10 pt-[4.5rem]">
            <h1 className="font-bold text-2xl md:text-4xl text-black">
              Silabus Bootcamp
            </h1>

            {/* Tabs */}
            <div className="flex mb-6 space-x-10">
              {Object.keys(syllabus).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as TabKeys)}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-[#3F3381] font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-2">{activeModule?.title}</h2>
              <ul className="list-disc pl-5 text-gray-700">
                {activeModule.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* silabus mobile */}
          <div id="silabus" className="block md:hidden text-[#545350] space-y-10 pt-[4.5rem]">
            <h1 className="font-bold text-2xl md:text-4xl text-black">
              Silabus Bootcamp
            </h1>
            <div className="block md:hidden">

              {/* tabs */}
              <div className="flex justify-between items-center mb-4 gap-2">
                <button onClick={prevModule} className="text-lg text-gray-700">
                  <FaArrowLeft />
                </button>
                <h3 className="text-base font-medium text-center">
                  {tabs[activeIndex]}
                </h3>
                <button onClick={nextModule} className="text-lg text-gray-700">
                  <FaArrowRight />
                </button>
              </div>

              {/* content */}
              <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-lg font-bold mb-2">{activeModule.title}</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {activeModule.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="text-center mt-20">
            <p className={`${circleAmolens.className} text-black text-4xl font-medium`}>
              KONTAK KAMI
            </p>
            <p className="text-black text-xl py-3 font-serif font-medium">
              Punya pertanyaan lain? jangan ragu untuk bertanya kepada kami.
              {/* <span>
                <a href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rafa
                </a>
              </span>
              {" "}Atau{" "}
              <span>
                <a href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  Kak Rizky.
                </a>
              </span> */}
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-3 md:gap-5 mt-2 mb-5">
              <Link href="https://wa.me/628174932917?text=Halo+kak+Rafa%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-white bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rafa
                </button>
              </Link>

              <Link href="https://wa.me/6285727635590?text=Halo+kak+Rizky%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-6 py-3 text-[18px] rounded-2xl font-serif font-thin tracking-wide text-ehite bg-gradient-to-r from-[#3F3381] to-[#B07FD6] cursor-pointer group-hover:scale-110 transition-all duration-300 flex flex-row gap-2">
                  <FaWhatsapp size={25}/>
                  CP Rizky
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
