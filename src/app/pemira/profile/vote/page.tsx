"use client";

import CandidateList from "@/components/pemira/profile/CandidateList";
import VoteConfirmationModal from "@/components/pemira/profile/VoteConfirmationModal";
import VoteStatus from "@/components/pemira/profile/VoteStatus";
import { isPemiraOpen } from "@/lib/pemira-config";
import { PemiraElection, PendingVote, VoteCheckResponse } from "@/types/pemira";
import { useEffect, useState } from "react";

export default function VotePage() {
  const [elections, setElections] = useState<PemiraElection[]>([]);
  const [voteStatuses, setVoteStatuses] = useState<VoteCheckResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedVote, setSelectedVote] = useState<PendingVote | null>(null);
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

  const handleVote = (selection: PendingVote) => {
    setSelectedVote(selection);
    setShowConfirmation(true);
  };

  const confirmVote = async () => {
    if (!selectedVote) return;

    try {
      const payload =
        selectedVote.choice === "candidate" && selectedVote.candidate
          ? {
              electionId: selectedVote.election.id,
              choice: selectedVote.choice,
              candidateId: selectedVote.candidate.id,
            }
          : {
              electionId: selectedVote.election.id,
              choice: selectedVote.choice,
            };

      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Gagal melakukan vote");

      setVoteStatuses((current) => {
        if (!current) return current;
        return {
          ...current,
          [selectedVote.election.slug]: {
            ...current[selectedVote.election.slug],
            hasVoted: true,
          },
        };
      });
      setShowConfirmation(false);
      setSelectedVote(null);
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
    <div className="w-full">
      <div className="mx-auto w-full max-w-6xl space-y-6 sm:space-y-8">
        {elections.map((election) => (
          <CandidateList
            key={election.id}
            election={election}
            status={voteStatuses?.[election.slug] ?? { eligible: false, hasVoted: false }}
            handleVote={handleVote}
            selectedVote={selectedVote}
          />
        ))}
      </div>

      <VoteConfirmationModal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          setSelectedVote(null);
        }}
        selection={selectedVote}
        onConfirm={confirmVote}
      />
    </div>
  );
}

function getVotingPeriodStatus(): "not_started" | "ongoing" {
  return isPemiraOpen() ? "ongoing" : "not_started";
}
