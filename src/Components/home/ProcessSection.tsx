
import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Search, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Reach Out",
    description: "DM us at @trev.solutions or contact us via trevsol.com"
  },
  {
    icon: Search,
    title: "Discovery Call",
    description: "We discuss your business goals and project needs"
  },
  {
    icon: FileText,
    title: "Tailored Proposal",
    description: "You receive a customized plan — no templates, just strategic clarity"
  },
  {
    icon: Rocket,
    title: "Execution",
    description: "On-point delivery with full transparency, from concept to completion"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            How to Work <span className="gradient-text">With Trev</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with Trev is simple and structured. Here's how we turn your vision into reality.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="absolute top-10 left-0 w-full h-0.5 bg-gray-200 hidden md:block">
             <div className="bg-[var(--primary-purple)] h-full w-0"></div>
          </div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* The old connecting line div is removed */}
              
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
