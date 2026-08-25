"use client";

import CandidateList from "@/components/pemira/profile/CandidateList";
import VoteConfirmationModal from "@/components/pemira/profile/VoteConfirmationModal";
import VoteStatus from "@/components/pemira/profile/VoteStatus";
import { isPemiraOpen } from "@/lib/pemira-config";
import { CandidatePair, PemiraElection, VoteCheckResponse } from "@/types/pemira";
import { useEffect, useState } from "react";

export default function VotePage() {
  const [elections, setElections] = useState<PemiraElection[]>([]);
  const [voteStatuses, setVoteStatuses] = useState<VoteCheckResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState<CandidatePair | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [votingStatus, setVotingStatus] = useState<"not_started" | "ongoing">("ongoing");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const status = getVotingPeriodStatus();
        setVotingStatus(status);

        if (status === "not_started") return;

        const [checkRes, candidatesRes] = await Promise.all([
          fetch("/api/vote/check"),
          fetch("/api/candidates", { cache: "no-store" }),
        ]);
        const checkData = await checkRes.json();
        const candidatesData = await candidatesRes.json();

        if (!checkRes.ok || !checkData.success) {
          throw new Error(checkData.message || "Gagal memeriksa status vote");
        }
        if (!candidatesRes.ok) {
          throw new Error(candidatesData.message || "Gagal mengambil kandidat");
        }

        setVoteStatuses(checkData.data);
        setElections(candidatesData.elections ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVote = (candidate: CandidatePair) => {
    setSelectedCandidate(candidate);
    setShowConfirmation(true);
  };

  const confirmVote = async () => {
    if (!selectedCandidate) return;

    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedCandidate.id }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Gagal melakukan vote");

      setVoteStatuses((current) => {
        if (!current) return current;
        const election = elections.find(
          (item) => String(item.id) === String(selectedCandidate.electionId)
        );
        if (!election) return current;
        return {
          ...current,
          [election.slug]: { ...current[election.slug], hasVoted: true },
        };
      });
      setShowConfirmation(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      setShowConfirmation(false);
    }
  };

  if (loading || error || votingStatus === "not_started") {
    return (
      <VoteStatus
        loading={loading}
        error={error}
        votingStatus={votingStatus}
        hasVoted={false}
      />
    );
  }

  return (
    <div className="p-6">
      <div className="space-y-8 max-w-6xl mx-auto">
        {elections.map((election) => (
          <CandidateList
            key={election.id}
            election={election}
            status={voteStatuses?.[election.slug] ?? { eligible: false, hasVoted: false }}
            handleVote={handleVote}
          />
        ))}
      </div>

      <VoteConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        candidate={selectedCandidate}
        onConfirm={confirmVote}
      />
    </div>
  );
}

function getVotingPeriodStatus(): "not_started" | "ongoing" {
  return isPemiraOpen() ? "ongoing" : "not_started";
}
