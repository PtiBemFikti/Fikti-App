"use client";
import Navbar from "@/components/filing/navbar";
import AboutPage from "@/components/filing/about";
import Dashboard from "@/components/filing/dashboard";
import BootcampPage from "@/components/filing/bootcamp";
import DocumentationPage from "@/components/filing/documentation";
import FaqPage from "@/components/filing/faq";
import Footer from "@/components/filing/footer";
import { useSlowScroll } from "./slowScroll";

export default function FPage() {

  useSlowScroll();

  return (
    <main className="bg-white bg-cover bg-no-repeat scroll-smooth">
      <Navbar />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
      </section> */}

      <Dashboard />
      <section id="about">
        <AboutPage />
      </section>
      <section id="bootcamp">
        <BootcampPage />
      </section>
      <section id="documentation">
        <DocumentationPage />
      </section>
      <section id="faq">
        <FaqPage />
      </section>
      <Footer />
    </main>
  );
}
