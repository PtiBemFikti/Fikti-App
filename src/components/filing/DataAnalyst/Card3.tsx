"use client";
import React, { useState, useRef } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";

interface AccordionCardProps {
  title: string;
}

const Card3: React.FC<AccordionCardProps> = ({ title }) => {
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
    <div className="bg-white rounded-lg shadow mb-4 text-slate-600 px-3">
      <button className="bg-white border-b-1 border-black w-full px-4 py-2 text-left text-sm font-medium hover:bg-white focus:outline-none dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 " onClick={handleToggle}>
        <div className="flex items-center justify-between">
          <span className="font-Poppins font-semibold text-[16px] md:text-[30px]">{title}</span>
          <ChevronDownIcon className={`h-5 w-5 transform ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "h-auto" : "h-0"}`}>
        <div className="font-Poppins text-[14px] md:text-[16px] p-4">
          <ul className="list-disc">
            <li>Data Visualization</li>
            <ul className="list-disc pl-6">
              <li>Intro to Data Visualization</li>
              <li>Prinsip - prinsip dalam Data Visualization</li>
              <li>Melakukan proses mengeksplorasi dan mengenal data (Explanatory Analysis)</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card3;
