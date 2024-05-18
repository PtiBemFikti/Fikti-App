import Navbar from '@/components/technofair/navbar';
import Dashboard from '@/components/technofair/dashboard';
import AboutPage from '@/components/technofair/about';
import EventPage from '@/components/technofair/event';
import SponsorPage from '@/components/technofair/sponsor';
import SchedulePage from '@/components/technofair/schedule';
import StoryPage from '@/components/technofair/story';
import FaqPage from '@/components/technofair/faq/faq';
import Footer from '@/components/technofair/footer';
import Layout from '../layout';
import { Metadata } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

export const metadata: Metadata = {
  title: 'TechnoFair 11.0',
  description: 'TechnoFair 11.0',
  icons: {
    icon: '/tehcnofair/logo-tf.png',
  }
};
// eslint-disable-next-line @next/next/no-async-client-component
export default function TechnofairPage() {
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
