import React, { useEffect } from "react";
import { setPageMeta } from "../utils/seo";
import HeroSection from "../Components/home/HeroSection";
import ServicesSection from "../Components/home/ServicesSection";
import WhyTrevSection from "../Components/home/WhyTrevSection";
import TestimonialsSection from "../Components/home/TestimonialsSection";
import ProcessSection from "../Components/home/ProcessSection";
import CTASection from "../Components/home/CTASection";

export default function Home() {
  useEffect(() => {
    setPageMeta('home');
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyTrevSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}