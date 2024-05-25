import { Metadata } from "next";
import FSPage from "@/components/filing/FPage";

export const metadata: Metadata = {
  title: "FIKTI LEARNING 2024",
  description: "FIKTI LEARNING 2024",
  icons: {
    icon: "/filing/logo 1.png",
  },
};

export default function FiktiSpacePage() {
  return <FSPage />;
}
