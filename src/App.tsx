import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EventsSection } from "./components/EventsSection";
import { GallerySection } from "./components/GallerySection";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="min-h-screen bg-blueprint font-inter text-white selection:bg-[#FF6B9D] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
