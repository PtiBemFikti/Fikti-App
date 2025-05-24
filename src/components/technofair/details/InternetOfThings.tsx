"use client";
import { Montserrat } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const eventData = [
  {
    judul: "Benefit Seminar",
    details: (
      <ol className="text-black text-xl">
        <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Memahami konsep dasar Internet of Things (IoT) dan Artificial Intelligence (AI) dalam konteks bisnis modern.</span>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Mendapat wawasan tentang integrasi IoT dan AI untuk analisis perilaku pelanggan dan pengambilan keputusan berbasis data.</span>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Belajar dari para ahli mengenai studi kasus nyata dan strategi implementasi IoT dan AI dalam dunia usaha.</span>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Mengembangkan pola pikir kritis dan inovatif dalam menghadapi tantangan transformasi digital.</span>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Menambah insight dan bekal keterampilan dalam mengaplikasikan teknologi IoT-AI di dunia industri.</span>
              </li>
              <li className="flex items-start gap-2 mt-2">
                <Image src="/technofair/ceklis.png" alt="checkbox" width={20} height={20} className="mt-1" />
                <span>Memperluas jaringan melalui diskusi dan interaksi langsung dengan praktisi dan profesional teknologi.</span>
        </li>
      </ol>
    ),
  },
  {
    judul: "Detail Materi Seminar",
    details: (
      <div className="text-black">
         <h2 className="text-xl font-bold">
        Materi Seminar 1 – Enhancing Customer Engagement with AI-Powered IoT Solutions
      </h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          Menjelaskan konsep dasar integrasi AI dan IoT dalam meningkatkan interaksi dan keterlibatan pelanggan.
        </li>
        <li>
          Menganalisis bagaimana solusi berbasis AI dalam IoT dapat memahami pola perilaku pelanggan secara real-time.
        </li>
        <li>
          Menjelaskan penerapan personalisasi layanan dan pengalaman pelanggan melalui teknologi AI-powered IoT.
        </li>
        <li>
          Mengupas studi kasus bisnis yang sukses menerapkan AI dan IoT untuk menciptakan hubungan pelanggan yang lebih kuat.
        </li>
        <li>
          Mengidentifikasi tantangan umum serta strategi dalam mengoptimalkan AI-IoT untuk meningkatkan customer engagement.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8">
        Materi Seminar 2 – Overcoming Challenges in IoT and AI Business Implementation
      </h2>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>
          Mengidentifikasi hambatan utama yang dihadapi bisnis dalam mengimplementasikan teknologi IoT dan AI.
        </li>
        <li>
          Membahas isu-isu keamanan dan privasi yang muncul dalam integrasi sistem AI-IoT.
        </li>
        <li>
          Menjelaskan tantangan infrastruktur, biaya, dan skalabilitas dalam penerapan AI dan IoT di dunia usaha.
        </li>
        <li>
          Menyoroti pengaruh regulasi dan kebijakan terhadap adopsi teknologi IoT dan AI di sektor industri.
        </li>
        <li>
          Menawarkan strategi praktis dan solusi inovatif untuk mengatasi hambatan dalam transformasi digital berbasis AI-IoT.
        </li>
      </ul>
      </div>
    ),
  },
]

export default function DataScience() {
  const [index, setIndex] = useState(0);
  
  const nextItem = () => setIndex((prev) => (prev + 1) % eventData.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
  
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/dokum4.jpg)] bg-cover bg-center brightness-75 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base md:text-3xl font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          
          <h1 className={`${Montserrat.className} text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Internet of Things
          </h1>
        </div>
      </div>
 

      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg md:text-3xl italic leading-[150%] text-center">Internet of Things Seminar of <br className="md:hidden" />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="" className="text-sm md:text-xl text-black font-medium bg-[#FE8A16] py-2 w-32 md:w-44 rounded-full">
          Registration
          </Link>
          <Link href="" className="text-sm md:text-xl text-black font-medium border-[#FE8A16] border-3 py-2 w-32 md:w-44 rounded-full">
          Rulebook
          </Link>
        </div>
      </div>


        {/* SECTION TIMELINE */} 
      <div className="mt-20 md:hidden">
        <h1 className={`${Montserrat.className} text-center text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          SEMINAR TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinetest.png" width={400} height={800} alt="timeline"  className="mx-auto mt-10"/>
      </div>
      <div className="hidden md:block mt-20">
        <h1 className={`${Montserrat.className} text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          SEMINAR TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinetest2.png" width={1450} height={340} alt="timeline"  className="mx-2 mt-10"/>
      </div>

        {/* SECTION ABOUT */} 
      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE SEMINAR
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5 md:text-xl md:mx-52 md:text-center">Seminar TechnoFair 12.0 dengan tema “Innovating IoT with AI: A New Era of Customer-Centric Business Growth” merupakan wadah edukatif yang membahas integrasi Internet of Things (IoT) dan Artificial Intelligence (AI) dalam mendorong pertumbuhan bisnis berorientasi pelanggan. Menghadirkan pakar industri, akademisi, dan praktisi, seminar ini mengulas studi kasus, strategi, serta tantangan nyata penerapan IoT dan AI di berbagai sektor, sekaligus memberikan wawasan tentang pemanfaatan teknologi untuk meningkatkan efisiensi, pengalaman pelanggan, dan daya saing di era digital.</p>
      </div>


        {/* SECTION DETAILS */} 
      <div className="mt-20 pb-10">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          DETAILS
        </h1>
        
        <div className="flex gap-5 justify-center items-center mt-5">
        <button 
          onClick={prevItem} 
          className="hover:scale-110 transition-transform duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            className="fill-black hover:fill-[#FE8A16] transition-colors duration-300"
          >
            <path d="m4.431 12.822l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645"/>
          </svg>
        </button>
          
          <h1 className={`${Montserrat.className} text-sm font-bold italic tracking-tight text-black md:text-lg`}>{eventData[index].judul}</h1>
          
          <button onClick={nextItem} className="hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-black hover:fill-[#FE8A16] transition-colors duration-300"><path d="M5.536 21.886a1 1 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886"/></svg>
          </button>
        </div>

        {/* penjelasan tiap event */} 
        <div className="bg-white py-3 px-4 mx-5 md:mx-20 mt-4 rounded-xl text sm md:text-lg">
          {eventData[index].details}
        </div>
      </div>


    </div>
  )
}