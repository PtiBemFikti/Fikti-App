"use client";

import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";
import Image from "next/image";

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

  const guestStars = [
    {
      image: "/gelar-budaya/Youth Things _ Pict 1.JPG", // pastiin file ini ada di public/gueststars/
    },
    {
      image: "/gelar-budaya/Youth Things LOGO.png", // pastiin file ini ada di public/gueststars/
    },
    {
      image: "/gelar-budaya/Youth Things _ Pict 2.JPG", // pastiin file ini ada di public/gueststars/
    },
  ];

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
        {guestStars.map((guest, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-lg md:hover:-translate-y-5 hover:shadow-lg hover:shadow-[#ECDCC1] transition-all duration-300">
              <Image
                src={guest.image}
                alt="Youth Things"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
