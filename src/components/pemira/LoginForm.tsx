"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-black">Login V-Class</h1>
      {errorMessage && (
        <div className="p-3 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email UG
        </label>
        <input
          id="email"
          className="w-full border p-2 rounded mt-1 text-black"
          type="email"
          placeholder="user@student.gunadarma.ac.id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            className="w-full border p-2 pr-10 rounded mt-1 text-black"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>
      <button
        className={`w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition ${
          status === "loading" ? "opacity-70 cursor-not-allowed" : ""
        }`}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Memproses..." : "Login"}
      </button>

      {status === "success" && (
        <div className="p-3 bg-green-100 text-green-700 rounded">
          Login berhasil! Mengalihkan...
        </div>
      )}
    </form>
  );
}
