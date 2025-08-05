"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FaqAccordion, { FaqItem } from "./FaqAccordion";

export default function PemiraFaqSection() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DADED1] text-[#19554B]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FAQ Pemira 2025
          </h2>
          <p className="text-xl text-[#19554B]">
            Pertanyaan yang sering diajukan tentang Pemira BEM
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <FaqAccordion
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              toggleOpen={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Apa itu Pemira BEM?",
    answer:
      "Pemira BEM (Pemilihan Raya Badan Eksekutif Mahasiswa) adalah proses demokratis untuk memilih Ketua dan Wakil Ketua BEM di lingkungan kampus.",
  },
  {
    id: 2,
    question: "Apa saja syarat untuk memilih dalam Pemira?",
    answer:
      "Pemilih adalah mahasiswa aktif yang memiliki NPM, sudah melakukan verifikasi data, dan belum menggunakan hak pilih.",
  },
  {
    id: 3,
    question: "Kapan waktu pelaksanaan Pemira?",
    answer:
      "Tanggal dan waktu pelaksanaan akan diumumkan secara resmi melalui media kampus dan website ini. Harap cek secara berkala.",
  },
  {
    id: 4,
    question: "Dimana saya bisa melihat profil calon Ketua BEM?",
    answer:
      "Profil lengkap masing-masing calon, termasuk visi, misi, dan program kerja, tersedia di menu “Profil Kandidat” pada website ini.",
  },
  {
    id: 5,
    question:
      "Apakah Pemira mengakses data pribadi seperti password atau nilai dari VClass?",
    answer:
      "Tidak. Pemira tidak mengambil data sensitif seperti kata sandi atau nilai akademik dari VClass. Data yang diambil hanya terbatas pada NPM, jurusan, dan kelas untuk keperluan verifikasi pemilih.",
  },
  {
    id: 6,
    question: "Bagaimana cara Login menggunakan V-Class?",
    answer: (
      <div>
        <p className="mb-4">
          Proses login menggunakan akun V-Class Gunadarma dilakukan melalui
          website resmi Pemira. Berikut adalah langkah-langkah lengkap untuk
          login:
        </p>
      </div>
    ),
    hasImages: true,
    images: [
      {
        src: "/pemira/faq/login-step1.png",
        alt: "Langkah 1 - Tombol Login",
        caption:
          "1. Klik tombol 'Masuk dengan V-Class' yang berada di pojok kanan atas halaman",
      },
      {
        src: "/pemira/faq/login-step2.png",
        alt: "Langkah 2 - Konfirmasi Fakultas",
        caption:
          "2. Muncul pop-up konfirmasi untuk memverifikasi bahwa Anda mahasiswa Fakultas Ilmu Komputer dan Teknologi Informasi (FIKTI)",
      },
      {
        src: "/pemira/faq/login-step3.png",
        alt: "Langkah 3 - Form Login",
        caption:
          "3. Masukkan username dan password akun V-Class Gunadarma Anda",
      },
      {
        src: "/pemira/faq/login-step4.png",
        alt: "Langkah 4 - Validasi Data",
        caption:
          "4. Setelah login berhasil, validasi data diri Anda dan pastikan semua informasi benar",
      },
      {
        src: "/pemira/faq/login-step5.png",
        alt: "Langkah 5 - Konfirmasi Lanjut",
        caption:
          "5. Klik 'Oke Lanjutkan' untuk masuk ke halaman profil pemilih",
      },
      {
        src: "/pemira/faq/login-step6.png",
        alt: "Langkah 6 - Berhasil Login",
        caption:
          "6. Anda akan diarahkan ke halaman profil sebagai tanda login berhasil",
      },
    ],
  },
];
