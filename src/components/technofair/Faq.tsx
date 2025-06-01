"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Track which item is open

  const faqContent = [
    {
      question: "Kapan dan dimana TechnoFair 12.0 dilaksanakan?",
      answer:
        "TechnoFair 12.0 diselenggarakan mulai 21 Juni 2025 sampai 19 Juli 2025. Untuk acara Seminar dan Workshop diadakan secara Offline di Kampus Universitas Gunadarma dan Kompetisi secara Hybrid.",
    },
    {
      question: "Apakah ada biaya pendaftaran di TechnoFair 12.0?",
      answer:
        "Seminar, Workshop, dan Kompetisi TechnoFair 12.0 memiliki biaya pembayaran.",
    },
    {
      question: "Bagaimana saya mengetahui informasi pemenang dalam kompetisi Technofair 12.0?",
      answer: "Pemenang akan diinformasikan melalui Social Media TechnoFair 12.0 dan media Discord TechnoFair 12.0.",
    },
    {
      question: "Apa saja yang akan didapat pemenang dalam kompetisi?",
      answer: "Pemenang Kompetisi akan mendapatkan uang tunai, sertifikat, dan hadiah menarik lainnya.",
    },
    {
      question: "Bagaimana Cara Mendaftar Event?",
      answer: `1. Masuk atau membuka website dari TechnoFair 12.0. <br />
                2. Pergi atau scroll ke page events atau schedule. <br />
                3. Pilih event apa yang ingin Anda ikuti. <br />
                4. Lalu klik bagian yang bertuliskan &quot;Learn More&quot; jika melalui page events atau arrow yang ada pada page schedule. Maka Anda akan diarahkan ke dalam page detail dari event yang Anda pilih. <br />
                5. Jika sudah berada pada page detail dari event yang Anda pilih, Anda bisa langsung mendaftar pada button &quot;Daftar Sekarang&quot;, tetapi jika Anda masih belum yakin atau ada yang ingin ditanyakan, Anda dapat klik button &quot;Hubungi Kami&quot;.`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };





  return (
    <div className="bg-gradient-to-b from-[#100F21] from-45% via-[#211F47] via-70% to-[#FE8A16]">
      <div className="container mx-auto lg:grid grid-cols-2 content-start lg:h-[700px]  ">
        <div className="h-auto">
          <div className="text-center lg:text-left">
            <h1 className="font-semibold  text-4xl lg:text-[45px] tracking-tight leading-tight lg:leading-normal">Frequently Asked Questions</h1>
            <p className="font-medium pt-3 text-sm lg:text-base lg:pt-0">Everything you need to know about TechnoFair.</p>
          </div>
          <div className="hidden lg:block mt-56">
            <div>
              <h1 className="font-semibold text-[45px] tracking-tight">Contact Us</h1>
              <p className="font-medium">Can&apos;t find what you are looking for? Feel free to ask us.</p>
            </div>
            <div className="flex items-center gap-4 mt-6 max-md:mt-6 max-md:gap-4 max-md:px-5">
              <Link
                href="https://wa.me/628568372700?text=Halo%20kak,%20saya%20ingin%20bertanya%20...%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-base w-[200px] max-md:w-[170px] max-md:text-base font-semibold px-8 max-md:px-6 py-4 max-md:py-3 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
              >
                <FaWhatsapp size={24} />
                Haekal
              </Link>
              <Link
                href="https://wa.me/6281215092180?text=Halo%20kak,%20saya%20ingin%20bertanya%20...%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-base w-[200px] max-md:w-[170px] max-md:text-base font-semibold px-8 max-md:px-6 py-4 max-md:py-3 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
              >
                <FaWhatsapp size={24} />
                Zahra
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t-1 lg:mt-0 lg:border-t-0">
          {faqContent.map((item, index) => (
            <div key={index}>
              <h2>
                <button
                  type="button"
                  className="flex text-left items-center justify-between w-full p-5 font-medium rounded-xl focus:ring-4 focus:ring-gray-800 border-gray-700 text-gray-100 hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-5 border border-gray-700 bg-gray-900">
                  <p className="mb-2 text-gray-300" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden mt-10 pb-4">
            <div className="text-center mx-12">
              <h1 className="font-semibold text-4xl tracking-tight">Contact Us</h1>
              <p className="font-medium text-sm">Can&apos;t find what you are looking for? Feel free to ask us.</p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 max-md:mt-6 max-md:gap-4 max-md:px-5">
              <Link
                href="https://wa.me/628568372700?text=Halo%20kak,%20saya%20ingin%20bertanya%20...%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-base w-[200px] max-md:w-[170px] max-md:text-base font-semibold px-8 max-md:px-6 py-4 max-md:py-3 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
              >
                <FaWhatsapp size={24} />
                Haekal
              </Link>
              <Link
                href="https://wa.me/6281215092180?text=Halo%20kak,%20saya%20ingin%20bertanya%20...%20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white text-base w-[200px] max-md:w-[170px] max-md:text-base font-semibold px-8 max-md:px-6 py-4 max-md:py-3 rounded-full transition-all duration-300 hover:shadow-[0px_0px_10px_2px] hover:shadow-[#10B981]"
              >
                <FaWhatsapp size={24} />
                Zahra
              </Link>
            </div>
          </div>

      </div>
    </div>
  );
}
