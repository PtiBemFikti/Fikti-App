/* eslint-disable react/no-unescaped-entities */
import { circleAmolens } from "@/styles/font";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="">
      {/* Desktop */}
      <div className="md:block hidden pt-20">
        <div className="flex items-center justify-center px-12 lg:px-28">
          <div className="w-full ml-10">

            <div className="justify-center items-center">
              <h1
                className={`${circleAmolens.className} text-black font-bold text-3xl`}
              >
                {" "}
                WHAT IS FILING?{" "}
              </h1>
              <p className="text-xl text-left mt-10 text-black font-serif">
                  <span className="font-extrabold">FIKTI Learning</span> adalah program <span className="font-extrabold">bootcamp</span> online yang dirancang khusus untuk mahasiswa FIKTI UG. <br></br>Dalam <span className="font-extrabold">4 kali</span> pertemuan selama satu bulan, kamu akan dibimbing oleh mentor berpengalaman untuk mengembangkan minat dan bakat di bidang teknologi informasi.
              </p>
            </div>

            <div className="mt-10 justify-center items-center">
              <h1
                className={`${circleAmolens.className} text-3xl text-black font-bold`}
              >
                {" "}
                WHY YOU SHOULD JOIN FILING?{" "}
              </h1>
              <div className="flex-auto lg:flex items-center gap-10 lg:gap-3 lg:justify-between mt-10 font-serif justify-items-stretch">
                <div className="mt-4 flex-col items-center inline-flex">
                  <Image
                    src={"/filing/simplicity.png"}
                    alt="simplicity"
                    width={175}
                    height={175}
                  />
                  <h1 className="font-bold text-black text-center text-2xl mt-2">
                    Simplicity
                  </h1>
                  <p className="w-52 text-center text-black font-medium font-serif">
                    Learn using quick and simple task requiring only a few minutes
                  </p>
                </div>
                <div className="mt-4 flex-col items-center inline-flex">
                  <Image
                    src={"/filing/motivation.png"}
                    alt="motivation"
                    width={175}
                    height={175}
                  />
                  <h1 className="font-bold text-black text-center text-2xl mt-2">
                    Motivation
                  </h1>
                  <p className="w-52 text-center text-black font-medium font-serif">
                    Achieve regular next steps of a course by supporting the motivation system.
                  </p>
                </div>
                <div className="mt-4 flex-col items-center inline-flex ">
                  <Image
                    src={"/filing/support.png"}
                    alt="support"
                    width={175}
                    height={175}
                  />
                  <h1 className="font-bold text-black text-center text-2xl mt-2">
                    Supporting
                  </h1>
                  <p className="w-52 text-center text-black font-medium font-serif">
                    We give our students best support always & all time per day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="mt-2 md:hidden">
        <div className="flex items-center justify-center">
          <div className="my-8 px-8">
            <h1
              className={`${circleAmolens.className} text-center text-black text-3xl font-bold`}
            >
              WHAT IS FILING?
            </h1>
            <p className="text-black font-normal mt-6 font-serif text-lg">
              <span className="font-extrabold">FIKTI Learning</span> adalah program <span className="font-extrabold">bootcamp</span> online yang dirancang khusus untuk mahasiswa FIKTI UG.<br /> <br /> Dalam <span className="font-extrabold">4 kali</span> pertemuan selama satu bulan, kamu akan dibimbing  oleh mentor berpengalaman untuk mengembangkan minat dan bakat di bidang  teknologi informasi.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-8">
          <h1
            className={`${circleAmolens.className} text-center text-black text-3xl font-bold mb-4`}
          >
            WHY YOU SHOULD JOIN FILING?
          </h1>
          <div className="grid grid-cols-1 gap-10 mt-3 font-serif">
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/simplicity.png"}
                alt="simplicity"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Simplicity</h1>
              <p className="w-40 text-center text-black text-base font-medium font-serif">
                Learn using quick and simple task requiring only a few minutes
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/motivation.png"}
                alt="motivation"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Motivation</h1>
              <p className="w-40 text-center text-black text-base font-medium font-serif">
                Achieve regular next steps of a course by supporting the motivation system.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/support.png"}
                alt="support"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Supporting</h1>
              <p className="w-40 text-center text-black text-base font-medium font-serif">
                We give our students best support always & all time per day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}