"use client";

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

  const renderText = (color: string) => (
    <span
      className={`whitespace-nowrap px-4 font-bold text-2xl md:text-4xl lg:text-5xl ${color}`}
    >
      AYO SERU-SERUAN BARENG
    </span>
  );

  return (
    <div className="w-screen bg-[#071D2B] py-6 overflow-hidden">
      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div ref={contentRef} className="flex whitespace-nowrap">
          {renderText("text-white")}
          {renderText("text-[#BA3037]")}
          {renderText("text-white")}
          {renderText("text-[#BA3037]")}
          {renderText("text-white")}
          {renderText("text-[#BA3037]")}
          {renderText("text-white")}
          {renderText("text-[#BA3037]")}
        </div>
      </div>
    </div>
  );
}
