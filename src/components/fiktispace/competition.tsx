import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { AkiraExpanded, Lato } from "@/styles/font";

const competitions = [
  {
    href: "/fiktispace/Competition/Futsal",
    title: "Futsal",
    fontSizeClass: "text-[1.8rem] md:text-[2rem]",
    category: "Sport",
    categoryClass: "bg-[#0A2353]",
  },
  {
    href: "/fiktispace/Competition/Basket",
    title: "Basket",
    fontSizeClass: "text-[1.8rem] md:text-[2rem]",
    category: "Sport",
    categoryClass: "bg-[#0A2353]",
  },
  {
    href: "/fiktispace/Competition/Volley",
    title: "Volley",
    fontSizeClass: "text-[1.8rem] md:text-[2rem]",
    category: "Sport",
    categoryClass: "bg-[#0A2353]",
  },
  // {
  //   href: "/fiktispace/Competition/Billiard",
  //   title: "Billiard",
  //   fontSizeClass: "text-[1.8rem] md:text-[2rem]",
  //   category: "Sport",
  //   categoryClass: "bg-[#0A2353]",
  // },
  {
    href: "/fiktispace/Competition/Badmintonmen",
    title: "Badminton\nMens Double",
    fontSizeClass: "text-[1.15rem] md:text-[1rem]",
    category: "Sport",
    categoryClass: "bg-[#0A2353]",
    leadingSnug: true,
  },
  {
    href: "/fiktispace/Competition/Badmintonwomen",
    title: "Badminton\nWomens Double",
    fontSizeClass: "text-[1.1rem] md:text-[0.95rem]",
    category: "Sport",
    categoryClass: "bg-[#0A2353]",
    leadingSnug: true,
  },
  {
    href: "/fiktispace/Competition/FGT",
    title: "Fikti Got\nTalent",
    fontSizeClass: "text-[1.4rem] md:text-[1.75rem]",
    category: "Art",
    categoryClass: "bg-[#0A2353]",
    leadingNone: true,
  },
  {
    href: "/fiktispace/Competition/Fiktography",
    titleDesktop: "Fikto-\nGraphy",
    titleMobile: "FiktoGraphy",
    fontSizeClass: "text-[1.1rem] md:text-[1.75rem]",
    category: "Art",
    categoryClass: "bg-[#0A2353]",
    leadingNone: true,
  },
  {
    href: "/fiktispace/Competition/Fikpost",
    title: "FikPost",
    fontSizeClass: "text-[1.8rem] md:text-[2.2rem]",
    category: "Art",
    categoryClass: "bg-[#0A2353]",
  },
  {
    href: "/fiktispace/Competition/MobileLegend",
    title: "Mobile\nLegend",
    fontSizeClass: "text-[1.75rem] md:text-[1.75rem]",
    category: "E-sport",
    categoryClass: "bg-[#0A2353]",
    leadingNone: true,
  },
  {
    href: "/fiktispace/Competition/Fifa",
    title: "FC 25\nConsole",
    fontSizeClass: "text-[1.55rem] md:text-[1.75rem]",
    category: "E-sport",
    categoryClass: "bg-[#0A2353]",
    leadingNone: true,
  },
];

export default function CompetitionCards() {
  return (
    <div className="mt-0">
      <div className="pt-[4rem]">
        <div className="text-center">
          <h1
            className={`py-1 text-2xl md:text-[2.5rem] lg:text-[3rem] bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent ${AkiraExpanded.className}`}
          >
            OUR COMPETITION
          </h1>
          <p className={`text-md italic lg:mt-2 text-gray-200 ${Lato.className}`}>
            Unleash Your Potential Skills
          </p>
        </div>

        <div className="flex flex-col px-4 md:px-10 lg:px-40 py-4">
          {/* Sport */}
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:gap-4 mb-5">
            {competitions
              .filter((c) => c.category === "Sport")
              .map((comp, i) => (
                <Link key={i} href={comp.href} className="w-[100%] md:w-[48%] lg:w-[32%]">
                  <motion.div
                    className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                    whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: { duration: 0.5, times: [0, 0.5, 1.05], ease: ["easeInOut", "easeOut"] },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div
                      className={`${AkiraExpanded.className} ${comp.fontSizeClass} text-[#0A2352] text-center ${
                        comp.leadingSnug ? "leading-snug" : comp.leadingNone ? "leading-none" : ""
                      }`}
                    >
                      {comp.title &&
                        comp.title.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </div>
                    <div className={`${Lato.className} flex justify-center`}>
                      <button className={`${comp.categoryClass} text-center w-[60%] md:w-full rounded-lg p-1`}>
                        {comp.category}
                      </button>
                    </div>
                    <div className={`${Lato.className} text-center mt-2`}>Click for learn more</div>
                  </motion.div>
                </Link>
              ))}
          </div>

          {/* Art */}
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-4 rounded-xl justify-center lg:justify-between mb-5">
            {competitions
              .filter((c) => c.category === "Art")
              .map((comp, i) => (
                <Link key={i} href={comp.href} className="w-full md:w-[48%] lg:w-[32%]">
                  <motion.div
                    className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                    whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: { duration: 0.5, times: [0, 0.5, 1.05], ease: ["easeInOut", "easeOut"] },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div
                      className={`${AkiraExpanded.className} ${comp.fontSizeClass} text-[#0A2352] text-center ${
                        comp.leadingNone ? "leading-none" : ""
                      }`}
                    >
                      {comp.titleDesktop && comp.titleMobile ? (
                        <>
                          <span className="hidden md:inline">
                            {comp.titleDesktop.split("\n").map((line, idx) => (
                              <React.Fragment key={idx}>
                                {line}
                                <br />
                              </React.Fragment>
                            ))}
                          </span>
                          <span className="inline md:hidden">{comp.titleMobile}</span>
                        </>
                      ) : (
                        comp.title?.split("\n").map((line, idx) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))
                      )}
                    </div>
                    <div className={`${Lato.className} flex justify-center`}>
                      <button className={`${comp.categoryClass} text-center w-[60%] md:w-full rounded-lg p-1`}>
                        {comp.category}
                      </button>
                    </div>
                    <div className={`${Lato.className} text-center mt-2`}>Click for learn more</div>
                  </motion.div>
                </Link>
              ))}
          </div>

          {/* E-Sport */}
          <div className="flex flex-wrap bg-[#0A2352] bg-opacity-50 p-6 gap-y-6 rounded-xl justify-center md:justify-evenly mb-5">
            {competitions
              .filter((c) => c.category === "E-sport")
              .map((comp, i) => (
                <Link key={i} href={comp.href} className="w-[100%] md:w-[48%] lg:w-[32%]">
                  <motion.div
                    className="flex flex-col bg-gradient-to-b from-[#FECB62] to-[#98783B] py-6 px-4 md:px-8 lg:px-14 rounded-2xl gap-4 w-full"
                    whileHover={{
                      scale: [null, 1.04, 1.08],
                      transition: { duration: 0.5, times: [0, 0.5, 1.05], ease: ["easeInOut", "easeOut"] },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div
                      className={`${AkiraExpanded.className} ${comp.fontSizeClass} text-[#0A2352] text-center leading-none`}
                    >
                      {comp.title &&
                        comp.title.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                    </div>
                    <div className={`${Lato.className} flex justify-center`}>
                      <button className={`${comp.categoryClass} text-center w-[60%] md:w-full rounded-lg p-1`}>
                        {comp.category}
                      </button>
                    </div>
                    <div className={`${Lato.className} text-center mt-2`}>Click for learn more</div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
