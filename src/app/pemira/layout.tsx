import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PEMIRA UG 2025/2026",
  description: "PEMIRA BEM FIKTI UG 2025/2026",
  icons: {
    icon: "/pemira/logo-pemira-adiraka.png",
  },
};

export default function OprecVolunteerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
