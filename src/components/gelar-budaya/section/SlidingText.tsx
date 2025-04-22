"use client";

import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function GelbudSlidingText() {
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

      if (distance >= content.scrollWidth / 2) {
        startTimestamp = timestamp;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = distance;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const renderText = () => (
    <span
      className={`${MonumentExtendedRegular.className} flex items-center justify-center whitespace-nowrap px-5 font-bold text-xl tracking-wider md:text-2xl lg:text-3xl text-white`}
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
    <div className="w-screen bg-black py-6 overflow-hidden">
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
