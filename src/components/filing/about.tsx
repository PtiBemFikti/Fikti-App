/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="">
      {/*Mobile*/}
      <div className="mt-2 md:hidden">
        <div className="flex items-center justify-center">
          <div className="my-8 px-8">
            <h1 className="text-center text-black  text-3xl font-bold font-[arial]">
              WHAT IS FILING?
            </h1>
            <p className="text-[#6C6A67] font-semibold mt-6">
              FIKTI Learning
              <span className="text-[#6C6A67] text-base font-medium">
                {" "}
                adalah program workshop online yang dirancang khusus untuk
                mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan,
                kamu akan dibimbing oleh mentor berpengalaman untuk
                mengembangkan minat dan bakat di bidang teknologi informasi.
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center p-8">
          <div className="my-8">
            <div className="text-center text-black text-3xl font-bold font-[arial]">
              WHY YOU SHOULD JOIN FILING?
            </div>
            <div className="justify-center items-start gap-5 inline-flex">
              <div className="flex-col justify-center items-center inline-flex mt-8">
                <Image
                  src={"/filing/simplicity.png"}
                  alt="simplicity"
                  width={80}
                  height={80}
                />
                <h1 className="font-bold text-black text-2xl">Simplicity</h1>
                <p className="w-40 text-center text-[#6C6A67] text-base font-medium">
                  Learn using quick and simple task requiring only a few minutes
                </p>
              </div>

              <div className="flex-col justify-center items-center inline-flex mt-8">
                <Image
                  src={"/filing/motivation.png"}
                  alt="motivation"
                  width={80}
                  height={80}
                />
                <h1 className="font-bold text-black text-2xl">Motivation</h1>
                <p className="w-40 text-center text-[#6C6A67] text-base font-medium ">
                  Achieve regular next steps of a course by supporting the
                  motivation system.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex-col justify-center items-center inline-flex mt-8">
                <Image
                  src={"/filing/support.png"}
                  alt="support"
                  width={80}
                  height={80}
                />
                <h1 className="font-bold text-black text-2xl">Supporting</h1>
                <p className="w-40 text-center text-[#6C6A67] text-base font-medium">
                  We give our students best support always & all time per day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dekstop*/}
      <div className="md:block hidden mt-2">
        <div className="flex items-center justify-center p-28">
          <div className="flex p-10">
            <div className="w-1/3 justify-center items-center ">
              <h1 className="text-black font-bold text-3xl ml-10 font-[arial]">
                {" "}
                WHAT IS FILING?{" "}
              </h1>
              <p className="text-xl w-96 text-left mx-10 mt-10 text-[#6C6A67]">
                <span className="font-semibold text-[#6C6A67]">
                  FIKTI Learning
                </span>
                <span className="font-medium text-[#6C6A67]">
                  {" "}
                  adalah program workshop online yang dirancang khusus untuk
                  mahasiswa FIKTI UG. Dalam 4 kali pertemuan selama satu bulan,
                  kamu akan dibimbing oleh mentor berpengalaman untuk
                  mengembangkan minat dan bakat di bidang teknologi informasi.
                </span>
              </p>
            </div>
            <div className="px-12">
              <div className="text-3xl text-black font-bold font-[arial]">
                {" "}
                &{" "}
              </div>
            </div>
            <div className="px-2">
              <h1 className="text-3xl ml-20 text-black font-bold font-[arial]">
                {" "}
                WHY YOU SHOULD JOIN FILING?{" "}
              </h1>
              <div className="flex w-2/3 justify-start items-center gap-8 ml-4">
                <div className="mt-4 ml-4 flex-col items-end inline-flex">
                  <Image
                    src={"/filing/simplicity.png"}
                    alt="simplicity"
                    width={100}
                    height={100}
                  />
                  <h1 className="font-bold text-black text-right text-2xl">
                    Simplicity
                  </h1>
                  <p className="w-40 text-right text-[#6C6A67] text-base font-medium">
                    Learn using quick and simple task requiring only a few
                    minutes
                  </p>
                </div>

                <div className="mt-4 flex-col items-end inline-flex">
                  <Image
                    src={"/filing/motivation.png"}
                    alt="motivation"
                    width={100}
                    height={100}
                  />
                  <h1 className="font-bold text-black text-right text-2xl">
                    Motivation
                  </h1>
                  <p className="w-48 text-right text-[#6C6A67] text-base font-medium">
                    Achieve regular next steps of a course by supporting the
                    motivation system.
                  </p>
                </div>
                <div className="mt-4 flex-col items-end inline-flex">
                  <Image
                    src={"/filing/support.png"}
                    alt="support"
                    width={100}
                    height={100}
                  />
                  <h1 className="font-bold text-black text-right text-2xl">
                    Supporting
                  </h1>
                  <p className="w-40 text-right text-[#6C6A67] text-base font-medium">
                    We give our students best support always & all time per day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
