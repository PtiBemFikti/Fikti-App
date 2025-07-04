"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiLogOut, FiX } from "react-icons/fi";
import PemiraModal from "./PemiraModal";

interface PemiraLogoutButtonProps {
  variant?: "light" | "dark";
}

export default function PemiraLogoutButton({
  variant = "dark",
}: PemiraLogoutButtonProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  const buttonClass =
    variant === "light"
      ? "px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
      : "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2";

  return (
    <>
      <button onClick={() => setShowModal(true)} className={buttonClass}>
        <FiLogOut />
        Logout
      </button>

      <PemiraModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Konfirmasi Logout"
        closeOnOverlayClick={true}
      >
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            Apakah Anda yakin ingin keluar dari sistem?
          </p>
          <div className="bg-[#F9F9F9] p-3 rounded border border-[#DEDAD1]">
            <p className="text-xs text-gray-500">
              Anda perlu login kembali untuk mengakses sistem Pemira.
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(false)}
            className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <FiX /> Batal
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
          >
            <FiLogOut /> Ya, Logout
          </button>
        </div>
      </PemiraModal>
    </>
  );
}
