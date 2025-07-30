
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 border border-[var(--light-purple)] mb-8">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">Ready to transform your brand?</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to create something remarkable? Let's discuss your project and turn your vision into a reality that drives results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-bg transition-all duration-300 text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => window.open('https://www.linkedin.com/company/trev-solution/', '_blank')}
              aria-label="Start your project with Trev Solutions - Contact us on LinkedIn"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-[var(--primary-purple)] hover:text-[var(--primary-purple)] transition-all duration-300"
            >
              Book a Discovery Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
