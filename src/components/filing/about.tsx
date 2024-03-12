/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="">
      {/* Tampilan Mobile Start */}
      <div className="mt-2 md:hidden">
        <div className="flex justify-center items-center">
          <div className="bg-[#241525] px-7 py-4 rounded-[14px]">
            <h1 className="text-3x1 text-[#FFE8CE] font-bold">WHAT IS FILING?</h1>
          </div>
        </div>
        <div className="px-8">
          <div className="my-3">
            <p className="text-[#241525] text-center">
              FIKTI Learning adalah program workshop online yang dirancang khusus untuk mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan, kamu akan dibimbing oleh mentor berpengalaman untuk mengembangkan minat dan bakat di
              bidang teknologi informasi.
            </p>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}

      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden mt-2">
        <div className="flex gap-24 items-center justify-center p-10">
          <div className="flex p-10">
            <div className="w-1/3 justify-center items-center ">
              <h1 className="text-black font-bold text-3xl ml-10 font-[Circle-Amolens]"> WHAT IS FILING? </h1>
              <p className="text-xl w-96 text-justify mx-10 mt-10 text-[#6C6A67]">
                <span className="font-semibold text-[#6C6A67]">FIKTI Learning</span>
                <span className="font-medium text-[#6C6A67]">
                  {' '}
                  adalah program workshop online yang dirancang khusus untuk mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan, kamu akan dibimbing oleh mentor berpengalaman untuk mengembangkan minat dan bakat di bidang teknologi
                  informasi.
                </span>
              </p>
            </div>
            <div className="px-16">
              <div className="text-3xl text-black font-bold font-[Circle-Amolens]"> & </div>
            </div>
            <div className="px-16">
              <div className="text-3xl ml-20 text-black font-bold font-[Circle-Amolens]"> WHY YOU SHOULD JOIN FILING? </div>
              <div className="flex w-2/3 justify-start items-center gap-8 ml-4">
                <div className="mt-4 ml-4 flex-col items-end inline-flex">
                  <Image src={'/filing/simplicity.png'} alt="simplicity" width={100} height={100} />
                  <h1 className="font-bold text-black text-right text-2xl">Simplicity</h1>
                  <p className="w-40 text-right text-[#6C6A67] text-base font-medium">Learn using quick and simple task requiring only a few minutes</p>
                </div>

                <div className="mt-4 flex-col items-end inline-flex">
                  <Image src={'/filing/motivation.png'} alt="motivation" width={100} height={100} />
                  <h1 className="font-bold text-black text-right text-2xl">Motivation</h1>
                  <p className="w-40 text-right text-[#6C6A67] text-base font-medium">Achieve regular next steps of a course by supporting the motivation system.</p>
                </div>
                <div className="mt-4 flex-col items-end inline-flex">
                  <Image src={'/filing/support.png'} alt="support" width={100} height={100} />
                  <h1 className="font-bold text-black text-right text-2xl">Supporting</h1>
                  <p className="w-40 text-right text-[#6C6A67] text-base font-medium">We give our students best support always & all time per day</p>
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
