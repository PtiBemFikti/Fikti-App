"use client";

import Image from "next/image";
import Dashboard from "../components/dashboard";
import Dept from "@/components/dept";
import Biro from "@/components/biro";

export default function Home() {
  return (
    <main className="flex max-w-full min-h-screen flex-col items-center justify-between">
      <Dashboard />
      <Dept />
      <Biro />
    </main>
  );
}
