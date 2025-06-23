"use client";

import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";
import { FaTicketAlt } from "react-icons/fa";
import Link from "next/link";

export default function GelbudTicketSection() {
  const tickets = [
    {
      title: "Single",
      benefits: "Pin Button + Stiker",
      note: "1 orang",
      price: "Rp35.000",
    },
    {
      title: "Duo",
      benefits: "Pin Button + Stiker (2 pax)",
      note: "2 orang",
      price: "Rp65.000",
    },
    {
      title: "Grup Kecil",
      benefits: "Pin Button + Stiker (4 pax)",
      note: "4 orang",
      price: "Rp120.000",
    },
    {
      title: "Grup Besar",
      benefits: "Pin Button + Stiker (6 pax)",
      note: "6 orang",
      price: "Rp175.000",
    },
  ];

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black text-white  px-6 h-fit py-20 md:py-10 md:h-fit flex items-center justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Title Section */}
          <motion.h2
            variants={item}
            className={`${MonumentExtendedBold.className} text-3xl md:text-5xl font-bold mb-4`}
          >
            Harga Tiket
          </motion.h2>
          <motion.p
            variants={item}
            className="text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl mx-auto"
          >
            Pilih paket yang sesuai kebutuhan kamu, makin rame makin hemat!
            Semua tiket sudah termasuk berbagai benefit menarik
          </motion.p>

          {/* Ticket Cards */}
          <motion.div
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {tickets.map((ticket, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="bg-[#14142f] rounded-3xl px-6 py-10 md:py-12  shadow-lg flex flex-col justify-between hover:shadow-white transition-all duration-200"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="uppercase text-sm text-gray-400 tracking-wider">
                    {ticket.title}
                  </span>
                  <h3 className="text-2xl font-bold text-white text-center">
                    {ticket.benefits}
                  </h3>
                  <p className="text-sm text-gray-400">{ticket.note}</p>

                  <div className="border-t border-gray-600 my-6 w-full" />

                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-3">Starts from</p>
                    <h1 className="text-4xl font-extrabold text-white">
                      {ticket.price}
                    </h1>
                  </div>
                </div>

                <Link
                  href="https://bit.ly/RegistrasiPesertaGelarBudaya2025"
                  className="mt-8 bg-yellow-400 text-black font-semibold px-5 py-3 rounded-full hover:bg-yellow-300 hover:scale-105 transition w-full"
                >
                  <FaTicketAlt className="inline mr-2" /> Beli Tiket
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
