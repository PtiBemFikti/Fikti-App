import Image from 'next/image';
import AccordionCard from './Accordion';

export default function DataAnalyst() {
  return (
    <div className="bg-gradient-to-t from-[#F7F9FA] to-[#F3E5EA]">
      {/* Tampilan Dekstop start */}
      <div className="md:block hidden">
        <div className="px-40 py-16">
          <div className="flex gap-4">
            <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
            <p className="text-xl font-medium text-[#545350]">Back</p>
          </div>
          <div className="py-3 flex gap-16 font-[Bricolage-Grotesque]">
            <div className="w-1/2">
              <Image src={'/technofair/gambar1.png'} alt="gambar 1" width={461} height={346} />
            </div>
            <div className="w-1/2">
              <div className="">
                <div className="flex gap-2">
                  <p className="text-5xl font-bold text-[#241525]">Data Analyst</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-5">Seminar</p>
                </div>
                <div className="text-[#212427] text-lg italic font-light font-[Poppins]">Visualizing Insights: A Beginner&apos;s Guide to Data Presentation</div>
              </div>
              <div className="text-[#212427] text-xl font-semibold font-[Poppins] py-2">Sabtu, 01 Juni 2024</div>
              <div className="">
                <p className="text-lg font-normal font-[Poppins] text-[#212427]">
                  Dalam seminar ini, Tema utama yang akan dibahas adalah Data Analyst akan mempelajari cara efektif menggunakan visualisasi data dalam berkomunikasi, sehingga dapat menyajikan temuan mereka secara menarik dan mudah
                  dimengerti.
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <div className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]">
                  <p className="text-[#6C6A67] font-[Poppins] text-base font-semibold">Hubungi Kami</p>
                </div>
                <div className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className="text-[#FEFDFC] font-[Poppins] text-base font-semibold">Daftar Sekarang</p>
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
                      <p className="text-[#212427] text-base font-[Poppins]">About Seminar</p>
                    </div>
                    <div className="py-2 flex gap-5">
                      <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                      <p className="text-[#212427] text-base font-[Poppins]">Benefit Seminar</p>
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
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">About Seminar</p>
                  </div>
                  <div className="">
                    <p className="text-[#212427] text-base font-[Poppins] py-5 pl-5">
                      Seminar ini bertujuan untuk mengenalkan konsep dasar visualisasi data kepada peserta, serta memperkenalkan peran seorang Data Analyst dalam menyajikan dan mempresentasikan hasil analisis data secara efektif. Selain
                      itu, seminar ini juga bertujuan untuk membahas teknik dan alat-alat yang dapat digunakan untuk menyajikan informasi secara visual agar lebih mudah dipahami oleh berbagai pemangku kepentingan.
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">Benefit Seminar</p>
                  </div>
                  <div className="pl-5">
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} />
                      <p className="text-[#212427] text-base font-[Poppins]">Mendapat pengetahuan tentang konsep dasar tentang visualisasi data.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui peran dan tanggung jawab sebagai seorang Data Analyst.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mendapat pengetahuan tentang teknik-teknik dan alat yang digunakan dalam visualisasi data.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mengetahui pentingnya visualisasi data dalam sebuah pengambilan keputusan di berbagai bidang.</p>
                    </div>
                    <div className="flex gap-3 py-2">
                      <Image src={'/technofair/ceklis.png'} alt="ceklis" width={24} height={24} className="h-6" />
                      <p className="text-[#212427] text-base font-[Poppins]">Mendapat wawasan tentang potensi karir sebagai seorang Data Analyst di berbagai industri.</p>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className="text-[#31304D] text-xl font-bold font-[Poppins]">Jadwal & Detail Materi Seminar</p>
                  </div>
                  <div className="py-5 flex gap-10">
                    <div className="pl-5 w-3/4">
                      <p className="text-[#212427] text-base font-[Poppins] font-semibold">Pelaksanaan Kelas :</p>
                      <div className="pl-5">
                        <div className="flex font-[Poppins] gap-2">
                          <p className="font-semibold text-[#212427] text-base">Hari, Tanggal </p>
                          <p className="text-[#212427] text-base"><strong>:</strong> Sabtu, 01 Juni 2024</p>
                        </div>
                        <div className="flex font-[Poppins] gap-16">
                          <p className="font-semibold text-[#212427] text-base">Waktu </p>
                          <p className="text-[#212427] text-base"><strong>:</strong> 09.00 - 12.30 WIB</p>
                        </div>
                        <div className="flex font-[Poppins] gap-14">
                          <p className="font-semibold text-[#212427] text-base">Tempat </p>
                          <p className="text-[#212427] text-base"><strong>:</strong> Auditorium D461, Kampus D, {'\n'} Universitas Gunadarma</p>
                        </div>w
                      </div>
                    </div>
                    <div className="w-2/4 pt-14">
                        <div className="w-80 h-20 bg-[#11111B] rounded-[8px] text-center flex flex-col justify-center items-center">
                            <p className="font-[Bricolage-Grotesque] font-extrabold text-2xl text-[#FEFDFC]">SAVE THE DATE</p>
                            <p className="font-[Poppins] text-sm text-[#FEFDFC] opacity-40">click here to save the date</p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="py-5">
                    <AccordionCard title='Materi Seminar 1 - Get to Know the World of Data Analyst' content='- Menjelaskan latar belakang Data Analyst.'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      {/* Tampilan Mobile End */}
    </div>
  );
}
