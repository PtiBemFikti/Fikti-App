import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEM FIKTI UG 2025",
  description: "BEM FIKTI UG 2025",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function BirDepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
