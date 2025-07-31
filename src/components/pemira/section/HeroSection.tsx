"use client";

import PemiraSlidingText from "./SlidingText";

export default function PemiraHeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-[#071D2B]">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[url('/pemira/hero-section.png')] bg-cover bg-center "></div>
      <PemiraSlidingText theme="light" />
    </section>
  );
}
