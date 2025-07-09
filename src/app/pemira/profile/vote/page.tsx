"use client";

import CandidateList from "@/components/pemira/profile/CandidateList";
import VoteConfirmationModal from "@/components/pemira/profile/VoteConfirmationModal";
import VoteStatus from "@/components/pemira/profile/VoteStatus";
import { useEffect, useState } from "react";

interface Candidate {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function VotePage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(
    null
  );
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [votingStatus, setVotingStatus] = useState<"not_started" | "ongoing">(
    "ongoing"
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const status = getVotingPeriodStatus();
        setVotingStatus(status);

        if (status === "not_started") {
          setLoading(false);
          return;
        }

        const checkRes = await fetch("/api/vote/check");
        const checkData = await checkRes.json();

        if (checkData.success) {
          setHasVoted(checkData.data.has_voted);
        }

        const res = await fetch("/api/candidates");
        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setCandidates(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleVote = (candidateId: number) => {
    setSelectedCandidate(candidateId);
    setShowConfirmation(true);
  };

  const confirmVote = async () => {
    try {
      if (!selectedCandidate) return;

      const res = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedCandidate }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal melakukan vote");
      }

      setHasVoted(true);
      setShowConfirmation(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Terjadi kesalahan");
      setShowConfirmation(false);
    }
  };

  const getVotingPeriodStatus = () => {
    const votingStartDate = new Date("2025-08-25T00:00:00"); //25 agustus
    const currentDate = new Date();

    if (currentDate < votingStartDate) {
      return "not_started";
    }
    return "ongoing";
  };

  if (loading || error || votingStatus === "not_started" || hasVoted) {
    return (
      <VoteStatus
        loading={loading}
        error={error}
        votingStatus={votingStatus}
        hasVoted={hasVoted}
      />
    );
  }

  return (
    <div className="p-6">
      <CandidateList candidates={candidates} handleVote={handleVote} />

      <VoteConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        candidate={
          selectedCandidate
            ? candidates.find((c) => c.id === selectedCandidate)
            : null
        }
        onConfirm={confirmVote}
      />
    </div>
  );
}
