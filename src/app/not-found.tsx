import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className=" overflow-x-hiddenw-screen text-center h-screen flex flex-col items-center justify-center">
      <h1 className="text-[10rem] font-bold">404</h1>
      <h2 className="text-[2rem]">
        Oopss.. Maaf Halaman ini masih dalam tahap pengembangan
      </h2>
      <Link href="/">
        <button className="px-8 py-4 rounded-full border-2 border-white mt-5 hover:bg-white hover:text-black font-bold transition-all duration-200">
          Back To Home
        </button>
      </Link>
    </div>
  );
}
