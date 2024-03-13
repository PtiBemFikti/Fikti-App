import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import VidYoutube from '@/components/technofair/video';
// import AboutPage from '@/components/technofair/about';
import Image from 'next/image';
import AboutPage from '@/components/technofair/about';
import EventPage from '@/components/technofair/event';

import SponsorPage from '@/components/technofair/sponsor';

export default function TechnofairPage() {
  return (
    <main className="bg-white bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/technofair/bg-utama.png)' }}>
      {/* <Image src={'/technofair/bg-utama.png'} alt="Bg Utama" width={300} height={300} className="bg-cover absolute" /> */}
      <Navbar />
      <Dashboard />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
        <VidYoutube />
      </section> */}
      <AboutPage/>
      <EventPage/>
      {/* <SponsorPage/> */}
    </main>
  );
}
