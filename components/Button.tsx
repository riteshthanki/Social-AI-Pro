
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  isLoading, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-[0.1em] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] overflow-hidden";
  
  const variants = {
    primary: "bg-indigo-600 text-white shadow-[0_8px_16px_rgba(79,70,229,0.25)] hover:bg-indigo-500 hover:shadow-[0_12px_24px_rgba(79,70,229,0.35)]",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 shadow-lg shadow-black/20",
    outline: "bg-transparent border border-white/10 text-zinc-300 hover:border-white/20 hover:bg-white/5",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : children}
      {variant === 'primary' && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
      )}
    </button>
  );
};
