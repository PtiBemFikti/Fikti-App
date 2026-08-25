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
      <div className="border-b-2 mb-5 mx-8">
        <Image
          src="/pemira/logo-pemira-adiraka.png"
          alt="Logo Pemira"
          width={180}
          height={180}
          className="mx-auto w-32 md:w-fit h-32 md:h-fit"
          priority
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-black text-center border-black mx-auto md:text-3xl font-bold mb-4"
        >
          Pemira <br />
          {election.name}
        </motion.h1>
      </div>

      <div className="px-6 text-black">
        <div className="flex flex-col text-center">
          <h2 className="text-xl md:text-2xl font-bold">Pemilihan Pasangan Calon</h2>
          <p className="opacity-90">
            {!status.eligible
              ? "Anda tidak memenuhi syarat untuk election ini."
              : status.hasVoted
                ? "Anda sudah memilih untuk election ini."
                : "Pilih salah satu pasangan calon di bawah ini."}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slots.map((candidate, index) => candidate ? (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#DEDAD1] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full bg-[#19554B] flex items-center justify-center gap-4 p-4">
                {[candidate.chairman, candidate.viceChairman].map((person) => (
                  <div key={person.npm} className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white/80">
                    {person.image ? (
                      <Image src={person.image} alt={person.name} fill className="object-cover" />
                    ) : (
                      <div className="h-full w-full bg-[#DEDAD1]" />
                    )}
                  </div>
                ))}
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-[#AA83C2] mb-1">
                  PASLON {candidate.ballotNumber || String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold text-[#19554B] mb-1">
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
              className="border border-dashed border-[#19554B]/30 rounded-lg min-h-[360px] flex items-center justify-center text-gray-500"
            >
              Slot pasangan calon berikutnya tersedia
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
