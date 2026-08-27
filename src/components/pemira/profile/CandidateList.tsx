import { motion } from "framer-motion";
import {
  ElectionVoteStatus,
  PemiraElection,
  PendingVote,
} from "@/types/pemira";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import CandidatePortrait from "../CandidatePortrait";

interface CandidateListProps {
  election: PemiraElection;
  status: ElectionVoteStatus;
  handleVote: (selection: PendingVote) => void;
  selectedVote: PendingVote | null;
}

export default function CandidateList({
  election,
  status,
  handleVote,
  selectedVote,
}: CandidateListProps) {
  const showsEmptyChoice = election.candidates.length === 1;

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
                : showsEmptyChoice
                  ? "Pilih pasangan calon atau Kotak Kosong."
                  : "Pilih salah satu pasangan calon di bawah ini."}
          </p>
        </div>
      </div>

      <div className="p-3 sm:p-6">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {election.candidates.map((candidate, index) => {
            const isSelected =
              selectedVote?.choice === "candidate" &&
              String(selectedVote.election.id) === String(election.id) &&
              String(selectedVote.candidate?.id) === String(candidate.id);

            return (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`overflow-hidden rounded-2xl border bg-white shadow-[0_10px_26px_rgba(25,85,75,0.08)] transition-colors ${
                isSelected
                  ? "border-[#79558E] ring-2 ring-[#79558E]/30"
                  : "border-[#DEDAD1]"
              }`}
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
                  onClick={() =>
                    handleVote({
                      election,
                      choice: "candidate",
                      candidate,
                    })
                  }
                  disabled={!status.eligible || status.hasVoted}
                  aria-pressed={isSelected}
                  className="mt-5 w-full rounded-xl bg-[#19554B] px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#134239] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79558E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status.hasVoted ? "Sudah Memilih" : "Pilih Pasangan Ini"}
                </button>
              </div>
            </motion.div>
            );
          })}

          {showsEmptyChoice && (
            <button
              type="button"
              aria-label="Pilih Kotak Kosong"
              aria-pressed={
                selectedVote?.choice === "empty" &&
                String(selectedVote.election.id) === String(election.id)
              }
              onClick={() =>
                handleVote({ election, choice: "empty", candidate: null })
              }
              disabled={!status.eligible || status.hasVoted}
              className={`flex min-h-[180px] cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed bg-[#F5F3EF] text-[#19554B]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79558E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:min-h-[220px] md:min-h-[280px] ${
                selectedVote?.choice === "empty" &&
                String(selectedVote.election.id) === String(election.id)
                  ? "border-[#79558E] bg-[#F2ECF5] ring-2 ring-[#79558E]/25"
                  : "border-[#19554B]/25 hover:border-[#19554B]/45 hover:bg-[#EFEBE4]"
              }`}
            >
              <span className="flex flex-col items-center gap-3">
                <FiUsers className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide">
                  Kotak Kosong
                </span>
                {status.hasVoted && (
                  <span className="text-xs font-medium">Sudah Memilih</span>
                )}
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
