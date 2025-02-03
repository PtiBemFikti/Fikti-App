import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "FIKTI LEARNING 2024",
  description: "FIKTI LEARNING 2025",
  icons: {
    icon: "/filing/logo 1.png",
  },
};

export default function FiktiLearningLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section>{children}</section>;
}
