"use client";

import { motion } from "framer-motion";
import { Montserrat, MonumentExtendedBold } from "@/styles/font";
import aboutImg from "../../../../public/about.jpeg";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-10 w-screen h-fit text-cream-fikti bg-cream-fikti"
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative w-full h-[25rem] md:h-[30rem] flex items-center justify-center bg-cover bg-center mb-8 md:mb-12 overflow-hidden"
          style={{ backgroundImage: `url(${aboutImg.src})` }}
        >
          <div className="absolute inset-0 bg-dark-green-fikti/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream-fikti via-cream-fikti/10 to-transparent" />

          {/* Animasi dimulai dari sini */}
          <motion.div
            className="flex flex-col justify-center items-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            <motion.h1
              variants={fadeUpVariants}
              className={`${MonumentExtendedBold.className} relative text-2xl md:text-6xl font-bold text-center drop-shadow-lg mb-5`}
            >
              Tentang Kami
            </motion.h1>

            <motion.h2
              variants={fadeUpVariants}
              className={`${Montserrat.className} text-base text-white md:text-xl font-bold text-center mb-8 md:mb-12 max-w-3xl drop-shadow-lg`}
            >
              Kami berkomitmen untuk menghubungkan aspirasi, mendorong inovasi,
              dan menciptakan perubahan positif untuk FIKTI UG.
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
