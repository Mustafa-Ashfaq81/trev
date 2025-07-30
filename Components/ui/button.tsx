import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    default: 'bg-[var(--primary-purple)] text-white hover:bg-[var(--dark-purple)] focus:ring-[var(--primary-purple)]',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-[var(--primary-purple)] hover:text-[var(--primary-purple)] focus:ring-[var(--primary-purple)]',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-300'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};