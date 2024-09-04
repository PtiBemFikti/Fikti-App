"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { epilogue, Urbanist } from "@/styles/font";
import VotePopUp from "./votepopup";

// const handlePopUp: any = () => {
//   const modal = document.getElementById("vote-popup") as HTMLDialogElement;
//   modal.showModal();
// };
export default function ModalPaslon1() {
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
              src="/pemira/1.png"
              alt="1"
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
            Candidates #1
          </h1>
          <div className="w-[660px] h-[210px] p-3 bg-[#EAECF0] rounded-xl mt-4">
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
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Muhammad Naufal Kamil
                    </p>
                  </div>
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      1021878
                    </p>
                  </div>
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      3KA05
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Wakil Ketua
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      Arya Dwi Prasetyo
                    </p>
                  </div>
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      NPM
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      10121211
                    </p>
                  </div>
                  <div className="mt-1">
                    <p
                      className={`${Urbanist.className} text-[#98A2B3] text-sm`}
                    >
                      Kelas
                    </p>
                    <p
                      className={`${Urbanist.className} text-[#101415] text-xl`}
                    >
                      3KA11
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
                    className={`${Urbanist.className} text-black font-bold text-lg ml-2`}
                  >
                    Ketua
                  </p>
                  <div className="ml-8">
                    <ol
                      className={`${Urbanist.className} list-disc text-black text-base`}
                    >
                      <li>
                        Staff Departemen Politik dan Kesejahteraan Mahasiswa
                        2022/2023
                      </li>
                      <li>Koordinator Divisi Humas Heroes IX</li>
                      <li>Moderator Debat PEMIRA 2023</li>
                      <li>
                        Kepala Departemen Politik dan Kesejahteraan Mahasiswa
                        2022/2023
                      </li>
                      <li>
                        Celerates Acceleration Program- Web Development & UI UX
                        Design
                      </li>
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
                      <li>
                        Staff Departemen Olahraga dan Seni Budaya 2022/2023
                      </li>
                      <li>Ketua Divisi Sponsorship FIKTI Space 2.0</li>
                      <li>
                        Master of Ceremony PKKMB Universitas Gunadarma 2023
                      </li>
                      <li>
                        Data Analytics & Software Development With AI RevoU Tech
                        Academy
                      </li>
                      <li>Data Analisis PT. Wijaya Karya</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[660px] h-[470px] p-3 bg-[#EAECF0] rounded-xl mt-4">
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
                Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
                memiliki daya guna, serta menjadi support sistem bagi mahasiswa
                sehingga menjadikan FIKTI yang dekat, bersahabat dan produktif.
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
                  Mewujudkan penyaluran informasi secara masif guna memastikan
                  informasi yang ada agar tersampaikan ke mahasiswa melalui
                  penyampaian secara langsung di kampus dan didukung oleh sosial
                  media.
                </li>
                <li>
                  Menjadi BEM FIKTI yang suportif dalam hal akademik maupun non
                  akademik dalam rangka meningkatkan Kompetensi serta daya saing
                  mahasiswa FIKTI dan juga kedekatan antara BEM dengan mahasiswa
                </li>
                <li>
                  Guna memastikan kehadiran BEM FIKTI dalam menyelesaikan
                  permasalahan mahasiswa sebagai bentuk advokasi, BEM FIKTI
                  berkomitmen untuk selalu aktif dan responsif dalam menangani
                  setiap isu dan keluhan yang dihadapi oleh mahasiswa.
                </li>
                <li>
                  Menempatkan koordinator wilayah di lokasi kampus Salemba,
                  Kalimalang, dan Karawaci sebagai perwakilan BEM FIKTI yang
                  dapat mengakomodasi mahasiswa di luar lokasi kampus Depok.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-[660px] h-[600px] p-3 bg-[#EAECF0] rounded-xl mt-4 mr-8">
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
                    Intern With BEM FIKTI{" "}
                  </span>
                  <br />
                  Program magang &quot;Intern with BEM FIKTI&quot; ditawarkan
                  oleh Badan Eksekutif Mahasiswa (BEM) Fakultas Ilmu Komputer
                  dan Teknologi Informasi (FIKTI) di Universitas Gunadarma.
                  Program ini bertujuan memberikan kesempatan kepada mahasiswa
                  untuk terlibat langsung dalam aktivitas dan proyek yang
                  dijalankan oleh BEM FIKTI.
                </li>
                <li>
                  <span className="font-bold text-lg">Gelar Budaya</span>
                  <br />
                  Menyelenggarakan pertunjukan Musik sebagai wadah penyaluran
                  minat mahasiswa terkait seni serta dalam rangka mendekatkan
                  hubungan antara BEM FIKTI dengan mahasiswa.
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
                    Koordinator Wilayah{" "}
                  </span>
                  <br />
                  Koordinator Wilayah di Badan Eksekutif Mahasiswa (BEM)
                  bertanggung jawab untuk mengkoordinasikan dan memastikan
                  keterlibatan BEM di berbagai kampus selain Depok. Peran ini
                  bertujuan untuk menyebarkan informasi dan aktivitas BEM secara
                  merata, sehingga seluruh mahasiswa di berbagai lokasi
                  merasakan kehadiran dan manfaat dari organisasi BEM.
                </li>
              </ol>
              <p
                className={`${epilogue.className} text-black font-bold text-lg ml-2`}
              >
                Program Kerja Unggulan
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-6 text-justify`}
              >
                <li>
                  <span className="font-bold text-lg">Technofair </span>
                </li>
                <li>
                  <span className="font-bold text-lg">
                    HEROES (Hero Of Education and Social){" "}
                  </span>
                </li>
                <li>
                  <span className="font-bold text-lg">FIKTI SPACE </span>
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
