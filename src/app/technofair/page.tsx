import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import AboutPage from '@/components/technofair/about';
import EventPage from '@/components/technofair/event';
import SponsorPage from '@/components/technofair/sponsor';
import SchedulePage from '@/components/technofair/schedule';
import StoryPage from '@/components/technofair/story';
import FaqPage from '@/components/technofair/faq/faq';
import Footer from '@/components/technofair/footer';

// eslint-disable-next-line @next/next/no-async-client-component
export default function TechnofairPage() {
  return (
    <main className="bg-white bg-cover bg-no-repeat -z-50 overflow-x-hidden scroll-smooth" style={{ backgroundImage: 'url(/technofair/bg-utama.png)' }}>
      {/* <Image src={'/technofair/bg-utama.png'} alt="Bg Utama" width={300} height={300} className="bg-cover absolute" /> */}
      <Navbar />
      <Dashboard />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
        <VidYoutube />
      </section> */}
      <section id="about">
        <div className="pt-20">
          <AboutPage />
        </div>
      </section>
      <section id="event">
        <div className="md:pt-3">
          <EventPage />
        </div>
      </section>
      <div className="bg-gradient-to-t from-[#0B0E1A] to-[#211525]">
        <section id="schedule">
          <SchedulePage />
        </section>
      </div>
      <StoryPage />
      <SponsorPage />
      <section id="faq">
        <FaqPage />
      </section>
      <Footer />
    </main>
  );
}
