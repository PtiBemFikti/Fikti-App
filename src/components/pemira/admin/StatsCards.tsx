// components/admin/StatsCards.tsx

import StatCard from "./StatCard";

type StatsCardsProps = {
  kandidatCount: number;
  totalVoters: number;
  votePercentage: number;
};

export default function StatsCards({
  kandidatCount,
  totalVoters,
  votePercentage,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Total Kandidat" value={kandidatCount} color="blue" />
      <StatCard title="Total Pemilih" value={totalVoters} color="green" />
      <StatCard
        title="Partisipasi"
        value={`${votePercentage}%`}
        color="purple"
      />
    </div>
  );
}
