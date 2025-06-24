// components/LogoutButton.tsx
"use client";

import { useRouter } from "next/navigation";

export default function PemiraLogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    router.push("/pemira");
    router.refresh();
    await fetch("/api/logout", { method: "GET" });
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
