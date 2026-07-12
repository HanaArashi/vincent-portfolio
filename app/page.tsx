import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
<main className="relative min-h-screen overflow-hidden">

<div className="relative mx-auto max-w-[1440px] min-h-screen">

{/* Background */}
<div className="absolute inset-0 -z-50 bg-gradient-to-b from-[#E8D8FF] via-[#F3EAFF] to-[#EDE2FF]" />

{/* Soft Purple Overlay */}
<div className="absolute inset-0 -z-40 bg-violet-400/10" />
      {/* Glow */}
      <div className="absolute -top-56 -left-56 w-[900px] h-[900px] rounded-full bg-violet-300/30 blur-[220px] -z-40" />

      <div className="absolute top-80 -right-56 w-[850px] h-[850px] rounded-full bg-pink-300/25 blur-[220px] -z-40" />

      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[950px] h-[950px] rounded-full bg-cyan-200/20 blur-[220px] -z-40" />


      {/* ========================= */}
      {/* WEBSITE */}
      {/* ========================= */}
      <div className="relative z-10">
  <Navbar />
  <Hero />
  <Footer />
</div>

      </div>

</main>
  );
}