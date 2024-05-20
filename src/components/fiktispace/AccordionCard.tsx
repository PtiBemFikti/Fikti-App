"use client";

import React, { useState, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";
import { Urbanist } from "@/styles/font";

interface AccordionCardProps {
  title: string;
  content: React.ReactNode;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, content }) => {
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
    <div
      className={`mb-4 text-[#B4B1AC] ${Urbanist.className} text-sm font-light`}
    >
      <button
        className={`w-full py-2 text-left text-sm ${Urbanist.className} text-[#FEFDFC] rounded-lg`}
        onClick={handleToggle}
      >
        <div className="flex items-end justify-between">
          <span>{title}</span>
          <ChevronRightIcon
            className={`h-6 w-12 transform ${isOpen ? "rotate-90" : ""}`}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="py-4">{content}</div>
      </div>
      <div
        className={`w-80 mt-2 h-px  bg-gradient-to-r from-[#2B8D8F] to-[#1D1564]`}
      ></div>
    </div>
  );
};

export default AccordionCard;
