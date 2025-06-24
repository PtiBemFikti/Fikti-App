// components/admin/KandidatTable.tsx
"use client";

import { Kandidat } from "@/types/pemira";
import * as XLSX from "xlsx";

type KandidatTableProps = {
  kandidat: Kandidat[];
};

export default function KandidatTable({ kandidat }: KandidatTableProps) {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(kandidat);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Kandidat");
    XLSX.writeFile(workbook, `kandidat_${new Date().toISOString()}.xlsx`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Daftar Kandidat</h2>
        <div className="flex space-x-2">
          <span className="text-sm text-gray-500">
            Urutan berdasarkan jumlah suara
          </span>
          <button
            onClick={exportToExcel}
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm"
          >
            Export Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Suara
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-black">
            {kandidat.map((kandidat, index) => (
              <tr key={kandidat.id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {/* <Image
                        src={kandidat.image}
                        alt={kandidat.name}
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      /> */}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {kandidat.name}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {kandidat.votes} suara
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
