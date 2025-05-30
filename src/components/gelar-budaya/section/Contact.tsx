"use client";

import { motion } from "framer-motion";
import { MonumentExtendedBold } from "@/styles/font";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function GelbudContactUsSection() {
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

  const contacts = [
    {
      name: "Hanny",
      whatsapp: "081334162060",
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
    },
    {
      name: "Agni",
      whatsapp: "085770871470",
      icon: <FaWhatsapp className="text-3xl text-green-500" />,
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="flex flex-col items-center"
        >
          <motion.h2
            variants={item}
            className={`${MonumentExtendedBold.className} text-3xl md:text-4xl font-bold mb-4 text-center`}
          >
            Contact Us
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-center max-w-2xl mb-12"
          >
            Can`t find what you are looking for? Feel free to ask us.
          </motion.p>

          <motion.div
            variants={container}
            className="flex items-center justify-center gap-8"
          >
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 font-bold rounded-full transition"
              >
                <FaWhatsapp className="mr-2" />
                {contact.name}
              </a>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Our Social Media</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                target="_blank"
                href="https://www.instagram.com/gelar.budayafikti/?utm_source=ig_web_button_share_sheet"
                className="p-3 bg-cream-fikti/10 hover:bg-cream-fikti/20 rounded-full transition"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
