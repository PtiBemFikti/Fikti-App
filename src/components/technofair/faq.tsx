import AccordionCard from './AccordionCard';
import Image from 'next/image';

export default function FaqPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="flex justify-center py-32 gap-20">
          <div className="">
            <div className="">
              <p className="text-[#fff4e7] text-5xl font-[Bricolage-Grotesque] font-bold">Frequently Asked Questions</p>
              <p className="text-[#fff4e7] text-sm font-[Poppins] py-2">Everything you need to know about TechnoFair.</p>
            </div>
            <div className=" mt-56">
              <p className="text-[#fff4e7] font-[Bricolage-Grotesque] text-5xl font-bold">Contact us</p>
              <p className="text-[#fff4e7] text-xl font-[Poppins] py-3">Can&apos;t find what you are looking for? feel free to ask us.</p>
              <div className="">
                <div className="flex gap-5 py-2">
                  <div className="flex gap-2">
                    <Image src={'/technofair/instagram.png'} alt="instagram" width={20} height={20} />
                    <p className="text-sm">@technofair</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={'/technofair/x.png'} alt="instagram" width={20} height={20} />
                    <p className="text-sm">@technofair</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={'/technofair/line.png'} alt="instagram" width={20} height={20} />
                    <p className="text-sm">@technofair</p>
                  </div>
                </div>
                <div className="text-sm gap-1">
                  <p className="">
                    or <a href="#" className='underline'>Others</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="w-96 bg-[#1E2749] rounded-3xl p-6">
                <AccordionCard title="Apa itu TechnoFair?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <AccordionCard title="Kapan dan dimana TechnoFair 11.0 dilaksanakan?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <AccordionCard title="Apakah ada biaya pendaftaran di TechnoFair 11.0?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <AccordionCard title="Bagaimana saya mengetahui saya berhasil melakukan registrasi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <AccordionCard title="Bagaimana saya mengetahui pemenang dalam kompetisi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
                <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
                <AccordionCard title="Apa saja yang akan didapat pemenang dalam kompetisi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
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
            <p className="text-4xl font-bold font-[Bricolage-Grotesque]">Frequently Asked Questions</p>
            <p className="font-[Poppins] text-sm py-2">Everything you need to know about TechnoFair.</p>
          </div>
          <div className="p-4 flex justify-center items-center">
            <div className="w-96 bg-[#1E2749] rounded-3xl p-4">
              <AccordionCard title="Apa itu TechnoFair?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <AccordionCard title="Kapan dan dimana TechnoFair 11.0 dilaksanakan?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <AccordionCard title="Apakah ada biaya pendaftaran di TechnoFair 11.0?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <AccordionCard title="Bagaimana saya mengetahui saya berhasil melakukan registrasi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <AccordionCard title="Bagaimana saya mengetahui pemenang dalam kompetisi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
              <div className="w-80 h-0.5 bg-gradient-to-r from-[#1E2749] via-[#AF5474] to-[#FFB560]"></div>
              <AccordionCard title="Apa saja yang akan didapat pemenang dalam kompetisi?" content="TechnoFair adalah event IT terbesar yang diselenggarakan oleh BEM FIKTI UG." />
            </div>
          </div>
          <div className="py-7 text-center px-4">
            <p className="font-[Bricolage-Grotesque] font-bold text-4xl text-[#fff4e7]">Contact us</p>
            <p className="font-[Poppins] text-base py-3">
              Can’t find what you are looking for? feel free to{' '}
              <a href="#" className="underline">
                ask us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
