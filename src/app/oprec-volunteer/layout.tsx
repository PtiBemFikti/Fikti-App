import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Oprec Volunteer - BEM FIKTI",
  description: "Oprec Volunteer - BEM FIKTI",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function OprecVolunteerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="w-full h-fit bg-[#FFFFF4] overflow-x-hidden">
      {children}
    </section>
  );
}
