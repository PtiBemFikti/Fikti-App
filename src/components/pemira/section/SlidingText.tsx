"use client";

import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { Fragment } from "react";

interface PemiraSlidingTextProps {
  theme?: "light" | "dark";
  direction?: "left" | "right";
}

export default function PemiraSlidingText({
  theme = "dark",
  direction = "left",
}: PemiraSlidingTextProps) {
  // Simplified color scheme using only the two specified colors
  const bgColor = theme === "light" ? "#DEDAD1" : "#19554B";
  const textColor = theme === "light" ? "#19554B" : "#DEDAD1";

  const renderText = () => (
    <span
      className={`${MonumentExtendedRegular.className} flex items-center justify-center whitespace-nowrap  px-5 font-bold text-xl tracking-wider md:text-2xl lg:text-3xl`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      #FIKTIBersuara
      <Image
        src="/pemira/logo-pemira-adiraka.png"
        alt="logo pemira adiraka"
        width={48}
        height={48}
        className="w-8 h-8 md:w-12 md:h-12 mr-2 ml-1 md:mr-5 md:ml-4 rounded-full"
        priority
      />
    </span>
  );

  return (
    <div
      className="w-screen py-6 overflow-hidden group absolute bottom-5 -rotate-2"
      style={{ backgroundColor: bgColor }}
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
        {/* Duplicate for seamless infinite scroll */}
        <div
          className={`flex animate-infinite-scroll whitespace-nowrap ${
            direction === "right" ? "reverse-animation" : ""
          }`}
          aria-hidden="true"
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
