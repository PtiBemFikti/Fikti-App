// app/admin/dashboard/page.tsx
"use client";

import { useState, useEffect } from "react";
import { getAdminSession } from "@/lib/admin-auth";
import { supabase } from "@/lib/supabase";
import { Kandidat, Voter } from "@/types/pemira";
import LoadingSpinner from "@/components/pemira/ui/LoadingSpinner";
import ErrorDisplay from "@/components/pemira/ui/ErrorDisplay";
import Header from "@/components/pemira/admin/Header";
import StatsCards from "@/components/pemira/admin/StatsCards";
import KandidatTable from "@/components/pemira/admin/KandidatTable";
import VotersTable from "@/components/pemira/admin/VotersTable";

export default function AdminDashboard() {
  const [kandidat, setKandidat] = useState<Kandidat[]>([]);
  const [voters, setVoters] = useState<Voter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data: kandidatData, error: kandidatError } = await supabase
          .from("pemira_kandidat")
          .select("*")
          .order("votes", { ascending: false });

        const { data: votersData, error: votersError } = await supabase
          .from("pemira_voters")
          .select("*")
          .order("created_at", { ascending: false });

        if (kandidatError || votersError) {
          throw new Error(kandidatError?.message || votersError?.message);
        }

        setKandidat(kandidatData || []);
        setVoters(votersData || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Gagal memuat data");
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hitung statistik
  const totalVoters = voters.length;
  const votedCount = voters.filter((v) => v.has_voted).length;
  const votePercentage =
    totalVoters > 0 ? Math.round((votedCount / totalVoters) * 100) : 0;

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        <StatsCards
          kandidatCount={kandidat.length}
          totalVoters={totalVoters}
          votePercentage={votePercentage}
        />

        <KandidatTable kandidat={kandidat} />
        <VotersTable voters={voters} />
      </main>
    </div>
  );
}
