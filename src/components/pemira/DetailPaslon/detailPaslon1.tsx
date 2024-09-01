"use client";
import Link from "next/link";
import { Urbanist, epilogue } from "@/styles/font";
import Image from "next/image";
import VotePopUp from "../votepopup";

const handlePopUp: any = () => {
  const modal = document.getElementById("vote-popup") as HTMLDialogElement;
  modal.showModal();
};

export default function DetailPaslon1() {
  return (
    <div className="md:hidden block p-6">
      <div className="justify-center items-center">
        <Link href="/pemira">
          <div className="h-12 py-3 bg-[#eaecf0] rounded-lg">
            <div className="flex justify-center items-center">
              <button
                className={`text-black ${Urbanist.className} font-bold text-center`}
              >
                Back
              </button>
            </div>
          </div>
        </Link>
        <div className="mt-8">
          <h1
            className={`text-black ${epilogue.className} font-bold text-start text-[32px]`}
          >
            Candidates #1
          </h1>
        </div>
        <div className="mt-2">
          <Image
            src={"/pemira/1.png"}
            alt={"1"}
            width={340}
            height={360}
            className="rounded-3xl"
          ></Image>
        </div>
        <div
          onClick={handlePopUp}
          className="flex w-full h-28 bg-gradient-to-l from-[#669BBC] to-[#003049] shadow-black shadow-custom-right-bottom px-4 py-6 rounded-xl mt-4"
        >
          <div className="flex flex-col gap-2">
            <h1
              className={`${epilogue.className} text-white text-2xl font-bold`}
            >
              Cast Your Vote
            </h1>
            <div className="flex w-64 h-7 gap-2">
              <div className="flex px-3 py-1 bg-red-500 rounded-lg">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-gray-100 rounded-full"></div>
                  <h1 className={`${epilogue.className} text-gray-100 text-xl`}>
                    LIVE
                  </h1>
                </div>
              </div>
              <div className={`${epilogue.className} text-gray-100 text-xl`}>
                Vote is open now
              </div>
            </div>
          </div>
        </div>
        <div className="h-[309px] p-6 bg-[#eaecf0] rounded-xl mt-6">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold mb-2`}
            >
              Profil
            </h1>
            <div>
              <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                Ketua
              </p>
              <p className={`${Urbanist.className} text-black text-xl`}>
                Muhammad Naufal Kamil
              </p>
            </div>
            <div className="flex gap-20">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  NPM
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  1021878
                </p>
              </div>
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Kelas
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  3KA05
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Wakil Ketua
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  Arya Dwi Prasetyo
                </p>
              </div>
              <div className="flex gap-20">
                <div>
                  <p
                    className={`${Urbanist.className} text-[#98a2b3] text-base`}
                  >
                    NPM
                  </p>
                  <p className={`${Urbanist.className} text-black text-xl`}>
                    10121211
                  </p>
                </div>
                <div>
                  <p
                    className={`${Urbanist.className} text-[#98a2b3] text-base`}
                  >
                    Kelas
                  </p>
                  <p className={`${Urbanist.className} text-black text-xl`}>
                    3KA11
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[650px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Pengalaman
            </h1>
            <div>
              <p
                className={`${Urbanist.className} text-black font-bold text-lg`}
              >
                Ketua
              </p>
              <div className="ml-4">
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
            <div>
              <p
                className={`${Urbanist.className} text-black font-bold text-lg mt-2`}
              >
                Wakil Ketua
              </p>
              <div className="ml-4">
                <ol
                  className={`${Urbanist.className} list-disc text-black text-base`}
                >
                  <li>Staff Departemen Olahraga dan Seni Budaya 2022/2023</li>
                  <li>Ketua Divisi Sponsorship FIKTI Space 2.0</li>
                  <li>Master of Ceremony PKKMB Universitas Gunadarma 2023</li>
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
        <div className="h-[950px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Visi Misi
            </h1>
            <div>
              <p
                className={`${epilogue.className} text-black font-bold text-lg`}
              >
                Visi
              </p>
              <p
                className={`${Urbanist.className} text-black text-base text-justify`}
              >
                Mewujudkan BEM FIKTI UG sebagai wadah yang akrab, informatif,
                memiliki daya guna, serta menjadi support sistem bagi mahasiswa
                sehingga menjadikan FIKTI yang dekat, bersahabat dan produktif.
              </p>
              <p
                className={`${epilogue.className} text-black font-bold text-lg mt-1`}
              >
                Misi
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-justify text-base ml-4`}
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
        </div>
        <div className="h-[1080px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Program Kerja
            </h1>
            <div>
              <p
                className={`${epilogue.className} text-black font-bold text-lg`}
              >
                Program Kerja Inovasi
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-4 text-justify`}
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
                className={`${epilogue.className} text-black font-bold text-lg`}
              >
                Terobosan Kegiatan
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-4 text-justify`}
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
                className={`${epilogue.className} text-black font-bold text-lg`}
              >
                Program Kerja Unggulan
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-4 text-justify`}
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
