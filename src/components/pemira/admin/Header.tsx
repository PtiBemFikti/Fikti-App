"use client";

import { getAdminSession, logoutAdmin } from "@/lib/admin-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    getAdminSession().then((session) => setUsername(session?.username ?? ""));
  }, []);

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/pemira/admin/login");
  };

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Link href="/pemira/admin/dashboard" className="text-sm text-indigo-600 hover:text-indigo-800">
            Dashboard
          </Link>
          <Link href="/pemira/admin/candidates" className="text-sm text-indigo-600 hover:text-indigo-800">
            Kelola Kandidat
          </Link>
          <span className="text-sm text-gray-500">
            Logged in as: {username || "Admin"}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
