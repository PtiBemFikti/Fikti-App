/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="">
      {/* Tampilan Mobile Start */}
      <div className="mt-2 md:hidden">
        <div id='about' className="flex justify-center items-center">
          <div className="bg-[#241525] px-7 py-4 rounded-[14px]">
            <h1 className="text-3xl text-[#FFE8CE] font-bold">What Is TechnoFair ?</h1>
          </div>
        </div>
        <div className="px-8">
          <div className="my-3">
            <p className="text-[#241525] text-center">Wadah bagi mahasiswa FIKTI Universitas Gunadarma untuk belajar berinovasi dan menciptakan masa depan melalui teknologi.</p>
          </div>
          <div className="my-3">
            <p className="text-[#241525] text-center">Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema &quot;Realizing the dynamic technological transformation through collaborative innovation in FutureTech.&quot;</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="py-3 w-80 h-72 bg-[#EEEFF3] border-[2px] rounded-[14px] flex">
            <div className="w-1/2">
              <div className="ml-2">
                <h2 className="text-[#B9BCC7] text-lg">MASCOT</h2>
                <h1 className="text-[#241525] font-bold text-xl">MEET ZENITH!</h1>
              </div>
              <div className="mt-2 ml-2">
                <Image src={'/technofair/maskot-tf-01.png'} alt="maskot 01" width={200} height={193} />
              </div>
            </div>
            <div className="w-1/2 mr-2">
              <p className="text-[#241525] text-end text-[12px] mt-20">
                Nama <strong>Zenith</strong> dipilih karena melambangkan puncak, titik tertinggi dalam suatu pencapaian. Hal ini merepresentasikan tujuan TechnoFair untuk mencapai puncak pengetahuan dan wawasan dalam bidang teknologi.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center py-6 gap-4 bg-gradient-to-t from-[#251425] to-white">
          <div className="bg-[#241525] w-80 h-14 text-center rounded-[14px] z-10">
            <p className="text-3xl text-[#ffe8ce] font-bold my-2">TechnoFair, In 4 Points</p>
          </div>
          <div className="bg-[#E9E9EDCC] w-80 h-28 rounded-[28px] border-[2px] border-[#DCDCDF80] z-10">
            <p className="text-[#251425] text-center p-3 text-sm">
              <strong>Mencetuskan Kreativitas di Era Digital.</strong> Memicu ide-ide inovatif dari mahasiswa Universitas Gunadarma untuk menjawab tantangan era digital.
            </p>
          </div>
          <div className="bg-[#e9e9edcc] w-80 h-40 rounded-[28px] border-[2px] border-[#dcdcdf80] z-10">
            <div className="p-5">
              <p className="text-center text-[#241525] text-sm">
                <strong>Memperkuat Skillset.</strong> Menyediakan wadah pembelajaran untuk menghadapi era digital.
              </p>
            </div>
            <div className="flex justify-center items-center gap-7">
              <Image src={'/technofair/monitor-1.png'} alt="montitor 1" width={50} height={50} />
              <Image src={'/technofair/monitor-2.png'} alt="montitor 1" width={50} height={50} />
              <Image src={'/technofair/monitor-3.png'} alt="montitor 1" width={50} height={50} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image src={'/technofair/ladies-1.png'} alt="ladies" width={390} height={851} className="absolute w-full object-cover overflow-hidden mt-44" />
          </div>
          <div className="bg-[#e9e9edcc] w-80 h-48 rounded-[28px] border-[2px] border-[#dcdcdf80] z-10 -mt-4">
            <div className="p-5 mt-1">
              <p className="text-[#241525] text-center text-sm">
                <strong>Membuka Wawasan Teknologi.</strong> Memberikan edukasi tentang perkembangan teknologi digital terkini.
              </p>
            </div>
            <div className="px-7">
              <Image src={'/technofair/job.png'} alt="jobs" width={306} height={76} />
            </div>
          </div>
          <div className="bg-[#e9e9edcc] w-80 h-64 rounded-[28px] border-[2px] border-[#dcdcdf80] z-10">
            <div className="p-3">
              <p className="text-[#241525] text-center text-sm">
                <strong>Memperkuat Identitas Kampus IT.</strong> Menegaskan Universitas Gunadarma sebagai pelopor pendidikan teknologi informasi di Indonesia.
              </p>
            </div>
            <div className="p-2 mx-11">
              <Image src={'/technofair/peoples.png'} alt="peoples" width={202} height={134} />
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}

      {/* Tampilan Dekstop Start */}
      <div className="mt-2 md:block hidden">
        <div id='about' className="flex items-center justify-center px-32 gap-10">
          <div className="bg-[#E9E9ED] w-1/2 h-96 border-[2px] rounded-[35px]">
            <div className="">
              <div className="flex justify-center items-center my-6">
                <div className="w-96 h-20 bg-[#241525] flex justify-center items-center rounded-3xl">
                  <h1 className="font-bold text-[#FFE8CE] text-4xl">What is TechnoFair ?</h1>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg text-[#241525] mx-20">Wadah bagi mahasiswa FIKTI Universitas Gunadarma untuk belajar berinovasi dan menciptakan masa depan melalui teknologi.</p>
              </div>
              <div className="text-center mt-5">
                <p className="text-lg text-[#241525] mx-20">
                  Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema &quot;Realizing the dynamic technological transformation through collaborative innovation in FutureTech.&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#EEEFF3] w-1/2 h-96 border-[2px] rounded-[35px]">
            <div className="flex">
              <div className="w-1/2 ml-4 my-6">
                <div className="ml-2">
                  <h2 className="text-[#B9BCC7] text-xl">MASCOT</h2>
                  <h1 className="text-[#241525] font-bold text-3xl">MEET ZENITH!</h1>
                </div>
                <div className="mt-4 ml-2">
                  <Image src={'/technofair/maskot-tf-01.png'} alt="maskot 01" width={200} height={193} />
                </div>
              </div>
              <div className="w-1/2 mr-6">
                <p className="text-[#241525] text-end text-lg mt-20">
                  Nama <strong>Zenith</strong> dipilih karena melambangkan puncak, titik tertinggi dalam suatu pencapaian. Hal ini merepresentasikan tujuan TechnoFair untuk mencapai puncak pengetahuan dan wawasan dalam bidang teknologi.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-7">
          <div className="bg-[#E9E9ED] w-10/12 h-[791px] rounded-[49px] border-[2px] flex flex-col">
            <div className="flex gap-5">
              <div className="p-5 ml-3">
                <Image src={'/technofair/astronaut.png'} alt="astronaut" width={481} height={467} className="rounded-[28px]" />
              </div>
              <div className="p-5 flex flex-col">
                <div className="bg-[#241525] w-[581px] h-24 rounded-[28px]">
                  <h1 className="text-center font-bold text-[#FFE8CE] text-5xl my-5">TechnoFair, in 4 Points</h1>
                </div>
                <div className="bg-[#DDDFE4] w-[581px] h-40 rounded-[28px] border-[2px] border-[#DCDCDF] my-4">
                  <p className="text-center text-[#241525] text-2xl p-6">
                    <strong>Mencetuskan Kreativitas di Era Digital.</strong> Memicu ide-ide inovatif dari mahasiswa Universitas Gunadarma untuk menjawab tantangan era digital.
                  </p>
                </div>
                <div className="bg-[#DDDFE4] w-[581px] h-44 rounded-[28px] border[2px] border-[#DCDCDF]">
                  <div className="text-center p-4">
                    <p className="text-[#241525] text-2xl">
                      <strong>Memperkuat Skillset.</strong> Menyediakan wadah pembelajaran untuk menghadapi era digital.
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-9">
                    <Image src={'/technofair/monitor-1.png'} alt="montitor 1" width={60} height={60} />
                    <Image src={'/technofair/monitor-2.png'} alt="montitor 1" width={60} height={60} />
                    <Image src={'/technofair/monitor-3.png'} alt="montitor 1" width={60} height={60} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="bg-[#DDDFE4] w-96 h-64 rounded-[28px] border-[#DCDCDF] border-[2px] mx-7">
                <div className="text-center">
                  <p className="text-[#241525] text-xl p-6">
                    <strong>Membuka Wawasan Teknologi.</strong> Memberikan edukasi tentang perkembangan teknologi digital terkini.
                  </p>
                </div>
                <div className="px-7">
                  <Image src={'/technofair/job.png'} alt="jobs" width={318} height={69} />
                </div>
              </div>
              <div className="bg-[#DDDFE4] w-3/4 mr-7 rounded-[28px] border-[2px] border-[#DCDCDF] flex justify-center items-center">
                <div className="text-center w-1/2 ml-8">
                  <p className="text-[#241525] text-2xl">
                    <strong>Memperkuat Identitas Kampus IT.</strong> Menegaskan Universitas Gunadarma sebagai pelopor pendidikan teknologi informasi di Indonesia.
                  </p>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                  <Image src={'/technofair/peoples.png'} alt="peoples" width={288} height={196} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}
    </div>
  );
}
