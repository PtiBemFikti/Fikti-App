"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function PemiraFooter() {
  return (
    <footer className="bg-[#DEDAD1] py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="w-full mx-auto bg-[#19554B] text-[#DEDAD1] py-8 px-4 sm:py-12 sm:px-6 lg:px-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              PEMIRA FIKTI UG 2025
            </h3>
            <p className="italic text-base md:text-lg">
              Suarakan Aspirasi, Perkuat Demokrasi, Majukan FIKTI
            </p>
            <p className="text-sm md:text-base">
              PEMIRA FIKTI UG adalah wadah demokrasi mahasiswa untuk memilih
              pemimpin yang akan membawa perubahan positif bagi Fakultas Ilmu
              Komputer dan Teknologi Informasi.
            </p>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl md:text-2xl font-semibold">Sosial Media</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://instagram.com/Pemira_fiktiug"
                  target="_blank"
                  className="hover:text-white transition-colors flex items-center gap-2 text-base md:text-lg"
                >
                  <FaInstagram className="text-xl" />
                  @Pemira_fiktiug
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-white transition-colors flex items-center gap-2 text-base md:text-lg"
                >
                  <FaInstagram className="text-xl" />
                  @RefleksiPEMIRA25
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl md:text-2xl font-semibold">
              Contact Person
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 text-base md:text-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  CP1
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition-colors flex items-center gap-2 text-base md:text-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  CP2
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 pt-6 border-t border-[#DEDAD1]/20 text-center text-sm md:text-base"
        >
          <p>Copyright © 2025 - By Biro PTI</p>
        </motion.div>
      </div>
    </footer>
  );
}
