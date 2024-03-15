import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden event">
        <div className="">
          <div className="flex justify-center items-center p-14 mt-20">
            <div className="w-2/3">
              <h1 className="text-white text-6xl font-bold font-[Bricolage-Grotesque]">
                Our Upcoming <br /> Events
              </h1>
            </div>
            <div className="w-4/5">
              <Image src={'/technofair/content.png'} alt="content" width={736} height={192} />
            </div>
          </div>
          <div className="">
            <p className='text-white'>Seminars</p>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      {/* Tampilan Mobile End */}
    </div>
  );
}