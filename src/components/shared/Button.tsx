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
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  externalLink = false,
}) => {
  const baseClasses = variant === 'primary' 
    ? 'btn-primary animate-glow' 
    : variant === 'outline' 
      ? 'btn-outline' 
      : 'btn text-white hover:text-accent hover:scale-105';
  
  const classes = `${baseClasses} ${className}`;
  
  const buttonContent = (
    <motion.span 
      className="flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
    <button onClick={onClick} className={classes}>
      {buttonContent}
    </button>
  );
};

export default Button;