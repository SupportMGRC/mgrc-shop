import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import TestChooser from "@/components/home/TestChooser";
import VideoTestimonials from "@/components/VideoTestimonials";
import HowItWorks from "@/components/home/HowItWorks";
import Collaborations from "@/components/home/Collaborations";
import CtaBand from "@/components/home/CtaBand";

// The homepage persuades; the other tabs explain. Keep detail (full product info,
// step-by-step guide, FAQ) on their own pages rather than repeating it here.
export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <TestChooser />
      <VideoTestimonials />
      <HowItWorks />
      <Collaborations />
      <CtaBand />
    </>
  );
}
