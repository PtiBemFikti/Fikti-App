import Image from 'next/image';
import AccordionCard from './Accordion';
import Link from 'next/link';
import { bricolageGrotesque, poppins } from '@/styles/font';
import { useRouter } from 'next/router';

export default function UIUXCompePage() {
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
            <div className="w-1/2 py-12">
              <Image src={'/technofair/UI-UX-design.png'} alt="UI/UX Design" width={461} height={346} className="rounded-2xl" />
            </div>
            <div className="w-1/2 py-8">
              <Link href={'/technofair'} className="flex gap-4">
                <Image src={'/technofair/btn-back.png'} alt="button back" width={28} height={28} />
                <p className="text-xl font-medium text-[#545350]">Back</p>
              </Link>
              <div className="">
                <div className="flex gap-2">
                  <p className="text-4xl font-bold text-[#241525]">UI/UX Design</p>
                  <p className="font-bold text-[#B9BCC7] text-xl mt-3">Competitions</p>
                </div>
                <div className={`text-[#212427] text-lg italic font-light ${poppins.className}`}>Enhancing Modern Visual with UI/UX Design</div>
              </div>
              <div className={`text-[#212427] text-xl font-semibold ${poppins.className} py-2`}>Senin, 20 Mei 2024</div>
              <div className="">
                <p className={`text-lg font-normal ${poppins.className} text-[#212427]`}>
                  <em>UI/UX Design Competition</em> adalah salah satu kompetisi untuk menunjukkan bakat dan kemampuan peserta dalam membangun desain antarmuka sistem/produk yang berorientasi kepada kenyamanan dan kemudahan pengguna (user)
                  dalam menggunakan sistem/produk tersebut.
                </p>
              </div>
              <div className="pt-2 flex gap-4">
                <Link
                  href={'https://www.evernote.com/shard/s525/sh/3e2f8fd8-0a98-30c9-c8b2-9d7653a084c8/JFRBMYKaNZmaczI2FlEAViQHcsugmyqSH2Fqy3EqVas2_r-MJv297IhWOA'}
                  className="w-44 h-14 bg-[#FEFDFC] rounded-[16px] border flex justify-center items-center hover:bg-[#FAF9F7]"
                >
                  <p className={`text-[#6C6A67] ${poppins.className} text-base font-semibold`}>Hubungi Kami</p>
                </Link>
                <Link href={'https://bit.ly/RegistrationUIUXTechnoFair11-0'} className="w-48 h-14 bg-[#21B573] rounded-[16px] border flex justify-center items-center hover:bg-[#1C9760]">
                  <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
                </Link>
                <div className="mt-9 text-base text-[#212427]">
                  <p>
                    <strong>Rp 65.000</strong>/Tim
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-24">
            <div className="flex gap-20">
              <div className="w-2/6 flex flex-col gap-5">
                <div className=" w-72 h-48 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg">
                  <div className="px-5 py-2">
                    <p className={`text-[#31304D] text-sm ${poppins.className} font-semibold`}>Details</p>
                    <div className="px-3">
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Ketentuan Umum</p>
                      </div>
                      <div className="py-2 flex gap-5">
                        <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                        <p className={`text-[#212427] text-base ${poppins.className}`}>Ketentuan Kompetisi</p>
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
                <Link href={'https://drive.google.com/file/d/1Y-MZrxtNFelT7wPA3VEKScldD45dMt_1/view?usp=drive_link'} className="">
                  <div className="w-72 h-14 bg-[#F7F9FA] rounded-[8px] border-[#B9BCC7] border shadow-lg flex justify-center items-center hover:bg-[#eaeaea]">
                    <p className={`text-center text-[#212427] ${poppins.className}`}>Lihat Rulebook</p>
                  </div>
                </Link>
                <div className="py-7">
                  <Image src={'/technofair/timeline-uiuxcompe.png'} alt='timeline uiux' width={289} height={765}/>
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
                      <li>
                        Peserta adalah pihak yang telah menyelesaikan alur dan mekanisme pendaftaran pada website resmi <em>TechnoFair</em> 11.0 (bit.ly/technofair-11).
                      </li>
                      <li>
                        Peserta merupakan mahasiswa/i S1/D4/D3/D2/D1 dan pelajar aktif, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait yang diunggah
                        pada Google form.
                      </li>
                      <li>
                        Peserta merupakan siswa SLTA, mahasiswa aktif D3, D4, atau S1 perguruan tinggi, atau umum dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan
                        tinggi/instansi terkait yang diunggah pada Form Registrasi.
                      </li>
                      <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                      <li>Setiap anggota peserta harus berasal dari institusi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.</li>
                      <li>
                        Peserta bukan merupakan panitia <em>TechnoFair</em> 11.0.
                      </li>
                      <li>Setiap peserta diperbolehkan mengikuti lebih dari 1 kompetisi yang berbeda. </li>
                      <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 cabang kompetisi.</li>
                      <li>
                        Setiap Peserta harus telah terdaftar pada website <em>TechnoFair</em> 11.0 dan tidak dapat digantikan oleh orang lain.{' '}
                      </li>
                      <li>
                        Para peserta wajib mengikuti/follow akun instagram <em>TechnoFair</em> 11.0 (@technofair).
                      </li>
                      <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai batas waktu yang telah ditentukan akan dinyatakan gugur. </li>
                      <li>
                        Peserta finalis kompetisi <em>UI/UX Design Competition TechnoFair</em> 11.0 wajib menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.
                      </li>
                      <li>Karya yang dibuat wajib memenuhi ketentuan karya.</li>
                      <li>
                        <em>TechnoFair</em> 11.0 berhak untuk mempublikasikan karya peserta yang diikutsertakan pada kompetisi <em>TechnoFair</em> 11.0 dengan tetap mencantumkan nama peserta dan tidak untuk tujuan komersial.{' '}
                      </li>
                      <li>
                        Hak kekayaan intelektual dari karya peserta pada kompetisi <em>TechnoFair</em> 9.0 akan tetap menjadi hak peserta.
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
                      <li>Seluruh atau sebagian peraturan dan ketentuan yang terdapat pada rulebook dapat berubah sewaktu-waktu. </li>
                      <li>
                        Segala bentuk perubahan yang terjadi akan diberitahukan pada website <em>TechnoFair</em> 11.0{' '}
                      </li>
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
                      <li>Satu tim terdiri atas maksimal 3 anggota, yang mana ada 1 anggota untuk menjadi ketua tim.</li>
                      <li>
                        Setiap peserta harus memenuhi semua ketentuan kompetisi <em>UI/UX Design Competition</em> serta ketentuan umum kompetisi <em>UI/UX Design Competition</em>.
                      </li>
                      <li>Satu tim hanya dapat mengajukan 1 buah karya pada kompetisi UI/UX Design.</li>
                      <li>Peserta diperbolehkan memiliki dosen pembimbing dalam kompetisi, dosen pembimbing dan peserta harus dari perguruan tinggi yang sama. </li>
                      <li>Peserta harus membuat desain/produk sesuai dengan tema yaitu Enhancing Modern Visual with UI/UX Design.</li>
                      <li>
                        Kompetisi UI/UX Design TechnoFair 11.0 ini terdiri dari 2 babak, yaitu babak penyisihan dan babak final. Babak penyisihan diselenggarakan secara online melalui website, platform Discord, dan media sosial TechnoFair
                        11.0. Babak final <em>UI/UX Design Competition</em> diselenggarakan secara offline pada Auditorium J167, Kampus J1, Universitas Gunadarma.
                      </li>
                      <li>Karya desain/produk yang diajukan belum pernah diikutsertakan/menjadi pemenang/memperoleh penghargaan pada kompetisi lain.</li>
                      <li>Peserta yang melanggar peraturan akan didiskualifikasi. </li>
                      <li>Karya yang dikompetisikan tidak mengandung unsur-unsur yang dapat menimbulkan isu SARA (Suku, Agama, Ras, dan Antar golongan). </li>
                      <li>Dilarang melakukan penjiplakan dalam pembuatan karya, dan apabila peserta terbukti melakukan penjiplakan maka akan dinyatakan gugur. </li>
                      <li>Peserta wajib mengikuti setiap peraturan yang telah ditentukan oleh pihak panitia.</li>
                    </ol>
                  </div>
                </div>
                <div className="py-2">
                  <div className="py-2 flex gap-5">
                    <Image src={'/technofair/play.png'} alt="play" width={25} height={25} />
                    <p className={`text-[#31304D] text-xl font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
                  </div>
                  <div className="py-5 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Penyisihan</p>
                    <p className="pl-5">
                      Pada babak penyisihan, peserta mengirimkan <strong>proposal</strong> terkait ide UI/UX Design. Dengan ketentuan sebagai berikut.
                    </p>
                    <ol className="decimal pl-12">
                      <li>Proposal</li>
                      <ol className="disc pl-5">
                        <li>Proposal yang diajukan merupakan ide orisinal dengan tidak menjiplak yang sudah ada.</li>
                        <li>Setiap tim hanya diperbolehkan mengumpulkan proposal satu kali hingga batas akhir pengumpulan yang ditentukan.</li>
                        <li>Proposal berisi sebagai berikut:</li>
                        <ol className="alpha pl-7">
                          <li>
                            Cover (mencantumkan logo <em>TechnoFair</em> 11.0 dan logo universitas peserta, logo <em>TechnoFair</em> 11.0 dapat diunduh melalui tautan (https://bit.ly/LogoTechnoFair11)).
                          </li>
                          <li>Judul produk/karya.</li>
                          <li>Nama tim.</li>
                          <li>Latar belakang masalah.</li>
                          <li>Tujuan dan hasil yang akan dipakai.</li>
                          <li>
                            Metode pencapaian tujuan (menggunakan <em>user-centered design methodology</em>).
                          </li>
                          <li>Analisis desain karya meliputi:</li>
                          <ol className="roman pl-5">
                            <li>Target pengguna.</li>
                            <li>Batasan produk.</li>
                            <li>Platform yang digunakan.</li>
                            <li>Skenario rancangan produk.</li>
                          </ol>
                          <li>
                            Ilustrasi desain interaksi produk (tampilan <em>high-fidelity prototype</em> perangkat <em>lunak/mock-up</em>).
                          </li>
                          <li>Kesimpulan.</li>
                          <li>Daftar pustaka (jika ada).</li>
                        </ol>
                        <li>Struktur proposal tidak terbatas pada poin-poin tersebut.</li>
                        <li>Proposal berkisar antara 15-20 halaman.</li>
                        <li>Isi proposal ditulis dengan aturan sebagai berikut:</li>
                        <ol className="alpha pl-7">
                          <li>Diketik dalam kertas A4 dengan margin batas atas 3 cm, batas bawah 3 cm, samping kiri 4 cm, dan samping kanan 3 cm.</li>
                          <li>
                            Jenis font:{' '}
                            <strong>
                              <em>Times New Roman</em>
                            </strong>
                          </li>
                          <li>
                            Ukuran font: <strong>12 pt</strong> dengan Batasan Spasi: <strong>1,5 spasi</strong>.
                          </li>
                        </ol>
                        <li>
                          Proposal disusun sesuai dengan <em>template</em> proposal yang telah diberikan, <em>template</em> proposal dapat diunduh di (https://bit.ly/TemplateProposalTF11)
                        </li>
                        <li>
                          Proposal disimpan dan dikirim dalam format <strong>.pdf</strong>.
                        </li>
                        <li>Peserta memberi nama file proposal dengan format:</li>
                        <p className="font-bold text-xl text-center">TF11.0_PROPOSAL_UX DESIGN_(NAMA TIM).pdf</p>
                        <p>Contoh: TF11.0_PROPOSAL_UX DESIGN_INSPIRATIF.pdf</p>
                        <li>
                          Proposal diunggah pada <em>link</em> form pengumpulan yang tersedia di <em>website TechnoFair</em> 11.0 (https://bit.ly/technofair-11)
                        </li>
                      </ol>
                    </ol>
                    <p className="pl-5">Dewan juri akan menentukan 5 tim terbaik untuk masuk ke babak final.</p>
                  </div>
                  <div className="py-5 pl-5 text-[#212427]">
                    <p className="text-xl font-bold">Babak Final</p>
                    <p className="pl-5">Pada babak final, peserta wajib melakukan presentasi terkait karya UI/UX Design yang telah dibuat sesuai dengan project pada babak penyisihan. Dengan ketentuan sebagai berikut:</p>
                    <ol className="decimal pl-10">
                      <li>
                        Tim yang lolos babak final akan melakukan presentasi sesuai dengan konten yang dibuat pada proposal babak penyisihan (wajib menampilkan prototype/mock-up) dan diberikan waktu selama 10 menit untuk presentasi serta 10
                        menit untuk sesi tanya jawab. (menggunakan alat bantu presentasi Powerpoint).
                      </li>
                      <li>Dewan juri melakukan penjurian dan menentukan 3 tim terbaik yang akan menjadi pemenang kompetisi UI/UX Design. Pengumuman resmi dan penyerahan hadiah akan diberikan pada Closing Ceremony TechnoFair 11.0.</li>
                      <li>Format penamaan untuk file presentasi adalah sebagai berikut :</li>
                      <p className="text-center text-xl font-bold">TF11.0_FINAL_UI/UX DESIGN_(NAMA TIM).pptx</p>
                      <p>Contoh: TF11.0_FINAL_UI/UX DESIGN_INSPIRATIF.pptx</p>
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
                          Identifikasi Masalah - <strong>20 Poin</strong>
                        </li>
                        <li>
                          Inovasi Desain Produk - <strong>25 Poin</strong>
                        </li>
                        <li>
                          Metode Desain - <strong>20 Poin</strong>
                        </li>
                        <li>
                          Analisis Desain Karya - <strong>20 Poin</strong>
                        </li>
                        <li>
                          Kerapihan & Estetika - <strong>15 Poin</strong>
                        </li>
                      </ol>
                      <div className="w-36 border text-center rounded-lg">
                        <p className="font-bold">Total - 100 Poin</p>
                      </div>
                    </div>
                    <div className="py-5 text-[#212427]">
                      <p className="font-bold">Babak Final</p>
                      <ol className="pl-7 decimal">
                        <li>
                          Penguasaan Materi - <strong>35 Poin</strong>
                        </li>
                        <li>
                          Penyajian dan Komunikasi - <strong>30 Poin</strong>
                        </li>
                        <li>
                          Kemampuan Menjawab Pertanyaan Juri - <strong>35 Poin</strong>
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
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden">
        <div className="py-4">
          <div className="px-5">
            <div className="py-3">
              <Image src={'/technofair/UI-UX-design.png'} alt="UI/UX Design" width={461} height={346} className="rounded-xl" />
            </div>
          </div>
          <div className="px-5">
            <Link href={'/technofair'} className="flex gap-2">
              <Image src={'/technofair/btn-back.png'} alt="button back" width={24} height={24} />
              <p className="text-base font-medium text-[#262626]">Back</p>
            </Link>
            <div className="text-[#262626]">
              <p className={`${bricolageGrotesque.className} text-4xl font-extrabold`}>UI/UX Design</p>
              <p className={`${poppins.className} text-base italic font-light`}>Enhancing Modern Visual with UI/UX Design</p>
            </div>
            <div className="text-[#262626] py-3">
              <p className={`${poppins.className} text-sm font-medium`}>Senin, 20 Mei 2024</p>
            </div>
            <div className="text-sm text-[#212427]">
              <p>
                <strong>Rp 65.000</strong>/Tim
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
              <Link href={'https://bit.ly/RegistrationUIUXTechnoFair11-0'} className="w-48 h-14 bg-[#21B573] rounded-[8px] border flex justify-center items-center hover:bg-[#1C9760]">
                <p className={`text-[#FEFDFC] ${poppins.className} text-base font-semibold`}>Daftar Sekarang</p>
              </Link>
            </div>
            <Link
              href={'https://drive.google.com/file/d/1Y-MZrxtNFelT7wPA3VEKScldD45dMt_1/view?usp=drive_link'}
              className={`w-full h-14 bg-[#FEFDFC] ${poppins.className} rounded-[8px] border flex justify-center items-center hover:bg-[#FAF9F7] shadow-md`}
            >
              <p className="text-[#6c6a67]">Lihat Rulebook</p>
            </Link>
            <div className="py-3">
              <Image src={'/technofair/timeline-uiuxcompe.png'} alt='timeline uiux' width={259} height={765}/>
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
                  <li>
                    Peserta adalah pihak yang telah menyelesaikan alur dan mekanisme pendaftaran pada website resmi <em>TechnoFair</em> 11.0 (bit.ly/technofair-11).
                  </li>
                  <li>
                    Peserta merupakan mahasiswa/i S1/D4/D3/D2/D1 dan pelajar aktif, dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi terkait yang diunggah pada
                    Google form.
                  </li>
                  <li>
                    Peserta merupakan siswa SLTA, mahasiswa aktif D3, D4, atau S1 perguruan tinggi, atau umum dibuktikan dengan Kartu Tanda Mahasiswa/Kartu Pelajar yang masih aktif atau surat keterangan resmi dari perguruan tinggi/instansi
                    terkait yang diunggah pada Form Registrasi.
                  </li>
                  <li>Peserta harus melengkapi berkas pendaftaran dengan data yang benar dan legal secara hukum.</li>
                  <li>Setiap anggota peserta harus berasal dari institusi yang sama dan diperbolehkan dari jurusan/program studi yang berbeda.</li>
                  <li>
                    Peserta bukan merupakan panitia <em>TechnoFair</em> 11.0.
                  </li>
                  <li>Setiap peserta diperbolehkan mengikuti lebih dari 1 kompetisi yang berbeda. </li>
                  <li>Setiap peserta hanya dapat menjadi ketua tim pada maksimal 1 cabang kompetisi.</li>
                  <li>
                    Setiap Peserta harus telah terdaftar pada website <em>TechnoFair</em> 11.0 dan tidak dapat digantikan oleh orang lain.{' '}
                  </li>
                  <li>
                    Para peserta wajib mengikuti/follow akun instagram <em>TechnoFair</em> 11.0 (@technofair).
                  </li>
                  <li>Peserta yang tidak memenuhi persyaratan pendaftaran sampai batas waktu yang telah ditentukan akan dinyatakan gugur. </li>
                  <li>
                    Peserta finalis kompetisi <em>UI/UX Design Competition TechnoFair</em> 11.0 wajib menghadiri acara <em>Closing Ceremony</em> yang diselenggarakan secara offline di Auditorium J167, Kampus J1, Universitas Gunadarma.
                  </li>
                  <li>Karya yang dibuat wajib memenuhi ketentuan karya.</li>
                  <li>
                    <em>TechnoFair</em> 11.0 berhak untuk mempublikasikan karya peserta yang diikutsertakan pada kompetisi <em>TechnoFair</em> 11.0 dengan tetap mencantumkan nama peserta dan tidak untuk tujuan komersial.{' '}
                  </li>
                  <li>
                    Hak kekayaan intelektual dari karya peserta pada kompetisi <em>TechnoFair</em> 9.0 akan tetap menjadi hak peserta.
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
                  <li>Seluruh atau sebagian peraturan dan ketentuan yang terdapat pada rulebook dapat berubah sewaktu-waktu. </li>
                  <li>
                    Segala bentuk perubahan yang terjadi akan diberitahukan pada website <em>TechnoFair</em> 11.0{' '}
                  </li>
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
                  <li>Satu tim terdiri atas maksimal 3 anggota, yang mana ada 1 anggota untuk menjadi ketua tim.</li>
                  <li>
                    Setiap peserta harus memenuhi semua ketentuan kompetisi <em>UI/UX Design Competition</em> serta ketentuan umum kompetisi <em>UI/UX Design Competition</em>.
                  </li>
                  <li>Satu tim hanya dapat mengajukan 1 buah karya pada kompetisi UI/UX Design.</li>
                  <li>Peserta diperbolehkan memiliki dosen pembimbing dalam kompetisi, dosen pembimbing dan peserta harus dari perguruan tinggi yang sama. </li>
                  <li>Peserta harus membuat desain/produk sesuai dengan tema yaitu Enhancing Modern Visual with UI/UX Design.</li>
                  <li>
                    Kompetisi UI/UX Design TechnoFair 11.0 ini terdiri dari 2 babak, yaitu babak penyisihan dan babak final. Babak penyisihan diselenggarakan secara online melalui website, platform Discord, dan media sosial TechnoFair 11.0.
                    Babak final <em>UI/UX Design Competition</em> diselenggarakan secara offline pada Auditorium J167, Kampus J1, Universitas Gunadarma.
                  </li>
                  <li>Karya desain/produk yang diajukan belum pernah diikutsertakan/menjadi pemenang/memperoleh penghargaan pada kompetisi lain.</li>
                  <li>Peserta yang melanggar peraturan akan didiskualifikasi. </li>
                  <li>Karya yang dikompetisikan tidak mengandung unsur-unsur yang dapat menimbulkan isu SARA (Suku, Agama, Ras, dan Antar golongan). </li>
                  <li>Dilarang melakukan penjiplakan dalam pembuatan karya, dan apabila peserta terbukti melakukan penjiplakan maka akan dinyatakan gugur. </li>
                  <li>Peserta wajib mengikuti setiap peraturan yang telah ditentukan oleh pihak panitia. </li>
                </ol>
              </div>
            </div>
            <div className={`py-10 px-5 ${poppins.className}`}>
              <div className="flex gap-2">
                <Image src={'/technofair/play.png'} alt="play" width={20} height={20} />
                <p className={`text-[#31304D] font-bold ${poppins.className}`}>Tahapan Kompetisi</p>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className="text-base font-bold">Babak Penyisihan</p>
                <p className="text-sm pl-5">
                  Pada babak penyisihan, peserta mengirimkan <strong>proposal</strong> terkait ide UI/UX Design. Dengan ketentuan sebagai berikut.
                </p>
                <ol className="decimal pl-12 text-sm">
                  <li>Proposal</li>
                  <ol className="disc pl-5 text-sm">
                    <li>Proposal yang diajukan merupakan ide orisinal dengan tidak menjiplak yang sudah ada.</li>
                    <li>Setiap tim hanya diperbolehkan mengumpulkan proposal satu kali hingga batas akhir pengumpulan yang ditentukan.</li>
                    <li>Proposal berisi sebagai berikut:</li>
                    <ol className="alpha pl-7 text-sm">
                      <li>
                        Cover (mencantumkan logo <em>TechnoFair</em> 11.0 dan logo universitas peserta, logo <em>TechnoFair</em> 11.0 dapat diunduh melalui tautan (https://bit.ly/LogoTechnoFair11)).
                      </li>
                      <li>Judul produk/karya.</li>
                      <li>Nama tim.</li>
                      <li>Latar belakang masalah.</li>
                      <li>Tujuan dan hasil yang akan dipakai.</li>
                      <li>
                        Metode pencapaian tujuan (menggunakan <em>user-centered design methodology</em>).
                      </li>
                      <li>Analisis desain karya meliputi:</li>
                      <ol className="roman pl-5 text-sm">
                        <li>Target pengguna.</li>
                        <li>Batasan produk.</li>
                        <li>Platform yang digunakan.</li>
                        <li>Skenario rancangan produk.</li>
                      </ol>
                      <li>
                        Ilustrasi desain interaksi produk (tampilan <em>high-fidelity prototype</em> perangkat <em>lunak/mock-up</em>).
                      </li>
                      <li>Kesimpulan.</li>
                      <li>Daftar pustaka (jika ada).</li>
                    </ol>
                    <li>Struktur proposal tidak terbatas pada poin-poin tersebut.</li>
                    <li>Proposal berkisar antara 15-20 halaman.</li>
                    <li>Isi proposal ditulis dengan aturan sebagai berikut:</li>
                    <ol className="alpha pl-7 text-sm">
                      <li>Diketik dalam kertas A4 dengan margin batas atas 3 cm, batas bawah 3 cm, samping kiri 4 cm, dan samping kanan 3 cm.</li>
                      <li>
                        Jenis font:{' '}
                        <strong>
                          <em>Times New Roman</em>
                        </strong>
                      </li>
                      <li>
                        Ukuran font: <strong>12 pt</strong> dengan Batasan Spasi: <strong>1,5 spasi</strong>.
                      </li>
                    </ol>
                    <li>
                      Proposal disusun sesuai dengan <em>template</em> proposal yang telah diberikan, <em>template</em> proposal dapat diunduh di (https://bit.ly/TemplateProposalTF11)
                    </li>
                    <li>
                      Proposal disimpan dan dikirim dalam format <strong>.pdf</strong>.
                    </li>
                    <li>Peserta memberi nama file proposal dengan format:</li>
                    <p className="font-bold text-center">TF11.0_PROPOSAL_UX DESIGN_(NAMA TIM).pdf</p>
                    <p>Contoh: TF11.0_PROPOSAL_UX DESIGN_INSPIRATIF.pdf</p>
                    <li>
                      Proposal diunggah pada <em>link</em> form pengumpulan yang tersedia di <em>website TechnoFair</em> 11.0 (https://bit.ly/technofair-11)
                    </li>
                  </ol>
                </ol>
                <p className="text-sm pl-5">Dewan juri akan menentukan 5 tim terbaik untuk masuk ke babak final.</p>
              </div>
              <div className="py-5 pl-5 text-[#212427]">
                <p className="text-base font-bold">Babak Final</p>
                <p className="text-sm pl-5">Pada babak final, peserta wajib melakukan presentasi terkait karya UI/UX Design yang telah dibuat sesuai dengan project pada babak penyisihan. Dengan ketentuan sebagai berikut:</p>
                <ol className="decimal pl-10 text-sm">
                  <li>
                    Tim yang lolos babak final akan melakukan presentasi sesuai dengan konten yang dibuat pada proposal babak penyisihan (wajib menampilkan prototype/mock-up) dan diberikan waktu selama 10 menit untuk presentasi serta 10
                    menit untuk sesi tanya jawab. (menggunakan alat bantu presentasi Powerpoint).
                  </li>
                  <li>Dewan juri melakukan penjurian dan menentukan 3 tim terbaik yang akan menjadi pemenang kompetisi UI/UX Design. Pengumuman resmi dan penyerahan hadiah akan diberikan pada Closing Ceremony TechnoFair 11.0.</li>
                  <li>Format penamaan untuk file presentasi adalah sebagai berikut :</li>
                  <p className="text-center font-bold">TF11.0_FINAL_UI/UX DESIGN_(NAMA TIM).pptx</p>
                  <p>Contoh: TF11.0_FINAL_UI/UX DESIGN_INSPIRATIF.pptx</p>
                </ol>
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
                      Identifikasi Masalah - <strong>20 Poin</strong>
                    </li>
                    <li>
                      Inovasi Desain Produk - <strong>25 Poin</strong>
                    </li>
                    <li>
                      Metode Desain - <strong>20 Poin</strong>
                    </li>
                    <li>
                      Analisis Desain Karya - <strong>20 Poin</strong>
                    </li>
                    <li>
                      Kerapihan & Estetika - <strong>15 Poin</strong>
                    </li>
                  </ol>
                  <div className="w-36 border text-center rounded-lg">
                    <p className="font-bold">Total - 100 Poin</p>
                  </div>
                </div>
                <div className="py-5 text-[#212427]">
                  <p className="font-bold">Babak Final</p>
                  <ol className="pl-7 decimal text-sm">
                    <li>
                      Penguasaan Materi - <strong>35 Poin</strong>
                    </li>
                    <li>
                      Penyajian dan Komunikasi - <strong>30 Poin</strong>
                    </li>
                    <li>
                      Kemampuan Menjawab Pertanyaan Juri - <strong>35 Poin</strong>
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
