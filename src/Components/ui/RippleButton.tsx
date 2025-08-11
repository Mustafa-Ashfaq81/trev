import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  ariaLabel?: string;
}

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'md',
  variant = 'primary',
  disabled = false,
  ariaLabel,
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);

    // Call the original onClick handler
    if (onClick) {
      onClick();
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-gray-300 bg-transparent text-gray-700 hover:border-[var(--primary-purple)] hover:text-[var(--primary-purple)]';
      default:
        return 'gradient-bg text-white shadow-lg hover:shadow-xl';
    }
  };

  const baseClasses = `
    relative overflow-hidden rounded-xl font-medium
    transition-all duration-300 transform hover:-translate-y-1
    focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${getSizeClasses()} ${getVariantClasses()} ${className}
  `.trim();

  return (
    <motion.button
      ref={buttonRef}
      className={baseClasses}
      onClick={createRipple}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className={`absolute rounded-full pointer-events-none ${
            variant === 'outline' 
              ? 'bg-[var(--primary-purple)]/20' 
              : 'bg-white/30'
          }`}
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
        />
      ))}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

export default RippleButton;