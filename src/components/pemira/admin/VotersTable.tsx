"use client";

import { normalizePemiraProgramStudy } from "@/lib/pemira-eligibility";
import {
  filterAdminVoters,
  paginateAdminVoters,
  type AdminProgramFilter,
  type AdminStatusFilter,
} from "@/lib/pemira-admin-voters";
import { AdminVoter, AdminVoterElectionStatus } from "@/types/pemira";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import * as XLSX from "xlsx";

type VotersTableProps = { voters: AdminVoter[] };

const PAGE_SIZES = [25, 50, 100] as const;

export default function VotersTable({ voters }: VotersTableProps) {
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const [programFilter, setProgramFilter] =
    useState<AdminProgramFilter>("all");
  const [bemStatus, setBemStatus] = useState<AdminStatusFilter>("all");
  const [himsiStatus, setHimsiStatus] =
    useState<AdminStatusFilter>("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<(typeof PAGE_SIZES)[number]>(25);

  const filteredVoters = useMemo(() => {
    return filterAdminVoters(voters, {
      search: deferredSearch,
      program: programFilter,
      bemStatus,
      himsiStatus,
    });
  }, [bemStatus, deferredSearch, himsiStatus, programFilter, voters]);

  const pagination = paginateAdminVoters(filteredVoters, page, pageSize);
  const {
    page: currentPage,
    totalItems,
    totalPages,
    startIndex: pageStart,
  } = pagination;
  const paginatedVoters = pagination.items;
  const displayStart = totalItems === 0 ? 0 : pageStart + 1;
  const displayEnd = Math.min(pageStart + pageSize, totalItems);
  const hasActiveFilters =
    Boolean(search.trim()) ||
    programFilter !== "all" ||
    bemStatus !== "all" ||
    himsiStatus !== "all";

  useEffect(() => {
    setPage((current) => Math.min(Math.max(current, 1), totalPages));
  }, [totalPages]);

  const resetFilters = () => {
    setSearch("");
    setProgramFilter("all");
    setBemStatus("all");
    setHimsiStatus("all");
    setPage(1);
  };

  const exportToExcel = () => {
    const rows = filteredVoters.map((voter) => ({
      NPM: voter.npm,
      "Program Studi": formatProgramStudy(voter.programStudi),
      Kelas: voter.kelas,
      "BEM Status": formatStatus(voter.bem),
      "HIMSI Status": formatStatus(voter.himsi),
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Pemilih");
    XLSX.writeFile(workbook, `pemilih_${new Date().toISOString()}.xlsx`);
  };

  return (
    <section className="rounded-xl bg-white p-4 shadow sm:p-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Daftar Pemilih</h2>
          <p className="mt-1 text-sm text-gray-500">
            Status per election; pilihan individual tidak ditampilkan.
          </p>
        </div>
        <button
          type="button"
          onClick={exportToExcel}
          disabled={filteredVoters.length === 0}
          className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Export Excel ({filteredVoters.length})
        </button>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(260px,1.6fr)_repeat(3,minmax(160px,1fr))_auto] xl:items-end">
        <label className="min-w-0 sm:col-span-2 xl:col-span-1">
          <span className="mb-1.5 block text-sm font-medium text-gray-700">
            Cari voter
          </span>
          <span className="relative block">
            <FiSearch
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setPage(1);
              }}
              placeholder="Cari NPM, program studi, atau kelas..."
              className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-9 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#19554B] focus:ring-2 focus:ring-[#19554B]/20 sm:text-sm"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
                aria-label="Hapus pencarian"
                className="absolute right-2 top-1/2 rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19554B]"
              >
                <FiX className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </span>
        </label>

        <FilterSelect
          label="Program Studi"
          value={programFilter}
          onChange={(value) => {
            setProgramFilter(value as AdminProgramFilter);
            setPage(1);
          }}
          options={[
            ["all", "Semua"],
            ["SI", "Sistem Informasi"],
            ["SK", "Sistem Komputer"],
          ]}
        />
        <FilterSelect
          label="Status BEM"
          value={bemStatus}
          onChange={(value) => {
            setBemStatus(value as AdminStatusFilter);
            setPage(1);
          }}
          options={[
            ["all", "Semua"],
            ["voted", "Sudah Memilih"],
            ["not-voted", "Belum Memilih"],
          ]}
        />
        <FilterSelect
          label="Status HIMSI"
          value={himsiStatus}
          onChange={(value) => {
            setHimsiStatus(value as AdminStatusFilter);
            setPage(1);
          }}
          options={[
            ["all", "Semua"],
            ["voted", "Sudah Memilih"],
            ["not-voted", "Belum Memilih"],
            ["not-eligible", "Tidak Berhak"],
          ]}
        />

        {hasActiveFilters && (
          <button
            type="button"
            onClick={resetFilters}
            className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19554B] focus-visible:ring-offset-2"
          >
            Reset Filter
          </button>
        )}
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {["No", "NPM", "Program Studi", "Kelas", "BEM", "HIMSI"].map(
                (heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 sm:px-6"
                  >
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {paginatedVoters.length > 0 ? (
              paginatedVoters.map((voter, index) => (
                <tr key={voter.id}>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700 sm:px-6">
                    {pageStart + index + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 sm:px-6">
                    {voter.npm}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 sm:px-6">
                    {formatProgramStudy(voter.programStudi)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-600 sm:px-6">
                    {voter.kelas}
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                    <StatusBadge status={voter.bem} />
                  </td>
                  <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                    <StatusBadge status={voter.himsi} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="px-6 py-10 text-center text-sm text-gray-500"
                >
                  Tidak ada data voter yang sesuai.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="tabular-nums">
          Menampilkan {displayStart}–{displayEnd} dari {totalItems} voter
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="flex items-center gap-2">
            <span>Baris</span>
            <select
              value={pageSize}
              onChange={(event) => {
                setPageSize(
                  Number(event.target.value) as (typeof PAGE_SIZES)[number]
                );
                setPage(1);
              }}
              aria-label="Jumlah voter per halaman"
              className="rounded-md border border-gray-300 bg-white px-2 py-1.5 text-gray-800 focus:border-[#19554B] focus:outline-none focus:ring-2 focus:ring-[#19554B]/20"
            >
              {PAGE_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            onClick={() => setPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            aria-label="Halaman sebelumnya"
            className="rounded-md border border-gray-300 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19554B] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Sebelumnya
          </button>
          <span className="min-w-[88px] text-center tabular-nums text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <button
            type="button"
            onClick={() =>
              setPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage >= totalPages}
            aria-label="Halaman berikutnya"
            className="rounded-md border border-gray-300 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19554B] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Berikutnya
          </button>
        </div>
      </div>
    </section>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<readonly [string, string]>;
}) {
  return (
    <label>
      <span className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base text-gray-900 outline-none focus:border-[#19554B] focus:ring-2 focus:ring-[#19554B]/20 sm:text-sm"
      >
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  );
}

function formatProgramStudy(value: string): string {
  const program = normalizePemiraProgramStudy(value);
  if (program === "SI") return "Sistem Informasi";
  if (program === "SK") return "Sistem Komputer";
  if (program === "UNKNOWN") return "Tidak diketahui";
  return value || "Program lain";
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
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold leading-5 ${className}`}
    >
      {formatStatus(status)}
    </span>
  );
}
