export type Kandidat = {
  id: string;
  name: string;
  image: string;
//   visi: string;
//   misi: string;
  votes: number;
  created_at: string;
};

export type Voter = {
  id: string;
  name: string;
  npm: string;
  kelas: string;
  has_voted: boolean;
  created_at: string;
};