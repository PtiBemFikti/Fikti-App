// app/admin/dashboard/page.tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AdminDashboardData } from "@/types/pemira";
import LoadingSpinner from "@/components/pemira/ui/LoadingSpinner";
import ErrorDisplay from "@/components/pemira/ui/ErrorDisplay";
import Header from "@/components/pemira/admin/Header";
import StatsCards from "@/components/pemira/admin/StatsCards";
import KandidatTable from "@/components/pemira/admin/KandidatTable";
import VotersTable from "@/components/pemira/admin/VotersTable";
import { FiRefreshCw } from "react-icons/fi";

export default function AdminDashboard() {
  const [dashboard, setDashboard] = useState<AdminDashboardData>({
    elections: [],
    voters: [],
    trackedVoterCount: 0,
  });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [refreshError, setRefreshError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const requestController = useRef<AbortController | null>(null);

  const fetchData = useCallback(async (initialLoad = false) => {
    requestController.current?.abort();
    const controller = new AbortController();
    requestController.current = controller;

    if (initialLoad) setLoading(true);
    else setRefreshing(true);
    setRefreshError("");

    try {
      const response = await fetch("/api/admin/pemira", {
        cache: "no-store",
        signal: controller.signal,
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
      setLastUpdated(new Date());
      setError("");
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;

      const message =
        err instanceof Error ? err.message : "Gagal memuat data dashboard";
      if (initialLoad) setError(message);
      else setRefreshError(message);
    } finally {
      if (requestController.current === controller) {
        requestController.current = null;
        setLoading(false);
        setRefreshing(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchData(true);
    return () => requestController.current?.abort();
  }, [fetchData]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="mx-auto max-w-7xl space-y-6 px-4 pb-24 py-6 sm:px-6 sm:pb-6 lg:px-8">
        <section className="rounded-xl bg-white p-4 shadow sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Ringkasan PEMIRA
            </h1>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
              <span>
                Voter Terdata: <strong className="text-gray-800">{dashboard.trackedVoterCount}</strong>
              </span>
              <span aria-live="polite">
                Terakhir diperbarui: {formatUpdatedTime(lastUpdated)}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => fetchData(false)}
            disabled={refreshing}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#19554B] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#134239] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#79558E] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-0 sm:w-auto"
          >
            <FiRefreshCw
              className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
              aria-hidden="true"
            />
            {refreshing ? "Memperbarui..." : "Refresh Data"}
          </button>
        </section>

        {refreshError && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            Data lama tetap ditampilkan. Refresh gagal: {refreshError}
          </p>
        )}

        <StatsCards elections={dashboard.elections} />

        <KandidatTable elections={dashboard.elections} />
        <VotersTable voters={dashboard.voters} />
      </main>
    </div>
  );
}

function formatUpdatedTime(value: Date | null): string {
  if (!value) return "Belum tersedia";

  return value.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
