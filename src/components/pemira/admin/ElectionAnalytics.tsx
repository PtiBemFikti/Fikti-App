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
      color: "#19554B",
    })),
    {
      id: "empty",
      label: "Kotak Kosong",
      count: election.emptyVoteCount,
      color: "#79558E",
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
          <h3 className="font-semibold text-gray-900">Distribusi Suara</h3>
          <p className="mt-1 text-sm text-gray-500">
            Persentase dihitung dari {election.totalVotes} suara pada election ini.
          </p>
        </div>

        <div className="grid items-center gap-5 sm:grid-cols-[minmax(0,210px)_minmax(0,1fr)] sm:gap-6">
          <VotePieChart options={resultOptions} total={election.totalVotes} />

          <div className="space-y-3" aria-label="Rincian distribusi suara">
            {resultOptions.map((option) => {
              const percentage = getPercentage(option.count, election.totalVotes);

              return (
                <div key={option.id} className="flex items-start justify-between gap-3 text-sm">
                  <div className="flex min-w-0 items-center gap-2">
                    <span
                      className="mt-0.5 h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: option.color }}
                      aria-hidden="true"
                    />
                    <span className="font-medium text-gray-800">{option.label}</span>
                  </div>
                  <span className="shrink-0 text-right tabular-nums text-gray-600">
                    {option.count} suara · {formatPercentage(percentage)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

type ResultOption = {
  id: string;
  label: string;
  count: number;
  color: string;
};

function VotePieChart({
  options,
  total,
}: {
  options: ResultOption[];
  total: number;
}) {
  let offset = 0;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[210px]"
      role="img"
      aria-label={`Distribusi suara: ${options
        .map(
          (option) =>
            `${option.label} ${option.count} suara, ${formatPercentage(
              getPercentage(option.count, total)
            )} persen`
        )
        .join("; ")}`}
    >
      <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle
          cx="21"
          cy="21"
          r="15.9155"
          fill="none"
          stroke="#F3F4F6"
          strokeWidth="8"
        />
        {total > 0 &&
          options.map((option) => {
            const percentage = getPercentage(option.count, total);
            const segment = (
              <circle
                key={option.id}
                cx="21"
                cy="21"
                r="15.9155"
                fill="none"
                stroke={option.color}
                strokeWidth="8"
                pathLength="100"
                strokeDasharray={`${percentage} ${100 - percentage}`}
                strokeDashoffset={-offset}
              />
            );
            offset += percentage;
            return segment;
          })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-2xl font-bold tabular-nums text-gray-900">{total}</span>
        <span className="text-xs text-gray-500">Total Suara</span>
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
