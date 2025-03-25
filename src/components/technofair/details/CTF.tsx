import { Montserrat } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";


export default function CaptureTheFlag() {
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/dokum4.jpg)] bg-cover bg-center brightness-75 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          {/* Gradient Text */}
          <h1 className={`${Montserrat.className} text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Capture The Flag
          </h1>
        </div>
      </div>


      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg italic leading-[150%] text-center">Capture The Flag Competition of<br />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="" className="text-sm text-black font-medium bg-[#FE8A16] py-2 w-32 rounded-full">
          Registration
          </Link>
          <Link href="" className="text-sm text-black font-medium border-[#FE8A16] border-3 py-2 w-32 rounded-full">
          Rulebook
          </Link>
        </div>
      </div>


      <div className="mt-20">
        <h1 className={`${Montserrat.className} text-center text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          COMPETITION TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinetest.png" width={400} height={800} alt="timeline"  className="mx-auto mt-10"/>
      </div>

      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE COMPETITION
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5">Kompetisi ini memiliki mekanisme dimana sebuah tim diminta untuk mengambil sebuah file atau string yang sudah disembunyikan sistem, serta mendeteksi lalu mengeksploitasi kelemahan untuk mendapatkan dan mengumpulkan flag sebanyak-banyaknya.</p>
      </div>


      <div></div>
    </div>
  )
}