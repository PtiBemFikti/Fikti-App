import React from "react";
import Section1 from "@/components/filing/CyberSecurity/Section1";
import Section2 from "@/components/filing/CyberSecurity/Section2";
import Section3 from "@/components/filing/CyberSecurity/Section3";
import Navbar2 from "@/components/filing/navbar2";

export default function Page() {
  return (
    <div className="bg-white">
      <Navbar2 />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}