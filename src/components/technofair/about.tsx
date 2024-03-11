import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="">
      {/* Tampilan Mobile Start */}
      <div className="mt-2 md:hidden">
        <div className="flex justify-center items-center">
          <div className="bg-[#241525] px-7 py-4 rounded-[14px]">
            <h1 className="text-3xl text-[#FFE8CE] font-bold">What Is TechnoFair ?</h1>
          </div>
        </div>
        <div className="px-8">
          <div className="my-3">
            <p className="text-[#241525] text-center">Wadah bagi mahasiswa FIKTI Universitas Gunadarma untuk belajar berinovasi dan menciptakan masa depan melalui teknologi.</p>
          </div>
          <div className="my-3">
            <p className="text-[#241525] text-center">Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema "Realizing the dynamic technological transformation through collaborative innovation in FutureTech".</p>
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
      </div>
      {/* Tampilan Mobile End */}

      {/* Tampilan Dekstop Start */}
      <div className="mt-2 md:block hidden">
        <div className="flex items-center justify-center px-32 gap-10">
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
                <p className="text-lg text-[#241525] mx-20">Lewat webinar, kompetisi, dan workshop, TechnoFair mengupas tuntas tema "Realizing the dynamic technological transformation through collaborative innovation in FutureTech".</p>
              </div>
            </div>
          </div>
          <div className="bg-[#EEEFF3] w-1/2 h-96 border-[2px] rounded-[35px]">
            <div className="flex">
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
        </div>
      </div>
      {/* Tampilan Dekstop End */}
    </div>
  );
}
