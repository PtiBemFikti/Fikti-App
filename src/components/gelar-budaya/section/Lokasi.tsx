"use client";

import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";

export default function GelbudLokasi() {
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

  return (
    <section
      id="lokasi"
      className="w-full px-4 py-10 lg:px-8 bg-white text-black"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="flex flex-col items-center"
      >
        <motion.h2
          variants={item}
          className={`${MonumentExtendedBold.className} text-3xl md:text-4xl font-bold mb-8 text-center`}
        >
          Lokasi Acara
        </motion.h2>

        {/* MAP */}
        <motion.div
          variants={item}
          className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.24591120477!2d106.68943191649035!3d-6.229728070672834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d160204a25%3A0x3027a76e352be20!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1714404000000!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* KETERANGAN */}
        <motion.div variants={item} className="mt-6 text-center max-w-2xl">
          <h3 className="text-2xl font-semibold mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptatibus amet perspiciatis ab, temporibus dignissimos itaque a
            nam alias dolore, reiciendis voluptatum explicabo cupiditate enim
            sint at similique facere illum?
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
