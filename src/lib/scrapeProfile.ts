// lib/scrapeProfileFromVClass.ts
import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeProfileFromVClass(moodle: string) {
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

  // Extract name and NPM
  const nameNpmRaw = $('.page-header-headings h1').text().trim();
  const parts = nameNpmRaw.split(' ');
  const npm = parts.pop() || '';
  const name = parts.join(' ');

  // Extract courses information
  const courses: { code: string; class: string; major: string; type: string }[] = [];

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
        major,
        type: kodeKelas.startsWith('KA') ? 'Sistem Informasi' :
              kodeKelas.startsWith('KB') ? 'Sistem Komputer' : 'Lainnya'
      });
    }
  });

  // Get NPM prefix (first 3 digits)
  const npmPrefix = npm.substring(0, 3);
  
  // Determine jurusan from both courses and NPM
  const hasKAFromCourses = courses.some(c => c.code.startsWith('KA'));
  const hasKBFromCourses = courses.some(c => c.code.startsWith('KB'));
  const hasKA = hasKAFromCourses || npmPrefix === '101' || npmPrefix === '111';
  const hasKB = hasKBFromCourses || npmPrefix === '201' || npmPrefix === '211';

  let jurusan = '';
  if (hasKA && hasKB) jurusan = 'Sistem Informasi & Sistem Komputer';
  else if (hasKA) jurusan = 'Sistem Informasi';
  else if (hasKB) jurusan = 'Sistem Komputer';
  else jurusan = 'Tidak Termasuk FIKTI';

  let kodeKelas = courses.find(c => c.code.startsWith('KA') || c.code.startsWith('KB'))?.code || '';
  
  if (!kodeKelas) {
    if (npmPrefix === '101' || npmPrefix === '111') {
      kodeKelas = 'KA';
    } else if (npmPrefix === '201' || npmPrefix === '211') {
      kodeKelas = 'KB';
    } else {
      kodeKelas = 'Tidak Diketahui';
    }
  }

  // Basic validation
  if (!name || !npm || !jurusan) {
    throw new Error("Data tidak lengkap atau struktur HTML berubah");
  }

  return {
    name,
    npm,
    kodeKelas,
    jurusan,
    isInformationSystem: jurusan.includes('Sistem Informasi'),
    isComputerSystem: jurusan.includes('Sistem Komputer')
  };
}