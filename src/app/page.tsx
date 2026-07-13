import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlueSection from "@/components/BlueSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BlueSection />
      </main>
    </div>
  );
}
