import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { AppDownload } from "@/components/sections/AppDownload";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Streamlined Landing Page Flow */}
      <main className="flex-1 w-full">
        <Hero />
        <Features />
        <About />
        <AppDownload />
        <CTA />
      </main>

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}
