"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";

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

const areas = [
  {
    title: "Panggung Budaya",
    desc: "Pembukaan, penutupan, dan pertunjukan utama",
  },
  {
    title: "Panggung Budaya",
    desc: "Pembukaan, penutupan, dan pertunjukan utama",
  },
  {
    title: "Panggung Budaya",
    desc: "Pembukaan, penutupan, dan pertunjukan utama",
  },
  {
    title: "Panggung Budaya",
    desc: "Pembukaan, penutupan, dan pertunjukan utama",
  },
];

export default function GelbudDenahGedung() {
  return (
    <section className="bg-black py-16 h-fit md:h-[75vh] px-4 flex flex-col justify-center items-center">
      <h2
        className={`${MonumentExtendedBold.className} text-center text-4xl md:text-5xl font-extrabold mb-16`}
      >
        Denah Gedung
      </h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-start justify-between p-8 border rounded-xl"
      >
        {/* Gambar Denah */}
        <motion.div variants={item}>
          <Image
            src="/gelar-budaya/denah-gedung.jpg"
            alt="Denah Gedung"
            width={800}
            height={800}
            className="rounded-2xl w-full h-auto"
          />
        </motion.div>

        {/* Area Acara */}
        <motion.div variants={item} className="text-white ">
          <div className="space-y-6 ">
            {areas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-yellow-400 text-xl">★</div>
                <div>
                  <h3 className="font-semibold text-lg">{area.title}</h3>
                  <p className="text-sm text-gray-300">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
