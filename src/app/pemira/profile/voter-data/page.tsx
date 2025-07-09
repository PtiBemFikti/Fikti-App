"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";
import { motion } from "framer-motion";
import { FiAlertCircle, FiArrowRight } from "react-icons/fi";
import { FaUser, FaVoteYea } from "react-icons/fa";

interface UserData {
  name: string;
  npm: string;
  jurusan: string;
  kodeKelas: string;
  isInformationSystem: boolean;
  isComputerSystem: boolean;
}

export default function VotersProfilePage() {
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
            name: name || "tidak tersedia",
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
      <div className="h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl w-full mx-auto overflow-hidden"
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
      <div className="min-h-screen bg-[#F5F5F5] p-6 flex items-center justify-center">
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
            <div className="mt-6 flex justify-end">
              <PemiraLogoutButton />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col items-center justify-center text-black gap-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-center w-32 md:w-fit h-32 md:h-fit p-8 text-black bg-white rounded-full border shadow-md"
      >
        <FaUser size={100} />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold"
      >
        Hi, {userData?.name}
      </motion.h1>

      <div className="space-y-4 w-full max-w-md">
        {[
          { label: "Nama", value: userData?.name },
          { label: "NPM", value: userData?.npm },
          { label: "Program Studi", value: userData?.jurusan },
          { label: "Kelas", value: userData?.kodeKelas },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <p className="text-sm text-[#19554B] opacity-80">{item.label}</p>
            <p className="font-medium text-black mt-1 p-2 bg-white rounded border border-[#DEDAD1]">
              {item.value}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full max-w-sm mt-8"
      >
        <Link
          href="/pemira/profile/vote"
          className="flex items-center justify-between bg-[#19554B] text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:bg-[#12433b] transition-colors"
        >
          <span className="flex items-center gap-2">
            <FaVoteYea />
            Pilih Sekarang
          </span>
          <FiArrowRight />
        </Link>
      </motion.div>
    </div>
  );
}
