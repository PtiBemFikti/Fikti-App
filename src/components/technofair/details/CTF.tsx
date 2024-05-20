'use client';
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
              <Image src={'/technofair/capture-the-flag.png'} alt="Capture The Flag" width={461} height={346} className="rounded-2xl" />
            </div>
            <div className="w-1/2 py-8">
              <div className="">
                <Link href={'/technofair'} className="flex gap-4">
                  <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
                  <p className="text-xl font-medium text-[#545350]">Back</p>
                </Link>
                <div className="flex gap-2">
                  <p className="text-4xl font-bold text-[#241525]">Capture The Flag</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-3">Competitions</p>
                </div>
                <div className={`text-[#212427] text-lg italic font-light ${poppins.className}`}>Capture The Flag Competition of TechnoFair 11.0</div>
              </div>
              <div className={`text-[#212427] text-xl font-semibold ${poppins.className} py-2`}>Sabtu, 01 Juni 2024</div>
              <div className="">
                <p className={`text-lg font-normal ${poppins.className} text-[#212427]`}>
                  Kompetisi ini memiliki mekanisme dimana sebuah tim diminta untuk mengambil sebuah file atau string yang sudah disembunyikan sistem, serta mendeteksi lalu mengeksploitasi kelemahan untuk mendapatkan dan mengumpulkan flag
                  sebanyak-banyaknya.
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link
                  href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                  className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]"
                >
                  <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
                </Link>
                <Link href={'https://docs.google.com/forms/d/10Xj6u0p0ykHcUwsDVXA__O1ZiuBWjwgVU2wXfJRm0ao/edit'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
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
          <div className="py-24">
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
                {/* <Link href={'https://drive.google.com/drive/folders/1EspN_wlBeK8J1CHVxApL9kcpn5mMptEZ?usp=drive_link'} className="">
                  <div className="w-72 h-14 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg flex justify-center items-center hover:bg-[#eaeaea]">
                    <p className={`text-center text-[#212427] ${poppins.className}`}>Lihat Rulebook</p>
                  </div>
                </Link> */}
                <div className="py-7">
                  <Image src={'/technofair/timeline-ctf.png'} alt='timeline ctf' width={275} height={768}/>
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
                      <li>Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi TECHNOFAIR 11.0 (https://bit.ly/technofair-11).</li>
                      <li>
                        Peserta merupakan pelajar SMA/Sederajat atau mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait
                        yang diunggah pada Google Form di website TechnoFair 11.0.
                      </li>
                      <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                      <li>Tim terdiri minimal 1 orang atau maksimal 3 orang.</li>
                      <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.</li>
                      <li>Peserta bukan merupakan panitia TechnoFair 11.0 dan tidak memiliki keterkaitan dalam proses pembuatan soal Capture The Flag.</li>
                      <li>Setiap peserta hanya boleh terdaftar pada 1 tim pada cabang kompetisi yang sama.</li>
                      <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                      <li>Peserta yang merupakan pemenang kompetisi TechnoFair 11.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
                      <li>Panitia TechnoFair 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan kompetisi.</li>
                      <li>Panitia berhak mendiskualifikasi tim yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi TechnoFair 11.0.</li>
                      <li>Keputusan juri dan panitia TechnoFair 11.0 bersifat mutlak dan tidak dapat diganggu gugat.</li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Ketentuan Kompetisi</p>
                  </div>
                  <div className="pl-5">
                    <ol className={`decimal text-[#212427] text-base ${poppins.className} py-5 pl-5 text-justify`}>
                      <li>
                        Format kompetisi adalah <em>Jeopardy</em>.
                      </li>
                      <li>
                        Kompetisi akan dilaksanakan di <em>platform</em> CTFd.
                      </li>
                      <li>Kompetisi dilaksanakan selama 6 jam.</li>
                      <li>Jumlah soal adalah 40 sampai 45 soal.</li>
                      <li>
                        <em>Scoreboard</em> akan dibekukan 1 jam sebelum waktu kompetisi berakhir.
                      </li>
                      <li>
                        Setiap peserta wajib mengumpulkan <em>writeups</em> yang berisi penjelasan mengenai langkah-langkah penyelesaian soal dengan jelas dan dikirim selambat-lambatnya 12 jam setelah kompetisi berakhir dengan format
                        sebagai berikut (nama soal, langkah penyelesaian, dan flag), soal akan dibuka sampai batas pengumpulan <em>writeups</em>.
                      </li>
                      <li>
                        <em>Writeups</em> dikumpulkan pada email <strong>technofair.kompetisi@gmail.com</strong> dengan subject <strong>CTF_TECHNOFAIR 11.0_(nama tim)</strong>.
                      </li>
                      <li>
                        Peserta dengan poin terbanyak dan <em>writeups</em> yang valid akan keluar sebagai juara.
                      </li>
                      <li>Peserta dilarang bekerja sama dengan peserta atau tim lain dalam bentuk apapun.</li>
                      <li>Peserta dilarang merusak soal, mengubah flag, merusak server dan hal-hal lain yang dapat merugikan peserta lain dan mengganggu jalannya kompetisi.</li>
                      <li>
                        Peserta dilarang menggunakan <em>automated tools</em> yang membebani server, seperti <em>SQL Map, dir buster, nmap,</em> dll.{' '}
                      </li>
                      <li>Jika peserta melanggar ketentuan kompetisi dan ketahuan oleh panitia, maka peserta akan didiskualifikasi.</li>
                      <li>
                        <em>Scoring</em> akan dilakukan secara dinamis dengan fungsi <em>scoring</em> yang <em>default</em> dari <em>platform</em> CTFd.
                      </li>
                      <li>Peserta dalam satu kelompok harus berasal dari instansi yang sama.</li>
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
                    <ol className="decimal pl-6">
                      <li>Format babak pemanasan adalah Jeopardy.</li>
                      <li>Babak pemanasan akan dilakukan secara online menggunakan platform CTFd.</li>
                      <li>Babak pemanasan akan dilaksanakan selama 6 jam</li>
                      <li>Jumlah soal babak pemanasan adalah sebanyak 5 soal.</li>
                      <li>Pemanasan akan dilaksanakan pada tanggal 27 Juni 2024 jam 15.00 - 21.00 WIB.</li>
                      <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                      <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                      <li>Pemanasan bersifat tidak wajib (boleh mengikuti ataupun tidak).</li>
                    </ol>
                  </div>
                  <div className="py-3 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Penyisihan</p>
                    <ol className="decimal pl-6">
                      <li>Format babak penyisihan adalah Jeopardy.</li>
                      <li>Babak penyisihan akan dilakukan secara online menggunakan platform CTFd.</li>
                      <li>Babak penyisihan akan dilaksanakan selama 6 jam.</li>
                      <li>Jumlah soal babak penyisihan adalah minimal 30 soal.</li>
                      <li>Penyisihan akan dilaksanakan pada tanggal 30 Juni 2024 jam 09.00 - 15.00 WIB.</li>
                      <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                      <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                      <li>Scoreboard akan dibekukan 1 jam sebelum kompetisi berakhir.</li>
                      <li>
                        Setiap tim wajib membuat writeups dengan format nama-tim.pdf yang dikumpulkan adalah nama soal, langkah penyelesaian, dan flag, selambat-lambatnya (12 jam) setelah kompetisi berakhir (soal tetap dibuka setelah
                        kompetisi berakhir).
                      </li>
                      <li>Tim-tim yang berhak mengikuti babak final adalah 10 tim dengan peringkat teratas yang telah mengumpulkan writeup yang valid.</li>
                      <li>Peserta dilarang bekerjasama dengan peserta/tim lain dalam bentuk apapun.</li>
                      <li>Peserta dilarang melakukan hal-hal yang dapat merusak soal atau merugikan peserta lain.</li>
                      <li>Peserta yang terbukti melakukan kecurangan dan pelanggaran akan di diskualifikasi.</li>
                      <li>Peserta akan menerima email yang berisi username dan password untuk akun tim pada platform yang akan diberitahukan setelah tim selesai melaksanakan konfirmasi pembayaran dan sebelum babak penyisihan dimulai.</li>
                      <li>Kesalahan dan ketidaksesuaian substansi dalam penjabaran langkah pengerjaan dapat mengakibatkan tidak diperhitungkannya nilai soal dalam penentuan finalis.</li>
                    </ol>
                  </div>
                  <div className="py-3 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Final</p>
                    <ol className="decimal pl-6">
                      <li>Final CTF TECHNOFAIR 11.0 akan dilaksanakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
                      <li>Scoreboard dibekukan 1 jam sebelum kompetisi berakhir (masih bisa mengumpulkan flag / jawaban).</li>
                      <li>
                        Setiap tim wajib membuat writeups dengan format nama-tim.pdf yang dikumpulkan adalah nama soal, langkah penyelesaian, dan flag, selambat-lambatnya (1 jam) setelah kompetisi berakhir (soal tetap dibuka setelah
                        kompetisi berakhir).
                      </li>
                      <li>Final dilaksanakan menggunakan sistem Jeopardy.</li>
                      <li>Final akan dilaksanakan pada tanggal 13 Juli 2024 jam … WIB.</li>
                      <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                      <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                      <li>Mekanisme pengerjaan soal adalah peserta melakukan submisi flag pada submission form untuk setiap soal yang berhasil diselesaikan.</li>
                      <li>Selama kompetisi berlangsung peserta dilarang:</li>
                      <ol className="alpha pl-10">
                        <li>Bekerjasama dalam bentuk apapun dengan yang bukan termasuk peserta dalam tim yang bersangkutan.</li>
                        <li>Menyebabkan suatu kerugian atau gangguan dalam bentuk apapun terhadap peserta lain maupun panitia.</li>
                        <li>Tim yang diindikasikan melakukan pelanggaran atau kecurangan akan diberikan sanksi (diskualifikasi atau pengurangan poin).</li>
                      </ol>
                      <li>Informasi mengenai final Capture The Flag TechnoFair 11.0 akan diinformasikan lebih lanjut.</li>
                      <li>Kesalahan dan ketidaksesuaian substansi dalam penjabaran langkah pengerjaan dapat mengakibatkan tidak diperhitungkannya nilai soal dalam penentuan finalis.</li>
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
              <Image src={'/technofair/capture-the-flag.png'} alt="Capture The Flag" width={461} height={346} className="rounded-xl" />
            </div>
          </div>
          <div className="px-5">
            <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link>
            <div className="text-[#262626]">
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>Capture The Flag</p>
              <p className={`${poppins.className} text-base italic font-light`}>Capture The Flag Competition of TechnoFair 11.0</p>
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
              <Link href={'https://docs.google.com/forms/d/10Xj6u0p0ykHcUwsDVXA__O1ZiuBWjwgVU2wXfJRm0ao/edit'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </Link>
            </div>
            <button onClick={() => toast.error('Coming Soon')} className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}>
              <p className='text-[#6c6a67]'>Lihat Rulebook</p>
            </button>
            {/* <Link href={'https://drive.google.com/drive/folders/1EspN_wlBeK8J1CHVxApL9kcpn5mMptEZ?usp=drive_link'} className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}>
              <p className='text-[#6c6a67]'>Lihat Rulebook</p>
            </Link> */}
            <div className="">
              <Image src={'/technofair/timeline-ctf.png'} alt='timeline ctf' width={175} height={568}/>
            </div>
          </div>
          <div className="">
            <div className="py-10 px-5">
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] text-base font-bold ${poppins.className}`}>Ketentuan Umum</p>
              </div>
              <div className={`${poppins.className} text-base text-[#262626] pt-5`}>
                <ol className={`decimal text-[#212427] text-sm ${poppins.className} py-5 pl-10`}>
                  <li>Peserta adalah pihak yang telah mengikuti mekanisme pendaftaran pada website resmi TECHNOFAIR 11.0 (https://bit.ly/technofair-11).</li>
                  <li>
                    Peserta merupakan pelajar SMA/Sederajat atau mahasiswa/i aktif S1/D4/D3/D2/D1, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait
                    yang diunggah pada Google Form di website TechnoFair 11.0.
                  </li>
                  <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                  <li>Tim terdiri minimal 1 orang atau maksimal 3 orang.</li>
                  <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai waktu yang ditentukan akan dinyatakan gugur.</li>
                  <li>Peserta bukan merupakan panitia TechnoFair 11.0 dan tidak memiliki keterkaitan dalam proses pembuatan soal Capture The Flag.</li>
                  <li>Setiap peserta hanya boleh terdaftar pada 1 tim pada cabang kompetisi yang sama.</li>
                  <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 kompetisi.</li>
                  <li>Peserta yang merupakan pemenang kompetisi TechnoFair 11.0 wajib menghadiri acara Closing Ceremony yang diselenggarakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
                  <li>Panitia TechnoFair 11.0 berhak untuk mencabut gelar juara dari pemenang jika ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan kompetisi.</li>
                  <li>Panitia berhak mendiskualifikasi tim yang melakukan tindak kecurangan maupun pelanggaran terhadap aturan kompetisi TechnoFair 11.0.</li>
                  <li>Keputusan juri dan panitia TechnoFair 11.0 bersifat mutlak dan tidak dapat diganggu gugat.</li>
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
                    Format kompetisi adalah <em>Jeopardy</em>.
                  </li>
                  <li>
                    Kompetisi akan dilaksanakan di <em>platform</em> CTFd.
                  </li>
                  <li>Kompetisi dilaksanakan selama 6 jam.</li>
                  <li>Jumlah soal adalah 40 sampai 45 soal.</li>
                  <li>
                    <em>Scoreboard</em> akan dibekukan 1 jam sebelum waktu kompetisi berakhir.
                  </li>
                  <li>
                    Setiap peserta wajib mengumpulkan <em>writeups</em> yang berisi penjelasan mengenai langkah-langkah penyelesaian soal dengan jelas dan dikirim selambat-lambatnya 12 jam setelah kompetisi berakhir dengan format sebagai
                    berikut (nama soal, langkah penyelesaian, dan flag), soal akan dibuka sampai batas pengumpulan <em>writeups</em>.
                  </li>
                  <li>
                    <em>Writeups</em> dikumpulkan pada email <strong>technofair.kompetisi@gmail.com</strong> dengan subject <strong>CTF_TECHNOFAIR 11.0_(nama tim)</strong>.
                  </li>
                  <li>
                    Peserta dengan poin terbanyak dan <em>writeups</em> yang valid akan keluar sebagai juara.
                  </li>
                  <li>Peserta dilarang bekerja sama dengan peserta atau tim lain dalam bentuk apapun.</li>
                  <li>Peserta dilarang merusak soal, mengubah flag, merusak server dan hal-hal lain yang dapat merugikan peserta lain dan mengganggu jalannya kompetisi.</li>
                  <li>
                    Peserta dilarang menggunakan <em>automated tools</em> yang membebani server, seperti <em>SQL Map, dir buster, nmap,</em> dll.{' '}
                  </li>
                  <li>Jika peserta melanggar ketentuan kompetisi dan ketahuan oleh panitia, maka peserta akan didiskualifikasi.</li>
                  <li>
                    <em>Scoring</em> akan dilakukan secara dinamis dengan fungsi <em>scoring</em> yang <em>default</em> dari <em>platform</em> CTFd.
                  </li>
                  <li>Peserta dalam satu kelompok harus berasal dari instansi yang sama.</li>
                </ol>
              </div>
            </div>
            <div className={`py-10 px-5 ${poppins.className}`}>
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className=" font-bold">Babak Pemanasan</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Format babak pemanasan adalah Jeopardy.</li>
                  <li>Babak pemanasan akan dilakukan secara online menggunakan platform CTFd.</li>
                  <li>Babak pemanasan akan dilaksanakan selama 6 jam</li>
                  <li>Jumlah soal babak pemanasan adalah sebanyak 5 soal.</li>
                  <li>Pemanasan akan dilaksanakan pada tanggal 27 Juni 2024 jam 15.00 - 21.00 WIB.</li>
                  <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                  <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                  <li>Pemanasan bersifat tidak wajib (boleh mengikuti ataupun tidak).</li>
                </ol>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className=" font-bold">Babak Penyisihan</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Format babak penyisihan adalah Jeopardy.</li>
                  <li>Babak penyisihan akan dilakukan secara online menggunakan platform CTFd.</li>
                  <li>Babak penyisihan akan dilaksanakan selama 6 jam.</li>
                  <li>Jumlah soal babak penyisihan adalah minimal 30 soal.</li>
                  <li>Penyisihan akan dilaksanakan pada tanggal 30 Juni 2024 jam 09.00 - 15.00 WIB.</li>
                  <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                  <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                  <li>Scoreboard akan dibekukan 1 jam sebelum kompetisi berakhir.</li>
                  <li>
                    Setiap tim wajib membuat writeups dengan format nama-tim.pdf yang dikumpulkan adalah nama soal, langkah penyelesaian, dan flag, selambat-lambatnya (12 jam) setelah kompetisi berakhir (soal tetap dibuka setelah kompetisi
                    berakhir).
                  </li>
                  <li>Tim-tim yang berhak mengikuti babak final adalah 10 tim dengan peringkat teratas yang telah mengumpulkan writeup yang valid.</li>
                  <li>Peserta dilarang bekerjasama dengan peserta/tim lain dalam bentuk apapun.</li>
                  <li>Peserta dilarang melakukan hal-hal yang dapat merusak soal atau merugikan peserta lain.</li>
                  <li>Peserta yang terbukti melakukan kecurangan dan pelanggaran akan di diskualifikasi.</li>
                  <li>Peserta akan menerima email yang berisi username dan password untuk akun tim pada platform yang akan diberitahukan setelah tim selesai melaksanakan konfirmasi pembayaran dan sebelum babak penyisihan dimulai.</li>
                  <li>Kesalahan dan ketidaksesuaian substansi dalam penjabaran langkah pengerjaan dapat mengakibatkan tidak diperhitungkannya nilai soal dalam penentuan finalis.</li>
                </ol>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className=" font-bold">Babak Final</p>
                <ol className="decimal pl-10 text-sm">
                  <li>Final CTF TECHNOFAIR 11.0 akan dilaksanakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.</li>
                  <li>Scoreboard dibekukan 1 jam sebelum kompetisi berakhir (masih bisa mengumpulkan flag / jawaban).</li>
                  <li>
                    Setiap tim wajib membuat writeups dengan format nama-tim.pdf yang dikumpulkan adalah nama soal, langkah penyelesaian, dan flag, selambat-lambatnya (1 jam) setelah kompetisi berakhir (soal tetap dibuka setelah kompetisi
                    berakhir).
                  </li>
                  <li>Final dilaksanakan menggunakan sistem Jeopardy.</li>
                  <li>Final akan dilaksanakan pada tanggal 13 Juli 2024 jam … WIB.</li>
                  <li>Penilaian ditentukan dari seberapa tinggi peringkat dan total nilai yang didapatkan masing-masing tim.</li>
                  <li>Bobot nilai bersifat dinamis, dimana akan berkurang seiring dengan banyaknya peserta yang dapat menyelesaikan soal tersebut.</li>
                  <li>Mekanisme pengerjaan soal adalah peserta melakukan submisi flag pada submission form untuk setiap soal yang berhasil diselesaikan.</li>
                  <li>Selama kompetisi berlangsung peserta dilarang:</li>
                  <ol className="alpha pl-10">
                    <li>Bekerjasama dalam bentuk apapun dengan yang bukan termasuk peserta dalam tim yang bersangkutan.</li>
                    <li>Menyebabkan suatu kerugian atau gangguan dalam bentuk apapun terhadap peserta lain maupun panitia.</li>
                    <li>Tim yang diindikasikan melakukan pelanggaran atau kecurangan akan diberikan sanksi (diskualifikasi atau pengurangan poin).</li>
                  </ol>
                  <li>Informasi mengenai final Capture The Flag TechnoFair 11.0 akan diinformasikan lebih lanjut.</li>
                  <li>Kesalahan dan ketidaksesuaian substansi dalam penjabaran langkah pengerjaan dapat mengakibatkan tidak diperhitungkannya nilai soal dalam penentuan finalis.</li>
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
