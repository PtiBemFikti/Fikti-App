"use client";

import { Montserrat, MonumentExtendedBold } from "@/styles/font";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function CoreValueSection() {
  return (
    <section
      id="core-value"
      className="relative z-10 pb-20 w-screen h-fit bg-cream-fikti text-white max-md:py-10"
    >
      <div className="flex flex-col items-center justify-center px-6">
        {/* Title */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUpVariant}
          className={`${MonumentExtendedBold.className} relative text-2xl md:text-[2rem] mb-20 font-bold text-center text-dark-green-fikti drop-shadow-lg`}
        >
          Core Value
          <span className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 h-1 w-[80%] bg-dark-green-fikti rounded-md" />
        </motion.h1>

        {/* Core Values Container */}
        <div className="w-[80%] flex justify-between items-center gap-8 max-md:flex-col max-md:w-full max-md:gap-12">
          {[
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
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex w-[300px] h-[600px]  rounded-full flex-col justify-start items-center text-center text-dark-green-fikti max-md:w-[200px] max-md:h-[400px]"
            >
              {/* Image Container */}
              <div className="w-[300px] h-[300px] flex items-center justify-center border-4 border-dark-green-fikti rounded-full max-md:w-[200px] max-md:h-[200px]">
                <Image
                  src={value.imageSrc}
                  alt={`${value.title} logo`}
                  width={200}
                  height={200}
                  className="max-md:w-[130px] max-md:h-[130px] w-[200px] h-[200px]"
                />
              </div>

              {/* Title */}
              <h2
                className={`${MonumentExtendedBold.className} text-dark-green-fikti text-2xl font-bold my-5 max-md:text-xl`}
              >
                {value.title}
              </h2>

              {/* Description */}
              <p
                className={`${Montserrat.className} text-dark-green-fikti text-xl font-semibold px-5 max-md:text-sm`}
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
