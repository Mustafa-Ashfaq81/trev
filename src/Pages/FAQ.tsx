import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "../Components/ui/button";
import { setPageMeta } from "../utils/seo";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in three areas: Web Development (high-speed, responsive, and conversion-focused websites), Branding & Design (visual identity, social assets, and digital design), and End-to-End Marketing (strategy, content, email, ads, funnels, and more). We don't just deliver — we align everything for real business growth."
  },
  {
    question: "How do I get started with Trev?",
    answer: "Simple. Reach out via our contact form, email, or Instagram. We'll schedule a Discovery Call. You'll receive a custom strategy & quote (no templates). Once approved, we begin — clear timeline, clear milestones."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "Both. Whether you're just starting or scaling, we build systems that match your stage — with precision and performance in mind."
  },
  {
    question: "Do you offer packages?",
    answer: "We build custom solutions, not one-size-fits-all packages. Every brand is different, and so are its needs — so we tailor every proposal to deliver the best results for your goals and budget."
  },
  {
    question: "How long will my project take?",
    answer: "Timelines depend on the scope, but we don't drag projects. Most websites take 2–4 weeks, full marketing systems might take 4–6 weeks. We'll give you a clear timeline upfront — and we stick to it."
  },
  {
    question: "What if I just need one service (like only design or only marketing)?",
    answer: "Totally fine. We offer standalone services as well as bundled strategies. Whether you need one expert area or the full ecosystem, we've got you."
  },
  {
    question: "Do you outsource any work?",
    answer: "No. Everything we create is done by our in-house team. You work directly with us — no middlemen, no missed context, just clean execution."
  },
  {
    question: "How do payments work?",
    answer: "We require a 50% upfront deposit to start, and the remaining 50% upon delivery. For long-term retainers or marketing services, monthly payment structures are available."
  }
];

export default function FAQ() {
  useEffect(() => {
    setPageMeta('faq');
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Clarity is part of our process. Here's what you might want to know before we start.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {index + 1}. {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
              <HelpCircle className="w-16 h-16 text-purple-600 mx-auto mb-6" aria-hidden="true" />
              
              <h2 className="text-3xl font-bold mb-4">
                Still Have <span className="gradient-text">Questions?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                Reach out to us directly — we'll respond within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}`}
                  className="text-purple-600 font-medium text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2 rounded-md px-2 py-1"
                  aria-label={`Send email to ${process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}`}
                >
                  <span aria-hidden="true">📩</span> {process.env.REACT_APP_CONTACT_EMAIL || 'info@trevsol.com'}
                </a>
                <span className="hidden sm:block text-gray-400" aria-hidden="true">|</span>
                <Button 
                  className="gradient-bg hover:opacity-90 transition-opacity"
                  onClick={() => window.open('https://www.linkedin.com/company/trev-solution/', '_blank')}
                  aria-label="Start your project with Trev Solutions - Contact us on LinkedIn"
                >
                  <span aria-hidden="true">🚀</span> Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}