import { circleAmolens } from "@/styles/font";
import Image from "next/image";
import Link from "next/link";
export default function BootcampPage() {
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden">
        <div className="pt-20">
            <div className="lg:px-48 md:px-12 w-full">
              <div className={`${circleAmolens.className} mt-4 mb-9 text-center text-black text-3xl font-semibold`}>
                JOIN OUR BOOTCAMPS
              </div>

              <div className=" flex items-center justify-center">
                <div className="flex md:gap-12 lg:gap-44 justify-center">
                  <div className="md:w-1/2 lg:w-2/5 rounded-2xl border-2 border-[#91D2F4]">
                    <Link href="/filing/DataScience">
                      <div className="">
                        <div className="items-center mb-4">
                          <Image
                            src="/filing/bootcamp1.png"
                            alt="Data Science"
                            width={400}
                            height={350}
                          />
                          <div className="ml-6 md:-mt-14 lg:-mt-16 text-white text-2xl lg:text-4xl font-bold">
                            Data Science
                          </div>
                        </div>
                        <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3">
                          <i>“Exploring the Data Universe : <br></br>Hands-On Learning for Beginners”</i>
                        </div>
                        <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                        26 April 2025 - 17 Mei 2025
                        </div>
                        <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                          click to learn more
                        </button>
                      </div>
                    </Link>
                  </div>

                  <div className="md:w-1/2 lg:w-2/5 rounded-2xl border-2 border-[#91D2F4]">
                    <Link href="/filing/CyberSecurity">
                      <div>
                        <div className="items-center mb-4">
                          <Image
                            src="/filing/bootcamp2.png"
                            alt="Cyber Security"
                            width={400}
                            height={350}
                          />
                          <div className="ml-6 md:-mt-14 lg:-mt-16 text-white text-[1.4rem] lg:text-2xl font-bold">
                            Cyber Security
                          </div>
                        </div>
                        <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3">
                        <i>&quot;Empowering Cyber Defenders : <br></br>Training for Real-World Challenges&quot;</i>
                        </div>
                        <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                        27 April 2025 - 18 Mei 2025
                        </div>

                        <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                          click to learn more
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
      <div className="md:hidden mt-8">
        <div className="flex justify-center items-center p-8">
          <div
            className={`${circleAmolens.className} w-80 text-center tracking-tight text-neutral-800 text-2xl sm:text-3xl font-bold`}
          >
            JOIN OUR BOOTCAMPS
          </div>
        </div>

        <div className="flex justify-center items-center pb-2">
          <div className="w-80 rounded-2xl border-2 border-[#91D2F4]">
            <Link href="/filing/DataScience">
              <div className="">
                <div className="items-center mb-4">
                  <Image
                    src="/filing/bootcamp1.png"
                    alt="Data Science"
                    className="w-full h-auto"
                    width={400}
                    height={350}
                  />
                  <div className="ml-6 -mt-16 text-white text-3xl font-bold">
                    Data Science
                  </div>
                </div>
                <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3 leading-relaxed">
                  <i>“Exploring the Data Universe : <br></br>Hands-On Learning for Beginners”</i>
                </div>
                <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                26 April 2025 - 17 Mei 2025
                </div>
                <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                  click to learn more
                </button>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6 py-4">
          <div className="w-80 rounded-2xl border-2 border-[#91D2F4]">
            <Link href="/filing/CyberSecurity">
              <div>
                <div className="items-center mb-4">
                  <Image
                    src="/filing/bootcamp2.png"
                    alt="Cyber Security"
                    className="w-full h-auto"
                    width={400}
                    height={350}
                  />
                  <div className="ml-6 -mt-16 text-white text-2xl font-bold">
                    Cyber Security
                  </div>
                </div>
                <div className="px-5 text-black text-center text-sm font-light font-['Poppins'] mt-10 mb-3 leading-relaxed">
                  <i>&quot;Empowering Cyber Defenders : <br></br>Training for Real-World Challenges&quot;</i>
                </div>
                <div className="px-10 text-black text-center font-semibold font-['Poppins'] mb-5">
                  27 April 2025 - 18 Mei 2025
                </div>
                <button className="w-full mt-4 mb-2 px-1 tracking-tight text-[#3F3381] font-bold font-serif" >
                  click to learn more
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
