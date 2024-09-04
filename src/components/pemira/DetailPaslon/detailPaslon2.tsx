"use client";
import Link from "next/link";
import { Urbanist, epilogue } from "@/styles/font";
import Image from "next/image";
import VotePopUp from "../votepopup";

const handlePopUp: any = () => {
  const modal = document.getElementById("vote-popup") as HTMLDialogElement;
  modal.showModal();
};
export default function DetailPaslon2() {
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
            Candidates #2
          </h1>
        </div>
        <div className="mt-2">
          <Image
            src={"/pemira/2.png"}
            alt={"2"}
            width={340}
            height={360}
            className="rounded-3xl"
          ></Image>
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdp8aPdIYsPe131b5WpIfqo-099qmG0EzROB6UFVRwTdM48Xg/viewform">
          <div className="flex w-full h-28 bg-gradient-to-l from-[#669BBC] to-[#003049] shadow-black shadow-custom-right-bottom px-4 py-6 rounded-xl mt-4">
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
                    <h1
                      className={`${epilogue.className} text-gray-100 text-xl`}
                    >
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
        </Link>
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
                Muhammad Dante Saputra
              </p>
            </div>
            <div className="flex gap-20">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  NPM
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  10121804
                </p>
              </div>
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Kelas
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  3KA03
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div>
                <p className={`${Urbanist.className} text-[#98a2b3] text-base`}>
                  Wakil Ketua
                </p>
                <p className={`${Urbanist.className} text-black text-xl`}>
                  Daffa Aldion Rafidbudiman
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
                    10121294
                  </p>
                </div>
                <div>
                  <p
                    className={`${Urbanist.className} text-[#98a2b3] text-base`}
                  >
                    Kelas
                  </p>
                  <p className={`${Urbanist.className} text-black text-xl`}>
                    3KA03
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[550px] p-6 bg-[#eaecf0] rounded-xl mt-4">
          <div className="flex flex-col">
            <h1
              className={`${epilogue.className} text-black text-2xl font-bold`}
            >
              Pengalaman
            </h1>
            <div>
              <p
                className={`${Urbanist.className} list-disc text-black font-bold text-lg`}
              >
                Ketua
              </p>
              <div className="ml-4">
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
            <p
              className={`${Urbanist.className} list-disc text-black font-bold text-lg`}
            >
              Wakil Ketua
            </p>
            <div className="ml-4">
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
        <div className="h-[600px] p-6 bg-[#eaecf0] rounded-xl mt-4">
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
                Menjadikan Badan Eksekutif Mahasiswa sebagai fasilitator yang
                bersinergi dan solid dengan seluruh mahasiswa FIKTI untuk
                menciptakan lingkungan yang mendukung perkembangan secara
                Inovatif, Inklusif dan Progresif.
              </p>

              <p
                className={`${epilogue.className} text-black font-bold text-lg mt-1`}
              >
                Misi
              </p>
              <ol
                className={`${Urbanist.className} list-disc text-black text-base ml-2 text-justify`}
              >
                <li>
                  Mengoptimalkan sumber daya fungsionaris internal BEM FIKTI dan
                  Mahasiswa agar menciptakan regenerasi yang aktif , berkompeten
                  dan berkualitas.
                </li>
                <li>
                  Mempererat hubungan seluruh mahasiswa FIKTI untuk mewujudkan
                  lingkungan yang solid dan bersinergi.
                </li>
                <li>
                  Mengakomodasi, mengembangkan, dan mengapresiasi minat, bakat,
                  serta potensi diri mahasiswa FIKTI guna memicu
                  pengaktualisasian diri.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="h-[860px] p-6 bg-[#eaecf0] rounded-xl mt-4">
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
                    Akademik Bersinergi{" "}
                  </span>
                  <br />
                  Membuat komunitas berkelanjutan dimana mahasiswa FIKTI bisa
                  saling berbagi mengenai akademi dan bisa mengembangkan
                  wawasan.
                </li>
                <li>
                  <span className="font-bold text-lg">FIKTI Berkarir</span>
                  <br />
                  Sebuah wadah program kerja untuk mahasiswa FIKTI dalam
                  mendapatkan informasi seputar karir dan mengadakan kegiatan
                  pra-karir.
                </li>
                <li>
                  <span className="font-bold text-lg">
                    Pusat Kegiatan FIKTI (PUKTI)
                  </span>
                  <br />
                  Pusat Komunitas FIKTI untuk mahasiswa FIKTI dapat melakukan
                  kegiatan dan mendapatkan informasi terkait proker yang ada
                  diBEM FIKTI.
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
