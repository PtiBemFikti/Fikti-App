"use client";

import { getAdminSession, logoutAdmin } from "@/lib/admin-auth";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiBarChart2, FiLogOut, FiUsers } from "react-icons/fi";

export default function Header() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  const pathname = usePathname() ?? "";

  useEffect(() => {
    getAdminSession().then((session) => setUsername(session?.username ?? ""));
  }, []);

  const handleLogout = async () => {
    await logoutAdmin();
    router.push("/pemira/admin/login");
  };

  return (
    <header className="border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Admin Dashboard</h1>
        <div className="hidden items-center space-x-4 md:flex">
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

      <nav
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-full border border-gray-200 bg-white/95 p-1.5 shadow-[0_12px_30px_rgba(15,23,42,0.16)] backdrop-blur md:hidden"
        aria-label="Navigasi admin"
      >
        <div className="grid grid-cols-3">
          <MobileNavLink
            href="/pemira/admin/dashboard"
            label="Dashboard"
            active={pathname === "/pemira/admin/dashboard"}
          >
            <FiBarChart2 aria-hidden="true" />
          </MobileNavLink>
          <MobileNavLink
            href="/pemira/admin/candidates"
            label="Kandidat"
            active={pathname.startsWith("/pemira/admin/candidates")}
          >
            <FiUsers aria-hidden="true" />
          </MobileNavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-inset"
          >
            <FiLogOut className="h-5 w-5" aria-hidden="true" />
            Keluar
          </button>
        </div>
      </nav>
    </header>
  );
}

function MobileNavLink({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset ${
        active ? "bg-indigo-50 text-indigo-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
      }`}
    >
      <span className="text-lg">{children}</span>
      {label}
    </Link>
  );
}
