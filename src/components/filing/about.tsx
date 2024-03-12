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
            <p className="text-[#241525] text-center">FIKTI Learning adalah program workshop online yang dirancang khusus untuk mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan, kamu akan dibimbing oleh mentor berpengalaman untuk mengembangkan minat dan bakat di bidang teknologi informasi.</p>
          </div>
        </div>


      </div>
      {/* Tampilan Mobile End */}

      {/* Tampilan Dekstop Start */}
        <div className="md:block hidden flex-col">
      <div className="flex gap-5 justify-center mt-24 mb-6 px-40 w-full text-4xl tracking-tighter font-bold text-black">
        <div className="flex-auto ml-10">What is FILING?</div>
        <div className='flex-auto text-4xl font-bold justify-center'> & </div>
        <div className="flex-auto justify-end ml-20 font-bold text-neutral-800">
          WHY YOU SHOULD JOIN FILING?
        </div>
      </div>
      <div className="flex-auto justify-center px-40 mt-8 w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-96">
            <div className="text-xl w-96 ml-10 text-stone-500">
              <span className="font-semibold text-stone-500">
                FIKTI Learning
              </span>
              <span className="font-medium text-stone-500">
                {" "}
                adalah program workshop online yang dirancang khusus untuk
                mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan,
                kamu akan dibimbing oleh mentor berpengalaman untuk
                mengembangkan minat dan bakat di bidang teknologi informasi.
              </span>
            </div>
          </div>
          <div className="w-full justify-center items-start gap-12 flex">
                <div className="w-96 flex-col justify-start items-end gap-1 inline-flex">
                    <Image src={'/filing/simplicity.png'} alt='simplicity' width={100} height={100} />
                         <div className="flex-col w-48 h-60 justify-start items-center flex">
                            <div className="self-stretch flex-col font-bold text-right text-neutral-800 text-2xl ">Simplicity</div>
                        <div className="flex-col text-right text-stone-400 text-base font-medium">Learn using quick and simple task requiring only a few minutes</div>
            </div>
        </div>
         <div className="w-48 flex-col justify-start items-end gap-1 inline-flex">
            <Image src={'/filing/motivation.png'} alt='motivation' width={100} height={100} />
                <div className="self-stretch w-48 h-60 flex-col justify-start items-center flex">
                    <div className="self-stretch font-bold text-right text-neutral-800 text-2xl">Motivation</div>
                        <div className="self-stretch text-right text-stone-400 text-base font-medium">Achieve regular next steps of a course by supporting the motivation system.</div>
            </div>
        </div>
        <div className="w-48 flex-col justify-start items-end gap-1 inline-flex">
            <Image src={'/filing/support.png'} alt='support' width={100} height={100} />
                <div className="self-stretch w-48 h-60 flex-col justify-start items-center flex">
                    <div className="self-stretch font-bold text-right text-neutral-800 text-2xl">Supporting</div>
                        <div className="self-stretch text-right text-stone-400 text-base font-medium">We give our students best support always & all time per day</div>
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
