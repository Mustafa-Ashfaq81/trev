import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'secondary' | 'outline';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  className = '', 
  children 
}) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
  
  const variantClasses = {
    default: 'bg-[var(--primary-purple)] text-white',
    secondary: 'bg-[var(--light-purple)] text-[var(--primary-purple)]',
    outline: 'border border-gray-300 text-gray-700'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  
  return <span className={classes}>{children}</span>;
};