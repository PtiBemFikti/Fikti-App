'use client';

import React, { useState, useRef } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { gsap } from 'gsap';

interface AccordionCardProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionCardProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (contentRef.current) {
      gsap.to(contentRef.current, {
        duration: 0.3,
        height: isOpen ? 0 : 'auto',
        ease: 'back.out(1.7)',
      });
    }
  };

  return (
    <div className="bg-[#171d37] rounded-3xl mb-4 text-[#b9bcc7] font-[Poppins] text-sm font-light">
      <button
        className="w-full bg-[#171d37] px-4 py-2 text-left text-sm font-[Poppins] text-[#fff4e7] rounded-lg hover:bg-[#1e2749] focus:outline-none focus:ring-2 focus:ring-[#171d37] focus:ring-offset-2 focus:ring-offset-[#1e2749] dark:text-gray-300 dark:hover:bg-[#1e2749] dark:focus:ring-[#171d37]"
        onClick={handleToggle}
      >
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <ChevronDownIcon className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
