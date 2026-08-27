"use client";

import { AdminElectionResult } from "@/types/pemira";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import * as XLSX from "xlsx";

type KandidatTableProps = { elections: AdminElectionResult[] };

export default function KandidatTable({ elections }: KandidatTableProps) {
  const exportToExcel = () => {
    const rows = elections.flatMap((election) =>
      [
        ...election.candidates.map((candidate) => ({
          Election: election.name,
          Opsi: `Paslon ${candidate.ballotNumber || "-"}`,
          Ketua: candidate.chairmanName,
          "Wakil Ketua": candidate.viceChairmanName,
          Suara: candidate.voteCount,
        })),
        {
          Election: election.name,
          Opsi: "Kotak Kosong",
          Ketua: "-",
          "Wakil Ketua": "-",
          Suara: election.emptyVoteCount,
        },
      ]
    );
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Hasil Kandidat");
    XLSX.writeFile(workbook, `hasil_pemira_${new Date().toISOString()}.xlsx`);
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Hasil Kandidat</h2>
          <p className="text-sm text-gray-500">Agregat suara dari pemira_votes</p>
        </div>
        <button onClick={exportToExcel} className="rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700">
          Export Excel
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {['Election', 'Opsi', 'Ketua + Wakil Ketua', 'Suara'].map((heading) => (
                <th key={heading} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-black">
            {elections.flatMap((election) => [
              ...election.candidates.map((candidate) => (
                <tr key={candidate.id}>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">{election.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{candidate.ballotNumber || "-"}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      {candidate.chairmanImage ? (
                        <Image src={candidate.chairmanImage} alt={candidate.chairmanName} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-sm font-semibold text-gray-600">
                          {candidate.chairmanName.charAt(0) || "-"}
                        </div>
                      )}
                      <div className="text-sm text-gray-900">
                        <div className="font-medium">{candidate.chairmanName || "-"}</div>
                        <div className="text-gray-500">{candidate.viceChairmanName || "-"}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {candidate.voteCount} suara
                    </span>
                  </td>
                </tr>
              )),
              <tr key={`${election.id}-empty`}>
                <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
                  {election.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">Kotak Kosong</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                      <FiUsers className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>Kotak Kosong</span>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-700">
                    {election.emptyVoteCount} suara
                  </span>
                </td>
              </tr>,
            ])}
          </tbody>
        </table>
      </div>
    </div>
  );
}
