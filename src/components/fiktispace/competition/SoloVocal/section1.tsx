"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <div className="bg-gradient-to-b from-slate-200 to-white p-10 md:px-[159px] md:py-[98px]">
      <div className="mb-5">
        <Link href={"/fiktispace"}>
          <div className="flex gap-1">
            <button className="rounded-full border border-[#545350]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-[#545350] w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <h1 className="text-[#545350] font-Poppins text-[16px]">Back</h1>
          </div>
        </Link>
      </div>
      <div className="md:flex md:gap-14">
        <div className="w-80 flex flex-col gap-5">
          <div className="bg-[#DDDCE8] rounded-2xl">
            <Image src="/fiktispace/competition/SoloVocal.png" alt="" width={320} height={360} />
            <div className="flex font-Urbanist px-3 py-4 justify-around gap-2 items-center">
              <h1 className="text-[#301443] font-bold text-3xl">
                Solo <br />
                Vocal
              </h1>
              <div className="font-light text-[#B9B6CF] text-2xl text-right">
                <h1>Kompetisi</h1>
                <h1>Seni</h1>
              </div>
            </div>
          </div>
          <button className="bg-[#1D1564] w-full rounded-2xl h-16">
            <Link href={"https://forms.gle/Tkmgy6UerEhMpVbdA"}>
              <h1 className="text-[#E8E8F0] font-Urbanist text-xl md:text-2xl">Daftar Sekarang</h1>
            </Link>
          </button>
          <button className="bg-[#FFFEFD] border border-[#B9B6CF] w-full rounded-2xl h-16">
            <Link href={"https://forms.gle/mDyNEr6aa8UmoQZq9"}>
              <h1 className="text-[#16104B] font-Urbanist text-lg md:text-xl">Pendaftaran Non-mahasiswa</h1>
            </Link>
          </button>
          <div className="font-Urbanist px-4 py-3 flex flex-col gap-3 bg-[#E8E8F0] rounded-2xl">
            <h1 className="text-[#56257A] font-bold text-4xl text-center md:text-left">
              Rp30.000<span className="text-lg text-[#B9B6CF]">/Peserta</span>
            </h1>
            <div className="font-Urbanist text-[#050A10] text-sm tracking-tighter">
              <p>
                <b>Periode Pendaftaran:</b> 31 Mei - 7 Juni 2024
              </p>
              <p>
                <b>Technical Meeting:</b> 16 Juni 2024
              </p>
              <p>
                <b>Penampilan Hasil Karya:</b> 25 Juni 2024
              </p>
              <p>
                <b>Pengumuman Pemenang:</b> 29 Juni 2024
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/fiktispace/competition/alert.png" alt="" width={28} height={28} className="w-8 h-8" />
              <p className="font-Urbanist text-[#595652] text-sm tracking-tight leading-tight">
                <span className="font-bold italic ">Hello SpaceNation!</span> Mohon untuk membaca ketentuan yang tersedia pada halaman ini sebelum mendaftar ya!
              </p>
            </div>
          </div>
          <div className="font-Urbanist text-[#050A10] px-4 py-3 flex flex-col gap-3 bg-[#E8E8F0] rounded-2xl">
            <p className="text-sm font-bold">Untuk informasi lebih lanjut, bisa menghubungi kami di kontak berikut!</p>
            <div className="flex gap-2">
              <Image src="/fiktispace/competition/Whatsapp.png" alt="" width={30.22} height={30} />
              <div className="text-xs">
                <p>
                  0858-1182-9114 <b>(Nashwa Afifa Zahra)</b>
                </p>
                <p>
                  0812-9445-0030 <b>(Yearin Alamanda M)</b>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src="/fiktispace/competition/Line.png" alt="" width={30.22} height={30} />
              <div className="text-xs">
                <p>
                  @naaashwa <b>(Nashwa Afifa Zahra)</b>
                </p>
                <p>
                  @year.out <b>(Yearin Alamanda M)</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[752px]">
          <Image src="/fiktispace/competition/Banner.png" alt="" width={752} height={360} className="md:block hidden" />
          <div className="font-Urbanist text-[#000000] text-center border border-[#BFB8B0] px-6 py-3 rounded-xl mt-4 w-fit">
            <h1>
              Peserta di <b>wajibkan</b> membawa 2 Device (1 untuk mengikuti Zoom Cloud Meetings dan 1 untuk merekam penampilan saat itu juga)
            </h1>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Ketentuan Umum</h1>
            </div>
            <ol className="text-black list-decimal pl-10 md:pl-14 font-Urbanist text-sm md:text-base">
              <li>Peserta merupakan mahasiswa/i aktif Universitas Gunadarma yang telah memenuhi syarat dan ketentuan untuk mengikuti acara atau perlombaan yang diselenggarakan FIKTI SPACE 3.0.</li>
              <li>Peserta dilarang keras menggunakan Artificial Intelligence (AI). Karya yang dilombakan harus hasil karya sendiri dan belum pernah diikutsertakan lomba lainnya.</li>
              <li>Peserta dilarang keras melakukan pemalsuan identitas, pencurian karya, atau bentuk lainnya yang terindikasi kecurangan.</li>
            </ol>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Ketentuan Khusus</h1>
            </div>
            <ol className="text-black list-decimal pl-10 md:pl-14 font-Urbanist text-sm md:text-base">
              <li>
                Peserta menyanyikan salah satu dari lima (5) judul lagu pilihan berikut: <br />
                <ol className="list-none">
                  <li>a. Rewrite The Stars - James Arthur, Anne-Marie;</li>
                  <li>b. Hello - Adele;</li>
                  <li>c. Sial - Mahalini</li>
                  <li>d. Sang Dewi - Lyodra; dan/atau</li>
                  <li>e. Peri Cintaku - Ziva Magnolya</li>
                </ol>
              </li>
              <li>Peserta diperbolehkan menggunakan instrumen atau diiringi oleh alat musik.</li>
              <li>
                Peserta wajib <b>menggunakan setidaknya dua (2) perangkat yang memadai</b> dimana: <br />
                <ol className="list-lower-alpha pl-4">
                  <li>Perangkat pertama bisa berupa handphone / laptop untuk mengikuti Zoom Cloud Meetings dan menyanyikan lagu secara langsung di hadapan juri;</li>
                  <li>Perangkat kedua bisa berupa handphone / laptop untuk merekam penampilan saat itu juga. Nantinya hasil rekaman tersebut akan dikirimkan ke panitia;</li>
                  <li>Perangkat pendukung lainnya, misalnya mikrofon.</li>
                </ol>
              </li>
              <li>Hasil rekaman tidak boleh diedit sama sekali.</li>
              <li>Panitia berhak mempublikasikan karya peserta, tetapi hak cipta tetap milik pembuat karya.</li>
            </ol>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Syarat & Ketentuan Peserta</h1>
            </div>
            <ol className="text-black list-decimal pl-8 md:pl-14 font-Urbanist text-sm md:text-sm">
              <li>Mahasiswa/i aktif di Universitas Gunadarma.</li>
              <li>
                Mengisi formulir pendaftaran yang telah disediakan dengan mengunggah berkas berupa: <br />
                <ol className="list-lower-alpha pl-2  md:pl-4">
                  <li>
                    <b>Pas foto berwarna ukuran 3 x 4 (background biru/merah)</b> dengan format “Pasfoto_NamaLengkap_NamaFakultas.jpg” untuk mahasiswa/i aktif Universitas Gunadarma dan “Pasfoto_NamaLengkap_AsalSekolah.jpg” untuk siswa/i
                    SMA;
                  </li>
                  <li>
                    <b>KRS ATA 2023/2024</b> dengan format “KRS_NamaLengkap_NamaFakultas.pdf” untuk mahasiswa/i aktif Universitas Gunadarma dan scan kartu pelajar dengan format “NISN_NamaLengkap_AsalSekolah.pdf” untuk siswa/i SMA;.
                  </li>
                  <li>
                    <b>Screenshot bukti follow Instagram @fiktispace.ug</b> dengan format “FSPACE_NamaLengkap_NamaFakultas.jpg” untuk mahasiswa/i aktif Universitas Gunadarma dan “FSPACE_NamaLengkap_AsalSekolah.pdf” untuk siswa/i SMA;.
                  </li>
                  <li>
                    <b>Bukti pembayaran pendaftaran sebesar Rp30.000,- ke [rekening bendahara] a/n [nama bendahara]</b> dengan format BuktiPembayaran_NamaLengkap_Fakultas.jpg untuk mahasiswa/i aktif Universitas Gunadarma dan
                    “BuktiPembayaran_NamaLengkap_Sekolah.jpg” untuk siswa/i SMA;.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Catatan Penting</h1>
            </div>
            <ol className="text-black list-decimal pl-10 md:pl-14 font-Urbanist text-sm md:text-base">
              <li>Seluruh peserta wajib mematuhi ketentuan-ketentuan yang berlaku selama FIKTI SPACE 3.0, baik ketentuan umum maupun ketentuan setiap acara atau perlombaan.</li>
              <li>Setiap peserta wajib hadir pada Technical Meeting FIKTI SPACE 3.0. Peserta yang tidak hadir dianggap menyetujui semua ketentuan.</li>
              <li>Uang pendaftaran tidak akan dikembalikan jika peserta mengundurkan diri. Namun apabila peserta yang mendaftar tidak mencapai 60% dari target yang telah panitia tentukan, maka uang pendaftaran akan dikembalikan</li>
              <li>Keputusan panitia dan juri merupakan keputusan yang mutlak dan tidak dapat diganggu gugat.</li>
            </ol>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Kriteria Penilaian</h1>
            </div>
            <Image src="/fiktispace/competition/kriteriaPenilaianSV.png" alt="" width={752} height={288} className="pl-5 hidden md:block" />
            <Image src="/fiktispace/competition/kriteriaPenilaianSVMobile.png" alt="" width={320} height={298} className="pl-1 md:hidden block" />
          </div>
        </div>
      </div>
    </div>
  );
}
