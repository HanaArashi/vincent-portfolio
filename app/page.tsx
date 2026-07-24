import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8D8FF] via-[#F3EAFF] to-[#EDE2FF]">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}