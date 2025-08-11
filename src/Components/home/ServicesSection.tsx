
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, TrendingUp } from "lucide-react";
import FlipCard from "../ui/FlipCard";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Responsive, fast, and conversion-focused websites that elevate your online presence and performance — turning visitors into customers.",
    features: ["Lightning-fast loading", "Mobile-optimized", "SEO-ready", "Conversion-focused"]
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Visual identities and digital assets that make your brand unforgettable.",
    features: ["Brand identity", "Visual systems", "Digital assets", "Print materials"]
  },
  {
    icon: TrendingUp,
    title: "End-to-End Marketing",
    description: "From strategy to execution, we manage your digital ecosystem — content, ads, email, funnels — with complete clarity and alignment.",
    features: ["Strategy development", "Content creation", "Paid advertising", "Email marketing"]
  }
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

export default function ServicesSection() {
  return (
    <section id="services-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our work is built around{" "}
            <span className="gradient-text">three core pillars</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project we take on is crafted with intention, executed with care, and focused on results.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 relative z-10"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group h-96 min-h-[24rem]"
            >
              <FlipCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
