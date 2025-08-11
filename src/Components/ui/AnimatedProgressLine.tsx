import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedProgressLineProps {
  steps: number;
  className?: string;
  lineColor?: string;
  progressColor?: string;
  duration?: number;
  delay?: number;
}

const AnimatedProgressLine: React.FC<AnimatedProgressLineProps> = ({
  steps,
  className = '',
  lineColor = 'bg-gray-200',
  progressColor = 'bg-[var(--primary-purple)]',
  duration = 2,
  delay = 0.5,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`absolute top-10 left-0 w-full h-0.5 hidden md:block ${className}`}>
      {/* Background line */}
      <div className={`w-full h-full ${lineColor} rounded-full`} />
      
      {/* Animated progress line */}
      <motion.div
        className={`absolute top-0 left-0 h-full ${progressColor} rounded-full`}
        initial={{ width: '0%' }}
        animate={isInView ? { width: '100%' } : { width: '0%' }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeInOut"
        }}
      />
      
      {/* Step indicators */}
      {Array.from({ length: steps }).map((_, index) => {
        const position = (index / (steps - 1)) * 100;
        return (
          <motion.div
            key={index}
            className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            style={{ left: `${position}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              delay: delay + (index * 0.3),
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
          >
            <div className={`w-3 h-3 ${progressColor} rounded-full border-2 border-white shadow-lg`} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedProgressLine;