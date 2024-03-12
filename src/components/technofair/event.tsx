import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="">
          <div className="flex justify-center items-center p-14 mt-20 event">
            <div className="w-2/3">
              <h1 className="text-white text-6xl font-bold">
                Our Upcoming <br /> Events
              </h1>
            </div>
            <div className="w-4/5">
              <Image src={'/technofair/content.png'} alt="content" width={736} height={192} />
            </div>
          </div>
        </div>
      </div>
      {/* Tampilan Dekstop End */}

      {/* Tampilan Mobile Start */}
      {/* Tampilan Mobile End */}
    </div>
  );
}
