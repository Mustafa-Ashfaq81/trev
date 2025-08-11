import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({
  particleCount = 50,
  className = '',
  colors = ['#803eef', '#f7d047', '#6a2fcc', '#f3e8ff'],
  minSize = 2,
  maxSize = 6,
  speed = 0.5,
}) => {
  // Reduce particle count on mobile for better performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedParticleCount = isMobile ? Math.floor(particleCount * 0.6) : particleCount;
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize particles
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Create initial particles
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const initialParticles: Particle[] = [];
    
    for (let i = 0; i < adjustedParticleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        opacity: Math.random() * 0.6 + 0.2,
        life: Math.random() * 1000 + 500,
      });
    }
    
    setParticles(initialParticles);
  }, [dimensions, adjustedParticleCount, colors, minSize, maxSize, speed]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.speedX;
          let newY = particle.y + particle.speedY;
          let newSpeedX = particle.speedX;
          let newSpeedY = particle.speedY;

          // Bounce off walls
          if (newX <= 0 || newX >= dimensions.width) {
            newSpeedX = -newSpeedX;
            newX = Math.max(0, Math.min(dimensions.width, newX));
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newSpeedY = -newSpeedY;
            newY = Math.max(0, Math.min(dimensions.height, newY));
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY,
            life: particle.life - 1,
          };
        }).filter(particle => particle.life > 0)
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, [particles.length, dimensions]);

  // Replenish particles
  useEffect(() => {
    if (particles.length < adjustedParticleCount && dimensions.width > 0) {
      const newParticles = [...particles];
      const needed = adjustedParticleCount - particles.length;
      
      for (let i = 0; i < needed; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          color: colors[Math.floor(Math.random() * colors.length)],
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.6 + 0.2,
          life: Math.random() * 1000 + 500,
        });
      }
      
      setParticles(newParticles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [particles.length, adjustedParticleCount, dimensions, colors, minSize, maxSize, speed]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size}px ${particle.color}`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 0.7, particle.opacity],
            y: [0, -10, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;