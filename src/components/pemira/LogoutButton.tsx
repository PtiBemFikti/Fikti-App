"use client";

import { useState } from "react";
import { FiLogOut, FiX } from "react-icons/fi";
import PemiraModal from "./PemiraModal";

interface PemiraLogoutButtonProps {
  variant?: "light" | "dark";
}

export default function PemiraLogoutButton({
  variant = "dark",
}: PemiraLogoutButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      // Tambahkan timestamp untuk menghindari cache
      const logoutUrl = `/api/logout?t=${Date.now()}`;

      // Lakukan fetch terlebih dahulu untuk memastikan cookie dihapus
      const response = await fetch(logoutUrl, {
        method: "GET",
        credentials: "include",
      });

      // Force hard redirect untuk memastikan semua state ter-reset
      window.location.href = "/pemira/auth";
    } catch (error) {
      console.error("Logout failed:", error);
      // Fallback ke hard redirect
      window.location.href = "/pemira/auth";
    }
  };

  const buttonClass =
    variant === "light"
      ? "px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
      : "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2";

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={buttonClass}
        disabled={isLoggingOut}
      >
        <FiLogOut />
        {isLoggingOut ? "Memproses..." : "Logout"}
      </button>

      <PemiraModal
        isOpen={showModal}
        onClose={() => !isLoggingOut && setShowModal(false)}
        title="Konfirmasi Logout"
        closeOnOverlayClick={!isLoggingOut}
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
            disabled={isLoggingOut}
            className="flex-1 py-2 px-4 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <FiX /> Batal
          </button>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex-1 py-2 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoggingOut ? (
              "Memproses..."
            ) : (
              <>
                <FiLogOut /> Ya, Logout
              </>
            )}
          </button>
        </div>
      </PemiraModal>
    </>
  );
}
