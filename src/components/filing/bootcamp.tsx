import { circleAmolens } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
export default function BootcampPage() {
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
                <div className="flex md:gap-12 lg:gap-44 justify-center">
                  <div className="md:w-1/2 lg:w-2/5 rounded-2xl border-2 border-[#91D2F4] group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
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

                  <div className="md:w-1/2 lg:w-2/5 rounded-2xl border-2 border-[#91D2F4] group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
                    <Link href="/filing/CyberSecurity">
                      <div>
                        <div className="items-center mb-4">
                          <Image
                            src="/filing/bootcamp2.webp"
                            alt="Cyber Security"
                            width={400}
                            height={350}
                          />
                        </div>
                        <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3">
                        <i>&quot;Empowering Cyber Defenders : <br></br>Training for Real-World Challenges&quot;</i>
                        </div>
                        <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                        To Be Announced
                        </div>

                        <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                          Lihat Detail Program
                        </button>
                      </div>
                    </Link>
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
          <div className="w-80 rounded-2xl border-2 border-[#91D2F4] group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
            <Link href="/filing/CyberSecurity">
              <div>
                <div className="items-center mb-4">
                  <Image
                    src="/filing/bootcamp2.webp"
                    alt="Cyber Security"
                    className="w-full h-auto"
                    width={400}
                    height={350}
                  />
                </div>
                <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3 leading-relaxed">
                  <i>&quot;Empowering Cyber Defenders : <br></br>Training for Real-World Challenges&quot;</i>
                </div>
                <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                  To Be Announced
                </div>
                <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                  Lihat Detail Program
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
