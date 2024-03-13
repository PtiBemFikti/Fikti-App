<<<<<<< HEAD
export default function EventPage() {
    return (
        <div style={{ margin: '75px', padding: '35px', backgroundColor: 'lightgray' }}>
            <div>
                <h1 className="text-3xl"><strong>Our Upcoming Events</strong></h1>
            </div>
            <div style={{ margin: '30px', padding: '15px'}}>
               <div style={{ margin: '15px', padding: '7px'}}>
                    <h2 className="text-lg">Seminars & Workshops</h2>
                </div>
            <div style={{margin: '15px', padding: '7'}}>
                <p>Webinar</p>
                <br/>
                <p>Big Data</p>
            </div>
                <p>A dynamic language popular for</p>
                <p>web development, big data,</p>
                <p>science, and scripting</p>
                <br/>
                <p>June 22-24, 2024 10.30 WIB</p>
                <p>Information & Cybersecurity</p>
                <p>Online</p>
                <p>Learn more</p>
            </div>
        </div>
    );
=======
import Image from 'next/image';

export default function EventPage() {
  return (
    <div className="">
      {/* Tampilan Dekstop Start */}
      <div className="md:block hidden">
        <div className="">
          <div className="flex justify-center items-center p-14 mt-20 event">
            <div className="w-2/3">
              <h1 className="text-white text-6xl font-bold font-[Bricolage-Grotesque]">
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
>>>>>>> 33bf3373b4ad4a1f1107ed1f466a25e6f0b4da44
}
