"use client";
import { Montserrat } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const eventData = [
  {
    judul: "Benefit Workshop",
    details: (
       <div className="space-y-2 text-black text-xl">
      <div className="flex items-start gap-2">
        <Image src="/technofair/ceklis.png"  alt="Checklist" width={20} height={20} />
        <p>Memahami konsep dan prinsip dasar Artificial Intelligence dan Deep Learning.</p>
      </div>
      <div className="flex items-start gap-2">
        <Image src="/technofair/ceklis.png"  alt="Checklist" width={20} height={20} />
        <p>Mengenal peran dan keterampilan inti yang dibutuhkan untuk menjadi seorang AI Specialist.</p>
      </div>
      <div className="flex items-start gap-2">
        <Image src="/technofair/ceklis.png"  alt="Checklist" width={20} height={20} />
        <p>Mendalami proses pengembangan solusi AI.</p>
      </div>
      <div className="flex items-start gap-2">
        <Image src="/technofair/ceklis.png"  alt="Checklist" width={20} height={20} />
        <p>Menambah portofolio praktis yang relevan dengan kebutuhan industri saat ini.</p>
      </div>
    </div>
    ),
  },
  {
    judul: "Detail Materi Workshop",
    details: (
      <div className="space-y-4 text-black">
        <h2 className="text-xl font-semibold">Materi Workshop – AI in Action: Transforming Industries with Deep Learning</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Pengantar konsep dasar Artificial Intelligence dan penerapannya dalam industri.</li>
          <li>Pengenalan keterampilan teknis dan non-teknis yang dibutuhkan untuk menjadi AI Specialist.</li>
          <li>Proses pengembangan sistem AI: data preparation, model training, dan evaluasi.</li>
          <li>Implementasi Deep Learning dalam studi kasus nyata: dari prediksi hingga otomasi.</li>
          <li>Tips membangun portofolio dan langkah awal menuju karir profesional di dunia AI.</li>
        </ul>
    </div>
    ),
  },
]

export default function ArtificialIntelligence() {
  const [index, setIndex] = useState(0);
  
  const nextItem = () => setIndex((prev) => (prev + 1) % eventData.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
  
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/bg-workshop2.jpg)] bg-cover bg-center brightness-50 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base md:text-3xl font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          
          <h1 className={`${Montserrat.className} text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Artificial Intelligence
          </h1>
        </div>
      </div>
 

      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg md:text-3xl italic leading-[150%] text-center">Artificial Intelligence Workshop of <br className="md:hidden" />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="" className="text-sm md:text-xl text-black font-medium bg-[#FE8A16] py-2 w-32 md:w-44 rounded-full hover:bg-[#100F21] hover:text-white transition-colors duration-300">
          Registration
          </Link>
        </div>
      </div>


        {/* SECTION TIMELINE */} 
     
      <div className=" mt-20">
        <h1 className={`${Montserrat.className} text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          WAKTU PELAKSANAAN
        </h1>
        <div className="space-y-6 py-6 px-14  mt-5 bg-[#FFDDBA] w-fit mx-auto shadow-lg">
            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span className="text-amber-600 font-medium text-xl">
                Sabtu, 5 Juli 2025
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span className="text-amber-600 font-medium text-xl">
                09.00 – 12.40 WIB
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mt-0.5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z"/>
              </svg>
              <span className="text-amber-600 font-medium text-xl leading-snug">
                Kampus E, Universitas Gunadarma
              </span>
            </div>
          </div>
      </div>

        {/* SECTION ABOUT */} 
      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE WORKSHOP
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5 md:text-xl md:mx-52 text-justify">Workshop “AI in Action: Transforming Industries with Deep Learning” merupakan bagian dari TechnoFair 12.0 yang dirancang untuk membekali peserta dengan pemahaman dan keterampilan praktis dalam pengembangan AI, khususnya deep learning. Menggabungkan teori dasar dan praktik langsung melalui studi kasus industri, workshop ini menunjukkan bagaimana AI mampu menyelesaikan masalah kompleks, meningkatkan efisiensi, dan menciptakan nilai bisnis. Kegiatan ini menjadi langkah awal yang kuat bagi peserta yang ingin meniti karier sebagai AI Specialist.
</p>
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