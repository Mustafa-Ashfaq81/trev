import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlobProps {
  color: 'purple' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  className?: string;
}

const AnimatedBlob: React.FC<AnimatedBlobProps> = ({
  color,
  size = 'md',
  position,
  delay = 0,
  className = '',
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-48 h-48';
      case 'lg':
        return 'w-96 h-96';
      default:
        return 'w-72 h-72';
    }
  };

  const getColorClasses = () => {
    return color === 'purple' 
      ? 'bg-[var(--light-purple)]' 
      : 'bg-[var(--light-yellow)]';
  };

  // Dynamic blob animation variants
  const blobVariants = {
    animate: {
      x: [0, 30, -20, 10, 0],
      y: [0, -20, 30, -10, 0],
      scale: [1, 1.1, 0.9, 1.05, 1],
      borderRadius: [
        "60% 40% 30% 70%",
        "30% 60% 70% 40%",
        "70% 30% 40% 60%",
        "40% 70% 60% 30%",
        "60% 40% 30% 70%"
      ],
    }
  };

  const positionStyle = {
    top: position.top,
    bottom: position.bottom,
    left: position.left,
    right: position.right,
  };

  return (
    <motion.div
      className={`
        absolute ${getSizeClasses()} ${getColorClasses()}
        mix-blend-multiply filter blur-xl opacity-70
        ${className}
      `}
      style={positionStyle}
      variants={blobVariants}
      animate="animate"
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    />
  );
};

export default AnimatedBlob;