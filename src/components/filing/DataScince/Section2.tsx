"use client";
import React, { useState } from "react";
import Image from "next/image";
import { circleAmolens } from "@/styles/font";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// photo
import check from "@/../public/filing/mdi_check-bold.png";
import Date from "@/../public/filing/date.png";
import OS from "@/../public/filing/Sistem Operasi.png";
import Processor from "@/../public/filing/Processor.png";
import RAM from "@/../public/filing/RAM.png";

// text silabus
type SyllabusModule = {
  title: string;
  description: string;
  points: string[];
};
const syllabus: Record<string, SyllabusModule> = {
  "Data Wrangling & Cleaning": {
    title: "Modul 01 : Data Wrangling dan Data Cleaning",
    description:
      "Pada modul ini, kamu akan belajar tentang pentingnya data wrangling dan pembersihan data dalam proses analisis data. Materi yang akan dipelajari di modul ini mencakup:",
    points: [
      "Pengenalan Data Wrangling & Cleaning",
      "Menangani Missing Values",
      "Menangani Outliers",
      "Data Transformation & Standardization",
      "Sesi Coding Menggunakan Dataset",
    ],
  },
  "Feature Engineering & Selection": {
    title: "Modul 02 : Teknik Feature Engineering dan Selection",
    description:
      "Di modul ini, kamu akan mempelajari teknik-teknik penting dalam feature engineering dan seleksi untuk meningkatkan kualitas model machine learning. Materi yang akan dipelajari di modul ini mencakup:",
    points: [
      "Feature Engineering",
      "Feature Selection",
      "Data Splitting",
      "Menerapkan Feature Engineering dan Feature Selection",
    ],
  },
  "Machine Learning": {
    title: "Modul 03 : Dasar-Dasar Machine Learning",
    description:
      "Modul ini akan memperkenalkan kamu pada konsep dasar machine learning dan berbagai algoritma yang digunakan dalam analisis data. Materi yang akan dipelajari di modul ini mencakup:",
    points: [
      "Konsep Dasar Machine Learning",
      "Algoritma Supervised dan Unsupervised Learning",
      "Membangun Model Sederhana",
    ],
  },
  "Automation": {
    title: "Modul 04 : Automasi dalam Data Science",
    description:
      "Pada modul ini, kamu akan belajar tentang pentingnya automasi dalam proses data science, termasuk automasi data wrangling dan model training. Materi yang akan dipelajari di modul ini mencakup:",
    points: [
      "Automasi dalam Data Science",
      "Automasi Proses Data Wrangling & Cleaning",
      "Automasi Model Training & Deployment (MLOps)",
      "Studi Kasus",
    ],
  },
};

type TabKeys = keyof typeof syllabus;

const Section2: React.FC = () => {
  const tabs = Object.keys(syllabus);
  const [activeTab, setActiveTab] = useState("Data Wrangling & Cleaning"); 
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
              <h1 className="font-semibold text-black">
                Jadi Ahli Data dengan Bootcamp Data Science FILING!
              </h1>
              <h1 className="font-normal">
                Data adalah kekuatan di era digital! Dengan mengikuti Bootcamp Data Science FILING, kamu akan dibekali keterampilan untuk mengolah, menganalisis, dan menginterpretasikan data guna menghasilkan wawasan yang berharga.
              </h1>
              <h1 className="font-normal">
                Jangan lewatkan kesempatan untuk membangun karier cemerlang di dunia data. Daftar sekarang dan jadilah Data Scientist yang siap menghadapi tantangan industri!
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
                  Menguasai Teknik Data Wrangling & Cleaning
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Memahami Teknik Persiapan Data untuk Machine Learning
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Mengembangkan Keterampilan Machine Learning
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image src={check} alt="" className="w-8 h-8" />
                <p>
                  Belajar dengan Tools Profesional seperti Python, Jupyter Notebook, Visual Studio Code, MySQL, dan Google Colab
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
                      <li>Windows (7/8/10/11)</li>
                      <li>macOS</li>
                      <li>Linux (Ubuntu, Fedora, Debian, atau distro lainnya)</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col mt-14 items-center w-full md:w-1/4">
                  <div>
                    <Image src={Processor} alt="" className="h-32 w-32"></Image>
                  </div>
                  <div className="text-lg font-semibold font-serif text-white mt-4">Processor</div>
                  <div className="text-white font-serif text-base mt-2 text-center">
                    Dual Core (Intel i3 atau setara)
                  </div>
                </div>
                <div className="flex flex-col mt-14 items-center w-full md:w-1/4">
                  <div>
                    <Image src={RAM} alt="" className="h-32 w-32"></Image>
                  </div>
                  <div className="text-lg font-semibold font-serif text-white mt-4">RAM</div>
                  <div className="text-white font-serif text-base mt-2 text-center">
                    4GB (Minimum)
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
                              <td>: Sabtu, 26 April 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 08.30 - 12.30 WIB</td>
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
                              <td>: Sabtu, 03 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 08.30 - 12.00 WIB</td>
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
                              <td>: Sabtu, 10 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 08.30 - 12.00 WIB</td>
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
                              <td>: Sabtu, 17 Mei 2025</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Waktu</td>
                              <td>: 08.30 - 12.00 WIB</td>
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
              <h2 className="text-xl font-bold mb-2">{activeModule.title}</h2>
              <p className="text-gray-700 mb-2">{activeModule.description}</p>
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
                <p className="text-gray-700 mb-2">{activeModule.description}</p>
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
            <p className={`${circleAmolens.className} text-black text-2xl md:text-4xl font-medium`}>
              KONTAK KAMI
            </p>
            <p className="text-black text-xl py-3 font-serif font-medium">
              Punya pertanyaan lain? jangan ragu untuk {" "}
              <span>
                <a href="https://api.whatsapp.com/send/?phone=6285156854807&text=Halo+kak+Rasyid%2C+saya+ingin+bertanya+mengenai+bootcamp+FIKTI+Learning&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-black text-xl underline hover:text-purpleText">
                  {" "}
                  bertanya kepada kami.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
