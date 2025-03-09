"use client";
import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";

interface AccordionCardProps {
  title: string;
}

const Card1: React.FC<AccordionCardProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        duration: 0.3,
        height: isOpen ? 0 : "auto",
        ease: "back.out(1.7)",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow mb-4 text-[#545350]">
      <button className="bg-white border-b-1 border-[#545350] w-full py-2 text-left text-sm font-medium hover:bg-white focus:outline-none" onClick={handleToggle}>
        <div className="flex items-center justify-between">
          <span className="font-Poppins font-semibold text-[#545350] text-[16px] md:text-[30px]">{title}</span>
          <ChevronDownIcon className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "h-auto" : "h-0"}`}>
        <div className="font-Poppins text-[14px] text-[#565655] md:text-[16px] p-4">
          <h2 className="text-black font-bold text-lg">Modul 01 : Data Wrangling and Data Cleaning</h2>
          <p className="font-normal text-base">Pada modul ini, kamu akan belajar tentang pentingnya data wrangling dan pembersihan data dalam proses analisis data. Materi yang akan dipelajari di modul ini mencakup:</p>
          <ul className="list-disc pl-4">
            <li>Pengenalan Data Wrangling & Cleaning</li>
            <li>Menangani Missing Values </li>
            <li>Menangani Outliers</li>
            <li>Data Transformation & Standardization</li>
            <li>Sesi Coding Menggunakan Dataset</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card1;
