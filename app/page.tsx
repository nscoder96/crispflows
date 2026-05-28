import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Probleem from "@/components/sections/Probleem";
import Diensten from "@/components/sections/Diensten";
import Cases from "@/components/sections/Cases";
import Proces from "@/components/sections/Proces";
import Testimonials from "@/components/sections/Testimonials";
import Pakket from "@/components/sections/Pakket";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

// Resultaten (stats section) is opgeslagen voor later — import hier wanneer klaar:
// import Resultaten from "@/components/sections/Resultaten";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Probleem />
      <Diensten />
      <Cases />
      <Proces />
      <Testimonials />
      <Pakket />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
