import { motion } from "framer-motion";
import Image from "next/image";

interface Candidate {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CandidateListProps {
  candidates: Candidate[];
  handleVote: (id: number) => void;
}

export default function CandidateList({
  candidates,
  handleVote,
}: CandidateListProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-b-2 mb-5 mx-8"
      >
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
          BEM FIKTI UG
        </motion.h1>
      </motion.div>

      <div className="px-6 text-black">
        <div className="flex flex-col text-center">
          <h1 className="text-xl md:text-2xl font-bold">Pemilihan Kandidat</h1>
          <p className="opacity-90">Pilih salah satu kandidat di bawah ini</p>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidates.map((candidate, index) => (
            <motion.div
              key={candidate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-[#DEDAD1] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={candidate.image}
                  alt={candidate.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-[#19554B] mb-2">
                  {candidate.name}
                </h2>
                <p className="text-gray-600 mb-4">{candidate.description}</p>
                <button
                  onClick={() => handleVote(candidate.id)}
                  className="w-full py-3 px-4 rounded-lg bg-[#AA83C2] text-white hover:bg-[#9569B5] transition-colors font-medium"
                >
                  Pilih Kandidat Ini
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
