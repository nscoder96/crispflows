import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Probleem from "@/components/sections/Probleem";
import Diensten from "@/components/sections/Diensten";
import Cases from "@/components/sections/Cases";
import Resultaten from "@/components/sections/Resultaten";
import Proces from "@/components/sections/Proces";
import Testimonials from "@/components/sections/Testimonials";
import Pakketten from "@/components/sections/Pakketten";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ga naar inhoud
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Probleem />
        <Diensten />
        <Cases />
        <Resultaten />
        <Proces />
        <Testimonials />
        <Pakketten />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
