import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
      <main className="flex flex-col bg-[#FFF7ED] min-h-screen">
          <Navbar /> {/* <-- Tout en haut */}

          <Hero />

          <Projects />

          <div id="stack">
              <Stack />
          </div>

          <div id="contact">
              <Contact />
          </div>
      </main>
  );
}
