// app/admin/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { AdminDashboardData } from "@/types/pemira";
import LoadingSpinner from "@/components/pemira/ui/LoadingSpinner";
import ErrorDisplay from "@/components/pemira/ui/ErrorDisplay";
import Header from "@/components/pemira/admin/Header";
import StatsCards from "@/components/pemira/admin/StatsCards";
import KandidatTable from "@/components/pemira/admin/KandidatTable";
import VotersTable from "@/components/pemira/admin/VotersTable";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState<AdminDashboardData>({
    elections: [],
    voters: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/admin/pemira", {
          cache: "no-store",
        });
        const result = (await response.json()) as {
          success: boolean;
          data?: AdminDashboardData;
          message?: string;
        };

        if (!response.ok || !result.success || !result.data) {
          throw new Error(result.message || "Gagal memuat data dashboard");
        }

        setDashboard(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Gagal memuat data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        <StatsCards
          elections={dashboard.elections}
        />

        <KandidatTable elections={dashboard.elections} />
        <VotersTable voters={dashboard.voters} />
      </main>
    </div>
  );
}
