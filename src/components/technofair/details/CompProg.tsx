'use client'

import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';
import { bricolageGrotesque, poppins } from '@/styles/font';
import { useRouter } from 'next/router';
import { toast } from 'sonner';

export default function CaptureTheFlagPage() {
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
            <div className="w-1/2 py-7">
              <Image src={'/technofair/competitive-programming.png'} alt="competitive programming" width={461} height={346} className="rounded-2xl" />
            </div>
            <div className="w-1/2 py-8">
              <div className="">
                <Link href={'/technofair'} className="flex gap-4">
                  <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
                  <p className="text-xl font-medium text-[#545350]">Back</p>
                </Link>
                <div className="flex gap-2">
                  <p className="text-3xl font-bold text-[#241525]">Competitive Programming</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-3">Competitions</p>
                </div>
                <div className={`text-[#212427] text-lg italic font-light ${poppins.className}`}>Competitive Programming of TechnoFair 11.0</div>
              </div>
              <div className={`text-[#212427] text-xl font-semibold ${poppins.className} py-2`}>Sabtu, 01 Juni 2024</div>
              <div className="">
                <p className={`text-lg font-normal ${poppins.className} text-[#212427]`}>
                  Kompetisi ini ditujukan untuk menguji kemampuan pemecahan masalah dengan menyelesaikan sejumlah masalah pemrograman yang berbeda tingkat kesulitannya dengan bahasa pemrograman tertentu dalam batasan waktu dan memori yang
                  telah ditentukan
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link
                  href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                  className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]"
                >
                  <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
                </Link>
                <Link href={'https://docs.google.com/forms/d/1xp_ZFuEkN7Eiu5MbpfXezdrChtPoUra5kzoVxqiypp8/edit?ts=66460c90'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
                </Link>
                <div className="mt-9 text-base text-[#212427]">
                  <p>
                    <strong>Rp 80.000</strong>/Tim
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24 ">
            <div className="flex gap-20">
              <div className="w-2/6 flex flex-col gap-3">
                <div className="w-72 h-40 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg">
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
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Tahapan Kompetisi</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => toast.error('Coming Soon')} className="">
                  <div className="w-72 h-14 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg flex justify-center items-center hover:bg-[#eaeaea]">
                    <p className={`text-center text-[#212427] ${poppins.className}`}>Lihat Rulebook</p>
                  </div>
                </button>
                {/* <Link href={'https://drive.google.com/drive/folders/1UFrhbUsT0tqQWJPFqwHWulhCp7lH9vRc?usp=drive_link'} className="">
                  <div className="w-72 h-14 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg flex justify-center items-center hover:bg-[#eaeaea]">
                    <p className={`text-center text-[#212427] ${poppins.className}`}>Lihat Rulebook</p>
                  </div>
                </Link> */}
              </div>
              <div className="w-5/6">
                <div className="">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Ketentuan Umum</p>
                  </div>
                  <div className="pl-5">
                    <ol className={`decimal text-[#212427] text-base ${poppins.className} py-5 pl-5`}>
                      <li>
                        Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada <em>website</em> resmi <em>TechnoFair</em> 11.0 (bit.ly/technofair-11).
                      </li>
                      <li>Peserta merupakan mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa yang masih aktif atau surat keterangan resmi dari perguruan tinggi terkait yang diunggah pada dashboard tim.</li>
                      <li>Peserta melengkapi berkas yang diminta dengan benar dan legal secara hukum sesuai dengan timeline pendaftaran yang diberikan.</li>
                      <li>
                        Peserta yang tidak melengkapi berkas pendaftaran sampai waktu yang ditentukan dinyatakan <strong>gugur</strong>.
                      </li>
                      <li>
                        Satu tim terdiri dari <strong>maksimal</strong> 3 anggota dimana setiap anggota tim harus berasal dari perguruan tinggi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.
                      </li>
                      <li>
                        Peserta bukan merupakan panitia kompetisi <em>Competitive Programming TechnoFair</em> 11.0.
                      </li>
                      <li>Setiap peserta hanya boleh terdaftar tepat 1 tim pada cabang kompetisi yang sama.</li>
                      <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                      <li>Peserta tidak boleh diwakilkan ataupun mewakilkan orang lain yang bukan dirinya sendiri.</li>
                      <li>
                        Peserta pemenang kompetisi <em>Competitive Programming TechnoFair</em> 11.0 wajib menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara <em>offline</em> di Auditorium J167, Kampus J1, Universitas
                        Gunadarma.
                      </li>
                      <li>Karya yang digunakan peserta dalam lomba harus merupakan karya orisinil dari peserta.</li>
                      <li>Hak Kekayaan Intelektual dari karya peserta pada kompetisi ini akan tetap menjadi hak peserta.</li>
                      <li>Peserta dilarang bekerja sama dengan peserta dari tim lain dalam bentuk apapun serta melakukan hal-hal yang dapat mengganggu berjalannya lomba atau merugikan peserta lain.</li>
                      <li>
                        Panitia berhak mendiskualifikasi peserta yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi <em>Competitive Programming TechnoFair</em> 11.0.
                      </li>
                      <li>Panitia berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dilombakan ataupun dalam proses pelaksanaan perlombaan.</li>
                      <li>Keputusan juri dan panitia bersifat mutlak dan tidak dapat diganggu gugat.</li>
                      <li>Panitia dapat mengubah seluruh atau sebagian konten dalam rulebook sewaktu-waktu.</li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Ketentuan Kompetisi</p>
                  </div>
                  <div className="pl-5">
                    <ol className={`decimal text-[#212427] text-base ${poppins.className} py-5 pl-5`}>
                      <li>Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi TechnoFair 11.0 (bit.ly/technofair-11).</li>
                      <li>
                        Peserta merupakan mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait yang diunggah pada Google
                        Form pada website TechnoFair 11.0.
                      </li>
                      <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                      <li>Tim terdiri minimal 1 orang atau maksimal 3 orang.</li>
                      <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.</li>
                      <li>Peserta bukan merupakan panitia TechnoFair 11.0 dan tidak memiliki keterkaitan dalam proses pembuatan soal Competitive Programming.</li>
                      <li>Setiap peserta hanya boleh terdaftar pada 1 tim pada cabang kompetisi yang sama.</li>
                      <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                      <li>Peserta yang merupakan pemenang kompetisi TechnoFair 11.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
                      <li>Panitia TechnoFair 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan kompetisi.</li>
                      <li>Panitia berhak mendiskualifikasi tim yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi TechnoFair 11.0</li>
                      <li>Keputusan juri dan panitia TechnoFair 11.0 bersifat mutlak dan tidak dapat diganggu gugat.</li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
                  </div>
                  <div className="py-5 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Pemanasan</p>
                    <ol className="decimal pl-8">
                      <li>Pemanasan dilaksanakan pada tanggal 25 Juni 2024</li>
                      <li>Sesi pemanasan dilakukan secara online, dan bersifat opsional. Hasil dari sesi pemanasan tidak akan mempengaruhi hasil akhir dari sesi penyisihan ataupun final</li>
                      <li>Platform untuk pemanasan akan dibuka selama 6 jam terhitung dari jam 15.00 - 21.00 WIB untuk peserta berlatih</li>
                      <li>Hasil dari tahap pemanasan tidak akan mempengaruhi hasil dari tahap penyisihan.</li>
                    </ol>
                  </div>
                  <div className="py-3 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Penyisihan</p>
                    <ol className="decimal pl-8">
                      <li>Penyisihan akan dilaksanakan secara online di tanggal 28 Juni 2024 pada pukul 15.00 - 21.00 WIB.</li>
                      <li>Jumlah soal pada penyisihan berjumlah 8 - 10 soal.</li>
                      <li>Peserta dapat melakukan klarifikasi soal selama 1 jam setelah kompetisi dimulai.</li>
                      <li>Scoreboard akan dibekukan 1 (satu) jam terakhir.</li>
                      <li>Selama penyisihan, peserta dilarang berkomunikasi dengan orang lain dan mengganggu peserta lain.</li>
                      <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan didiskualifikasi</li>
                    </ol>
                  </div>
                  <div className="py-3 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Final</p>
                    <ol className="decimal pl-8">
                      <li>Peserta yang masuk ke babak final adalah 10 tim terbaik dari gabungan seluruh babak penyisihan</li>
                      <li>Final akan dilakukan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma pada hari Sabtu tanggal 13 Juli 2024.</li>
                      <li>Final menggunakan laptop masing-masing</li>
                      <li>Final akan berlangsung selama 5 jam</li>
                      <li>Scoreboard akan dibekukan 1 (satu) jam terakhir</li>
                      <li>Jumlah soal pada babak final adalah 6-8 soal.</li>
                      <li>
                        Peserta diperbolehkan membawa kode-kode yang sudah pernah dibuat sendiri ataupun tulisan lainnya dengan syarat tulisan tersebut dibuat sebelum lomba dalam bentuk fisik kertas A4 dengan jumlah halaman maksimal 25
                        halaman.
                      </li>
                      <li>Selama final, peserta dilarang berkomunikasi dengan peserta atau orang lain dan peserta dilarang mengganggu peserta lain dalam ruangan lomba.</li>
                      <li>Selama final, peserta dilarang mengakses internet melalui komputer ataupun perangkat lainnya.</li>
                      <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan didiskualifikasi.</li>
                    </ol>
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
              <Image src={'/technofair/competitive-programming.png'} alt="competitive programming" width={461} height={346} className="rounded-xl" />
            </div>
          </div>
          <div className="px-5">
            <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link>
            <div className="text-[#262626]">
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>Competitive Programming</p>
              <p className={`${poppins.className} text-base italic font-light`}>Competitive Programming of TechnoFair 11.0</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className={`${poppins.className} text-sm font-medium`}>Sabtu, 01 Juni 2024</p>
            </div>
            <div className="text-sm text-[#212427]">
              <p>
                <strong>Rp 80.000</strong>/Tim
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
              <Link href={'https://docs.google.com/forms/d/1xp_ZFuEkN7Eiu5MbpfXezdrChtPoUra5kzoVxqiypp8/edit?ts=66460c90'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </Link>
            </div>
            <button onClick={() => toast.error('Coming Soon')} className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}>
              <p className='text-[#6c6a67]'>Lihat Rulebook</p>
            </button>
            {/* <Link href={'https://drive.google.com/drive/folders/1UFrhbUsT0tqQWJPFqwHWulhCp7lH9vRc?usp=drive_link'} className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}>
              <p className='text-[#6c6a67]'>Lihat Rulebook</p>
            </Link> */}
          </div>
          <div className="">
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Ketentuan Umum</p>
              </div>
              <div className={`${poppins.className} text-base text-[#262626] pt-5`}>
                <ol className={`decimal text-[#212427] text-sm ${poppins.className} py-5 pl-10`}>
                  <li>
                    Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada <em>website</em> resmi <em>TechnoFair</em> 11.0 (bit.ly/technofair-11).
                  </li>
                  <li>Peserta merupakan mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa yang masih aktif atau surat keterangan resmi dari perguruan tinggi terkait yang diunggah pada dashboard tim.</li>
                  <li>Peserta melengkapi berkas yang diminta dengan benar dan legal secara hukum sesuai dengan timeline pendaftaran yang diberikan.</li>
                  <li>
                    Peserta yang tidak melengkapi berkas pendaftaran sampai waktu yang ditentukan dinyatakan <strong>gugur</strong>.
                  </li>
                  <li>
                    Satu tim terdiri dari <strong>maksimal</strong> 3 anggota dimana setiap anggota tim harus berasal dari perguruan tinggi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.
                  </li>
                  <li>
                    Peserta bukan merupakan panitia kompetisi <em>Competitive Programming TechnoFair</em> 11.0.
                  </li>
                  <li>Setiap peserta hanya boleh terdaftar tepat 1 tim pada cabang kompetisi yang sama.</li>
                  <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                  <li>Peserta tidak boleh diwakilkan ataupun mewakilkan orang lain yang bukan dirinya sendiri.</li>
                  <li>
                    Peserta pemenang kompetisi <em>Competitive Programming TechnoFair</em> 11.0 wajib menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara <em>offline</em> di Auditorium J167, Kampus J1, Universitas
                    Gunadarma.
                  </li>
                  <li>Karya yang digunakan peserta dalam lomba harus merupakan karya orisinil dari peserta.</li>
                  <li>Hak Kekayaan Intelektual dari karya peserta pada kompetisi ini akan tetap menjadi hak peserta.</li>
                  <li>Peserta dilarang bekerja sama dengan peserta dari tim lain dalam bentuk apapun serta melakukan hal-hal yang dapat mengganggu berjalannya lomba atau merugikan peserta lain.</li>
                  <li>
                    Panitia berhak mendiskualifikasi peserta yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi <em>Competitive Programming TechnoFair</em> 11.0.
                  </li>
                  <li>Panitia berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam karya yang dilombakan ataupun dalam proses pelaksanaan perlombaan.</li>
                  <li>Keputusan juri dan panitia bersifat mutlak dan tidak dapat diganggu gugat.</li>
                  <li>Panitia dapat mengubah seluruh atau sebagian konten dalam rulebook sewaktu-waktu.</li>
                </ol>
              </div>
            </div>
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Ketentuan Kompetisi</p>
              </div>
              <div className="">
                <ol className={`decimal text-[#212427] text-sm ${poppins.className} py-5 pl-10`}>
                  <li>
                    Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada <em>website</em> resmi <em>TechnoFair</em> 11.0 (bit.ly/technofair-11).
                  </li>
                  <li>
                    Peserta merupakan mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait yang diunggah pada Google Form
                    pada <em>website TechnoFair</em> 11.0.
                  </li>
                  <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                  <li>Tim terdiri minimal 1 orang atau maksimal 3 orang.</li>
                  <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.</li>
                  <li>
                    Peserta bukan merupakan panitia <em>TechnoFair</em> 11.0 dan tidak memiliki keterkaitan dalam proses pembuatan soal <em>Competitive Programming</em>.
                  </li>
                  <li>Setiap peserta hanya boleh terdaftar pada 1 tim pada cabang kompetisi yang sama.</li>
                  <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                  <li>
                    Peserta yang merupakan pemenang kompetisi <em>TechnoFair</em> 11.0 wajib menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara <em>offline</em> di Auditorium J167, Kampus J1, Universitas Gunadarma.
                  </li>
                  <li>
                    Panitia <em>TechnoFair</em> 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan kompetisi.
                  </li>
                  <li>
                    Panitia berhak mendiskualifikasi tim yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi <em>TechnoFair</em> 11.0
                  </li>
                  <li>
                    Keputusan juri dan panitia <em>TechnoFair</em> 11.0 bersifat mutlak dan tidak dapat diganggu gugat.
                  </li>
                </ol>
              </div>
            </div>
            <div className={`py-10 px-5 ${poppins.className}`}>
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className="text-base font-bold">Babak Pemanasan</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Pemanasan dilaksanakan pada tanggal 25 Juni 2024</li>
                  <li>Sesi pemanasan dilakukan secara online, dan bersifat opsional. Hasil dari sesi pemanasan tidak akan mempengaruhi hasil akhir dari sesi penyisihan ataupun final</li>
                  <li>Platform untuk pemanasan akan dibuka selama 6 jam terhitung dari jam 15.00 - 21.00 WIB untuk peserta berlatih</li>
                  <li>Hasil dari tahap pemanasan tidak akan mempengaruhi hasil dari tahap penyisihan.</li>
                </ol>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className="text-base font-bold">Babak Penyisihan</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Penyisihan akan dilaksanakan secara online di tanggal 28 Juni 2024 pada pukul 15.00 - 21.00 WIB.</li>
                  <li>Jumlah soal pada penyisihan berjumlah 8 - 10 soal.</li>
                  <li>Peserta dapat melakukan klarifikasi soal selama 1 jam setelah kompetisi dimulai.</li>
                  <li>Scoreboard akan dibekukan 1 (satu) jam terakhir.</li>
                  <li>Selama penyisihan, peserta dilarang berkomunikasi dengan orang lain dan mengganggu peserta lain.</li>
                  <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan didiskualifikasi</li>
                </ol>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className="text-base font-bold">Babak Final</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Peserta yang masuk ke babak final adalah 10 tim terbaik dari gabungan seluruh babak penyisihan</li>
                  <li>Final akan dilakukan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma pada hari Sabtu tanggal 13 Juli 2024.</li>
                  <li>Final menggunakan laptop masing-masing</li>
                  <li>Final akan berlangsung selama 5 jam</li>
                  <li>Scoreboard akan dibekukan 1 (satu) jam terakhir</li>
                  <li>Jumlah soal pada babak final adalah 6-8 soal.</li>
                  <li>
                    Peserta diperbolehkan membawa kode-kode yang sudah pernah dibuat sendiri ataupun tulisan lainnya dengan syarat tulisan tersebut dibuat sebelum lomba dalam bentuk fisik kertas A4 dengan jumlah halaman maksimal 25 halaman.
                  </li>
                  <li>Selama final, peserta dilarang berkomunikasi dengan peserta atau orang lain dan peserta dilarang mengganggu peserta lain dalam ruangan lomba.</li>
                  <li>Selama final, peserta dilarang mengakses internet melalui komputer ataupun perangkat lainnya.</li>
                  <li>Peserta yang terbukti melakukan kecurangan dan/atau pelanggaran akan didiskualifikasi.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
