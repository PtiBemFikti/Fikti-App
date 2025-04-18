"use client";

import { MonumentExtendedBold } from "@/styles/font";
import Image from "next/image";
import LogoSlider from "./LogoSlider";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="py-16 bg-cream-fikti w-screen relative -top-8 rounded-t-[20px] lg:rounded-t-[50px]"
      style={{
        boxShadow: "0 -25px 50px -12px rgba(255, 255, 255, 0.8)",
      }}
    >
      <LogoSlider />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 mt-5">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className={`${MonumentExtendedBold.className} text-3xl lg:text-[5rem] text-dark-green-fikti`}
        >
          Company
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Image
            src="/main/hero-bg.jpg"
            alt="Company Profile"
            width={800}
            height={800}
            className="rounded-xl shadow-md lg:h-[550px] w-auto object-cover aspect-video mx-auto"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className={`${MonumentExtendedBold.className} text-3xl lg:text-[5rem] text-transparent text-right`}
          style={{
            WebkitTextStroke: "2px #012f24",
          }}
        >
          Profile
        </motion.h2>
      </div>
    </section>
  );
}
