"use client";
import { Montserrat } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const eventData = [
  {
    judul: "Ketentuan Umum",
    details: (
      <ol className="">
        <li className="text-black mt-4">1. Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi TechnoFair 12.0.</li>
        <li className="text-black mt-4">2. Peserta merupakan mahasiswa/i aktif Universitas Gunadarma, dibuktikan dengan Kartu Tanda Mahasiswa yang diunggah pada form registrasi di website TechnoFair 12.0.</li>
        <li className="text-black mt-4">3. Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
        <li className="text-black mt-4">4. Tim terdiri minimal 1 orang atau maksimal 3 orang dimana setiap anggota tim harus berasal dari perguruan tinggi yang sama dan diperbolehkan dari jurusan/program studi yang  berbeda.</li>
        <li className="text-black mt-4">5. Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.</li>
        <li className="text-black mt-4">6. Peserta bukan merupakan panitia TechnoFair 12.0 dan tidak memiliki keterkaitan dalam proses pembuatan soal Capture The Flag.</li>
        <li className="text-black mt-4">7. Setiap peserta hanya boleh terdaftar pada 1 tim pada cabang kompetisi yang sama.</li>
        <li className="text-black mt-4">8. Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
        <li className="text-black mt-4">9. Peserta tidak boleh diwakilkan ataupun mewakilkan orang lain yang bukan dirinya sendiri.</li>
        <li className="text-black mt-4">10. Para peserta wajib mengupload twibbon di akun instagram masing-masing sesuai dengan ketentuan yang tertera di akun Instagram TechnoFair 12.0 (@technofair).</li>
        <li className="text-black mt-4">11. Peserta yang merupakan pemenang kompetisi TechnoFair 12.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di , Kampus , Universitas Gunadarma.</li>
        <li className="text-black mt-4">12. Panitia TechnoFair 12.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan kompetisi.</li>
        <li className="text-black mt-4">13. Panitia berhak mendiskualifikasi tim yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi TechnoFair 12.0.</li>
        <li className="text-black mt-4">14. Keputusan juri dan panitia TechnoFair 12.0 bersifat mutlak dan tidak dapat diganggu gugat.</li>
        <li className="text-black mt-4">15. Dilarang menahan bendera selama kompetisi berlangsung (flag hoarding).</li>
        <li className="text-black mt-4">16. Panitia berhak bertanya ke peserta jika diperlukan.</li>
      </ol>
    ),
  },
  {
    judul: "Ketentuan Kompetisi",
    details: (
      <ol className="">
        <li className="text-black mt-4">1. Format kompetisi adalah Jeopardy.</li>
        <li className="text-black mt-4">2. Kompetisi akan dilaksanakan di platform CTF.</li>
        <li className="text-black mt-4">3. Kompetisi dilaksanakan selama 6 jam.</li>
        <li className="text-black mt-4">4. Jumlah soal adalah 30 soal.</li>
        <li className="text-black mt-4">5. Scoreboard akan dibekukan 1 jam sebelum waktu kompetisi berakhir.</li>
        <li className="text-black mt-4">6. Setiap peserta wajib mengumpulkan writeups yang berisi penjelasan mengenai langkah-langkah penyelesaian soal dengan jelas dan dikirim selambat-lambatnya 12 jam setelah kompetisi berakhir dengan format sebagai berikut (nama soal, langkah penyelesaian, dan flag), soal akan dibuka sampai batas pengumpulan writeups.</li>
        <li className="text-black mt-4">7. Writeups dikumpulkan melalui link google form dengan subject CTF_TECHNOFAIR 12.0_(nama tim).</li>
        <li className="text-black mt-4">8. Dilarang flag hoarding (Menahan Flag saat kompetisi berlangsung).</li>
        <li className="text-black mt-4">9. Peserta dengan poin terbanyak dan writeups yang valid akan keluar sebagai juara.</li>
        <li className="text-black mt-4">10. Peserta dilarang bekerja sama dengan peserta atau tim lain dalam bentuk apapun.</li>
        <li className="text-black mt-4">11. Peserta dilarang merusak soal, mengubah flag, merusak server dan hal-hal lain yang dapat merugikan peserta lain dan mengganggu jalannya kompetisi.</li>
        <li className="text-black mt-4">12. Peserta dilarang menggunakan automated tools yang membebani server, seperti SQL Map, dir buster, nmap, dll.</li>
        <li className="text-black mt-4">13. Jika peserta melanggar ketentuan kompetisi dan ketahuan oleh panitia, maka peserta akan didiskualifikasi.</li>
        <li className="text-black mt-4">14. Scoring akan dilakukan secara dinamis dengan fungsi scoring yang default dari platform CTF.</li>
      </ol>
    ),
  },
  {
    judul: "Tahapan Kompetisi",
    details: (
      <section className=" mx-auto space-y-12 text-gray-800 leading-relaxed">
      {/* Babak Pemanasan */}
      <div> 
        <h2 className="text-2xl font-bold mb-4">Babak Pemanasan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Format babak pemanasan adalah <span className="font-semibold">Jeopardy</span>.</li>
          <li>Babak pemanasan dilakukan secara <span className="font-semibold">online</span> menggunakan platform <span className="font-semibold">CTFd</span>.</li>
          <li>Durasi babak pemanasan adalah selama <span className="font-semibold">6 jam</span>.</li>
          <li>Jumlah soal: <span className="font-semibold">5 soal</span>.</li>
          <li>Pelaksanaan: <span className="font-semibold">24 Juni 2025</span>.</li>
          <li>Penilaian berdasarkan <span className="font-semibold">peringkat</span> dan <span className="font-semibold">total nilai</span> masing-masing tim.</li>
          <li>Bobot nilai <span className="font-semibold">dinamis</span>, berkurang seiring banyaknya peserta yang menyelesaikan soal.</li>
          <li>Babak pemanasan <span className="font-semibold">tidak wajib</span> diikuti.</li>
        </ul>
      </div>

      {/* Babak Penyisihan */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Babak Penyisihan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Format babak penyisihan adalah <span className="font-semibold">Jeopardy</span>.</li>
          <li>Babak penyisihan dilakukan secara <span className="font-semibold">online</span> menggunakan platform <span className="font-semibold">CTFd</span>.</li>
          <li>Durasi babak penyisihan adalah selama <span className="font-semibold">6 jam</span>.</li>
          <li>Jumlah soal: <span className="font-semibold">minimal 20 soal</span>.</li>
          <li>Pelaksanaan: <span className="font-semibold">26 Juni 2025</span>.</li>
          <li>Penilaian berdasarkan <span className="font-semibold">peringkat</span> dan <span className="font-semibold">total nilai</span> masing-masing tim.</li>
          <li>Bobot nilai <span className="font-semibold">dinamis</span>, berkurang seiring banyaknya peserta yang menyelesaikan soal.</li>
          <li><span className="font-semibold">Scoreboard dibekukan</span> 1 jam sebelum kompetisi berakhir.</li>
          <li>Setiap tim wajib membuat <span className="font-semibold">writeups</span> (nama-tim.pdf) berisi nama soal, langkah penyelesaian, dan flag. Deadline: <span className="font-semibold">maksimal 12 jam</span> setelah kompetisi berakhir.</li>
          <li>Soal tetap dapat diakses setelah kompetisi berakhir.</li>
          <li>5 tim dengan <span className="font-semibold">peringkat teratas</span> dan <span className="font-semibold">writeups valid</span> berhak mengikuti babak final.</li>
          <li>Peserta dilarang bekerjasama dengan tim lain.</li>
          <li>Dilarang merusak soal atau merugikan peserta lain.</li>
          <li>Peserta yang melakukan pelanggaran akan <span className="font-semibold">didiskualifikasi</span>.</li>
          <li>Akun tim (username & password) akan dikirim via email setelah konfirmasi pembayaran.</li>
          <li><span className="font-semibold">Kesalahan</span> dalam writeups dapat menyebabkan soal <span className="font-semibold">tidak dinilai</span>.</li>
        </ul>
      </div>

      {/* Babak Final */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Babak Final</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Babak final dilaksanakan secara <span className="font-semibold">offline</span> di <span className="font-semibold">Auditorium J167, Kampus J1, Universitas Gunadarma</span>.</li>
          <li><span className="font-semibold">Scoreboard dibekukan</span> 1 jam sebelum kompetisi berakhir (pengumpulan flag tetap bisa dilakukan).</li>
          <li>Setiap tim wajib membuat <span className="font-semibold">writeups</span> (nama-tim.pdf) berisi nama soal, langkah penyelesaian, dan flag. Deadline: <span className="font-semibold">maksimal 12 jam</span> setelah kompetisi berakhir.</li>
          <li>Soal tetap dapat diakses setelah kompetisi berakhir.</li>
          <li>Format kompetisi: <span className="font-semibold">Jeopardy</span>.</li>
          <li>Pelaksanaan: <span className="font-semibold">12 Juli 2025</span>.</li>
          <li>Penilaian berdasarkan <span className="font-semibold">peringkat</span> dan <span className="font-semibold">total nilai</span> masing-masing tim.</li>
          <li>Bobot nilai <span className="font-semibold">dinamis</span>, berkurang seiring banyaknya peserta yang menyelesaikan soal.</li>
          <li>Mekanisme pengerjaan: submisi flag melalui submission form.</li>
          <li>Peserta dilarang:
            <ul className="list-lower-alpha ml-6 mt-1 space-y-1">
              <li>Bekerjasama dengan pihak luar tim.</li>
              <li>Mengganggu peserta lain atau panitia.</li>
            </ul>
          </li>
          <li>Tindakan kecurangan akan dikenakan <span className="font-semibold">diskualifikasi</span> atau <span className="font-semibold">pengurangan poin</span>.</li>
          <li>Informasi lanjutan akan <span className="font-semibold">diberikan kemudian</span>.</li>
          <li><span className="font-semibold">Kesalahan</span> dalam writeups dapat menyebabkan soal <span className="font-semibold">tidak dinilai</span>.</li>
        </ul>
      </div>
    </section>

    ),
  },
]

export default function CaptureTheFlag() {
  const [index, setIndex] = useState(0);
  
  const nextItem = () => setIndex((prev) => (prev + 1) % eventData.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
  
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/bg-kompe2.jpg)] bg-cover bg-center brightness-50 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base md:text-3xl font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          
          <h1 className={`${Montserrat.className} text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Capture The Flag
          </h1>
        </div>
      </div>
 

      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg md:text-3xl italic leading-[150%] text-center">Capture The Flag Competition of <br className="md:hidden" />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="https://bit.ly/RegistCTFTF12" className="text-sm md:text-xl text-black font-medium bg-[#FE8A16] py-2 w-32 md:w-44 rounded-full">
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
          COMPETITION TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinectfm.png" width={400} height={800} alt="timeline"  className="mx-auto mt-10"/>
      </div>
      <div className="hidden md:block mt-20">
        <h1 className={`${Montserrat.className} text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          COMPETITION TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinectfd.png" width={1450} height={340} alt="timeline"  className="mx-auto mt-10"/>
      </div>

        {/* SECTION ABOUT */} 
      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE COMPETITION
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5 md:text-xl md:mx-52 text-justify">Capture the Flag TechnoFair 12.0 adalah kompetisi keamanan jaringan dan informasi yang diselenggarakan oleh BEM FIKTI Universitas Gunadarma bekerja sama dengan CCUG. Ditujukan untuk mahasiswa S1 Universitas Gunadarma, kompetisi ini mengasah kemampuan analisis, deteksi kerentanan, dan eksploitasi sistem melalui tantangan keamanan siber. Peserta, baik individu maupun tim, akan mencari flag tersembunyi dengan memanfaatkan celah keamanan.</p>
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