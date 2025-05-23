"use client";

import { MonumentExtendedBold } from "@/styles/font";
import { motion } from "framer-motion";
import { useState } from "react";

export default function GelbudFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah terbuka untuk umum?",
      answer:
        "Hanya terbuka untuk mahasiswa Fakultas Ilmu Komputer & Teknologi Informasi Universitas Gunadarma.",
    },
    {
      question: "Apakah perlu mendaftar sebelum datang? ",
      answer:
        "Peserta atau penonton dapat melakukan pendaftaran di tempat (on the spot)",
    },
    {
      question: "Apakah saya bisa ikut berpartisipasi sebagai pengisi acara?",
      answer:
        "Pastinya, bagi teman-teman yang ingin berpartisipasi mengisi acara dengan penampilan dapat mendaftarkan diri melalui section Pendaftaran Peserta.",
    },
    {
      question: "Di mana saya bisa mendapatkan informasi lebih lanjut?",
      answer:
        "Informasi lengkap dan terbaru dapat diakses melalui instagram @gelar.budayafikti atau melalui kontak yang tersedia.",
    },
    {
      question: "Apakah tersedia merchandise atau suvenir acara?",
      answer:
        "Ya, tersedia merchandise yang bisa di dapatkan pada saat pembelian ticket.",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-12 md:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* Title */}
          <motion.h2
            variants={item}
            className={`${MonumentExtendedBold.className} text-3xl md:text-4xl font-bold mb-4 text-center text-black`}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-dark-green-fikti mb-12 text-center"
          >
            Everything you need to know about Gelar Budaya.
          </motion.p>

          {/* FAQ Items */}
          <motion.div variants={container} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={item}
                className="border border-dark-green-fikti/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 md:p-6 text-left focus:outline-none"
                >
                  <span className="text-lg md:text-xl font-medium text-dark-green-fikti">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    className="ml-4 text-dark-green-fikti"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="px-4 md:px-6 overflow-hidden"
                >
                  <div className="pb-4 md:pb-6 text-dark-green-fikti/80">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
