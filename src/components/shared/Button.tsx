import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  externalLink?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  externalLink = false,
  type,
  disabled = false,
}) => {
  const baseClasses = 
    variant === 'primary' 
      ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30' 
      : variant === 'outline' 
        ? 'border-2 border-primary hover:bg-primary/20' 
        : 'hover:text-accent';
  
  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
  } ${baseClasses} ${className}`;
  
  const buttonContent = (
    <motion.span 
      className="flex items-center justify-center"
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
  
  if (to) {
    return (
      <Link to={to} className={classes}>
        {buttonContent}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target={externalLink ? '_blank' : undefined} 
        rel={externalLink ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick} 
      className={classes}
      type={type}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;