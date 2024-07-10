'use client';

import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';
import { bricolageGrotesque, poppins } from '@/styles/font';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

export default function DigitalInfoPage() {
  // const router = useRouter;
  // const { id } = router.query;

  // const accordionContent = {
  //   1: {
  //     title: ''
  //   }
  // }

  return (
    <div className="bg-gradient-to-b from-[#FFF4E7] to-[#F7F9FA]">
      {/* Tampilan Dekstop start */}
      <div className="md:block hidden">
        <div className={`px-40 py-16 ${poppins.className}`}>
          <div className={`py-3 flex gap-2 ${bricolageGrotesque.className}`}>
            <div className="w-1/2 py-5">
              <Image src={'/technofair/digital-infographic.png'} alt="UI/UX Design" width={461} height={346} className="rounded-2xl" />
            </div>
            <div className="w-1/2 py-8">
              <Link href={'/technofair'} className="flex gap-4">
                <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
                <p className="text-xl font-medium text-[#545350]">Back</p>
              </Link>
              <div className="">
                <div className="flex gap-2">
                  <p className="text-4xl font-bold text-[#241525]">Digital Infographic</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-3">Competitions</p>
                </div>
                <div className={`text-[#212427] text-lg italic font-light ${poppins.className}`}>&quot;Dynamic Collaboration: Pioneering Future Technologies&quot;</div>
              </div>
              <div className={`text-[#212427] text-xl font-semibold ${poppins.className} py-2`}>Selasa, 21 Mei 2024</div>
              <div className="">
                <p className={`text-lg font-normal ${poppins.className} text-[#212427]`}>
                  Digital Infographic Competition merupakan kompetisi dimana para peserta membuat sebuah poster Digital infografis yang mengandung pesan atau informasi mengenai data-data sesuai tema yang diberikan{' '}
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link
                  href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                  className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]"
                >
                  <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
                </Link>
                {/* <Link href={'https://bit.ly/RegistrationDICTechnoFair11-0'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
                </Link> */}
                <div className="">
                  <button onClick={() => toast.error('The Registration Has Been Closed')} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                    <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
                  </button>
                </div>
                <div className="mt-9 text-base text-[#212427]">
                  <p className="">
                    <strong>Rp 20.000</strong>/Peserta
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24">
            <div className="flex gap-20">
              <div className="w-2/6 flex flex-col gap-3">
                <div className="w-72 h-60 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg">
                  <div className="px-5 py-2">
                    <p className={`text-[#31304D] text-sm ${poppins.className} font-semibold`}>Details</p>
                    <div className="px-3">
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Ketentuan Umum</p>
                      </div>
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Ketentuan Karya</p>
                      </div>
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Tema & Subtema</p>
                      </div>
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Tahapan Kompetisi</p>
                      </div>
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Kriteria Penilaian</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={'https://drive.google.com/file/d/1Br-GaBbOvjXgS66Pb9qqG1_j-QN8quaU/view?usp=sharing'} className="">
                  <div className="w-72 h-14 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg flex justify-center items-center hover:bg-[#eaeaea]">
                    <p className={`text-center text-[#212427] ${poppins.className}`}>Lihat Rulebook</p>
                  </div>
                </Link>
                <div className="py-7">
                  <Image src={'/technofair/timeline-digitalinfo.png'} alt="timeline digital info" width={289} height={822} />
                </div>
              </div>
              <div className="w-5/6">
                <div className="">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Ketentuan Umum</p>
                  </div>
                  <div className="pl-5">
                    <ol className={`decimal text-[#212427] text-base ${poppins.className} py-5 pl-5 text-justify`}>
                      <li>Peserta adalah pihak yang telah menyelesaikan alur dan mekanisme pendaftaran pada website resmi TechnoFair 11.0 (bit.ly/technofair-11).</li>
                      <li>
                        Peserta merupakan pelajar mahasiswa/i aktif S1/D4/D3/D2/D1 Universitas Gunadarma, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi
                        terkait yang diunggah pada Google Form.
                      </li>
                      <li>Kompetisi bersifat perorangan atau individu.</li>
                      <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                      <li>Setiap anggota peserta harus berasal dari kampus Universitas Gunadarma dan diperbolehkan dari jurusan/program studi yang berbeda. </li>
                      <li>
                        Peserta bukan merupakan panitia <em>TechnoFair</em> 11.0.
                      </li>
                      <li>Setiap peserta diperbolehkan mengikuti lebih dari 1 kompetisi yang berbeda.</li>
                      <li>
                        Setiap Peserta harus telah terdaftar pada website <em>TechnoFair</em> 11.0 dan tidak dapat digantikan oleh orang lain.
                      </li>
                      <li>
                        Para peserta wajib mengikuti/follow akun instagram <em>TechnoFair</em> 11.0 (@technofair)
                      </li>
                      <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai batas waktu yang telah ditentukan akan dinyatakan gugur.</li>
                      <li>
                        Peserta finalis kompetisi <em>Digital Infographic Competition TechnoFair</em> 11.0 <strong> wajib</strong> menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara <em>offline</em> di Auditorium J167.
                        Kampus J1, Universitas Gunadarma.
                      </li>
                      <li>Karya yang dibuat wajib memenuhi ketentuan karya.</li>
                      <li>
                        <em>TechnoFair</em> 11.0 berhak untuk mempublikasikan karya peserta yang diikutsertakan pada kompetisi <em>TechnoFair</em> 11.0 dengan tetap mencantumkan nama peserta dan tidak untuk tujuan komersial.
                      </li>
                      <li>
                        Panitia <em>TechnoFair</em> 11.0 berhak untuk mendiskualifikasi peserta yang melanggar peraturan selama berjalannya kompetisi.
                      </li>
                      <li>
                        Panitia <em>TechnoFair</em> 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dikompetisikan ataupun dalam proses pelaksanaan kompetisi.
                      </li>
                      <li>
                        Panitia tidak bertanggung jawab apabila ada klaim dari pihak lain atas ketidak aslian karya peserta <strong>(Plagiarisme)</strong>.
                      </li>
                      <li>
                        Keputusan juri dan panitia <em>TechnoFair</em> 11.0 bersifat mutlak dan tidak dapat diganggu gugat.
                      </li>
                      <li>
                        Seluruh atau sebagian peraturan dan ketentuan yang terdapat pada <em>rulebook</em> dapat berubah sewaktu-waktu.
                      </li>
                      <li>
                        Segala bentuk perubahan yang terjadi akan diberitahukan pada <em>website TechnoFair</em> 11.0.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Ketentuan Karya</p>
                  </div>
                  <div className="pl-5">
                    <ol className={`decimal text-[#212427] text-base ${poppins.className} py-5 pl-5 text-justify`}>
                      <li>Hasil karya peserta harus sesuai dengan tema yang sudah disediakan.</li>
                      <li>Hasil karya yang dibuat adalah karya orisinal yang dibuat oleh peserta dan belum pernah dipublikasikan serta dapat dipertanggungjawabkan keasliannya.</li>
                      <li>
                        Hak kekayaan intelektual dari karya peserta pada kompetisi <em>TechnoFair</em> 11.0 akan tetap menjadi hak peserta.
                      </li>
                      <li>Peserta dapat menggunakan aplikasi Adobe Illustrator, Adobe Photoshop, Corel Draw, Inkscape atau aplikasi sejenisnya.</li>
                      <li>Peserta kompetisi poster dapat mengirimkan maksimal 1 buah karya untuk peserta yang sama, dimana biaya pendaftaran untuk 1 buah karya sebesar Rp20.000,00</li>
                      <li>
                        Peserta diwajibkan mengunggah hasil karya ke website <em>TechnoFair</em> 11.0 dengan ukuran A3 (3508 x 4961 <em>pixels</em>) dengan resolusi minimal 300 <em>ppi</em> dan format JPG (.jpg).
                      </li>
                      <li>Poster dilarang mengandung unsur SARA, pornografi, kekerasan, maupun provokasi.</li>
                      <li>Setiap poster wajib disertai dengan narasi singkat dengan maksimal 300 kata dalam format .pdf (Template narasi singkat dapat diunduh di bit.ly/LembarNarasiTF11)</li>
                      <li>Setiap poster wajib disertai dengan lembar orisinalitas yang di dalam nya terdapat tanda tangan Peserta dengan format .pdf (Template lembar orisinalitas dapat diunduh di TEMPLATE)</li>
                      <li>
                        Peserta wajib menyertakan sitasi/referensi di bagian bawah poster jika menggunakan kutipan ataupun mengambil gambar dari sumber lain. Apabila peserta menggunakan kutipan maupun gambar milik orang lain dan tidak
                        disertakan sitasi/referensinya maka karya poster akan dianggap sebagai plagiarisme dan didiskualifikasi.
                      </li>
                      <li>
                        Peserta wajib mencantumkan logo <em>TechnoFair</em> 11.0 (logo dapat diunduh di TEMPLATE) pada poster.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Tema & Subtema</p>
                  </div>
                  <div className="py-5 gap-10 pl-5 text-[#212427]">
                    <div className="flex gap-5">
                      <p className="text-base">Tema:</p>
                      <p className="text-xl italic text-center font-bold">&quot;Dynamic Collaboration: Pioneering Future Technologies&quot;</p>
                    </div>
                    {/* <div className="w-2/4 pt-14">
                      <Link href={'#'} className="w-80 h-20 bg-[#11111B] rounded-[8px] text-center flex flex-col justify-center items-center">
                      <p className={`${poppins.className} font-extrabold text-2xl text-[#FEFDFC]`}>SAVE THE DATE!</p>
                      <p className={`${poppins.className} text-sm text-[#FEFDFC] opacity-40`}>click here to save the date</p>
                      </Link>
                    </div> */}
                    <div className="py-5">
                      <p>
                        Subtema: <strong>(Peserta hanya memilih satu)</strong>
                      </p>
                      <ol className="decimal italic pl-20">
                        <li>&quot;Etika dan Keberlanjutan dalam Transformasi Teknologi&quot;</li>
                        <li>&quot;Peran Kolaborasi dalam Pengembangan Teknologi Masa Depan&quot;</li>
                        <li>&quot;Tren Teknologi Dinamis dan Dampaknya pada Masyarakat&quot;</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
                  </div>
                  <div className="py-5 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Penyisihan</p>
                    <ol className="decimal text-justify pl-6">
                      <li>Pada babak penyisihan ini, peserta sudah mengumpulkan poster, narasi singkat, dan lembar orisinalitas pada link form pengumpulan yang terdapat di website https://bit.ly/technofair-11</li>
                      <li>
                        Format pengiriman berkas penyisihan pada <em>website TechnoFair</em> 11.0 :
                      </li>
                      <ol className="pl-5 alpha">
                        <li>Poster dikumpulkan dalam format JPG (.jpg) dengan format nama file: Poster_Nama Peserta_Judul Karya</li>
                        <li>Narasi singkat dikumpulkan dalam bentuk PDF(.pdf) dengan format nama file: Narasi Singkat Poster_Nama Peserta_Judul Karya.</li>
                        <li>Lembar orisinalitas dikumpulkan dalam bentuk PDF(.pdf) dengan format nama file: Lembar Orisinalitas_Nama Peserta_Judul Karya.</li>
                        <li>
                          Poster diunggah pada link form pengumpulan yang terdapat di dalam <em>website TechnoFair</em> 11.0 (https://bit.ly/technofair-11)
                        </li>
                      </ol>
                      <li>
                        Pada babak ini, dari seluruh peserta yang terdaftar akan dilakukan penilaian oleh juri <em>TechnoFair</em> 11.0 dan akan dilakukan penyisihan sehingga hanya tersisa 9 peserta dengan nilai tertinggi. Dari 9 peserta
                        tersebut akan terpilih 3 sebagai pemenang juara umum (juara 1, 2, dan 3).
                      </li>
                      <li>Kepada 9 peserta finalis dengan nilai tertinggi wajib membuat video penjelasan terkait hasil karya digital infografis yang telah dibuat dengan ketentuan sebagai berikut:</li>
                      <ol className="pl-5 alpha">
                        <li>Video menjelaskan karya poster yang telah dibuat.</li>
                        <li>Video yang dikirimkan adalah karya asli milik individu dan belum pernah dipublikasikan.</li>
                        <li>Video dibuat sekreatif mungkin dengan minimal durasi 1 menit dan maksimal 3 menit.</li>
                        <li>Video yang dibuat tidak mengandung unsur SARA, pornografi, sadisme, dan hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>
                        <li>
                          Pengumpulan video menggunakan link form pengumpulan yang dikumpulkan dalam bentuk .MP4 melalui website (https://bit.ly/technofair-11), pastikan akses yang diberikan untuk pengguna yang memiliki link dapat
                          membukanya.
                        </li>
                        <li>Video yang telah dibuat akan dipublikasikan di akun Instagram TechnoFair 11.0.</li>
                        <li>Setiap peserta wajib menaati peraturan yang telah ditentukan.</li>
                      </ol>
                      <li> Khusus 9 karya digital infografis terbaik akan di posting bersama video penjelasan melalui akun Instagram @technofair dengan ketentuan penilaian berdasarkan jumlah like.</li>
                    </ol>
                  </div>
                  <div className="py-3 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak E-Voting</p>
                    <p className="">
                      Pada babak <em>e-voting</em>, hasil karya poster 9 Peserta yang lolos pada babak penyisihan akan diunggah di Instagram <em>TechnoFair</em> 11.0. Poster yang memiliki jumlah like terbanyak akan menjadi juara umum{' '}
                      <em>Digital Infographic Competition</em>.
                    </p>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Kriteria Penilaian</p>
                  </div>
                  <div className="py-5 pl-5 text-[#212427]">
                    <div className="">
                      <p className="font-bold">Babak Penyisihan</p>
                    </div>
                    <div className="">
                      <ol className="pl-7 decimal">
                        <li>
                          Keunikan Karya dan Orisinalitas Karya - <strong>15 Poin</strong>
                        </li>
                        <li>
                          Kesesuaian dengan Tema - <strong>15 Poin</strong>
                        </li>
                        <li>
                          Visualisasi Karya (Tata Letak, Gambar, Warna) - <strong>25 Poin</strong>
                        </li>
                        <li>
                          Pesan konten yang disampaikan (Jelas, komunikatif, edukatif, informatif) - <strong>25 Poin</strong>
                        </li>
                        <li>
                          Nilai Gagasan - <strong>20 Poin</strong>
                        </li>
                      </ol>
                      <div className="w-36 border text-center rounded-lg">
                        <p className="font-bold">Total - 100 Poin</p>
                      </div>
                    </div>
                    <div className="py-5 text-[#212427]">
                      <p className="font-bold">Babak E-Voting</p>
                      <ol className="pl-7 decimal">
                        <li>
                          Hasil Penilaian Audiens (like, view, share) - <strong>100 Poin</strong>
                        </li>
                      </ol>
                      <div className="w-36 border text-center rounded-lg">
                        <p className="font-bold">Total - 100 Poin</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="py-5">
                  <AccordionCard
                    title="Materi Seminar 1 - How Artificial Intelligence (AI) Works in Society 5.0"
                    content={
                      '- Menjelaskan latar belakang Artificial Intelligence (AI).\n- Peranan Artificial Intelligence (AI) di era Society 5.0.\n- Fitur-Fitur dari Artificial Intelligence (AI).\n- Dampak dari Artificial Intelligence (AI) pada pekerjaan manusia.\n- Etika dan keamanan yang terkait dengan penerapan Artificial Intelligence (AI).'
                    }
                  />
                  <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
                  <AccordionCard
                    title="Materi Seminar 2 - Unveiling Applications and Innovations of Artificial Intelligence (AI)"
                    content={
                      '- Perkembangan terbaru dalam Artificial Intelligence (AI).\n- Inovasi Artificial Intelligence (AI) untuk mengatasi masalah tertentu, meningkatkan efisiensi, atau menciptakan nilai baru.\n- Pengaplikasian Artificial Intelligence (AI) di berbagai bidang pekerjaan.\n- Integrasi Artificial Intelligence (AI) dengan teknologi lain (seperti IoT, Big Data, dan Blockchain).\n- Tantangan dan peluang dalam mengembangkan inovasi Artificial Intelligence (AI) di masa depan.'
                    }
                  />
                  <div className="w-full h-0.5 bg-[#212427] mb-3"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden">
        <div className="py-4">
          <div className="px-5">
            <div className="py-3">
              <Image src={'/technofair/digital-infographic.png'} alt="UI/UX Design" width={461} height={346} className="rounded-xl" />
            </div>
          </div>
          <div className="px-5">
            <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link>
            <div className="text-[#262626]">
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>Digital Infographic</p>
              <p className={`${poppins.className} text-base italic font-light`}>&quot;Dynamic Collaboration: Pioneering Future Technologies&quot;</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className={`${poppins.className} text-sm font-medium`}>Selasa, 21 Mei 2024</p>
            </div>
            <div className="text-sm text-[#212427]">
              <p>
                <strong>Rp 20.000</strong>/Peserta
              </p>
            </div>
          </div>
          <div className="px-5 flex flex-col gap-4">
            <div className="pt-2 flex gap-4">
              <Link
                href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                className="w-44 h-14 bg-[#FEFDFC] rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7]"
              >
                <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
              </Link>
              {/* <Link href={'https://bit.ly/RegistrationDICTechnoFair11-0'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </Link> */}
              <div className="">
              <button onClick={() => toast.error('The Registration Has Been Closed')} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </button>
              </div>
            </div>
            <Link
              href={'https://drive.google.com/file/d/1Br-GaBbOvjXgS66Pb9qqG1_j-QN8quaU/view?usp=sharing'}
              className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}
            >
              <p className="text-[#6c6a67]">Lihat Rulebook</p>
            </Link>
            <div className="py-3">
              <Image src={'/technofair/timeline-digitalinfo.png'} alt="timeline digital info" width={259} height={768} />
            </div>
          </div>
          <div className="">
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Ketentuan Umum</p>
              </div>
              <div className={`${poppins.className} text-base text-[#262626] pt-5`}>
                <ol className={`decimal text-[#212427] text-sm ${poppins.className} py-5 pl-8`}>
                  <li>Peserta adalah pihak yang telah menyelesaikan alur dan mekanisme pendaftaran pada website resmi TechnoFair 11.0 (bit.ly/technofair-11).</li>
                  <li>
                    Peserta merupakan pelajar mahasiswa/i aktif S1/D4/D3/D2/D1 Universitas Gunadarma, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait
                    yang diunggah pada Google Form.
                  </li>
                  <li>Kompetisi bersifat perorangan atau individu.</li>
                  <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                  <li>Setiap anggota peserta harus berasal dari kampus Universitas Gunadarma dan diperbolehkan dari jurusan/program studi yang berbeda. </li>
                  <li>
                    Peserta bukan merupakan panitia <em>TechnoFair</em> 11.0.
                  </li>
                  <li>Setiap peserta diperbolehkan mengikuti lebih dari 1 kompetisi yang berbeda.</li>
                  <li>
                    Setiap Peserta harus telah terdaftar pada website <em>TechnoFair</em> 11.0 dan tidak dapat digantikan oleh orang lain.
                  </li>
                  <li>
                    Para peserta wajib mengikuti/follow akun instagram <em>TechnoFair</em> 11.0 (@technofair)
                  </li>
                  <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai batas waktu yang telah ditentukan akan dinyatakan gugur.</li>
                  <li>
                    Peserta finalis kompetisi <em>Digital Infographic Competition TechnoFair</em> 11.0 <strong> wajib</strong> menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara <em>offline</em> di Auditorium J167.
                    Kampus J1, Universitas Gunadarma.
                  </li>
                  <li>Karya yang dibuat wajib memenuhi ketentuan karya.</li>
                  <li>
                    <em>TechnoFair</em> 11.0 berhak untuk mempublikasikan karya peserta yang diikutsertakan pada kompetisi <em>TechnoFair</em> 11.0 dengan tetap mencantumkan nama peserta dan tidak untuk tujuan komersial.
                  </li>
                  <li>
                    Panitia <em>TechnoFair</em> 11.0 berhak untuk mendiskualifikasi peserta yang melanggar peraturan selama berjalannya kompetisi.
                  </li>
                  <li>
                    Panitia <em>TechnoFair</em> 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dikompetisikan ataupun dalam proses pelaksanaan kompetisi.
                  </li>
                  <li>
                    Panitia tidak bertanggung jawab apabila ada klaim dari pihak lain atas ketidak aslian karya peserta <strong>(Plagiarisme)</strong>.
                  </li>
                  <li>
                    Keputusan juri dan panitia <em>TechnoFair</em> 11.0 bersifat mutlak dan tidak dapat diganggu gugat.
                  </li>
                  <li>
                    Seluruh atau sebagian peraturan dan ketentuan yang terdapat pada <em>rulebook</em> dapat berubah sewaktu-waktu.
                  </li>
                  <li>
                    Segala bentuk perubahan yang terjadi akan diberitahukan pada <em>website TechnoFair</em> 11.0.
                  </li>
                </ol>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Ketentuan Karya</p>
              </div>
              <div className="pl-5">
                <ol className={`decimal text-[#212427] text-sm ${poppins.className} py-5 pl-3`}>
                  <li>Hasil karya peserta harus sesuai dengan tema yang sudah disediakan.</li>
                  <li>Hasil karya yang dibuat adalah karya orisinal yang dibuat oleh peserta dan belum pernah dipublikasikan serta dapat dipertanggungjawabkan keasliannya.</li>
                  <li>
                    Hak kekayaan intelektual dari karya peserta pada kompetisi <em>TechnoFair</em> 11.0 akan tetap menjadi hak peserta.
                  </li>
                  <li>Peserta dapat menggunakan aplikasi Adobe Illustrator, Adobe Photoshop, Corel Draw, Inkscape atau aplikasi sejenisnya.</li>
                  <li>Peserta kompetisi poster dapat mengirimkan maksimal 1 buah karya untuk peserta yang sama, dimana biaya pendaftaran untuk 1 buah karya sebesar Rp20.000,00</li>
                  <li>
                    Peserta diwajibkan mengunggah hasil karya ke website <em>TechnoFair</em> 11.0 dengan ukuran A3 (3508 x 4961 <em>pixels</em>) dengan resolusi minimal 300 <em>ppi</em> dan format JPG (.jpg).
                  </li>
                  <li>Poster dilarang mengandung unsur SARA, pornografi, kekerasan, maupun provokasi.</li>
                  <li>Setiap poster wajib disertai dengan narasi singkat dengan maksimal 300 kata dalam format .pdf (Template narasi singkat dapat diunduh di bit.ly/LembarNarasiTF11)</li>
                  <li>Setiap poster wajib disertai dengan lembar orisinalitas yang di dalam nya terdapat tanda tangan Peserta dengan format .pdf (Template lembar orisinalitas dapat diunduh di TEMPLATE)</li>
                  <li>
                    Peserta wajib menyertakan sitasi/referensi di bagian bawah poster jika menggunakan kutipan ataupun mengambil gambar dari sumber lain. Apabila peserta menggunakan kutipan maupun gambar milik orang lain dan tidak
                    disertakan sitasi/referensinya maka karya poster akan dianggap sebagai plagiarisme dan didiskualifikasi.
                  </li>
                  <li>
                    Peserta wajib mencantumkan logo <em>TechnoFair</em> 11.0 (logo dapat diunduh di TEMPLATE) pada poster.
                  </li>
                </ol>
              </div>
            </div>
            <div className={`py-10 px-5 ${poppins.className}`}>
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Tema & Subtema</p>
              </div>
              <div className="flex py-5">
                <div className="text-[#212427]">
                  <div className="">
                    <p className="pl-7">Tema:</p>
                    <p className="px-7 text-center font-bold italic">&quot;Dynamic Collaboration: Pioneering Future Technologies&quot;</p>
                  </div>
                  <div className="pl-7">
                    <p>Subtema:</p>
                    <p className="font-bold">(Peserta hanya memilih satu)</p>
                    <ol className="decimal italic pl-6 text-sm">
                      <li>&quot;Etika dan Keberlanjutan dalam Transformasi Teknologi&quot;</li>
                      <li>&quot;Peran Kolaborasi dalam Pengembangan Teknologi Masa Depan&quot;</li>
                      <li>&quot;Tren Teknologi Dinamis dan Dampaknya pada Masyarakat&quot;</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className={`py-10 px-5 ${poppins.className}`}>
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
              </div>
              <div className="py-5 pl-7 text-[#212427]">
                <p className="font-bold">Babak Penyisihan</p>
                <ol className="decimal text-justify pl-6 text-sm">
                  <li>Pada babak penyisihan ini, peserta sudah mengumpulkan poster, narasi singkat, dan lembar orisinalitas pada link form pengumpulan yang terdapat di website https://bit.ly/technofair-11</li>
                  <li>
                    Format pengiriman berkas penyisihan pada <em>website TechnoFair</em> 11.0 :
                  </li>
                  <ol className="pl-5 alpha">
                    <li>Poster dikumpulkan dalam format JPG (.jpg) dengan format nama file: Poster_Nama Peserta_Judul Karya</li>
                    <li>Narasi singkat dikumpulkan dalam bentuk PDF(.pdf) dengan format nama file: Narasi Singkat Poster_Nama Peserta_Judul Karya.</li>
                    <li>Lembar orisinalitas dikumpulkan dalam bentuk PDF(.pdf) dengan format nama file: Lembar Orisinalitas_Nama Peserta_Judul Karya.</li>
                    <li>
                      Poster diunggah pada link form pengumpulan yang terdapat di dalam <em>website TechnoFair</em> 11.0 (https://bit.ly/technofair-11)
                    </li>
                  </ol>
                  <li>
                    Pada babak ini, dari seluruh peserta yang terdaftar akan dilakukan penilaian oleh juri <em>TechnoFair</em> 11.0 dan akan dilakukan penyisihan sehingga hanya tersisa 9 peserta dengan nilai tertinggi. Dari 9 peserta
                    tersebut akan terpilih 3 sebagai pemenang juara umum (juara 1, 2, dan 3).
                  </li>
                  <li>Kepada 9 peserta finalis dengan nilai tertinggi wajib membuat video penjelasan terkait hasil karya digital infografis yang telah dibuat dengan ketentuan sebagai berikut:</li>
                  <ol className="pl-5 alpha">
                    <li>Video menjelaskan karya poster yang telah dibuat.</li>
                    <li>Video yang dikirimkan adalah karya asli milik individu dan belum pernah dipublikasikan.</li>
                    <li>Video dibuat sekreatif mungkin dengan minimal durasi 1 menit dan maksimal 3 menit.</li>
                    <li>Video yang dibuat tidak mengandung unsur SARA, pornografi, sadisme, dan hal-hal yang bersifat merendahkan atau melecehkan pihak lain.</li>
                    <li>
                      Pengumpulan video menggunakan link form pengumpulan yang dikumpulkan dalam bentuk .MP4 melalui website (https://bit.ly/technofair-11), pastikan akses yang diberikan untuk pengguna yang memiliki link dapat membukanya.
                    </li>
                    <li>Video yang telah dibuat akan dipublikasikan di akun Instagram TechnoFair 11.0.</li>
                    <li>Setiap peserta wajib menaati peraturan yang telah ditentukan.</li>
                  </ol>
                  <li> Khusus 9 karya digital infografis terbaik akan di posting bersama video penjelasan melalui akun Instagram @technofair dengan ketentuan penilaian berdasarkan jumlah like.</li>
                </ol>
              </div>
              <div className="py-3 pl-5 text-[#212427]">
                <p className="font-bold">Babak E-Voting</p>
                <p className="text-sm">
                  Pada babak <em>e-voting</em>, hasil karya poster 9 Peserta yang lolos pada babak penyisihan akan diunggah di Instagram <em>TechnoFair</em> 11.0. Poster yang memiliki jumlah like terbanyak akan menjadi juara umum{' '}
                  <em>Digital Infographic Competition</em>.
                </p>
              </div>
            </div>
            <div className="px-5 py-10">
              <div className="py-2 flex gap-5">
                <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                <p className={`text-[#31304D] font-bold ${poppins.className}`}>Kriteria Penilaian</p>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <div className="">
                  <p className="font-bold">Babak Penyisihan</p>
                </div>
                <div className="">
                  <ol className="pl-7 decimal text-sm">
                    <li>
                      Keunikan Karya dan Orisinalitas Karya - <strong>15 Poin</strong>
                    </li>
                    <li>
                      Kesesuaian dengan Tema - <strong>15 Poin</strong>
                    </li>
                    <li>
                      Visualisasi Karya (Tata Letak, Gambar, Warna) - <strong>25 Poin</strong>
                    </li>
                    <li>
                      Pesan konten yang disampaikan (Jelas, komunikatif, edukatif, informatif) - <strong>25 Poin</strong>
                    </li>
                    <li>
                      Nilai Gagasan - <strong>20 Poin</strong>
                    </li>
                  </ol>
                  <div className="w-36 border text-center rounded-lg">
                    <p className="font-bold">Total - 100 Poin</p>
                  </div>
                </div>
                <div className="py-5 text-[#212427]">
                  <p className="font-bold">Babak E-Voting</p>
                  <ol className="pl-7 decimal text-sm">
                    <li>
                      Hasil Penilaian Audiens <em>(like, view, share)</em> - <strong>100 Poin</strong>
                    </li>
                  </ol>
                  <div className="w-36 border text-center rounded-lg">
                    <p className="font-bold">Total - 100 Poin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
