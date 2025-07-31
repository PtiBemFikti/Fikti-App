"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CandidateModal from "./CandidateModal";

interface Candidate {
  id: number;
  name: string;
  nim: string;
  className: string;
  position: string;
  image: string;
  vision: string;
  missions: string[];
  bio: string;
  experience: string[];
  education: string[];
}

export default function CandidateSection() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Kandidat 1",
      nim: "",
      className: "3KA",
      position: "Ketua BEM & Wakil Ketua BEM",
      image: "/pemira/background-calon.png",
      vision: "",
      missions: ["", "", ""],
      bio: "",
      experience: ["", "", "", ""],
      education: ["", "", ""],
    },
    {
      id: 2,
      name: "Kandidat 2",
      nim: "",
      className: "3KA",
      position: "Ketua BEM & Wakil Ketua BEM",
      image: "/pemira/background-calon.png",
      vision: "",
      missions: ["", "", ""],
      bio: "",
      experience: ["", "", "", ""],
      education: ["", "", ""],
    },
  ];

  const openModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="kandidat" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#DEDAD1]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#19554B] mb-4">
            Kenali{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#19554B] to-[#0d2e28]">
              Kandidat
            </span>
          </h2>
          <p className="text-lg text-[#19554B] max-w-2xl mx-auto">
            Temukan visi, misi, dan program kerja dari masing-masing kandidat
            PEMIRA 2025
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {candidates.map((candidate) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: candidate.id * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={candidate.image}
                  alt={candidate.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {candidate.name}
                  </h3>
                  <p className="text-[#DEDAD1]">{candidate.position}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h4 className="text-lg font-semibold text-[#19554B] mb-2">
                  Visi
                </h4>
                <p className="text-gray-700 mb-6 line-clamp-2">
                  {candidate.vision}
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={() => openModal(candidate)}
                    className="px-6 py-3 bg-[#19554B] text-white rounded-lg font-medium hover:bg-[#0d2e28] transition-colors"
                  >
                    Lihat Detail Kandidat
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
