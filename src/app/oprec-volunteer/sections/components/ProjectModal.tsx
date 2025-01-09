import { useEffect } from "react";
import { IoClose, IoCloseCircle } from "react-icons/io5";

export default function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
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
      className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center animate-fadeIn"
      style={{
        animation: "fadeIn 0.5s ease-out",
      }}
    >
      <div
        className="relative px-6 max-md:px-0 rounded-[50px] max-md:rounded-[50px_50px_0px_0px] max-md:mt-20 bg-[#1F2937] w-[80%] h-[80%] max-md:w-full max-md:h-full max-h-screen max-w-screen flex flex-col justify-center items-center shadow-lg overflow-hidden overflow-y-auto py-20 animate-slideUp"
        style={{
          animation: "slideUp 1s ease-out",
        }}
      >
        {/* Logo di tengah bagian atas */}
        <div className="relative mt-60 max-md:mt-[50rem]">
          <div className="w-44 h-44 rounded-full bg-gray-300 flex items-center justify-center shadow-lg">
            <span className="text-2xl text-gray-500">Logo</span>
          </div>
        </div>

        {/* Konten Modal */}
        <div className="text-white text-center px-8 py-16">{children}</div>

        {/* Tombol Close */}
        <button
          className="absolute top-10 right-12 text-white text-2xl font-bold"
          onClick={() => {
            document.body.style.overflow = "auto"; // Pastikan scrollbar muncul kembali
            onClose();
          }}
          style={{
            animation: "fadeOut 0.3s ease-in",
          }}
        >
          <IoCloseCircle size={40} />
        </button>
      </div>
    </div>
  );
}
