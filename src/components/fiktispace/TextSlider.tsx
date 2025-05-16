"use client";
import { AkiraExpanded, MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { Fragment } from "react";

interface FSSlidingTextProps {
  direction?: "left" | "right";
}

export default function FSSlidingText({
  direction = "left",
}: FSSlidingTextProps) {

  const Text = () => (
    <div className="flex items-center">
      <div className="block md:hidden w-12">
        <Image
          src={"/fiktispace/Nebula_polos.png"}
          alt="back"
          width={80}
          height={35}
        ></Image>
      </div>
      <div className="hidden md:block w-2 h-2 bg-white rounded-full mx-3"></div>
      <span className={`${AkiraExpanded.className} flex items-center justify-center whitespace-nowrap px-3 font-semibold text-2xl tracking-wider md:text-3xl lg:text-3xl text bg-gradient-to-r from-[#FECB62] to-white bg-clip-text text-transparent`}>
        FIKTI SPACE 4.0 
      </span>
      <div className="block md:hidden w-12">
        <Image
          src={"/fiktispace/Stella_polos.png"}
          alt="back"
          width={80}
          height={35}
        ></Image>
      </div>
      <div className="hidden md:block w-2 h-2 bg-white rounded-full mx-3"></div>
      <span className={`${MonumentExtendedRegular.className} flex items-center justify-center whitespace-nowrap px-3 font-semibold text-lg tracking-widest md:text-2xl lg:text-2xl text-[#FECB62]`}>
        Fuel the Passion, Embrace the Challenge! 
      </span>
    </div>
  );

  return (
    <div className="w-screen py-6 overflow-hidden select-none bg-[#112C70]">
      <div className="flex">
        <div className={`flex animate-infinite-scroll whitespace-nowrap ${
            direction === "right" ? "reverse-animation" : ""
          }`}
        >
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>{Text()}</Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
