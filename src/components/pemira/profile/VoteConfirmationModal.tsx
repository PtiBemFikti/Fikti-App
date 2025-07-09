import { motion } from "framer-motion";
import Image from "next/image";
import PemiraModal from "@/components/pemira/PemiraModal";

interface Candidate {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface VoteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidate: Candidate | null | undefined;
  onConfirm: () => void;
}

export default function VoteConfirmationModal({
  isOpen,
  onClose,
  candidate,
  onConfirm,
}: VoteConfirmationModalProps) {
  return (
    <PemiraModal isOpen={isOpen} onClose={onClose} title="Konfirmasi Vote">
      <div className="mb-6">
        {candidate && (
          <div className="flex flex-col items-center mb-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-[#19554B] mb-3">
              <Image
                src={candidate.image}
                alt={candidate.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#19554B]">
              {candidate.name}
            </h3>
          </div>
        )}

        <p className="text-gray-700 mb-4 text-center">
          Anda yakin ingin memilih kandidat ini?
        </p>
        <div className="bg-[#F9F9F9] p-3 rounded border border-[#DEDAD1]">
          <p className="text-xs text-gray-500 text-center">
            Setelah memilih, Anda tidak dapat mengubah pilihan Anda.
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onClose}
          className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 py-2 px-4 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors"
        >
          Ya, Vote Sekarang
        </button>
      </div>
    </PemiraModal>
  );
}
