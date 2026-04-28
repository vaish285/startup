import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'text';
  hasArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'default', 
  className = '', 
  hasArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#020420] focus:ring-brand-purple disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    default: "bg-brand-purple hover:bg-[#544dc9] text-white shadow-lg shadow-brand-purple/25 px-6 py-2.5 text-sm",
    outline: "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-sm px-6 py-2.5 text-sm",
    text: "text-brand-purple hover:text-[#7a73ff] px-0 py-0 text-sm font-semibold bg-transparent"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} group`}
      {...props}
    >
      <span>{children}</span>
      {hasArrow && (
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};