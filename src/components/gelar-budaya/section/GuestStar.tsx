"use client";

import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";

export default function PerformersList() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const performers = ["BLACKPINK", "ONE DIRECTION", "COLDPLAY"];

  return (
    <section className="w-full flex flex-col items-center my-16">
      {/* Header */}
      <motion.div variants={item}>
        <h2
          className={`${MonumentExtendedBold.className} text-4xl md:text-5xl font-extrabold text-white m-6 mb-10 leading-tight`}
        >
          Line Up
        </h2>
      </motion.div>

      {/* Performers List */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-20"
      >
        {performers.map((performer, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex items-center justify-center text-center w-[300px] h-[300px] rounded-full border-[20px] border-yellow-400"
          >
            <h3 className="text-xl font-medium">{performer}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
