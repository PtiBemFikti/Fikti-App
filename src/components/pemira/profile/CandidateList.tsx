import { motion } from "framer-motion";
import { CandidatePair, ElectionVoteStatus, PemiraElection } from "@/types/pemira";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import CandidatePortrait from "../CandidatePortrait";

interface CandidateListProps {
  election: PemiraElection;
  status: ElectionVoteStatus;
  handleVote: (candidate: CandidatePair) => void;
}

export default function CandidateList({ election, status, handleVote }: CandidateListProps) {
  // Null is a visual placeholder only; it is never sent to the API or database.
  const slots: Array<CandidatePair | null> = Array.from(
    { length: Math.max(2, election.candidates.length) },
    (_, index) => election.candidates[index] ?? null
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="mx-3 mb-4 border-b-2 sm:mx-8 sm:mb-5">
        <Image
          src="/pemira/logo-pemira-adiraka.png"
          alt="Logo Pemira"
          width={180}
          height={180}
          className="mx-auto h-24 w-24 sm:h-32 sm:w-32 md:h-fit md:w-fit"
          priority
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-3 border-black text-center text-xl font-bold text-black sm:mb-4 md:text-3xl"
        >
          Pemira <br />
          {election.name}
        </motion.h1>
      </div>

      <div className="px-4 text-black sm:px-6">
        <div className="flex flex-col text-center">
          <h2 className="text-lg font-bold sm:text-xl md:text-2xl">Pemilihan Pasangan Calon</h2>
          <p className="opacity-90">
            {!status.eligible
              ? "Anda tidak memenuhi syarat untuk election ini."
              : status.hasVoted
                ? "Anda sudah memilih untuk election ini."
                : "Pilih salah satu pasangan calon di bawah ini."}
          </p>
        </div>
      </div>

      <div className="p-3 sm:p-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {slots.map((candidate, index) => candidate ? (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-[#DEDAD1] bg-white shadow-[0_10px_26px_rgba(25,85,75,0.08)]"
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
              <div className="p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#79558E]">
                  PASLON {candidate.ballotNumber || String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-tight text-[#19554B] sm:text-xl">
                  <span className="block">{candidate.chairman.name}</span>
                  <span className="my-1 block text-sm font-medium text-[#AA83C2]">&amp;</span>
                  <span className="block">{candidate.viceChairman.name}</span>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Ketua dan Wakil Ketua {election.name}
                </p>
                <button
                  onClick={() => handleVote(candidate)}
                  disabled={!status.eligible || status.hasVoted}
                  className="mt-5 w-full rounded-xl bg-[#19554B] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#134239] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status.hasVoted ? "Sudah Memilih" : "Pilih Pasangan Ini"}
                </button>
              </div>
            </motion.div>
          ) : (
            <div
              key={`empty-${election.slug}`}
              aria-hidden="true"
              className="flex min-h-[180px] items-center justify-center rounded-2xl border-2 border-dashed border-[#19554B]/20 bg-[#F5F3EF] text-[#19554B]/45 sm:min-h-[220px] md:min-h-[280px]"
            >
              <div className="flex flex-col items-center gap-3">
                <FiUsers className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
                <p className="text-sm font-semibold tracking-wide">Kotak Kosong</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
