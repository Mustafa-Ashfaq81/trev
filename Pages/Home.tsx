import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Quote } from "lucide-react";
import { setPageMeta } from "@/utils/seo";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyTrevSection from "../components/home/WhyTrevSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ProcessSection from "../components/home/ProcessSection";
import CTASection from "../components/home/CTASection";

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