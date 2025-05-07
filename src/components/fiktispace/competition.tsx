import Link from "next/link";
import { Lato, AkiraExpanded, } from "@/styles/font";
import Image from "next/image";

export default function CompetitionPage() {
  return (
    <div>
      <div className="pt-[5rem] lg:pt-[7.5rem]">
        <div className="text-center">
          <h1 className={`text-2xl md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            COMPETITION LIST
          </h1>
          <p className={`text-md italic lg:mt-2 text-gray-200 ${Lato.className}`}>
            Unleash Your Potential Skills
          </p>
        </div>
        <div className="flex flex-col px-4 md:px-10 lg:px-40 py-4">
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:justify-between mb-5">

            <Link href={'/fiktispace/Competition/Futsal'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Futsal
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

            <Link href={'/fiktispace/Competition/Basket'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Basket
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

            <Link href={'/fiktispace/Competition/Volley'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Volley
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

            <Link href={'/fiktispace/Competition/Billiard'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.6rem] md:text-[1.875rem] text-center`}>
                  Billiard
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

            <Link href={'/fiktispace/Competition/Badmintonmen'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.15rem] md:text-[1rem] leading-snug text-center`}>
                  Badminton <br />Mens Double
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

            <Link href={'/fiktispace/Competition/Badmintonwomen'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.1rem] md:text-[0.95rem] leading-snug text-center`}>
                  Badminton <br />Womens Double
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

          </div>
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center lg:justify-between md:gap-3 lg:gap-0 mb-5">
            <Link href={'/fiktispace/Competition/FGT'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.75rem] leading-none text-center`}>
                  Fikti Got <br /> Talent
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>
            <Link href={'/fiktispace/Competition/Fiktography'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.7rem] md:text-[1.75rem] leading-none text-center`}>
                  Fikto-<br />Graphy
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>
            <Link href={'/fiktispace/Competition/Fikpost'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  FikPost
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>

          </div>
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:justify-evenly mb-5">
            <Link href={'/fiktispace/Competition/MobileLegend'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.975rem] md:text-[1.75rem] leading-none text-center`}>
                  Mobile <br />Legend
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">E-sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>
            <Link href={'/fiktispace/Competition/Fifa'} className="md:w-[48%] lg:w-[32%]">
              <div className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-8 lg:px-14 rounded-2xl gap-4 w-full group transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.04]">
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.75rem] leading-none text-center`}>
                  FC <br />Console
                </div>
                <div className={`${Lato.className}`}>
                  <button className="bg-[#0A2353] text-center w-full rounded-lg p-1">E-sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* maskot */}
        <div className="hidden justify-between lg:flex lg:-mt-60 ">
            <div className="">
              <Image
                src={"/fiktispace/Nebula_polos.png"}
                alt="back"
                width={300}
                height={35}
              ></Image>
            </div>
            <div className="">
            <Image
                src={"/fiktispace/Stella_polos.png"}
                alt="back"
                width={300}
                height={35}
              ></Image>
            </div>
          </div>
      </div>
    </div>
  );
}
