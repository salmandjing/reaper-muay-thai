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
import { CONTACT } from "@/lib/content";

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Reaper HQ Martial Arts Academy",
  description: "Muay Thai, Brazilian Jiu-Jitsu, and MMA for kids, teens, and adults in West Palm Beach, FL.",
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.street,
    addressLocality: "West Palm Beach",
    addressRegion: "FL",
    postalCode: CONTACT.zip,
    addressCountry: "US",
  },
};

// Ordered by what a prospective member asks: what is it, what's taught, is it for me,
// when, how much, who teaches, what it looks like — then niche info and the sign-up.
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Programs />
        <Schedule />
        <Pricing />
        <Instructors />
        <Gallery />
        <Homeschool />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
