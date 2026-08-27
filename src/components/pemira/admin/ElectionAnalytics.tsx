import { AdminElectionResult } from "@/types/pemira";

type ElectionAnalyticsProps = {
  election: AdminElectionResult;
};

export default function ElectionAnalytics({
  election,
}: ElectionAnalyticsProps) {
  const resultOptions = [
    ...election.candidates.map((candidate) => ({
      id: `candidate-${candidate.id}`,
      label: `Paslon ${candidate.ballotNumber || "-"}`,
      count: candidate.voteCount,
      barClassName: "bg-[#19554B]",
    })),
    {
      id: "empty",
      label: "Kotak Kosong",
      count: election.emptyVoteCount,
      barClassName: "bg-[#79558E]",
    },
  ];

  return (
    <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
      <div className="rounded-xl bg-white p-4 shadow sm:p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900">Turnout Voter Terdata</h3>
          <p className="mt-1 text-sm text-gray-500">
            Berdasarkan voter yang sudah tercatat di sistem PEMIRA.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <Metric label="Eligible Terdata" value={election.eligibleVoterCount} />
          <Metric label="Sudah Memilih" value={election.votedVoterCount} />
          <Metric label="Belum Memilih" value={election.notVotedVoterCount} />
          <Metric
            label="Turnout"
            value={`${formatPercentage(election.turnoutPercentage)}%`}
          />
        </dl>
      </div>

      <div className="rounded-xl bg-white p-4 shadow sm:p-5">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900">Distribusi Hasil</h3>
          <p className="mt-1 text-sm text-gray-500">
            Persentase dihitung dari {election.totalVotes} suara pada election ini.
          </p>
        </div>

        <div className="space-y-4">
          {resultOptions.map((option) => {
            const percentage = getPercentage(option.count, election.totalVotes);

            return (
              <div
                key={option.id}
                role="img"
                aria-label={`${option.label}: ${option.count} suara, ${formatPercentage(percentage)} persen`}
              >
                <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2 text-sm">
                  <span className="font-medium text-gray-800">{option.label}</span>
                  <span className="tabular-nums text-gray-600">
                    {option.count} suara · {formatPercentage(percentage)}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${option.barClassName}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="min-w-0 border-b border-gray-100 pb-2">
      <dt className="text-gray-500">{label}</dt>
      <dd className="mt-1 text-lg font-semibold tabular-nums text-gray-900">
        {value}
      </dd>
    </div>
  );
}

function getPercentage(count: number, total: number): number {
  return total > 0 ? Math.min(100, Math.max(0, (count / total) * 100)) : 0;
}

function formatPercentage(value: number): string {
  return Number.isFinite(value) ? value.toFixed(1) : "0.0";
}
