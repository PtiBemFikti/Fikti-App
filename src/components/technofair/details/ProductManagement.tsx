'use client';

import { toast } from 'sonner';
import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';
import { bricolageGrotesque, poppins } from '@/styles/font';

export default function ProductManagement() {
  return (
    <div className="bg-gradient-to-t from-[#F7F9FA] to-[#FEFEEA]">
      {/* Tampilan Dekstop start */}
      <div className="md:block hidden">
        <div className={`px-40 py-16 ${poppins.className}`}>
          <div className={`py-3 flex gap-16 ${bricolageGrotesque.className}`}>
            <div className="w-1/2 py-3">
              <Image src={'/technofair/pm.png'} alt="pm" width={461} height={346} className="rounded-2xl" />
            </div>
            <div className="w-1/2 py-6">
              {/* <Link href="/technofair" className="flex gap-4">
                <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
                <p className="text-xl font-medium text-[#545350]">Back</p>
              </Link> */}
              <div className="">
                <div className="flex gap-2">
                  <p className="text-4xl font-bold text-[#241525]">Product Management</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-3">Workshop</p>
                </div>
                <div className="text-[#212427] text-lg italic font-light font-[Poppins]">Building a Strong Foundation : Mastering Product Management Skills</div>
              </div>
              <div className="text-[#212427] text-xl font-semibold font-[Poppins] py-2">Sabtu, 06 Juli 2024</div>
              <div className="">
                <p className="text-lg font-normal font-[Poppins] text-[#212427]">
                  Workshop ini akan memperkenalkan Product Management yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi Product Manager
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link
                  href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                  className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]"
                >
                  <p className="text-[#6C6A67] font-[Poppins] text-base font-semibold">Hubungi Kami</p>
                </Link>
                {/* <Link href={'https://bit.ly/RegistrationWorkshopPM-TF11'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
                </Link> */}
                <div className="">
                  <button onClick={() => toast.error('The Registration Has Been Closed')} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                    <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24">
            <div className="flex gap-20">
              <div className=" w-2/6 h-40 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg">
                <div className="px-5 py-2">
                  <p className="text-[#31304D] text-sm font-[Poppins] font-semibold">Details</p>
                  <div className="px-3">
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className="text-[#212427] text-base font-[Poppins]">About Workshop</p>
                    </div>
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className="text-[#212427] text-base font-[Poppins]">Benefit Workshop</p>
                    </div>
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className="text-[#212427] text-base font-[Poppins]">Jadwal & Materi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-5/6">
                <div className="">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">About Workshop</p>
                  </div>
                  <div className="">
                    <p className="text-[#212427] text-base font-[Poppins] pt-5 pl-5">
                      Kegiatan workshop merupakan kegiatan yang berorientasi praktik disertai dengan teori untuk menambah kemampuan para peserta secara teknis yang sesuai dengan perkembangan yang ada dalam dunia Teknologi Informasi. Dalam
                      TechnoFair 11.0, salah satu workshop yang dilaksanakan berjudul &quot;Building a Strong Foundation : Mastering Product Management Skills&quot;.
                    </p>
                    <p className="text-[#212427] text-base font-[Poppins] pl-5 py-5">
                      Workshop ini bermaksud memperkenalkan Product Management yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi Product Manager.
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">Benefit Workshop</p>
                  </div>
                  <div className="pl-5">
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui pengenalan mengenai dasar Product Management</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui gambaran bagaimana cara kerja dan implementasi dari Product Management.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui bagaimana prospek karir Product Manager kepada peserta workshop.</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">Jadwal & Detail Materi Workshop</p>
                  </div>
                  <div className="py-5 flex gap-10">
                    <div className="pl-5 w-3/4">
                      <p className="text-[#212427] text-base font-[Poppins] font-semibold">Pelaksanaan Kelas :</p>
                      <div className="pl-5">
                        <div className="flex font-[Poppins] gap-2">
                          <p className="font-semibold text-[#212427] text-base">Hari, Tanggal </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> Sabtu, 06 Juli 2024
                          </p>
                        </div>
                        <div className="flex font-[Poppins] gap-16">
                          <p className="font-semibold text-[#212427] text-base">Waktu </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> 13.30 - 17.10 WIB
                          </p>
                        </div>
                        <div className="flex font-[Poppins] gap-14">
                          <p className="font-semibold text-[#212427] text-base">Tempat </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> Laboratorium D448, Kampus D, Universitas Gunadarma
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/4 pt-14">
                      <Link href={'https://calendar.app.google/pvXNoTDn29LMSBDD7'} className="w-80 h-20 bg-[#11111B] rounded-[8px] text-center flex flex-col justify-center items-center">
                        <p className="font-[Poppins] font-extrabold text-2xl text-[#FEFDFC]">SAVE THE DATE!</p>
                        <p className="font-[Poppins] text-sm text-[#FEFDFC] opacity-40">click here to save the date</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <AccordionCard
                    title="Materi Workshop - Building a Strong Foundation : Mastering Product Management Skills"
                    content={
                      '- Memperkenalkan dasar Product Management.\n- Memperkenalkan berbagai Skills yang dibutuhkan sebagai Product Manager.\n- Memperkenalkan proses pengembangan produk sebagai Product Manager.\n- Mengimplementasikan Ilmu Product Management dengan Real case study sebagai Product Manager.'
                    }
                  />
                  <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden">
        <div className="py-4">
          <div className="px-5">
            <div className="py-3">
              <Image src={'/technofair/pm.png'} alt="pm" width={461} height={346} className="rounded-xl" />
            </div>
          </div>
          <div className="px-5">
            {/* <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link> */}
            <div className="text-[#262626]">
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>Product Management</p>
              <p className="font-[Poppins] text-base italic font-light">&quot;Building a Strong Foundation : Mastering Product Management Skills&quot;</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className="font-[Poppins] text-sm font-medium">Sabtu, 06 Juli 2024</p>
            </div>
          </div>
          <div className="px-5">
            <div className="pt-2 flex gap-4">
              <Link
                href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                className="w-44 h-14 bg-[#FEFDFC] rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7]"
              >
                <p className="text-[#6C6A67] font-[Poppins] text-base font-semibold">Hubungi Kami</p>
              </Link>
              {/* <Link href={'https://bit.ly/RegistrationWorkshopPM-TF11'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
              </Link> */}
              <div className="">
                <button onClick={() => toast.error('The Registration Has Been Closed')} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className="text-[#31304D] text-base font-bold font-[Poppins]">About Workshop</p>
              </div>
              <div className="font-[Poppins] text-sm text-[#262626] pt-5">
                <p>
                  Kegiatan workshop merupakan kegiatan yang berorientasi praktik disertai dengan teori untuk menambah kemampuan para peserta secara teknis yang sesuai dengan perkembangan yang ada dalam dunia Teknologi Informasi. Dalam
                  TechnoFair 11.0, salah satu workshop yang dilaksanakan berjudul &quot;Building a Strong Foundation : Mastering Product Management Skills&quot;.
                </p>
                <p className="pt-5">
                  Workshop ini bermaksud memperkenalkan Product Management yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi Product Manager.
                </p>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className="text-[#31304D] text-base font-bold font-[Poppins]">Benefit Workshop</p>
              </div>
              <div className="pl-5">
                <div className="pt-5 flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui pengenalan mengenai dasar Product Management</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui gambaran bagaimana cara kerja dan implementasi dari Product Management.</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui bagaimana prospek karir Product Manager kepada peserta workshop.</p>
                </div>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className="text-[#31304D] text-base font-bold font-[Poppins]">Jadwal & Detail Materi Workhshop</p>
              </div>
              <div className="pt-5 flex gap-10">
                <div className="">
                  <p className="text-[#262626] text-sm font-[Poppins] font-semibold">Pelaksanaan Kelas :</p>
                  <div className="pl-5">
                    <div className="flex font-[Poppins] gap-2">
                      <p className="font-semibold text-[#262626] text-sm">Hari, Tanggal </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Sabtu, 06 Juli 2024
                      </p>
                    </div>
                    <div className="flex font-[Poppins] gap-14">
                      <p className="font-semibold text-[#262626] text-sm">Waktu </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> 13.30 - 17.10 WIB
                      </p>
                    </div>
                    <div className="flex font-[Poppins] gap-12">
                      <p className="font-semibold text-[#262626] text-sm">Tempat </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Laboratorium D448, Kampus D, Universitas Gunadarma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <Link href={'https://calendar.app.google/pvXNoTDn29LMSBDD7'} className="flex flex-col justify-center items-center text-center w-screen h-20 bg-[#11111b]">
                <p className="font-[Poppins] text-[#fefdfc] text-2xl font-extrabold">SAVE THE DATE!</p>
                <p className="text-sm font-[Poppins] text-[#fefdfc] opacity-40">click here to save the date</p>
              </Link>
            </div>
            <div className="px-5 py-5">
              <AccordionCard
                title="Materi Workshop - Building a Strong Foundation : Mastering Product Management Skills"
                content={
                  '- Memperkenalkan dasar Product Management.\n- Memperkenalkan berbagai Skills yang dibutuhkan sebagai Product Manager.\n- Memperkenalkan proses pengembangan produk sebagai Product Manager.\n- Mengimplementasikan Ilmu Product Management dengan Real case study sebagai Product Manager.'
                }
              />
              <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
