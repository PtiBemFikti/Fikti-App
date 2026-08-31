export type ElectionSlug = "bem" | "himsi";

export type CandidatePerson = {
  name: string;
  npm: string;
  className: string;
  image: string;
};

export type CandidatePair = {
  id: number | string;
  electionId: number | string;
  ballotNumber: string;
  chairman: CandidatePerson;
  viceChairman: CandidatePerson;
  vision: string;
  missions: string[];
  targets: string[];
  flagshipPrograms: string[];
  innovationPrograms: string[];
};

export type PemiraElection = {
  id: number | string;
  slug: ElectionSlug;
  name: string;
  candidates: CandidatePair[];
};

export type ElectionVoteStatus = {
  eligible: boolean;
  hasVoted: boolean;
};

export type VoteCheckResponse = Record<ElectionSlug, ElectionVoteStatus>;

export type VoteChoice = "candidate" | "empty";

export type PendingVote = {
  election: PemiraElection;
  choice: VoteChoice;
  candidate: CandidatePair | null;
};

/** Legacy admin shape kept until the admin dashboard is migrated. */
export type Kandidat = {
  id: string;
  name: string;
  image: string;
  votes: number;
  created_at: string;
};

/** Legacy admin shape kept until the admin dashboard is migrated. */
export type Voter = {
  id: string;
  name: string;
  npm: string;
  kelas: string;
  has_voted: boolean;
  created_at: string;
};

export type AdminCandidateResult = {
  id: number | string;
  ballotNumber: string;
  chairmanName: string;
  chairmanImage: string;
  viceChairmanName: string;
  voteCount: number;
};

export type AdminElectionResult = {
  id: number | string;
  slug: ElectionSlug;
  name: string;
  totalVotes: number;
  emptyVoteCount: number;
  eligibleVoterCount: number;
  votedVoterCount: number;
  notVotedVoterCount: number;
  turnoutPercentage: number;
  candidates: AdminCandidateResult[];
};

export type AdminVoterElectionStatus = "voted" | "not-voted" | "not-eligible";

export type AdminVoter = {
  id: number | string;
  npm: string;
  programStudi: string;
  kelas: string;
  bem: AdminVoterElectionStatus;
  himsi: AdminVoterElectionStatus;
  bemVotedAt: string | null;
  himsiVotedAt: string | null;
  createdAt: string | null;
};

export type AdminDashboardData = {
  elections: AdminElectionResult[];
  voters: AdminVoter[];
  trackedVoterCount: number;
};

export type AdminManagedCandidate = {
  id: number | string;
  electionId: number | string;
  ballotNumber: string;
  chairmanName: string;
  chairmanNpm: string;
  chairmanClass: string;
  chairmanImage: string;
  viceChairmanName: string;
  viceChairmanNpm: string;
  viceChairmanClass: string;
  viceChairmanImage: string;
  vision: string;
  missions: string[];
  targets: string[];
  flagshipPrograms: string[];
  innovationPrograms: string[];
};

export type AdminManagedElection = {
  id: number | string;
  slug: ElectionSlug;
  name: string;
  description: string;
  isActive: boolean;
  candidates: AdminManagedCandidate[];
};
