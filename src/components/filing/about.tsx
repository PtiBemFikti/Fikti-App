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
                APA ITU FILING?{" "}
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
                KENAPA HARUS FILING?{" "}
              </h1>
              <div className="flex-auto lg:flex items-center lg:justify-between mt-10 font-serif justify-items-stretch">
                <div className="mt-4 flex-col items-center inline-flex">
                  <Image
                    src={"/filing/simplicity.png"}
                    alt="simplicity"
                    width={175}
                    height={175}
                  />
                  <h1 className="font-bold text-black text-center text-2xl mt-2">
                    Simple
                  </h1>
                  <p className="w-64 text-center text-black font-medium font-serif">
                  Belajar menggunakan tugas cepat dan sederhana yang hanya membutuhkan beberapa menit.
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
                    Motivasi
                  </h1>
                  <p className="w-64 text-center text-black font-medium font-serif">
                  Mencapai langkah selanjutnya secara teratur dari suatu kursus dengan mendukung sistem motivasi.
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
                    Supportif
                  </h1>
                  <p className="w-64 text-center text-black font-medium font-serif">
                    Kami memberikan dukungan terbaik kepada siswa kami setiap saat & setiap hari.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="mt-16 md:hidden">
        <div className="flex items-center justify-center">
          <div className="mt-8 px-8">
            <h1 className={`${circleAmolens.className} text-center text-black text-3xl font-bold`}>
              APA ITU FILING?
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
            KENAPA HARUS FILING?
          </h1>
          <div className="grid grid-cols-1 gap-10 mt-3 font-serif justify-items-center space-y-6">
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/simplicity.png"}
                alt="simplicity"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Simple</h1>
              <p className="max-w-sm text-center text-black text-base font-medium font-serif">
                Belajar menggunakan tugas cepat dan sederhana yang hanya membutuhkan beberapa menit.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/motivation.png"}
                alt="motivation"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Motivasi</h1>
              <p className="max-w-sm text-center text-black text-base font-medium font-serif">
              Mencapai langkah selanjutnya secara teratur dari suatu kursus dengan mendukung sistem motivasi.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={"/filing/support.png"}
                alt="support"
                width={150}
                height={150}
              />
              <h1 className="font-bold text-black text-2xl mt-2">Supportif</h1>
              <p className="max-w-sm text-center text-black text-base font-medium font-serif">
                Kami memberikan dukungan terbaik kepada siswa kami setiap saat & setiap hari.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}