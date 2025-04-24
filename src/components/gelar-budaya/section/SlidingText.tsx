"use client";

import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const speed = 50; // pixel per second

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    content.innerHTML += content.innerHTML; 

    let startTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      const distance = (elapsed / 1000) * speed;
      const scrollDistance = direction === "right" ? distance : -distance;

      const contentWidth = content.scrollWidth / 2;

      container.scrollLeft =
        ((scrollDistance % contentWidth) + contentWidth) % contentWidth;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction]);

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
      RISE THE RYTHMS
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
      className="w-screen py-6 overflow-hidden"
      style={{ backgroundColor: finalBgColor }}
    >
      <div
        ref={containerRef}
        className="flex overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        <div ref={contentRef} className="flex whitespace-nowrap">
          {renderText()}
          {renderText()}
        </div>
      </div>
    </div>
  );
}
