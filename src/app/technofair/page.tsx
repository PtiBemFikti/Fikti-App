'use client';

import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import AboutPage from '@/components/technofair/about';
import EventPage from '@/components/technofair/event';
import SponsorPage from '@/components/technofair/sponsor';
import SchedulePage from '@/components/technofair/schedule';
import StoryPage from '@/components/technofair/story';
import FaqPage from '@/components/technofair/faq';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Footer from '@/components/technofair/footer';
import { getServerSession } from 'next-auth';
import Logout from '@/components/technofair/logout';

// eslint-disable-next-line @next/next/no-async-client-component
export default function TechnofairPage() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated' || session?.user.role !== 'admin') {
      router.push('/technofair');
    }
  }, [router, session?.user.role, status]);

  return (
    <main className="bg-white bg-cover bg-no-repeat -z-50" style={{ backgroundImage: 'url(/technofair/bg-utama.png)' }}>
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
        <div className="pt-3">
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
