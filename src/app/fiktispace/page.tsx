import DashboardPage from "@/components/fiktispace/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fikti Space 2024",
  description: "asdfasfsaf",
};

export default function FiktispacePage() {
  return (
    <div>
      <DashboardPage />
    </div>
  );
}
