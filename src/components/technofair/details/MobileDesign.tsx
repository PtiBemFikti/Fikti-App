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
        <li  className="text-black">1. Peserta adalah pihak yang telah menyelesaikan alur dan mekanisme pendaftaran pada website resmi TechnoFair 12.0 (https://bit.ly/TechnoFair12). </li>
        <li  className="text-black mt-4">2. Peserta merupakan mahasiswa/i aktif Universitas Gunadarma, dibuktikan dengan Kartu Tanda Mahasiswa yang diunggah pada form  registrasi.</li>
        <li className="text-black mt-4">3. Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
        <li className="text-black mt-4">4. Setiap anggota peserta harus berasal dari institusi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.</li>
        <li className="text-black mt-4">5. Peserta bukan merupakan panitia TechnoFair 12.0.</li>
        <li className="text-black mt-4">6. Setiap peserta diperbolehkan mengikuti lebih dari 1 kompetisi yang berbeda.</li>
        <li className="text-black mt-4">7. Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 cabang kompetisi.</li>
        <li className="text-black mt-4">8. Setiap Peserta harus telah terdaftar pada website TechnoFair 12.0 dan tidak dapat digantikan oleh orang lain.</li>
        <li className="text-black mt-4">9. Para peserta wajib mengupload twibbon di akun instagram masing-masing sesuai dengan ketentuan yang tertera di akun Instagram TechnoFair 12.0 (@technofair)</li>
        <li className="text-black mt-4">10. Peserta yang tidak memenuhi persyaratan pendaftaran sampai batas waktu yang telah ditentukan akan dinyatakan gugur.</li>
        <li className="text-black mt-4">11. Peserta finalis kompetisi  Mobile App UI/UX Design TechnoFair 12.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di Auditorium , Kampus , Universitas Gunadarma.</li>
        <li className="text-black mt-4">12. Karya yang dibuat wajib memenuhi ketentuan karya.</li>
        <li className="text-black mt-4">13. TechnoFair 12.0 berhak untuk mempublikasikan karya peserta yang diikutsertakan pada kompetisi TechnoFair 12.0 dengan tetap mencantumkan nama peserta dan tidak untuk tujuan komersial.</li>
        <li className="text-black mt-4">14. Hak kekayaan intelektual dari karya peserta pada kompetisi TechnoFair 12.0 akan tetap menjadi hak peserta.</li>
        <li className="text-black mt-4">15. Panitia TechnoFair 12.0 berhak untuk mendiskualifikasi peserta yang melanggar peraturan selama berjalannya kompetisi.</li>
        <li className="text-black mt-4">16. Panitia TechnoFair 12.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dikompetisikan ataupun dalam proses pelaksanaan kompetisi.</li>
        <li className="text-black mt-4">17. Panitia tidak bertanggung jawab apabila ada klaim dari pihak lain atas ketidak aslian karya peserta (Plagiarisme).</li>
        <li className="text-black mt-4">18. Keputusan juri dan panitia TechnoFair 12.0 bersifat mutlak dan tidak dapat diganggu gugat.</li>
        <li className="text-black mt-4">19. Seluruh atau sebagian peraturan dan ketentuan yang terdapat pada rulebook dapat berubah sewaktu-waktu.</li>
        <li className="text-black mt-4">20. Segala bentuk perubahan yang terjadi akan diberitahukan pada website TechnoFair 12.0 dan akun Instagram @technofair.</li>
      </ol>
    ),
  },
  {
    judul: "Ketentuan Kompetisi",
    details: (
      <ol className="">
        <li className="text-black">1. Satu tim terdiri atas maksimal 3 anggota, yang mana ada 1 anggota untuk menjadi ketua tim.</li>
        <li className="text-black mt-4">2. Setiap peserta harus memenuhi semua ketentuan kompetisi Mobile App UI/UX Design serta ketentuan umum kompetisi Mobile App UI/UX Design.</li>
        <li className="text-black mt-4">3. Satu tim hanya dapat mengajukan 1 buah karya pada kompetisi Mobile App UI/UX Design.</li>
        <li className="text-black mt-4">4. Peserta diperbolehkan memiliki dosen pembimbing dalam kompetisi, dosen pembimbing dan peserta harus dari perguruan tinggi yang sama.</li>
        <li className="text-black mt-4">5. Peserta harus membuat desain/produk sesuai dengan tema yaitu Blending Creativity and Usability in Mobile Design.</li>
        <li className="text-black mt-4">6. Kompetisi Mobile App UI/UX Design TechnoFair 12.0 ini terdiri dari 2 babak, yaitu babak penyisihan dan babak final. Babak penyisihan diselenggarakan secara online melalui website, platform Discord, dan media sosial TechnoFair 12.0. Babak final Mobile App UI/UX Design diselenggarakan secara offline pada Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
        <li className="text-black mt-4">7. Karya desain/produk yang diajukan belum pernah diikutsertakan/menjadi pemenang/memperoleh penghargaan pada kompetisi lain.</li>
        <li className="text-black mt-4">8. Peserta yang melanggar peraturan akan didiskualifikasi.</li>
        <li className="text-black mt-4">9. Karya yang dikompetisikan tidak mengandung unsur-unsur yang dapat menimbulkan isu SARA (Suku, Agama, Ras, dan Antar golongan).</li>
        <li className="text-black mt-4">10. Dilarang melakukan penjiplakan dalam pembuatan karya, dan apabila peserta terbukti melakukan penjiplakan maka akan dinyatakan gugur.</li>
        <li className="text-black mt-4">11. Peserta wajib mengikuti setiap peraturan yang telah ditentukan oleh pihak panitia.</li>
      </ol>
    ),
  },
  {
    judul: "Tahapan Kompetisi",
    details: (
      <div className="">
        <section className="">
         
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Babak Penyisihan</h2>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Pada babak penyisihan, peserta mengirimkan proposal terkait ide Mobile App UI/UX Design. Dengan ketentuan sebagai berikut.</li>
              <li>Proposal yang diajukan merupakan ide orisinal dengan tidak menjiplak yang sudah ada.</li>
              <li>Setiap tim hanya diperbolehkan mengumpulkan proposal satu kali hingga batas akhir pengumpulan yang ditentukan.</li>
              <li>Proposal berisi sebagai berikut:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Cover (mencantumkan logo TechnoFair 12.0 dan logo Universitas Gunadarma, logo dapat diunduh melalui tautan (https://bit.ly/LogoTechnofair12danUniversitasGunadarma)).</li>
                  <li>Judul produk/karya.</li>
                  <li>Nama tim.</li>
                  <li>Latar belakang masalah.</li>
                  <li>Tujuan dan hasil yang akan dipakai.</li>
                  <li>Metode pencapaian tujuan (menggunakan user-centered design methodology).</li>
                  <li>Analisis desain karya meliputi:
                    <ul className="list-disc list-inside ml-6">
                      <li>Target pengguna.</li>
                      <li>Batasan produk.</li>
                      <li>Platform yang digunakan.</li>
                      <li>Skenario rancangan produk.</li>
                      <li>Ilustrasi desain interaksi produk (tampilan high-fidelity prototype perangkat lunak/mock-up).</li>
                    </ul>
                  </li>
                  <li>Kesimpulan.</li>
                  <li>Daftar pustaka (jika ada).</li>
                </ul>
              </li>
              <li>Struktur proposal tidak terbatas pada poin-poin tersebut.</li>
              <li>Proposal berkisar antara 15-20 halaman.</li>
              <li>Isi proposal ditulis dengan aturan sebagai berikut:
                <ul className="list-disc list-inside ml-6">
                  <li>Diketik dalam kertas A4 dengan margin batas atas 3 cm, batas bawah 3 cm, samping kiri 4 cm, dan samping kanan 3 cm.</li>
                  <li>Jenis font: Times New Roman.</li>
                  <li>Ukuran font: 12 pt dengan Batasan Spasi: 1,5 spasi.</li>
                </ul>
              </li>
              <li>Proposal disusun sesuai dengan template proposal yang telah diberikan, template proposal dapat diunduh di (http://bit.ly/TemplateProposalTF12).</li>
              <li>Proposal disimpan dan dikirim dalam format .pdf.</li>
              <li>Peserta memberi nama file proposal dengan format: TF12.0_PROPOSAL_UX DESIGN_(NAMA TIM).pdf. Contoh: TF12.0_PROPOSAL_UX DESIGN_INSPIRATIF.pdf</li>
              <li>Proposal diunggah pada link form pengumpulan yang tersedia di website TechnoFair 12.0 (https://bit.ly/TechnoFair12).</li>
              <li>Dewan juri akan menentukan 5 tim terbaik untuk masuk ke babak final.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-10">Babak Final</h2>
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Pada babak final, peserta wajib melakukan presentasi terkait karya Mobile App UI/UX Design yang telah dibuat sesuai dengan project pada babak penyisihan. Dengan ketentuan sebagai berikut:</li>
              <li>Tim yang lolos babak final akan melakukan presentasi sesuai dengan konten yang dibuat pada proposal babak penyisihan (wajib menampilkan prototype/mock-up) dan diberikan waktu selama 10 menit untuk presentasi serta 10 menit untuk sesi tanya jawab. (menggunakan alat bantu presentasi Powerpoint).</li>
              <li>Dewan juri melakukan penjurian dan menentukan 3 tim terbaik yang akan menjadi pemenang kompetisi Mobile App UI/UX Design. Pengumuman resmi dan penyerahan hadiah akan diberikan pada Closing Ceremony TechnoFair 12.0.</li>
              <li>Format penamaan untuk file presentasi adalah sebagai berikut : TF12.0_FINAL_UI/UX DESIGN_(NAMA TIM).pptx</li>
            </ul>
          </div>
        </section>
      </div>
    ),
  },
  {
    judul: "Kriteria Penilaian",
    details: (
      <section className="max-w-4xl mx-auto space-y-8 text-black">
  {/* Babak Penyisihan */}
  <div className="">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Babak Penyisihan</h2>
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Kriteria Penilaian</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Bobot</th>
        </tr>
      </thead>
      <tbody>
        {[
          { no: "1.", crit: "Identifikasi Masalah", weight: "20%" },
          { no: "2.", crit: "Inovasi Desain Produk", weight: "25%" },
          { no: "3.", crit: "Metode Desain", weight: "20%" },
          { no: "4.", crit: "Analisis Desain Karya", weight: "20%" },
          { no: "5.", crit: "Kerapihan & Estetika", weight: "15%" },
        ].map((row) => (
          <tr key={row.no}>
            <td className="border border-gray-300 px-4 py-2">{row.no}</td>
            <td className="border border-gray-300 px-4 py-2">{row.crit}</td>
            <td className="border border-gray-300 px-4 py-2">{row.weight}</td>
          </tr>
        ))}
        <tr className="font-semibold">
          <td colSpan={2} className="border border-gray-300 px-4 py-2">
            Total Bobot Penilaian Babak Penyisihan :
          </td>
          <td className="border border-gray-300 px-4 py-2">100%</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/* Babak Final */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Babak Final</h2>
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Kriteria Penilaian</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Bobot</th>
        </tr>
      </thead>
      <tbody>
        {[
          { no: "1.", crit: "Penguasaan Materi", weight: "35%" },
          { no: "2.", crit: "Penyajian dan Komunikasi", weight: "30%" },
          { no: "3.", crit: "Kemampuan Menjawab Pertanyaan Juri", weight: "35%" },
        ].map((row) => (
          <tr key={row.no}>
            <td className="border border-gray-300 px-4 py-2">{row.no}</td>
            <td className="border border-gray-300 px-4 py-2">{row.crit}</td>
            <td className="border border-gray-300 px-4 py-2">{row.weight}</td>
          </tr>
        ))}
        <tr className="font-semibold">
          <td colSpan={2} className="border border-gray-300 px-4 py-2">
            Total Bobot Penilaian Babak Final :
          </td>
          <td className="border border-gray-300 px-4 py-2">100%</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

    ),
  },
]

export default function MobileDesign() {
  const [index, setIndex] = useState(0);
  
  const nextItem = () => setIndex((prev) => (prev + 1) % eventData.length);
  const prevItem = () => setIndex((prev) => (prev - 1 + eventData.length) % eventData.length);
  
  return(
    <div className="bg-[#FFE9CF]">

      <div className="relative h-[200px] md:h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[url(/technofair/Dokumentasi/bg-kompe4.jpg)] bg-cover bg-center brightness-50 opacity-90 blur-[1px]"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-base md:text-3xl font-bold leading-[150%] tracking-tight text-white">
            TECHNOFAIR 12.0
          </h1>
          
          
          <h1 className={`${Montserrat.className} text-3xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
            Mobile App UI/UX Design
          </h1>
        </div>
      </div>
 

      <div className="mt-10 pb-5">
        <h1 className="text-black text-lg md:text-3xl italic leading-[150%] text-center">Mobile App UI/UX Design Kompetisi of <br className="md:hidden" />TechnoFair 12.0</h1>
        <div className="pt-6 text-center justify-center flex gap-6">
          <Link href="https://bit.ly/RegistUIUXTF12" className="text-sm md:text-xl text-black font-medium bg-[#FE8A16] py-2 w-32 md:w-44 rounded-full">
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
          KOMPETISI TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinemobiledesignm.png" width={400} height={800} alt="timeline"  className="mx-auto mt-10"/>
      </div>
      <div className="hidden md:block mt-20">
        <h1 className={`${Montserrat.className} text-center text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          KOMPETISI TIMELINE
        </h1>
        <Image src="/technofair/logoTF12/timelinemobiledesignd.png" width={1450} height={340} alt="timeline"  className="mx-auto mt-10"/>
      </div>

        {/* SECTION ABOUT */} 
      <div className="mt-20 pb-5">
        <h1 className={`${Montserrat.className} text-center text-xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#D77512] to-[#FFEACF] bg-clip-text text-transparent`}>
          ABOUT THE KOMPETISI
        </h1>
        <p className="text-black mx-4 font-medium tract mt-5 md:text-xl md:mx-52 text-justify">Mobile App UI/UX Design Competition TechnoFair 12.0 adalah kompetisi desain aplikasi mobile yang diselenggarakan oleh BEM FIKTI Universitas Gunadarma. Fokusnya pada inovasi tampilan dan pengalaman pengguna yang estetis, fungsional, dan kreatif. Mengusung tema “Blending Creativity and Usability in Mobile Design”, kompetisi ini menilai desain berdasarkan estetika, kemudahan penggunaan, dan pemahaman kebutuhan pengguna, serta terbuka bagi mahasiswa yang ingin mengasah keterampilan UI/UX dan menciptakan solusi digital yang bermanfaat.
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