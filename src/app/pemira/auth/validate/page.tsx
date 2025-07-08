"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiX, FiInfo } from "react-icons/fi";
import Image from "next/image";
import PemiraModal from "@/components/pemira/PemiraModal";

interface UserData {
  name: string;
  npm: string;
  jurusan: string;
  kodeKelas: string;
  isInformationSystem: boolean;
  isComputerSystem: boolean;
}

export default function DashboardPage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showBlockedModal, setShowBlockedModal] = useState(false);

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

  const handleProceed = async () => {
    if (!userData) return;

    if (!userData.isInformationSystem && !userData.isComputerSystem) {
      setShowBlockedModal(true);
      return;
    }

    try {
      const res = await fetch("/api/vote/register", {
        method: "POST",
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setShowModal(true);
      } else {
        alert("Gagal menyimpan data: " + data.message);
      }
    } catch (err) {
      console.error("Register error:", err);
      alert("Terjadi kesalahan saat menyimpan data");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] p-6 flex items-center justify-center">
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
    <div className="min-h-screen bg-[#F5F5F5] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#19554B] p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Validasi Data Mahasiswa</h1>
              <p className="opacity-90">
                Pastikan data berikut sesuai dengan identitas Anda
              </p>
            </div>
            <PemiraLogoutButton />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Data Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 border border-[#DEDAD1] rounded-lg bg-[#F9F9F9]"
          >
            <h2 className="text-lg font-semibold mb-4 text-[#19554B] flex items-center gap-2">
              <FiCheckCircle className="text-[#AA83C2]" />
              Data Akademik
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <p className="text-sm text-[#19554B] opacity-80">
                    {item.label}
                  </p>
                  <p className="font-medium text-black mt-1 p-2 bg-white rounded border border-[#DEDAD1]">
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-start gap-3 p-4 rounded-lg bg-[#AA83C2]/10 text-[#19554B] border border-[#AA83C2]/30"
          >
            <FiInfo className="text-[#AA83C2] mt-0.5 flex-shrink-0" />
            <p className="text-sm">
              Pemira tidak mengambil data anda dari V-Class secara langsung.
              Sistem menggunakan teknik web scraping untuk memverifikasi data
              akademik Anda.
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="pt-4"
          >
            <button
              onClick={handleProceed}
              className="w-full py-3 px-6 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors font-medium flex items-center justify-center gap-2"
            >
              Ya, ini data saya
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Normal Confirmation Modal */}
      <PemiraModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Konfirmasi"
      >
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <FiInfo className="text-[#AA83C2] mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">
              Pemira tidak menyimpan data pribadi Anda secara permanen. Data
              hanya digunakan untuk keperluan validasi dan tidak akan disimpan
              setelah proses pemilihan selesai.
            </p>
          </div>
          <div className="bg-[#F9F9F9] p-3 rounded border border-[#DEDAD1]">
            <p className="text-xs text-gray-500">
              Dengan melanjutkan, Anda menyetujui bahwa data yang ditampilkan
              adalah benar dan siap untuk melanjutkan ke proses pemilihan.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(false)}
            className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Kembali
          </button>
          <Link
            href="/pemira/profile"
            className="flex-1 py-2 px-4 rounded-lg bg-[#19554B] text-white hover:bg-[#134239] transition-colors text-center"
          >
            Oke, Lanjutkan
          </Link>
        </div>
      </PemiraModal>

      {/* Blocked Access Modal */}
      <PemiraModal
        isOpen={showBlockedModal}
        onClose={() => setShowBlockedModal(false)}
        title="Akses Dibatasi"
      >
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <FiX className="text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-700 mb-2">
                Maaf, Pemira ini hanya untuk mahasiswa FIKTI (Sistem
                Informasi/Sistem Komputer).
              </p>
              <p className="text-sm text-gray-600">
                Jurusan Anda:{" "}
                <span className="font-medium">{userData?.jurusan}</span>
              </p>
            </div>
          </div>
          <div className="bg-[#FDEDED] p-3 rounded border border-[#F5C2C7]">
            <p className="text-xs text-red-500">
              Jika ini kesalahan sistem, silakan hubungi panitia Pemira.
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setShowBlockedModal(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Tutup
          </button>
          <PemiraLogoutButton />
        </div>
      </PemiraModal>
    </div>
  );
}
