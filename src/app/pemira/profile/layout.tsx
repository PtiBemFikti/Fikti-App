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

      <main className="flex-grow p-4 md:p-6 md:ml-64">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
