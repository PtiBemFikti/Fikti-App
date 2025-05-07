import React from "react";
import About from "@/components/fiktispace/competition/Badmintonwomen/about";
import Peraturan from "@/components/fiktispace/competition/Badmintonwomen/peraturan";
import Navbar from "@/components/fiktispace/navbar2";
import Footer from "@/components/fiktispace/footer2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badminton Womens Double | FIKTI SPACE 4.0",
  description: "Cabang Olahraga Badminton Womens Double FIKTI SPACE 4.0 by Departemen ORSB BEM FIKTI Universitas Gunadarma",
  icons: {
    icon: "/fiktispace/LOGO FS 4.png",
  },
};

export default function Page() {
  return (
    <div className="bg-gradient-to-b"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #0A2352 50%, #FF8797 60%)',
      }}
    >
      <Navbar />
        <div>
          <section>
            <div>
              <About />
            </div>
          </section>
          <section>
            <div>
              <Peraturan />
            </div>
          </section>
        </div>
      <Footer />
    </div>
  );
}
