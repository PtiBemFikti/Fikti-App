"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

interface CandidateModalProps {
  candidate: {
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
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({
  candidate,
  isOpen,
  onClose,
}: CandidateModalProps) {
  // Blokir scroll pada body ketika modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 "
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white z-10 p-6 border-b flex justify-between items-center rounded-xl">
              <h3 className="text-2xl font-bold text-[#19554B]">
                Profil Kandidat
              </h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                aria-label="Close modal"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6">
              {/* Profile Section */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-[#19554B]">
                      {candidate.name}
                    </h3>
                    <p className="text-gray-600">{candidate.position}</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <p>NIM: {candidate.nim}</p>
                      <p>Kelas: {candidate.className}</p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-[#19554B] mb-2">
                      Biografi
                    </h4>
                    <p className="text-gray-700">{candidate.bio}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#19554B] mb-2">
                        Pengalaman Organisasi
                      </h4>
                      <ul className="space-y-2">
                        {candidate.experience.map((exp, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-[#19554B] rounded-full w-2 h-2 mt-2 mr-2"></div>
                            <span className="text-gray-700">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#19554B] mb-2">
                        Pendidikan & Pelatihan
                      </h4>
                      <ul className="space-y-2">
                        {candidate.education.map((edu, index) => (
                          <li key={index} className="flex items-start">
                            <div className="bg-[#19554B] rounded-full w-2 h-2 mt-2 mr-2"></div>
                            <span className="text-gray-700">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision & Mission */}
              <div className="bg-[#f5f3ef] p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-[#19554B] mb-3">
                  Visi
                </h4>
                <p className="text-gray-700 mb-6 italic">
                  `{candidate.vision}`
                </p>

                <h4 className="text-xl font-semibold text-[#19554B] mb-3">
                  Misi
                </h4>
                <ol className="space-y-3 list-decimal list-inside">
                  {candidate.missions.map((mission, index) => (
                    <li key={index} className="text-gray-700 pl-2">
                      {mission}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
