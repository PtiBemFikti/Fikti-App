"use client";

import { useEffect } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Disable scrolling saat modal muncul
    document.body.style.overflow = "hidden";

    // Re-enable scrolling saat modal ditutup
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md h-screen w-screen flex items-center justify-center animate-fadeIn"
      style={{
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      <div
        className="relative px-12 max-md:px-5 max-md:mt-32 max-md:pb-20 rounded-[30px] max-md:rounded-t-[30px] bg-[#1F2937]  w-[80%] h-auto max-md:w-full py-8 shadow-lg overflow-hidden overflow-y-auto animate-slideUp"
        style={{
          animation: "slideUp 1s ease-out",
          maxHeight: "90%",
          ...(window.innerWidth <= 768 && { maxHeight: "100%" }), // 100% jika max-md
        }}
      >
        <div className="flex flex-col items-center justify-start gap-6 text-center">
          {children}
        </div>
      </div>
    </div>
  );
}
