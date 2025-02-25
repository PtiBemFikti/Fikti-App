"use client";

import { Navbar } from '@/components/technofair/Navbar';
import { Dashboard } from '@/components/technofair/Dashboard';
import { About } from '@/components/technofair/About';
import { Schedule } from '@/components/technofair/Schedule';
import { slowScroll } from '@/components/technofair/slowScroll';
import { useEffect } from "react";
import Lenis from "lenis";
import { Dokumentasi } from './Dokumentasi';
import { Footer } from '@/components/technofair/Footer';
import { Sponsor } from '@/components/technofair/Sponsor';
import { Events } from './Events';
import { Faq } from './Faq';

export default function TfPage() {

  slowScroll();

  return (
    <main className="bg-[#100F21] bg-cover bg-no-repeat overflow-x-hidden scroll-smooth">

      <div className='bg-gradient-to-b from-[#FFFAF0] from-40% via-[#FFA360] via-65% to-[#411D14] pb-[150px] rounded-b-[90px]'>
        <Navbar />
        <section id="top">
          <Dashboard />
        </section>
        <section id='about' className='scroll-mt-32'>
            <About />
        </section>
      </div>

      <section id='events'>
        <Events />
      </section>

      <section id='schedule' className='scroll-mt-8'>
      <Schedule />
      </section>
      
      <Dokumentasi />
      <Sponsor />
      <div className='{!bg-gradient-to-b from-[#100F21] from-10% via-[#3c3975] via-40% to-[#FE8A16]-->'>
        <section id='faq' >
          <Faq />
        </section>
        <Footer />
      </div>
    </main>
  );
}
