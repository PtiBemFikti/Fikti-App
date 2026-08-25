"use client";

import { CandidatePair, PemiraElection } from "@/types/pemira";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import CandidateModal from "./CandidateModal";

const fallbackImage = "/pemira/background-calon.png";

export default function CandidateSection() {
  const [elections, setElections] = useState<PemiraElection[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidatePair | null>(null);
  const [selectedElectionName, setSelectedElectionName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchCandidates = async () => {
      try {
        const response = await fetch("/api/candidates");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.message || "Gagal mengambil data kandidat");
        }

        if (isMounted) setElections(result.elections ?? []);
      } catch (fetchError) {
        if (isMounted) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : "Gagal mengambil data kandidat"
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCandidates();
    return () => {
      isMounted = false;
    };
  }, []);

  const openModal = (candidate: CandidatePair, electionName: string) => {
    setSelectedCandidate(candidate);
    setSelectedElectionName(electionName);
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
            Temukan visi, misi, dan program kerja dari pasangan calon BEM FIKTI
            dan HIMSI.
          </p>
        </motion.div>

        {loading && <CandidateLoadingState />}
        {!loading && error && <CandidateErrorState message={error} />}
        {!loading && !error && elections.length === 0 && (
          <CandidateEmptyState message="Data election belum tersedia." />
        )}
        {!loading && !error && elections.length > 0 && (
          <div className="space-y-20">
            {elections.map((election) => (
              <ElectionCandidateGroup
                key={election.id}
                election={election}
                onOpenCandidate={openModal}
              />
            ))}
          </div>
        )}
      </div>

      {selectedCandidate && (
        <CandidateModal
          candidate={selectedCandidate}
          electionName={selectedElectionName}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </section>
  );
}

function ElectionCandidateGroup({
  election,
  onOpenCandidate,
}: {
  election: PemiraElection;
  onOpenCandidate: (candidate: CandidatePair, electionName: string) => void;
}) {
  const slots: Array<CandidatePair | null> = Array.from(
    { length: 2 },
    (_, index) => election.candidates[index] ?? null
  );

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-[#19554B]">
          {election.name}
        </h3>
        <p className="text-[#19554B] mt-2">Pasangan calon {election.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {slots.map((candidate, index) =>
          candidate ? (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              electionName={election.name}
              index={index}
              onOpen={() => onOpenCandidate(candidate, election.name)}
            />
          ) : (
            <EmptyCandidateSlot key={`empty-${election.slug}-${index}`} />
          )
        )}
      </div>
    </div>
  );
}

function CandidateCard({
  candidate,
  electionName,
  index,
  onOpen,
}: {
  candidate: CandidatePair;
  electionName: string;
  index: number;
  onOpen: () => void;
}) {
  const ballotNumber = candidate.ballotNumber || String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 md:h-80 w-full bg-[#19554B]">
        <div className="grid grid-cols-2 h-full">
          <CandidateImage person={candidate.chairman} />
          <CandidateImage person={candidate.viceChairman} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
          <p className="text-sm font-semibold tracking-wider text-[#DEDAD1] mb-1">
            PASLON {ballotNumber}
          </p>
          <h4 className="text-2xl font-bold text-white">
            {candidate.chairman.name} + {candidate.viceChairman.name}
          </h4>
          <p className="text-[#DEDAD1]">Ketua dan Wakil Ketua {electionName}</p>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-[#19554B]">
          <PersonSummary label="Ketua" name={candidate.chairman.name} />
          <PersonSummary label="Wakil Ketua" name={candidate.viceChairman.name} />
        </div>
        {candidate.vision && (
          <>
            <h5 className="text-lg font-semibold text-[#19554B] mb-2">Visi</h5>
            <p className="text-gray-700 mb-6 line-clamp-3">{candidate.vision}</p>
          </>
        )}
        <div className="flex justify-center">
          <button
            onClick={onOpen}
            className="px-6 py-3 bg-[#19554B] text-white rounded-lg font-medium hover:bg-[#0d2e28] transition-colors focus:outline-none focus:ring-2 focus:ring-[#AA83C2] focus:ring-offset-2"
          >
            Lihat Selengkapnya
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function CandidateImage({ person }: { person: CandidatePair["chairman"] }) {
  return (
    <div className="relative min-w-0 border-r border-white/20 last:border-r-0">
      <Image
        src={person.image || fallbackImage}
        alt={person.name || "Foto kandidat"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-black/45 px-3 py-2 text-center">
        <p className="text-xs font-medium text-white truncate">{person.name}</p>
      </div>
    </div>
  );
}

function PersonSummary({ label, name }: { label: string; name: string }) {
  return (
    <div className="rounded-lg bg-[#F5F3EF] p-4">
      <p className="text-xs uppercase tracking-wide text-[#AA83C2] font-semibold">{label}</p>
      <p className="font-semibold mt-1">{name || "Informasi belum tersedia"}</p>
    </div>
  );
}

function EmptyCandidateSlot() {
  return (
    <div
      aria-label="Slot pasangan calon kosong"
      className="min-h-[440px] rounded-2xl border-2 border-dashed border-[#19554B]/30 bg-white/40 flex items-center justify-center text-center p-8"
    >
      <div>
        <p className="text-lg font-semibold text-[#19554B]">Slot Paslon 02</p>
        <p className="text-gray-600 mt-2">Belum ada pasangan calon lain.</p>
      </div>
    </div>
  );
}

function CandidateLoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16" aria-live="polite">
      {[0, 1].map((item) => (
        <div key={item} className="min-h-[440px] rounded-2xl bg-white/60 flex items-center justify-center">
          <div className="h-10 w-10 rounded-full border-4 border-[#19554B]/20 border-t-[#19554B] animate-spin" />
        </div>
      ))}
    </div>
  );
}

function CandidateErrorState({ message }: { message: string }) {
  return (
    <div className="max-w-2xl mx-auto rounded-xl bg-red-50 border border-red-200 p-6 text-center" role="alert">
      <p className="font-semibold text-red-800">Data kandidat tidak dapat dimuat.</p>
      <p className="text-red-700 mt-2">{message}</p>
    </div>
  );
}

function CandidateEmptyState({ message }: { message: string }) {
  return (
    <div className="max-w-2xl mx-auto rounded-xl bg-white/60 border border-[#19554B]/20 p-8 text-center">
      <p className="font-semibold text-[#19554B]">Belum ada data kandidat.</p>
      <p className="text-gray-600 mt-2">{message}</p>
    </div>
  );
}
