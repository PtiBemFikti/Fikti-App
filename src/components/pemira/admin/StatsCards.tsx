// components/admin/StatsCards.tsx

import StatCard from "./StatCard";
import { AdminElectionResult } from "@/types/pemira";
import ElectionAnalytics from "./ElectionAnalytics";

type StatsCardsProps = {
  elections: AdminElectionResult[];
};

export default function StatsCards({ elections }: StatsCardsProps) {
  return (
    <div className="space-y-6">
      {elections.map((election) => (
        <section key={election.id}>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            {election.name}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard title="Total Suara" value={election.totalVotes} color="blue" />
            <StatCard
              title="Pasangan Calon"
              value={election.candidates.length}
              color="green"
            />
            <StatCard
              title="Status Data"
              value={election.totalVotes > 0 ? "Aktif" : "Belum ada suara"}
              color="purple"
            />
          </div>
          <ElectionAnalytics election={election} />
        </section>
      ))}
    </div>
  );
}
