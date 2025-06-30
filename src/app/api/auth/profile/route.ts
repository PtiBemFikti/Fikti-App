import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import axios, { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const moodle = cookieStore.get('MoodleSession')?.value;

    if (!moodle) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized: no session cookie' },
        { status: 401 }
      );
    }

    // === Ambil halaman profil ===
    const profileRes = await axios.get(
      'https://v-class.gunadarma.ac.id/user/profile.php',
      {
        headers: {
          Cookie: `MoodleSession=${moodle}`,
          'User-Agent': 'Mozilla/5.0'
        },
        maxRedirects: 0,
        validateStatus: (s) => s === 200
      }
    );
    const $ = cheerio.load(profileRes.data);

    const nameNpmRaw = $('.page-header-headings h1').text().trim();
    const parts = nameNpmRaw.split(' ');
    const npm = parts.pop() || '';
    const name = parts.join(' ');

    // === Ambil data course profiles ===
    const courses: {code: string; class: string; major: string; type: string}[] = [];
    
    $('dt:contains("Course profiles")').next('dd').find('ul li').each((_, el) => {
      const courseText = $(el).text().trim();
      const courseParts = courseText.split('|').map(p => p.trim());
      
      if (courseParts.length >= 4) {
        const classInfo = courseParts[1];
        const major = courseParts[2];

        const classMatch = classInfo.match(/(KA|KB)\d+/);
        const kodeKelas = classMatch ? classMatch[0] : '';
        
        courses.push({
          code: kodeKelas,
          class: classInfo,
          major: major,
          type: kodeKelas.startsWith('KA') ? 'Sistem Informasi' : 
               kodeKelas.startsWith('KB') ? 'Sistem Komputer' : 'Lainnya'
        });
      }
    });


    // Deteksi jurusan
    let jurusan = '';
    const classCodes = courses.map(c => c.code);

    const hasKA = classCodes.some(code => code.startsWith('KA'));
    const hasKB = classCodes.some(code => code.startsWith('KB'));

    if (hasKA && hasKB) {
    jurusan = 'Sistem Informasi & Sistem Komputer';
    } else if (hasKA) {
    jurusan = 'Sistem Informasi';
    } else if (hasKB) {
    jurusan = 'Sistem Komputer';
    } else {
    jurusan = 'Tidak Termasuk FIKTI';
    }

    // Fallback dari dashboard
    if (!jurusan) {
      const dashboardRes = await axios.get(
        'https://v-class.gunadarma.ac.id/my/',
        {
          headers: {
            Cookie: `MoodleSession=${moodle}`,
            'User-Agent': 'Mozilla/5.0'
          },
          maxRedirects: 0,
          validateStatus: (s) => s === 200
        }
      );
      const $$ = cheerio.load(dashboardRes.data);
      jurusan = $$('h2:contains("Program"), h3:contains("Studi")').text().trim() ||
                $$('[class*="program"], [class*="jurusan"]').text().trim();
    }

    // Ambil salah satu code (misalnya index ke-2)
    const selectedCode = courses[2]?.code || '';

    if (!name || !npm || !selectedCode || !jurusan) {
      return NextResponse.json({
        success: false,
        message: 'Data tidak lengkap atau struktur HTML berubah',
        debug: { name, npm, selectedCode, jurusan }
      }, { status: 404 });
    }

  const response = NextResponse.json({
  success: true,
  data: {
    name,
    npm,
    kodeKelas: selectedCode,
    jurusan,
    isInformationSystem: jurusan.includes('Sistem Informasi'),
    isComputerSystem: jurusan.includes('Sistem Komputer')
  }
});
    response.cookies.set('user_jurusan', jurusan, {
      path: '/',
      maxAge: 60 * 60 * 6,
      httpOnly: true,
      sameSite: 'lax'
    });

    return response;
  } catch (err) {
    const error = err as Error & { response?: AxiosResponse };
    console.error('[API AUTH ERROR]', error.response?.status, error.response?.data, error.message);

    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
