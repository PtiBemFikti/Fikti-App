import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";
import { getSupabaseServer } from "@/lib/supabase-server";

type CandidateRow = {
  id: number | string;
  ballot_number: number | string | null;
  name: string | null;
  image: string | null;
  chairman_name: string | null;
  chairman_npm: string | null;
  chairman_class: string | null;
  vice_chairman_name: string | null;
  vice_chairman_npm: string | null;
  vice_chairman_class: string | null;
  vision: string | null;
  missions: unknown;
  targets: unknown;
  flagship_programs: unknown;
  innovation_programs: unknown;
};

type CandidateUpdateBody = {
  ballotNumber?: unknown;
  chairmanName?: unknown;
  chairmanNpm?: unknown;
  chairmanClass?: unknown;
  viceChairmanName?: unknown;
  viceChairmanNpm?: unknown;
  viceChairmanClass?: unknown;
  vision?: unknown;
  missions?: unknown;
  targets?: unknown;
  flagshipPrograms?: unknown;
  innovationPrograms?: unknown;
};

class ValidationError extends Error {}

function requiredText(value: unknown, label: string, maxLength = 500): string {
  if (typeof value !== "string" || !value.trim() || value.length > maxLength) {
    throw new ValidationError(`${label} tidak valid`);
  }
  return value.trim();
}

function validateNpm(value: unknown, label: string): string {
  const npm = requiredText(value, label, 30);
  if (!/^\d{6,20}$/.test(npm)) throw new ValidationError(`${label} tidak valid`);
  return npm;
}

function validateBallotNumber(value: unknown): number {
  const numberValue =
    typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isInteger(numberValue) || numberValue <= 0) {
    throw new ValidationError("Nomor paslon harus berupa bilangan bulat positif");
  }
  return numberValue;
}

function validateList(value: unknown, label: string): string[] {
  if (!Array.isArray(value)) throw new ValidationError(`${label} tidak valid`);
  const items = value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
  if (items.length !== value.length || items.some((item) => item.length > 2000)) {
    throw new ValidationError(`${label} tidak valid`);
  }
  if (items.length > 100) throw new ValidationError(`${label} terlalu banyak`);
  return items;
}

function existingList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await getAdminSession())) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  if (!params.id) {
    return NextResponse.json(
      { success: false, message: "ID kandidat tidak valid" },
      { status: 400 }
    );
  }

  try {
    const body = (await request.json()) as CandidateUpdateBody;
    const supabaseServer = getSupabaseServer();
    const { data, error: findError } = await supabaseServer
      .from("pemira_kandidat")
      .select(
        "id, ballot_number, name, image, chairman_name, chairman_npm, chairman_class, vice_chairman_name, vice_chairman_npm, vice_chairman_class, vision, missions, targets, flagship_programs, innovation_programs"
      )
      .eq("id", params.id)
      .maybeSingle();

    if (findError) throw findError;
    if (!data) {
      return NextResponse.json(
        { success: false, message: "Kandidat tidak ditemukan" },
        { status: 404 }
      );
    }

    const existing = data as CandidateRow;
    const ballotNumber =
      body.ballotNumber === undefined
        ? validateBallotNumber(existing.ballot_number)
        : validateBallotNumber(body.ballotNumber);
    const chairmanName =
      body.chairmanName === undefined
        ? requiredText(existing.chairman_name, "Nama ketua")
        : requiredText(body.chairmanName, "Nama ketua");
    const chairmanNpm =
      body.chairmanNpm === undefined
        ? validateNpm(existing.chairman_npm, "NPM ketua")
        : validateNpm(body.chairmanNpm, "NPM ketua");
    const chairmanClass =
      body.chairmanClass === undefined
        ? requiredText(existing.chairman_class, "Kelas ketua")
        : requiredText(body.chairmanClass, "Kelas ketua");
    const viceChairmanName =
      body.viceChairmanName === undefined
        ? requiredText(existing.vice_chairman_name, "Nama wakil ketua")
        : requiredText(body.viceChairmanName, "Nama wakil ketua");
    const viceChairmanNpm =
      body.viceChairmanNpm === undefined
        ? validateNpm(existing.vice_chairman_npm, "NPM wakil ketua")
        : validateNpm(body.viceChairmanNpm, "NPM wakil ketua");
    const viceChairmanClass =
      body.viceChairmanClass === undefined
        ? requiredText(existing.vice_chairman_class, "Kelas wakil ketua")
        : requiredText(body.viceChairmanClass, "Kelas wakil ketua");
    const vision =
      body.vision === undefined
        ? requiredText(existing.vision ?? "", "Visi", 10000)
        : requiredText(body.vision, "Visi", 10000);
    const missions =
      body.missions === undefined
        ? existingList(existing.missions)
        : validateList(body.missions, "Misi");
    const targets =
      body.targets === undefined
        ? existingList(existing.targets)
        : validateList(body.targets, "Target");
    const flagshipPrograms =
      body.flagshipPrograms === undefined
        ? existingList(existing.flagship_programs)
        : validateList(body.flagshipPrograms, "Program unggulan");
    const innovationPrograms =
      body.innovationPrograms === undefined
        ? existingList(existing.innovation_programs)
        : validateList(body.innovationPrograms, "Program inovasi");

    const { error: updateError } = await supabaseServer
      .from("pemira_kandidat")
      .update({
        ballot_number: ballotNumber,
        name: `${chairmanName} & ${viceChairmanName}`,
        image: existing.image || null,
        chairman_name: chairmanName,
        chairman_npm: chairmanNpm,
        chairman_class: chairmanClass,
        vice_chairman_name: viceChairmanName,
        vice_chairman_npm: viceChairmanNpm,
        vice_chairman_class: viceChairmanClass,
        vision,
        missions,
        targets,
        flagship_programs: flagshipPrograms,
        innovation_programs: innovationPrograms,
      })
      .eq("id", params.id);

    if (updateError) {
      if (updateError.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message: "Nomor paslon tersebut sudah digunakan pada election ini.",
          },
          { status: 409 }
        );
      }
      throw updateError;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ValidationError) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    console.error(
      "[ADMIN CANDIDATE UPDATE ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Gagal menyimpan perubahan kandidat" },
      { status: 500 }
    );
  }
}
