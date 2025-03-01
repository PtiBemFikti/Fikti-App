"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/technofair/IMGdokum.png",
  "/technofair/IMGdokum.png",
  "/technofair/IMGdokum.png",
  "/technofair/IMGdokum.png",
  "/technofair/IMGdokum.png",
];

export default function DokumSlider() { // <== Nama fungsi harus kapital
  const [currentIndex, setCurrentIndex] = useState(0);

  //timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const normalizedOffset = ((offset % images.length) + images.length) % images.length;

    if (normalizedOffset === 0) return { transform: "translateX(0%) scale(1)", opacity: 1, zIndex: 30 };
    if (normalizedOffset === 1) return { transform: "translateX(50%) scale(0.8)", opacity: 0.5, zIndex: 20 };
    if (normalizedOffset === images.length - 1) return { transform: "translateX(-50%) scale(0.8)", opacity: 0.5, zIndex: 20 };
    return { transform: "translateX(200%) scale(0.5)", opacity: 0, zIndex: 10 };
  };

  return (
    <div className="relative w-full h-[700px] mx-auto overflow-hidden">
      <button onClick={prevSlide} className="absolute left-5 top-1/2 -translate-y-1/2 z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">&larr;</button>
      <button onClick={nextSlide} className="absolute right-5 top-1/2 -translate-y-1/2 z-40 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition">&rarr;</button>

      {images.map((src, index) => (
        <div key={index} className="absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out flex items-center justify-center" style={getSlideStyle(index)}>
          <div className="relative w-[80%] h-[80%]">
            <Image src={src} alt={`Slide ${index}`} fill className="object-cover rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
