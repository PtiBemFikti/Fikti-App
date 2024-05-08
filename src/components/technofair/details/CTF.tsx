import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';
import { bricolageGrotesque, poppins } from '@/styles/font';
import { useRouter } from 'next/router';

export default function CtfPage() {
  // const router = useRouter;
  // const { id } = router.query;

  // const accordionContent = {
  //   1: {
  //     title: ''
  //   }
  // }

  return (
    <div className="bg-gradient-to-b from-[#FFF4E7] to-[#F7F9FA]">
      {/* Tampilan Dekstop start */}
      <div className="md:block hidden">
        <div className="px-40 py-16">
          <Link href={'/technofair'} className="flex gap-4">
            <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
            <p className="text-xl font-medium text-[#545350]">Back</p>
          </Link>
          <div className={`py-3 flex gap-16 ${bricolageGrotesque.className}`}>
            <div className="w-1/2">
              <Image src={'/technofair/gambar1.png'} alt="gambar 1" width={461} height={346} />
            </div>
            <div className="w-1/2">
              <div className="">
                <div className="flex gap-2">
                  <p className="text-5xl font-bold text-[#241525]">Capture The Flag</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-5">Competitions</p>
                </div>
                <div className={`text-[#212427] text-lg italic font-light ${poppins.className}`}>Exploring Innovations and Applications of Artificial Intelligence</div>
              </div>
              <div className={`text-[#212427] text-xl font-semibold ${poppins.className} py-2`}>Sabtu, 20 Juni 2024</div>
              <div className="">
                <p className={`text-lg font-normal ${poppins.className} text-[#212427]`}>
                  Seminar bertemakan “Exploring Innovations and Applications of Artificial Intelligence (AI)” akan menjadi langkah untuk memperluas wawasan dan memahami tentang perkembangan terkini dalam dunia Artificial Intelligence (AI).
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link href={'#'} className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]">
                  <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
                </Link>
                <Link href={'#'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-24">
            <div className="flex gap-20">
              <div className=" w-2/6 h-40 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg">
                <div className="px-5 py-2">
                  <p className={`text-[#31304D] text-sm ${poppins.className} font-semibold`}>Details</p>
                  <div className="px-3">
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>About Seminar</p>
                    </div>
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Benefit Seminar</p>
                    </div>
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Jadwal & Materi</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-5/6">
                <div className="">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>About Seminar</p>
                  </div>
                  <div className="">
                    <p className={`text-[#212427] text-base ${poppins.className} py-5 pl-5`}>
                      Artificial Intelligence atau Kecerdasan Buatan merujuk pada pengembangan sistem komputer yang dapat mengeksekusi tugas - tugas yang membutuhkan kecerdasan manusia. Seminar ini bermaksud menjelaskan pengertian tentang
                      Artificial Intelligence (AI) serta membahas inovasi dan penerapannya dalam kehidupan sehari - hari.
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Benefit Seminar</p>
                  </div>
                  <div className="pl-5">
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Mendapat pengetahuan tentang pengertian dasar Artificial Intelligence (AI).</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Mengetahui perkembangan Artificial Intelligence (AI) serta mendapatkan inovasi untuk mengembangkan kecerdasan buatan.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Mengetahui pengaplikasian Artificial Intelligence (AI) dalam dunia kerja.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className={`text-[#212427] text-base ${poppins.className}`}>Meningkatkan motivasinya untuk berinovasi dalam bidang Artificial Intelligence (AI).</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Jadwal & Detail Materi Seminar</p>
                  </div>
                  <div className="py-5 flex gap-10">
                    <div className="pl-5 w-3/4">
                      <p className={`text-[#212427] text-base ${poppins.className} font-semibold`}>Pelaksanaan Kelas :</p>
                      <div className="pl-5">
                        <div className={`flex ${poppins.className} gap-2`}>
                          <p className="font-semibold text-[#212427] text-base">Hari, Tanggal </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> Sabtu, 20 Juni 2024
                          </p>
                        </div>
                        <div className={`flex ${poppins.className} gap-16`}>
                          <p className="font-semibold text-[#212427] text-base">Waktu </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> 09.00 - 13.00 WIB
                          </p>
                        </div>
                        <div className={`flex ${poppins.className} gap-14`}>
                          <p className="font-semibold text-[#212427] text-base">Tempat </p>
                          <p className="text-[#212427] text-base">
                            <strong>:</strong> Auditorium D461, Kampus D, {'\n'} Universitas Gunadarma
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/4 pt-14">
                      <Link href={'#'} className="w-80 h-20 bg-[#11111B] rounded-[8px] text-center flex flex-col justify-center items-center">
                        <p className={`${poppins.className} font-extrabold text-2xl text-[#FEFDFC]`}>SAVE THE DATE!</p>
                        <p className={`${poppins.className} text-sm text-[#FEFDFC] opacity-40`}>click here to save the date</p>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <AccordionCard
                    title="Materi Seminar 1 - How Artificial Intelligence (AI) Works in Society 5.0"
                    content={
                      '- Menjelaskan latar belakang Artificial Intelligence (AI).\n- Peranan Artificial Intelligence (AI) di era Society 5.0.\n- Fitur-Fitur dari Artificial Intelligence (AI).\n- Dampak dari Artificial Intelligence (AI) pada pekerjaan manusia.\n- Etika dan keamanan yang terkait dengan penerapan Artificial Intelligence (AI).'
                    }
                  />
                  <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
                  <AccordionCard
                    title="Materi Seminar 2 - Unveiling Applications and Innovations of Artificial Intelligence (AI)"
                    content={
                      '- Perkembangan terbaru dalam Artificial Intelligence (AI).\n- Inovasi Artificial Intelligence (AI) untuk mengatasi masalah tertentu, meningkatkan efisiensi, atau menciptakan nilai baru.\n- Pengaplikasian Artificial Intelligence (AI) di berbagai bidang pekerjaan.\n- Integrasi Artificial Intelligence (AI) dengan teknologi lain (seperti IoT, Big Data, dan Blockchain).\n- Tantangan dan peluang dalam mengembangkan inovasi Artificial Intelligence (AI) di masa depan.'
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
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>Artificial Intelligence</p>
              <p className={`${poppins.className} text-base italic font-light`}>&quot;Exploring Innovations and Applications of Artificial Intelligence&quot;</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className={`${poppins.className} text-sm font-medium`}>Sabtu, 20 Juni 2024</p>
            </div>
          </div>
          <div className="px-5">
            <div className="pt-2 flex gap-4">
              <Link href={'#'} className="w-44 h-14 bg-[#FEFDFC] rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7]">
                <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
              </Link>
              <Link href={'#'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>About Seminar</p>
              </div>
              <div className={`${poppins.className} text-sm text-[#262626] pt-5`}>
                <p>
                  Artificial Intelligence atau Kecerdasan Buatan merujuk pada pengembangan sistem komputer yang dapat mengeksekusi tugas - tugas yang membutuhkan kecerdasan manusia. Seminar ini bermaksud menjelaskan pengertian tentang
                  Artificial Intelligence (AI) serta membahas inovasi dan penerapannya dalam kehidupan sehari - hari.
                </p>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Benefit Seminar</p>
              </div>
              <div className="pl-5">
                <div className="pt-5 flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className={`text-[#262626] text-sm ${poppins.className} font-medium`}>Mendapat pengetahuan tentang pengertian dasar Artificial Intelligence (AI).</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className={`text-[#262626] text-sm ${poppins.className} font-medium`}>Mengetahui perkembangan Artificial Intelligence (AI) serta mendapatkan inovasi untuk mengembangkan kecerdasan buatan.</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className={`text-[#262626] text-sm ${poppins.className} font-medium`}>Mengetahui pengaplikasian Artificial Intelligence (AI) dalam dunia kerja.</p>
                </div>
                <div className="flex gap-3 py-2">
                  <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                  <p className={`text-[#262626] text-sm ${poppins.className} font-medium`}>Meningkatkan motivasinya untuk berinovasi dalam bidang Artificial Intelligence (AI).</p>
                </div>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Jadwal & Detail Materi Seminar</p>
              </div>
              <div className="pt-5 flex gap-10">
                <div className="">
                  <p className={`text-[#262626] text-sm ${poppins.className} font-semibold`}>Pelaksanaan Kelas :</p>
                  <div className="pl-5">
                    <div className={`flex ${poppins.className} gap-2`}>
                      <p className="font-semibold text-[#262626] text-sm">Hari, Tanggal </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Sabtu, 20 Juni 2024
                      </p>
                    </div>
                    <div className={`flex ${poppins.className} gap-14`}>
                      <p className="font-semibold text-[#262626] text-sm">Waktu </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> 09.00 - 13.00 WIB
                      </p>
                    </div>
                    <div className={`flex ${poppins.className} gap-12`}>
                      <p className="font-semibold text-[#262626] text-sm">Tempat </p>
                      <p className="text-[#262626] text-sm">
                        <strong>:</strong> Auditorium D461, Kampus D, {'\n'} Universitas Gunadarma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-3">
              <Link href={'#'} className="flex flex-col justify-center items-center text-center w-screen h-20 bg-[#11111b]">
                <p className={`${poppins.className} text-[#fefdfc] text-2xl font-extrabold`}>SAVE THE DATE!</p>
                <p className={`text-sm ${poppins.className} text-[#fefdfc] opacity-40`}>click here to save the date</p>
              </Link>
            </div>
            <div className="px-5 py-5">
              <AccordionCard
                title="Materi Seminar 1 - How Artificial Intelligence (AI) Works in Society 5.0"
                content={
                  '- Menjelaskan latar belakang Artificial Intelligence (AI).\n- Peranan Artificial Intelligence (AI) di era Society 5.0.\n- Fitur-Fitur dari Artificial Intelligence (AI).\n- Dampak dari Artificial Intelligence (AI) pada pekerjaan manusia.\n- Etika dan keamanan yang terkait dengan penerapan Artificial Intelligence (AI).'
                }
              />
              <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
              <AccordionCard
                title="Materi Seminar 2 - Unveiling Applications and Innovations of Artificial Intelligence (AI)"
                content={
                  '- Perkembangan terbaru dalam Artificial Intelligence (AI).\n- Inovasi Artificial Intelligence (AI) untuk mengatasi masalah tertentu, meningkatkan efisiensi, atau menciptakan nilai baru.\n- Pengaplikasian Artificial Intelligence (AI) di berbagai bidang pekerjaan.\n- Integrasi Artificial Intelligence (AI) dengan teknologi lain (seperti IoT, Big Data, dan Blockchain).\n- Tantangan dan peluang dalam mengembangkan inovasi Artificial Intelligence (AI) di masa depan.'
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
