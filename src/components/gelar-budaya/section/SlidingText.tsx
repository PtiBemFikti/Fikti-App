"use client";

import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { Fragment } from "react";

interface GelbudSlidingTextProps {
  bgColor?: string;
  textColor?: string;
  theme?: "light" | "dark";
  direction?: "left" | "right";
}

export default function GelbudSlidingText({
  bgColor,
  textColor,
  theme,
  direction = "left",
}: GelbudSlidingTextProps) {
  const finalBgColor =
    bgColor ||
    (theme === "light" ? "white" : theme === "dark" ? "black" : "black");
  const finalTextColor =
    textColor ||
    (theme === "light" ? "black" : theme === "dark" ? "white" : "white");

  const renderText = () => (
    <span
      className={`${MonumentExtendedRegular.className} flex items-center justify-center whitespace-nowrap px-5 font-bold text-xl tracking-wider md:text-2xl lg:text-3xl`}
      style={{ color: finalTextColor }}
    >
      RISE THE RHYTHM
      <Image
        src="/gelar-budaya/logo-gelar-budaya-nobg.png"
        alt="logo gelar budaya"
        width={48}
        height={48}
        className="w-8 h-8 md:w-12 md:h-12 mr-2 ml-1 md:mr-5 md:ml-4"
        priority
      />
    </span>
  );

  return (
    <div
      className="w-screen py-6 overflow-hidden group"
      style={{ backgroundColor: finalBgColor }}
    >
      <div className="flex">
        <div
          className={`flex animate-infinite-scroll whitespace-nowrap ${
            direction === "right" ? "reverse-animation" : ""
          }`}
        >
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Fragment key={i}>{renderText()}</Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}
