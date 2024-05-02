'use client';

import React, { useState, useRef, Children } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { gsap } from 'gsap';

interface AccordionCardProps {
  title: string;
  content: React.ReactNode;
}

const AccordionCard: React.FC<AccordionCardProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const formatContent = typeof content === 'string' ? content.replace(/\n/g, '<br>') : content;

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
    <div className="bg-[#F7F9FA] rounded-3xl mb-4 text-[#212427] font-[Poppins] text-sm md:text-base font-light">
      <button
        className="bg-[#F7F9FA] w-full px-4 py-2 text-left text-xs md:text-base font-medium italic font-[Poppins] text-[#212427] rounded-lg hover:bg-[#FEFDFC] focus:outline-none focus:ring-2 focus:ring-[#1E2749] focus:ring-offset-2 focus:ring-offset-gray-100 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-[#1E27490]"
        onClick={handleToggle}
      >
        <div className="grid grid-flow-col items-center justify-between">
          <span>{title}</span>
          <ChevronDownIcon className={`h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div ref={contentRef} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'h-auto' : 'h-0'}`}>
        <div className="p-4">
          <ul>
            {/* {content.map((item, index) => {
              <li key={index}>
                {item}
              </li>
            })} */}
            <li dangerouslySetInnerHTML={{ __html: formatContent || "" }}></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
