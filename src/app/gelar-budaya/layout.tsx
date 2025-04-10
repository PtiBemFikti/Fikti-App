import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gelar Budaya",
  description: "Gelar Budaya",
  icons: {
    icon: "/gelar-budaya/logo-gelar-budaya-nobg.png",
  },
};

export default function OprecVolunteerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="w-full h-fit overflow-x-hidden bg-[#071D2B]">
      {children}
    </section>
  );
}
