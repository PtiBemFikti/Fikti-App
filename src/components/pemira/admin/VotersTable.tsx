"use client";

import { AdminVoter, AdminVoterElectionStatus } from "@/types/pemira";
import * as XLSX from "xlsx";

type VotersTableProps = { voters: AdminVoter[] };

export default function VotersTable({ voters }: VotersTableProps) {
  const exportToExcel = () => {
    const rows = voters.map((voter) => ({
      NPM: voter.npm,
      "Program Studi": voter.programStudi,
      Kelas: voter.kelas,
      BEM: formatStatus(voter.bem),
      HIMSI: formatStatus(voter.himsi),
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pemilih");
    XLSX.writeFile(workbook, `pemilih_${new Date().toISOString()}.xlsx`);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Daftar Pemilih</h2>
          <p className="text-sm text-gray-500">Status voting per election; pilihan kandidat tidak ditampilkan.</p>
        </div>
        <button onClick={exportToExcel} className="rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700">
          Export Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['No', 'NPM', 'Program Studi', 'Kelas', 'BEM', 'HIMSI'].map((heading) => (
                <th key={heading} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {voters.map((voter, index) => (
              <tr key={voter.id}>
                <td className="whitespace-nowrap px-6 py-4 text-black">{index + 1}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{voter.npm}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{voter.programStudi}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{voter.kelas}</td>
                <td className="whitespace-nowrap px-6 py-4"><StatusBadge status={voter.bem} /></td>
                <td className="whitespace-nowrap px-6 py-4"><StatusBadge status={voter.himsi} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatStatus(status: AdminVoterElectionStatus): string {
  if (status === "voted") return "Sudah Memilih";
  if (status === "not-eligible") return "Tidak Berhak";
  return "Belum Memilih";
}

function StatusBadge({ status }: { status: AdminVoterElectionStatus }) {
  const className =
    status === "voted"
      ? "bg-green-100 text-green-800"
      : status === "not-eligible"
        ? "bg-gray-100 text-gray-700"
        : "bg-yellow-100 text-yellow-800";

  return (
    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${className}`}>
      {formatStatus(status)}
    </span>
  );
}
