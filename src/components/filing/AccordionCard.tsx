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
    <div className="mb-4 text-[#B4B1AC] font-[Poppins] text-sm font-light">
      <button
        className="w-full py-2 text-left text-sm font-[Poppins] text-[#FEFDFC] rounded-lg"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <ChevronRightIcon
            className={`h-5 w-5 transform ${isOpen ? "rotate-90" : ""}`}
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
    </div>
  );
};

export default AccordionCard;
