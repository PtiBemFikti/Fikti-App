import PemiraModal from "@/components/pemira/PemiraModal";
import { useState } from "react";
import { PendingVote } from "@/types/pemira";
import CandidatePortrait from "../CandidatePortrait";
import { FiUsers } from "react-icons/fi";

interface VoteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selection: PendingVote | null;
  onConfirm: () => Promise<void>;
}

export default function VoteConfirmationModal({
  isOpen,
  onClose,
  selection,
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
        {selection?.choice === "candidate" && selection.candidate && (
          <div className="flex flex-col items-center mb-4">
            <div className="mb-4 grid w-full max-w-sm grid-cols-2 gap-2 overflow-hidden rounded-xl bg-[#19554B]">
              <CandidatePortrait
                person={selection.candidate.chairman}
                role="Ketua"
                sizes="(max-width: 640px) 45vw, 180px"
                className="aspect-[4/3]"
              />
              <CandidatePortrait
                person={selection.candidate.viceChairman}
                role="Wakil Ketua"
                sizes="(max-width: 640px) 45vw, 180px"
                className="aspect-[4/3]"
              />
            </div>
            <h3 className="text-center text-lg font-bold leading-tight text-[#19554B]">
              <span className="block">{selection.candidate.chairman.name}</span>
              <span className="my-1 block text-sm font-medium text-[#AA83C2]">&amp;</span>
              <span className="block">{selection.candidate.viceChairman.name}</span>
            </h3>
          </div>
        )}

        {selection?.choice === "empty" && (
          <div className="mb-4 flex flex-col items-center">
            <div className="flex h-28 w-full max-w-sm items-center justify-center rounded-xl border-2 border-dashed border-[#19554B]/25 bg-[#F5F3EF] text-[#19554B]/60">
              <FiUsers className="h-12 w-12 stroke-[1.25]" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-center text-lg font-bold text-[#19554B]">
              Kotak Kosong
            </h3>
          </div>
        )}

        <p className="text-gray-700 mb-4 text-center">
          {selection?.choice === "empty"
            ? `Anda yakin ingin memilih Kotak Kosong untuk ${selection.election.name}?`
            : `Anda yakin ingin memilih Paslon ${selection?.candidate?.ballotNumber ?? "ini"}?`}
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
