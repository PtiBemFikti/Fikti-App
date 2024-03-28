import Image from "next/image";
export default function BootcampPage() {
  return (
    <div className="">
      {/*Dekstop*/}
      <div className="md:block hidden mt-2">
        <div className="py-24">
          <div className="flex justify-between py-4">
            <div className="flex h-full mt-2">
              <Image
                src="/filing/vector1.png"
                alt="vector1"
                width={500}
                height={500}
              />
            </div>
            <div className="px-10 w-full">
              <div className="mt-4 tracking-tight text-center text-black text-3xl font-bold font-[arial]">
                {" "}
                JOIN OUR BOOTCAMPS{" "}
              </div>
              <div className=" flex items-center justify-center">
                <div className="flex">
                  <div className="w-1/2 mt-2 rounded-3xl border-2 border-stone-400">
                    <div className="p-2">
                      <div className="flex mt-4 items-center justify-center">
                        <Image
                          src="/filing/dataanalyst.png"
                          alt="data analyst"
                          width={350}
                          height={350}
                        />
                      </div>
                      <div className="w-28 h-7 mt-4 ml-1 bg-emerald-500 rounded-2xl justify-center items-center flex">
                        <div className="text-center text-white text-sm font-bold">
                          BOOTCAMP
                        </div>
                      </div>
                      <div className="mx-1 mt-1 tracking-tight text-start text-gray-800 text-2xl font-bold font-[arial]">
                        DATA ANALYST
                      </div>
                      <div className="mx-1 text-stone-500 text-sm font-light font-['Poppins']">
                        “Started The Journey as a Data Analyst with Python &
                        Tableau”
                      </div>
                      <div className="w-full ml-1 mt-4 text-neutral-600 text-base font-normal font-['Poppins']">
                        Data Analyst berperan sebagai jembatan antara informasi
                        dan keputusan masa depan, dengan mengolah data dan
                        mencari solusi dari berbagai permasalahan.
                      </div>
                      <button className="w-full mt-4 mx-1 tracking-tight text-stone-400 text-base font-normal font-['Circle-Amolens']">
                        CLICK TO LEARN MORE
                      </button>
                    </div>
                  </div>
                  <div className="w-1/2 mt-2 ml-4 rounded-3xl border-2 border-stone-400">
                    <div className="p-2">
                      <div className="flex mt-4 items-center justify-center">
                        <Image
                          src={"/filing/webdev.png"}
                          alt="webdev"
                          width={350}
                          height={350}
                        />
                      </div>
                      <div className="w-28 h-7 mt-4 ml-1 bg-emerald-500 rounded-2xl justify-center items-center flex">
                        <div className="text-center text-white text-sm font-bold">
                          BOOTCAMP
                        </div>
                      </div>
                      <div className="mx-1 mt-1 tracking-tight text-start text-gray-800 text-2xl font-bold font-[arial]">
                        WEB DEVELOPMENT
                      </div>
                      <div className="mx-1 text-stone-500 text-sm font-light font-['Poppins']">
                        “Create Interactive Websites to Become a Web Developer
                        With HTML, CSS & JS”
                      </div>
                      <div className="w-full ml-1 mt-4 text-neutral-600 text-base font-normal font-['Poppins']">
                        Web Developer, profesi yang sangat dibutuhkan dalam era
                        digitalisasi ini untuk memperkenalkan dan mempromosikan
                        produk/layanan perusahaan.
                      </div>
                      <button className="w-full mt-4 mx-1 tracking-tight text-stone-400 text-base font-normal font-['Circle-Amolens']">
                        CLICK TO LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full mt-2">
              <Image
                src="/filing/vector2.png"
                alt="vector2"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      {/*Mobile*/}
      <div className="md:hidden mt-2">
        <div className="flex justify-center items-center p-8">
          <div className="w-80 text-center tracking-tight text-neutral-800 text-3xl font-bold font-[arial]">
            JOIN OUR BOOTCAMPS
          </div>
        </div>

        <div className="flex justify-center items-center pb-2">
          <div className="w-80 h-auto rounded-3xl border-2 border-stone-400">
            <div className="">
              <div className="flex mt-2 items-center justify-center">
                <Image
                  src={"/filing/dataanalyst.png"}
                  alt="data analyst"
                  width={280}
                  height={280}
                />
              </div>
              <div className="w-24 h-6 ml-4 mt-2 bg-emerald-500 rounded-2xl justify-center items-center flex">
                <div className="text-center text-white text-xs font-bold font-['Poppins']">
                  BOOTCAMP
                </div>
              </div>
              <div className="ml-4 mt-2 text-gray-800 text-2xl tracking-tight font-bold font-['arial']">
                DATA ANALYST
              </div>
              <div className="w-80 px-4 text-stone-500 text-sm font-light font-['Poppins']">
                “Started The Journey as a Data Analyst with Python & Tableau”
              </div>
              <div className="mt-1 w-80 px-4 text-neutral-600 text-sm font-normal font-['Poppins']">
                Data Analyst berperan sebagai jembatan antara informasi dan
                keputusan masa depan, dengan mengolah data dan mencari solusi
                dari berbagai permasalahan.
              </div>
              <button className="w-full mt-8 mb-4 text-center text-stone-400 text-sm font-bold font-['Circle-Amolens']">
                CLICK TO LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center py-4">
          <div className="w-80 h-auto rounded-3xl border-2 border-stone-400">
            <div className="">
              <div className="flex mt-2 items-center justify-center">
                <Image
                  src={"/filing/webdev.png"}
                  alt="webdev"
                  width={280}
                  height={280}
                />
              </div>
              <div className="w-24 h-6 ml-4 mt-2 bg-emerald-500 rounded-2xl justify-center items-center flex">
                <div className="text-center text-white text-xs font-bold font-['Poppins']">
                  BOOTCAMP
                </div>
              </div>
              <div className="ml-4 mt-2 text-gray-800 text-2xl tracking-tight font-bold font-['arial']">
                WEB DEVELOPMENT
              </div>
              <div className="w-80 px-4 text-stone-500 text-sm font-light font-['Poppins']">
                “Create Interactive Websites to Become a Web Developer With
                HTML, CSS & JS”
              </div>
              <div className="mt-1 w-80 px-4 text-neutral-600 text-sm font-normal font-['Poppins']">
                Web Developer, profesi yang sangat dibutuhkan dalam era
                digitalisasi ini untuk memperkenalkan dan mempromosikan
                produk/layanan perusahaan.
              </div>
              <button className="w-full mt-8 mb-4 text-center text-stone-400 text-sm font-bold font-['Circle-Amolens']">
                CLICK TO LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
