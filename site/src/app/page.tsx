import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Disciplines from "@/components/Disciplines";
import Homeschool from "@/components/Homeschool";
import Schedule from "@/components/Schedule";
import Instructors from "@/components/Instructors";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Disciplines />
        <Schedule />
        <Instructors />
        <Homeschool />
        <Gallery />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
