import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import TestChooser from "@/components/home/TestChooser";
import VideoTestimonials from "@/components/VideoTestimonials";
import StepsStrip from "@/components/home/StepsStrip";
import CtaBand from "@/components/home/CtaBand";

// The homepage persuades; the other tabs explain. Keep detail (full product info,
// step-by-step guide, FAQ) on their own pages rather than repeating it here.
// components/home/TrustLogos.tsx is ready to add back once accreditation logos arrive.
export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <TestChooser />
      <VideoTestimonials />
      <StepsStrip />
      <CtaBand />
    </>
  );
}
