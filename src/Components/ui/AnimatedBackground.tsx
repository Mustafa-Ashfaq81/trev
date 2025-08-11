import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'default' | 'hero' | 'services' | 'portfolio' | 'about' | 'contact' | 'faq';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'default', 
  className = '' 
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Define types for better TypeScript support
  interface OverlayConfig {
    x: string;
    y: string;
    color: string;
  }

  interface BackgroundConfig {
    background: string;
    overlays: OverlayConfig[];
  }

  type ConfigKey = 'default' | 'hero' | 'services' | 'portfolio' | 'about' | 'contact' | 'faq';

  // Responsive configurations
  const getBackgroundConfig = (variant: string, isMobile: boolean): BackgroundConfig => {
    const baseIntensity = isMobile ? 0.04 : 0.06;
    const heroIntensity = isMobile ? 0.08 : 0.12;
    
    const configs: Record<ConfigKey, BackgroundConfig> = {
      default: {
        background: `
          radial-gradient(circle at 20% 80%, rgba(139, 92, 246, ${baseIntensity}) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(247, 208, 71, ${baseIntensity}) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(106, 47, 204, ${baseIntensity * 0.6}) 0%, transparent 50%),
          linear-gradient(135deg, rgba(139, 92, 246, 0.01) 0%, rgba(247, 208, 71, 0.01) 100%)
        `,
        overlays: [
          { x: '20%', y: '80%', color: 'rgba(139, 92, 246, 0.02)' },
          { x: '80%', y: '20%', color: 'rgba(247, 208, 71, 0.02)' }
        ]
      },
      hero: {
        background: `
          radial-gradient(circle at 25% 75%, rgba(139, 92, 246, ${heroIntensity}) 0%, transparent 60%),
          radial-gradient(circle at 75% 25%, rgba(247, 208, 71, ${heroIntensity}) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(106, 47, 204, ${heroIntensity * 0.7}) 0%, transparent 70%),
          linear-gradient(135deg, rgba(139, 92, 246, 0.02) 0%, rgba(247, 208, 71, 0.02) 100%)
        `,
        overlays: [
          { x: '25%', y: '75%', color: 'rgba(139, 92, 246, 0.03)' },
          { x: '75%', y: '25%', color: 'rgba(247, 208, 71, 0.03)' },
          { x: '50%', y: '50%', color: 'rgba(106, 47, 204, 0.02)' }
        ]
      },
      services: {
        background: `
          linear-gradient(45deg, rgba(139, 92, 246, ${baseIntensity * 0.8}) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(247, 208, 71, ${baseIntensity}) 0%, transparent 70%),
          radial-gradient(circle at 30% 70%, rgba(106, 47, 204, ${baseIntensity * 0.6}) 0%, transparent 60%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%)
        `,
        overlays: [
          { x: '70%', y: '30%', color: 'rgba(247, 208, 71, 0.02)' },
          { x: '30%', y: '70%', color: 'rgba(139, 92, 246, 0.02)' }
        ]
      },
      portfolio: {
        background: `
          radial-gradient(circle at 60% 40%, rgba(139, 92, 246, ${baseIntensity * 1.2}) 0%, transparent 55%),
          radial-gradient(circle at 40% 60%, rgba(247, 208, 71, ${baseIntensity * 1.1}) 0%, transparent 55%),
          radial-gradient(circle at 80% 80%, rgba(106, 47, 204, ${baseIntensity * 0.8}) 0%, transparent 45%),
          linear-gradient(225deg, rgba(243, 232, 255, 0.3) 0%, rgba(254, 249, 231, 0.3) 100%)
        `,
        overlays: [
          { x: '60%', y: '40%', color: 'rgba(139, 92, 246, 0.025)' },
          { x: '40%', y: '60%', color: 'rgba(247, 208, 71, 0.025)' },
          { x: '80%', y: '80%', color: 'rgba(106, 47, 204, 0.02)' }
        ]
      },
      about: {
        background: `
          radial-gradient(circle at 30% 70%, rgba(247, 208, 71, ${baseIntensity * 1.4}) 0%, transparent 65%),
          radial-gradient(circle at 70% 30%, rgba(139, 92, 246, ${baseIntensity * 1.2}) 0%, transparent 65%),
          radial-gradient(circle at 50% 20%, rgba(106, 47, 204, ${baseIntensity}) 0%, transparent 55%),
          radial-gradient(circle at 20% 90%, rgba(254, 249, 231, 0.6) 0%, transparent 40%),
          linear-gradient(135deg, rgba(254, 249, 231, 0.5) 0%, rgba(243, 232, 255, 0.5) 100%)
        `,
        overlays: [
          { x: '30%', y: '70%', color: 'rgba(247, 208, 71, 0.04)' },
          { x: '70%', y: '30%', color: 'rgba(139, 92, 246, 0.035)' },
          { x: '20%', y: '90%', color: 'rgba(254, 249, 231, 0.03)' }
        ]
      },
      contact: {
        background: `
          radial-gradient(circle at 40% 60%, rgba(247, 208, 71, ${baseIntensity * 1.3}) 0%, transparent 65%),
          radial-gradient(circle at 60% 40%, rgba(139, 92, 246, ${baseIntensity * 0.9}) 0%, transparent 55%),
          radial-gradient(circle at 20% 20%, rgba(106, 47, 204, ${baseIntensity * 0.6}) 0%, transparent 45%),
          linear-gradient(135deg, rgba(254, 249, 231, 0.5) 0%, rgba(248, 250, 252, 0.3) 100%)
        `,
        overlays: [
          { x: '40%', y: '60%', color: 'rgba(247, 208, 71, 0.035)' },
          { x: '60%', y: '40%', color: 'rgba(139, 92, 246, 0.025)' }
        ]
      },
      faq: {
        background: `
          radial-gradient(circle at 50% 80%, rgba(139, 92, 246, ${baseIntensity * 0.8}) 0%, transparent 55%),
          radial-gradient(circle at 80% 50%, rgba(247, 208, 71, ${baseIntensity * 0.9}) 0%, transparent 55%),
          radial-gradient(circle at 20% 30%, rgba(106, 47, 204, ${baseIntensity * 0.5}) 0%, transparent 45%),
          linear-gradient(135deg, rgba(248, 250, 252, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)
        `,
        overlays: [
          { x: '50%', y: '80%', color: 'rgba(139, 92, 246, 0.02)' },
          { x: '80%', y: '50%', color: 'rgba(247, 208, 71, 0.02)' }
        ]
      }
    };

    return configs[variant as ConfigKey] || configs.default;
  };

  const config = getBackgroundConfig(variant, isMobile);

  // Animation variants for different screen sizes
  const animationVariants = {
    desktop: {
      background: [
        config.background,
        config.background.replace(/20%/g, '25%').replace(/80%/g, '75%').replace(/30%/g, '35%').replace(/70%/g, '65%'),
        config.background.replace(/25%/g, '22%').replace(/75%/g, '78%').replace(/35%/g, '32%').replace(/65%/g, '68%'),
        config.background
      ]
    },
    mobile: {
      background: [
        config.background,
        config.background.replace(/20%/g, '23%').replace(/80%/g, '77%'),
        config.background
      ]
    }
  };

  const currentVariant = isMobile ? animationVariants.mobile : animationVariants.desktop;
  const animationDuration = isMobile ? 25 : 20;

  return (
    <>
      {/* Main Animated Background */}
      <motion.div 
        className={`fixed inset-0 -z-10 ${className}`}
        style={{ background: config.background }}
        animate={currentVariant}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse"
        }}
      />
      
      {/* Additional Floating Overlays */}
      {config.overlays.map((overlay: OverlayConfig, index: number) => (
        <motion.div
          key={index}
          className="fixed -z-10 rounded-full blur-3xl"
          style={{
            left: overlay.x,
            top: overlay.y,
            width: isMobile ? '120px' : '200px',
            height: isMobile ? '120px' : '200px',
            background: overlay.color,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [-10, 10, -10],
            y: [-10, 10, -10]
          }}
          transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2
          }}
        />
      ))}

      {/* Subtle Mesh Overlay for Texture */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.4) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(247, 208, 71, 0.3) 1px, transparent 0)
          `,
          backgroundSize: isMobile ? '45px 45px, 70px 70px' : '70px 70px, 90px 90px',
          backgroundPosition: '0 0, 35px 35px'
        }}
      />
      
      {/* Additional Base Layer for Better Visibility */}
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at top, rgba(139, 92, 246, 0.03) 0%, transparent 60%),
            radial-gradient(ellipse at bottom, rgba(247, 208, 71, 0.03) 0%, transparent 60%)
          `
        }}
      />
    </>
  );
};

export default AnimatedBackground;