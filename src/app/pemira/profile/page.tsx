"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser, FaVoteYea } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";
import { FiAlertCircle } from "react-icons/fi";

interface UserData {
  name: string;
  npm: string;
  jurusan: string;
  kodeKelas: string;
  isInformationSystem: boolean;
  isComputerSystem: boolean;
}

export default function GreetingPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch profile data
        const profileRes = await fetch("/api/auth/profile", {
          credentials: "include",
        });

        if (!profileRes.ok) {
          if (profileRes.status === 401) {
            window.location.href = `/pemira/auth`;
            return;
          }
          throw new Error(await profileRes.text());
        }

        const profileJson = await profileRes.json();

        if (profileJson.success && profileJson.data) {
          const {
            name,
            npm,
            jurusan,
            kodeKelas,
            isInformationSystem,
            isComputerSystem,
          } = profileJson.data;
          setUserData({
            name: name || "Pengguna",
            npm: npm || "Tidak tersedia",
            jurusan: jurusan || "Tidak tersedia",
            kodeKelas: kodeKelas || "Tidak tersedia",
            isInformationSystem,
            isComputerSystem,
          });
        } else {
          setError("Gagal memuat data profil");
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Terjadi kesalahan saat memuat data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-black">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen text-black p-6 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 text-red-700">
            <FiAlertCircle className="text-xl" />
            <div>{error}</div>
          </div>
          <div className="mt-6 flex justify-end">
            <PemiraLogoutButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" text-black  p-6 flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Image
            src="/pemira/logo-pemira-adiraka.png"
            alt="Logo Pemira"
            width={300}
            height={300}
            className="mx-auto w-32 md:w-fit h-32 md:h-fit "
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-3xl font-bold mb-4"
        >
          Halo, {userData?.name}!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-8 max-w-md"
        >
          Selamat datang di Pemilihan Umum Raya Adiraka 2023
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-sm space-y-4"
        >
          <Link
            href="/pemira/profile/vote"
            className="flex items-center justify-between bg-white text-[#19554B] font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FaVoteYea />
              Pilih Sekarang
            </span>
            <FiArrowRight />
          </Link>

          <Link
            href="/pemira/profile/voter-data"
            className="flex items-center justify-between bg-white text-[#19554B] font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-2">
              <FaUser />
              Lihat Profil Saya
            </span>
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-sm opacity-80 pt-4"
      >
        <p>Pemira Adiraka - Menuju Pemilu yang Lebih Baik</p>
      </motion.div>
    </div>
  );
}
