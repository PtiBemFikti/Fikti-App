"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validasi input
      if (!email || !password) {
        throw new Error("Email dan password harus diisi");
      }

      // Cek kredensial admin langsung dari tabel
      const { data: admin, error: dbError } = await supabase
        .from("pemira_admin")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (dbError || !admin) {
        throw new Error("Email atau password salah");
      }

      // Simpan session ke localStorage (tanpa menyimpan password)
      const sessionData = {
        isAuthenticated: true,
        email: admin.email,
        username: admin.username,
        id: admin.id,
        lastLogin: new Date().toISOString(),
      };

      localStorage.setItem("adminSession", JSON.stringify(sessionData));

      // Redirect ke dashboard
      router.push("/pemira/admin/dashboard");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Terjadi kesalahan saat login"
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-indigo-600">
              Pemira Admin Panel
            </h1>
            <p className="mt-2 text-gray-600">
              Silakan masuk dengan akun admin
            </p>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 text-black focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="masukkan email "
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 text-black py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Masukkan password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Memproses..." : "Masuk"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
