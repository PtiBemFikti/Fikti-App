"use client";

import { MonumentExtendedRegular } from "@/styles/font";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function GelbudSlidingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Duplikasi konten untuk efek infinite yang mulus
    content.innerHTML += content.innerHTML;

    const animate = () => {
      if (content.offsetWidth > container.scrollLeft + container.offsetWidth) {
        container.scrollLeft += 1;
      } else {
        container.scrollLeft = 0;
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
        className="flex overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div ref={contentRef} className="flex whitespace-nowrap">
          {renderText()}
          {renderText()}
          {renderText()}
          {renderText()}
        </div>
      </div>
    </div>
  );
}
