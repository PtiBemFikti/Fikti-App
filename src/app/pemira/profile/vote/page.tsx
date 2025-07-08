"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";
import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowLeft, FiAlertCircle } from "react-icons/fi";
import PemiraModal from "@/components/pemira/PemiraModal";

interface Candidate {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function VotePage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check vote status
        const checkRes = await fetch("/api/vote/check");
        const checkData = await checkRes.json();

        if (checkData.success) {
          setHasVoted(checkData.data.has_voted);
        }

        // Get candidates
        const res = await fetch("/api/candidates");
        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setCandidates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVote = async (candidateId: number) => {
    setSelectedCandidate(candidateId);
    setShowConfirmation(true);
  };

  const confirmVote = async () => {
    try {
      if (!selectedCandidate) return;

      const res = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedCandidate }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal melakukan vote");
      }

      setHasVoted(true);
      setShowConfirmation(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      setShowConfirmation(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="flex justify-center items-center h-64">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="rounded-full h-12 w-12 border-t-2 border-b-2 border-[#19554B]"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 text-red-700">
              <FiAlertCircle className="text-xl" />
              <div>{error}</div>
            </div>
            <div className="mt-6 flex justify-center">
              <Link
                href="/pemira"
                className="px-6 py-3 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors flex items-center gap-2"
              >
                <FiArrowLeft />
                Kembali ke Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (hasVoted) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden text-center p-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mx-auto w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4"
          >
            <FiCheckCircle className="text-3xl" />
          </motion.div>
          <h1 className="text-2xl font-bold text-[#19554B] mb-2">
            Terima kasih!
          </h1>
          <p className="text-gray-600 mb-6">
            Anda sudah melakukan voting sebelumnya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/pemira/profile"
              className="px-6 py-3 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors"
            >
              Kembali ke Profile
            </Link>
            <PemiraLogoutButton />
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6">
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
            className="mx-auto w-32  md:w-fit h-32 md:h-fit "
            priority
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-black  text-center border-black mx-auto md:text-3xl font-bold mb-4"
          >
            Pemira <br />
            BEM FIKTI UG
          </motion.h1>
        </motion.div>
        {/* Header */}
        <div className=" px-6 text-black">
          <div className="flex flex-col text-center">
            <h1 className="text-xl md:text-2xl font-bold">
              Pemilihan Kandidat
            </h1>
            <p className="opacity-90">Pilih salah satu kandidat di bawah ini</p>
          </div>
        </div>

        {/* Candidates Grid */}
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

      {/* Confirmation Modal */}
      <PemiraModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Konfirmasi Vote"
      >
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Anda yakin ingin memilih kandidat ini?
          </p>
          <div className="bg-[#F9F9F9] p-3 rounded border border-[#DEDAD1]">
            <p className="text-xs text-gray-500">
              Setelah memilih, Anda tidak dapat mengubah pilihan Anda.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowConfirmation(false)}
            className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={confirmVote}
            className="flex-1 py-2 px-4 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors"
          >
            Ya, Saya Yakin
          </button>
        </div>
      </PemiraModal>
    </div>
  );
}
