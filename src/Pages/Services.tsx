
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "../Components/ui/button";
import { setPageMeta } from "../utils/seo";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const services = [
  {
    title: "Web Development",
    subtitle: "Built to perform. Engineered for results.",
    description: "Your website is your most powerful digital asset. We create responsive, lightning-fast, conversion-driven websites designed to engage your audience and turn visitors into loyal customers. Every line of code, every pixel, and every interaction is optimized for accuracy, speed, and seamless user experience—because your online presence deserves nothing less.",
    features: [
      "Responsive design across all devices",
      "Lightning-fast loading speeds",
      "SEO-optimized architecture", 
      "Conversion-focused user experience",
      "Clean, maintainable code",
      "Advanced analytics integration"
    ]
  },
  {
    title: "Branding & Design",
    subtitle: "Visual storytelling with purpose and precision.",
    description: "Your brand's identity is the foundation of trust and recognition. We craft distinctive, clean, and purposeful visual identities and digital assets that communicate your brand's story with clarity and confidence. From logos to social content, our designs don't just look good — they create an emotional connection and inspire action.",
    features: [
      "Complete brand identity systems",
      "Logo design and brand guidelines",
      "Digital and print marketing materials",
      "Social media templates and assets",
      "Packaging and product design",
      "Brand strategy and positioning"
    ]
  },
  {
    title: "End-to-End Marketing",
    subtitle: "Strategic execution that moves the needle.",
    description: "Marketing isn't guesswork—it's a science. We deliver full-spectrum digital marketing solutions, tailored exactly to your goals. From data-driven content strategies and targeted paid campaigns to precision funnel building and email marketing, we ensure every tactic aligns perfectly to maximize ROI and accelerate growth.",
    features: [
      "Data-driven content strategies",
      "Targeted paid advertising campaigns",
      "Email marketing automation",
      "Conversion funnel optimization",
      "Social media management",
      "Analytics and performance tracking"
    ]
  }
];

export default function Services() {
  useEffect(() => {
    setPageMeta('services');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At Trev, perfection isn't an option — it's our standard. Every service we offer is crafted with precision, executed with care, and laser-focused on delivering measurable results for your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">0{index + 1}</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-xl text-[var(--primary-purple)] font-medium mb-6">{service.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[var(--primary-purple)] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="gradient-bg transition-opacity"
                    onClick={() => window.open('https://www.linkedin.com/company/trev-solution/', '_blank')}
                    aria-label="Get started with Trev Solutions - Contact us on LinkedIn"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-gray-50 rounded-3xl overflow-hidden h-96 border border-gray-200">
                      {/* High-Quality DotLottie Animations for all services */}
                      <motion.div
                        className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-full h-full flex items-center justify-center"
                          style={{ 
                            maxWidth: '90%', 
                            maxHeight: '90%'
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <DotLottieReact
                            src={
                              index === 0 
                                ? "https://lottie.host/eade46ae-e460-4851-a675-6416e803289d/KhN10BKkjs.lottie" // Web Development
                                : index === 1 
                                ? "https://lottie.host/ba16705d-b39e-4df3-9579-dbba8f80054b/vXRqnKcTfJ.lottie" // Branding & Design
                                : "https://lottie.host/77cb135a-9bb4-497b-a45b-19e9a14f73e1/FdSx8hMUik.lottie" // End-to-End Marketing
                            }
                            loop
                            autoplay
                            style={{
                              width: '100%',
                              height: '100%',
                              maxWidth: '400px',
                              maxHeight: '400px',
                              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))'
                            }}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to win big with <span className="gradient-text">precision and purpose?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At Trev, we don't settle for good enough. We deliver smart, scalable solutions with pinpoint accuracy—because your brand deserves nothing less than excellence.
            </p>
            <Button size="lg" className="gradient-bg transition-opacity text-lg px-8 py-4">
              Get Your Custom Strategy
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
