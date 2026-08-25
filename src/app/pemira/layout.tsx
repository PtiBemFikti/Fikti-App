import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "PEMIRA UG",
  description: "PEMIRA BEM FIKTI dan HIMSI UG",
  icons: {
    icon: "/pemira/logo-pemira-adiraka.png",
  },
};

export default function PemiraLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}
