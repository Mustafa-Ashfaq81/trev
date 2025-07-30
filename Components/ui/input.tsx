import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors duration-200';
  
  const classes = `${baseClasses} ${className}`.trim();
  
  return <input className={classes} {...props} />;
};