"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Modal1 from "../Modal1";
import Modal2 from "./Modal2";

const handleModal1 = () => {
  const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
  modal.showModal();
};
const handleModal2 = () => {
  const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
  modal.showModal();
};

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
            <Image src="/fiktispace/competition/Badminton.png" alt="" width={320} height={360} />
            <div className="flex font-Urbanist px-3 py-4 justify-center gap-2 items-center">
              <h1 className="text-[#301443] font-bold text-3xl">Badminton</h1>
              <div className="font-light text-[#B9B6CF] text-2xl">
                <h1>Kompetisi</h1>
                <h1>Olahraga</h1>
              </div>
            </div>
          </div>
          <button className="bg-[#1D1564] w-full rounded-2xl h-16">
            <Link href={"https://forms.gle/Tkmgy6UerEhMpVbdA"}>
              <h1 className="text-[#E8E8F0] font-Urbanist text-xl md:text-2xl">Daftar Sekarang</h1>
            </Link>
          </button>
          <div className="font-Urbanist px-4 py-3 flex flex-col gap-3 bg-[#E8E8F0] rounded-2xl">
            <h1 className="text-[#56257A] font-bold text-4xl text-center md:text-left">
              Rp80.000<span className="text-lg text-[#B9B6CF]">/Tim</span>
            </h1>
            <div className="font-Urbanist text-[#050A10] text-sm tracking-tighter">
              <p>
                <b>Periode Pendaftaran:</b> 23 Mei - 7 Juni 2024
              </p>
              <p>
                <b>Technical Meeting:</b> 16 Juni 2024
              </p>
              <p>
                <b>Periode Kompetisi:</b> 23 Juni - 25 Juni 2024
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
                  0813-5558-4206 <b>(Naufal)</b>
                </p>
                <p>
                  0856-9352-0833 <b>(Desta)</b>
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src="/fiktispace/competition/Line.png" alt="" width={30.22} height={30} />
              <div className="text-xs">
                <p>
                  @paldrok69<b>(Naufal)</b>
                </p>
                <p>
                  @destakaisya <b>(Desta)</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[752px]">
          <Image src="/fiktispace/competition/Banner.png" alt="" width={752} height={360} className="md:block hidden" />
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Peraturan dan Ketentuan Umum</h1>
            </div>
            <ol className="text-black list-decimal pl-10 md:pl-14 font-Urbanist text-sm md:text-base">
              <li>Peserta merupakan mahasiswa aktif FIKTI Universitas Gunadarma.</li>
              <li>Wajib memiliki KRS/blanko pembayaran Universitas Gunadarma.</li>
              <li>Peserta yang dapat bermain hanyalah peserta yang terdaftar dalam pendaftaran.</li>
              <li>Seluruh informasi, peraturan, dan kebijakan yang sudah diberikan pada proses pendaftaran wajib dipahami dan dipatuhi oleh seluruh peserta.</li>
              <li>
                Dilarang membawa rokok / vape / pod / alat sejenisnya. Jika benda-benda tersebut ditemukan, maka akan disita oleh pihak panitia dan akan dikembalikan setelah pertanding...
                <span className="text-blue-400">
                  <button onClick={handleModal1}>see more</button>
                </span>
              </li>
            </ol>
          </div>
          <div className="flex p-3 flex-col gap-3">
            <div className="flex gap-4 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-4 h-4 md:w-6 md:h-6">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              <h1 className=" text-[#16104B] font-Urbanist text-[16px] md:text-2xl font-bold">Syarat dan Ketentuan Peserta</h1>
            </div>
            <h1 className="text-black pl-8 md:pl-10 font-Urbanist text-base md:text-lg font-bold">Peserta:</h1>
            <ol className="text-black list-decimal pl-10 md:pl-14 font-Urbanist text-sm md:text-base">
              <li>Mahasiswa FIKTI Universitas Gunadarma aktif (Tingkat 1 - 4).</li>
              <li>Daftar pemain harus diterima oleh panitia pertandingan 30 menit sebelum pertandingan.</li>
              <li>Wajib membawa KRS asli ketika bertanding.</li>
              <li>Tindakan pendaftaran untuk turnamen ini berarti telah menyetujui semua persyaratan, aturan dan regulasi yang dinyatakan, secara keseluruhan.</li>
              <li>
                Pemain wajib hadir di jadwal tanding yang sudah ditentukan bila melewati bat...
                <span className="text-blue-400">
                  <button onClick={handleModal2}>see more</button>
                </span>
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
              <li>Keputusan panitia adalah mutlak dan tidak dapat diganggu gugat.</li>
              <li>Peserta yang sudah mendaftarkan dirinya dianggap telah setuju dengan segala peraturan yang ada.</li>
              <li>Rules dapat berganti sewaktu-waktu berdasarkan hasil diskusi panitia FIKTISPACE 3.0.</li>
              <li>Jika terdapat suatu tindakan yang berkaitan dengan perlombaan dan tidak ada dalam aturan maka akan jadi keputusan panitia mencegah hal yg tidak diinginkan.</li>
              <li>Hal-hal yang belum diatur dalam aturan ini akan diatur kemudian.</li>
            </ol>
          </div>
        </div>
      </div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <Modal1 />
      </dialog>
      <dialog id="my_modal_2" className="modal">
        <Modal2 />
      </dialog>
    </div>
  );
}
