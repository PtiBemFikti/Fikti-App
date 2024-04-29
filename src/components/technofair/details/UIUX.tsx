import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';

export default function UiUx() {
  return (
    <div className="bg-gradient-to-t from-[#F7F9FA] to-[#FEFEEA]">
      {/* Tampilan Dekstop start */}
      <div className="md:block hidden">
        <div className="px-40 py-16">
          <Link href="/technofair" className="flex gap-4">
            <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
            <p className="text-xl font-medium text-[#545350]">Back</p>
          </Link>
          <div className="py-3 flex gap-16 font-[Bricolage-Grotesque]">
            <div className="w-1/2">
              <Image src={'/technofair/gambar1.png'} alt="gambar 1" width={461} height={346} />
            </div>
            <div className="w-1/2">
              <div className="">
                <div className="flex gap-2">
                  <p className="text-5xl font-bold text-[#241525]">UI/UX Design</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-5">Workshop</p>
                </div>
                <div className="text-[#212427] text-lg italic font-light font-[Poppins]">From Concept to Creation: Mastering UI/UX Design Practices</div>
              </div>
              <div className="text-[#212427] text-xl font-semibold font-[Poppins] py-2">Senin, 29 Juli 2024</div>
              <div className="">
                <p className="text-lg font-normal font-[Poppins] text-[#212427]">
                  Workshop ini bermaksud memperkenalkan UI/UX Design yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi UI/UX Designer
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link href={'#'} className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]">
                  <p className="text-[#6C6A67] font-[Poppins] text-base font-semibold">Hubungi Kami</p>
                </Link>
                <Link href={'#'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
                </Link>
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
                      TechnoFair 11.0, salah satu workshop yang dilaksanakan berjudul &quot;From Concept to Creation: Mastering UI/UX Design Practices&quot;.
                    </p>
                    <p className="text-[#212427] text-base font-[Poppins] py-5 pl-5">
                      Workshop ini bermaksud memperkenalkan UI/UX Design yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi UI/UX Designer.
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
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui pengenalan mengenai dasar UI/UX Design.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui gambaran bagaimana cara kerja dan implementasi dari UI/UX Design.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui bagaimana prospek karir UI/UX Designer kepada peserta workshop.</p>
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
                            <strong>:</strong> Senin, 29 Juli 2024
                          </p>
                        </div>
                        <div className="flex font-[Poppins] gap-16">
                          <p className="font-semibold text-[#212427] text-base">Waktu </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> 09.00 - 12.40 WIB
                          </p>
                        </div>
                        <div className="flex font-[Poppins] gap-14">
                          <p className="font-semibold text-[#212427] text-base">Tempat </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> Laboratorium Kampus F4, Universitas Gunadarma
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/4 pt-14">
                      <Link href={'#'} className="w-80 h-20 bg-[#11111B] rounded-[8px] text-center flex flex-col justify-center items-center">
                        <p className="font-[Poppins] font-extrabold text-2xl text-[#FEFDFC]">SAVE THE DATE!</p>
                        <p className="font-[Poppins] text-sm text-[#FEFDFC] opacity-40">click here to save the date</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <AccordionCard title="Materi Workshop - From Concept to Creation: Mastering UI/UX Design Practices" content={'- Memperkenalkan dasar UI/UX Design.\n- Memperkenalkan Figma sebagai software penunjang.\n- Mengimplementasikan Ilmu Desain UI/UX dengan menggunakan Figma.\n- Membuat contoh project design landing page suatu website menggunakan Figma.'} />
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
            <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link>
            <div className="py-3">
              <div className="w-full h-64 bg-[#E9E9ED] rounded-[15px]"></div>
            </div>
          </div>
          <div className="px-5">
            <div className="text-[#262626]">
              <p className="font-[Bricolage-Grotesque] text-4xl font-extrabold">UI/UX Design</p>
              <p className="font-[Poppins] text-base italic font-light">&quot;From Concept to Creation: Mastering UI/UX Design Practices&quot;</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className="font-[Poppins] text-sm font-medium">Sabtu, 29 Juli 2024</p>
            </div>
          </div>
          <div className="px-5">
            <div className="pt-2 flex gap-4">
              <Link href={'#'} className="w-44 h-14 bg-[#FEFDFC] rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7]">
                <p className="text-[#6C6A67] font-[Poppins] text-base font-semibold">Hubungi Kami</p>
              </Link>
              <Link href={'#'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
              </Link>
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
                  TechnoFair 11.0, salah satu workshop yang dilaksanakan berjudul &quot;From Concept to Creation: Mastering UI/UX Design Practices&quot;.
                </p>
                <p className='pt-5'>Workshop ini bermaksud memperkenalkan UI/UX Design yang merupakan bagian dari dunia teknologi yang sedang banyak diminati saat ini dan mengimplementasikan Skill yang dipersiapkan untuk menjadi UI/UX Designer.</p>
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
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui pengenalan mengenai dasar UI/UX Design.</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui gambaran bagaimana cara kerja dan implementasi dari UI/UX Design.</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className="text-[#262626] text-sm font-[Poppins] font-medium">Mengetahui bagaimana prospek karir UI/UX Designer kepada peserta workshop.</p>
                </div>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className="text-[#31304D] text-base font-bold font-[Poppins]">Jadwal & Detail Materi Seminar</p>
              </div>
              <div className="pt-5 flex gap-10">
                <div className="">
                  <p className="text-[#262626] text-sm font-[Poppins] font-semibold">Pelaksanaan Kelas :</p>
                  <div className="pl-5">
                    <div className="flex font-[Poppins] gap-2">
                      <p className="font-semibold text-[#262626] text-sm">Hari, Tanggal </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Senin, 29 Juli 2024
                      </p>
                    </div>
                    <div className="flex font-[Poppins] gap-14">
                      <p className="font-semibold text-[#262626] text-sm">Waktu </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> 09.00 - 12.40 WIB
                      </p>
                    </div>
                    <div className="flex font-[Poppins] gap-12">
                      <p className="font-semibold text-[#262626] text-sm">Tempat </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Laboratorium Kampus F4, Universitas Gunadarma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <Link href={'#'} className="flex flex-col justify-center items-center text-center w-screen h-20 bg-[#11111b]">
                <p className="font-[Poppins] text-[#fefdfc] text-2xl font-extrabold">SAVE THE DATE!</p>
                <p className="text-sm font-[Poppins] text-[#fefdfc] opacity-40">click here to save the date</p>
              </Link>
            </div>
            <div className="px-5 py-5">
              <AccordionCard title="Materi Workshop - From Concept to Creation: Mastering UI/UX Design Practices" content={'- Memperkenalkan dasar UI/UX Design.\n- Memperkenalkan Figma sebagai software penunjang.\n- Mengimplementasikan Ilmu Desain UI/UX dengan menggunakan Figma.\n- Membuat contoh project design landing page suatu website menggunakan Figma.'} />
              <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
