import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowLeft, FiAlertCircle } from "react-icons/fi";
import Link from "next/link";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";

interface VoteStatusProps {
  loading: boolean;
  error: string;
  votingStatus: "not_started" | "ongoing";
  hasVoted: boolean;
}

const votingStatusMessages = {
  not_started: {
    title: "Pemira Belum Dimulai",
    message:
      "Pemilihan akan dimulai pada 25 Agustus 2025. Silakan kembali pada tanggal tersebut untuk melakukan voting.",
  },
  ongoing: {
    title: "Pemira Sedang Berlangsung",
    message: "Silakan pilih kandidat Anda di bawah ini.",
  },
};

export default function VoteStatus({
  loading,
  error,
  votingStatus,
  hasVoted,
}: VoteStatusProps) {
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
                href="/pemira/profile"
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

  if (votingStatus === "not_started") {
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
            className="mx-auto w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 mb-4"
          >
            <FiAlertCircle className="text-3xl" />
          </motion.div>
          <h1 className="text-2xl font-bold text-[#19554B] mb-2">
            {votingStatusMessages.not_started.title}
          </h1>
          <p className="text-gray-600 mb-6">
            {votingStatusMessages.not_started.message}
          </p>
          <div className="flex justify-center">
            <Link
              href="/pemira"
              className="px-6 py-3 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors flex items-center gap-2"
            >
              <FiArrowLeft />
              Kembali ke Home
            </Link>
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

  return null;
}
