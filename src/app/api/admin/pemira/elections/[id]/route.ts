import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/admin-session";
import { getSupabaseServer } from "@/lib/supabase-server";

type ElectionUpdateBody = {
  name?: unknown;
  description?: unknown;
  isActive?: unknown;
};

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

  try {
    const body = (await request.json()) as ElectionUpdateBody;
    const update: {
      name?: string;
      description?: string;
      is_active?: boolean;
    } = {};

    if (body.name !== undefined) {
      if (typeof body.name !== "string" || !body.name.trim() || body.name.length > 200) {
        return NextResponse.json(
          { success: false, message: "Nama election tidak valid" },
          { status: 400 }
        );
      }
      update.name = body.name.trim();
    }
    if (body.description !== undefined) {
      if (typeof body.description !== "string" || body.description.length > 5000) {
        return NextResponse.json(
          { success: false, message: "Deskripsi election tidak valid" },
          { status: 400 }
        );
      }
      update.description = body.description.trim();
    }
    if (body.isActive !== undefined) {
      if (typeof body.isActive !== "boolean") {
        return NextResponse.json(
          { success: false, message: "Status election tidak valid" },
          { status: 400 }
        );
      }
      update.is_active = body.isActive;
    }

    if (!Object.keys(update).length || !params.id) {
      return NextResponse.json(
        { success: false, message: "Tidak ada perubahan yang valid" },
        { status: 400 }
      );
    }

    const supabaseServer = getSupabaseServer();
    const { data: election, error: findError } = await supabaseServer
      .from("pemira_elections")
      .select("id, slug")
      .eq("id", params.id)
      .maybeSingle();

    if (findError) throw findError;
    if (!election || !["bem", "himsi"].includes(election.slug)) {
      return NextResponse.json(
        { success: false, message: "Election tidak ditemukan" },
        { status: 404 }
      );
    }

    const { error: updateError } = await supabaseServer
      .from("pemira_elections")
      .update(update)
      .eq("id", params.id);

    if (updateError) throw updateError;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "[ADMIN ELECTION UPDATE ERROR]",
      error instanceof Error ? error.message : error
    );
    return NextResponse.json(
      { success: false, message: "Gagal menyimpan perubahan election" },
      { status: 500 }
    );
  }
}
