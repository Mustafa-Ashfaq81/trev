import React, { useEffect, useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

interface BackgroundPerformanceWrapperProps {
  variant?: string;
  className?: string;
  children?: React.ReactNode;
}

const BackgroundPerformanceWrapper: React.FC<BackgroundPerformanceWrapperProps> = ({ 
  variant = 'default', 
  className = '',
  children 
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check for low power mode (iOS Safari)
    const checkLowPowerMode = () => {
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          setIsLowPowerMode(battery.charging === false && battery.level < 0.2);
        });
      }
    };

    // Check for performance constraints
    const checkPerformance = () => {
      // Disable animations on very slow devices
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 2) {
        setShouldAnimate(false);
      }
      
      // Disable on very small screens (watches, etc.)
      if (window.innerWidth < 320 || window.innerHeight < 320) {
        setShouldAnimate(false);
      }
    };

    checkLowPowerMode();
    checkPerformance();
    
    if (prefersReducedMotion) {
      setShouldAnimate(false);
    }

    // Listen for visibility changes to pause animations when tab is not visible
    const handleVisibilityChange = () => {
      setShouldAnimate(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // If animations should be disabled, return a simple static background
  if (!shouldAnimate || isLowPowerMode) {
    return (
      <>
        <div 
          className={`fixed inset-0 -z-10 ${className}`}
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.02) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(247, 208, 71, 0.02) 0%, transparent 50%),
              linear-gradient(135deg, rgba(248, 250, 252, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)
            `
          }}
        />
        {children}
      </>
    );
  }

  return (
    <>
      <AnimatedBackground variant={variant as any} className={className} />
      {children}
    </>
  );
};

export default BackgroundPerformanceWrapper;