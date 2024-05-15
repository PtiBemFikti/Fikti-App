import Accordion from '@/components/technofair/faq/Accordion';
import Image from 'next/image';
import { bricolageGrotesque } from '@/styles/font';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="flex justify-center py-32 gap-20">
          <div className="">
            <div className="">
              <p className={`text-[#fff4e7] text-5xl ${bricolageGrotesque.className} font-bold`}>Frequently Asked Questions</p>
              <p className="text-[#fff4e7] text-sm font-[Poppins] py-2">Everything you need to know about TechnoFair.</p>
            </div>
            <div className=" mt-56">
              <p className={`text-[#fff4e7] text-5xl font-bold ${bricolageGrotesque.className}`}>Contact us</p>
              <p className="text-[#fff4e7] text-xl font-[Poppins] py-3">Can&apos;t find what you are looking for? feel free to ask us.</p>
              <div className="">
                <div className="flex gap-5 py-2">
                  <Link href={'https://www.instagram.com/technofair'} className="flex gap-2">
                    <Image src={'/technofair/instagram.png'} alt="instagram" width={20} height={20} />
                    <p className="text-sm">@technofair</p>
                  </Link>
                  <Link href={'https://twitter.com/technofair?t=2a69wN8oDV7culaW8k0l6A'} className="flex gap-2">
                    <Image src={'/technofair/x.png'} alt="instagram" width={20} height={20} />
                    <p className="text-sm">@technofair</p>
                  </Link>
                  <div className="flex gap-2">
                    <Image src={'/technofair/wa.png'} alt="whatsapp" width={20} height={20} />
                    <p className="text-sm">+62 896-7725-3356 (Sakhila)</p>
                  </div>
                </div>
                <div className="text-sm gap-1">
                  <p className="">
                    or{' '}
                    <Link
                      href="https://linktr.ee/technofair11?fbclid=PAZXh0bgNhZW0CMTEAAabzjywo6Sk-8qxuYTLdjgLMnVnTeWbm2kbY7zct3gZy6VdLthPUCm0pU8c_aem_AW7cFsvByc5KSlhmde7efcYbBX-geig6t77oEPAV6e9SNR6tz1thTPPyfIyC6xelk5ZLAaWAwnL4NgPZD760f87F"
                      className="underline"
                    >
                      Others
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="w-96 bg-[#1e2749] rounded-3xl p-6">
                <Accordion title="Apa itu TechnoFair?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <Accordion
                  title="Kapan dan dimana TechnoFair 11.0 dilaksanakan?"
                  content="TechnoFair 11.0 diselenggarakan mulai 1 Juni 2024 sampai 27 Juli. Untuk acara Seminar dan Workshop diadakan secara Offline di Kampus Universitas Gunadarma dan Kompetisi secara Hybrid."
                />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <Accordion title="Apakah ada biaya pendaftaran di TechnoFair 11.0?" content="Seminar, Workshop, dan Kompetisi TechnoFair 11.0 memiliki biaya pembayaran." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <Accordion title="Bagaimana saya mengetahui informasi pemenang dalam kompetisi Technofair 11.0?" content="Pemenang akan diinformasikan melalui Social Media TechnoFair 11.0 dan media Discord TechnoFair 11.0." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <Accordion title="Apa saja yang akan didapat pemenang dalam kompetisi?" content="Pemenang Kompetisi akan mendapatkan uang tunai, sertifikat, dan hadiah menarik lainnya." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <Accordion title="Bagaimana Cara Mendaftar Event?" content="Pemenang Kompetisi akan mendapatkan uang tunai, sertifikat, dan hadiah menarik lainnya." />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      <div className="md:hidden">
        <div className="flex-col justify-center items-center py-32 px-4">
          <div className="text-[#fff4e7] text-center">
            <p className={`text-4xl font-bold ${bricolageGrotesque.className}`}>Frequently Asked Questions</p>
            <p className="font-[Poppins] text-sm py-2">Everything you need to know about TechnoFair.</p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <div className="w-96 bg-[#1E2749] rounded-3xl p-4">
              <Accordion title="Apa itu TechnoFair?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <Accordion
                title="Kapan dan dimana TechnoFair 11.0 dilaksanakan?"
                content="TechnoFair 11.0 diselenggarakan mulai 1 Juni 2024 sampai 27 Juli. Untuk acara Seminar dan Workshop diadakan secara Offline di Kampus Universitas Gunadarma dan Kompetisi secara Hybrid."
              />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <Accordion title="Apakah ada biaya pendaftaran di TechnoFair 11.0?" content="Seminar, Workshop, dan Kompetisi TechnoFair 11.0 memiliki biaya pembayaran." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <Accordion title="Bagaimana saya mengetahui saya berhasil melakukan registrasi?" content="Pemenang akan diinformasikan melalui Social Media TechnoFair 11.0 dan media Discord TechnoFair 11.0." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <Accordion title="Bagaimana saya mengetahui pemenang dalam kompetisi?" content="Pemenang Kompetisi akan mendapatkan uang tunai, sertifikat, dan hadiah menarik lainnya." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <Accordion title="Apa saja yang akan didapat pemenang dalam kompetisi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
            </div>
          </div>
          <div className="py-7 text-center px-4">
            <p className={`font-bold text-4xl text-[#fff4e7] ${bricolageGrotesque.className}`}>Contact us</p>
            <p className="font-[Poppins] text-base py-3">
              Can&apos;t find what you are looking for? feel free to{' '}
              <Link
                href="https://linktr.ee/technofair11?fbclid=PAZXh0bgNhZW0CMTEAAabzjywo6Sk-8qxuYTLdjgLMnVnTeWbm2kbY7zct3gZy6VdLthPUCm0pU8c_aem_AW7cFsvByc5KSlhmde7efcYbBX-geig6t77oEPAV6e9SNR6tz1thTPPyfIyC6xelk5ZLAaWAwnL4NgPZD760f87F"
                className="underline"
              >
                ask us
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
