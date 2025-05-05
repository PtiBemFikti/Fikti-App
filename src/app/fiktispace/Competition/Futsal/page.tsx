import React from "react";
import About from "@/components/fiktispace/competition/Futsal/about";
import Peraturan from "@/components/fiktispace/competition/Futsal/peraturan";
import Navbar from "@/components/fiktispace/navbar2";
import Footer from "@/components/fiktispace/footer2";

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
