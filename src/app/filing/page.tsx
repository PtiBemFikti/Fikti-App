import Navbar from "@/components/filing/navbar";
import Dashboard from "@/components/filing/dashboard";

export default function Page() {
  return (
    <main>
      <Navbar />
      {/* <section className='-mt-[580px] px-4 py-4 flex justify-center items-center mb-5'>
        <VidYoutube />
      </section> */}
      <Dashboard />
    </main>
  );
}