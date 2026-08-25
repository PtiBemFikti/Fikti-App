import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";
import { getSupabaseServer } from "@/lib/supabase-server";

const BUCKET = "pemira-candidates";
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

type CandidateImageRow = {
  id: number | string;
  chairman_image: string | null;
  vice_chairman_image: string | null;
  image: string | null;
};

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!(await getAdminSession())) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const role = formData.get("role");
    const file = formData.get("file");

    if (role !== "chairman" && role !== "viceChairman") {
      return NextResponse.json(
        { success: false, message: "Peran foto tidak valid" },
        { status: 400 }
      );
    }
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json(
        { success: false, message: "File foto wajib dipilih" },
        { status: 400 }
      );
    }
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: "Ukuran foto maksimal 5 MB" },
        { status: 400 }
      );
    }

    const extension = allowedTypes.get(file.type);
    if (!extension) {
      return NextResponse.json(
        { success: false, message: "Format foto harus JPG, PNG, atau WebP" },
        { status: 400 }
      );
    }

    const supabaseServer = getSupabaseServer();
    const { data: candidate, error: candidateError } = await supabaseServer
      .from("pemira_kandidat")
      .select("id, chairman_image, vice_chairman_image, image")
      .eq("id", params.id)
      .maybeSingle();

    if (candidateError) throw candidateError;
    if (!candidate) {
      return NextResponse.json(
        { success: false, message: "Kandidat tidak ditemukan" },
        { status: 404 }
      );
    }

    const safeId = params.id.replace(/[^a-zA-Z0-9_-]/g, "_");
    const path = `candidate-${safeId}/${role}-${Date.now()}.${extension}`;
    const { error: uploadError } = await supabaseServer.storage
      .from(BUCKET)
      .upload(path, file, { contentType: file.type, upsert: false });

    if (uploadError) {
      console.error("[ADMIN CANDIDATE IMAGE UPLOAD ERROR]", uploadError.message);
      return NextResponse.json(
        {
          success: false,
          message: `Storage bucket ${BUCKET} belum tersedia atau upload ditolak`,
        },
        { status: 503 }
      );
    }

    const { data: publicUrlData } = supabaseServer.storage
      .from(BUCKET)
      .getPublicUrl(path);
    const imageUrl = publicUrlData.publicUrl;
    const candidateRow = candidate as CandidateImageRow;
    const legacyImage =
      role === "chairman"
        ? imageUrl
        : candidateRow.chairman_image || imageUrl;
    const field = role === "chairman" ? "chairman_image" : "vice_chairman_image";

    const { error: updateError } = await supabaseServer
      .from("pemira_kandidat")
      .update({ [field]: imageUrl, image: legacyImage })
      .eq("id", params.id);

    if (updateError) throw updateError;

    return NextResponse.json({ success: true, data: { imageUrl } });
  } catch (error) {
    console.error(
      "[ADMIN CANDIDATE IMAGE ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Gagal menyimpan foto kandidat" },
      { status: 500 }
    );
  }
}
