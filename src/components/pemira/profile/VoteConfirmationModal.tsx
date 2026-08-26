import PemiraModal from "@/components/pemira/PemiraModal";
import { useState } from "react";
import { CandidatePair } from "@/types/pemira";
import CandidatePortrait from "../CandidatePortrait";

interface VoteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidate: CandidatePair | null | undefined;
  onConfirm: () => Promise<void>;
}

export default function VoteConfirmationModal({
  isOpen,
  onClose,
  candidate,
  onConfirm,
}: VoteConfirmationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onConfirm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PemiraModal isOpen={isOpen} onClose={onClose} title="Konfirmasi Vote">
      <div className="mb-6">
        {candidate && (
          <div className="flex flex-col items-center mb-4">
            <div className="mb-4 grid w-full max-w-sm grid-cols-2 gap-2 overflow-hidden rounded-xl bg-[#19554B]">
              <CandidatePortrait
                person={candidate.chairman}
                role="Ketua"
                sizes="(max-width: 640px) 45vw, 180px"
                className="aspect-[4/3]"
              />
              <CandidatePortrait
                person={candidate.viceChairman}
                role="Wakil Ketua"
                sizes="(max-width: 640px) 45vw, 180px"
                className="aspect-[4/3]"
              />
            </div>
            <h3 className="text-center text-lg font-bold leading-tight text-[#19554B]">
              <span className="block">{candidate.chairman.name}</span>
              <span className="my-1 block text-sm font-medium text-[#AA83C2]">&amp;</span>
              <span className="block">{candidate.viceChairman.name}</span>
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
          disabled={isSubmitting}
          className={`flex-1 py-2 px-4 rounded-lg border ${
            isSubmitting
              ? "border-gray-200 text-gray-400 cursor-not-allowed"
              : "border-gray-300 text-gray-700 hover:bg-gray-50"
          } transition-colors`}
        >
          Batal
        </button>
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className={`flex-1 py-2 px-4 rounded-lg ${
            isSubmitting
              ? "bg-[#19554B]/70 cursor-not-allowed"
              : "bg-[#19554B] hover:bg-[#134239]"
          } text-white transition-colors flex items-center justify-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Memproses...
            </>
          ) : (
            "Ya, Vote Sekarang"
          )}
        </button>
      </div>
    </PemiraModal>
  );
}
