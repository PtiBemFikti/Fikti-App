"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/pemira/admin/Header";
import LoadingSpinner from "@/components/pemira/ui/LoadingSpinner";
import ErrorDisplay from "@/components/pemira/ui/ErrorDisplay";
import {
  AdminManagedCandidate,
  AdminManagedElection,
} from "@/types/pemira";

type ArrayField =
  | "missions"
  | "targets"
  | "flagshipPrograms"
  | "innovationPrograms";

type PhotoFiles = {
  chairman?: File;
  viceChairman?: File;
};

const arrayLabels: Record<ArrayField, string> = {
  missions: "Misi",
  targets: "Target / Impian",
  flagshipPrograms: "Program Unggulan",
  innovationPrograms: "Program Inovasi",
};

export default function AdminCandidatesPage() {
  const [elections, setElections] = useState<AdminManagedElection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [editingCandidate, setEditingCandidate] = useState<string | number | null>(null);
  const [photoFiles, setPhotoFiles] = useState<Record<string, PhotoFiles>>({});

  useEffect(() => {
    void loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/pemira/candidates", {
        cache: "no-store",
      });
      const result = (await response.json()) as {
        success: boolean;
        data?: AdminManagedElection[];
        message?: string;
      };
      if (!response.ok || !result.success || !result.data) {
        throw new Error(result.message || "Gagal memuat data kandidat");
      }
      setElections(result.data);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Gagal memuat data kandidat");
    } finally {
      setLoading(false);
    }
  }

  function updateCandidate(
    candidateId: string | number,
    updater: (candidate: AdminManagedCandidate) => AdminManagedCandidate
  ) {
    setElections((current) =>
      current.map((election) => ({
        ...election,
        candidates: election.candidates.map((candidate) =>
          String(candidate.id) === String(candidateId) ? updater(candidate) : candidate
        ),
      }))
    );
  }

  function updateElection(
    electionId: string | number,
    updater: (election: AdminManagedElection) => AdminManagedElection
  ) {
    setElections((current) =>
      current.map((election) =>
        String(election.id) === String(electionId) ? updater(election) : election
      )
    );
  }

  async function saveCandidate(candidate: AdminManagedCandidate) {
    setSaving(String(candidate.id));
    setMessage("");
    setError("");
    try {
      const response = await fetch(`/api/admin/pemira/candidates/${candidate.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(candidate),
      });
      const result = (await response.json()) as { success: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal menyimpan kandidat");
      }

      const files = photoFiles[String(candidate.id)];
      for (const role of ["chairman", "viceChairman"] as const) {
        const file = files?.[role];
        if (!file) continue;
        const formData = new FormData();
        formData.append("role", role);
        formData.append("file", file);
        const uploadResponse = await fetch(
          `/api/admin/pemira/candidates/${candidate.id}/image`,
          { method: "POST", body: formData }
        );
        const uploadResult = (await uploadResponse.json()) as {
          success: boolean;
          data?: { imageUrl: string };
          message?: string;
        };
        if (!uploadResponse.ok || !uploadResult.success || !uploadResult.data) {
          throw new Error(uploadResult.message || "Gagal mengunggah foto kandidat");
        }
        updateCandidate(candidate.id, (current) =>
          role === "chairman"
            ? { ...current, chairmanImage: uploadResult.data!.imageUrl }
            : { ...current, viceChairmanImage: uploadResult.data!.imageUrl }
        );
      }

      setPhotoFiles((current) => ({ ...current, [String(candidate.id)]: {} }));
      setMessage("Perubahan kandidat berhasil disimpan.");
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Gagal menyimpan kandidat");
    } finally {
      setSaving(null);
    }
  }

  async function saveElection(election: AdminManagedElection) {
    setSaving(`election-${election.id}`);
    setMessage("");
    setError("");
    try {
      const response = await fetch(`/api/admin/pemira/elections/${election.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: election.name,
          description: election.description,
          isActive: election.isActive,
        }),
      });
      const result = (await response.json()) as { success: boolean; message?: string };
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Gagal menyimpan election");
      }
      setMessage(`${election.name} berhasil diperbarui.`);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Gagal menyimpan election");
    } finally {
      setSaving(null);
    }
  }

  if (loading) return <LoadingSpinner />;
  if (error && !elections.length) return <ErrorDisplay message={error} />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-7xl space-y-6 px-4 pb-24 py-6 sm:px-6 sm:pb-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Kelola Kandidat</h1>
            <p className="text-sm text-gray-500">Kelola konten pasangan calon dan metadata election.</p>
          </div>
          <Link href="/pemira/admin/dashboard" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            Kembali ke Dashboard
          </Link>
        </div>

        {message && <div className="rounded-lg bg-green-50 p-4 text-green-700">{message}</div>}
        {error && <div className="rounded-lg bg-red-50 p-4 text-red-700">{error}</div>}

        {elections.map((election) => (
          <section key={election.id} className="space-y-5 rounded-lg bg-white p-6 shadow">
            <div className="grid gap-4 border-b border-gray-200 pb-5 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">{election.slug}</p>
                <input
                  value={election.name}
                  onChange={(event) => updateElection(election.id, (current) => ({ ...current, name: event.target.value }))}
                  className="mt-1 w-full rounded-md border bg-white px-3 py-2 text-xl font-semibold text-slate-900 placeholder:text-slate-400"
                />
                <textarea
                  value={election.description}
                  onChange={(event) => updateElection(election.id, (current) => ({ ...current, description: event.target.value }))}
                  className="mt-2 min-h-20 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400"
                  placeholder="Deskripsi election"
                />
                <label className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={election.isActive}
                    onChange={(event) => updateElection(election.id, (current) => ({ ...current, isActive: event.target.checked }))}
                  />
                  Election aktif
                </label>
              </div>
              <button
                onClick={() => void saveElection(election)}
                disabled={saving === `election-${election.id}`}
                className="self-start rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving === `election-${election.id}` ? "Menyimpan..." : "Simpan Election"}
              </button>
            </div>

            <div className="space-y-4">
              {election.candidates.map((candidate) => (
                <CandidateEditor
                  key={candidate.id}
                  candidate={candidate}
                  editing={String(editingCandidate) === String(candidate.id)}
                  saving={saving === String(candidate.id)}
                  files={photoFiles[String(candidate.id)] ?? {}}
                  onEdit={() => setEditingCandidate(candidate.id)}
                  onCancel={() => setEditingCandidate(null)}
                  onSave={() => void saveCandidate(candidate)}
                  onChange={(updater) => updateCandidate(candidate.id, updater)}
                  onFileChange={(role, file) =>
                    setPhotoFiles((current) => ({
                      ...current,
                      [String(candidate.id)]: {
                        ...current[String(candidate.id)],
                        [role]: file,
                      },
                    }))
                  }
                />
              ))}
              {!election.candidates.length && (
                <p className="rounded-md bg-gray-50 p-4 text-sm text-gray-500">Belum ada pasangan calon pada election ini.</p>
              )}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

function CandidateEditor({
  candidate,
  editing,
  saving,
  files,
  onEdit,
  onCancel,
  onSave,
  onChange,
  onFileChange,
}: {
  candidate: AdminManagedCandidate;
  editing: boolean;
  saving: boolean;
  files: PhotoFiles;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onChange: (updater: (candidate: AdminManagedCandidate) => AdminManagedCandidate) => void;
  onFileChange: (role: "chairman" | "viceChairman", file: File | undefined) => void;
}) {
  if (!editing) {
    return (
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray-200 p-4">
        <div>
          <p className="text-sm font-semibold text-indigo-600">Paslon {candidate.ballotNumber || "-"}</p>
          <p className="font-medium text-gray-900">{candidate.chairmanName || "-"}</p>
          <p className="text-sm text-gray-500">{candidate.viceChairmanName || "-"}</p>
        </div>
        <button onClick={onEdit} className="rounded-md border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5 rounded-lg border border-indigo-200 bg-indigo-50/30 p-5">
      <div className="grid gap-4 md:grid-cols-3">
        <TextInput label="Nomor Paslon" value={candidate.ballotNumber} onChange={(value) => onChange((current) => ({ ...current, ballotNumber: value }))} />
        <TextInput label="Nama Ketua" value={candidate.chairmanName} onChange={(value) => onChange((current) => ({ ...current, chairmanName: value }))} />
        <TextInput label="NPM Ketua" value={candidate.chairmanNpm} onChange={(value) => onChange((current) => ({ ...current, chairmanNpm: value }))} />
        <TextInput label="Kelas Ketua" value={candidate.chairmanClass} onChange={(value) => onChange((current) => ({ ...current, chairmanClass: value }))} />
        <TextInput label="Nama Wakil Ketua" value={candidate.viceChairmanName} onChange={(value) => onChange((current) => ({ ...current, viceChairmanName: value }))} />
        <TextInput label="NPM Wakil Ketua" value={candidate.viceChairmanNpm} onChange={(value) => onChange((current) => ({ ...current, viceChairmanNpm: value }))} />
        <TextInput label="Kelas Wakil Ketua" value={candidate.viceChairmanClass} onChange={(value) => onChange((current) => ({ ...current, viceChairmanClass: value }))} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <PhotoInput label="Foto Ketua" currentUrl={candidate.chairmanImage} file={files.chairman} onChange={(file) => onFileChange("chairman", file)} />
        <PhotoInput label="Foto Wakil Ketua" currentUrl={candidate.viceChairmanImage} file={files.viceChairman} onChange={(file) => onFileChange("viceChairman", file)} />
      </div>

      <label className="block text-sm font-medium text-gray-700">
        Visi
        <textarea value={candidate.vision} onChange={(event) => onChange((current) => ({ ...current, vision: event.target.value }))} className="mt-1 min-h-28 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400" />
      </label>

      <div className="grid gap-5 lg:grid-cols-2">
        {(Object.keys(arrayLabels) as ArrayField[]).map((field) => (
          <ArrayEditor
            key={field}
            label={arrayLabels[field]}
            values={candidate[field]}
            onChange={(values) => onChange((current) => ({ ...current, [field]: values }))}
          />
        ))}
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={onCancel} disabled={saving} className="rounded-md border px-4 py-2 text-sm text-gray-700 hover:bg-white disabled:opacity-60">Batal</button>
        <button onClick={onSave} disabled={saving} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60">
          {saving ? "Menyimpan..." : "Simpan Kandidat"}
        </button>
      </div>
    </div>
  );
}

function TextInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 w-full rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400" />
    </label>
  );
}

function PhotoInput({ label, currentUrl, file, onChange }: { label: string; currentUrl: string; file?: File; onChange: (file: File | undefined) => void }) {
  const preview = file ? URL.createObjectURL(file) : currentUrl;
  return (
    <label className="block rounded-md border bg-white p-3 text-sm font-medium text-gray-700">
      {label}
      <div className="mt-2 flex items-center gap-3">
        {preview ? (
          // Blob previews from a newly selected local file cannot use next/image.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={preview} alt="Preview kandidat" className="h-16 w-16 rounded-full object-cover" />
        ) : <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500">Belum ada</div>}
        <div>
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => onChange(event.target.files?.[0])} className="block max-w-full text-xs" />
          <p className="mt-1 text-xs font-normal text-gray-500">JPG, PNG, WebP; maksimal 5 MB.</p>
        </div>
      </div>
    </label>
  );
}

function ArrayEditor({ label, values, onChange }: { label: string; values: string[]; onChange: (values: string[]) => void }) {
  return (
    <div className="rounded-md border bg-white p-3">
      <p className="mb-2 text-sm font-semibold text-gray-800">{label}</p>
      <div className="space-y-2">
        {values.map((value, index) => (
          <div key={`${label}-${index}`} className="flex gap-2">
            <input value={value} onChange={(event) => onChange(values.map((item, itemIndex) => itemIndex === index ? event.target.value : item))} className="min-w-0 flex-1 rounded-md border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400" />
            <button type="button" onClick={() => onChange(values.filter((_, itemIndex) => itemIndex !== index))} className="rounded-md px-2 text-sm text-red-600 hover:bg-red-50">Hapus</button>
          </div>
        ))}
      </div>
      <button type="button" onClick={() => onChange([...values, ""])} className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-800">+ Tambah {label}</button>
    </div>
  );
}
