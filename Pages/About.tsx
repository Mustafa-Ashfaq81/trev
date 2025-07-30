import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setPageMeta } from "@/utils/seo";

const values = [
  {
    title: "Result-Focused Strategy",
    description: "We don't create for the sake of it. Everything we do is built to perform."
  },
  {
    title: "Continuous Upskilling",
    description: "We invest time in learning, testing, and evolving so you always get the best."
  },
  {
    title: "No Outsourcing",
    description: "Everything we deliver is handled in-house, by people who care."
  },
  {
    title: "Minimal, Clean, and Sharp",
    description: "No clutter. No fluff. Just high-performance output."
  }
];

const team = [
  {
    icon: Sparkles,
    title: "Creative Lead",
    description: "The eye behind the brand. From design systems to scroll-stopping visuals, our Creative Head ensures every piece reflects clarity, emotion, and function."
  },
  {
    icon: Zap,
    title: "Tech & Web Head", 
    description: "The builder. Clean code, high-speed performance, responsive UI/UX — our Tech Lead ensures your digital presence runs like a machine and looks like art."
  },
  {
    icon: TrendingUp,
    title: "Marketing & Strategy Head",
    description: "The growth engine. From funnel strategies to conversion optimization, our Marketing Lead turns goals into measurable results and clicks into clients."
  }
];

export default function About() {
  useEffect(() => {
    setPageMeta('about');
  }, []);

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
              <span className="gradient-text">Built for Perfection.</span><br />
              Driven by Results.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trev was founded with a simple yet powerful goal: To be known for the kind of work that sets the standard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To deliver flawless execution and results that matter — in marketing, design, and web.
              </p>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-2xl font-bold mb-4 gradient-text">Why We Exist</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In a world full of noise, half-done projects, and templated solutions — we created Trev to fill the gap. Not just another marketing and design agency, but a precision-first partner that delivers work that actually performs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>At Trev, perfection isn't a bonus — it's the baseline.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                    <div className="text-gray-600 text-sm">Years of Excellence</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">24hr</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              What Sets <span className="gradient-text">Trev Apart</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We craft with purpose, execute with strategy, and deliver with consistency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Meet the Team <span className="gradient-text">Behind Trev</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a tight, focused trio — each a specialist, all obsessed with precision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <member.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{member.title}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work With a Team <span className="gradient-text">That Delivers?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's build something remarkable together.
            </p>
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-4">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}