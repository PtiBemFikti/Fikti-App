import { Navbar } from '@/components/technofair/Navbar';
import Dashboard from '@/components/technofair/dashboard(old)';
import AboutPage from '@/components/technofair/about(old)';
import EventPage from '@/components/technofair/event';
import SponsorPage from '@/components/technofair/sponsor(old)';
import SchedulePage from '@/components/technofair/schedule(old)';
import StoryPage from '@/components/technofair/story';
import FaqPage from '@/components/technofair/faq/faq';
import Footer from '@/components/technofair/footer(old)';
import { Metadata } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
// eslint-disable-next-line @next/next/no-async-client-component
export default function TfPage() {
  return (
    <main className="bg-white bg-cover bg-no-repeat overflow-x-hidden" style={{ backgroundImage: 'url(/technofair/bg-utama.png)' }}>
      <Navbar />
      <Dashboard />
      <section id="about">
        <AboutPage />
      </section>
      <section id="event">
        <EventPage />
      </section>
      <section id='schedule' className='bg-gradient-to-t from-[#0B0E1A] to-[#211525]'>
        <SchedulePage />
      </section>
      <StoryPage />
      <SponsorPage />
      <section id="faq">
        <FaqPage />
      </section>
      <Footer />
    </main>
  );
}
