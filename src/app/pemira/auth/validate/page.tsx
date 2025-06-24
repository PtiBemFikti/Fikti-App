"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/pemira/LogoutButton";
import PemiraLogoutButton from "@/components/pemira/LogoutButton";

interface UserData {
  name: string;
  npm: string;
  jurusan: string;
  kodeKelas: string;
}

export default function DashboardPage() {
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
          const { name, npm, jurusan, kodeKelas } = profileJson.data;
          setUserData({
            name: name || "tidak tersedia",
            npm: npm || "Tidak tersedia",
            jurusan: jurusan || "Tidak tersedia",
            kodeKelas: kodeKelas || "Tidak tersedia",
          });
        } else {
          setError("Gagal memuat data profil");
        }

        // Fetch candidates data
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Terjadi kesalahan saat memuat data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Set up polling for live updates (every 10 seconds)
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 ">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 text-black">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <div className="text-red-500 p-4 rounded bg-red-50">{error}</div>
          <LogoutButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Dashboard Mahasiswa</h1>
          <PemiraLogoutButton />
        </div>

        <div className="space-y-6">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Data Akademik</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nama</p>
                <p className="font-medium text-black">{userData?.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">NPM</p>
                <p className="font-medium text-black">{userData?.npm}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Program Studi</p>
                <p className="font-medium text-black">{userData?.jurusan}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Kelas</p>
                <p className="font-medium text-black">{userData?.kodeKelas}</p>
              </div>
            </div>
          </div>

          <Link
            href="/vote"
            className="block px-6 py-3 rounded-lg bg-green-500 text-white text-center hover:bg-green-600 transition-colors"
          >
            Ya ini saya
          </Link>
        </div>
      </div>
    </div>
  );
}
