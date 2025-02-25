import React from "react";
import Section1 from "@/components/filing/DataAnalyst/Section1";
import Section2 from "@/components/filing/DataAnalyst/Section2";
import Section3 from "@/components/filing/DataAnalyst/Section3";
import Navbar from "@/components/filing/navbar2";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
