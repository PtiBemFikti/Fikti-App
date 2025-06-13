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
      <li className="text-black">1. Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi TechnoFair 12.0.</li>
      <li className="text-black mt-4">2. Peserta merupakan mahasiswa/i aktif Universitas Gunadarma, dibuktikan dengan Kartu Tanda Mahasiswa yang masih aktif yang diunggah pada form registrasi.</li>
      <li className="text-black mt-4">3. Peserta melengkapi berkas yang diminta dengan benar dan legal secara hukum sesuai dengan timeline pendaftaran yang diberikan.</li>
      <li className="text-black mt-4">4. Peserta yang tidak melengkapi berkas pendaftaran sampai waktu yang ditentukan dinyatakan gugur.</li>
      <li className="text-black mt-4">5. Satu tim terdiri dari maksimal 3 anggota di mana setiap anggota tim harus berasal dari perguruan tinggi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.</li>
      <li className="text-black mt-4">6. Peserta bukan merupakan panitia kompetisi Competitive Programming TechnoFair 12.0.</li>
      <li className="text-black mt-4">7. Setiap peserta hanya boleh terdaftar tepat 1 tim pada cabang kompetisi yang sama.</li>
      <li className="text-black mt-4">8. Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
      <li className="text-black mt-4">9. Peserta tidak boleh diwakilkan ataupun mewakilkan orang lain yang bukan dirinya sendiri.</li>
      <li className="text-black mt-4">10. Para peserta wajib mengupload twibbon di akun instagram masing-masing sesuai dengan ketentuan yang tertera di akun Instagram TechnoFair 12.0 (@technofair).</li>
      <li className="text-black mt-4">11. Peserta pemenang kompetisi Competitive Programming TechnoFair 12.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di Auditorium, Kampus, Universitas Gunadarma.</li>
      <li className="text-black mt-4">12. Karya yang digunakan peserta dalam lomba harus merupakan karya orisinil dari peserta.</li>
      <li className="text-black mt-4">13. Hak Kekayaan Intelektual dari karya peserta pada kompetisi ini akan tetap menjadi hak peserta.</li>
      <li className="text-black mt-4">14. Peserta dilarang bekerja sama dengan peserta dari tim lain dalam bentuk apapun serta melakukan hal-hal yang dapat mengganggu berjalannya lomba atau merugikan peserta lain.</li>
      <li className="text-black mt-4">15. Panitia berhak mendiskualifikasi peserta yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi Competitive Programming TechnoFair 12.0.</li>
      <li className="text-black mt-4">16. Panitia berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dilombakan ataupun dalam proses pelaksanaan perlombaan.</li>
      <li className="text-black mt-4">17. Keputusan juri dan panitia bersifat mutlak dan tidak dapat diganggu gugat.</li>
      <li className="text-black mt-4">18. Panitia dapat mengubah seluruh atau sebagian konten dalam rulebook sewaktu-waktu.</li>
      </ol>
    ),
  },
  {
    judul: "Ketentuan Kompetisi",
    details: (
      <ol className="">
        <li className="text-black mt-4">1. Kompetisi Competitive Programming terdiri dari 3 babak, yaitu technical meeting, babak penyisihan, dan babak final.</li>
        <li className="text-black mt-4">2. Kompetisi dilaksanakan secara online pada platform Zoom Meeting, DOMjudge dan offline pada Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
        <li className="text-black mt-4">3. Panitia akan mengirimkan link, username, dan password ke ketua tim melalui e-mail untuk akun tim pada platform yang akan diberitahukan setelah tim selesai melaksanakan konfirmasi pembayaran dan sebelum babak penyisihan dimulai.</li>
        <li className="text-black mt-4">4. Kompetisi berlangsung selama 4 jam.</li>
        <li className="text-black mt-4">5. Jumlah soal adalah 6 sampai 10 soal.</li>
        <li className="text-black mt-4">6. Scoreboard akan dibekukan 1 jam sebelum kompetisi berakhir.</li>
        <li className="text-black mt-4">7. Peserta dapat melakukan klarifikasi soal selama 1 jam setelah kompetisi dimulai.</li>
        <li className="text-black mt-4">8. Peserta diperbolehkan memilih salah satu dari 4 bahasa pemrograman yang disediakan dalam batas waktu dan memori yang ditentukan.</li>
        <li className="text-black mt-4">9. Peserta dengan jumlah soal yang mendapatkan putusan “Accepted” terbanyak dan total penalti waktu paling sedikit akan keluar sebagai juara.</li>
      </ol>
    ),
  },
  {
    judul: "Tahapan Kompetisi",
    details: (
      <section className="mx-auto space-y-12 text-gray-800 leading-relaxed">
      {/* Technical Meeting */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Technical Meeting</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Technical Meeting dilaksanakan pada tanggal <span className="font-semibold">22 Juni 2025</span>.</li>
          <li>Sesi Technical Meeting dilakukan secara <span className="font-semibold">online</span>, dan <span className="font-semibold">bersifat wajib</span>.</li>
          <li>Technical Meeting diadakan mulai dari jam <span className="font-semibold">09.00 – 11.20 WIB</span> untuk menjelaskan teknis kompetisi.</li>
        </ul>
      </div>

      {/* Babak Penyisihan */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Babak Penyisihan</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Penyisihan dilaksanakan secara <span className="font-semibold">online</span> pada tanggal <span className="font-semibold">6 Juli</span> pukul <span className="font-semibold">15.00 – 21.00 WIB</span>.</li>
          <li>Jumlah soal: <span className="font-semibold">6–10 soal</span>.</li>
          <li>Peserta dapat melakukan klarifikasi soal selama <span className="font-semibold">1 jam</span> setelah kompetisi dimulai.</li>
          <li><span className="font-semibold">Scoreboard dibekukan</span> 1 (satu) jam terakhir.</li>
          <li>Selama penyisihan, peserta dilarang berkomunikasi atau mengganggu peserta lain.</li>
          <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan <span className="font-semibold">didiskualifikasi</span>.</li>
        </ul>
      </div>

      {/* Babak Final */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Babak Final</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Peserta yang masuk ke babak final adalah <span className="font-semibold">5 tim terbaik</span> dari gabungan seluruh babak penyisihan.</li>
          <li>Final dilakukan secara <span className="font-semibold">offline</span> di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
          <li>Final menggunakan <span className="font-semibold">laptop masing-masing</span>.</li>
          <li>Durasi final adalah <span className="font-semibold">4 jam</span>.</li>
          <li><span className="font-semibold">Scoreboard dibekukan</span> 1 (satu) jam terakhir.</li>
          <li>Jumlah soal: <span className="font-semibold">6–8 soal</span>.</li>
          <li>Peserta diperbolehkan membawa kode-kode sendiri atau catatan dalam kertas A4 maksimal 25 halaman (harus dibuat sebelum lomba).</li>
          <li>Selama final, peserta dilarang berkomunikasi atau mengganggu peserta lain dalam ruangan lomba.</li>
          <li>Selama final, peserta dilarang mengakses internet melalui komputer atau perangkat lainnya.</li>
          <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan <span className="font-semibold">didiskualifikasi</span>.</li>
        </ul>
      </div>
    </section>

    ),
  },
  {
    judul: "Teknis Kompetisi",
    details: (
    <section className="mx-auto space-y-12 text-gray-800 leading-relaxed">
      {/* Bahasa Pemrograman */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Bahasa Pemrograman</h2>
        <p className="mb-4">
          Panitia tidak dapat menjamin bahwa setiap soal dapat diselesaikan dengan semua Bahasa pemrograman yang disediakan dalam batas waktu dan memori yang telah ditentukan. Batas waktu dan memori akan dijelaskan secara rinci di awal soal. Berikut adalah daftar Bahasa pemrograman yang diperbolehkan:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">C</span> — ekstensi <code>.C</code></li>
          <li><span className="font-semibold">C++</span> — ekstensi <code>.cpp</code></li>
          <li><span className="font-semibold">Java</span> — ekstensi <code>.java</code></li>
          <li><span className="font-semibold">Python3</span> — ekstensi <code>.py</code></li>
        </ul>
      </div>

      {/* Soal */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Soal</h2>
        <p className="mb-4">
          Soal yang diberikan adalah permasalahan algoritmis dalam Bahasa Indonesia. Peserta diharapkan membuat kode program yang menghasilkan output sesuai keterangan soal, dalam batas waktu dan memori yang ditentukan. Setiap soal terdiri dari:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-semibold">Kepala Soal</span>: judul, batas memori, dan batas waktu eksekusi.</li>
          <li><span className="font-semibold">Deskripsi</span>: pengantar permasalahan.</li>
          <li><span className="font-semibold">Batasan</span>: batasan waktu dan memori.</li>
          <li><span className="font-semibold">Masukan</span>: spesifikasi input.</li>
          <li><span className="font-semibold">Keluaran</span>: spesifikasi output.</li>
          <li><span className="font-semibold">Contoh Masukan & Keluaran</span>: contoh yang sesuai.</li>
        </ul>
      </div>

      {/* Sistem Penilaian */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Sistem Penilaian</h2>
        <p className="mb-4">
          Setiap jawaban dikirimkan sebagai berkas kode sesuai bahasa yang ditentukan. Program akan diuji dengan kasus rahasia; harus selesai dalam batas waktu dan memori serta menghasilkan output benar. Hasil penilaian:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><span className="font-semibold">Accepted</span>: jawaban benar dalam batas.</li>
          <li><span className="font-semibold">Compile error</span>: kode gagal dikompilasi.</li>
          <li><span className="font-semibold">Wrong answer</span>: selesai tapi output salah.</li>
          <li><span className="font-semibold">Time Limit</span>: tidak selesai dalam batas waktu.</li>
          <li><span className="font-semibold">Runtime Error</span>: keluar dengan kode bukan nol atau melebihi memori.</li>
        </ul>
        <p className="mb-4">
          Program dinyatakan benar bila memperoleh “Accepted”. Pengumpulan setelah Accepted diabaikan.
        </p>
        <p className="mb-4">
          <span className="font-semibold">Penalty waktu</span> = menit sejak kontes dimulai hingga Accepted + 20 menit untuk setiap submission non-Accepted.
        </p>
        <p>
          <span className="font-semibold">Peringkat tim</span> diurutkan oleh jumlah soal Accepted, lalu total penalty terendah, kemudian waktu Accepted terakhir paling awal.
        </p>
      </div>
    </section>


    ),
  },
]

export default function CompProg() {
  const [index, setIndex] = useState(0);
  
  const nextItem = () => setIndex((prev) => (prev + 1) % eventData.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
  
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/bg-kompe1.jpg)] bg-cover bg-center brightness-50 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base md:text-3xl font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          
          <h1 className={`${Montserrat.className} text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Competitive Programming
          </h1>
        </div>
      </div>
 

      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg md:text-3xl italic leading-[150%] text-center">Competitive Programming Competition of <br className="md:hidden" />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="https://bit.ly/RegistCPTF12" className="text-sm md:text-xl text-black font-medium bg-[#FE8A16] py-2 w-32 md:w-44 rounded-full hover:bg-[#100F21] hover:text-white transition-colors duration-300">
          Registration
          </Link>
          <Link href="https://drive.google.com/file/d/1esOQIGfwH-x_PKdq93hBdwaLsmANUEO7/view?usp=drive_link " className="text-sm md:text-xl text-black font-medium border-[#FE8A16] border-3 py-2 w-32 md:w-44 rounded-full">
          Rulebook
          </Link>
        </div>
      </div>


        {/* SECTION TIMELINE */} 
      <div className="mt-20 md:hidden">
        <h1 className={`${Montserrat.className} text-center text-xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          COMPETITION TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinecomprogm.png" width={400} height={800} alt="timeline"  className="mx-auto mt-10"/>
      </div>
      <div className="hidden md:block mt-20">
        <h1 className={`${Montserrat.className} text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          COMPETITION TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinecomprogd.png" width={1450} height={340} alt="timeline"  className="mx-auto mt-10"/>
      </div>

        {/* SECTION ABOUT */} 
      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE COMPETITION
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5 md:text-xl md:mx-52 text-justify">Competitive Programming TechnoFair 12.0 adalah kompetisi pemrograman yang diselenggarakan oleh BEM FIKTI Universitas Gunadarma bersama Gunadarma I/O. Kompetisi ini ditujukan untuk mahasiswa S1 Universitas Gunadarma guna menguji kemampuan problem solving dan berpikir komputasional melalui penyelesaian soal-soal pemrograman dengan batasan waktu dan memori tertentu.</p>
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