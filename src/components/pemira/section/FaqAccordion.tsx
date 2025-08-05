"use client";

import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { ReactNode } from "react";
import FaqImages, { FaqImage } from "./FaqImages";

export type FaqItem = {
  id: number;
  question: string;
  answer: string | ReactNode;
  hasImages?: boolean;
  images?: FaqImage[];
};

export default function FaqAccordion({
  faq,
  isOpen,
  toggleOpen,
}: {
  faq: FaqItem;
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${
        isOpen ? "border-[#19554B]" : "border-transparent"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-[#19554B]/10 transition-colors"
      >
        <h3 className="text-xl font-semibold text-[#19554B]">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          <IoIosArrowForward className="text-[#19554B]" />
        </motion.div>
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={`p-6 pt-0 ${faq.hasImages ? "bg-gray-50" : ""}`}>
          {typeof faq.answer === "string" ? (
            <p className="text-[#19554B]">{faq.answer}</p>
          ) : (
            <div>
              {faq.answer}
              {faq.hasImages && faq.images && <FaqImages images={faq.images} />}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
