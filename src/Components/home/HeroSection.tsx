
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NumberCounter from "../ui/NumberCounter";
import RippleButton from "../ui/RippleButton";
import AnimatedBlob from "../ui/AnimatedBlob";
import ParticleSystem from "../ui/ParticleSystem";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Particle System */}
        <ParticleSystem 
          particleCount={35}
          colors={['#803eefC0', '#f7d047B0', '#6a2fcc90', '#f3e8ffF0']}
          minSize={8}
          maxSize={18}
          speed={0.6}
          className="z-0"
        />
        
        {/* Animated Blobs */}
        <AnimatedBlob 
          color="purple" 
          position={{ top: "5rem", left: "2.5rem" }} 
          delay={0}
        />
        <AnimatedBlob 
          color="yellow" 
          position={{ top: "10rem", right: "2.5rem" }} 
          delay={2}
        />
        <AnimatedBlob 
          color="purple" 
          position={{ bottom: "-2rem", left: "5rem" }} 
          delay={4}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 text-center z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-[var(--light-purple)] mb-8">
            <Sparkles className="w-4 h-4 text-[var(--primary-purple)]" />
            <span className="text-sm font-medium text-[var(--primary-purple)]">Swiss Precision Meets Digital Excellence</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900"
        >
          The Smart Solution to{" "}
          <span className="gradient-text">Winning Big</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          High-performance web, design, and marketing —<br />
          <strong>built with precision, delivered with purpose.</strong>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <RippleButton 
            size="lg" 
            variant="primary"
            onClick={() => window.open('https://calendly.com/trevsol-info/30min', '_blank')}
            ariaLabel="Start your project with Trev Solutions - Book a free consultation"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </RippleButton>
          <RippleButton 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/portfolio')}
            ariaLabel="View our portfolio and previous work"
          >
            View Our Work
          </RippleButton>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              <NumberCounter 
                value={200} 
                suffix="%" 
                duration={2.5}
                className="text-3xl font-bold gradient-text"
              />
            </div>
            <div className="text-gray-600">Average Growth Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              <NumberCounter 
                value={24} 
                suffix="hrs" 
                duration={2}
                className="text-3xl font-bold gradient-text"
              />
            </div>
            <div className="text-gray-600">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">
              <NumberCounter 
                value={100} 
                suffix="%" 
                duration={3}
                className="text-3xl font-bold gradient-text"
              />
            </div>
            <div className="text-gray-600">Client Satisfaction Rate</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
