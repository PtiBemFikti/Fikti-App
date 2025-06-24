"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export default function AdminPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = isAdminAuthenticated();

      // Tambahkan delay kecil untuk menghindari flash putih
      await new Promise((resolve) => setTimeout(resolve, 100));

      if (authStatus) {
        router.push("/pemira/admin/dashboard");
      } else {
        router.push("/pemira/admin/login");
      }
      setIsChecking(false);
    };

    checkAuth();
  }, [router]);

  if (isChecking) {
    return (
      <div>
        <p>loading..</p>
      </div>
    );
  }

  return null;
}
