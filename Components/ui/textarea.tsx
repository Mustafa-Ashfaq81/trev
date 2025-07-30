import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  const baseClasses = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-purple)] focus:border-transparent transition-colors duration-200 resize-none';
  
  const classes = `${baseClasses} ${className}`.trim();
  
  return <textarea className={classes} {...props} />;
};