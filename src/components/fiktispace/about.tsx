'use client';

import { useEffect, useState } from 'react';
import { Lato } from "@/styles/font";

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
  }, []);

  if (!isClient) return null;
  return (
    <div className="pt-4 ">
      <div className="flex items-center justify-center">
        <div className="py-5 md:py-12 px-6 md:px-14">
          <div>
            <p className={`${Lato.className} text-center text-white text-medium font-medium md:text-xl`}>
            FIKTI SPACE 4.0 adalah Program Kerja Unggulan  BEM FIKTI UG yang diselenggarakan oleh Departemen Olahraga dan Seni Budaya (ORSB),  sebagai wahana eksplorasi kreativitas di bidang seni dan olahraga bagi mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi, Universitas Gunadarma.
            <br />
            <br />
            Tahun ini, FIKTI SPACE 4.0 hadir dengan semangat kosmis—mengajakmu untuk meluncur dari zona nyaman, menjelajahi galaksi kreativitas, berkompetisi di orbit penuh tantangan, dan bersinar seterang bintang di langit FIKTI.
            <br/>
            <br/>
            Bersiaplah menembus atmosfer 
            keterbatasan, dan jadikan perjalananmu di FIKTI SPACE 4.0 sebagai misi luar biasa yang dipenuhi warna, semangat, dan inspirasi tanpa gravitasi.
            <br/>
            <br/>
            Fuel the passion, embrace the challenge!
            </p>
          </div>
          {/* <div className='mt-3'>
            <blockquote 
              className="instagram-media" 
              data-instgrm-permalink="https://www.instagram.com/reel/DJB4r8rym82/" 
              data-instgrm-version="14">
            </blockquote>
          </div> */}
        </div>
      </div>
    </div>
  );
}
