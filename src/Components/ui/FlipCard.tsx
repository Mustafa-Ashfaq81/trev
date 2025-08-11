import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FlipCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  className = '',
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div 
      className={`relative h-full group cursor-pointer ${className}`} 
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onTouchStart={() => setIsFlipped(true)}
      onTouchEnd={() => setTimeout(() => setIsFlipped(false), 3000)}
    >
      {/* Front of card */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d'
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="bg-white rounded-2xl p-8 border border-gray-200 group-hover:border-[var(--primary-purple)] transition-all duration-300 hover:shadow-xl h-full flex flex-col">
          <div className="w-16 h-16 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>
          
          <div className="flex items-center text-[var(--primary-purple)] hover:text-[var(--dark-purple)] transition-colors">
            <span className="text-sm font-medium">Hover to see features</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </div>
        </div>
      </motion.div>

      {/* Back of card */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ 
          backfaceVisibility: 'hidden',
          transformStyle: 'preserve-3d',
          rotateY: 180
        }}
        animate={{ rotateY: isFlipped ? 0 : -180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="bg-gradient-to-br from-[var(--primary-purple)] to-[var(--dark-purple)] rounded-2xl p-8 text-white h-full flex flex-col justify-center">
          <div className="text-center mb-6">
            <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-[var(--primary-yellow)] mb-4">Key Features:</h4>
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.3 }}
              >
                <div className="w-2 h-2 bg-[var(--primary-yellow)] rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={isFlipped ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate('/services');
              }}
              className="inline-flex items-center text-[var(--primary-yellow)] text-sm font-medium hover:text-yellow-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label="Learn more about our services"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;