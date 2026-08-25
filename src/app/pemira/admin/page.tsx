"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { verifyAdminSession } from "@/lib/admin-auth";

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const isLoggedIn = await verifyAdminSession();
      await new Promise((r) => setTimeout(r, 100));

      router.push(
        isLoggedIn ? "/pemira/admin/dashboard" : "/pemira/admin/login"
      );
      setLoading(false);
    };
    run();
  }, [router]);

  return loading ? <div>Loading...</div> : null;
}
