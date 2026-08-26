import { motion } from "framer-motion";
import Image from "next/image";
import { CandidatePair, ElectionVoteStatus, PemiraElection } from "@/types/pemira";

interface CandidateListProps {
  election: PemiraElection;
  status: ElectionVoteStatus;
  handleVote: (candidate: CandidatePair) => void;
}

export default function CandidateList({ election, status, handleVote }: CandidateListProps) {
  // Null is a visual placeholder only; it is never sent to the API or database.
  const slots: Array<CandidatePair | null> = Array.from(
    { length: Math.max(2, Math.min(election.candidates.length, 2)) },
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {slots.map((candidate, index) => candidate ? (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#DEDAD1] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative flex h-36 w-full items-center justify-center gap-2 bg-[#19554B] p-3 sm:h-48 sm:gap-4 sm:p-4">
                {[candidate.chairman, candidate.viceChairman].map((person) => (
                  <div key={person.npm} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/80 sm:h-32 sm:w-32 sm:border-4">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover object-center"
                        sizes="128px"
                      />
                    ) : (
                      <div className="h-full w-full bg-[#DEDAD1]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm font-semibold text-[#AA83C2] mb-1">
                  PASLON {candidate.ballotNumber || String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-1 text-lg font-semibold leading-snug text-[#19554B] sm:text-xl">
                  {candidate.chairman.name} + {candidate.viceChairman.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Ketua dan Wakil Ketua {election.name}
                </p>
                <button
                  onClick={() => handleVote(candidate)}
                  disabled={!status.eligible || status.hasVoted}
                  className="w-full py-3 px-4 rounded-lg bg-[#AA83C2] text-white hover:bg-[#9569B5] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.hasVoted ? "Sudah Memilih" : "Pilih Pasangan Ini"}
                </button>
              </div>
            </motion.div>
          ) : (
            <div
              key={`empty-${election.slug}`}
              aria-hidden="true"
              className="flex min-h-[260px] items-center justify-center rounded-lg border border-dashed border-[#19554B]/30 text-center text-gray-500 sm:min-h-[360px]"
            >
              Slot pasangan calon berikutnya tersedia
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
