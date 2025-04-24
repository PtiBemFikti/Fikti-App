"use client";
import { circleAmolens } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BootcampPage() {
  
  const targetDate = new Date("2025-04-25T18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(totalHours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden">
        <div className="pt-16">
            <div className="lg:px-48 md:px-12 w-full">
              <div className={`${circleAmolens.className} mt-4 mb-9 text-center text-black text-3xl font-semibold`}>
              BOOTCAMP KAMI
              </div>

              <div className=" flex items-center justify-center">
                <div className="flex md:gap-12 lg:gap-24 justify-center">
                  {/* versi 2 */}
                  <div className="md:w-1/2 lg:w-[50%] rounded-2xl border-2 border-[#91D2F4] group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
                    <Link href="/filing/DataScience">
                      <div className="">
                        <div className="items-center mb-4">
                          <Image
                            src="/filing/bootcampDS.webp"
                            alt="Data Science"
                            width={400}
                            height={350}
                          />
                        </div>
                        <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3">
                          <i>“Exploring the Data Universe : <br></br>Hands-On Learning for Beginners”</i>
                        </div>
                        <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                        26 April 2025 - 17 Mei 2025
                        </div>
                        <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                          Lihat Detail Program
                        </button>
                      </div>
                    </Link>
                  </div>

                  <div className="md:w-1/2 lg:w-[40%] rounded-2xl border-2 border-[#91D2F4] h-fit p-7 self-center">
                    <div className="-mt-24 -ml-14"><Image src="/filing/extended.png" alt="Data Science" width={140} height={140}/></div>
                    <div className="text-2xl font-bold text-black mb-5 text-center -mt-4">Segera Daftar!</div>
                    <div className="flex justify-center gap-4 text-white">
                      <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                        <div className="text-xl font-bold">{timeLeft.hours}</div>
                        <div className="text-sm">Jam</div>
                      </div>
                      <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                        <div className="text-xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-sm">Menit</div>
                      </div>
                      <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                        <div className="text-xl font-bold">{timeLeft.seconds}</div>
                        <div className="text-sm">Detik</div>
                      </div>
                    </div>  
                  </div>

                </div>
              </div>
            </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="md:hidden mt-8 px-2">
        <div className="flex justify-center items-center p-8">
          <div
            className={`${circleAmolens.className} w-80 text-center tracking-tight text-neutral-800 text-2xl sm:text-3xl font-bold`}
          >
            BOOTCAMP KAMI
          </div>
        </div>

        <div className="flex justify-center items-center pb-2">
          <div className="w-80 rounded-2xl border-2 border-[#91D2F4] group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
            <Link href="/filing/DataScience">
              <div className="">
                <div className="items-center mb-4">
                  <Image
                    src="/filing/bootcampDS.webp"
                    alt="Data Science"
                    className="w-full h-auto"
                    width={400}
                    height={350}
                  />
                </div>
                <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3 leading-relaxed">
                  <i>“Exploring the Data Universe : <br></br>Hands-On Learning for Beginners”</i>
                </div>
                <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                26 April 2025 - 17 Mei 2025
                </div>
                <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                  Lihat Detail Program
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center pb-2">
          <div className="w-80 rounded-2xl border-2 border-[#91D2F4] p-7">
          <div className="-mt-14 -ml-12"><Image src="/filing/extended.png" alt="Data Science" width={125} height={100}/></div>
          <div className="text-2xl font-bold text-black mb-5 text-center -mt-7">Segera Daftar!</div>
            <div className="flex justify-center gap-4 text-white">
              <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                <div className="text-xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm">Jam</div>
              </div>
              <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                <div className="text-xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm">Menit</div>
              </div>
              <div className="bg-gradient-to-b from-[#3F3381] to-[#B07FD6] px-3 py-2 rounded w-1/3 text-center">
                <div className="text-xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm">Detik</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
