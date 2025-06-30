import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .from('pemira_kandidat')
    .select('id, name, image, votes');

  if (error) {
    return NextResponse.json({ message: 'Gagal ambil data kandidat' }, { status: 500 });
  }

  return NextResponse.json(data);
}
