"use client";

import { Montserrat, MonumentExtendedBold } from "@/styles/font";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const coreValues = [
  {
    title: "Akrab",
    description: "Hubungan erat dengan mahasiswa FIKTI",
    imageSrc: "/main/akrab.png",
  },
  {
    title: "Advokatif",
    description: "Menyuarakan kebutuhan dan aspirasi mahasiswa FIKTI",
    imageSrc: "/main/adfokatif.png",
  },
  {
    title: "Supportif",
    description: "Saling memberikan dukungan antar mahasiswa FIKTI",
    imageSrc: "/main/supportif.png",
  },
];

export default function CoreValueSection() {
  return (
    <section
      id="core-value"
      className="relative z-10 w-screen bg-cream-fikti text-white py-10 lg:py-20"
    >
      <div className="flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className={`${MonumentExtendedBold.className} relative text-2xl md:text-3xl lg:text-4xl mb-12 font-bold text-center text-dark-green-fikti drop-shadow-lg`}
        >
          Core Value
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[60%] md:w-[80%] bg-dark-green-fikti rounded-md" />
        </motion.h1>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              {/* Image Container */}
              <div className="w-40 h-40 lg:w-60 lg:h-60 flex items-center justify-center border-4 border-dark-green-fikti rounded-full overflow-hidden">
                <Image
                  src={value.imageSrc}
                  alt={`${value.title} logo`}
                  width={200}
                  height={200}
                  className="object-contain w-28 h-28 lg:w-40 lg:h-40"
                />
              </div>

              {/* Title */}
              <h2
                className={`${MonumentExtendedBold.className} text-dark-green-fikti text-xl md:text-2xl font-bold mt-5`}
              >
                {value.title}
              </h2>

              {/* Description */}
              <p
                className={`${Montserrat.className} text-dark-green-fikti text-base md:text-lg font-medium px-2 mt-2`}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
