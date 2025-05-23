"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from '@/components/technofair/navbar';
import { Dashboard } from '@/components/technofair/dashboard';
import { About } from '@/components/technofair/about';
import { Schedule } from '@/components/technofair/schedule';
import { useSlowScroll } from '@/components/technofair/slowScroll';
import  { Dokumentasi }  from '@/components/technofair/Dokumentasi';
import { Footer } from '@/components/technofair/footer';
import { Sponsor } from '@/components/technofair/sponsor';
import { Events } from '@/components/technofair/Events';
import { Faq } from '@/components/technofair/Faq';



export default function TfPage() {

  useSlowScroll();

  return (
    <main className="bg-[#100F21] bg-cover bg-no-repeat overflow-x-hidden scroll-smooth">

      <div className='bg-gradient-to-b from-[#FFFAF0] from-40% via-[#FFA360] via-65% to-[#411D14] pb-[150px]  rounded-b-3xl lg:rounded-b-[90px]'>
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
