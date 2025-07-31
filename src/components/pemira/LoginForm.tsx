"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiEye, FiEyeOff, FiUser, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PemiraLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const searchParams = useSearchParams();
  const redirect = searchParams?.get("redirect") ?? "/pemira/auth/validate";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      setStatus("success");
      window.location.href = redirect;
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Terjadi kesalahan jaringan"
      );
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left"
      >
        <h1 className="text-3xl font-bold text-[#19554B]">Masuk</h1>
        <p className="text-gray-600 mt-2">
          Gunakan akun V-Class Gunadarma anda
        </p>
      </motion.div>

      {errorMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200"
        >
          {errorMessage}
        </motion.div>
      )}

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#19554B] mb-1"
          >
            Email UG
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-[#AA83C2]" />
            </div>
            <input
              id="email"
              className="w-full pl-10 border border-[#DEDAD1] p-3 rounded-lg mt-1 text-gray-800 focus:ring-2 focus:ring-[#AA83C2] focus:border-[#AA83C2] transition"
              type="email"
              placeholder="user@student.gunadarma.ac.id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#19554B] mb-1"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-[#AA83C2]" />
            </div>
            <input
              id="password"
              className="w-full pl-10 border border-[#DEDAD1] p-3 rounded-lg mt-1 text-gray-800 focus:ring-2 focus:ring-[#AA83C2] focus:border-[#AA83C2] pr-10 transition"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#AA83C2] hover:text-[#19554B] p-1 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <Link href="/pemira" className="w-full">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full  bg-white text-[#19554B] py-3 px-6 rounded-lg border border-[#19554B] hover:bg-gray-50 transition flex items-center justify-center"
          >
            Kembali
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-[#19554B] text-white py-3 px-4 rounded-lg hover:bg-[#134239] transition flex items-center justify-center ${
            status === "loading" ? "opacity-80 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
            "Login"
          )}
        </motion.button>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 bg-green-300 text-green-700 rounded-lg border border-green-200"
          >
            Login berhasil! Mengalihkan...
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-sm text-gray-500 mt-6"
      >
        <p>Pemira tidak menyimpan data ataupun password anda</p>
      </motion.div>
    </form>
  );
}
