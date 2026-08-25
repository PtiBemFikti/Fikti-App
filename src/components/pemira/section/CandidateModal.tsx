"use client";

import { CandidatePair } from "@/types/pemira";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import { useEffect } from "react";

const fallbackImage = "/pemira/background-calon.png";

interface CandidateModalProps {
  candidate: CandidatePair;
  electionName: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function CandidateModal({
  candidate,
  electionName,
  isOpen,
  onClose,
}: CandidateModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="candidate-modal-title"
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="sticky top-0 bg-white z-10 p-5 sm:p-6 border-b flex justify-between items-center">
              <div>
                <p className="text-sm text-[#AA83C2] font-semibold">{electionName}</p>
                <h3 id="candidate-modal-title" className="text-2xl font-bold text-[#19554B]">
                  Profil Paslon {candidate.ballotNumber}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AA83C2]"
                aria-label="Tutup detail kandidat"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            <div className="overflow-y-auto p-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <PersonDetail person={candidate.chairman} role="Ketua" />
                <PersonDetail person={candidate.viceChairman} role="Wakil Ketua" />
              </div>

              <div className="space-y-6">
                {candidate.vision && (
                  <DetailSection title="Visi">
                    <p className="text-gray-700 italic">{candidate.vision}</p>
                  </DetailSection>
                )}
                <ListDetailSection title="Misi" items={candidate.missions} />
                <ListDetailSection title="Target / Impian" items={candidate.targets} />
                <ListDetailSection title="Program Unggulan" items={candidate.flagshipPrograms} />
                <ListDetailSection title="Program Inovasi" items={candidate.innovationPrograms} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PersonDetail({
  person,
  role,
}: {
  person: CandidatePair["chairman"];
  role: string;
}) {
  return (
    <div className="rounded-xl bg-[#F5F3EF] p-5">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 shrink-0 rounded-full overflow-hidden border-4 border-[#19554B]">
          <Image
            src={person.image || fallbackImage}
            alt={person.name || `Foto ${role}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-[#AA83C2]">{role}</p>
          <h4 className="text-lg font-bold text-[#19554B]">
            {person.name || "Nama belum tersedia"}
          </h4>
        </div>
      </div>
      <dl className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">NPM</dt>
          <dd className="font-medium text-gray-700 text-right">{person.npm || "Belum tersedia"}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Kelas</dt>
          <dd className="font-medium text-gray-700 text-right">{person.className || "Belum tersedia"}</dd>
        </div>
      </dl>
    </div>
  );
}

function DetailSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#f5f3ef] p-5 sm:p-6 rounded-xl">
      <h4 className="text-xl font-semibold text-[#19554B] mb-3">{title}</h4>
      {children}
    </section>
  );
}

function ListDetailSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;

  return (
    <DetailSection title={title}>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex items-start gap-3 text-gray-700">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#19554B]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DetailSection>
  );
}
