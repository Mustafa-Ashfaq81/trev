
import React from "react";
import { motion } from "framer-motion";
import { Clock, Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "On-time execution",
    description: "with precise attention to detail"
  },
  {
    icon: Target,
    title: "Clean, minimal design",
    description: "with purpose"
  },
  {
    icon: Users,
    title: "Direct collaboration",
    description: "no outsourcing or handoffs"
  },
  {
    icon: Zap,
    title: "Smart strategy",
    description: "tailored to your brand goals"
  }
];

export default function WhyTrevSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why <span className="gradient-text">Trev</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We deliver more than design and marketing.<br />
              <strong>We deliver systems, structure, and scale.</strong>
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-gray-50 rounded-2xl border border-[var(--light-purple)] shadow-lg"
            >
              <p className="text-lg font-medium text-gray-900 mb-2">
                At Trev, perfection is not an add-on — it's the standard.
              </p>
              <p className="text-gray-600">
                Our process is intentional. Our delivery is sharp.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Project Timeline</div>
                  <div className="text-sm font-medium text-[var(--primary-purple)]">On Track</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--primary-purple)] rounded-full"></div>
                    <span className="text-gray-900">Discovery & Strategy</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-[var(--primary-purple)] h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[var(--primary-purple)] opacity-70 rounded-full"></div>
                    <span className="text-gray-900">Design & Development</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-[var(--primary-purple)] opacity-70 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <span className="text-gray-500">Launch & Optimize</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-300 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expected completion:</span>
                    <span className="font-medium text-gray-900">2 weeks ahead</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-lg font-bold gradient-text">98%</div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
