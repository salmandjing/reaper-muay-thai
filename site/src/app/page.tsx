import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Schedule />
      <Instructors />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
