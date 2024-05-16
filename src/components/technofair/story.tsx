// import ImageAnimation from './ImageAnimation';
import Image from 'next/image';
import ScrollImage from './ScrollImage';
import { bricolageGrotesque } from '@/styles/font';
import Link from 'next/link';

export default function StoryPage() {
  return (
    <div className="bg-[#0B0E1A]">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="flex justify-center items-center p-20">
          <div className="w-full">
            <div className="flex">
              <div className="w-3/6 pt-16">
                <div className={`px-7 ${bricolageGrotesque.className}`}>
                  <p className="text-[#FFF4E7] text-6xl  font-bold">TechnoFair 11.0</p>
                  <p className="text-[#FFF4E7] text-5xl">More Than Just Pictures, a Story!</p>
                </div>
                <div className="pt-96 px-7 font-[Poppins] text-[#f7f9fa]">
                  <p className="text-xl font-light">Lets Chat, Reach Out to Us</p>
                  <div className="flex gap-3 py-2">
                    <Link href={'https://www.instagram.com/technofair'} className="flex gap-2">
                      <Image src={'/technofair/instagram.png'} alt="instagram" width={20} height={20} />
                      <p className="text-sm">@technofair</p>
                    </Link>
                    <Link href={'https://twitter.com/technofair?t=2a69wN8oDV7culaW8k0l6A'} className="flex gap-2">
                      <Image src={'/technofair/x.png'} alt="instagram" width={20} height={20} />
                      <p className="text-sm">@technofair</p>
                    </Link>
                    <div className="flex gap-2">
                      <Image src={'/technofair/wa.png'} alt="wa" width={20} height={20} />
                      <div className="pt-1">
                        <p className="text-xs">+62 896-7725-3356</p>
                      </div>
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
              <div className="w-5/6">
                <div className="">
                  <div className="">
                    {/* <ImageAnimation /> */}
                    <Image src={'/technofair/dokum.png'} alt="image animation" width={825} height={734} />
                    {/* <ScrollImage/> */}
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
        <div className="flex flex-col justify-center items-center">
          <div className={`px-5 text-[#fff4e7] ${bricolageGrotesque.className} text-center`}>
            <p className="font-bold text-5xl">TechnoFair 11.0</p>
            <p className="text-4xl">More Than Just Pictures, a Story!</p>
          </div>
          <div className="pt-9">
            {/* <ImageAnimation /> */}
            <Image src={'/technofair/dokum-mobile.png'} alt="image animation" width={360} height={914} />
          </div>
          <div className="text-center py-9">
            <p className="text-base font-light">Lets Chat, Reach Out to Us</p>
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
                <Image src={'/technofair/wa.png'} alt="wa" width={20} height={20} />
                <p className="text-xs">+62 896-7725-3356</p>
              </div>
            </div>
            <div className="flex text-sm gap-1 justify-center items-center">
              <p className="">or</p>
              <Link
                href={'https://linktr.ee/technofair11?fbclid=PAZXh0bgNhZW0CMTEAAabzjywo6Sk-8qxuYTLdjgLMnVnTeWbm2kbY7zct3gZy6VdLthPUCm0pU8c_aem_AW7cFsvByc5KSlhmde7efcYbBX-geig6t77oEPAV6e9SNR6tz1thTPPyfIyC6xelk5ZLAaWAwnL4NgPZD760f87F'}
                className="underline"
              >
                Others
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Mobile End */}
    </div>
  );
}
