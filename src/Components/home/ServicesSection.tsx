
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
    <section className="py-24 bg-gray-50">
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
          className="grid md:grid-cols-3 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[var(--primary-purple)] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-full">
                <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="ghost" className="text-[var(--primary-purple)] hover:text-[var(--dark-purple)] p-0">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
