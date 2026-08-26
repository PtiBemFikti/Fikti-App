import PemiraProfileNavbar from "@/components/pemira/profile/PemiraProfileNavbar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Spacer for mobile */}
      <div className="h-16 md:hidden"></div>

      <PemiraProfileNavbar />

      <main className="min-w-0 flex-1 p-3 sm:p-4 md:ml-64 md:p-6">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>
    </div>
  );
}
