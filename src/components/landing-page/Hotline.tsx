import React from "react";
import { FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";

export default function Hotline() {
  const phoneNumber = "";
  const message = "Halo, saya ingin bertanya...";

  return (
    <motion.a
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-0 right-8 md:right-12 z-50 flex items-center justify-between gap-5 pt-3 px-3 lg:px-8 rounded-t-[30px] shadow-lg bg-[#2cd0b0] text-white transition-all duration-300"
    >
      <FaHeadset className="w-6 h-6 lg:w-10 lg:h-10" />
      <div className="flex flex-col items-start justify-start gap-0 space-y-0">
        <p className="text-xs md:text-sm">Hotline FIKTI</p>
        <h1
          className={`${MonumentExtendedBold.className} text-base lg:text-lg tracking-wide`}
        >
          CHAT
        </h1>
        <h1
          className={`${MonumentExtendedBold.className} text-base lg:text-lg tracking-wide`}
        >
          WITH US!
        </h1>
      </div>
    </motion.a>
  );
}
