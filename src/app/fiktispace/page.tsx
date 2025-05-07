import { Metadata } from "next";
import FSPage from "@/components/fiktispace/FSPage";

export const metadata: Metadata = {
  title: "FIKTI SPACE 4.0",
  description: "FIKTI SPACE 4.0 by Departemen ORSB BEM FIKTI Universitas Gunadarma",
  icons: {
    icon: "/fiktispace/LOGO FS 4.png",
  },
};

export default function FiktiSpacePage() {
  return <FSPage />;
}
