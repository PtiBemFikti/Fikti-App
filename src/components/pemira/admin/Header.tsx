// components/admin/Header.tsx
"use client";

import { getAdminSession, logoutAdmin } from "@/lib/admin-auth";

export default function Header() {
  const session = getAdminSession();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Logged in as: {session?.username}
          </span>
          <button
            onClick={logoutAdmin}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
