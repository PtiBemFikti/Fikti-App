"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { epilogue, Urbanist } from "@/styles/font";
import VotePopUp from "./votepopup";

const handlePopUp: any = () => {
  const modal = document.getElementById("vote-popup") as HTMLDialogElement;
  modal.showModal();
};

export default function ModalPaslon2() {
  return (
    <div className="modal-box bg-white font-Urbanist space-y-3 max-w-6xl">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-lg btn-circle btn-ghost absolute text-gray-400 right-2 top-2">
          ✕
        </button>
      </form>

      <div className="md:flex hidden gap-5">
        <div className="w-80 flex flex-col gap-5">
          <div className="bg-[#DDDCE8] rounded-2xl">
            <Image
              src="/pemira/2.png"
              alt=""
              width={320}
              height={360}
              className="rounded-3xl"
            />
          </div>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdp8aPdIYsPe131b5WpIfqo-099qmG0EzROB6UFVRwTdM48Xg/viewform">
            <div className="flex gap-7 h-24 bg-gradient-to-l from-[#669BBC] to-[#003049] px-4 py-5 rounded-xl shadow-black shadow-custom-right-bottom">
              <div className="flex-col">
                <h1
                  className={`${epilogue.className} text-white text-2xl font-bold`}
                >
                  Cast Your Vote
                </h1>
                <div className="flex justify-center items-center py-2 gap-2">
                  <div className="flex w-15 h-5 px-2 py-2 bg-[#CC112F] rounded-md">
                    <div className="flex justify-center items-center gap-2">
                      <div className="w-2 h-2 bg-gray-100 rounded-full mb-1"></div>
                      <h1
                        className={`${epilogue.className} text-gray-100 text-base`}
                      >
                        LIVE
                      </h1>
                    </div>
                  </div>
                  <div className={`${epilogue.className} text-gray-100`}>
                    Vote is open now
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className={`${epilogue.className} text-black font-bold text-3xl`}>
            Candidates #2
          </h1>
          <div className="w-[660px] h-[236px] p-3 bg-[#EAECF0] rounded-xl mt-4">
            <div className="ml-2">
              <div>
                <h2
                  className={`${epilogue.className} text-black font-bold text-2xl`}
                >
                  Profil
                </h2>
              </div>
              <div className="flex justify-between gap-2.5">
                <div className="flex flex-col w-1/2">
                  <div className="mt-4">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Muhammad Dante Saputra
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      10121804
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      3KA03
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="mt-4">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Wakil Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Daffa Aldion Rafidbudiman
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      10121294
                    </p>
                  </div>
                  <div className="mt-2">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      3KA03
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-[660px] h-[290px] p-3 bg-[#EAECF0] rounded-xl mt-4">
              <h2
                className={`${epilogue.className} text-black font-bold text-2xl ml-2`}
              >
                Pengalaman
              </h2>
              <div className="flex justify-between gap-2.5">
                <div className="flex flex-col w-1/2">
                  <p
                    className={`${Urbanist.className} list-disc text-black font-bold text-lg ml-2`}
                  >
                    Ketua
                  </p>
                  <div className="ml-8">
                    <ol
                      className={`${Urbanist.className} list-disc text-black text-base`}
                    >
                      <li>Staff Biro LITBANG 2022/2023</li>
                      <li>Koordinator Acara PKKMB 2023</li>
                      <li>Koordinator Lapangan LDK 2023</li>
                      <li>Ketua Forum Besar 2022/2023</li>
                      <li>Kepala Biro LITBANG 2023/2024</li>
                      <li>Data Scientist - PT. United Tracktors Tbk</li>
                      <li>Data science & AI - Startup Campus</li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <p
                    className={`${Urbanist.className} list-disc text-black font-bold text-lg ml-2`}
                  >
                    Wakil Ketua
                  </p>
                  <div className="ml-8">
                    <ol
                      className={`${Urbanist.className} list-disc text-black text-base`}
                    >
                      <li>Magang Staff BEM 2021</li>
                      <li>Staff ORSB 2022/2023</li>
                      <li>Kepala Departemen ORSB 2023/2024</li>
                      <li>Ketua Pelaksana Olimpiade Gunadarma 2024</li>
                      <li>Bangkit Academy Machine Learning</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[660px] h-[330px] p-3 bg-[#EAECF0] rounded-xl mt-4">
            <div>
              <h2
                className={`${epilogue.className} text-black font-bold text-2xl ml-2`}
              >
                Visi & Misi
              </h2>
            </div>
            <div>
              <p
                className={`${epilogue.className} text-black font-bold text-lg ml-2`}
              >
                Visi
              </p>
              <p
                className={`${Urbanist.className} text-black text-base ml-2 text-justify`}
              >
                Menjadikan Badan Eksekutif Mahasiswa sebagai fasilitator yang
                bersinergi dan solid dengan seluruh mahasiswa fikti untuk
                menciptakan lingkungan yang mendukung perkembangan secara
                Inovatif, Inklusif dan Progresif.
              </p>

              <p
                className={`${epilogue.className} text-black font-bold text-lg mt-1 ml-2`}
              >
                Misi
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-6`}
              >
                <li>
                  Mengoptimalkan sumber daya fungsionaris internal BEM FIKTI dan
                  Mahasiswa agar menciptakan regenerasi yang aktif , berkompeten
                  dan berkualitas.
                </li>
                <li>
                  Mempererat hubungan seluruh mahasiswa Fikti untuk mewujudkan
                  lingkungan yang solid dan bersinergi.
                </li>
                <li>
                  Mengakomodasi, mengembangkan, dan mengapresiasi minat, bakat,
                  serta potensi diri mahasiswa Fikti guna memicu
                  pengaktualisasian diri.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-[660px] h-[490px] p-3 bg-[#EAECF0] rounded-xl mt-4 mr-8">
            <div>
              <h2
                className={`${epilogue.className} text-black font-bold text-2xl ml-2`}
              >
                Program Kerja
              </h2>
              <p
                className={`${epilogue.className} text-black font-bold text-lg ml-2`}
              >
                Program Kerja Inovasi
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-6 text-justify`}
              >
                <li>
                  <span className="font-bold text-lg">
                    Akademik Bersinergi{" "}
                  </span>
                  <br />
                  Membuat komunitas berkelanjutan dimana mahasiswa fikti bisa
                  saling sharing mengenai akademi dan bisa mengembangkan
                  wawasan.
                </li>
                <li>
                  <span className="font-bold text-lg">FIKTI Berkarir</span>
                  <br />
                  Sebuah wadah program kerja untuk mahasiswa fikti dalam
                  mendapatkan informasi seputar karir dan mengadakan kegiatan
                  pra-karir.
                </li>
                <li>
                  <span className="font-bold text-lg">
                    Pusat Kegiatan FIKTI (PUKTI)
                  </span>
                  <br />
                  Pusat komunitas fikti untuk mahasiswa fikti dapat melakukan
                  kegiatan dan mendapatkan informasiterkait poker yang ada diBEM
                  FIKTI.
                </li>
              </ol>
              <p
                className={`${epilogue.className} text-black font-bold text-lg ml-2`}
              >
                Terobosan Kegiatan
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-6 text-justify`}
              >
                <li>
                  <span className="font-bold text-lg">
                    Nyore Bareng FIKTI (RILL){" "}
                  </span>
                  <br />
                  Kegiatan dimana para anggota BEM FIKTI akan secara berkala
                  terjun langsung dan berkumpul pada sore hari dengan
                  menggunakan identitas PDH (Pakaian Dinas Harian) sebagai tanda
                  pengenal BEM. Kegiatan ini bertujuan untuk lebih mendekatkan
                  diri dengan para mahasiswa FIKTI, sehingga keberadaan BEM
                  FIKTI dapat lebih terlihat dan terasa oleh seluruh mahasiswa
                  FIKTI.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <dialog id="vote-popup" className="modal">
        <VotePopUp />
      </dialog>
    </div>
  );
}
