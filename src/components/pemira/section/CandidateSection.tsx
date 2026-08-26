"use client";

import { CandidatePair, PemiraElection } from "@/types/pemira";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import CandidateModal from "./CandidateModal";
import CandidatePortrait from "../CandidatePortrait";

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
        const response = await fetch("/api/candidates", { cache: "no-store" });
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
            <span className="text-[#0d2e28]">
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
    { length: Math.max(2, election.candidates.length) },
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
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
      className="overflow-hidden rounded-2xl border border-[#DEDAD1] bg-white shadow-[0_12px_30px_rgba(25,85,75,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(25,85,75,0.14)]"
    >
      <div className="relative aspect-[16/10] w-full bg-[#19554B]">
        <div className="grid h-full grid-cols-2 gap-px bg-white/30">
          <CandidatePortrait
            person={candidate.chairman}
            role="Ketua"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <CandidatePortrait
            person={candidate.viceChairman}
            role="Wakil Ketua"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </div>

      <div className="p-5 sm:p-6 md:p-7">
        <div className="mb-4">
          <span className="inline-flex rounded-full bg-[#AA83C2]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#79558E]">
            Paslon {ballotNumber}
          </span>
          <h4 className="mt-3 text-xl font-bold leading-tight text-[#19554B] sm:text-2xl">
            <span className="block">{candidate.chairman.name}</span>
            <span className="my-1 block text-base font-medium text-[#AA83C2]">&amp;</span>
            <span className="block">{candidate.viceChairman.name}</span>
          </h4>
          <p className="mt-2 text-sm text-gray-500">
            Ketua dan Wakil Ketua {electionName}
          </p>
        </div>

        <div className="grid grid-cols-2 divide-x divide-[#DEDAD1] border-y border-[#DEDAD1] py-4 text-[#19554B]">
          <PersonSummary label="Ketua" person={candidate.chairman} />
          <PersonSummary label="Wakil Ketua" person={candidate.viceChairman} />
        </div>

        {candidate.vision && (
          <div className="mt-5">
            <h5 className="text-xs font-bold uppercase tracking-[0.14em] text-[#79558E]">Visi</h5>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-700">{candidate.vision}</p>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={onOpen}
            className="w-full rounded-xl bg-[#19554B] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0d2e28] focus:outline-none focus:ring-2 focus:ring-[#AA83C2] focus:ring-offset-2"
          >
            Lihat Profil Lengkap
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function PersonSummary({
  label,
  person,
}: {
  label: string;
  person: CandidatePair["chairman"];
}) {
  return (
    <div className="min-w-0 px-3 first:pl-0 last:pr-0 sm:px-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#AA83C2]">{label}</p>
      <p className="mt-1 truncate text-sm font-semibold text-[#19554B]">{person.name || "Belum tersedia"}</p>
      <p className="mt-1 text-xs text-gray-500">{person.className || "Kelas belum tersedia"}</p>
    </div>
  );
}

function EmptyCandidateSlot() {
  return (
    <div
      aria-label="Slot kandidat kosong"
      className="flex min-h-[180px] items-center justify-center rounded-2xl border-2 border-dashed border-[#19554B]/20 bg-white/40 text-[#19554B]/45 md:min-h-[280px]"
    >
      <div className="flex flex-col items-center gap-3">
        <FiUsers className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
        <p className="text-sm font-semibold tracking-wide">Kotak Kosong</p>
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
