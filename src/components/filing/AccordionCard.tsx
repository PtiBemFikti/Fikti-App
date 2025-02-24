"use client";

import React, { useState, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { gsap } from "gsap";

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
    <div className="mb-4 text-white font-[Poppins] text-sm font-medium">
      <button
        className="w-full text-left text-lg font-[Poppins] text-white font-bold rounded-lg"
        onClick={handleToggle}
      >
        <div className="flex items-end justify-between">
          <span>{title}</span>
          <ChevronRightIcon
            className={`h-6 w-12 transform ${isOpen ? "rotate-90" : ""}`}
          />
        </div>
        <div
          className={`w-80 mt-2 h-px border border-white border-opacity-10 ${
            isOpen ? "border-opacity-100" : ""
          }`}
        ></div>
      </button>
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="py-4">{content}</div>
      </div>
    </div>
  );
};

export default AccordionCard;
