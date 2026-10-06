import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ProductsSection from "@/components/home/ProductsSection";
import HowItWorks from "@/components/home/HowItWorks";
import WhyMgrc from "@/components/home/WhyMgrc";
import TrustLogos from "@/components/home/TrustLogos";
import Testimonials from "@/components/home/Testimonials";
import FaqPreview from "@/components/home/FaqPreview";
import CtaBand from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProductsSection />
      <HowItWorks />
      <WhyMgrc />
      <TrustLogos />
      <Testimonials />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
