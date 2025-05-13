import UtamaPage from "@/components/utama";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEM FIKTI UG 2025",
  description: "BEM FIKTI UG 2025",
  icons: {
    icon: "/logo-fikti.png",
  },
};

export default function Home() {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  return (
    <main>
      <UtamaPage />
    </main>
  );
}
