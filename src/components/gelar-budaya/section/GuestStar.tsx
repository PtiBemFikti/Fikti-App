"use client";

import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";
import { FiHelpCircle } from "react-icons/fi"; // Import icon
import { IconContext } from "react-icons";

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

  // Placeholder data
  const guestStars = [1, 2, 3];

  return (
    <section className="w-full flex flex-col items-center my-16 px-6">
      {/* Header */}
      <motion.div variants={item}>
        <h2
          className={`${MonumentExtendedBold.className} text-4xl md:text-5xl font-extrabold text-white mb-10 lg:mb-20 leading-tight`}
        >
          Guest Star
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-10"
      >
        {guestStars.map((_, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-[300px] h-[300px] flex-col lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-[#222] md:hover:-translate-y-5 hover:shadow-lg hover:shadow-[#ECDCC1] transition-all duration-300">
              <IconContext.Provider value={{ size: "6rem", color: "#ECDCC1" }}>
                <FiHelpCircle />
                <h1>Guestt...</h1>
              </IconContext.Provider>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
