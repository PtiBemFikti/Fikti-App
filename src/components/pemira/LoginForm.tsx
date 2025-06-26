"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiEye, FiEyeOff, FiUser, FiLock } from "react-icons/fi";

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
      // Use hard redirect to ensure cookies are properly set
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
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800">Masuk</h1>
        <p className="text-gray-600 mt-2">Gunakan akun UG Anda</p>
      </div>

      {errorMessage && (
        <div className="p-3 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start">
          <div className="flex-1">{errorMessage}</div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email UG
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-400" />
            </div>
            <input
              id="email"
              className="w-full pl-10 border border-gray-300 p-3 rounded-lg mt-1 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type="email"
              placeholder="user@student.gunadarma.ac.id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              id="password"
              className="w-full pl-10 border border-gray-300 p-3 rounded-lg mt-1 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10 transition"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </div>
      </div>

      <button
        className={`w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center ${
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
      </button>

      {status === "success" && (
        <div className="p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">
          Login berhasil! Mengalihkan...
        </div>
      )}

      <div className="text-center text-sm text-gray-500 mt-6">
        <p>Pemira tidak menyimpan data ataupun password anda</p>
      </div>
    </form>
  );
}
