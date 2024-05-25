import { Metadata } from "next";
import FSPage from "@/components/fiktispace/FSPage";

export const metadata: Metadata = {
  title: "FIKTI SPACE 3.0",
  description: "FIKTI SPACE 3.0",
  icons: {
    icon: "/fiktispace/logofs.png",
  },
};

export default function FiktiSpacePage() {
  return <FSPage />;
}
