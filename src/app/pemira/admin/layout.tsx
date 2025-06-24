"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAdminAuthenticated, verifyAdminSession } from "@/lib/admin-auth";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authStatus, setAuthStatus] = useState<
    "checking" | "authenticated" | "unauthenticated"
  >("checking");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setAuthStatus("checking");

        // Skip auth check for login page
        if (pathname === "/pemira/admin/login") {
          setAuthStatus("authenticated");
          return;
        }

        const sessionExists = isAdminAuthenticated();
        if (!sessionExists) {
          throw new Error("No session found");
        }

        const isValid = await verifyAdminSession();
        if (!isValid) {
          throw new Error("Invalid session");
        }

        setAuthStatus("authenticated");
      } catch (error) {
        console.error("Authentication error:", error);
        setAuthStatus("unauthenticated");
        router.push("/pemira/admin/login");
      }
    };

    checkAuth();
  }, [router, pathname]);

  if (authStatus === "checking") {
    return (
      <div className="w-screen h-screen flec items-center justify-center bg-white">
        <p>Loading...</p>
      </div>
    );
  }

  if (authStatus === "unauthenticated") {
    return null;
  }

  return <>{children}</>;
}
