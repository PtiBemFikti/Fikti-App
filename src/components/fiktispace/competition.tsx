import Link from "next/link";
import { Lato, AkiraExpanded, } from "@/styles/font";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CompetitionPage() {
  return (
    <div className="mt-0">
      <div className="pt-[4rem]">
        <div className="text-center">
          <h1 className={`py-1 text-2xl md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}>
            OUR COMPETITION
          </h1>
          <p className={`text-md italic lg:mt-2 text-gray-200 ${Lato.className}`}>
            Unleash Your Potential Skills
          </p>
        </div>
        <div className="flex flex-col px-4 md:px-10 lg:px-40 py-4">
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:gap-4 mb-5">

            <Link href={'/fiktispace/Competition/Futsal'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Futsal
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

            <Link href={'/fiktispace/Competition/Basket'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Basket
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

            <Link href={'/fiktispace/Competition/Volley'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  Volley
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

            {/* <Link href={'/fiktispace/Competition/Billiard'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.6rem] md:text-[1.875rem] text-center`}>
                  Billiard
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link> */}

            <Link href={'/fiktispace/Competition/Badmintonmen'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.15rem] md:text-[1rem] leading-snug text-center`}>
                  Badminton <br />Mens Double
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

            <Link href={'/fiktispace/Competition/Badmintonwomen'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.1rem] md:text-[0.95rem] leading-snug text-center`}>
                  Badminton <br />Womens Double
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

          </div>
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center lg:justify-between md:gap-3 lg:gap-0 mb-5">
            <Link href={'/fiktispace/Competition/FGT'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.4rem] md:text-[1.75rem] leading-none text-center`}>
                  Fikti Got <br /> Talent
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>
            <Link href={'/fiktispace/Competition/Fiktography'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1rem] md:text-[1.7rem] leading-none text-center`}>
                  <span className="hidden md:inline">Fikto-Graphy</span>
                  <span className="inline md:hidden">FiktoGraphy</span>
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>
            <Link href={'/fiktispace/Competition/Fikpost'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.8rem] md:text-[2rem] text-center`}>
                  FikPost
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">Art</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>

          </div>
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:justify-evenly mb-5">
            <Link href={'/fiktispace/Competition/MobileLegend'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.975rem] md:text-[1.75rem] leading-none text-center`}>
                  Mobile <br />Legend
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">E-Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
            </Link>
            <Link href={'/fiktispace/Competition/Fifa'} className="w-[100%] md:w-[48%] lg:w-[32%]">
              <motion.div
                  className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                  whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: {
                          duration: 0.5,
                          times: [0, 0.5, 1.05],
                          ease: ["easeInOut", "easeOut"],
                      },
                  }}
                  transition={{
                      duration: 0.3,
                      ease: "easeOut",
                  }}
              >
                <div className={`${AkiraExpanded.className} text-[#0A2352] text-[1.65rem] md:text-[1.75rem] leading-none text-center`}>
                  FC 25<br />Console
                </div>
                <div className={`${Lato.className} flex justify-center`}>
                  <button className="bg-[#0A2353] text-center w-[60%] md:w-full rounded-lg p-1">E-Sport</button>
                </div>
                <div className={`${Lato.className} hover:underline text-center mt-2`}>
                  learn more
                </div>
              </motion.div>
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
