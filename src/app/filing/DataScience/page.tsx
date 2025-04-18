import React from "react";
import Section1 from "@/components/filing/DataScince/Section1";
import Section2 from "@/components/filing/DataScince/Section2";
import Navbar2 from "@/components/filing/navbar2";
import Footer from "@/components/filing/footer";
import "@/../src/styles/fade-in.css";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar2 />
      <div className="fade-in">
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>
  );
}
