"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { FaX } from "react-icons/fa6";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConfirmModal({ isOpen, onClose }: ConfirmModalProps) {
  // Block body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl max-w-md w-full overflow-hidden relative" // Added relative here
          >
            {/* Close Button - Placed here to be part of the modal card */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-20 p-2"
              aria-label="Close modal"
            >
              <FaX className="text-xl" />
            </button>

            {/* Modal Content */}
            <div className="p-8 text-center">
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-[#19554B]">
                  Apakah Anda
                </h3>
                <h3 className="text-3xl font-bold text-[#19554B]">
                  Mahasiswa Aktif FIKTI?
                </h3>
                <p className="text-gray-600">
                  Pastikan akun V-Class Anda aktif dan terdaftar sebagai
                  mahasiswa FIKTI
                </p>
              </div>

              <Link
                href="/pemira/auth"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-[#19554B] to-[#0d2e28] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Masuk dengan V-Class
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
