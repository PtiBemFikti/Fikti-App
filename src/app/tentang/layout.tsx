// app/struktur-organisasi/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEM FIKTI UG 2025",
  description: "BEM FIKTI UG 2025",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function StrukturOrganisasiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
